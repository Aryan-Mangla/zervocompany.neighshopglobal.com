(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))s(E);new MutationObserver(E=>{for(const _ of E)if(_.type==="childList")for(const X of _.addedNodes)X.tagName==="LINK"&&X.rel==="modulepreload"&&s(X)}).observe(document,{childList:!0,subtree:!0});function w(E){const _={};return E.integrity&&(_.integrity=E.integrity),E.referrerPolicy&&(_.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?_.credentials="include":E.crossOrigin==="anonymous"?_.credentials="omit":_.credentials="same-origin",_}function s(E){if(E.ep)return;E.ep=!0;const _=w(E);fetch(E.href,_)}})();var sr={exports:{}},zn={};var xd;function ng(){if(xd)return zn;xd=1;var b=Symbol.for("react.transitional.element"),A=Symbol.for("react.fragment");function w(s,E,_){var X=null;if(_!==void 0&&(X=""+_),E.key!==void 0&&(X=""+E.key),"key"in E){_={};for(var ue in E)ue!=="key"&&(_[ue]=E[ue])}else _=E;return E=_.ref,{$$typeof:b,type:s,key:X,ref:E!==void 0?E:null,props:_}}return zn.Fragment=A,zn.jsx=w,zn.jsxs=w,zn}var jd;function ig(){return jd||(jd=1,sr.exports=ng()),sr.exports}var c=ig(),fr={exports:{}},q={};var Sd;function cg(){if(Sd)return q;Sd=1;var b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),X=Symbol.for("react.context"),ue=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),z=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),se=Symbol.iterator;function ke(d){return d===null||typeof d!="object"?null:(d=se&&d[se]||d["@@iterator"],typeof d=="function"?d:null)}var He={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Me=Object.assign,yt={};function I(d,N,C){this.props=d,this.context=N,this.refs=yt,this.updater=C||He}I.prototype.isReactComponent={},I.prototype.setState=function(d,N){if(typeof d!="object"&&typeof d!="function"&&d!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,d,N,"setState")},I.prototype.forceUpdate=function(d){this.updater.enqueueForceUpdate(this,d,"forceUpdate")};function pe(){}pe.prototype=I.prototype;function Se(d,N,C){this.props=d,this.context=N,this.refs=yt,this.updater=C||He}var Ge=Se.prototype=new pe;Ge.constructor=Se,Me(Ge,I.prototype),Ge.isPureReactComponent=!0;var Nt=Array.isArray;function Qe(){}var F={H:null,A:null,T:null,S:null},Xe=Object.prototype.hasOwnProperty;function wt(d,N,C){var D=C.ref;return{$$typeof:b,type:d,key:N,ref:D!==void 0?D:null,props:C}}function Ga(d,N){return wt(d.type,N,d.props)}function At(d){return typeof d=="object"&&d!==null&&d.$$typeof===b}function Ze(d){var N={"=":"=0",":":"=2"};return"$"+d.replace(/[=:]/g,function(C){return N[C]})}var Sa=/\/+/g;function _t(d,N){return typeof d=="object"&&d!==null&&d.key!=null?Ze(""+d.key):N.toString(36)}function xt(d){switch(d.status){case"fulfilled":return d.value;case"rejected":throw d.reason;default:switch(typeof d.status=="string"?d.then(Qe,Qe):(d.status="pending",d.then(function(N){d.status==="pending"&&(d.status="fulfilled",d.value=N)},function(N){d.status==="pending"&&(d.status="rejected",d.reason=N)})),d.status){case"fulfilled":return d.value;case"rejected":throw d.reason}}throw d}function x(d,N,C,D,Y){var Z=typeof d;(Z==="undefined"||Z==="boolean")&&(d=null);var ae=!1;if(d===null)ae=!0;else switch(Z){case"bigint":case"string":case"number":ae=!0;break;case"object":switch(d.$$typeof){case b:case A:ae=!0;break;case Q:return ae=d._init,x(ae(d._payload),N,C,D,Y)}}if(ae)return Y=Y(d),ae=D===""?"."+_t(d,0):D,Nt(Y)?(C="",ae!=null&&(C=ae.replace(Sa,"$&/")+"/"),x(Y,N,C,"",function(Ml){return Ml})):Y!=null&&(At(Y)&&(Y=Ga(Y,C+(Y.key==null||d&&d.key===Y.key?"":(""+Y.key).replace(Sa,"$&/")+"/")+ae)),N.push(Y)),1;ae=0;var Ye=D===""?".":D+":";if(Nt(d))for(var ye=0;ye<d.length;ye++)D=d[ye],Z=Ye+_t(D,ye),ae+=x(D,N,C,Z,Y);else if(ye=ke(d),typeof ye=="function")for(d=ye.call(d),ye=0;!(D=d.next()).done;)D=D.value,Z=Ye+_t(D,ye++),ae+=x(D,N,C,Z,Y);else if(Z==="object"){if(typeof d.then=="function")return x(xt(d),N,C,D,Y);throw N=String(d),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(d).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.")}return ae}function M(d,N,C){if(d==null)return d;var D=[],Y=0;return x(d,D,"","",function(Z){return N.call(C,Z,Y++)}),D}function H(d){if(d._status===-1){var N=d._result;N=N(),N.then(function(C){(d._status===0||d._status===-1)&&(d._status=1,d._result=C)},function(C){(d._status===0||d._status===-1)&&(d._status=2,d._result=C)}),d._status===-1&&(d._status=0,d._result=N)}if(d._status===1)return d._result.default;throw d._result}var ie=typeof reportError=="function"?reportError:function(d){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var N=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof d=="object"&&d!==null&&typeof d.message=="string"?String(d.message):String(d),error:d});if(!window.dispatchEvent(N))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",d);return}console.error(d)},fe={map:M,forEach:function(d,N,C){M(d,function(){N.apply(this,arguments)},C)},count:function(d){var N=0;return M(d,function(){N++}),N},toArray:function(d){return M(d,function(N){return N})||[]},only:function(d){if(!At(d))throw Error("React.Children.only expected to receive a single React element child.");return d}};return q.Activity=k,q.Children=fe,q.Component=I,q.Fragment=w,q.Profiler=E,q.PureComponent=Se,q.StrictMode=s,q.Suspense=T,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,q.__COMPILER_RUNTIME={__proto__:null,c:function(d){return F.H.useMemoCache(d)}},q.cache=function(d){return function(){return d.apply(null,arguments)}},q.cacheSignal=function(){return null},q.cloneElement=function(d,N,C){if(d==null)throw Error("The argument must be a React element, but you passed "+d+".");var D=Me({},d.props),Y=d.key;if(N!=null)for(Z in N.key!==void 0&&(Y=""+N.key),N)!Xe.call(N,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&N.ref===void 0||(D[Z]=N[Z]);var Z=arguments.length-2;if(Z===1)D.children=C;else if(1<Z){for(var ae=Array(Z),Ye=0;Ye<Z;Ye++)ae[Ye]=arguments[Ye+2];D.children=ae}return wt(d.type,Y,D)},q.createContext=function(d){return d={$$typeof:X,_currentValue:d,_currentValue2:d,_threadCount:0,Provider:null,Consumer:null},d.Provider=d,d.Consumer={$$typeof:_,_context:d},d},q.createElement=function(d,N,C){var D,Y={},Z=null;if(N!=null)for(D in N.key!==void 0&&(Z=""+N.key),N)Xe.call(N,D)&&D!=="key"&&D!=="__self"&&D!=="__source"&&(Y[D]=N[D]);var ae=arguments.length-2;if(ae===1)Y.children=C;else if(1<ae){for(var Ye=Array(ae),ye=0;ye<ae;ye++)Ye[ye]=arguments[ye+2];Y.children=Ye}if(d&&d.defaultProps)for(D in ae=d.defaultProps,ae)Y[D]===void 0&&(Y[D]=ae[D]);return wt(d,Z,Y)},q.createRef=function(){return{current:null}},q.forwardRef=function(d){return{$$typeof:ue,render:d}},q.isValidElement=At,q.lazy=function(d){return{$$typeof:Q,_payload:{_status:-1,_result:d},_init:H}},q.memo=function(d,N){return{$$typeof:z,type:d,compare:N===void 0?null:N}},q.startTransition=function(d){var N=F.T,C={};F.T=C;try{var D=d(),Y=F.S;Y!==null&&Y(C,D),typeof D=="object"&&D!==null&&typeof D.then=="function"&&D.then(Qe,ie)}catch(Z){ie(Z)}finally{N!==null&&C.types!==null&&(N.types=C.types),F.T=N}},q.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},q.use=function(d){return F.H.use(d)},q.useActionState=function(d,N,C){return F.H.useActionState(d,N,C)},q.useCallback=function(d,N){return F.H.useCallback(d,N)},q.useContext=function(d){return F.H.useContext(d)},q.useDebugValue=function(){},q.useDeferredValue=function(d,N){return F.H.useDeferredValue(d,N)},q.useEffect=function(d,N){return F.H.useEffect(d,N)},q.useEffectEvent=function(d){return F.H.useEffectEvent(d)},q.useId=function(){return F.H.useId()},q.useImperativeHandle=function(d,N,C){return F.H.useImperativeHandle(d,N,C)},q.useInsertionEffect=function(d,N){return F.H.useInsertionEffect(d,N)},q.useLayoutEffect=function(d,N){return F.H.useLayoutEffect(d,N)},q.useMemo=function(d,N){return F.H.useMemo(d,N)},q.useOptimistic=function(d,N){return F.H.useOptimistic(d,N)},q.useReducer=function(d,N,C){return F.H.useReducer(d,N,C)},q.useRef=function(d){return F.H.useRef(d)},q.useState=function(d){return F.H.useState(d)},q.useSyncExternalStore=function(d,N,C){return F.H.useSyncExternalStore(d,N,C)},q.useTransition=function(){return F.H.useTransition()},q.version="19.2.4",q}var zd;function pr(){return zd||(zd=1,fr.exports=cg()),fr.exports}var Ee=pr(),dr={exports:{}},Nn={},mr={exports:{}},hr={};var Nd;function og(){return Nd||(Nd=1,(function(b){function A(x,M){var H=x.length;x.push(M);e:for(;0<H;){var ie=H-1>>>1,fe=x[ie];if(0<E(fe,M))x[ie]=M,x[H]=fe,H=ie;else break e}}function w(x){return x.length===0?null:x[0]}function s(x){if(x.length===0)return null;var M=x[0],H=x.pop();if(H!==M){x[0]=H;e:for(var ie=0,fe=x.length,d=fe>>>1;ie<d;){var N=2*(ie+1)-1,C=x[N],D=N+1,Y=x[D];if(0>E(C,H))D<fe&&0>E(Y,C)?(x[ie]=Y,x[D]=H,ie=D):(x[ie]=C,x[N]=H,ie=N);else if(D<fe&&0>E(Y,H))x[ie]=Y,x[D]=H,ie=D;else break e}}return M}function E(x,M){var H=x.sortIndex-M.sortIndex;return H!==0?H:x.id-M.id}if(b.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var _=performance;b.unstable_now=function(){return _.now()}}else{var X=Date,ue=X.now();b.unstable_now=function(){return X.now()-ue}}var T=[],z=[],Q=1,k=null,se=3,ke=!1,He=!1,Me=!1,yt=!1,I=typeof setTimeout=="function"?setTimeout:null,pe=typeof clearTimeout=="function"?clearTimeout:null,Se=typeof setImmediate<"u"?setImmediate:null;function Ge(x){for(var M=w(z);M!==null;){if(M.callback===null)s(z);else if(M.startTime<=x)s(z),M.sortIndex=M.expirationTime,A(T,M);else break;M=w(z)}}function Nt(x){if(Me=!1,Ge(x),!He)if(w(T)!==null)He=!0,Qe||(Qe=!0,Ze());else{var M=w(z);M!==null&&xt(Nt,M.startTime-x)}}var Qe=!1,F=-1,Xe=5,wt=-1;function Ga(){return yt?!0:!(b.unstable_now()-wt<Xe)}function At(){if(yt=!1,Qe){var x=b.unstable_now();wt=x;var M=!0;try{e:{He=!1,Me&&(Me=!1,pe(F),F=-1),ke=!0;var H=se;try{t:{for(Ge(x),k=w(T);k!==null&&!(k.expirationTime>x&&Ga());){var ie=k.callback;if(typeof ie=="function"){k.callback=null,se=k.priorityLevel;var fe=ie(k.expirationTime<=x);if(x=b.unstable_now(),typeof fe=="function"){k.callback=fe,Ge(x),M=!0;break t}k===w(T)&&s(T),Ge(x)}else s(T);k=w(T)}if(k!==null)M=!0;else{var d=w(z);d!==null&&xt(Nt,d.startTime-x),M=!1}}break e}finally{k=null,se=H,ke=!1}M=void 0}}finally{M?Ze():Qe=!1}}}var Ze;if(typeof Se=="function")Ze=function(){Se(At)};else if(typeof MessageChannel<"u"){var Sa=new MessageChannel,_t=Sa.port2;Sa.port1.onmessage=At,Ze=function(){_t.postMessage(null)}}else Ze=function(){I(At,0)};function xt(x,M){F=I(function(){x(b.unstable_now())},M)}b.unstable_IdlePriority=5,b.unstable_ImmediatePriority=1,b.unstable_LowPriority=4,b.unstable_NormalPriority=3,b.unstable_Profiling=null,b.unstable_UserBlockingPriority=2,b.unstable_cancelCallback=function(x){x.callback=null},b.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Xe=0<x?Math.floor(1e3/x):5},b.unstable_getCurrentPriorityLevel=function(){return se},b.unstable_next=function(x){switch(se){case 1:case 2:case 3:var M=3;break;default:M=se}var H=se;se=M;try{return x()}finally{se=H}},b.unstable_requestPaint=function(){yt=!0},b.unstable_runWithPriority=function(x,M){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var H=se;se=x;try{return M()}finally{se=H}},b.unstable_scheduleCallback=function(x,M,H){var ie=b.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ie+H:ie):H=ie,x){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=H+fe,x={id:Q++,callback:M,priorityLevel:x,startTime:H,expirationTime:fe,sortIndex:-1},H>ie?(x.sortIndex=H,A(z,x),w(T)===null&&x===w(z)&&(Me?(pe(F),F=-1):Me=!0,xt(Nt,H-ie))):(x.sortIndex=fe,A(T,x),He||ke||(He=!0,Qe||(Qe=!0,Ze()))),x},b.unstable_shouldYield=Ga,b.unstable_wrapCallback=function(x){var M=se;return function(){var H=se;se=M;try{return x.apply(this,arguments)}finally{se=H}}}})(hr)),hr}var wd;function rg(){return wd||(wd=1,mr.exports=og()),mr.exports}var gr={exports:{}},qe={};var Ad;function ug(){if(Ad)return qe;Ad=1;var b=pr();function A(T){var z="https://react.dev/errors/"+T;if(1<arguments.length){z+="?args[]="+encodeURIComponent(arguments[1]);for(var Q=2;Q<arguments.length;Q++)z+="&args[]="+encodeURIComponent(arguments[Q])}return"Minified React error #"+T+"; visit "+z+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function w(){}var s={d:{f:w,r:function(){throw Error(A(522))},D:w,C:w,L:w,m:w,X:w,S:w,M:w},p:0,findDOMNode:null},E=Symbol.for("react.portal");function _(T,z,Q){var k=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:k==null?null:""+k,children:T,containerInfo:z,implementation:Q}}var X=b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ue(T,z){if(T==="font")return"";if(typeof z=="string")return z==="use-credentials"?z:""}return qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,qe.createPortal=function(T,z){var Q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!z||z.nodeType!==1&&z.nodeType!==9&&z.nodeType!==11)throw Error(A(299));return _(T,z,null,Q)},qe.flushSync=function(T){var z=X.T,Q=s.p;try{if(X.T=null,s.p=2,T)return T()}finally{X.T=z,s.p=Q,s.d.f()}},qe.preconnect=function(T,z){typeof T=="string"&&(z?(z=z.crossOrigin,z=typeof z=="string"?z==="use-credentials"?z:"":void 0):z=null,s.d.C(T,z))},qe.prefetchDNS=function(T){typeof T=="string"&&s.d.D(T)},qe.preinit=function(T,z){if(typeof T=="string"&&z&&typeof z.as=="string"){var Q=z.as,k=ue(Q,z.crossOrigin),se=typeof z.integrity=="string"?z.integrity:void 0,ke=typeof z.fetchPriority=="string"?z.fetchPriority:void 0;Q==="style"?s.d.S(T,typeof z.precedence=="string"?z.precedence:void 0,{crossOrigin:k,integrity:se,fetchPriority:ke}):Q==="script"&&s.d.X(T,{crossOrigin:k,integrity:se,fetchPriority:ke,nonce:typeof z.nonce=="string"?z.nonce:void 0})}},qe.preinitModule=function(T,z){if(typeof T=="string")if(typeof z=="object"&&z!==null){if(z.as==null||z.as==="script"){var Q=ue(z.as,z.crossOrigin);s.d.M(T,{crossOrigin:Q,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0})}}else z==null&&s.d.M(T)},qe.preload=function(T,z){if(typeof T=="string"&&typeof z=="object"&&z!==null&&typeof z.as=="string"){var Q=z.as,k=ue(Q,z.crossOrigin);s.d.L(T,Q,{crossOrigin:k,integrity:typeof z.integrity=="string"?z.integrity:void 0,nonce:typeof z.nonce=="string"?z.nonce:void 0,type:typeof z.type=="string"?z.type:void 0,fetchPriority:typeof z.fetchPriority=="string"?z.fetchPriority:void 0,referrerPolicy:typeof z.referrerPolicy=="string"?z.referrerPolicy:void 0,imageSrcSet:typeof z.imageSrcSet=="string"?z.imageSrcSet:void 0,imageSizes:typeof z.imageSizes=="string"?z.imageSizes:void 0,media:typeof z.media=="string"?z.media:void 0})}},qe.preloadModule=function(T,z){if(typeof T=="string")if(z){var Q=ue(z.as,z.crossOrigin);s.d.m(T,{as:typeof z.as=="string"&&z.as!=="script"?z.as:void 0,crossOrigin:Q,integrity:typeof z.integrity=="string"?z.integrity:void 0})}else s.d.m(T)},qe.requestFormReset=function(T){s.d.r(T)},qe.unstable_batchedUpdates=function(T,z){return T(z)},qe.useFormState=function(T,z,Q){return X.H.useFormState(T,z,Q)},qe.useFormStatus=function(){return X.H.useHostTransitionStatus()},qe.version="19.2.4",qe}var Ed;function sg(){if(Ed)return gr.exports;Ed=1;function b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b)}catch(A){console.error(A)}}return b(),gr.exports=ug(),gr.exports}var Td;function fg(){if(Td)return Nn;Td=1;var b=rg(),A=pr(),w=sg();function s(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function X(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ue(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(_(e)!==e)throw Error(s(188))}function z(e){var t=e.alternate;if(!t){if(t=_(e),t===null)throw Error(s(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return T(n),e;if(i===l)return T(n),t;i=i.sibling}throw Error(s(188))}if(a.return!==l.return)a=n,l=i;else{for(var o=!1,r=n.child;r;){if(r===a){o=!0,a=n,l=i;break}if(r===l){o=!0,l=n,a=i;break}r=r.sibling}if(!o){for(r=i.child;r;){if(r===a){o=!0,a=i,l=n;break}if(r===l){o=!0,l=i,a=n;break}r=r.sibling}if(!o)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:t}function Q(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Q(e),t!==null)return t;e=e.sibling}return null}var k=Object.assign,se=Symbol.for("react.element"),ke=Symbol.for("react.transitional.element"),He=Symbol.for("react.portal"),Me=Symbol.for("react.fragment"),yt=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),pe=Symbol.for("react.consumer"),Se=Symbol.for("react.context"),Ge=Symbol.for("react.forward_ref"),Nt=Symbol.for("react.suspense"),Qe=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Xe=Symbol.for("react.lazy"),wt=Symbol.for("react.activity"),Ga=Symbol.for("react.memo_cache_sentinel"),At=Symbol.iterator;function Ze(e){return e===null||typeof e!="object"?null:(e=At&&e[At]||e["@@iterator"],typeof e=="function"?e:null)}var Sa=Symbol.for("react.client.reference");function _t(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Me:return"Fragment";case I:return"Profiler";case yt:return"StrictMode";case Nt:return"Suspense";case Qe:return"SuspenseList";case wt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case He:return"Portal";case Se:return e.displayName||"Context";case pe:return(e._context.displayName||"Context")+".Consumer";case Ge:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return t=e.displayName||null,t!==null?t:_t(e.type)||"Memo";case Xe:t=e._payload,e=e._init;try{return _t(e(t))}catch{}}return null}var xt=Array.isArray,x=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=w.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},ie=[],fe=-1;function d(e){return{current:e}}function N(e){0>fe||(e.current=ie[fe],ie[fe]=null,fe--)}function C(e,t){fe++,ie[fe]=e.current,e.current=t}var D=d(null),Y=d(null),Z=d(null),ae=d(null);function Ye(e,t){switch(C(Z,t),C(Y,e),C(D,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Qf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Qf(t),e=Xf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}N(D),C(D,e)}function ye(){N(D),N(Y),N(Z)}function Ml(e){e.memoizedState!==null&&C(ae,e);var t=D.current,a=Xf(t,e.type);t!==a&&(C(Y,e),C(D,a))}function En(e){Y.current===e&&(N(D),N(Y)),ae.current===e&&(N(ae),yn._currentValue=H)}var Zi,br;function za(e){if(Zi===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Zi=t&&t[1]||"",br=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zi+e+br}var Vi=!1;function Ki(e,t){if(!e||Vi)return"";Vi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(v){var p=v}Reflect.construct(e,[],S)}else{try{S.call()}catch(v){p=v}e.call(S.prototype)}}else{try{throw Error()}catch(v){p=v}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(v){if(v&&p&&typeof v.stack=="string")return[v.stack,p.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),o=i[0],r=i[1];if(o&&r){var u=o.split(`
`),g=r.split(`
`);for(n=l=0;l<u.length&&!u[l].includes("DetermineComponentFrameRoot");)l++;for(;n<g.length&&!g[n].includes("DetermineComponentFrameRoot");)n++;if(l===u.length||n===g.length)for(l=u.length-1,n=g.length-1;1<=l&&0<=n&&u[l]!==g[n];)n--;for(;1<=l&&0<=n;l--,n--)if(u[l]!==g[n]){if(l!==1||n!==1)do if(l--,n--,0>n||u[l]!==g[n]){var y=`
`+u[l].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=l&&0<=n);break}}}finally{Vi=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?za(a):""}function Ud(e,t){switch(e.tag){case 26:case 27:case 5:return za(e.type);case 16:return za("Lazy");case 13:return e.child!==t&&t!==null?za("Suspense Fallback"):za("Suspense");case 19:return za("SuspenseList");case 0:case 15:return Ki(e.type,!1);case 11:return Ki(e.type.render,!1);case 1:return Ki(e.type,!0);case 31:return za("Activity");default:return""}}function yr(e){try{var t="",a=null;do t+=Ud(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ji=Object.prototype.hasOwnProperty,Wi=b.unstable_scheduleCallback,Fi=b.unstable_cancelCallback,Bd=b.unstable_shouldYield,kd=b.unstable_requestPaint,Pe=b.unstable_now,Hd=b.unstable_getCurrentPriorityLevel,xr=b.unstable_ImmediatePriority,jr=b.unstable_UserBlockingPriority,Tn=b.unstable_NormalPriority,qd=b.unstable_LowPriority,Sr=b.unstable_IdlePriority,Yd=b.log,Ld=b.unstable_setDisableYieldValue,Cl=null,et=null;function $t(e){if(typeof Yd=="function"&&Ld(e),et&&typeof et.setStrictMode=="function")try{et.setStrictMode(Cl,e)}catch{}}var tt=Math.clz32?Math.clz32:Xd,Gd=Math.log,Qd=Math.LN2;function Xd(e){return e>>>=0,e===0?32:31-(Gd(e)/Qd|0)|0}var Mn=256,Cn=262144,On=4194304;function Na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _n(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var r=l&134217727;return r!==0?(l=r&~i,l!==0?n=Na(l):(o&=r,o!==0?n=Na(o):a||(a=r&~e,a!==0&&(n=Na(a))))):(r=l&~i,r!==0?n=Na(r):o!==0?n=Na(o):a||(a=l&~e,a!==0&&(n=Na(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Ol(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Zd(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zr(){var e=On;return On<<=1,(On&62914560)===0&&(On=4194304),e}function $i(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Vd(e,t,a,l,n,i){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var r=e.entanglements,u=e.expirationTimes,g=e.hiddenUpdates;for(a=o&~a;0<a;){var y=31-tt(a),S=1<<y;r[y]=0,u[y]=-1;var p=g[y];if(p!==null)for(g[y]=null,y=0;y<p.length;y++){var v=p[y];v!==null&&(v.lane&=-536870913)}a&=~S}l!==0&&Nr(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(o&~t))}function Nr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-tt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function wr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-tt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function Ar(e,t){var a=t&-t;return a=(a&42)!==0?1:Ii(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ii(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Er(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:md(e.type))}function Tr(e,t){var a=M.p;try{return M.p=e,t()}finally{M.p=a}}var It=Math.random().toString(36).slice(2),_e="__reactFiber$"+It,Ve="__reactProps$"+It,Qa="__reactContainer$"+It,ec="__reactEvents$"+It,Kd="__reactListeners$"+It,Jd="__reactHandles$"+It,Mr="__reactResources$"+It,Dl="__reactMarker$"+It;function tc(e){delete e[_e],delete e[Ve],delete e[ec],delete e[Kd],delete e[Jd]}function Xa(e){var t=e[_e];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Qa]||a[_e]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=$f(e);e!==null;){if(a=e[_e])return a;e=$f(e)}return t}e=a,a=e.parentNode}return null}function Za(e){if(e=e[_e]||e[Qa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Rl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function Va(e){var t=e[Mr];return t||(t=e[Mr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ce(e){e[Dl]=!0}var Cr=new Set,Or={};function wa(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Or[e]=t,e=0;e<t.length;e++)Cr.add(t[e])}var Wd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_r={},Dr={};function Fd(e){return Ji.call(Dr,e)?!0:Ji.call(_r,e)?!1:Wd.test(e)?Dr[e]=!0:(_r[e]=!0,!1)}function Dn(e,t,a){if(Fd(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Rn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Dt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function $d(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ac(e){if(!e._valueTracker){var t=Rr(e)?"checked":"value";e._valueTracker=$d(e,t,""+e[t])}}function Ur(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Rr(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Un(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Id=/[\n"\\]/g;function st(e){return e.replace(Id,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function lc(e,t,a,l,n,i,o,r){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?nc(e,o,ut(t)):a!=null?nc(e,o,ut(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+ut(r):e.removeAttribute("name")}function Br(e,t,a,l,n,i,o,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){ac(e);return}a=a!=null?""+ut(a):"",t=t!=null?""+ut(t):a,r||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=r?e.checked:!!l,e.defaultChecked=!!l,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),ac(e)}function nc(e,t,a){t==="number"&&Un(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ja(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+ut(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function kr(e,t,a){if(t!=null&&(t=""+ut(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ut(a):""}function Hr(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(s(92));if(xt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=ut(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),ac(e)}function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Pd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qr(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Pd.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Yr(e,t,a){if(t!=null&&typeof t!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&qr(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&qr(e,i,t[i])}function ic(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var em=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),tm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bn(e){return tm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Rt(){}var cc=null;function oc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,$a=null;function Lr(e){var t=Za(e);if(t&&(e=t.stateNode)){var a=e[Ve]||null;e:switch(e=t.stateNode,t.type){case"input":if(lc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+st(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Ve]||null;if(!n)throw Error(s(90));lc(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Ur(l)}break e;case"textarea":kr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ja(e,!!a.multiple,t,!1)}}}var rc=!1;function Gr(e,t,a){if(rc)return e(t,a);rc=!0;try{var l=e(t);return l}finally{if(rc=!1,(Fa!==null||$a!==null)&&(zi(),Fa&&(t=Fa,e=$a,$a=Fa=null,Lr(t),e)))for(t=0;t<e.length;t++)Lr(e[t])}}function Ul(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ve]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,t,typeof a));return a}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uc=!1;if(Ut)try{var Bl={};Object.defineProperty(Bl,"passive",{get:function(){uc=!0}}),window.addEventListener("test",Bl,Bl),window.removeEventListener("test",Bl,Bl)}catch{uc=!1}var Pt=null,sc=null,kn=null;function Qr(){if(kn)return kn;var e,t=sc,a=t.length,l,n="value"in Pt?Pt.value:Pt.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(l=1;l<=o&&t[a-l]===n[i-l];l++);return kn=n.slice(e,1<l?1-l:void 0)}function Hn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function qn(){return!0}function Xr(){return!1}function Ke(e){function t(a,l,n,i,o){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(a=e[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qn:Xr,this.isPropagationStopped=Xr,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),t}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yn=Ke(Aa),kl=k({},Aa,{view:0,detail:0}),am=Ke(kl),fc,dc,Hl,Ln=k({},kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hl&&(Hl&&e.type==="mousemove"?(fc=e.screenX-Hl.screenX,dc=e.screenY-Hl.screenY):dc=fc=0,Hl=e),fc)},movementY:function(e){return"movementY"in e?e.movementY:dc}}),Zr=Ke(Ln),lm=k({},Ln,{dataTransfer:0}),nm=Ke(lm),im=k({},kl,{relatedTarget:0}),mc=Ke(im),cm=k({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),om=Ke(cm),rm=k({},Aa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),um=Ke(rm),sm=k({},Aa,{data:0}),Vr=Ke(sm),fm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mm[e])?!!t[e]:!1}function hc(){return hm}var gm=k({},kl,{key:function(e){if(e.key){var t=fm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Hn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hc,charCode:function(e){return e.type==="keypress"?Hn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Hn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),pm=Ke(gm),vm=k({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kr=Ke(vm),bm=k({},kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hc}),ym=Ke(bm),xm=k({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),jm=Ke(xm),Sm=k({},Ln,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zm=Ke(Sm),Nm=k({},Aa,{newState:0,oldState:0}),wm=Ke(Nm),Am=[9,13,27,32],gc=Ut&&"CompositionEvent"in window,ql=null;Ut&&"documentMode"in document&&(ql=document.documentMode);var Em=Ut&&"TextEvent"in window&&!ql,Jr=Ut&&(!gc||ql&&8<ql&&11>=ql),Wr=" ",Fr=!1;function $r(e,t){switch(e){case"keyup":return Am.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ir(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function Tm(e,t){switch(e){case"compositionend":return Ir(t);case"keypress":return t.which!==32?null:(Fr=!0,Wr);case"textInput":return e=t.data,e===Wr&&Fr?null:e;default:return null}}function Mm(e,t){if(Ia)return e==="compositionend"||!gc&&$r(e,t)?(e=Qr(),kn=sc=Pt=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jr&&t.locale!=="ko"?null:t.data;default:return null}}var Cm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Cm[e.type]:t==="textarea"}function eu(e,t,a,l){Fa?$a?$a.push(l):$a=[l]:Fa=l,t=Ci(t,"onChange"),0<t.length&&(a=new Yn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Yl=null,Ll=null;function Om(e){kf(e,0)}function Gn(e){var t=Rl(e);if(Ur(t))return e}function tu(e,t){if(e==="change")return t}var au=!1;if(Ut){var pc;if(Ut){var vc="oninput"in document;if(!vc){var lu=document.createElement("div");lu.setAttribute("oninput","return;"),vc=typeof lu.oninput=="function"}pc=vc}else pc=!1;au=pc&&(!document.documentMode||9<document.documentMode)}function nu(){Yl&&(Yl.detachEvent("onpropertychange",iu),Ll=Yl=null)}function iu(e){if(e.propertyName==="value"&&Gn(Ll)){var t=[];eu(t,Ll,e,oc(e)),Gr(Om,t)}}function _m(e,t,a){e==="focusin"?(nu(),Yl=t,Ll=a,Yl.attachEvent("onpropertychange",iu)):e==="focusout"&&nu()}function Dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gn(Ll)}function Rm(e,t){if(e==="click")return Gn(t)}function Um(e,t){if(e==="input"||e==="change")return Gn(t)}function Bm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:Bm;function Gl(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!Ji.call(t,n)||!at(e[n],t[n]))return!1}return!0}function cu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var a=cu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=cu(a)}}function ru(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ru(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Un(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Un(e.document)}return t}function bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var km=Ut&&"documentMode"in document&&11>=document.documentMode,Pa=null,yc=null,Ql=null,xc=!1;function su(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xc||Pa==null||Pa!==Un(l)||(l=Pa,"selectionStart"in l&&bc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ql&&Gl(Ql,l)||(Ql=l,l=Ci(yc,"onSelect"),0<l.length&&(t=new Yn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Pa)))}function Ea(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var el={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},jc={},fu={};Ut&&(fu=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function Ta(e){if(jc[e])return jc[e];if(!el[e])return e;var t=el[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in fu)return jc[e]=t[a];return e}var du=Ta("animationend"),mu=Ta("animationiteration"),hu=Ta("animationstart"),Hm=Ta("transitionrun"),qm=Ta("transitionstart"),Ym=Ta("transitioncancel"),gu=Ta("transitionend"),pu=new Map,Sc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sc.push("scrollEnd");function jt(e,t){pu.set(e,t),wa(t,[e])}var Qn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ft=[],tl=0,zc=0;function Xn(){for(var e=tl,t=zc=tl=0;t<e;){var a=ft[t];ft[t++]=null;var l=ft[t];ft[t++]=null;var n=ft[t];ft[t++]=null;var i=ft[t];if(ft[t++]=null,l!==null&&n!==null){var o=l.pending;o===null?n.next=n:(n.next=o.next,o.next=n),l.pending=n}i!==0&&vu(a,n,i)}}function Zn(e,t,a,l){ft[tl++]=e,ft[tl++]=t,ft[tl++]=a,ft[tl++]=l,zc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Nc(e,t,a,l){return Zn(e,t,a,l),Vn(e)}function Ma(e,t){return Zn(e,null,null,t),Vn(e)}function vu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-tt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function Vn(e){if(50<dn)throw dn=0,Ro=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var al={};function Lm(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,a,l){return new Lm(e,t,a,l)}function wc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bt(e,t){var a=e.alternate;return a===null?(a=lt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function bu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Kn(e,t,a,l,n,i){var o=0;if(l=e,typeof e=="function")wc(e)&&(o=1);else if(typeof e=="string")o=Vh(e,a,D.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case wt:return e=lt(31,a,t,n),e.elementType=wt,e.lanes=i,e;case Me:return Ca(a.children,n,i,t);case yt:o=8,n|=24;break;case I:return e=lt(12,a,t,n|2),e.elementType=I,e.lanes=i,e;case Nt:return e=lt(13,a,t,n),e.elementType=Nt,e.lanes=i,e;case Qe:return e=lt(19,a,t,n),e.elementType=Qe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Se:o=10;break e;case pe:o=9;break e;case Ge:o=11;break e;case F:o=14;break e;case Xe:o=16,l=null;break e}o=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return t=lt(o,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Ca(e,t,a,l){return e=lt(7,e,l,t),e.lanes=a,e}function Ac(e,t,a){return e=lt(6,e,null,t),e.lanes=a,e}function yu(e){var t=lt(18,null,null,0);return t.stateNode=e,t}function Ec(e,t,a){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var xu=new WeakMap;function dt(e,t){if(typeof e=="object"&&e!==null){var a=xu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:yr(t)},xu.set(e,t),t)}return{value:e,source:t,stack:yr(t)}}var ll=[],nl=0,Jn=null,Xl=0,mt=[],ht=0,ea=null,Et=1,Tt="";function kt(e,t){ll[nl++]=Xl,ll[nl++]=Jn,Jn=e,Xl=t}function ju(e,t,a){mt[ht++]=Et,mt[ht++]=Tt,mt[ht++]=ea,ea=e;var l=Et;e=Tt;var n=32-tt(l)-1;l&=~(1<<n),a+=1;var i=32-tt(t)+n;if(30<i){var o=n-n%5;i=(l&(1<<o)-1).toString(32),l>>=o,n-=o,Et=1<<32-tt(t)+n|a<<n|l,Tt=i+e}else Et=1<<i|a<<n|l,Tt=e}function Tc(e){e.return!==null&&(kt(e,1),ju(e,1,0))}function Mc(e){for(;e===Jn;)Jn=ll[--nl],ll[nl]=null,Xl=ll[--nl],ll[nl]=null;for(;e===ea;)ea=mt[--ht],mt[ht]=null,Tt=mt[--ht],mt[ht]=null,Et=mt[--ht],mt[ht]=null}function Su(e,t){mt[ht++]=Et,mt[ht++]=Tt,mt[ht++]=ea,Et=t.id,Tt=t.overflow,ea=e}var De=null,me=null,$=!1,ta=null,gt=!1,Cc=Error(s(519));function aa(e){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zl(dt(t,e)),Cc}function zu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[_e]=e,t[Ve]=l,a){case"dialog":K("cancel",t),K("close",t);break;case"iframe":case"object":case"embed":K("load",t);break;case"video":case"audio":for(a=0;a<hn.length;a++)K(hn[a],t);break;case"source":K("error",t);break;case"img":case"image":case"link":K("error",t),K("load",t);break;case"details":K("toggle",t);break;case"input":K("invalid",t),Br(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":K("invalid",t);break;case"textarea":K("invalid",t),Hr(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Lf(t.textContent,a)?(l.popover!=null&&(K("beforetoggle",t),K("toggle",t)),l.onScroll!=null&&K("scroll",t),l.onScrollEnd!=null&&K("scrollend",t),l.onClick!=null&&(t.onclick=Rt),t=!0):t=!1,t||aa(e,!0)}function Nu(e){for(De=e.return;De;)switch(De.tag){case 5:case 31:case 13:gt=!1;return;case 27:case 3:gt=!0;return;default:De=De.return}}function il(e){if(e!==De)return!1;if(!$)return Nu(e),$=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Wo(e.type,e.memoizedProps)),a=!a),a&&me&&aa(e),Nu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));me=Ff(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));me=Ff(e)}else t===27?(t=me,pa(e.type)?(e=er,er=null,me=e):me=t):me=De?vt(e.stateNode.nextSibling):null;return!0}function Oa(){me=De=null,$=!1}function Oc(){var e=ta;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),ta=null),e}function Zl(e){ta===null?ta=[e]:ta.push(e)}var _c=d(null),_a=null,Ht=null;function la(e,t,a){C(_c,t._currentValue),t._currentValue=a}function qt(e){e._currentValue=_c.current,N(_c)}function Dc(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Rc(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var o=n.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=n;for(var u=0;u<t.length;u++)if(r.context===t[u]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),Dc(i.return,a,e),l||(o=null);break e}i=r.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(s(341));o.lanes|=a,i=o.alternate,i!==null&&(i.lanes|=a),Dc(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function cl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var r=n.type;at(n.pendingProps.value,o.value)||(e!==null?e.push(r):e=[r])}}else if(n===ae.current){if(o=n.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(yn):e=[yn])}n=n.return}e!==null&&Rc(t,e,a,l),t.flags|=262144}function Wn(e){for(e=e.firstContext;e!==null;){if(!at(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Da(e){_a=e,Ht=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Re(e){return wu(_a,e)}function Fn(e,t){return _a===null&&Da(e),wu(e,t)}function wu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ht===null){if(e===null)throw Error(s(308));Ht=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ht=Ht.next=t;return a}var Gm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Qm=b.unstable_scheduleCallback,Xm=b.unstable_NormalPriority,ze={$$typeof:Se,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Uc(){return{controller:new Gm,data:new Map,refCount:0}}function Vl(e){e.refCount--,e.refCount===0&&Qm(Xm,function(){e.controller.abort()})}var Kl=null,Bc=0,ol=0,rl=null;function Zm(e,t){if(Kl===null){var a=Kl=[];Bc=0,ol=Yo(),rl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Bc++,t.then(Au,Au),t}function Au(){if(--Bc===0&&Kl!==null){rl!==null&&(rl.status="fulfilled");var e=Kl;Kl=null,ol=0,rl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Vm(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Eu=x.S;x.S=function(e,t){ff=Pe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Zm(e,t),Eu!==null&&Eu(e,t)};var Ra=d(null);function kc(){var e=Ra.current;return e!==null?e:de.pooledCache}function $n(e,t){t===null?C(Ra,Ra.current):C(Ra,t.pool)}function Tu(){var e=kc();return e===null?null:{parent:ze._currentValue,pool:e}}var ul=Error(s(460)),Hc=Error(s(474)),In=Error(s(542)),Pn={then:function(){}};function Mu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Cu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Rt,Rt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_u(e),e;default:if(typeof t.status=="string")t.then(Rt,Rt);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_u(e),e}throw Ba=t,ul}}function Ua(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ba=a,ul):a}}var Ba=null;function Ou(){if(Ba===null)throw Error(s(459));var e=Ba;return Ba=null,e}function _u(e){if(e===ul||e===In)throw Error(s(483))}var sl=null,Jl=0;function ei(e){var t=Jl;return Jl+=1,sl===null&&(sl=[]),Cu(sl,e,t)}function Wl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ti(e,t){throw t.$$typeof===se?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Du(e){function t(m,f){if(e){var h=m.deletions;h===null?(m.deletions=[f],m.flags|=16):h.push(f)}}function a(m,f){if(!e)return null;for(;f!==null;)t(m,f),f=f.sibling;return null}function l(m){for(var f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function n(m,f){return m=Bt(m,f),m.index=0,m.sibling=null,m}function i(m,f,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<f?(m.flags|=67108866,f):h):(m.flags|=67108866,f)):(m.flags|=1048576,f)}function o(m){return e&&m.alternate===null&&(m.flags|=67108866),m}function r(m,f,h,j){return f===null||f.tag!==6?(f=Ac(h,m.mode,j),f.return=m,f):(f=n(f,h),f.return=m,f)}function u(m,f,h,j){var U=h.type;return U===Me?y(m,f,h.props.children,j,h.key):f!==null&&(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Xe&&Ua(U)===f.type)?(f=n(f,h.props),Wl(f,h),f.return=m,f):(f=Kn(h.type,h.key,h.props,null,m.mode,j),Wl(f,h),f.return=m,f)}function g(m,f,h,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Ec(h,m.mode,j),f.return=m,f):(f=n(f,h.children||[]),f.return=m,f)}function y(m,f,h,j,U){return f===null||f.tag!==7?(f=Ca(h,m.mode,j,U),f.return=m,f):(f=n(f,h),f.return=m,f)}function S(m,f,h){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=Ac(""+f,m.mode,h),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ke:return h=Kn(f.type,f.key,f.props,null,m.mode,h),Wl(h,f),h.return=m,h;case He:return f=Ec(f,m.mode,h),f.return=m,f;case Xe:return f=Ua(f),S(m,f,h)}if(xt(f)||Ze(f))return f=Ca(f,m.mode,h,null),f.return=m,f;if(typeof f.then=="function")return S(m,ei(f),h);if(f.$$typeof===Se)return S(m,Fn(m,f),h);ti(m,f)}return null}function p(m,f,h,j){var U=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return U!==null?null:r(m,f,""+h,j);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ke:return h.key===U?u(m,f,h,j):null;case He:return h.key===U?g(m,f,h,j):null;case Xe:return h=Ua(h),p(m,f,h,j)}if(xt(h)||Ze(h))return U!==null?null:y(m,f,h,j,null);if(typeof h.then=="function")return p(m,f,ei(h),j);if(h.$$typeof===Se)return p(m,f,Fn(m,h),j);ti(m,h)}return null}function v(m,f,h,j,U){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return m=m.get(h)||null,r(f,m,""+j,U);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ke:return m=m.get(j.key===null?h:j.key)||null,u(f,m,j,U);case He:return m=m.get(j.key===null?h:j.key)||null,g(f,m,j,U);case Xe:return j=Ua(j),v(m,f,h,j,U)}if(xt(j)||Ze(j))return m=m.get(h)||null,y(f,m,j,U,null);if(typeof j.then=="function")return v(m,f,h,ei(j),U);if(j.$$typeof===Se)return v(m,f,h,Fn(f,j),U);ti(f,j)}return null}function O(m,f,h,j){for(var U=null,P=null,R=f,G=f=0,W=null;R!==null&&G<h.length;G++){R.index>G?(W=R,R=null):W=R.sibling;var ee=p(m,R,h[G],j);if(ee===null){R===null&&(R=W);break}e&&R&&ee.alternate===null&&t(m,R),f=i(ee,f,G),P===null?U=ee:P.sibling=ee,P=ee,R=W}if(G===h.length)return a(m,R),$&&kt(m,G),U;if(R===null){for(;G<h.length;G++)R=S(m,h[G],j),R!==null&&(f=i(R,f,G),P===null?U=R:P.sibling=R,P=R);return $&&kt(m,G),U}for(R=l(R);G<h.length;G++)W=v(R,m,G,h[G],j),W!==null&&(e&&W.alternate!==null&&R.delete(W.key===null?G:W.key),f=i(W,f,G),P===null?U=W:P.sibling=W,P=W);return e&&R.forEach(function(ja){return t(m,ja)}),$&&kt(m,G),U}function B(m,f,h,j){if(h==null)throw Error(s(151));for(var U=null,P=null,R=f,G=f=0,W=null,ee=h.next();R!==null&&!ee.done;G++,ee=h.next()){R.index>G?(W=R,R=null):W=R.sibling;var ja=p(m,R,ee.value,j);if(ja===null){R===null&&(R=W);break}e&&R&&ja.alternate===null&&t(m,R),f=i(ja,f,G),P===null?U=ja:P.sibling=ja,P=ja,R=W}if(ee.done)return a(m,R),$&&kt(m,G),U;if(R===null){for(;!ee.done;G++,ee=h.next())ee=S(m,ee.value,j),ee!==null&&(f=i(ee,f,G),P===null?U=ee:P.sibling=ee,P=ee);return $&&kt(m,G),U}for(R=l(R);!ee.done;G++,ee=h.next())ee=v(R,m,G,ee.value,j),ee!==null&&(e&&ee.alternate!==null&&R.delete(ee.key===null?G:ee.key),f=i(ee,f,G),P===null?U=ee:P.sibling=ee,P=ee);return e&&R.forEach(function(lg){return t(m,lg)}),$&&kt(m,G),U}function re(m,f,h,j){if(typeof h=="object"&&h!==null&&h.type===Me&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ke:e:{for(var U=h.key;f!==null;){if(f.key===U){if(U=h.type,U===Me){if(f.tag===7){a(m,f.sibling),j=n(f,h.props.children),j.return=m,m=j;break e}}else if(f.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Xe&&Ua(U)===f.type){a(m,f.sibling),j=n(f,h.props),Wl(j,h),j.return=m,m=j;break e}a(m,f);break}else t(m,f);f=f.sibling}h.type===Me?(j=Ca(h.props.children,m.mode,j,h.key),j.return=m,m=j):(j=Kn(h.type,h.key,h.props,null,m.mode,j),Wl(j,h),j.return=m,m=j)}return o(m);case He:e:{for(U=h.key;f!==null;){if(f.key===U)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){a(m,f.sibling),j=n(f,h.children||[]),j.return=m,m=j;break e}else{a(m,f);break}else t(m,f);f=f.sibling}j=Ec(h,m.mode,j),j.return=m,m=j}return o(m);case Xe:return h=Ua(h),re(m,f,h,j)}if(xt(h))return O(m,f,h,j);if(Ze(h)){if(U=Ze(h),typeof U!="function")throw Error(s(150));return h=U.call(h),B(m,f,h,j)}if(typeof h.then=="function")return re(m,f,ei(h),j);if(h.$$typeof===Se)return re(m,f,Fn(m,h),j);ti(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,f!==null&&f.tag===6?(a(m,f.sibling),j=n(f,h),j.return=m,m=j):(a(m,f),j=Ac(h,m.mode,j),j.return=m,m=j),o(m)):a(m,f)}return function(m,f,h,j){try{Jl=0;var U=re(m,f,h,j);return sl=null,U}catch(R){if(R===ul||R===In)throw R;var P=lt(29,R,null,m.mode);return P.lanes=j,P.return=m,P}}}var ka=Du(!0),Ru=Du(!1),na=!1;function qc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ca(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(te&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Vn(e),vu(e,null,a),t}return Zn(e,l,t,a),Vn(e)}function Fl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,wr(e,a)}}function Lc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=o:i=i.next=o,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Gc=!1;function $l(){if(Gc){var e=rl;if(e!==null)throw e}}function Il(e,t,a,l){Gc=!1;var n=e.updateQueue;na=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,r=n.shared.pending;if(r!==null){n.shared.pending=null;var u=r,g=u.next;u.next=null,o===null?i=g:o.next=g,o=u;var y=e.alternate;y!==null&&(y=y.updateQueue,r=y.lastBaseUpdate,r!==o&&(r===null?y.firstBaseUpdate=g:r.next=g,y.lastBaseUpdate=u))}if(i!==null){var S=n.baseState;o=0,y=g=u=null,r=i;do{var p=r.lane&-536870913,v=p!==r.lane;if(v?(J&p)===p:(l&p)===p){p!==0&&p===ol&&(Gc=!0),y!==null&&(y=y.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var O=e,B=r;p=t;var re=a;switch(B.tag){case 1:if(O=B.payload,typeof O=="function"){S=O.call(re,S,p);break e}S=O;break e;case 3:O.flags=O.flags&-65537|128;case 0:if(O=B.payload,p=typeof O=="function"?O.call(re,S,p):O,p==null)break e;S=k({},S,p);break e;case 2:na=!0}}p=r.callback,p!==null&&(e.flags|=64,v&&(e.flags|=8192),v=n.callbacks,v===null?n.callbacks=[p]:v.push(p))}else v={lane:p,tag:r.tag,payload:r.payload,callback:r.callback,next:null},y===null?(g=y=v,u=S):y=y.next=v,o|=p;if(r=r.next,r===null){if(r=n.shared.pending,r===null)break;v=r,r=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);y===null&&(u=S),n.baseState=u,n.firstBaseUpdate=g,n.lastBaseUpdate=y,i===null&&(n.shared.lanes=0),fa|=o,e.lanes=o,e.memoizedState=S}}function Uu(e,t){if(typeof e!="function")throw Error(s(191,e));e.call(t)}function Bu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Uu(a[e],t)}var fl=d(null),ai=d(0);function ku(e,t){e=Jt,C(ai,e),C(fl,t),Jt=e|t.baseLanes}function Qc(){C(ai,Jt),C(fl,fl.current)}function Xc(){Jt=ai.current,N(fl),N(ai)}var nt=d(null),pt=null;function oa(e){var t=e.alternate;C(xe,xe.current&1),C(nt,e),pt===null&&(t===null||fl.current!==null||t.memoizedState!==null)&&(pt=e)}function Zc(e){C(xe,xe.current),C(nt,e),pt===null&&(pt=e)}function Hu(e){e.tag===22?(C(xe,xe.current),C(nt,e),pt===null&&(pt=e)):ra()}function ra(){C(xe,xe.current),C(nt,nt.current)}function it(e){N(nt),pt===e&&(pt=null),N(xe)}var xe=d(0);function li(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Io(a)||Po(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yt=0,L=null,ce=null,Ne=null,ni=!1,dl=!1,Ha=!1,ii=0,Pl=0,ml=null,Km=0;function ve(){throw Error(s(321))}function Vc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!at(e[a],t[a]))return!1;return!0}function Kc(e,t,a,l,n,i){return Yt=i,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,x.H=e===null||e.memoizedState===null?js:ro,Ha=!1,i=a(l,n),Ha=!1,dl&&(i=Yu(t,a,l,n)),qu(e),i}function qu(e){x.H=an;var t=ce!==null&&ce.next!==null;if(Yt=0,Ne=ce=L=null,ni=!1,Pl=0,ml=null,t)throw Error(s(300));e===null||we||(e=e.dependencies,e!==null&&Wn(e)&&(we=!0))}function Yu(e,t,a,l){L=e;var n=0;do{if(dl&&(ml=null),Pl=0,dl=!1,25<=n)throw Error(s(301));if(n+=1,Ne=ce=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}x.H=Ss,i=t(a,l)}while(dl);return i}function Jm(){var e=x.H,t=e.useState()[0];return t=typeof t.then=="function"?en(t):t,e=e.useState()[0],(ce!==null?ce.memoizedState:null)!==e&&(L.flags|=1024),t}function Jc(){var e=ii!==0;return ii=0,e}function Wc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Fc(e){if(ni){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ni=!1}Yt=0,Ne=ce=L=null,dl=!1,Pl=ii=0,ml=null}function Le(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?L.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function je(){if(ce===null){var e=L.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=Ne===null?L.memoizedState:Ne.next;if(t!==null)Ne=t,ce=e;else{if(e===null)throw L.alternate===null?Error(s(467)):Error(s(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},Ne===null?L.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function ci(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function en(e){var t=Pl;return Pl+=1,ml===null&&(ml=[]),e=Cu(ml,e,t),t=L,(Ne===null?t.memoizedState:Ne.next)===null&&(t=t.alternate,x.H=t===null||t.memoizedState===null?js:ro),e}function oi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return en(e);if(e.$$typeof===Se)return Re(e)}throw Error(s(438,String(e)))}function $c(e){var t=null,a=L.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=L.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=ci(),L.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ga;return t.index++,a}function Lt(e,t){return typeof t=="function"?t(e):t}function ri(e){var t=je();return Ic(t,ce,e)}function Ic(e,t,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var r=o=null,u=null,g=t,y=!1;do{var S=g.lane&-536870913;if(S!==g.lane?(J&S)===S:(Yt&S)===S){var p=g.revertLane;if(p===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),S===ol&&(y=!0);else if((Yt&p)===p){g=g.next,p===ol&&(y=!0);continue}else S={lane:0,revertLane:g.revertLane,gesture:null,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},u===null?(r=u=S,o=i):u=u.next=S,L.lanes|=p,fa|=p;S=g.action,Ha&&a(i,S),i=g.hasEagerState?g.eagerState:a(i,S)}else p={lane:S,revertLane:g.revertLane,gesture:g.gesture,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null},u===null?(r=u=p,o=i):u=u.next=p,L.lanes|=S,fa|=S;g=g.next}while(g!==null&&g!==t);if(u===null?o=i:u.next=r,!at(i,e.memoizedState)&&(we=!0,y&&(a=rl,a!==null)))throw a;e.memoizedState=i,e.baseState=o,e.baseQueue=u,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Pc(e){var t=je(),a=t.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do i=e(i,o.action),o=o.next;while(o!==n);at(i,t.memoizedState)||(we=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Lu(e,t,a){var l=L,n=je(),i=$;if(i){if(a===void 0)throw Error(s(407));a=a()}else a=t();var o=!at((ce||n).memoizedState,a);if(o&&(n.memoizedState=a,we=!0),n=n.queue,ao(Xu.bind(null,l,n,e),[e]),n.getSnapshot!==t||o||Ne!==null&&Ne.memoizedState.tag&1){if(l.flags|=2048,hl(9,{destroy:void 0},Qu.bind(null,l,n,a,t),null),de===null)throw Error(s(349));i||(Yt&127)!==0||Gu(l,t,a)}return a}function Gu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=L.updateQueue,t===null?(t=ci(),L.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Qu(e,t,a,l){t.value=a,t.getSnapshot=l,Zu(t)&&Vu(e)}function Xu(e,t,a){return a(function(){Zu(t)&&Vu(e)})}function Zu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!at(e,a)}catch{return!0}}function Vu(e){var t=Ma(e,2);t!==null&&Ie(t,e,2)}function eo(e){var t=Le();if(typeof e=="function"){var a=e;if(e=a(),Ha){$t(!0);try{a()}finally{$t(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function Ku(e,t,a,l){return e.baseState=a,Ic(e,ce,typeof l=="function"?l:Lt)}function Wm(e,t,a,l,n){if(fi(e))throw Error(s(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};x.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,Ju(t,i)):(i.next=a.next,t.pending=a.next=i)}}function Ju(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=x.T,o={};x.T=o;try{var r=a(n,l),u=x.S;u!==null&&u(o,r),Wu(e,t,r)}catch(g){to(e,t,g)}finally{i!==null&&o.types!==null&&(i.types=o.types),x.T=i}}else try{i=a(n,l),Wu(e,t,i)}catch(g){to(e,t,g)}}function Wu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Fu(e,t,l)},function(l){return to(e,t,l)}):Fu(e,t,a)}function Fu(e,t,a){t.status="fulfilled",t.value=a,$u(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Ju(e,a)))}function to(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,$u(t),t=t.next;while(t!==l)}e.action=null}function $u(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Iu(e,t){return t}function Pu(e,t){if($){var a=de.formState;if(a!==null){e:{var l=L;if($){if(me){t:{for(var n=me,i=gt;n.nodeType!==8;){if(!i){n=null;break t}if(n=vt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){me=vt(n.nextSibling),l=n.data==="F!";break e}}aa(l)}l=!1}l&&(t=a[0])}}return a=Le(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Iu,lastRenderedState:t},a.queue=l,a=bs.bind(null,L,l),l.dispatch=a,l=eo(!1),i=oo.bind(null,L,!1,l.queue),l=Le(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Wm.bind(null,L,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function es(e){var t=je();return ts(t,ce,e)}function ts(e,t,a){if(t=Ic(e,t,Iu)[0],e=ri(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=en(t)}catch(o){throw o===ul?In:o}else l=t;t=je();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(L.flags|=2048,hl(9,{destroy:void 0},Fm.bind(null,n,a),null)),[l,i,e]}function Fm(e,t){e.action=t}function as(e){var t=je(),a=ce;if(a!==null)return ts(t,a,e);je(),t=t.memoizedState,a=je();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function hl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=L.updateQueue,t===null&&(t=ci(),L.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function ls(){return je().memoizedState}function ui(e,t,a,l){var n=Le();L.flags|=e,n.memoizedState=hl(1|t,{destroy:void 0},a,l===void 0?null:l)}function si(e,t,a,l){var n=je();l=l===void 0?null:l;var i=n.memoizedState.inst;ce!==null&&l!==null&&Vc(l,ce.memoizedState.deps)?n.memoizedState=hl(t,i,a,l):(L.flags|=e,n.memoizedState=hl(1|t,i,a,l))}function ns(e,t){ui(8390656,8,e,t)}function ao(e,t){si(2048,8,e,t)}function $m(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=ci(),L.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function is(e){var t=je().memoizedState;return $m({ref:t,nextImpl:e}),function(){if((te&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function cs(e,t){return si(4,2,e,t)}function os(e,t){return si(4,4,e,t)}function rs(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function us(e,t,a){a=a!=null?a.concat([e]):null,si(4,4,rs.bind(null,t,e),a)}function lo(){}function ss(e,t){var a=je();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Vc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function fs(e,t){var a=je();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Vc(t,l[1]))return l[0];if(l=e(),Ha){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[l,t],l}function no(e,t,a){return a===void 0||(Yt&1073741824)!==0&&(J&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=mf(),L.lanes|=e,fa|=e,a)}function ds(e,t,a,l){return at(a,t)?a:fl.current!==null?(e=no(e,a,l),at(e,t)||(we=!0),e):(Yt&42)===0||(Yt&1073741824)!==0&&(J&261930)===0?(we=!0,e.memoizedState=a):(e=mf(),L.lanes|=e,fa|=e,t)}function ms(e,t,a,l,n){var i=M.p;M.p=i!==0&&8>i?i:8;var o=x.T,r={};x.T=r,oo(e,!1,t,a);try{var u=n(),g=x.S;if(g!==null&&g(r,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var y=Vm(u,l);tn(e,t,y,rt(e))}else tn(e,t,l,rt(e))}catch(S){tn(e,t,{then:function(){},status:"rejected",reason:S},rt())}finally{M.p=i,o!==null&&r.types!==null&&(o.types=r.types),x.T=o}}function Im(){}function io(e,t,a,l){if(e.tag!==5)throw Error(s(476));var n=hs(e).queue;ms(e,n,t,H,a===null?Im:function(){return gs(e),a(l)})}function hs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:H},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function gs(e){var t=hs(e);t.next===null&&(t=e.alternate.memoizedState),tn(e,t.next.queue,{},rt())}function co(){return Re(yn)}function ps(){return je().memoizedState}function vs(){return je().memoizedState}function Pm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=rt();e=ia(a);var l=ca(t,e,a);l!==null&&(Ie(l,t,a),Fl(l,t,a)),t={cache:Uc()},e.payload=t;return}t=t.return}}function eh(e,t,a){var l=rt();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fi(e)?ys(t,a):(a=Nc(e,t,a,l),a!==null&&(Ie(a,e,l),xs(a,t,l)))}function bs(e,t,a){var l=rt();tn(e,t,a,l)}function tn(e,t,a,l){var n={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(fi(e))ys(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,r=i(o,a);if(n.hasEagerState=!0,n.eagerState=r,at(r,o))return Zn(e,t,n,0),de===null&&Xn(),!1}catch{}if(a=Nc(e,t,n,l),a!==null)return Ie(a,e,l),xs(a,t,l),!0}return!1}function oo(e,t,a,l){if(l={lane:2,revertLane:Yo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fi(e)){if(t)throw Error(s(479))}else t=Nc(e,a,l,2),t!==null&&Ie(t,e,2)}function fi(e){var t=e.alternate;return e===L||t!==null&&t===L}function ys(e,t){dl=ni=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function xs(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,wr(e,a)}}var an={readContext:Re,use:oi,useCallback:ve,useContext:ve,useEffect:ve,useImperativeHandle:ve,useLayoutEffect:ve,useInsertionEffect:ve,useMemo:ve,useReducer:ve,useRef:ve,useState:ve,useDebugValue:ve,useDeferredValue:ve,useTransition:ve,useSyncExternalStore:ve,useId:ve,useHostTransitionStatus:ve,useFormState:ve,useActionState:ve,useOptimistic:ve,useMemoCache:ve,useCacheRefresh:ve};an.useEffectEvent=ve;var js={readContext:Re,use:oi,useCallback:function(e,t){return Le().memoizedState=[e,t===void 0?null:t],e},useContext:Re,useEffect:ns,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,ui(4194308,4,rs.bind(null,t,e),a)},useLayoutEffect:function(e,t){return ui(4194308,4,e,t)},useInsertionEffect:function(e,t){ui(4,2,e,t)},useMemo:function(e,t){var a=Le();t=t===void 0?null:t;var l=e();if(Ha){$t(!0);try{e()}finally{$t(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Le();if(a!==void 0){var n=a(t);if(Ha){$t(!0);try{a(t)}finally{$t(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=eh.bind(null,L,e),[l.memoizedState,e]},useRef:function(e){var t=Le();return e={current:e},t.memoizedState=e},useState:function(e){e=eo(e);var t=e.queue,a=bs.bind(null,L,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:lo,useDeferredValue:function(e,t){var a=Le();return no(a,e,t)},useTransition:function(){var e=eo(!1);return e=ms.bind(null,L,e.queue,!0,!1),Le().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=L,n=Le();if($){if(a===void 0)throw Error(s(407));a=a()}else{if(a=t(),de===null)throw Error(s(349));(J&127)!==0||Gu(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,ns(Xu.bind(null,l,i,e),[e]),l.flags|=2048,hl(9,{destroy:void 0},Qu.bind(null,l,i,a,t),null),a},useId:function(){var e=Le(),t=de.identifierPrefix;if($){var a=Tt,l=Et;a=(l&~(1<<32-tt(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ii++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Km++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:co,useFormState:Pu,useActionState:Pu,useOptimistic:function(e){var t=Le();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=oo.bind(null,L,!0,a),a.dispatch=t,[e,t]},useMemoCache:$c,useCacheRefresh:function(){return Le().memoizedState=Pm.bind(null,L)},useEffectEvent:function(e){var t=Le(),a={impl:e};return t.memoizedState=a,function(){if((te&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ro={readContext:Re,use:oi,useCallback:ss,useContext:Re,useEffect:ao,useImperativeHandle:us,useInsertionEffect:cs,useLayoutEffect:os,useMemo:fs,useReducer:ri,useRef:ls,useState:function(){return ri(Lt)},useDebugValue:lo,useDeferredValue:function(e,t){var a=je();return ds(a,ce.memoizedState,e,t)},useTransition:function(){var e=ri(Lt)[0],t=je().memoizedState;return[typeof e=="boolean"?e:en(e),t]},useSyncExternalStore:Lu,useId:ps,useHostTransitionStatus:co,useFormState:es,useActionState:es,useOptimistic:function(e,t){var a=je();return Ku(a,ce,e,t)},useMemoCache:$c,useCacheRefresh:vs};ro.useEffectEvent=is;var Ss={readContext:Re,use:oi,useCallback:ss,useContext:Re,useEffect:ao,useImperativeHandle:us,useInsertionEffect:cs,useLayoutEffect:os,useMemo:fs,useReducer:Pc,useRef:ls,useState:function(){return Pc(Lt)},useDebugValue:lo,useDeferredValue:function(e,t){var a=je();return ce===null?no(a,e,t):ds(a,ce.memoizedState,e,t)},useTransition:function(){var e=Pc(Lt)[0],t=je().memoizedState;return[typeof e=="boolean"?e:en(e),t]},useSyncExternalStore:Lu,useId:ps,useHostTransitionStatus:co,useFormState:as,useActionState:as,useOptimistic:function(e,t){var a=je();return ce!==null?Ku(a,ce,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:$c,useCacheRefresh:vs};Ss.useEffectEvent=is;function uo(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:k({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var so={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=rt(),n=ia(l);n.payload=t,a!=null&&(n.callback=a),t=ca(e,n,l),t!==null&&(Ie(t,e,l),Fl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=rt(),n=ia(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ca(e,n,l),t!==null&&(Ie(t,e,l),Fl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=rt(),l=ia(a);l.tag=2,t!=null&&(l.callback=t),t=ca(e,l,a),t!==null&&(Ie(t,e,a),Fl(t,e,a))}};function zs(e,t,a,l,n,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,o):t.prototype&&t.prototype.isPureReactComponent?!Gl(a,l)||!Gl(n,i):!0}function Ns(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&so.enqueueReplaceState(t,t.state,null)}function qa(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=k({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function ws(e){Qn(e)}function As(e){console.error(e)}function Es(e){Qn(e)}function di(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Ts(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function fo(e,t,a){return a=ia(a),a.tag=3,a.payload={element:null},a.callback=function(){di(e,t)},a}function Ms(e){return e=ia(e),e.tag=3,e}function Cs(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Ts(t,a,l)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Ts(t,a,l),typeof n!="function"&&(da===null?da=new Set([this]):da.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function th(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&cl(t,a,n,!0),a=nt.current,a!==null){switch(a.tag){case 31:case 13:return pt===null?Ni():a.alternate===null&&be===0&&(be=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Pn?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),ko(e,l,n)),!1;case 22:return a.flags|=65536,l===Pn?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),ko(e,l,n)),!1}throw Error(s(435,a.tag))}return ko(e,l,n),Ni(),!1}if($)return t=nt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Cc&&(e=Error(s(422),{cause:l}),Zl(dt(e,a)))):(l!==Cc&&(t=Error(s(423),{cause:l}),Zl(dt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=dt(l,a),n=fo(e.stateNode,l,n),Lc(e,n),be!==4&&(be=2)),!1;var i=Error(s(520),{cause:l});if(i=dt(i,a),fn===null?fn=[i]:fn.push(i),be!==4&&(be=2),t===null)return!0;l=dt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=fo(a.stateNode,l,e),Lc(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Ms(n),Cs(n,e,a,l),Lc(a,n),!1}a=a.return}while(a!==null);return!1}var mo=Error(s(461)),we=!1;function Ue(e,t,a,l){t.child=e===null?Ru(t,null,a,l):ka(t,e.child,a,l)}function Os(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var o={};for(var r in l)r!=="ref"&&(o[r]=l[r])}else o=l;return Da(t),l=Kc(e,t,a,o,i,n),r=Jc(),e!==null&&!we?(Wc(e,t,n),Gt(e,t,n)):($&&r&&Tc(t),t.flags|=1,Ue(e,t,l,n),t.child)}function _s(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!wc(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Ds(e,t,i,l,n)):(e=Kn(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!jo(e,n)){var o=i.memoizedProps;if(a=a.compare,a=a!==null?a:Gl,a(o,l)&&e.ref===t.ref)return Gt(e,t,n)}return t.flags|=1,e=Bt(i,l),e.ref=t.ref,e.return=t,t.child=e}function Ds(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Gl(i,l)&&e.ref===t.ref)if(we=!1,t.pendingProps=l=i,jo(e,n))(e.flags&131072)!==0&&(we=!0);else return t.lanes=e.lanes,Gt(e,t,n)}return ho(e,t,a,l,n)}function Rs(e,t,a,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Us(e,t,i,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&$n(t,i!==null?i.cachePool:null),i!==null?ku(t,i):Qc(),Hu(t);else return l=t.lanes=536870912,Us(e,t,i!==null?i.baseLanes|a:a,a,l)}else i!==null?($n(t,i.cachePool),ku(t,i),ra(),t.memoizedState=null):(e!==null&&$n(t,null),Qc(),ra());return Ue(e,t,n,a),t.child}function ln(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Us(e,t,a,l,n){var i=kc();return i=i===null?null:{parent:ze._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&$n(t,null),Qc(),Hu(t),e!==null&&cl(e,t,l,!0),t.childLanes=n,null}function mi(e,t){return t=gi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Bs(e,t,a){return ka(t,e.child,null,a),e=mi(t,t.pendingProps),e.flags|=2,it(t),t.memoizedState=null,e}function ah(e,t,a){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if($){if(l.mode==="hidden")return e=mi(t,l),t.lanes=536870912,ln(null,e);if(Zc(t),(e=me)?(e=Wf(e,gt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ea!==null?{id:Et,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},a=yu(e),a.return=t,t.child=a,De=t,me=null)):e=null,e===null)throw aa(t);return t.lanes=536870912,null}return mi(t,l)}var i=e.memoizedState;if(i!==null){var o=i.dehydrated;if(Zc(t),n)if(t.flags&256)t.flags&=-257,t=Bs(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(we||cl(e,t,a,!1),n=(a&e.childLanes)!==0,we||n){if(l=de,l!==null&&(o=Ar(l,a),o!==0&&o!==i.retryLane))throw i.retryLane=o,Ma(e,o),Ie(l,e,o),mo;Ni(),t=Bs(e,t,a)}else e=i.treeContext,me=vt(o.nextSibling),De=t,$=!0,ta=null,gt=!1,e!==null&&Su(t,e),t=mi(t,l),t.flags|=4096;return t}return e=Bt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function hi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function ho(e,t,a,l,n){return Da(t),a=Kc(e,t,a,l,void 0,n),l=Jc(),e!==null&&!we?(Wc(e,t,n),Gt(e,t,n)):($&&l&&Tc(t),t.flags|=1,Ue(e,t,a,n),t.child)}function ks(e,t,a,l,n,i){return Da(t),t.updateQueue=null,a=Yu(t,l,a,n),qu(e),l=Jc(),e!==null&&!we?(Wc(e,t,i),Gt(e,t,i)):($&&l&&Tc(t),t.flags|=1,Ue(e,t,a,i),t.child)}function Hs(e,t,a,l,n){if(Da(t),t.stateNode===null){var i=al,o=a.contextType;typeof o=="object"&&o!==null&&(i=Re(o)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=so,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},qc(t),o=a.contextType,i.context=typeof o=="object"&&o!==null?Re(o):al,i.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(uo(t,a,o,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&so.enqueueReplaceState(i,i.state,null),Il(t,l,i,n),$l(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var r=t.memoizedProps,u=qa(a,r);i.props=u;var g=i.context,y=a.contextType;o=al,typeof y=="object"&&y!==null&&(o=Re(y));var S=a.getDerivedStateFromProps;y=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,y||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||g!==o)&&Ns(t,i,l,o),na=!1;var p=t.memoizedState;i.state=p,Il(t,l,i,n),$l(),g=t.memoizedState,r||p!==g||na?(typeof S=="function"&&(uo(t,a,S,l),g=t.memoizedState),(u=na||zs(t,a,u,l,p,g,o))?(y||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=g),i.props=l,i.state=g,i.context=o,l=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Yc(e,t),o=t.memoizedProps,y=qa(a,o),i.props=y,S=t.pendingProps,p=i.context,g=a.contextType,u=al,typeof g=="object"&&g!==null&&(u=Re(g)),r=a.getDerivedStateFromProps,(g=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==S||p!==u)&&Ns(t,i,l,u),na=!1,p=t.memoizedState,i.state=p,Il(t,l,i,n),$l();var v=t.memoizedState;o!==S||p!==v||na||e!==null&&e.dependencies!==null&&Wn(e.dependencies)?(typeof r=="function"&&(uo(t,a,r,l),v=t.memoizedState),(y=na||zs(t,a,y,l,p,v,u)||e!==null&&e.dependencies!==null&&Wn(e.dependencies))?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,v,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,v,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=v),i.props=l,i.state=v,i.context=u,l=y):(typeof i.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,hi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=ka(t,e.child,null,n),t.child=ka(t,null,a,n)):Ue(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Gt(e,t,n),e}function qs(e,t,a,l){return Oa(),t.flags|=256,Ue(e,t,a,l),t.child}var go={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function po(e){return{baseLanes:e,cachePool:Tu()}}function vo(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ot),e}function Ys(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,o;if((o=i)||(o=e!==null&&e.memoizedState===null?!1:(xe.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if($){if(n?oa(t):ra(),(e=me)?(e=Wf(e,gt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ea!==null?{id:Et,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},a=yu(e),a.return=t,t.child=a,De=t,me=null)):e=null,e===null)throw aa(t);return Po(e)?t.lanes=32:t.lanes=536870912,null}var r=l.children;return l=l.fallback,n?(ra(),n=t.mode,r=gi({mode:"hidden",children:r},n),l=Ca(l,n,a,null),r.return=t,l.return=t,r.sibling=l,t.child=r,l=t.child,l.memoizedState=po(a),l.childLanes=vo(e,o,a),t.memoizedState=go,ln(null,l)):(oa(t),bo(t,r))}var u=e.memoizedState;if(u!==null&&(r=u.dehydrated,r!==null)){if(i)t.flags&256?(oa(t),t.flags&=-257,t=yo(e,t,a)):t.memoizedState!==null?(ra(),t.child=e.child,t.flags|=128,t=null):(ra(),r=l.fallback,n=t.mode,l=gi({mode:"visible",children:l.children},n),r=Ca(r,n,a,null),r.flags|=2,l.return=t,r.return=t,l.sibling=r,t.child=l,ka(t,e.child,null,a),l=t.child,l.memoizedState=po(a),l.childLanes=vo(e,o,a),t.memoizedState=go,t=ln(null,l));else if(oa(t),Po(r)){if(o=r.nextSibling&&r.nextSibling.dataset,o)var g=o.dgst;o=g,l=Error(s(419)),l.stack="",l.digest=o,Zl({value:l,source:null,stack:null}),t=yo(e,t,a)}else if(we||cl(e,t,a,!1),o=(a&e.childLanes)!==0,we||o){if(o=de,o!==null&&(l=Ar(o,a),l!==0&&l!==u.retryLane))throw u.retryLane=l,Ma(e,l),Ie(o,e,l),mo;Io(r)||Ni(),t=yo(e,t,a)}else Io(r)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,me=vt(r.nextSibling),De=t,$=!0,ta=null,gt=!1,e!==null&&Su(t,e),t=bo(t,l.children),t.flags|=4096);return t}return n?(ra(),r=l.fallback,n=t.mode,u=e.child,g=u.sibling,l=Bt(u,{mode:"hidden",children:l.children}),l.subtreeFlags=u.subtreeFlags&65011712,g!==null?r=Bt(g,r):(r=Ca(r,n,a,null),r.flags|=2),r.return=t,l.return=t,l.sibling=r,t.child=l,ln(null,l),l=t.child,r=e.child.memoizedState,r===null?r=po(a):(n=r.cachePool,n!==null?(u=ze._currentValue,n=n.parent!==u?{parent:u,pool:u}:n):n=Tu(),r={baseLanes:r.baseLanes|a,cachePool:n}),l.memoizedState=r,l.childLanes=vo(e,o,a),t.memoizedState=go,ln(e.child,l)):(oa(t),a=e.child,e=a.sibling,a=Bt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function bo(e,t){return t=gi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function gi(e,t){return e=lt(22,e,null,t),e.lanes=0,e}function yo(e,t,a){return ka(t,e.child,null,a),e=bo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ls(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Dc(e.return,t,a)}function xo(e,t,a,l,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n,treeForkCount:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=a,o.tailMode=n,o.treeForkCount=i)}function Gs(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var o=xe.current,r=(o&2)!==0;if(r?(o=o&1|2,t.flags|=128):o&=1,C(xe,o),Ue(e,t,l,a),l=$?Xl:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ls(e,a,t);else if(e.tag===19)Ls(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&li(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),xo(t,!1,n,a,i,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&li(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}xo(t,!0,a,null,i,l);break;case"together":xo(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(cl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,a=Bt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Bt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function jo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Wn(e)))}function lh(e,t,a){switch(t.tag){case 3:Ye(t,t.stateNode.containerInfo),la(t,ze,e.memoizedState.cache),Oa();break;case 27:case 5:Ml(t);break;case 4:Ye(t,t.stateNode.containerInfo);break;case 10:la(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Zc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(oa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ys(e,t,a):(oa(t),e=Gt(e,t,a),e!==null?e.sibling:null);oa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(cl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return Gs(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),C(xe,xe.current),l)break;return null;case 22:return t.lanes=0,Rs(e,t,a,t.pendingProps);case 24:la(t,ze,e.memoizedState.cache)}return Gt(e,t,a)}function Qs(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)we=!0;else{if(!jo(e,a)&&(t.flags&128)===0)return we=!1,lh(e,t,a);we=(e.flags&131072)!==0}else we=!1,$&&(t.flags&1048576)!==0&&ju(t,Xl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=Ua(t.elementType),t.type=e,typeof e=="function")wc(e)?(l=qa(e,l),t.tag=1,t=Hs(null,t,e,l,a)):(t.tag=0,t=ho(null,t,e,l,a));else{if(e!=null){var n=e.$$typeof;if(n===Ge){t.tag=11,t=Os(null,t,e,l,a);break e}else if(n===F){t.tag=14,t=_s(null,t,e,l,a);break e}}throw t=_t(e)||e,Error(s(306,t,""))}}return t;case 0:return ho(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=qa(l,t.pendingProps),Hs(e,t,l,n,a);case 3:e:{if(Ye(t,t.stateNode.containerInfo),e===null)throw Error(s(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Yc(e,t),Il(t,l,null,a);var o=t.memoizedState;if(l=o.cache,la(t,ze,l),l!==i.cache&&Rc(t,[ze],a,!0),$l(),l=o.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=qs(e,t,l,a);break e}else if(l!==n){n=dt(Error(s(424)),t),Zl(n),t=qs(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,me=vt(e.firstChild),De=t,$=!0,ta=null,gt=!0,a=Ru(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Oa(),l===n){t=Gt(e,t,a);break e}Ue(e,t,l,a)}t=t.child}return t;case 26:return hi(e,t),e===null?(a=td(t.type,null,t.pendingProps,null))?t.memoizedState=a:$||(a=t.type,e=t.pendingProps,l=Oi(Z.current).createElement(a),l[_e]=t,l[Ve]=e,Be(l,a,e),Ce(l),t.stateNode=l):t.memoizedState=td(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ml(t),e===null&&$&&(l=t.stateNode=If(t.type,t.pendingProps,Z.current),De=t,gt=!0,n=me,pa(t.type)?(er=n,me=vt(l.firstChild)):me=n),Ue(e,t,t.pendingProps.children,a),hi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&$&&((n=l=me)&&(l=Dh(l,t.type,t.pendingProps,gt),l!==null?(t.stateNode=l,De=t,me=vt(l.firstChild),gt=!1,n=!0):n=!1),n||aa(t)),Ml(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Wo(n,i)?l=null:o!==null&&Wo(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=Kc(e,t,Jm,null,null,a),yn._currentValue=n),hi(e,t),Ue(e,t,l,a),t.child;case 6:return e===null&&$&&((e=a=me)&&(a=Rh(a,t.pendingProps,gt),a!==null?(t.stateNode=a,De=t,me=null,e=!0):e=!1),e||aa(t)),null;case 13:return Ys(e,t,a);case 4:return Ye(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=ka(t,null,l,a):Ue(e,t,l,a),t.child;case 11:return Os(e,t,t.type,t.pendingProps,a);case 7:return Ue(e,t,t.pendingProps,a),t.child;case 8:return Ue(e,t,t.pendingProps.children,a),t.child;case 12:return Ue(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,la(t,t.type,l.value),Ue(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Da(t),n=Re(n),l=l(n),t.flags|=1,Ue(e,t,l,a),t.child;case 14:return _s(e,t,t.type,t.pendingProps,a);case 15:return Ds(e,t,t.type,t.pendingProps,a);case 19:return Gs(e,t,a);case 31:return ah(e,t,a);case 22:return Rs(e,t,a,t.pendingProps);case 24:return Da(t),l=Re(ze),e===null?(n=kc(),n===null&&(n=de,i=Uc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},qc(t),la(t,ze,n)):((e.lanes&a)!==0&&(Yc(e,t),Il(t,null,null,a),$l()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),la(t,ze,l)):(l=i.cache,la(t,ze,l),l!==n.cache&&Rc(t,[ze],a,!0))),Ue(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Qt(e){e.flags|=4}function So(e,t,a,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(vf())e.flags|=8192;else throw Ba=Pn,Hc}else e.flags&=-16777217}function Xs(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!cd(t))if(vf())e.flags|=8192;else throw Ba=Pn,Hc}function pi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?zr():536870912,e.lanes|=t,bl|=t)}function nn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function nh(e,t,a){var l=t.pendingProps;switch(Mc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return he(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),qt(ze),ye(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(il(t)?Qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Oc())),he(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(Qt(t),i!==null?(he(t),Xs(t,i)):(he(t),So(t,n,null,l,a))):i?i!==e.memoizedState?(Qt(t),he(t),Xs(t,i)):(he(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Qt(t),he(t),So(t,n,e,l,a)),null;case 27:if(En(t),a=Z.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return he(t),null}e=D.current,il(t)?zu(t):(e=If(n,l,a),t.stateNode=e,Qt(t))}return he(t),null;case 5:if(En(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(!l){if(t.stateNode===null)throw Error(s(166));return he(t),null}if(i=D.current,il(t))zu(t);else{var o=Oi(Z.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?o.createElement("select",{is:l.is}):o.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?o.createElement(n,{is:l.is}):o.createElement(n)}}i[_e]=t,i[Ve]=l;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=i;e:switch(Be(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Qt(t)}}return he(t),So(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(s(166));if(e=Z.current,il(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=De,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[_e]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Lf(e.nodeValue,a)),e||aa(t,!0)}else e=Oi(e).createTextNode(l),e[_e]=t,t.stateNode=e}return he(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=il(t),a!==null){if(e===null){if(!l)throw Error(s(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[_e]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;he(t),e=!1}else a=Oc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(it(t),t):(it(t),null);if((t.flags&128)!==0)throw Error(s(558))}return he(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=il(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(s(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));n[_e]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;he(t),n=!1}else n=Oc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(it(t),t):(it(t),null)}return it(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),pi(t,t.updateQueue),he(t),null);case 4:return ye(),e===null&&Xo(t.stateNode.containerInfo),he(t),null;case 10:return qt(t.type),he(t),null;case 19:if(N(xe),l=t.memoizedState,l===null)return he(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)nn(l,!1);else{if(be!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=li(e),i!==null){for(t.flags|=128,nn(l,!1),e=i.updateQueue,t.updateQueue=e,pi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)bu(a,e),a=a.sibling;return C(xe,xe.current&1|2),$&&kt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Pe()>ji&&(t.flags|=128,n=!0,nn(l,!1),t.lanes=4194304)}else{if(!n)if(e=li(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,pi(t,e),nn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!$)return he(t),null}else 2*Pe()-l.renderingStartTime>ji&&a!==536870912&&(t.flags|=128,n=!0,nn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Pe(),e.sibling=null,a=xe.current,C(xe,n?a&1|2:a&1),$&&kt(t,l.treeForkCount),e):(he(t),null);case 22:case 23:return it(t),Xc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),a=t.updateQueue,a!==null&&pi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&N(Ra),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(ze),he(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function ih(e,t){switch(Mc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(ze),ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return En(t),null;case 31:if(t.memoizedState!==null){if(it(t),t.alternate===null)throw Error(s(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(it(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return N(xe),null;case 4:return ye(),null;case 10:return qt(t.type),null;case 22:case 23:return it(t),Xc(),e!==null&&N(Ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qt(ze),null;case 25:return null;default:return null}}function Zs(e,t){switch(Mc(t),t.tag){case 3:qt(ze),ye();break;case 26:case 27:case 5:En(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&it(t);break;case 13:it(t);break;case 19:N(xe);break;case 10:qt(t.type);break;case 22:case 23:it(t),Xc(),e!==null&&N(Ra);break;case 24:qt(ze)}}function cn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,o=a.inst;l=i(),o.destroy=l}a=a.next}while(a!==n)}}catch(r){ne(t,t.return,r)}}function ua(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var o=l.inst,r=o.destroy;if(r!==void 0){o.destroy=void 0,n=t;var u=a,g=r;try{g()}catch(y){ne(n,u,y)}}}l=l.next}while(l!==i)}}catch(y){ne(t,t.return,y)}}function Vs(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Bu(t,a)}catch(l){ne(e,e.return,l)}}}function Ks(e,t,a){a.props=qa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ne(e,t,l)}}function on(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ne(e,t,n)}}function Mt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ne(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ne(e,t,n)}else a.current=null}function Js(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ne(e,e.return,n)}}function zo(e,t,a){try{var l=e.stateNode;Eh(l,e.type,a,t),l[Ve]=t}catch(n){ne(e,e.return,n)}}function Ws(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function No(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ws(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function wo(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Rt));else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(wo(e,t,a),e=e.sibling;e!==null;)wo(e,t,a),e=e.sibling}function vi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(vi(e,t,a),e=e.sibling;e!==null;)vi(e,t,a),e=e.sibling}function Fs(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Be(t,l,a),t[_e]=e,t[Ve]=a}catch(i){ne(e,e.return,i)}}var Xt=!1,Ae=!1,Ao=!1,$s=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function ch(e,t){if(e=e.containerInfo,Ko=Hi,e=uu(e),bc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var o=0,r=-1,u=-1,g=0,y=0,S=e,p=null;t:for(;;){for(var v;S!==a||n!==0&&S.nodeType!==3||(r=o+n),S!==i||l!==0&&S.nodeType!==3||(u=o+l),S.nodeType===3&&(o+=S.nodeValue.length),(v=S.firstChild)!==null;)p=S,S=v;for(;;){if(S===e)break t;if(p===a&&++g===n&&(r=o),p===i&&++y===l&&(u=o),(v=S.nextSibling)!==null)break;S=p,p=S.parentNode}S=v}a=r===-1||u===-1?null:{start:r,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(Jo={focusedElem:e,selectionRange:a},Hi=!1,Oe=t;Oe!==null;)if(t=Oe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Oe=e;else for(;Oe!==null;){switch(t=Oe,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var O=qa(a.type,n);e=l.getSnapshotBeforeUpdate(O,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(B){ne(a,a.return,B)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)$o(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$o(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Oe=e;break}Oe=t.return}}function Is(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Vt(e,a),l&4&&cn(5,a);break;case 1:if(Vt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ne(a,a.return,o)}else{var n=qa(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ne(a,a.return,o)}}l&64&&Vs(a),l&512&&on(a,a.return);break;case 3:if(Vt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Bu(e,t)}catch(o){ne(a,a.return,o)}}break;case 27:t===null&&l&4&&Fs(a);case 26:case 5:Vt(e,a),t===null&&l&4&&Js(a),l&512&&on(a,a.return);break;case 12:Vt(e,a);break;case 31:Vt(e,a),l&4&&tf(e,a);break;case 13:Vt(e,a),l&4&&af(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=gh.bind(null,a),Uh(e,a))));break;case 22:if(l=a.memoizedState!==null||Xt,!l){t=t!==null&&t.memoizedState!==null||Ae,n=Xt;var i=Ae;Xt=l,(Ae=t)&&!i?Kt(e,a,(a.subtreeFlags&8772)!==0):Vt(e,a),Xt=n,Ae=i}break;case 30:break;default:Vt(e,a)}}function Ps(e){var t=e.alternate;t!==null&&(e.alternate=null,Ps(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&tc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,Je=!1;function Zt(e,t,a){for(a=a.child;a!==null;)ef(e,t,a),a=a.sibling}function ef(e,t,a){if(et&&typeof et.onCommitFiberUnmount=="function")try{et.onCommitFiberUnmount(Cl,a)}catch{}switch(a.tag){case 26:Ae||Mt(a,t),Zt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ae||Mt(a,t);var l=ge,n=Je;pa(a.type)&&(ge=a.stateNode,Je=!1),Zt(e,t,a),pn(a.stateNode),ge=l,Je=n;break;case 5:Ae||Mt(a,t);case 6:if(l=ge,n=Je,ge=null,Zt(e,t,a),ge=l,Je=n,ge!==null)if(Je)try{(ge.nodeType===9?ge.body:ge.nodeName==="HTML"?ge.ownerDocument.body:ge).removeChild(a.stateNode)}catch(i){ne(a,t,i)}else try{ge.removeChild(a.stateNode)}catch(i){ne(a,t,i)}break;case 18:ge!==null&&(Je?(e=ge,Kf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Al(e)):Kf(ge,a.stateNode));break;case 4:l=ge,n=Je,ge=a.stateNode.containerInfo,Je=!0,Zt(e,t,a),ge=l,Je=n;break;case 0:case 11:case 14:case 15:ua(2,a,t),Ae||ua(4,a,t),Zt(e,t,a);break;case 1:Ae||(Mt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ks(a,t,l)),Zt(e,t,a);break;case 21:Zt(e,t,a);break;case 22:Ae=(l=Ae)||a.memoizedState!==null,Zt(e,t,a),Ae=l;break;default:Zt(e,t,a)}}function tf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Al(e)}catch(a){ne(t,t.return,a)}}}function af(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Al(e)}catch(a){ne(t,t.return,a)}}function oh(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $s),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $s),t;default:throw Error(s(435,e.tag))}}function bi(e,t){var a=oh(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var n=ph.bind(null,e,l);l.then(n,n)}})}function We(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,o=t,r=o;e:for(;r!==null;){switch(r.tag){case 27:if(pa(r.type)){ge=r.stateNode,Je=!1;break e}break;case 5:ge=r.stateNode,Je=!1;break e;case 3:case 4:ge=r.stateNode.containerInfo,Je=!0;break e}r=r.return}if(ge===null)throw Error(s(160));ef(i,o,n),ge=null,Je=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)lf(t,e),t=t.sibling}var St=null;function lf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:We(t,e),Fe(e),l&4&&(ua(3,e,e.return),cn(3,e),ua(5,e,e.return));break;case 1:We(t,e),Fe(e),l&512&&(Ae||a===null||Mt(a,a.return)),l&64&&Xt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=St;if(We(t,e),Fe(e),l&512&&(Ae||a===null||Mt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Dl]||i[_e]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Be(i,l,a),i[_e]=e,Ce(i),l=i;break e;case"link":var o=nd("link","href",n).get(l+(a.href||""));if(o){for(var r=0;r<o.length;r++)if(i=o[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(r,1);break t}}i=n.createElement(l),Be(i,l,a),n.head.appendChild(i);break;case"meta":if(o=nd("meta","content",n).get(l+(a.content||""))){for(r=0;r<o.length;r++)if(i=o[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(r,1);break t}}i=n.createElement(l),Be(i,l,a),n.head.appendChild(i);break;default:throw Error(s(468,l))}i[_e]=e,Ce(i),l=i}e.stateNode=l}else id(n,e.type,e.stateNode);else e.stateNode=ld(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?id(n,e.type,e.stateNode):ld(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&zo(e,e.memoizedProps,a.memoizedProps)}break;case 27:We(t,e),Fe(e),l&512&&(Ae||a===null||Mt(a,a.return)),a!==null&&l&4&&zo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(We(t,e),Fe(e),l&512&&(Ae||a===null||Mt(a,a.return)),e.flags&32){n=e.stateNode;try{Wa(n,"")}catch(O){ne(e,e.return,O)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,zo(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Ao=!0);break;case 6:if(We(t,e),Fe(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(O){ne(e,e.return,O)}}break;case 3:if(Ri=null,n=St,St=_i(t.containerInfo),We(t,e),St=n,Fe(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Al(t.containerInfo)}catch(O){ne(e,e.return,O)}Ao&&(Ao=!1,nf(e));break;case 4:l=St,St=_i(e.stateNode.containerInfo),We(t,e),Fe(e),St=l;break;case 12:We(t,e),Fe(e);break;case 31:We(t,e),Fe(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bi(e,l)));break;case 13:We(t,e),Fe(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(xi=Pe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bi(e,l)));break;case 22:n=e.memoizedState!==null;var u=a!==null&&a.memoizedState!==null,g=Xt,y=Ae;if(Xt=g||n,Ae=y||u,We(t,e),Ae=y,Xt=g,Fe(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||u||Xt||Ae||Ya(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){u=a=t;try{if(i=u.stateNode,n)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{r=u.stateNode;var S=u.memoizedProps.style,p=S!=null&&S.hasOwnProperty("display")?S.display:null;r.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(O){ne(u,u.return,O)}}}else if(t.tag===6){if(a===null){u=t;try{u.stateNode.nodeValue=n?"":u.memoizedProps}catch(O){ne(u,u.return,O)}}}else if(t.tag===18){if(a===null){u=t;try{var v=u.stateNode;n?Jf(v,!0):Jf(u.stateNode,!1)}catch(O){ne(u,u.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,bi(e,a))));break;case 19:We(t,e),Fe(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,bi(e,l)));break;case 30:break;case 21:break;default:We(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Ws(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var n=a.stateNode,i=No(e);vi(e,i,n);break;case 5:var o=a.stateNode;a.flags&32&&(Wa(o,""),a.flags&=-33);var r=No(e);vi(e,r,o);break;case 3:case 4:var u=a.stateNode.containerInfo,g=No(e);wo(e,g,u);break;default:throw Error(s(161))}}catch(y){ne(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;nf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Vt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Is(e,t.alternate,t),t=t.sibling}function Ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ua(4,t,t.return),Ya(t);break;case 1:Mt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Ks(t,t.return,a),Ya(t);break;case 27:pn(t.stateNode);case 26:case 5:Mt(t,t.return),Ya(t);break;case 22:t.memoizedState===null&&Ya(t);break;case 30:Ya(t);break;default:Ya(t)}e=e.sibling}}function Kt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:Kt(n,i,a),cn(4,i);break;case 1:if(Kt(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){ne(l,l.return,g)}if(l=i,n=l.updateQueue,n!==null){var r=l.stateNode;try{var u=n.shared.hiddenCallbacks;if(u!==null)for(n.shared.hiddenCallbacks=null,n=0;n<u.length;n++)Uu(u[n],r)}catch(g){ne(l,l.return,g)}}a&&o&64&&Vs(i),on(i,i.return);break;case 27:Fs(i);case 26:case 5:Kt(n,i,a),a&&l===null&&o&4&&Js(i),on(i,i.return);break;case 12:Kt(n,i,a);break;case 31:Kt(n,i,a),a&&o&4&&tf(n,i);break;case 13:Kt(n,i,a),a&&o&4&&af(n,i);break;case 22:i.memoizedState===null&&Kt(n,i,a),on(i,i.return);break;case 30:break;default:Kt(n,i,a)}t=t.sibling}}function Eo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vl(a))}function To(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vl(e))}function zt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cf(e,t,a,l),t=t.sibling}function cf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:zt(e,t,a,l),n&2048&&cn(9,t);break;case 1:zt(e,t,a,l);break;case 3:zt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vl(e)));break;case 12:if(n&2048){zt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,r=i.onPostCommit;typeof r=="function"&&r(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){ne(t,t.return,u)}}else zt(e,t,a,l);break;case 31:zt(e,t,a,l);break;case 13:zt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,t.memoizedState!==null?i._visibility&2?zt(e,t,a,l):rn(e,t):i._visibility&2?zt(e,t,a,l):(i._visibility|=2,gl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&Eo(o,t);break;case 24:zt(e,t,a,l),n&2048&&To(t.alternate,t);break;default:zt(e,t,a,l)}}function gl(e,t,a,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,o=t,r=a,u=l,g=o.flags;switch(o.tag){case 0:case 11:case 15:gl(i,o,r,u,n),cn(8,o);break;case 23:break;case 22:var y=o.stateNode;o.memoizedState!==null?y._visibility&2?gl(i,o,r,u,n):rn(i,o):(y._visibility|=2,gl(i,o,r,u,n)),n&&g&2048&&Eo(o.alternate,o);break;case 24:gl(i,o,r,u,n),n&&g&2048&&To(o.alternate,o);break;default:gl(i,o,r,u,n)}t=t.sibling}}function rn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:rn(a,l),n&2048&&Eo(l.alternate,l);break;case 24:rn(a,l),n&2048&&To(l.alternate,l);break;default:rn(a,l)}t=t.sibling}}var un=8192;function pl(e,t,a){if(e.subtreeFlags&un)for(e=e.child;e!==null;)of(e,t,a),e=e.sibling}function of(e,t,a){switch(e.tag){case 26:pl(e,t,a),e.flags&un&&e.memoizedState!==null&&Kh(a,St,e.memoizedState,e.memoizedProps);break;case 5:pl(e,t,a);break;case 3:case 4:var l=St;St=_i(e.stateNode.containerInfo),pl(e,t,a),St=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=un,un=16777216,pl(e,t,a),un=l):pl(e,t,a));break;default:pl(e,t,a)}}function rf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function sn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Oe=l,sf(l,e)}rf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)uf(e),e=e.sibling}function uf(e){switch(e.tag){case 0:case 11:case 15:sn(e),e.flags&2048&&ua(9,e,e.return);break;case 3:sn(e);break;case 12:sn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yi(e)):sn(e);break;default:sn(e)}}function yi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Oe=l,sf(l,e)}rf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ua(8,t,t.return),yi(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,yi(t));break;default:yi(t)}e=e.sibling}}function sf(e,t){for(;Oe!==null;){var a=Oe;switch(a.tag){case 0:case 11:case 15:ua(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Vl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Oe=l;else e:for(a=e;Oe!==null;){l=Oe;var n=l.sibling,i=l.return;if(Ps(l),l===a){Oe=null;break e}if(n!==null){n.return=i,Oe=n;break e}Oe=i}}}var rh={getCacheForType:function(e){var t=Re(ze),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Re(ze).controller.signal}},uh=typeof WeakMap=="function"?WeakMap:Map,te=0,de=null,V=null,J=0,le=0,ct=null,sa=!1,vl=!1,Mo=!1,Jt=0,be=0,fa=0,La=0,Co=0,ot=0,bl=0,fn=null,$e=null,Oo=!1,xi=0,ff=0,ji=1/0,Si=null,da=null,Te=0,ma=null,yl=null,Wt=0,_o=0,Do=null,df=null,dn=0,Ro=null;function rt(){return(te&2)!==0&&J!==0?J&-J:x.T!==null?Yo():Er()}function mf(){if(ot===0)if((J&536870912)===0||$){var e=Cn;Cn<<=1,(Cn&3932160)===0&&(Cn=262144),ot=e}else ot=536870912;return e=nt.current,e!==null&&(e.flags|=32),ot}function Ie(e,t,a){(e===de&&(le===2||le===9)||e.cancelPendingCommit!==null)&&(xl(e,0),ha(e,J,ot,!1)),_l(e,a),((te&2)===0||e!==de)&&(e===de&&((te&2)===0&&(La|=a),be===4&&ha(e,J,ot,!1)),Ct(e))}function hf(e,t,a){if((te&6)!==0)throw Error(s(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ol(e,t),n=l?dh(e,t):Bo(e,t,!0),i=l;do{if(n===0){vl&&!l&&ha(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!sh(a)){n=Bo(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var r=e;n=fn;var u=r.current.memoizedState.isDehydrated;if(u&&(xl(r,o).flags|=256),o=Bo(r,o,!1),o!==2){if(Mo&&!u){r.errorRecoveryDisabledLanes|=i,La|=i,n=4;break e}i=$e,$e=n,i!==null&&($e===null?$e=i:$e.push.apply($e,i))}n=o}if(i=!1,n!==2)continue}}if(n===1){xl(e,0),ha(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:ha(l,t,ot,!sa);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(n=xi+300-Pe(),10<n)){if(ha(l,t,ot,!sa),_n(l,0,!0)!==0)break e;Wt=t,l.timeoutHandle=Zf(gf.bind(null,l,a,$e,Si,Oo,t,ot,La,bl,sa,i,"Throttled",-0,0),n);break e}gf(l,a,$e,Si,Oo,t,ot,La,bl,sa,i,null,-0,0)}}break}while(!0);Ct(e)}function gf(e,t,a,l,n,i,o,r,u,g,y,S,p,v){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Rt},of(t,i,S);var O=(i&62914560)===i?xi-Pe():(i&4194048)===i?ff-Pe():0;if(O=Jh(S,O),O!==null){Wt=i,e.cancelPendingCommit=O(zf.bind(null,e,t,i,a,l,n,o,r,u,y,S,null,p,v)),ha(e,i,o,!g);return}}zf(e,t,i,a,l,n,o,r,u)}function sh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!at(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t,a,l){t&=~Co,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-tt(n),o=1<<i;l[i]=-1,n&=~o}a!==0&&Nr(e,a,t)}function zi(){return(te&6)===0?(mn(0),!1):!0}function Uo(){if(V!==null){if(le===0)var e=V.return;else e=V,Ht=_a=null,Fc(e),sl=null,Jl=0,e=V;for(;e!==null;)Zs(e.alternate,e),e=e.return;V=null}}function xl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ch(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wt=0,Uo(),de=e,V=a=Bt(e.current,null),J=t,le=0,ct=null,sa=!1,vl=Ol(e,t),Mo=!1,bl=ot=Co=La=fa=be=0,$e=fn=null,Oo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-tt(l),i=1<<n;t|=e[n],l&=~i}return Jt=t,Xn(),a}function pf(e,t){L=null,x.H=an,t===ul||t===In?(t=Ou(),le=3):t===Hc?(t=Ou(),le=4):le=t===mo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ct=t,V===null&&(be=1,di(e,dt(t,e.current)))}function vf(){var e=nt.current;return e===null?!0:(J&4194048)===J?pt===null:(J&62914560)===J||(J&536870912)!==0?e===pt:!1}function bf(){var e=x.H;return x.H=an,e===null?an:e}function yf(){var e=x.A;return x.A=rh,e}function Ni(){be=4,sa||(J&4194048)!==J&&nt.current!==null||(vl=!0),(fa&134217727)===0&&(La&134217727)===0||de===null||ha(de,J,ot,!1)}function Bo(e,t,a){var l=te;te|=2;var n=bf(),i=yf();(de!==e||J!==t)&&(Si=null,xl(e,t)),t=!1;var o=be;e:do try{if(le!==0&&V!==null){var r=V,u=ct;switch(le){case 8:Uo(),o=6;break e;case 3:case 2:case 9:case 6:nt.current===null&&(t=!0);var g=le;if(le=0,ct=null,jl(e,r,u,g),a&&vl){o=0;break e}break;default:g=le,le=0,ct=null,jl(e,r,u,g)}}fh(),o=be;break}catch(y){pf(e,y)}while(!0);return t&&e.shellSuspendCounter++,Ht=_a=null,te=l,x.H=n,x.A=i,V===null&&(de=null,J=0,Xn()),o}function fh(){for(;V!==null;)xf(V)}function dh(e,t){var a=te;te|=2;var l=bf(),n=yf();de!==e||J!==t?(Si=null,ji=Pe()+500,xl(e,t)):vl=Ol(e,t);e:do try{if(le!==0&&V!==null){t=V;var i=ct;t:switch(le){case 1:le=0,ct=null,jl(e,t,i,1);break;case 2:case 9:if(Mu(i)){le=0,ct=null,jf(t);break}t=function(){le!==2&&le!==9||de!==e||(le=7),Ct(e)},i.then(t,t);break e;case 3:le=7;break e;case 4:le=5;break e;case 7:Mu(i)?(le=0,ct=null,jf(t)):(le=0,ct=null,jl(e,t,i,7));break;case 5:var o=null;switch(V.tag){case 26:o=V.memoizedState;case 5:case 27:var r=V;if(o?cd(o):r.stateNode.complete){le=0,ct=null;var u=r.sibling;if(u!==null)V=u;else{var g=r.return;g!==null?(V=g,wi(g)):V=null}break t}}le=0,ct=null,jl(e,t,i,5);break;case 6:le=0,ct=null,jl(e,t,i,6);break;case 8:Uo(),be=6;break e;default:throw Error(s(462))}}mh();break}catch(y){pf(e,y)}while(!0);return Ht=_a=null,x.H=l,x.A=n,te=a,V!==null?0:(de=null,J=0,Xn(),be)}function mh(){for(;V!==null&&!Bd();)xf(V)}function xf(e){var t=Qs(e.alternate,e,Jt);e.memoizedProps=e.pendingProps,t===null?wi(e):V=t}function jf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ks(a,t,t.pendingProps,t.type,void 0,J);break;case 11:t=ks(a,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Fc(t);default:Zs(a,t),t=V=bu(t,Jt),t=Qs(a,t,Jt)}e.memoizedProps=e.pendingProps,t===null?wi(e):V=t}function jl(e,t,a,l){Ht=_a=null,Fc(t),sl=null,Jl=0;var n=t.return;try{if(th(e,n,t,a,J)){be=1,di(e,dt(a,e.current)),V=null;return}}catch(i){if(n!==null)throw V=n,i;be=1,di(e,dt(a,e.current)),V=null;return}t.flags&32768?($||l===1?e=!0:vl||(J&536870912)!==0?e=!1:(sa=e=!0,(l===2||l===9||l===3||l===6)&&(l=nt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Sf(t,e)):wi(t)}function wi(e){var t=e;do{if((t.flags&32768)!==0){Sf(t,sa);return}e=t.return;var a=nh(t.alternate,t,Jt);if(a!==null){V=a;return}if(t=t.sibling,t!==null){V=t;return}V=t=e}while(t!==null);be===0&&(be=5)}function Sf(e,t){do{var a=ih(e.alternate,e);if(a!==null){a.flags&=32767,V=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){V=e;return}V=e=a}while(e!==null);be=6,V=null}function zf(e,t,a,l,n,i,o,r,u){e.cancelPendingCommit=null;do Ai();while(Te!==0);if((te&6)!==0)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(i=t.lanes|t.childLanes,i|=zc,Vd(e,a,i,o,r,u),e===de&&(V=de=null,J=0),yl=t,ma=e,Wt=a,_o=i,Do=n,df=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vh(Tn,function(){return Tf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=x.T,x.T=null,n=M.p,M.p=2,o=te,te|=4;try{ch(e,t,a)}finally{te=o,M.p=n,x.T=l}}Te=1,Nf(),wf(),Af()}}function Nf(){if(Te===1){Te=0;var e=ma,t=yl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=x.T,x.T=null;var l=M.p;M.p=2;var n=te;te|=4;try{lf(t,e);var i=Jo,o=uu(e.containerInfo),r=i.focusedElem,u=i.selectionRange;if(o!==r&&r&&r.ownerDocument&&ru(r.ownerDocument.documentElement,r)){if(u!==null&&bc(r)){var g=u.start,y=u.end;if(y===void 0&&(y=g),"selectionStart"in r)r.selectionStart=g,r.selectionEnd=Math.min(y,r.value.length);else{var S=r.ownerDocument||document,p=S&&S.defaultView||window;if(p.getSelection){var v=p.getSelection(),O=r.textContent.length,B=Math.min(u.start,O),re=u.end===void 0?B:Math.min(u.end,O);!v.extend&&B>re&&(o=re,re=B,B=o);var m=ou(r,B),f=ou(r,re);if(m&&f&&(v.rangeCount!==1||v.anchorNode!==m.node||v.anchorOffset!==m.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)){var h=S.createRange();h.setStart(m.node,m.offset),v.removeAllRanges(),B>re?(v.addRange(h),v.extend(f.node,f.offset)):(h.setEnd(f.node,f.offset),v.addRange(h))}}}}for(S=[],v=r;v=v.parentNode;)v.nodeType===1&&S.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<S.length;r++){var j=S[r];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}Hi=!!Ko,Jo=Ko=null}finally{te=n,M.p=l,x.T=a}}e.current=t,Te=2}}function wf(){if(Te===2){Te=0;var e=ma,t=yl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=x.T,x.T=null;var l=M.p;M.p=2;var n=te;te|=4;try{Is(e,t.alternate,t)}finally{te=n,M.p=l,x.T=a}}Te=3}}function Af(){if(Te===4||Te===3){Te=0,kd();var e=ma,t=yl,a=Wt,l=df;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Te=5:(Te=0,yl=ma=null,Ef(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(da=null),Pi(a),t=t.stateNode,et&&typeof et.onCommitFiberRoot=="function")try{et.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=x.T,n=M.p,M.p=2,x.T=null;try{for(var i=e.onRecoverableError,o=0;o<l.length;o++){var r=l[o];i(r.value,{componentStack:r.stack})}}finally{x.T=t,M.p=n}}(Wt&3)!==0&&Ai(),Ct(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Ro?dn++:(dn=0,Ro=e):dn=0,mn(0)}}function Ef(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vl(t)))}function Ai(){return Nf(),wf(),Af(),Tf()}function Tf(){if(Te!==5)return!1;var e=ma,t=_o;_o=0;var a=Pi(Wt),l=x.T,n=M.p;try{M.p=32>a?32:a,x.T=null,a=Do,Do=null;var i=ma,o=Wt;if(Te=0,yl=ma=null,Wt=0,(te&6)!==0)throw Error(s(331));var r=te;if(te|=4,uf(i.current),cf(i,i.current,o,a),te=r,mn(0,!1),et&&typeof et.onPostCommitFiberRoot=="function")try{et.onPostCommitFiberRoot(Cl,i)}catch{}return!0}finally{M.p=n,x.T=l,Ef(e,t)}}function Mf(e,t,a){t=dt(a,t),t=fo(e.stateNode,t,2),e=ca(e,t,2),e!==null&&(_l(e,2),Ct(e))}function ne(e,t,a){if(e.tag===3)Mf(e,e,a);else for(;t!==null;){if(t.tag===3){Mf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(da===null||!da.has(l))){e=dt(a,e),a=Ms(2),l=ca(t,a,2),l!==null&&(Cs(a,l,t,e),_l(l,2),Ct(l));break}}t=t.return}}function ko(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new uh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Mo=!0,n.add(a),e=hh.bind(null,e,t,a),t.then(e,e))}function hh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,de===e&&(J&a)===a&&(be===4||be===3&&(J&62914560)===J&&300>Pe()-xi?(te&2)===0&&xl(e,0):Co|=a,bl===J&&(bl=0)),Ct(e)}function Cf(e,t){t===0&&(t=zr()),e=Ma(e,t),e!==null&&(_l(e,t),Ct(e))}function gh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Cf(e,a)}function ph(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(t),Cf(e,a)}function vh(e,t){return Wi(e,t)}var Ei=null,Sl=null,Ho=!1,Ti=!1,qo=!1,ga=0;function Ct(e){e!==Sl&&e.next===null&&(Sl===null?Ei=Sl=e:Sl=Sl.next=e),Ti=!0,Ho||(Ho=!0,yh())}function mn(e,t){if(!qo&&Ti){qo=!0;do for(var a=!1,l=Ei;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var o=l.suspendedLanes,r=l.pingedLanes;i=(1<<31-tt(42|e)+1)-1,i&=n&~(o&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Rf(l,i))}else i=J,i=_n(l,l===de?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Ol(l,i)||(a=!0,Rf(l,i));l=l.next}while(a);qo=!1}}function bh(){Of()}function Of(){Ti=Ho=!1;var e=0;ga!==0&&Mh()&&(e=ga);for(var t=Pe(),a=null,l=Ei;l!==null;){var n=l.next,i=_f(l,t);i===0?(l.next=null,a===null?Ei=n:a.next=n,n===null&&(Sl=a)):(a=l,(e!==0||(i&3)!==0)&&(Ti=!0)),l=n}Te!==0&&Te!==5||mn(e),ga!==0&&(ga=0)}function _f(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var o=31-tt(i),r=1<<o,u=n[o];u===-1?((r&a)===0||(r&l)!==0)&&(n[o]=Zd(r,t)):u<=t&&(e.expiredLanes|=r),i&=~r}if(t=de,a=J,a=_n(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(le===2||le===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Fi(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ol(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Fi(l),Pi(a)){case 2:case 8:a=jr;break;case 32:a=Tn;break;case 268435456:a=Sr;break;default:a=Tn}return l=Df.bind(null,e),a=Wi(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Fi(l),e.callbackPriority=2,e.callbackNode=null,2}function Df(e,t){if(Te!==0&&Te!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ai()&&e.callbackNode!==a)return null;var l=J;return l=_n(e,e===de?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(hf(e,l,t),_f(e,Pe()),e.callbackNode!=null&&e.callbackNode===a?Df.bind(null,e):null)}function Rf(e,t){if(Ai())return null;hf(e,t,!0)}function yh(){Oh(function(){(te&6)!==0?Wi(xr,bh):Of()})}function Yo(){if(ga===0){var e=ol;e===0&&(e=Mn,Mn<<=1,(Mn&261888)===0&&(Mn=256)),ga=e}return ga}function Uf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Bn(""+e)}function Bf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function xh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Uf((n[Ve]||null).action),o=l.submitter;o&&(t=(t=o[Ve]||null)?Uf(t.formAction):o.getAttribute("formAction"),t!==null&&(i=t,o=null));var r=new Yn("action","action",null,l,n);e.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ga!==0){var u=o?Bf(n,o):new FormData(n);io(a,{pending:!0,data:u,method:n.method,action:i},null,u)}}else typeof i=="function"&&(r.preventDefault(),u=o?Bf(n,o):new FormData(n),io(a,{pending:!0,data:u,method:n.method,action:i},i,u))},currentTarget:n}]})}}for(var Lo=0;Lo<Sc.length;Lo++){var Go=Sc[Lo],jh=Go.toLowerCase(),Sh=Go[0].toUpperCase()+Go.slice(1);jt(jh,"on"+Sh)}jt(du,"onAnimationEnd"),jt(mu,"onAnimationIteration"),jt(hu,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(Hm,"onTransitionRun"),jt(qm,"onTransitionStart"),jt(Ym,"onTransitionCancel"),jt(gu,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),wa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),wa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),wa("onBeforeInput",["compositionend","keypress","textInput","paste"]),wa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),wa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hn));function kf(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var o=l.length-1;0<=o;o--){var r=l[o],u=r.instance,g=r.currentTarget;if(r=r.listener,u!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=g;try{i(n)}catch(y){Qn(y)}n.currentTarget=null,i=u}else for(o=0;o<l.length;o++){if(r=l[o],u=r.instance,g=r.currentTarget,r=r.listener,u!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=g;try{i(n)}catch(y){Qn(y)}n.currentTarget=null,i=u}}}}function K(e,t){var a=t[ec];a===void 0&&(a=t[ec]=new Set);var l=e+"__bubble";a.has(l)||(Hf(t,e,2,!1),a.add(l))}function Qo(e,t,a){var l=0;t&&(l|=4),Hf(a,e,l,t)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function Xo(e){if(!e[Mi]){e[Mi]=!0,Cr.forEach(function(a){a!=="selectionchange"&&(zh.has(a)||Qo(a,!1,e),Qo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mi]||(t[Mi]=!0,Qo("selectionchange",!1,t))}}function Hf(e,t,a,l){switch(md(t)){case 2:var n=$h;break;case 8:n=Ih;break;default:n=ir}a=n.bind(null,t,a,e),n=void 0,!uc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function Zo(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var o=l.tag;if(o===3||o===4){var r=l.stateNode.containerInfo;if(r===n)break;if(o===4)for(o=l.return;o!==null;){var u=o.tag;if((u===3||u===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;r!==null;){if(o=Xa(r),o===null)return;if(u=o.tag,u===5||u===6||u===26||u===27){l=i=o;continue e}r=r.parentNode}}l=l.return}Gr(function(){var g=i,y=oc(a),S=[];e:{var p=pu.get(e);if(p!==void 0){var v=Yn,O=e;switch(e){case"keypress":if(Hn(a)===0)break e;case"keydown":case"keyup":v=pm;break;case"focusin":O="focus",v=mc;break;case"focusout":O="blur",v=mc;break;case"beforeblur":case"afterblur":v=mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Zr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=nm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ym;break;case du:case mu:case hu:v=om;break;case gu:v=jm;break;case"scroll":case"scrollend":v=am;break;case"wheel":v=zm;break;case"copy":case"cut":case"paste":v=um;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Kr;break;case"toggle":case"beforetoggle":v=wm}var B=(t&4)!==0,re=!B&&(e==="scroll"||e==="scrollend"),m=B?p!==null?p+"Capture":null:p;B=[];for(var f=g,h;f!==null;){var j=f;if(h=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||h===null||m===null||(j=Ul(f,m),j!=null&&B.push(gn(f,j,h))),re)break;f=f.return}0<B.length&&(p=new v(p,O,null,a,y),S.push({event:p,listeners:B}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&a!==cc&&(O=a.relatedTarget||a.fromElement)&&(Xa(O)||O[Qa]))break e;if((v||p)&&(p=y.window===y?y:(p=y.ownerDocument)?p.defaultView||p.parentWindow:window,v?(O=a.relatedTarget||a.toElement,v=g,O=O?Xa(O):null,O!==null&&(re=_(O),B=O.tag,O!==re||B!==5&&B!==27&&B!==6)&&(O=null)):(v=null,O=g),v!==O)){if(B=Zr,j="onMouseLeave",m="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(B=Kr,j="onPointerLeave",m="onPointerEnter",f="pointer"),re=v==null?p:Rl(v),h=O==null?p:Rl(O),p=new B(j,f+"leave",v,a,y),p.target=re,p.relatedTarget=h,j=null,Xa(y)===g&&(B=new B(m,f+"enter",O,a,y),B.target=h,B.relatedTarget=re,j=B),re=j,v&&O)t:{for(B=Nh,m=v,f=O,h=0,j=m;j;j=B(j))h++;j=0;for(var U=f;U;U=B(U))j++;for(;0<h-j;)m=B(m),h--;for(;0<j-h;)f=B(f),j--;for(;h--;){if(m===f||f!==null&&m===f.alternate){B=m;break t}m=B(m),f=B(f)}B=null}else B=null;v!==null&&qf(S,p,v,B,!1),O!==null&&re!==null&&qf(S,re,O,B,!0)}}e:{if(p=g?Rl(g):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var P=tu;else if(Pr(p))if(au)P=Um;else{P=Dm;var R=_m}else v=p.nodeName,!v||v.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?g&&ic(g.elementType)&&(P=tu):P=Rm;if(P&&(P=P(e,g))){eu(S,P,a,y);break e}R&&R(e,p,g),e==="focusout"&&g&&p.type==="number"&&g.memoizedProps.value!=null&&nc(p,"number",p.value)}switch(R=g?Rl(g):window,e){case"focusin":(Pr(R)||R.contentEditable==="true")&&(Pa=R,yc=g,Ql=null);break;case"focusout":Ql=yc=Pa=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,su(S,a,y);break;case"selectionchange":if(km)break;case"keydown":case"keyup":su(S,a,y)}var G;if(gc)e:{switch(e){case"compositionstart":var W="onCompositionStart";break e;case"compositionend":W="onCompositionEnd";break e;case"compositionupdate":W="onCompositionUpdate";break e}W=void 0}else Ia?$r(e,a)&&(W="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(W="onCompositionStart");W&&(Jr&&a.locale!=="ko"&&(Ia||W!=="onCompositionStart"?W==="onCompositionEnd"&&Ia&&(G=Qr()):(Pt=y,sc="value"in Pt?Pt.value:Pt.textContent,Ia=!0)),R=Ci(g,W),0<R.length&&(W=new Vr(W,e,null,a,y),S.push({event:W,listeners:R}),G?W.data=G:(G=Ir(a),G!==null&&(W.data=G)))),(G=Em?Tm(e,a):Mm(e,a))&&(W=Ci(g,"onBeforeInput"),0<W.length&&(R=new Vr("onBeforeInput","beforeinput",null,a,y),S.push({event:R,listeners:W}),R.data=G)),xh(S,e,g,a,y)}kf(S,t)})}function gn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ci(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ul(e,a),n!=null&&l.unshift(gn(e,n,i)),n=Ul(e,t),n!=null&&l.push(gn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Nh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function qf(e,t,a,l,n){for(var i=t._reactName,o=[];a!==null&&a!==l;){var r=a,u=r.alternate,g=r.stateNode;if(r=r.tag,u!==null&&u===l)break;r!==5&&r!==26&&r!==27||g===null||(u=g,n?(g=Ul(a,i),g!=null&&o.unshift(gn(a,g,u))):n||(g=Ul(a,i),g!=null&&o.push(gn(a,g,u)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var wh=/\r\n?/g,Ah=/\u0000|\uFFFD/g;function Yf(e){return(typeof e=="string"?e:""+e).replace(wh,`
`).replace(Ah,"")}function Lf(e,t){return t=Yf(t),Yf(e)===t}function oe(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Wa(e,""+l);break;case"className":Rn(e,"class",l);break;case"tabIndex":Rn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Rn(e,a,l);break;case"style":Yr(e,l,i);break;case"data":if(t!=="object"){Rn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Bn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&oe(e,t,"name",n.name,n,null),oe(e,t,"formEncType",n.formEncType,n,null),oe(e,t,"formMethod",n.formMethod,n,null),oe(e,t,"formTarget",n.formTarget,n,null)):(oe(e,t,"encType",n.encType,n,null),oe(e,t,"method",n.method,n,null),oe(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Bn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Rt);break;case"onScroll":l!=null&&K("scroll",e);break;case"onScrollEnd":l!=null&&K("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Bn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":K("beforetoggle",e),K("toggle",e),Dn(e,"popover",l);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Dn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=em.get(a)||a,Dn(e,a,l))}}function Vo(e,t,a,l,n,i){switch(a){case"style":Yr(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&Wa(e,""+l);break;case"onScroll":l!=null&&K("scroll",e);break;case"onScrollEnd":l!=null&&K("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Rt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Or.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Ve]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Dn(e,a,l)}}}function Be(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":K("error",e),K("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var o=a[i];if(o!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:oe(e,t,i,o,a,null)}}n&&oe(e,t,"srcSet",a.srcSet,a,null),l&&oe(e,t,"src",a.src,a,null);return;case"input":K("invalid",e);var r=i=o=n=null,u=null,g=null;for(l in a)if(a.hasOwnProperty(l)){var y=a[l];if(y!=null)switch(l){case"name":n=y;break;case"type":o=y;break;case"checked":u=y;break;case"defaultChecked":g=y;break;case"value":i=y;break;case"defaultValue":r=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(s(137,t));break;default:oe(e,t,l,y,a,null)}}Br(e,i,r,u,g,o,n,!1);return;case"select":K("invalid",e),l=o=i=null;for(n in a)if(a.hasOwnProperty(n)&&(r=a[n],r!=null))switch(n){case"value":i=r;break;case"defaultValue":o=r;break;case"multiple":l=r;default:oe(e,t,n,r,a,null)}t=i,a=o,e.multiple=!!l,t!=null?Ja(e,!!l,t,!1):a!=null&&Ja(e,!!l,a,!0);return;case"textarea":K("invalid",e),i=n=l=null;for(o in a)if(a.hasOwnProperty(o)&&(r=a[o],r!=null))switch(o){case"value":l=r;break;case"defaultValue":n=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(s(91));break;default:oe(e,t,o,r,a,null)}Hr(e,l,n,i);return;case"option":for(u in a)a.hasOwnProperty(u)&&(l=a[u],l!=null)&&(u==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":oe(e,t,u,l,a,null));return;case"dialog":K("beforetoggle",e),K("toggle",e),K("cancel",e),K("close",e);break;case"iframe":case"object":K("load",e);break;case"video":case"audio":for(l=0;l<hn.length;l++)K(hn[l],e);break;case"image":K("error",e),K("load",e);break;case"details":K("toggle",e);break;case"embed":case"source":case"link":K("error",e),K("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(g in a)if(a.hasOwnProperty(g)&&(l=a[g],l!=null))switch(g){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:oe(e,t,g,l,a,null)}return;default:if(ic(t)){for(y in a)a.hasOwnProperty(y)&&(l=a[y],l!==void 0&&Vo(e,t,y,l,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null&&oe(e,t,r,l,a,null))}function Eh(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,o=null,r=null,u=null,g=null,y=null;for(v in a){var S=a[v];if(a.hasOwnProperty(v)&&S!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":u=S;default:l.hasOwnProperty(v)||oe(e,t,v,null,l,S)}}for(var p in l){var v=l[p];if(S=a[p],l.hasOwnProperty(p)&&(v!=null||S!=null))switch(p){case"type":i=v;break;case"name":n=v;break;case"checked":g=v;break;case"defaultChecked":y=v;break;case"value":o=v;break;case"defaultValue":r=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(137,t));break;default:v!==S&&oe(e,t,p,v,l,S)}}lc(e,o,r,u,g,y,i,n);return;case"select":v=o=r=p=null;for(i in a)if(u=a[i],a.hasOwnProperty(i)&&u!=null)switch(i){case"value":break;case"multiple":v=u;default:l.hasOwnProperty(i)||oe(e,t,i,null,l,u)}for(n in l)if(i=l[n],u=a[n],l.hasOwnProperty(n)&&(i!=null||u!=null))switch(n){case"value":p=i;break;case"defaultValue":r=i;break;case"multiple":o=i;default:i!==u&&oe(e,t,n,i,l,u)}t=r,a=o,l=v,p!=null?Ja(e,!!a,p,!1):!!l!=!!a&&(t!=null?Ja(e,!!a,t,!0):Ja(e,!!a,a?[]:"",!1));return;case"textarea":v=p=null;for(r in a)if(n=a[r],a.hasOwnProperty(r)&&n!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:oe(e,t,r,null,l,n)}for(o in l)if(n=l[o],i=a[o],l.hasOwnProperty(o)&&(n!=null||i!=null))switch(o){case"value":p=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(s(91));break;default:n!==i&&oe(e,t,o,n,l,i)}kr(e,p,v);return;case"option":for(var O in a)p=a[O],a.hasOwnProperty(O)&&p!=null&&!l.hasOwnProperty(O)&&(O==="selected"?e.selected=!1:oe(e,t,O,null,l,p));for(u in l)p=l[u],v=a[u],l.hasOwnProperty(u)&&p!==v&&(p!=null||v!=null)&&(u==="selected"?e.selected=p&&typeof p!="function"&&typeof p!="symbol":oe(e,t,u,p,l,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var B in a)p=a[B],a.hasOwnProperty(B)&&p!=null&&!l.hasOwnProperty(B)&&oe(e,t,B,null,l,p);for(g in l)if(p=l[g],v=a[g],l.hasOwnProperty(g)&&p!==v&&(p!=null||v!=null))switch(g){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(s(137,t));break;default:oe(e,t,g,p,l,v)}return;default:if(ic(t)){for(var re in a)p=a[re],a.hasOwnProperty(re)&&p!==void 0&&!l.hasOwnProperty(re)&&Vo(e,t,re,void 0,l,p);for(y in l)p=l[y],v=a[y],!l.hasOwnProperty(y)||p===v||p===void 0&&v===void 0||Vo(e,t,y,p,l,v);return}}for(var m in a)p=a[m],a.hasOwnProperty(m)&&p!=null&&!l.hasOwnProperty(m)&&oe(e,t,m,null,l,p);for(S in l)p=l[S],v=a[S],!l.hasOwnProperty(S)||p===v||p==null&&v==null||oe(e,t,S,p,l,v)}function Gf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Th(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var n=a[l],i=n.transferSize,o=n.initiatorType,r=n.duration;if(i&&r&&Gf(o)){for(o=0,r=n.responseEnd,l+=1;l<a.length;l++){var u=a[l],g=u.startTime;if(g>r)break;var y=u.transferSize,S=u.initiatorType;y&&Gf(S)&&(u=u.responseEnd,o+=y*(u<r?1:(r-g)/(u-g)))}if(--l,t+=8*(i+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ko=null,Jo=null;function Oi(e){return e.nodeType===9?e:e.ownerDocument}function Qf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Wo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fo=null;function Mh(){var e=window.event;return e&&e.type==="popstate"?e===Fo?!1:(Fo=e,!0):(Fo=null,!1)}var Zf=typeof setTimeout=="function"?setTimeout:void 0,Ch=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,Oh=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(e){return Vf.resolve(null).then(e).catch(_h)}:Zf;function _h(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function Kf(e,t){var a=t,l=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(n),Al(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")pn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,pn(a);for(var i=a.firstChild;i;){var o=i.nextSibling,r=i.nodeName;i[Dl]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=o}}else a==="body"&&pn(e.ownerDocument.body);a=n}while(a);Al(t)}function Jf(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function $o(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$o(a),tc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Dh(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Dl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=vt(e.nextSibling),e===null)break}return null}function Rh(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vt(e.nextSibling),e===null))return null;return e}function Wf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vt(e.nextSibling),e===null))return null;return e}function Io(e){return e.data==="$?"||e.data==="$~"}function Po(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Uh(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var er=null;function Ff(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return vt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function $f(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function If(e,t,a){switch(t=Oi(a),e){case"html":if(e=t.documentElement,!e)throw Error(s(452));return e;case"head":if(e=t.head,!e)throw Error(s(453));return e;case"body":if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);tc(e)}var bt=new Map,Pf=new Set;function _i(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ft=M.d;M.d={f:Bh,r:kh,D:Hh,C:qh,L:Yh,m:Lh,X:Qh,S:Gh,M:Xh};function Bh(){var e=Ft.f(),t=zi();return e||t}function kh(e){var t=Za(e);t!==null&&t.tag===5&&t.type==="form"?gs(t):Ft.r(e)}var zl=typeof document>"u"?null:document;function ed(e,t,a){var l=zl;if(l&&typeof t=="string"&&t){var n=st(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Pf.has(n)||(Pf.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Be(t,"link",e),Ce(t),l.head.appendChild(t)))}}function Hh(e){Ft.D(e),ed("dns-prefetch",e,null)}function qh(e,t){Ft.C(e,t),ed("preconnect",e,t)}function Yh(e,t,a){Ft.L(e,t,a);var l=zl;if(l&&e&&t){var n='link[rel="preload"][as="'+st(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+st(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+st(a.imageSizes)+'"]')):n+='[href="'+st(e)+'"]';var i=n;switch(t){case"style":i=Nl(e);break;case"script":i=wl(e)}bt.has(i)||(e=k({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),bt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(vn(i))||t==="script"&&l.querySelector(bn(i))||(t=l.createElement("link"),Be(t,"link",e),Ce(t),l.head.appendChild(t)))}}function Lh(e,t){Ft.m(e,t);var a=zl;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+st(l)+'"][href="'+st(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=wl(e)}if(!bt.has(i)&&(e=k({rel:"modulepreload",href:e},t),bt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bn(i)))return}l=a.createElement("link"),Be(l,"link",e),Ce(l),a.head.appendChild(l)}}}function Gh(e,t,a){Ft.S(e,t,a);var l=zl;if(l&&e){var n=Va(l).hoistableStyles,i=Nl(e);t=t||"default";var o=n.get(i);if(!o){var r={loading:0,preload:null};if(o=l.querySelector(vn(i)))r.loading=5;else{e=k({rel:"stylesheet",href:e,"data-precedence":t},a),(a=bt.get(i))&&tr(e,a);var u=o=l.createElement("link");Ce(u),Be(u,"link",e),u._p=new Promise(function(g,y){u.onload=g,u.onerror=y}),u.addEventListener("load",function(){r.loading|=1}),u.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Di(o,t,l)}o={type:"stylesheet",instance:o,count:1,state:r},n.set(i,o)}}}function Qh(e,t){Ft.X(e,t);var a=zl;if(a&&e){var l=Va(a).hoistableScripts,n=wl(e),i=l.get(n);i||(i=a.querySelector(bn(n)),i||(e=k({src:e,async:!0},t),(t=bt.get(n))&&ar(e,t),i=a.createElement("script"),Ce(i),Be(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Xh(e,t){Ft.M(e,t);var a=zl;if(a&&e){var l=Va(a).hoistableScripts,n=wl(e),i=l.get(n);i||(i=a.querySelector(bn(n)),i||(e=k({src:e,async:!0,type:"module"},t),(t=bt.get(n))&&ar(e,t),i=a.createElement("script"),Ce(i),Be(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function td(e,t,a,l){var n=(n=Z.current)?_i(n):null;if(!n)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Nl(a.href),a=Va(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Nl(a.href);var i=Va(n).hoistableStyles,o=i.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,o),(i=n.querySelector(vn(e)))&&!i._p&&(o.instance=i,o.state.loading=5),bt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bt.set(e,a),i||Zh(n,e,a,o.state))),t&&l===null)throw Error(s(528,""));return o}if(t&&l!==null)throw Error(s(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=wl(a),a=Va(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Nl(e){return'href="'+st(e)+'"'}function vn(e){return'link[rel="stylesheet"]['+e+"]"}function ad(e){return k({},e,{"data-precedence":e.precedence,precedence:null})}function Zh(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Be(t,"link",a),Ce(t),e.head.appendChild(t))}function wl(e){return'[src="'+st(e)+'"]'}function bn(e){return"script[async]"+e}function ld(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+st(a.href)+'"]');if(l)return t.instance=l,Ce(l),l;var n=k({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ce(l),Be(l,"style",n),Di(l,a.precedence,e),t.instance=l;case"stylesheet":n=Nl(a.href);var i=e.querySelector(vn(n));if(i)return t.state.loading|=4,t.instance=i,Ce(i),i;l=ad(a),(n=bt.get(n))&&tr(l,n),i=(e.ownerDocument||e).createElement("link"),Ce(i);var o=i;return o._p=new Promise(function(r,u){o.onload=r,o.onerror=u}),Be(i,"link",l),t.state.loading|=4,Di(i,a.precedence,e),t.instance=i;case"script":return i=wl(a.src),(n=e.querySelector(bn(i)))?(t.instance=n,Ce(n),n):(l=a,(n=bt.get(i))&&(l=k({},a),ar(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ce(n),Be(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Di(l,a.precedence,e));return t.instance}function Di(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,o=0;o<l.length;o++){var r=l[o];if(r.dataset.precedence===t)i=r;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function tr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ar(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ri=null;function nd(e,t,a){if(Ri===null){var l=new Map,n=Ri=new Map;n.set(a,l)}else n=Ri,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Dl]||i[_e]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(t)||"";o=e+o;var r=l.get(o);r?r.push(i):l.set(o,[i])}}return l}function id(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Vh(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function cd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kh(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Nl(l.href),i=t.querySelector(vn(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ui.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ce(i);return}i=t.ownerDocument||t,l=ad(l),(n=bt.get(n))&&tr(l,n),i=i.createElement("link"),Ce(i);var o=i;o._p=new Promise(function(r,u){o.onload=r,o.onerror=u}),Be(i,"link",l),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ui.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var lr=0;function Jh(e,t){return e.stylesheets&&e.count===0&&ki(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&ki(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&lr===0&&(lr=62500*Th());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ki(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>lr?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function Ui(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ki(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bi=null;function ki(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bi=new Map,t.forEach(Wh,e),Bi=null,Ui.call(e))}function Wh(e,t){if(!(t.state.loading&4)){var a=Bi.get(e);if(a)var l=a.get(null);else{a=new Map,Bi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var o=n[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),l=o)}l&&a.set(null,l)}n=t.instance,o=n.getAttribute("data-precedence"),i=a.get(o)||l,i===l&&a.set(null,n),a.set(o,n),this.count++,l=Ui.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var yn={$$typeof:Se,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function Fh(e,t,a,l,n,i,o,r,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$i(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$i(0),this.hiddenUpdates=$i(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function od(e,t,a,l,n,i,o,r,u,g,y,S){return e=new Fh(e,t,a,o,u,g,y,S,r),t=1,i===!0&&(t|=24),i=lt(3,null,null,t),e.current=i,i.stateNode=e,t=Uc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},qc(i),e}function rd(e){return e?(e=al,e):al}function ud(e,t,a,l,n,i){n=rd(n),l.context===null?l.context=n:l.pendingContext=n,l=ia(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ca(e,l,t),a!==null&&(Ie(a,e,t),Fl(a,e,t))}function sd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function nr(e,t){sd(e,t),(e=e.alternate)&&sd(e,t)}function fd(e){if(e.tag===13||e.tag===31){var t=Ma(e,67108864);t!==null&&Ie(t,e,67108864),nr(e,67108864)}}function dd(e){if(e.tag===13||e.tag===31){var t=rt();t=Ii(t);var a=Ma(e,t);a!==null&&Ie(a,e,t),nr(e,t)}}var Hi=!0;function $h(e,t,a,l){var n=x.T;x.T=null;var i=M.p;try{M.p=2,ir(e,t,a,l)}finally{M.p=i,x.T=n}}function Ih(e,t,a,l){var n=x.T;x.T=null;var i=M.p;try{M.p=8,ir(e,t,a,l)}finally{M.p=i,x.T=n}}function ir(e,t,a,l){if(Hi){var n=cr(l);if(n===null)Zo(e,t,l,qi,a),hd(e,l);else if(eg(n,e,t,a,l))l.stopPropagation();else if(hd(e,l),t&4&&-1<Ph.indexOf(e)){for(;n!==null;){var i=Za(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=Na(i.pendingLanes);if(o!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;o;){var u=1<<31-tt(o);r.entanglements[1]|=u,o&=~u}Ct(i),(te&6)===0&&(ji=Pe()+500,mn(0))}}break;case 31:case 13:r=Ma(i,2),r!==null&&Ie(r,i,2),zi(),nr(i,2)}if(i=cr(l),i===null&&Zo(e,t,l,qi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else Zo(e,t,l,null,a)}}function cr(e){return e=oc(e),or(e)}var qi=null;function or(e){if(qi=null,e=Xa(e),e!==null){var t=_(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=X(t),e!==null)return e;e=null}else if(a===31){if(e=ue(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return qi=e,null}function md(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hd()){case xr:return 2;case jr:return 8;case Tn:case qd:return 32;case Sr:return 268435456;default:return 32}default:return 32}}var rr=!1,va=null,ba=null,ya=null,xn=new Map,jn=new Map,xa=[],Ph="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hd(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jn.delete(t.pointerId)}}function Sn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Za(t),t!==null&&fd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function eg(e,t,a,l,n){switch(t){case"focusin":return va=Sn(va,e,t,a,l,n),!0;case"dragenter":return ba=Sn(ba,e,t,a,l,n),!0;case"mouseover":return ya=Sn(ya,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return xn.set(i,Sn(xn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,jn.set(i,Sn(jn.get(i)||null,e,t,a,l,n)),!0}return!1}function gd(e){var t=Xa(e.target);if(t!==null){var a=_(t);if(a!==null){if(t=a.tag,t===13){if(t=X(a),t!==null){e.blockedOn=t,Tr(e.priority,function(){dd(a)});return}}else if(t===31){if(t=ue(a),t!==null){e.blockedOn=t,Tr(e.priority,function(){dd(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=cr(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);cc=l,a.target.dispatchEvent(l),cc=null}else return t=Za(a),t!==null&&fd(t),e.blockedOn=a,!1;t.shift()}return!0}function pd(e,t,a){Yi(e)&&a.delete(t)}function tg(){rr=!1,va!==null&&Yi(va)&&(va=null),ba!==null&&Yi(ba)&&(ba=null),ya!==null&&Yi(ya)&&(ya=null),xn.forEach(pd),jn.forEach(pd)}function Li(e,t){e.blockedOn===t&&(e.blockedOn=null,rr||(rr=!0,b.unstable_scheduleCallback(b.unstable_NormalPriority,tg)))}var Gi=null;function vd(e){Gi!==e&&(Gi=e,b.unstable_scheduleCallback(b.unstable_NormalPriority,function(){Gi===e&&(Gi=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(or(l||a)===null)continue;break}var i=Za(a);i!==null&&(e.splice(t,3),t-=3,io(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Al(e){function t(u){return Li(u,e)}va!==null&&Li(va,e),ba!==null&&Li(ba,e),ya!==null&&Li(ya,e),xn.forEach(t),jn.forEach(t);for(var a=0;a<xa.length;a++){var l=xa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<xa.length&&(a=xa[0],a.blockedOn===null);)gd(a),a.blockedOn===null&&xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],o=n[Ve]||null;if(typeof i=="function")o||vd(a);else if(o){var r=null;if(i&&i.hasAttribute("formAction")){if(n=i,o=i[Ve]||null)r=o.formAction;else if(or(n)!==null)continue}else r=o.action;typeof r=="function"?a[l+1]=r:(a.splice(l,3),l-=3),vd(a)}}}function bd(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ur(e){this._internalRoot=e}Qi.prototype.render=ur.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var a=t.current,l=rt();ud(a,l,e,t,null,null)},Qi.prototype.unmount=ur.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ud(e.current,2,null,e,null,null),zi(),t[Qa]=null}};function Qi(e){this._internalRoot=e}Qi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Er();e={blockedOn:null,target:e,priority:t};for(var a=0;a<xa.length&&t!==0&&t<xa[a].priority;a++);xa.splice(a,0,e),a===0&&gd(e)}};var yd=A.version;if(yd!=="19.2.4")throw Error(s(527,yd,"19.2.4"));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=z(t),e=e!==null?Q(e):null,e=e===null?null:e.stateNode,e};var ag={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xi.isDisabled&&Xi.supportsFiber)try{Cl=Xi.inject(ag),et=Xi}catch{}}return Nn.createRoot=function(e,t){if(!E(e))throw Error(s(299));var a=!1,l="",n=ws,i=As,o=Es;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=od(e,1,!1,null,null,a,l,null,n,i,o,bd),e[Qa]=t.current,Xo(e),new ur(t)},Nn.hydrateRoot=function(e,t,a){if(!E(e))throw Error(s(299));var l=!1,n="",i=ws,o=As,r=Es,u=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.formState!==void 0&&(u=a.formState)),t=od(e,1,!0,t,a??null,l,n,u,i,o,r,bd),t.context=rd(null),a=t.current,l=rt(),l=Ii(l),n=ia(l),n.callback=null,ca(a,n,l),a=l,t.current.lanes=a,_l(t,a),Ct(t),e[Qa]=t.current,Xo(e),new Qi(t)},Nn.version="19.2.4",Nn}var Md;function dg(){if(Md)return dr.exports;Md=1;function b(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b)}catch(A){console.error(A)}}return b(),dr.exports=fg(),dr.exports}var mg=dg();const Od=Ee.createContext(),hg=({children:b})=>{const[A,w]=Ee.useState(window.location.pathname);Ee.useEffect(()=>{const E=()=>{w(window.location.pathname)};return window.addEventListener("popstate",E),()=>window.removeEventListener("popstate",E)},[]);const s=E=>{if(typeof E=="number"){window.history.go(E);return}window.history.pushState({},"",E),w(E),window.scrollTo(0,0)};return c.jsx(Od.Provider,{value:{currentPath:A,navigate:s},children:b})},Ot=()=>Ee.useContext(Od),wn=({to:b,children:A,className:w,onClick:s})=>{const{navigate:E}=Ot(),_=X=>{X.preventDefault(),s&&s(X),E(b)};return c.jsx("a",{href:b,className:w,onClick:_,children:A})},An=()=>{const[b,A]=Ee.useState(!1),[w,s]=Ee.useState(!1),{navigate:E}=Ot();Ee.useEffect(()=>{const T=z=>{const Q=document.querySelector(".navbar-wrapper");Q&&!Q.contains(z.target)&&A(!1)};return document.addEventListener("click",T),()=>document.removeEventListener("click",T)},[]);const _=[{title:"AC Service & Repair",subtitle:"Smart Cooling Solutions",id:"ac-service"},{title:"Plumber",subtitle:"24/7 Emergency Pipe Fixes",id:"plumber"},{title:"Electrician",subtitle:"Safe Circuit Solutions",id:"electrician"},{title:"Filter RO",subtitle:"Pure Drinking Water",id:"filter-ro"},{title:"Cleaner",subtitle:"Eco-Clean Specialists",id:"cleaner"},{title:"Home Appliances",subtitle:"Repair & Maintenance",id:"home-appliances"}],X=T=>{E(`/service/${T}`),A(!1),s(!1)},ue=()=>{s(!w)};return Ee.useEffect(()=>(w?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[w]),c.jsxs("nav",{className:"navbar-wrapper",children:[c.jsxs("div",{className:"navbar-inner container",children:[c.jsx(wn,{to:"/",className:"navbar-logo",children:c.jsx("span",{className:"brand-name",children:"zervocompany"})}),c.jsxs("div",{className:"navbar-links desktop-only",children:[c.jsxs("div",{className:"nav-item-dropdown",children:[c.jsx("button",{className:`nav-link dropdown-toggle ${b?"active":""}`,onClick:()=>A(!b),children:"Services"}),b&&c.jsx("div",{className:"services-dropdown",children:c.jsx("ul",{children:_.map((T,z)=>c.jsxs("li",{className:"dropdown-item",onClick:()=>X(T.id),children:[c.jsx("div",{className:"item-title",children:T.title}),c.jsx("div",{className:"item-subtitle",children:T.subtitle})]},z))})})]}),c.jsx(wn,{to:"/",className:"nav-link",children:"Blogs"}),c.jsx(wn,{to:"/",className:"nav-link",children:"App"})]}),c.jsx("div",{className:"navbar-actions desktop-only",children:c.jsxs("button",{className:"btn-primary",onClick:()=>window.open(`https://wa.me/918354067979?text=${encodeURIComponent("Hello zervocompany, I want to become a service provider.")}`,"_blank"),children:[c.jsx("span",{className:"icon",children:"Store"}),"Become Service Provider"]})}),c.jsx("button",{className:"mobile-menu-btn",onClick:ue,children:w?c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M18 6L6 18",stroke:"#1f2937",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M6 6L18 18",stroke:"#1f2937",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}):c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M4 6H20",stroke:"#1f2937",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M4 12H20",stroke:"#1f2937",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M4 18H20",stroke:"#1f2937",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),w&&c.jsx("div",{className:"mobile-menu-overlay",children:c.jsx("div",{className:"mobile-menu-content",children:c.jsxs("div",{className:"mobile-nav-links",children:[c.jsxs("div",{className:"mobile-nav-item",children:[c.jsx("span",{className:"mobile-nav-header",children:"Services"}),c.jsx("div",{className:"mobile-services-grid",children:_.map((T,z)=>c.jsx("div",{className:"mobile-service-item",onClick:()=>X(T.id),children:T.title},z))})]}),c.jsx(wn,{to:"/",className:"mobile-nav-link",onClick:()=>s(!1),children:"Blogs"}),c.jsx(wn,{to:"/",className:"mobile-nav-link",onClick:()=>s(!1),children:"App"}),c.jsx("div",{className:"mobile-nav-item",children:c.jsx("button",{className:"btn-primary width-full",onClick:()=>{window.open(`https://wa.me/918354067979?text=${encodeURIComponent("Hello zervocompany, I want to become a service provider.")}`,"_blank"),s(!1)},children:"Become Service Provider"})})]})})})]}),c.jsx("style",{children:`
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
          text-transform: lowercase;
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
      `})]})},Tl=()=>c.jsxs("footer",{children:[c.jsx("div",{className:"seo-links-section",children:c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Categories"}),c.jsx("p",{children:"AC Service & Repair Near Me | AC Cleaning Service Near Me | AC Installation Near Me | AC Repair Near Me | Plumber Near Me | Bathroom Plumbing Service Near Me | Kitchen Plumbing Service Near Me | Emergency Plumbing Service Near Me | Electrician Near Me | Home Electrical Repair Near Me | Switch & Wiring Service Near Me | Filter RO Near Me | Water Purifier Service Near Me | RO Repair Near Me | Cleaning Services Near Me | Bathroom Cleaning Near Me | Kitchen Cleaning Near Me | Home Appliances Near Me | Washing Machine Repair Near Me | Refrigerator Repair Near Me | Microwave Repair Near Me"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Services Near Me"}),c.jsx("p",{children:"AC Service Near Me | AC Cleaning Service Near Me | AC Repair Near Me | Electrician Near Me | Plumber Near Me | Carpenter Near Me | Bathroom Cleaning Near Me | Kitchen Cleaning Near Me | Chimney Cleaning Service Near Me | Washing Machine Repair Near Me | Refrigerator Repair Near Me | Geyser Repair Near Me"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Explore Our Newly Launched At-Home Services"}),c.jsx("p",{children:"AC Deep Cleaning at Home | Kitchen Chimney Cleaning at Home | Sofa & Carpet Cleaning at Home | Bathroom Deep Cleaning at Home | Home Electrical Safety Check | Emergency Plumbing Service | Geyser Installation Service | Appliance Maintenance Service"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Engage With Our Community in the Forum"}),c.jsx("p",{children:"Home Maintenance Tips | AC Care & Cleaning Guide | Kitchen Cleaning Best Practices | Electrical Safety Discussions | Plumbing Problem Solutions | Appliance Usage & Care Tips | Customer Experiences & Reviews | Ask an Expert"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Other Services We Provide"}),c.jsx("p",{children:"Women Salon at Home | Men Salon at Home | Beauty & Grooming Services | Real Estate Property Services | Property Buy & Sell Assistance | Home Inspection Services | Expert Consultation Services"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Serving In Aligarh"}),c.jsx("p",{children:"Civil Lines | Quarsi | Ramdaspur | Sasni Gate | Centre Point | Dodhpur | Surendra Nagar | Mahavir Ganj | Delhi Gate | AMU Campus Area | Achal Tal | Vishnupuri | Lodha Road | Atrauli Road | Gular Road | Rasalganj | Naurangabad | Jamalpur"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Serving In Mathura"}),c.jsx("p",{children:"Vrindavan | Govardhan | Kosi Kalan | Chhata | Radhika Vihar | Masani Road | Janambhoomi Area | Goverdhan Chauraha | Krishna Nagar | Dampier Nagar | Bhuteshwar Road | Holi Gate Area | Aurangabad | Farah | Raya"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Serving In Agra"}),c.jsx("p",{children:"Tajganj | Sikandra | Kamla Nagar | Dayal Bagh | Shahganj | Rakabganj | Fatehabad Road | Sadar Bazaar | Bodla | Trans Yamuna Colony | Khandari | Shastripuram | Tedi Baghia | Arjun Nagar | Kalindi Vihar"})]}),c.jsxs("div",{className:"seo-group",children:[c.jsx("h3",{children:"Serving In Hathras"}),c.jsx("p",{children:"Hathras City | Sadabad | Mursan | Sikandra Rao | Hasayan | Sasni | Purdilnagar | Iglas | Jalesar Road Area | Bagla Area | Nagla Hira Singh | Chandpa | Ladpur | Rati Ka Nagla | Ahamadpur | Rampur | Keshopur"})]})]})}),c.jsx("div",{className:"main-footer",children:c.jsx("div",{className:"container",children:c.jsxs("div",{className:"footer-grid",children:[c.jsx("div",{className:"footer-col brand-col",children:c.jsxs("h2",{className:"footer-brand",children:["zervo",c.jsx("span",{className:"brand-highlight",children:"company"})]})}),c.jsxs("div",{className:"footer-col links-col",children:[c.jsx("h4",{children:"Links"}),c.jsxs("ul",{children:[c.jsx("li",{children:c.jsx("a",{href:"/",onClick:b=>{b.preventDefault(),window.history.pushState({},"","/"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"Home"})}),c.jsx("li",{children:c.jsx("a",{href:"/about",onClick:b=>{b.preventDefault(),window.history.pushState({},"","/about"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"About us"})}),c.jsx("li",{children:c.jsx("a",{href:"/contact",onClick:b=>{b.preventDefault(),window.history.pushState({},"","/contact"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"Contact Us"})}),c.jsx("li",{children:c.jsx("a",{href:"/terms",onClick:b=>{b.preventDefault(),window.history.pushState({},"","/terms"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"Terms and Conditions"})}),c.jsx("li",{children:c.jsx("a",{href:"/privacy",onClick:b=>{b.preventDefault(),window.history.pushState({},"","/privacy"),window.dispatchEvent(new PopStateEvent("popstate"))},children:"Privacy Policy"})})]})]}),c.jsxs("div",{className:"footer-col newsletter-col",children:[c.jsx("h4",{children:"Join our mailing list and get industry insights"}),c.jsx("div",{className:"newsletter-form",children:c.jsx("input",{type:"email",placeholder:"your email",id:"footer-email"})}),c.jsx("button",{className:"join-btn",onClick:()=>{const b=document.getElementById("footer-email").value,A=`Hello zervocompany, I would like to join your newsletter. ${b?"My email is "+b:""}`;window.open(`https://wa.me/918354067979?text=${encodeURIComponent(A)}`,"_blank")},children:"Join Newsletter"}),c.jsxs("div",{className:"social-icons",children:[c.jsx("a",{href:"https://wa.me/918354067979",target:"_blank",rel:"noopener noreferrer",children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"})})}),c.jsx("a",{href:"#",children:c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),c.jsx("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),c.jsx("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})}),c.jsx("a",{href:"#",children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})})]})]})]})})}),c.jsx("style",{children:`
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

                .boomzo-logo {
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
            `})]}),gg=()=>c.jsxs("div",{className:"hero-image-wrapper",children:[c.jsx("div",{className:"image-frame",children:c.jsx("img",{src:"/main image.png",alt:"AC Service Professional",className:"professional-image"})}),c.jsx("div",{className:"floating-badge badge-trust",children:c.jsxs("div",{className:"badge-content",children:[c.jsx("span",{className:"badge-label",children:"Trust Factor"}),c.jsxs("div",{className:"badge-value-row",children:[c.jsx("span",{className:"icon-check-circle",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z",fill:"#10B981",stroke:"#10B981",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M7.75 12L10.58 14.83L16.25 9.17004",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),c.jsx("span",{className:"badge-value",children:"100% Verified"})]})]})}),c.jsxs("div",{className:"floating-badge badge-pros",children:[c.jsx("div",{className:"badge-icon-box",children:c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2C11.4501 2 13.4401 3.99 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87Z",stroke:"#3B82F6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11",stroke:"#3B82F6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z",stroke:"#3B82F6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M18.3401 20C19.0601 19.85 19.7401 19.56 20.3001 19.13C21.8601 17.96 21.8601 16.03 20.3001 14.86C19.7501 14.44 19.0801 14.16 18.3701 14",stroke:"#3B82F6",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),c.jsxs("div",{className:"badge-content",children:[c.jsx("span",{className:"badge-label-small",children:"Active Pros"}),c.jsx("span",{className:"badge-value-large",children:"200+"})]})]}),c.jsx("style",{children:`
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
        
      `})]}),vr={"ac-service":{id:"ac-service",title:"AC Service & Repair",description:"Expert AC service, repair, and installation at your doorstep.",rating:4.8,reviewsCount:"1200+",heroImage:"/hero service (2).png",expertImage:"/hero service (2).png",about:{title:"About AC Service & Repair",description:"zervocompany provides top-notch AC repair, installation, and maintenance services. Our certified technicians are experts in handling all major brands and types of air conditioners, ensuring your home stays cool and comfortable."},subServices:[{title:"AC Checkup & Repair",description:"Complete diagnosis and fix.",price:"299",rating:4.9,image:"/ac servive.jpeg",isMostBooked:!0},{title:"Split AC Jet Service",description:"Deep jet cleaning for better cooling.",price:"499",rating:4.8,image:"/ac servive.jpeg",isMostBooked:!0},{title:"Window AC Service",description:"Efficient cleaning and checkup.",price:"399",rating:4.7,image:"/ac servive.jpeg"},{title:"AC Installation",description:"Professional unit installation.",price:"1200",rating:4.9,image:"/ac servive.jpeg"}],reviews:[]},plumber:{id:"plumber",title:"Plumber",description:"Expert plumbing services for leaks, fittings, and blockages.",rating:4.7,reviewsCount:"800+",heroImage:"/hero service (2).png",expertImage:"/hero service (2).png",about:{title:"About Plumbing Services",description:"zervocompany offers reliable plumbing solutions. Leaky taps, clogged drains, or new bathroom fittings – our plumbers are equipped to handle everything efficiently."},subServices:[{title:"Tap Repair & Installation",description:"Fixing leaks and new taps.",price:"149",rating:4.8,image:"/plumber.jpeg",isMostBooked:!0},{title:"Toilet & Bathroom Fittings",description:"Expert installation of fittings.",price:"249",rating:4.7,image:"/plumber.jpeg"},{title:"Drain Unclogging",description:"Clearing blockages instantly.",price:"399",rating:4.9,image:"/plumber.jpeg",isMostBooked:!0},{title:"Water Tank Cleaning",description:"Hygienic tank maintenance.",price:"799",rating:4.6,image:"/plumber.jpeg"}],reviews:[]},electrician:{id:"electrician",title:"Electrician",description:"Certified electricians for wiring, fans, and appliance repairs.",rating:4.9,reviewsCount:"1500+",heroImage:"/hero service (2).png",expertImage:"/hero service (2).png",about:{title:"About Electrician Services",description:"Safety first! zervocompany provides certified electricians for all your electrical needs. We ensure 100% safety and compliance for every job."},subServices:[{title:"Switch & Socket Repair",description:"Fixing faulty points.",price:"99",rating:4.8,image:"/electrician.jpeg",isMostBooked:!0},{title:"Fan Installation/Repair",description:"Ceiling and exhaust fans.",price:"199",rating:4.9,image:"/electrician.jpeg"},{title:"MCB & Fuse Box Work",description:"Circuit breaker issues.",price:"299",rating:4.7,image:"/electrician.jpeg",isMostBooked:!0},{title:"Complete Home Wiring",description:"Safe electrical setup.",price:"4999",rating:4.9,image:"/electrician.jpeg"}],reviews:[]},"filter-ro":{id:"filter-ro",title:"Filter RO",description:"Professional RO service and filter replacement.",rating:4.7,reviewsCount:"600+",heroImage:"/hero service (2).png",expertImage:"/hero service (2).png",about:{title:"About Filter RO Service",description:"Get pure drinking water with zervocompany's RO service. We provide regular maintenance, filter replacement, and repair services for all brands."},subServices:[{title:"RO Service & Cleanup",description:"Full internal cleaning.",price:"399",rating:4.8,image:"/electronic repair.webp",isMostBooked:!0},{title:"Filter/Membrane Change",description:"Genuine spare parts.",price:"599",rating:4.7,image:"/electronic repair.webp",isMostBooked:!0},{title:"RO Installation",description:"Professional setup.",price:"600",rating:4.9,image:"/electronic repair.webp"},{title:"Water Purifier Repair",description:"Any brand fixes.",price:"299",rating:4.6,image:"/electronic repair.webp"}],reviews:[]},cleaner:{id:"cleaner",title:"Cleaner",description:"Deep cleaning services for home and office.",rating:4.8,reviewsCount:"900+",heroImage:"/hero service (2).png",expertImage:"/hero service (2).png",about:{title:"About Cleaning Services",description:"zervocompany transforms your space with professional deep cleaning. We use eco-friendly chemicals and equipment to ensure a hygienic environment."},subServices:[{title:"Full Home Deep Clean",description:"Complete house cleaning.",price:"1999",rating:4.8,image:"/home cleaning.jpg",isMostBooked:!0},{title:"Bathroom Deep Cleaning",description:"Stain removal & sanitization.",price:"499",rating:4.9,image:"/washroom.jpeg",isMostBooked:!0},{title:"Kitchen Deep Cleaning",description:"Oil & grease removal.",price:"999",rating:4.7,image:"/home cleaning.jpg"},{title:"Sofa & Carpet Cleaning",description:"Vacuum & shampooing.",price:"699",rating:4.8,image:"/home cleaning.jpg"}],reviews:[]},"home-appliances":{id:"home-appliances",title:"Home Appliances",description:"Repair services for washing machines, fridges, and more.",rating:4.7,reviewsCount:"400+",heroImage:"/hero service (2).png",expertImage:"/hero service (2).png",about:{title:"About Home Appliance Repair",description:"Expert repair for all your home appliances. From washing machines to refrigerators, zervocompany ensures quick and lasting fixes."},subServices:[{title:"Washing Machine Repair",description:"Top & Front load expert.",price:"499",rating:4.7,image:"/electronic repair.webp",isMostBooked:!0},{title:"Refrigerator Repair",description:"Cooling & gas issues.",price:"599",rating:4.8,image:"/electronic repair.webp",isMostBooked:!0},{title:"Microwave Repair",description:"Heating & panel fixes.",price:"399",rating:4.6,image:"/electronic repair.webp"},{title:"Geyser Service/Repair",description:"Winter ready maintenance.",price:"499",rating:4.5,image:"/geyser.jpeg"}],reviews:[]},default:{id:"default",title:"Expert Service by zervocompany",description:"Professional services at your doorstep.",rating:4.8,reviewsCount:"1000+",heroImage:"/hero service (2).png",expertImage:"/hero service (2).png",about:{title:"About Service",description:"We provide high quality services."},subServices:[],reviews:[]}},pg=()=>{const{navigate:b}=Ot(),[A,w]=Ee.useState(""),[s,E]=Ee.useState([]),[_,X]=Ee.useState(!1),[ue,T]=Ee.useState([]);Ee.useEffect(()=>{const I=[];Object.values(vr).forEach(pe=>{pe.id!=="default"&&(I.push({name:pe.title.replace("Get Best ","").replace(" in Aligarh",""),type:"Service Category",link:`/service/${pe.id}`}),pe.subServices&&pe.subServices.forEach(Se=>{I.push({name:Se.title,type:"Service",link:`/service/${pe.id}`})}))}),T(I)},[]);const z=I=>{const pe=I.target.value;if(w(pe),pe.length>1){const Se=ue.filter(Ge=>Ge.name.toLowerCase().includes(pe.toLowerCase()));E(Se),X(!0)}else E([]),X(!1)},[Q,k]=Ee.useState("Aligarh"),[se,ke]=Ee.useState(!1),He=["Aligarh","Agra","Mathura","Hathras"],Me=()=>{if(!A&&!Q)return;const I=`Hello zervocompany, I am looking for ${A||"services"} in ${Q}.`;window.open(`https://wa.me/918354067979?text=${encodeURIComponent(I)}`,"_blank")},yt=I=>{const pe=`Hello zervocompany, I am looking for ${I} in ${Q}.`;window.open(`https://wa.me/918354067979?text=${encodeURIComponent(pe)}`,"_blank"),X(!1)};return c.jsxs("section",{className:"hero-section",children:[c.jsx("div",{className:"bg-blob blob-1"}),c.jsx("div",{className:"bg-blob blob-2"}),c.jsxs("div",{className:"container hero-inner",children:[c.jsxs("div",{className:"hero-content",children:[c.jsxs("div",{className:"hero-badge",children:[c.jsx("span",{className:"badge-dot"}),c.jsx("span",{children:"#1 Service Platform by zervocompany"})]}),c.jsxs("h1",{className:"hero-title",children:["Expert Services at",c.jsx("br",{}),c.jsx("span",{className:"text-gradient",children:"Your Doorstep"})]}),c.jsx("p",{className:"hero-description",children:"Experience reliable, professional, and affordable services from zervocompany. From fixing ACs to home cleaning, we have it all."}),c.jsxs("div",{className:"search-container",children:[c.jsxs("div",{className:"search-bar",children:[c.jsxs("div",{className:"location-select",onClick:()=>ke(!se),children:[c.jsx("span",{className:"icon-location",children:c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z",stroke:"#292D32",strokeWidth:"1.5"}),c.jsx("path",{d:"M3.62001 8.49003C5.59001 -0.169969 18.42 -0.159969 20.38 8.50003C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54C5.63001 17.88 2.47001 13.57 3.62001 8.49003Z",stroke:"#292D32",strokeWidth:"1.5"})]})}),c.jsx("span",{className:"location-text",children:Q}),c.jsx("div",{className:"separator"}),se&&c.jsx("div",{className:"location-dropdown",children:He.map(I=>c.jsx("div",{className:"location-item",onClick:()=>{k(I),ke(!1)},children:I},I))})]}),c.jsx("input",{type:"text",placeholder:"Search for 'AC Service'...",className:"search-input",value:A,onChange:z,onFocus:()=>{A.length>1&&X(!0)},onBlur:()=>setTimeout(()=>X(!1),200),onKeyPress:I=>I.key==="Enter"&&Me()}),c.jsx("div",{className:"search-actions",children:c.jsx("button",{className:"btn-search",onClick:Me,children:c.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M22 22L20 20",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})})]}),_&&s.length>0&&c.jsx("div",{className:"search-results",children:s.map((I,pe)=>c.jsxs("div",{className:"search-result-item",onClick:()=>yt(I.name),children:[c.jsx("div",{className:"result-icon",children:c.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z",stroke:"#9CA3AF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M22 22L20 20",stroke:"#9CA3AF",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}),c.jsxs("div",{className:"result-info",children:[c.jsx("span",{className:"result-name",children:I.name}),c.jsx("span",{className:"result-type",children:I.type})]})]},pe))})]}),c.jsxs("div",{className:"hero-stats",children:[c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"200+"}),c.jsx("span",{className:"stat-label",children:"Professionals"})]}),c.jsx("div",{className:"stat-divider"}),c.jsxs("div",{className:"stat-item",children:[c.jsx("span",{className:"stat-number",children:"10k+"}),c.jsx("span",{className:"stat-label",children:"Happy Customers"})]})]})]}),c.jsx("div",{className:"hero-visual",children:c.jsx(gg,{})})]}),c.jsx("style",{children:`
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

        .location-select {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0 1.2rem;
          color: var(--color-text-main);
          font-weight: 600;
          cursor: pointer;
          position: relative;
        }

        .location-dropdown {
            position: absolute;
            top: 120%;
            left: 0;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            width: 150px;
            z-index: 100;
            padding: 8px;
            border: 1px solid #f3f4f6;
        }

        .location-item {
            padding: 8px 12px;
            border-radius: 8px;
            transition: background 0.2s;
            font-size: 0.9rem;
        }

        .location-item:hover {
            background-color: #F8F7FF;
            color: var(--color-secondary);
        }

        .separator {
          width: 1px;
          height: 24px;
          background-color: #e5e7eb;
          margin-left: 0.5rem;
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
            
            .location-select {
                width: 100%;
                border-bottom: 1px solid #eee;
                padding-bottom: 10px;
                justify-content: center;
            }
            
            .separator {
                display: none;
            }
            
            .search-input {
                width: 100%;
                text-align: center;
                padding: 5px;
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

      `})]})},vg=({image:b,title:A,rating:w,price:s,isMostBooked:E})=>{const{navigate:_}=Ot(),X=()=>{const ue=`Hello zervocompany, I want to book ${A} service.`,T=encodeURIComponent(ue);window.open(`https://wa.me/918354067979?text=${T}`,"_blank")};return c.jsxs("div",{className:"service-card",children:[c.jsxs("div",{className:"card-image-container",children:[c.jsx("img",{src:b,alt:A,className:"card-image"}),E&&c.jsx("div",{className:"badge-most-booked",children:"MOST BOOKED"}),c.jsxs("div",{className:"badge-rating",children:[c.jsx("span",{className:"star",children:"★"})," ",w]})]}),c.jsxs("div",{className:"card-content",children:[c.jsx("h3",{className:"service-title",children:A}),c.jsxs("div",{className:"card-footer",children:[c.jsxs("div",{className:"price-info",children:[c.jsx("span",{className:"price-label",children:"STARTS FROM"}),c.jsxs("span",{className:"price-value",children:["₹",s]})]}),c.jsx("button",{className:"btn-book",onClick:X,children:"Book Now"})]})]}),c.jsx("style",{children:`
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
      `})]})},El=({categoryId:b})=>{const A=vr[b];if(!A)return null;const w=A.subServices.map((s,E)=>({id:E,...s}));return c.jsxs("section",{className:"home-services-section",id:b,children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-left",children:[c.jsxs("h2",{className:"section-title",children:[A.title.split(" ")[0]," ",c.jsx("span",{className:"text-secondary",children:A.title.split(" ").slice(1).join(" ")})]}),c.jsx("p",{className:"section-subtitle",children:A.description}),c.jsxs("div",{className:"rating-row",children:[c.jsx("div",{className:"stars",children:"★".repeat(5)}),c.jsxs("span",{className:"rating-text",children:[A.rating," • ",A.reviewsCount," reviews"]})]})]}),c.jsx("div",{className:"services-grid",children:w.map(s=>c.jsx(vg,{...s},s.id))})]}),c.jsx("style",{children:`
        .home-services-section {
          padding-top: 1rem;
          padding-bottom: 4rem;
          background-color: #F5F2FC; /* Matching global background */
        }

        .section-header-left {
          text-align: left;
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 0.5rem;
        }

        .text-secondary {
          background: linear-gradient(90deg, #a855f7, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .section-subtitle {
          color: var(--color-text-muted);
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .rating-row {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            color: var(--color-text-main);
            font-weight: 500;
        }
        
        .stars {
            color: #fbbf24; /* Amber/Gold */
            letter-spacing: 2px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }
        
        /* Adjustments for responsiveness if needed */
        @media (max-width: 768px) {
           .section-header-left {
              text-align: center;
           }
           .rating-row {
              justify-content: center;
           }
        }
      `})]})},bg=()=>c.jsxs("section",{className:"cities-expansion-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"section-header-left",children:[c.jsxs("h2",{className:"section-title",children:["Cities ",c.jsx("span",{className:"text-secondary",children:"& Expansion"})]}),c.jsx("p",{className:"section-subtitle",children:"Experience premium home services in your neighborhood. We are expanding rapidly."})]}),c.jsxs("div",{className:"cities-container",children:[c.jsxs("div",{className:"city-card large aligarh",children:[c.jsx("img",{src:"/main image.png",alt:"Aligarh",className:"city-bg"}),c.jsx("div",{className:"badge-live",children:"Live Now"}),c.jsxs("div",{className:"city-content",children:[c.jsx("h3",{className:"city-name",children:"Aligarh"}),c.jsx("p",{className:"city-desc",children:"Full service suite available. Book top-rated professionals for AC repair, plumbing, and electrical needs instantly."}),c.jsxs("button",{className:"btn-view",children:["View Services",c.jsx("span",{className:"arrow",children:"➜"})]})]}),c.jsx("div",{className:"overlay"})]}),c.jsxs("div",{className:"cities-right-grid",children:[c.jsxs("div",{className:"city-card small agra",children:[c.jsx("img",{src:"/agra.jpeg",alt:"Agra",className:"city-bg"}),c.jsx("div",{className:"badge-live",children:"Live Now"}),c.jsxs("div",{className:"city-content",children:[c.jsx("h3",{className:"city-name",children:"Agra"}),c.jsx("p",{className:"city-desc",children:"Bringing expert home services to the city of the Taj. Join the waitlist."})]}),c.jsx("div",{className:"overlay"})]}),c.jsxs("div",{className:"city-card small delhi",children:[c.jsx("img",{src:"/delhi.jpg",alt:"New Delhi",className:"city-bg"}),c.jsx("div",{className:"badge-coming",children:"Coming Soon"}),c.jsxs("div",{className:"city-content",children:[c.jsx("h3",{className:"city-name",children:"New Delhi"}),c.jsx("p",{className:"city-desc",children:"Expanding to the capital. Quality technicians arriving soon."})]}),c.jsx("div",{className:"overlay"})]}),c.jsxs("div",{className:"city-card small lucknow",children:[c.jsx("img",{src:"/mathura.jpeg",alt:"Lucknow",className:"city-bg"}),c.jsx("div",{className:"badge-coming",children:"Coming Soon"}),c.jsxs("div",{className:"city-content",children:[c.jsx("h3",{className:"city-name",children:"Lucknow"}),c.jsx("p",{className:"city-desc",children:"The City of Nawabs will soon experience premium service."})]}),c.jsx("div",{className:"overlay"})]})]})]})]}),c.jsx("style",{children:`
        .cities-expansion-section {
          padding-top: 2rem;
          padding-bottom: 4rem;
          background-color: #F5F2FC;
        }

        .section-header-left {
          text-align: left;
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--color-black);
          margin-bottom: 0.5rem;
        }
        
        .text-secondary {
            color: #6d7482; /* Using grey for ' & Expansion' based on design */
        }
        
        .section-title span.text-secondary {
            background: none;
            -webkit-text-fill-color: initial;
            color: #64748b;
        }

        .section-subtitle {
          color: var(--color-text-muted);
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          max-width: 600px;
        }

        .cities-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            min-height: 500px;
        }

        .cities-right-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 1.5rem;
        }

        /* Span Agra across full width of right grid */
        .agra {
            grid-column: 1 / -1;
        }

        .city-card {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            color: white;
        }

        .city-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .city-card:hover .city-bg {
            transform: scale(1.05);
        }

        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7));
            pointer-events: none;
        }

        .badge-live {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: #10b981; /* Green */
            color: white;
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
            z-index: 2;
        }

        .badge-coming {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: #1f2937; /* Dark Grey */
            color: white;
            padding: 4px 12px;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 600;
            z-index: 2;
        }

        .city-content {
            position: absolute;
            bottom: 30px;
            left: 30px;
            right: 30px;
            z-index: 2;
        }

        .city-name {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .city-desc {
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
            opacity: 0.9;
            line-height: 1.4;
        }

        .btn-view {
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            padding: 10px 20px;
            border-radius: 9999px;
            font-size: 0.9rem;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: background 0.2s;
        }

        .btn-view:hover {
            background-color: rgba(255, 255, 255, 0.3);
        }

        /* Specific sizing */
        .large .city-name { font-size: 2.5rem; }
        .small .city-name { font-size: 1.5rem; }
        .small .city-desc { margin-bottom: 0; font-size: 0.8rem; }

        @media (max-width: 900px) {
            .cities-container {
                grid-template-columns: 1fr;
            }
            .large {
                min-height: 400px;
            }
            /* Ensure small cards have height when grid changes */
            .small {
                min-height: 250px;
            }
        }

        @media (max-width: 600px) {
            .cities-container {
                gap: 1rem;
            }
            
            .cities-right-grid {
                grid-template-columns: 1fr;
                grid-template-rows: auto;
                gap: 1rem;
            }
            
            .large .city-name { font-size: 1.8rem; }
            .small .city-name { font-size: 1.5rem; }
            .city-desc { font-size: 0.9rem; }
            
            .badge-live, .badge-coming {
                top: 15px;
                left: 15px;
            }
            
            .city-content {
                bottom: 20px;
                left: 20px;
                right: 20px;
            }
        }
      `})]}),yg=()=>{const b=[{id:1,name:"Amit Gupta",category:"Plumbing",rating:5,review:"Needed a carpenter, and zervocompany made it so easy to find the right person. The interface is clean, and the service was prompt. Highly recommend!",initials:"AG",color:"#d97706"},{id:2,name:"Priya Verma",category:"Transport",rating:5,review:"The taxi service was quick and reliable. I'll definitely use zervocompany again! It's rare to find such consistent quality across different services.",initials:"PV",color:"#db2777"},{id:3,name:"Aditi Sharma",category:"Cleaning",rating:4.5,review:"The deep cleaning service exceeded my expectations. They arrived on time with all the necessary equipment. My apartment looks brand new.",initials:"AS",color:"#2563eb"},{id:4,name:"Rahul Singh",category:"Chimney Service",rating:5,review:"I booked a chimney cleaning and repair service through zervocompany. The technician was punctual, professional, and left the hearth spotless—highly recommended!",initials:"RS",color:"#059669"}];return c.jsxs("section",{className:"trusted-reviews-section",children:[c.jsx("div",{className:"container",children:c.jsxs("div",{className:"content-wrapper",children:[c.jsxs("div",{className:"left-column",children:[c.jsxs("h2",{className:"section-title",children:["Trusted by ",c.jsx("span",{className:"text-secondary",children:"100k+"}),c.jsx("br",{}),"For Quality Services"]}),c.jsx("p",{className:"section-subtitle",children:"Join a community that values excellence. We connect you with top-tier professionals ensuring every job is done right, the first time."}),c.jsxs("div",{className:"features-list",children:[c.jsxs("div",{className:"feature-item",children:[c.jsx("div",{className:"icon-box blue",children:c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),c.jsx("path",{d:"M9 12l2 2 4-4"})]})}),c.jsxs("div",{className:"feature-text",children:[c.jsx("h3",{children:"Verified Professionals"}),c.jsx("p",{children:"Every expert undergoes a rigorous background check and skill assessment."})]})]}),c.jsxs("div",{className:"feature-item",children:[c.jsx("div",{className:"icon-box orange",children:c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"}),c.jsx("path",{d:"M9 12l2 2 4-4"})]})}),c.jsxs("div",{className:"feature-text",children:[c.jsx("h3",{children:"Guaranteed Satisfaction"}),c.jsx("p",{children:"We stand by our service quality. Not happy? We'll make it right."})]})]}),c.jsxs("div",{className:"feature-item",children:[c.jsx("div",{className:"icon-box purple",children:c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("path",{d:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"})})}),c.jsxs("div",{className:"feature-text",children:[c.jsx("h3",{children:"Seamless Experience"}),c.jsx("p",{children:"Book in seconds, track in real-time. Hassle-free from start to finish."})]})]})]}),c.jsxs("button",{className:"btn-explore",children:["Explore Services",c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),c.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]}),c.jsx("div",{className:"right-column",children:c.jsx("div",{className:"reviews-grid",children:b.map(A=>c.jsxs("div",{className:"review-card",children:[c.jsxs("div",{className:"card-top",children:[c.jsxs("div",{className:"stars",children:["★".repeat(Math.floor(A.rating)),A.rating%1!==0&&"½"]}),c.jsx("span",{className:"category-badge",children:A.category})]}),c.jsxs("p",{className:"review-text",children:['"',A.review,'"']}),c.jsxs("div",{className:"user-profile",children:[c.jsx("div",{className:"avatar",style:{backgroundColor:A.color},children:A.initials}),c.jsxs("div",{className:"user-info",children:[c.jsx("h4",{className:"user-name",children:A.name}),c.jsx("span",{className:"verified-badge",children:"Verified Customer"})]})]})]},A.id))})})]})}),c.jsx("style",{children:`
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
      `})]})},xg=()=>{const[b,A]=Ee.useState(null),w=E=>{A(b===E?null:E)},s=[{title:"AC Service & Repair",desc:"Expert repair, deep cleaning, gas refilling, installation, and maintenance for split & window ACs."},{title:"Plumber",desc:"Reliable plumbing services for leak repairs, pipe installation, bathroom fittings, and general maintenance."},{title:"Electrician",desc:"Certified electricians for wiring, switchboard repairs, appliance installation, and all electrical needs."},{title:"Filter RO",desc:"Professional RO service, filter replacement, and water purifier repair for all brands."},{title:"Cleaner",desc:"Professional home and office deep cleaning services ensuring a spotless and hygienic environment."},{title:"Home Appliances",desc:"Expert repair services for washing machines, refrigerators, microwaves, and other home appliances."}];return c.jsxs("section",{className:"about-services-section",children:[c.jsxs("div",{className:"container",children:[c.jsxs("div",{className:"about-block",children:[c.jsx("div",{className:"heading-wrapper",children:c.jsx("h2",{className:"about-title",children:"About zervocompany's Services"})}),c.jsx("p",{className:"about-desc",children:"zervocompany is your trusted one-stop platform for premium home and lifestyle services. We connect you with 100% verified, skilled professionals who deliver reliable, doorstep services across a wide range of needs – making everyday life simpler, safer, and more convenient."})]}),c.jsxs("div",{className:"services-header-block",children:[c.jsx("span",{className:"services-label",children:"Services"}),c.jsx("h2",{className:"services-main-title",children:"Our Complete Range of Services in Agra"}),c.jsx("p",{className:"services-subtitle",children:"Explore our comprehensive list of professional services tailored for your needs."}),c.jsx("div",{className:"accordion-list",children:s.map((E,_)=>c.jsxs("div",{className:"accordion-item",children:[c.jsxs("div",{className:`accordion-header ${b===_?"active":""}`,onClick:()=>w(_),children:[c.jsx("h3",{children:E.title}),c.jsx("svg",{className:`chevron ${b===_?"rotate":""}`,width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),c.jsx("div",{className:`accordion-content ${b===_?"show":""}`,children:c.jsx("p",{children:E.desc})})]},_))})]})]}),c.jsx("style",{children:`
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
      `})]})},_d=()=>{const b=[{title:"Doorstep Convenience",desc:"Book any service from your phone. Our experts come to you at your chosen time – no need to step out or wait endlessly."},{title:"100% Verified Professionals",desc:"Every zervocompany technician undergoes rigorous background checks and training to deliver top-quality work every time."},{title:"Affordable & Transparent Pricing",desc:"Quality services at best prices with no hidden charges. Get the best value for your money."},{title:"Guaranteed Satisfaction",desc:"We don't just complete the job – we make sure you're truly satisfied. That's the zervocompany difference."},{title:"Fast & Reliable",desc:"Most bookings completed same day or next day. Real-time updates and polite experts."},{title:"One-Stop Platform",desc:"From AC repair to plumbing and home cleaning – zervocompany handles all your home needs."}];return c.jsxs("section",{className:"why-zervocompany-section",children:[c.jsx("div",{className:"container",children:c.jsxs("div",{className:"content-box",children:[c.jsx("h2",{className:"section-title",children:"Why zervocompany?"}),c.jsx("div",{className:"benefits-grid",children:b.map((A,w)=>c.jsxs("div",{className:"benefit-item",children:[c.jsx("div",{className:"icon-wrapper",children:c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("circle",{cx:"12",cy:"12",r:"10"}),c.jsx("polyline",{points:"9 11 12 14 22 4"})]})}),c.jsxs("div",{className:"text-content",children:[c.jsx("h3",{children:A.title}),c.jsx("p",{children:A.desc})]})]},w))})]})}),c.jsx("style",{children:`
        .why-zervocompany-section {
            padding-top: 2rem;
            padding-bottom: 6rem;
            background-color: var(--color-white);
        }

        .content-box {
            background-color: #eff6ff; /* Light blue background */
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
            color: #4f46e5; /* Indigo/Purple */
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
      `})]})},Dd=()=>{const[b,A]=Ee.useState(0),w=E=>{A(b===E?-1:E)},s=[{question:"How often should I get AC servicing in Agra?",answer:"In Agra's hot and dusty summers, we recommend AC servicing every 3-6 months to prevent breakdowns and ensure efficient cooling. Our Smart Cooling Solutions team handles everything from filter cleaning to gas refilling."},{question:"What types of carpentry services do you offer in Agra?",answer:"We offer a wide range of carpentry services including furniture repair, custom furniture making, door and window installation, polishing, and general woodwork repairs at your doorstep."},{question:"Why choose professional electricians for wiring issues in Agra?",answer:"Professional electricians ensure safety, compliance with codes, and efficient troubleshooting. Amateur handling of wiring can lead to short circuits or fire hazards, especially in older buildings."},{question:"How quickly can you respond to plumbing emergencies in Agra?",answer:"We prioritize emergency plumbing requests and typically aim to have a professional at your location within 60-90 minutes, depending on your specific area in Agra."},{question:"What beauty services are popular for women in Agra?",answer:"Our most popular services include facials, threading, waxing, and hair spa. We suggest booking in advance for weekends and festive seasons."},{question:"What makes your cleaning services eco-friendly in Agra?",answer:"We use biodegradable, non-toxic cleaning agents that are safe for pets and children, ensuring a deep clean without harmful chemical residues."},{question:"When should I repair my geyser in Agra's winters?",answer:"It's best to get your geyser serviced before winter sets in, ideally in October. Common signs for repair include slow heating, strange noises, or leakage."},{question:"How can I book a quick grooming session in Agra?",answer:"You can book instantly through our website or app. Simply select the 'Men's Grooming' or 'Women's Care' category, choose your service, and pick a time slot."},{question:"Why is deep washroom cleaning important in Agra?",answer:"Hard water in Agra can cause stubborn scaling and stains. Deep cleaning removes these mineral deposits and bacteria that regular cleaning often misses."},{question:"How can I buy or sell property smoothly in Agra?",answer:"Our verified real estate agents assist with documentation, valuation, and finding the right buyers or properties, making the process transparent and hassle-free."},{question:"Can you repair home appliances on-site in Agra?",answer:"Yes, most repairs for microwaves, washing machines, and fridges are done on-site. For major part replacements, we might need to take the unit to our workshop."},{question:"How often should I clean my kitchen chimney in Agra?",answer:"For Indian cooking with heavy oil and spices, we recommend professional deep cleaning every 2-3 months to maintain suction power and fire safety."}];return c.jsxs("section",{className:"faq-section",children:[c.jsxs("div",{className:"container",children:[c.jsx("h2",{className:"section-title",children:"Most asked FAQ's"}),c.jsx("p",{className:"section-subtitle",children:"We're here to help you and solve doubts. Find answers to the most common questions below."}),c.jsx("div",{className:"faq-grid",children:s.map((E,_)=>c.jsxs("div",{className:"faq-card",children:[c.jsxs("div",{className:`faq-header ${b===_?"active":""}`,onClick:()=>w(_),children:[c.jsx("h3",{children:E.question}),c.jsx("button",{className:"toggle-btn",children:b===_?c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})}):c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[c.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),c.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]}),c.jsx("div",{className:`faq-answer ${b===_?"show":""}`,children:c.jsx("p",{children:E.answer})})]},_))})]}),c.jsx("style",{children:`
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
      `})]})},Rd=()=>c.jsxs("section",{className:"banner-section",children:[c.jsx("div",{className:"banner-image-container",children:c.jsx("img",{src:"/banner.png",alt:"zervocompany Team",className:"banner-image"})}),c.jsx("style",{children:`
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
      `})]}),Cd=()=>c.jsxs("div",{className:"home-container",children:[c.jsx(pg,{}),c.jsx(El,{categoryId:"ac-service"}),c.jsx(El,{categoryId:"plumber"}),c.jsx(El,{categoryId:"electrician"}),c.jsx(El,{categoryId:"filter-ro"}),c.jsx(El,{categoryId:"cleaner"}),c.jsx(El,{categoryId:"home-appliances"}),c.jsx(bg,{}),c.jsx(yg,{}),c.jsx(xg,{}),c.jsx(_d,{}),c.jsx(Dd,{}),c.jsx(Rd,{})]}),jg=({title:b,description:A,rating:w,reviewsCount:s,expertImage:E})=>c.jsxs("div",{className:"service-hero-section",children:[c.jsxs("div",{className:"container service-hero-inner",children:[c.jsxs("div",{className:"hero-content",children:[c.jsxs("div",{className:"badge",children:[c.jsx("span",{className:"dot"})," Aligarh"]}),c.jsxs("h1",{children:["Get Best ",c.jsx("br",{}),c.jsx("span",{className:"highlight-text",children:b.replace("Get Best ","").replace(" in Aligarh","")})," ",c.jsx("br",{}),"in Aligarh"]}),c.jsx("svg",{className:"underline-svg",viewBox:"0 0 200 10",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("path",{d:"M2,5 Q50,10 100,5 T200,5",fill:"none",stroke:"#FBBF24",strokeWidth:"3"})}),c.jsx("p",{className:"hero-desc",children:A}),c.jsxs("div",{className:"hero-rating",children:[c.jsx("span",{className:"stars",children:"★★★★★"}),c.jsx("span",{className:"rating-val",children:w}),c.jsxs("span",{className:"reviews-count",children:["| ",s," reviews"]})]}),c.jsxs("div",{className:"hero-actions",children:[c.jsx("button",{className:"btn-book",children:"Explore Services →"}),c.jsx("button",{className:"btn-call",children:"📞 Call Expert"})]})]}),c.jsx("div",{className:"hero-image-col",children:c.jsxs("div",{className:"expert-card",children:[c.jsxs("div",{className:"expert-badge",children:[c.jsx("span",{className:"icon",children:"🎧"}),c.jsxs("div",{className:"text",children:[c.jsx("span",{className:"label",children:"TOTAL"}),c.jsx("span",{className:"value",children:"25+ Services"})]})]}),c.jsx("img",{src:E,alt:"Service Expert",className:"expert-img"}),c.jsxs("div",{className:"verified-badge",children:[c.jsx("img",{src:"/logo.png",className:"mini-logo",alt:""})," ",c.jsxs("div",{className:"info",children:[c.jsx("span",{className:"verified-text",children:"Verified Expert"}),c.jsx("span",{className:"expert-name",children:"Ramesh jha"})]})]})]})})]}),c.jsx("style",{children:`
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

      `})]}),Sg=({title:b,subServices:A})=>{const{navigate:w}=Ot();return c.jsxs("div",{className:"service-types-section container",children:[c.jsx("h2",{className:"section-title",children:b||"Top Services in Aligarh"}),c.jsx("div",{className:"types-grid",children:A.map((s,E)=>c.jsxs("div",{className:"service-type-card",children:[c.jsxs("div",{className:"card-image",children:[c.jsx("img",{src:s.image,alt:s.title}),c.jsxs("div",{className:"card-rating",children:["★ ",s.rating]})]}),c.jsxs("div",{className:"card-content",children:[c.jsx("h3",{children:s.title}),c.jsx("p",{className:"card-desc",children:s.description}),c.jsxs("div",{className:"card-footer",children:[c.jsxs("div",{className:"price-tag",children:[c.jsx("span",{className:"starts-from",children:"STARTS FROM"}),c.jsxs("span",{className:"price",children:["₹",s.price]})]}),c.jsx("button",{className:"btn-book-now",onClick:()=>w(`/book/${encodeURIComponent(s.title)}`),children:"Book Now"})]})]})]},E))}),c.jsx("style",{children:`
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
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .service-type-card {
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          overflow: hidden;
          transition: box-shadow 0.3s;
          background: #fff;
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

      `})]})},zg=({title:b,description:A})=>c.jsxs("div",{className:"service-about-section",children:[c.jsxs("div",{className:"container",children:[c.jsx("h2",{children:b}),c.jsx("div",{className:"about-text",children:A.split(`

`).map((w,s)=>c.jsx("p",{children:w},s))}),c.jsx("a",{href:"#book",className:"cta-link",children:"Book your service today and enjoy hassle-free cooling all summer long!"})]}),c.jsx("style",{children:`
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

      `})]}),Ng=({title:b,rating:A,reviews:w})=>c.jsxs("div",{className:"service-testimonials-section container",children:[c.jsxs("div",{className:"header",children:[c.jsx("h2",{children:b}),c.jsxs("div",{className:"rating-summary",children:[c.jsx("span",{className:"stars",children:"★★★★★"}),c.jsxs("span",{className:"avg-rating",children:[A," Average Rating"]})]}),c.jsxs("p",{className:"subtitle",children:["My AC wasn't cooling at all. zervocompany technician came within 2 hours, fixed the gas leakage, ",c.jsx("br",{}),"and serviced it. Now it's chilling like new!"]})]}),c.jsx("div",{className:"reviews-grid",children:w.map((s,E)=>c.jsxs("div",{className:"review-card",children:[c.jsx("div",{className:"card-stars",children:"★".repeat(s.rating)}),c.jsxs("p",{className:"review-text",children:['"',s.text,'"']}),c.jsxs("div",{className:"reviewer-info",children:[c.jsx("div",{className:"avatar-initial",children:s.name.charAt(0)}),c.jsxs("div",{className:"details",children:[c.jsx("span",{className:"name",children:s.name}),c.jsx("span",{className:"location",children:s.location})]})]})]},E))}),c.jsxs("div",{className:"nav-arrows",children:[c.jsx("button",{className:"arrow-btn left",children:"←"}),c.jsx("button",{className:"arrow-btn right",children:"→"})]}),c.jsx("style",{children:`
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

      `})]}),wg=({serviceIdParam:b})=>{const{navigate:A}=Ot(),w=b||"ac-service",s=vr[w];return Ee.useEffect(()=>{window.scrollTo(0,0)},[w]),s?c.jsxs("div",{className:"service-page",children:[c.jsx(jg,{title:s.title,description:s.description,rating:s.rating,reviewsCount:s.reviewsCount,expertImage:s.expertImage}),c.jsx(Sg,{title:`Top ${s.title} Experts`,subServices:s.subServices}),c.jsx(Ng,{title:`Customer Reviews – ${s.title}`,rating:s.rating,reviews:s.reviews}),c.jsx(zg,{title:s.about.title,description:s.about.description}),c.jsx(_d,{}),c.jsx(Dd,{}),c.jsx(Rd,{})]}):(setTimeout(()=>A("/"),0),null)},Ag=()=>{const{navigate:b}=Ot();return c.jsxs("div",{className:"partner-page",children:[c.jsx("div",{className:"container partner-container",children:c.jsxs("div",{className:"partner-content",children:[c.jsxs("button",{onClick:()=>b("/"),className:"back-btn",children:[c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M19 12H5",stroke:"#111",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M12 19L5 12L12 5",stroke:"#111",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Back to Home"]}),c.jsxs("div",{className:"partner-info",children:[c.jsxs("h1",{children:["Join the zervocompany ",c.jsx("br",{})," Partner Network"]}),c.jsx("p",{className:"subtitle",children:"Are you an expert in your field, ready to showcase your skills and grow your business?"}),c.jsx("p",{className:"description",children:"Join zervocompany as a trusted service provider and connect with potential clients who need your expertise!"}),c.jsxs("div",{className:"contact-details",children:[c.jsxs("p",{children:["Call us: ",c.jsx("strong",{children:"+91 843 991 1779"})]}),c.jsxs("p",{children:["Email us: ",c.jsx("strong",{children:"grow@zervocompany.com"})]})]}),c.jsx("div",{className:"cta-grow",children:c.jsx("p",{children:"Let's grow together and unlock new opportunities!"})}),c.jsxs("div",{className:"social-icons",children:[c.jsx("a",{href:"#",className:"social-icon",children:"in"}),c.jsx("a",{href:"#",className:"social-icon",children:"Instagram"}),c.jsx("a",{href:"#",className:"social-icon",children:"Facebook"})]})]}),c.jsx("div",{className:"partner-form-col",children:c.jsxs("form",{className:"partner-form",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Name"}),c.jsx("input",{type:"text",placeholder:"your name"})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Phone Number"}),c.jsxs("div",{className:"phone-input-group",children:[c.jsx("span",{className:"flag-icon",children:"🇮🇳"}),c.jsx("span",{className:"country-code",children:"+91"}),c.jsx("input",{type:"tel",placeholder:""})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Service"}),c.jsx("input",{type:"text",placeholder:"service you provide"})]}),c.jsxs("div",{className:"form-group radio-group-container",children:[c.jsx("label",{children:"How did you know about zervocompany?"}),c.jsxs("div",{className:"radio-option",children:[c.jsx("input",{type:"radio",name:"source",id:"social"}),c.jsx("label",{htmlFor:"social",children:"Social Media"})]}),c.jsxs("div",{className:"radio-option",children:[c.jsx("input",{type:"radio",name:"source",id:"friend"}),c.jsx("label",{htmlFor:"friend",children:"Recommended By Someone"})]}),c.jsxs("div",{className:"radio-option",children:[c.jsx("input",{type:"radio",name:"source",id:"other"}),c.jsx("label",{htmlFor:"other",children:"Other"})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Additional Message"}),c.jsx("textarea",{placeholder:"Type your message here..."})]}),c.jsx("p",{className:"form-note",children:"Any additional details or questions? (Optional)"}),c.jsxs("div",{className:"form-actions",children:[c.jsx("button",{type:"submit",className:"btn-submit",children:"Submit"}),c.jsx("button",{type:"button",className:"btn-whatsapp",children:"Send Whatsapp"})]})]})})]})}),c.jsx(Tl,{}),c.jsx("style",{children:`
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
            `})]})},Eg=({serviceName:b})=>{const{navigate:A}=Ot(),[w,s]=Ee.useState({name:"",phone:"",date:"",timeslot:"",address:"",paymentMode:"cash"}),E=b?decodeURIComponent(b):"Service",_=ue=>{const{name:T,value:z}=ue.target;if(T==="phone"){const Q=z.replace(/[^0-9]/g,"");s({...w,[T]:Q})}else s({...w,[T]:z})},X=ue=>{ue.preventDefault();const T=`Hello zervocompany, I want to book ${E}.
Details:
Name: ${w.name}
Phone: ${w.phone}
Date: ${w.date}
Time: ${w.timeslot}
Address: ${w.address}
Payment: ${w.paymentMode.toUpperCase()}`,z=encodeURIComponent(T);window.open(`https://wa.me/918354067979?text=${z}`,"_blank"),A("/")};return c.jsxs("div",{className:"booking-page",children:[c.jsxs("div",{className:"container booking-container",children:[c.jsxs("button",{onClick:()=>A(-1),className:"back-btn",children:[c.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M19 12H5",stroke:"#111",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M12 19L5 12L12 5",stroke:"#111",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Back to previous page"]}),c.jsxs("div",{className:"booking-wrapper",children:[c.jsxs("div",{className:"booking-header",children:[c.jsxs("h1",{children:["Book ",c.jsx("span",{className:"highlight",children:E})]}),c.jsx("p",{children:"Complete your booking details below. Our professional will arrive at your scheduled time."})]}),c.jsxs("form",{className:"booking-form",onSubmit:X,children:[c.jsxs("div",{className:"form-section",children:[c.jsxs("h3",{children:[c.jsx("span",{className:"step-num",children:"1"})," Personal Details"]}),c.jsxs("div",{className:"form-grid",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Full Name"}),c.jsx("input",{type:"text",name:"name",placeholder:"Enter your name",required:!0,value:w.name,onChange:_})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Phone Number"}),c.jsx("input",{type:"tel",name:"phone",placeholder:"+91 Mobile Number",required:!0,value:w.phone,onChange:_})]})]})]}),c.jsxs("div",{className:"form-section",children:[c.jsxs("h3",{children:[c.jsx("span",{className:"step-num",children:"2"})," Schedule & Address"]}),c.jsxs("div",{className:"form-grid",children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Select Date"}),c.jsx("input",{type:"date",name:"date",required:!0,value:w.date,onChange:_})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Select Time Slot"}),c.jsxs("select",{name:"timeslot",required:!0,value:w.timeslot,onChange:_,children:[c.jsx("option",{value:"",children:"Select a time"}),c.jsx("option",{value:"morning",children:"Morning (9 AM - 12 PM)"}),c.jsx("option",{value:"afternoon",children:"Afternoon (12 PM - 4 PM)"}),c.jsx("option",{value:"evening",children:"Evening (4 PM - 8 PM)"})]})]})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Service Address"}),c.jsx("textarea",{name:"address",placeholder:"Enter complete address, landmark, etc.",rows:"3",required:!0,value:w.address,onChange:_})]})]}),c.jsxs("div",{className:"form-section",children:[c.jsxs("h3",{children:[c.jsx("span",{className:"step-num",children:"3"})," Payment Method"]}),c.jsxs("div",{className:"payment-options",children:[c.jsxs("label",{className:`payment-option ${w.paymentMode==="cash"?"selected":""}`,children:[c.jsx("input",{type:"radio",name:"paymentMode",value:"cash",checked:w.paymentMode==="cash",onChange:_}),c.jsxs("div",{className:"payment-content",children:[c.jsx("span",{className:"payment-title",children:"Cash on Service"}),c.jsx("span",{className:"payment-desc",children:"Pay directly to the professional after service"})]})]}),c.jsxs("label",{className:`payment-option ${w.paymentMode==="upi"?"selected":""}`,children:[c.jsx("input",{type:"radio",name:"paymentMode",value:"upi",checked:w.paymentMode==="upi",onChange:_}),c.jsxs("div",{className:"payment-content",children:[c.jsx("span",{className:"payment-title",children:"UPI / QR Code"}),c.jsx("span",{className:"payment-desc",children:"GooglePay, PhonePe, Paytm (Scan on arrival)"})]})]}),c.jsxs("label",{className:`payment-option ${w.paymentMode==="card"?"selected":""}`,children:[c.jsx("input",{type:"radio",name:"paymentMode",value:"card",checked:w.paymentMode==="card",onChange:_}),c.jsxs("div",{className:"payment-content",children:[c.jsx("span",{className:"payment-title",children:"Debit / Credit Card"}),c.jsx("span",{className:"payment-desc",children:"Pay securely via link sent to your phone"})]})]})]})]}),c.jsxs("button",{type:"submit",className:"btn-confirm-booking",children:["Confirm Booking",c.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[c.jsx("path",{d:"M5 12H19",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),c.jsx("path",{d:"M12 5L19 12L12 19",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})]})]}),c.jsx("style",{children:`
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
            `})]})},Tg=()=>{const{navigate:b}=Ot();return c.jsxs("div",{className:"contact-page",children:[c.jsx(An,{}),c.jsxs("div",{className:"container contact-container",children:[c.jsxs("div",{className:"contact-header",children:[c.jsx("h1",{children:"Get in Touch"}),c.jsx("p",{children:"Have questions about our services or need assistance? We're here to help."})]}),c.jsxs("div",{className:"contact-content",children:[c.jsxs("div",{className:"contact-info-card",children:[c.jsx("h2",{children:"Contact Information"}),c.jsxs("div",{className:"info-item",children:[c.jsx("span",{className:"icon",children:"📞"}),c.jsxs("div",{children:[c.jsx("h3",{children:"Phone / WhatsApp"}),c.jsx("p",{children:c.jsx("a",{href:"https://wa.me/918354067979",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},children:"+91 83540 67979"})})]})]}),c.jsxs("div",{className:"info-item",children:[c.jsx("span",{className:"icon",children:"✉️"}),c.jsxs("div",{children:[c.jsx("h3",{children:"Email"}),c.jsx("p",{children:"grow@boomzo.in"})]})]}),c.jsxs("div",{className:"info-item",children:[c.jsx("span",{className:"icon",children:"📍"}),c.jsxs("div",{children:[c.jsx("h3",{children:"Office"}),c.jsx("p",{children:"Aligarh, Uttar Pradesh, India"})]})]}),c.jsxs("div",{className:"social-links",children:[c.jsx("h3",{children:"Follow Us"}),c.jsxs("div",{className:"social-icons",children:[c.jsx("a",{href:"#",className:"social-icon",children:"Instagram"}),c.jsx("a",{href:"#",className:"social-icon",children:"Facebook"}),c.jsx("a",{href:"#",className:"social-icon",children:"LinkedIn"})]})]})]}),c.jsxs("div",{className:"contact-form-card",children:[c.jsx("h2",{children:"Send us a Message"}),c.jsxs("form",{className:"contact-form",onSubmit:A=>{A.preventDefault();const w=new FormData(A.target),s=w.get("name"),E=w.get("email"),_=w.get("phone"),X=w.get("message"),ue=`Hello zervocompany, I have an inquiry:

Name: ${s}
Email: ${E}
Phone: ${_}
Message: ${X}`;window.open(`https://wa.me/918354067979?text=${encodeURIComponent(ue)}`,"_blank")},children:[c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Name"}),c.jsx("input",{type:"text",name:"name",placeholder:"Your Name",required:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Email"}),c.jsx("input",{type:"email",name:"email",placeholder:"Your Email",required:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Phone"}),c.jsx("input",{type:"tel",name:"phone",placeholder:"Your Phone Number",onInput:A=>{A.target.value=A.target.value.replace(/[^0-9]/g,"")},required:!0})]}),c.jsxs("div",{className:"form-group",children:[c.jsx("label",{children:"Message"}),c.jsx("textarea",{name:"message",placeholder:"How can we help you?",required:!0})]}),c.jsx("button",{type:"submit",className:"btn-submit",children:"Send Message"})]})]})]})]}),c.jsx(Tl,{}),c.jsx("style",{children:`
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
            `})]})},Mg=()=>c.jsxs("div",{className:"about-page",children:[c.jsx(An,{}),c.jsxs("div",{className:"container policy-container",children:[c.jsx("h1",{children:"About zervocompany"}),c.jsx("p",{className:"last-updated",children:"Welcome to zervocompany!"}),c.jsxs("section",{children:[c.jsx("h2",{children:"Our Story"}),c.jsx("p",{children:"zervocompany was founded with a simple yet powerful vision: to make high-quality home services accessible, reliable, and transparent for everyone. We realized that finding a trustworthy plumber, electrician, or AC technician shouldn't be a stressful experience."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"What We Do"}),c.jsx("p",{children:"We are a leading home services platform that connects homeowners with certified, background-verified professionals. From routine maintenance to emergency repairs, we handle it all with precision and care."}),c.jsxs("ul",{children:[c.jsx("li",{children:"Expert AC Service & Repair"}),c.jsx("li",{children:"Reliable Plumbing & Electrical Solutions"}),c.jsx("li",{children:"Professional Home Cleaning"}),c.jsx("li",{children:"RO & Home Appliance Maintenance"})]})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"Our Mission"}),c.jsx("p",{children:"To empower local service professionals while providing customers with a seamless, technology-driven booking experience. We believe in fair pricing, exceptional quality, and 100% customer satisfaction."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"Why Choose Us?"}),c.jsx("p",{children:"At zervocompany, we don't just fix things; we build trust. Our Commitment to quality and safety is what sets us apart."})]})]}),c.jsx(Tl,{}),c.jsx("style",{children:`
                .about-page { background: #f9fafb; min-height: 100vh; }
                .policy-container { padding: 4rem 1rem; max-width: 800px; margin: 0 auto; color: #374151; }
                .policy-container h1 { font-size: 2.5rem; font-weight: 800; color: #111; margin-bottom: 1rem; }
                .last-updated { color: #6b7280; margin-bottom: 2rem; }
                .policy-container h2 { font-size: 1.5rem; font-weight: 700; color: #111; margin-top: 2rem; margin-bottom: 1rem; }
                .policy-container p { line-height: 1.6; margin-bottom: 1rem; }
                .policy-container ul { margin-left: 1.5rem; margin-bottom: 1rem; }
                .policy-container li { margin-bottom: 0.5rem; }
            `})]}),Cg=()=>c.jsxs("div",{className:"policy-page",children:[c.jsx(An,{}),c.jsxs("div",{className:"container policy-container",children:[c.jsx("h1",{children:"Privacy Policy"}),c.jsx("p",{className:"last-updated",children:"Last updated: January 30, 2026"}),c.jsxs("section",{children:[c.jsx("h2",{children:"1. Information We Collect"}),c.jsx("p",{children:"We collect information you provide directly to us when you book a service, contact us, or sign up for our newsletter. This includes your name, phone number, email address, and service location."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"2. How We Use Your Information"}),c.jsx("p",{children:"We use the information we collect to provide, maintain, and improve our services, including to process your bookings, send you updates, and respond to your inquiries."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"3. Data Sharing"}),c.jsx("p",{children:"We do not sell your personal information. We share your details only with the service professionals assigned to your booking to ensure the service can be completed."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"4. Security"}),c.jsx("p",{children:"We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"5. Contact Us"}),c.jsx("p",{children:"If you have any questions about this Privacy Policy, please contact us via WhatsApp at +91 83540 67979."})]})]}),c.jsx(Tl,{}),c.jsx("style",{children:`
                .policy-page { background: #f9fafb; min-height: 100vh; }
                .policy-container { padding: 4rem 1rem; max-width: 800px; margin: 0 auto; color: #374151; }
                .policy-container h1 { font-size: 2.5rem; font-weight: 800; color: #111; margin-bottom: 1rem; }
                .last-updated { color: #6b7280; margin-bottom: 2rem; }
                .policy-container h2 { font-size: 1.5rem; font-weight: 700; color: #111; margin-top: 2rem; margin-bottom: 1rem; }
                .policy-container p { line-height: 1.6; margin-bottom: 1rem; }
            `})]}),Og=()=>c.jsxs("div",{className:"policy-page",children:[c.jsx(An,{}),c.jsxs("div",{className:"container policy-container",children:[c.jsx("h1",{children:"Terms and Conditions"}),c.jsx("p",{className:"last-updated",children:"Last updated: January 30, 2026"}),c.jsxs("section",{children:[c.jsx("h2",{children:"1. Acceptance of Terms"}),c.jsx("p",{children:"By using the zervocompany platform, you agree to comply with and be bound by these Terms and Conditions."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"2. Service Bookings"}),c.jsx("p",{children:"Users can book home services through our platform. All bookings are subject to availability of service professionals in your area."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"3. Cancellation Policy"}),c.jsx("p",{children:"Cancellations should be made at least 2 hours before the scheduled service time. Repeated late cancellations may result in a suspension of account privileges."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"4. Liability"}),c.jsx("p",{children:"zervocompany acts as a facilitator between customers and service professionals. While we verify all professionals, we are not liable for direct or indirect damages resulting from the service performed."})]}),c.jsxs("section",{children:[c.jsx("h2",{children:"5. Governing Law"}),c.jsx("p",{children:"These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Aligarh."})]})]}),c.jsx(Tl,{}),c.jsx("style",{children:`
                .policy-page { background: #f9fafb; min-height: 100vh; }
                .policy-container { padding: 4rem 1rem; max-width: 800px; margin: 0 auto; color: #374151; }
                .policy-container h1 { font-size: 2.5rem; font-weight: 800; color: #111; margin-bottom: 1rem; }
                .last-updated { color: #6b7280; margin-bottom: 2rem; }
                .policy-container h2 { font-size: 1.5rem; font-weight: 700; color: #111; margin-top: 2rem; margin-bottom: 1rem; }
                .policy-container p { line-height: 1.6; margin-bottom: 1rem; }
            `})]}),_g=()=>{const{currentPath:b}=Ot(),A=b.match(/^\/service\/([^/]+)$/);let w;if(b==="/"||b==="")w=c.jsx(Cd,{});else if(A)w=c.jsx(wg,{serviceIdParam:A[1]});else if(b.startsWith("/book/")){const _=b.split("/book/")[1];w=c.jsx(Eg,{serviceName:_})}else b==="/partner"?w=c.jsx(Ag,{}):b==="/contact"?w=c.jsx(Tg,{}):b==="/about"?w=c.jsx(Mg,{}):b==="/privacy"?w=c.jsx(Cg,{}):b==="/terms"?w=c.jsx(Og,{}):w=c.jsx(Cd,{});const E=["/partner","/contact","/about","/privacy","/terms"].includes(b);return c.jsxs("div",{className:"app-container",children:[!E&&c.jsx(An,{}),w,!E&&c.jsx(Tl,{})]})},Dg=()=>c.jsx(hg,{children:c.jsx(_g,{})});function Rg(){return c.jsx(Dg,{})}mg.createRoot(document.getElementById("root")).render(c.jsx(Ee.StrictMode,{children:c.jsx(Rg,{})}));
