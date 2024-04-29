var Wc=Object.defineProperty;var Qc=(t,e,i)=>e in t?Wc(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i;var hr=(t,e,i)=>(Qc(t,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=i(n);fetch(n.href,o)}})();/**
* @vue/shared v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function bo(t,e){const i=new Set(t.split(","));return e?s=>i.has(s.toLowerCase()):s=>i.has(s)}const K={},Kt=[],Me=()=>{},Jc=()=>!1,zs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),mo=t=>t.startsWith("onUpdate:"),fe=Object.assign,vo=(t,e)=>{const i=t.indexOf(e);i>-1&&t.splice(i,1)},Yc=Object.prototype.hasOwnProperty,G=(t,e)=>Yc.call(t,e),B=Array.isArray,ei=t=>Us(t)==="[object Map]",Ml=t=>Us(t)==="[object Set]",H=t=>typeof t=="function",ce=t=>typeof t=="string",jt=t=>typeof t=="symbol",ee=t=>t!==null&&typeof t=="object",Hl=t=>(ee(t)||H(t))&&H(t.then)&&H(t.catch),Vl=Object.prototype.toString,Us=t=>Vl.call(t),Xc=t=>Us(t).slice(8,-1),Nl=t=>Us(t)==="[object Object]",yo=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ai=bo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qs=t=>{const e=Object.create(null);return i=>e[i]||(e[i]=t(i))},Zc=/-(\w)/g,ri=qs(t=>t.replace(Zc,(e,i)=>i?i.toUpperCase():"")),Kc=/\B([A-Z])/g,ui=qs(t=>t.replace(Kc,"-$1").toLowerCase()),jl=qs(t=>t.charAt(0).toUpperCase()+t.slice(1)),bn=qs(t=>t?`on${jl(t)}`:""),wt=(t,e)=>!Object.is(t,e),mn=(t,e)=>{for(let i=0;i<t.length;i++)t[i](e)},zl=(t,e,i)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:i})},ed=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let fr;const Ul=()=>fr||(fr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xo(t){if(B(t)){const e={};for(let i=0;i<t.length;i++){const s=t[i],n=ce(s)?nd(s):xo(s);if(n)for(const o in n)e[o]=n[o]}return e}else if(ce(t)||ee(t))return t}const td=/;(?![^(]*\))/g,id=/:([^]+)/,sd=/\/\*[^]*?\*\//g;function nd(t){const e={};return t.replace(sd,"").split(td).forEach(i=>{if(i){const s=i.split(id);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function wo(t){let e="";if(ce(t))e=t;else if(B(t))for(let i=0;i<t.length;i++){const s=wo(t[i]);s&&(e+=s+" ")}else if(ee(t))for(const i in t)t[i]&&(e+=i+" ");return e.trim()}const od="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rd=bo(od);function ql(t){return!!t||t===""}const ld=t=>ce(t)?t:t==null?"":B(t)||ee(t)&&(t.toString===Vl||!H(t.toString))?JSON.stringify(t,Gl,2):String(t),Gl=(t,e)=>e&&e.__v_isRef?Gl(t,e.value):ei(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((i,[s,n],o)=>(i[vn(s,o)+" =>"]=n,i),{})}:Ml(e)?{[`Set(${e.size})`]:[...e.values()].map(i=>vn(i))}:jt(e)?vn(e):ee(e)&&!B(e)&&!Nl(e)?String(e):e,vn=(t,e="")=>{var i;return jt(t)?`Symbol(${(i=t.description)!=null?i:e})`:t};/**
* @vue/reactivity v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ue;class ad{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ue,!e&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const i=Ue;try{return Ue=this,e()}finally{Ue=i}}}on(){Ue=this}off(){Ue=this.parent}stop(e){if(this._active){let i,s;for(i=0,s=this.effects.length;i<s;i++)this.effects[i].stop();for(i=0,s=this.cleanups.length;i<s;i++)this.cleanups[i]();if(this.scopes)for(i=0,s=this.scopes.length;i<s;i++)this.scopes[i].stop(!0);if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0,this._active=!1}}}function cd(t,e=Ue){e&&e.active&&e.effects.push(t)}function dd(){return Ue}let Mt;class Co{constructor(e,i,s,n){this.fn=e,this.trigger=i,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,cd(this,n)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,kt();for(let e=0;e<this._depsLength;e++){const i=this.deps[e];if(i.computed&&(ud(i.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),It()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=mt,i=Mt;try{return mt=!0,Mt=this,this._runnings++,pr(this),this.fn()}finally{gr(this),this._runnings--,Mt=i,mt=e}}stop(){var e;this.active&&(pr(this),gr(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function ud(t){return t.value}function pr(t){t._trackId++,t._depsLength=0}function gr(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Wl(t.deps[e],t);t.deps.length=t._depsLength}}function Wl(t,e){const i=t.get(e);i!==void 0&&e._trackId!==i&&(t.delete(e),t.size===0&&t.cleanup())}let mt=!0,zn=0;const Ql=[];function kt(){Ql.push(mt),mt=!1}function It(){const t=Ql.pop();mt=t===void 0?!0:t}function $o(){zn++}function ko(){for(zn--;!zn&&Un.length;)Un.shift()()}function Jl(t,e,i){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Wl(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Un=[];function Yl(t,e,i){$o();for(const s of t.keys()){let n;s._dirtyLevel<e&&(n??(n=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(n??(n=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&Un.push(s.scheduler)))}ko()}const Xl=(t,e)=>{const i=new Map;return i.cleanup=t,i.computed=e,i},qn=new WeakMap,Ht=Symbol(""),Gn=Symbol("");function De(t,e,i){if(mt&&Mt){let s=qn.get(t);s||qn.set(t,s=new Map);let n=s.get(i);n||s.set(i,n=Xl(()=>s.delete(i))),Jl(Mt,n)}}function lt(t,e,i,s,n,o){const r=qn.get(t);if(!r)return;let l=[];if(e==="clear")l=[...r.values()];else if(i==="length"&&B(t)){const a=Number(s);r.forEach((c,d)=>{(d==="length"||!jt(d)&&d>=a)&&l.push(c)})}else switch(i!==void 0&&l.push(r.get(i)),e){case"add":B(t)?yo(i)&&l.push(r.get("length")):(l.push(r.get(Ht)),ei(t)&&l.push(r.get(Gn)));break;case"delete":B(t)||(l.push(r.get(Ht)),ei(t)&&l.push(r.get(Gn)));break;case"set":ei(t)&&l.push(r.get(Ht));break}$o();for(const a of l)a&&Yl(a,4);ko()}const hd=bo("__proto__,__v_isRef,__isVue"),Zl=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jt)),br=fd();function fd(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...i){const s=J(this);for(let o=0,r=this.length;o<r;o++)De(s,"get",o+"");const n=s[e](...i);return n===-1||n===!1?s[e](...i.map(J)):n}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...i){kt(),$o();const s=J(this)[e].apply(this,i);return ko(),It(),s}}),t}function pd(t){jt(t)||(t=String(t));const e=J(this);return De(e,"has",t),e.hasOwnProperty(t)}class Kl{constructor(e=!1,i=!1){this._isReadonly=e,this._isShallow=i}get(e,i,s){const n=this._isReadonly,o=this._isShallow;if(i==="__v_isReactive")return!n;if(i==="__v_isReadonly")return n;if(i==="__v_isShallow")return o;if(i==="__v_raw")return s===(n?o?Sd:sa:o?ia:ta).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const r=B(e);if(!n){if(r&&G(br,i))return Reflect.get(br,i,s);if(i==="hasOwnProperty")return pd}const l=Reflect.get(e,i,s);return(jt(i)?Zl.has(i):hd(i))||(n||De(e,"get",i),o)?l:Pe(l)?r&&yo(i)?l:l.value:ee(l)?n?na(l):So(l):l}}class ea extends Kl{constructor(e=!1){super(!1,e)}set(e,i,s,n){let o=e[i];if(!this._isShallow){const a=Vi(o);if(!Ds(s)&&!Vi(s)&&(o=J(o),s=J(s)),!B(e)&&Pe(o)&&!Pe(s))return a?!1:(o.value=s,!0)}const r=B(e)&&yo(i)?Number(i)<e.length:G(e,i),l=Reflect.set(e,i,s,n);return e===J(n)&&(r?wt(s,o)&&lt(e,"set",i,s):lt(e,"add",i,s)),l}deleteProperty(e,i){const s=G(e,i);e[i];const n=Reflect.deleteProperty(e,i);return n&&s&&lt(e,"delete",i,void 0),n}has(e,i){const s=Reflect.has(e,i);return(!jt(i)||!Zl.has(i))&&De(e,"has",i),s}ownKeys(e){return De(e,"iterate",B(e)?"length":Ht),Reflect.ownKeys(e)}}class gd extends Kl{constructor(e=!1){super(!0,e)}set(e,i){return!0}deleteProperty(e,i){return!0}}const bd=new ea,md=new gd,vd=new ea(!0);const Io=t=>t,Gs=t=>Reflect.getPrototypeOf(t);function cs(t,e,i=!1,s=!1){t=t.__v_raw;const n=J(t),o=J(e);i||(wt(e,o)&&De(n,"get",e),De(n,"get",o));const{has:r}=Gs(n),l=s?Io:i?Ao:Ni;if(r.call(n,e))return l(t.get(e));if(r.call(n,o))return l(t.get(o));t!==n&&t.get(e)}function ds(t,e=!1){const i=this.__v_raw,s=J(i),n=J(t);return e||(wt(t,n)&&De(s,"has",t),De(s,"has",n)),t===n?i.has(t):i.has(t)||i.has(n)}function us(t,e=!1){return t=t.__v_raw,!e&&De(J(t),"iterate",Ht),Reflect.get(t,"size",t)}function mr(t){t=J(t);const e=J(this);return Gs(e).has.call(e,t)||(e.add(t),lt(e,"add",t,t)),this}function vr(t,e){e=J(e);const i=J(this),{has:s,get:n}=Gs(i);let o=s.call(i,t);o||(t=J(t),o=s.call(i,t));const r=n.call(i,t);return i.set(t,e),o?wt(e,r)&&lt(i,"set",t,e):lt(i,"add",t,e),this}function yr(t){const e=J(this),{has:i,get:s}=Gs(e);let n=i.call(e,t);n||(t=J(t),n=i.call(e,t)),s&&s.call(e,t);const o=e.delete(t);return n&&lt(e,"delete",t,void 0),o}function xr(){const t=J(this),e=t.size!==0,i=t.clear();return e&&lt(t,"clear",void 0,void 0),i}function hs(t,e){return function(s,n){const o=this,r=o.__v_raw,l=J(r),a=e?Io:t?Ao:Ni;return!t&&De(l,"iterate",Ht),r.forEach((c,d)=>s.call(n,a(c),a(d),o))}}function fs(t,e,i){return function(...s){const n=this.__v_raw,o=J(n),r=ei(o),l=t==="entries"||t===Symbol.iterator&&r,a=t==="keys"&&r,c=n[t](...s),d=i?Io:e?Ao:Ni;return!e&&De(o,"iterate",a?Gn:Ht),{next(){const{value:h,done:g}=c.next();return g?{value:h,done:g}:{value:l?[d(h[0]),d(h[1])]:d(h),done:g}},[Symbol.iterator](){return this}}}}function ht(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function yd(){const t={get(o){return cs(this,o)},get size(){return us(this)},has:ds,add:mr,set:vr,delete:yr,clear:xr,forEach:hs(!1,!1)},e={get(o){return cs(this,o,!1,!0)},get size(){return us(this)},has:ds,add:mr,set:vr,delete:yr,clear:xr,forEach:hs(!1,!0)},i={get(o){return cs(this,o,!0)},get size(){return us(this,!0)},has(o){return ds.call(this,o,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:hs(!0,!1)},s={get(o){return cs(this,o,!0,!0)},get size(){return us(this,!0)},has(o){return ds.call(this,o,!0)},add:ht("add"),set:ht("set"),delete:ht("delete"),clear:ht("clear"),forEach:hs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=fs(o,!1,!1),i[o]=fs(o,!0,!1),e[o]=fs(o,!1,!0),s[o]=fs(o,!0,!0)}),[t,i,e,s]}const[xd,wd,Cd,$d]=yd();function To(t,e){const i=e?t?$d:Cd:t?wd:xd;return(s,n,o)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?s:Reflect.get(G(i,n)&&n in s?i:s,n,o)}const kd={get:To(!1,!1)},Id={get:To(!1,!0)},Td={get:To(!0,!1)};const ta=new WeakMap,ia=new WeakMap,sa=new WeakMap,Sd=new WeakMap;function Od(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ad(t){return t.__v_skip||!Object.isExtensible(t)?0:Od(Xc(t))}function So(t){return Vi(t)?t:Oo(t,!1,bd,kd,ta)}function _d(t){return Oo(t,!1,vd,Id,ia)}function na(t){return Oo(t,!0,md,Td,sa)}function Oo(t,e,i,s,n){if(!ee(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=n.get(t);if(o)return o;const r=Ad(t);if(r===0)return t;const l=new Proxy(t,r===2?s:i);return n.set(t,l),l}function _i(t){return Vi(t)?_i(t.__v_raw):!!(t&&t.__v_isReactive)}function Vi(t){return!!(t&&t.__v_isReadonly)}function Ds(t){return!!(t&&t.__v_isShallow)}function oa(t){return t?!!t.__v_raw:!1}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function Ed(t){return Object.isExtensible(t)&&zl(t,"__v_skip",!0),t}const Ni=t=>ee(t)?So(t):t,Ao=t=>ee(t)?na(t):t;class ra{constructor(e,i,s,n){this.getter=e,this._setter=i,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Co(()=>e(this._value),()=>Cs(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!n,this.__v_isReadonly=s}get value(){const e=J(this);return(!e._cacheable||e.effect.dirty)&&wt(e._value,e._value=e.effect.run())&&Cs(e,4),la(e),e.effect._dirtyLevel>=2&&Cs(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Rd(t,e,i=!1){let s,n;const o=H(t);return o?(s=t,n=Me):(s=t.get,n=t.set),new ra(s,n,o||!n,i)}function la(t){var e;mt&&Mt&&(t=J(t),Jl(Mt,(e=t.dep)!=null?e:t.dep=Xl(()=>t.dep=void 0,t instanceof ra?t:void 0)))}function Cs(t,e=4,i){t=J(t);const s=t.dep;s&&Yl(s,e)}function Pe(t){return!!(t&&t.__v_isRef===!0)}function _o(t){return Dd(t,!1)}function Dd(t,e){return Pe(t)?t:new Pd(t,e)}class Pd{constructor(e,i){this.__v_isShallow=i,this.dep=void 0,this.__v_isRef=!0,this._rawValue=i?e:J(e),this._value=i?e:Ni(e)}get value(){return la(this),this._value}set value(e){const i=this.__v_isShallow||Ds(e)||Vi(e);e=i?e:J(e),wt(e,this._rawValue)&&(this._rawValue=e,this._value=i?e:Ni(e),Cs(this,4))}}function Ws(t){return Pe(t)?t.value:t}const Fd={get:(t,e,i)=>Ws(Reflect.get(t,e,i)),set:(t,e,i,s)=>{const n=t[e];return Pe(n)&&!Pe(i)?(n.value=i,!0):Reflect.set(t,e,i,s)}};function aa(t){return _i(t)?t:new Proxy(t,Fd)}/**
* @vue/runtime-core v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vt(t,e,i,s){try{return s?t(...s):t()}catch(n){Qs(n,e,i)}}function We(t,e,i,s){if(H(t)){const n=vt(t,e,i,s);return n&&Hl(n)&&n.catch(o=>{Qs(o,e,i)}),n}if(B(t)){const n=[];for(let o=0;o<t.length;o++)n.push(We(t[o],e,i,s));return n}}function Qs(t,e,i,s=!0){const n=e?e.vnode:null;if(e){let o=e.parent;const r=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${i}`;for(;o;){const c=o.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,r,l)===!1)return}o=o.parent}const a=e.appContext.config.errorHandler;if(a){kt(),vt(a,null,10,[t,r,l]),It();return}}Bd(t,i,n,s)}function Bd(t,e,i,s=!0){console.error(t)}let ji=!1,Wn=!1;const ge=[];let it=0;const ti=[];let pt=null,Pt=0;const ca=Promise.resolve();let Eo=null;function Ld(t){const e=Eo||ca;return t?e.then(this?t.bind(this):t):e}function Md(t){let e=it+1,i=ge.length;for(;e<i;){const s=e+i>>>1,n=ge[s],o=zi(n);o<t||o===t&&n.pre?e=s+1:i=s}return e}function Ro(t){(!ge.length||!ge.includes(t,ji&&t.allowRecurse?it+1:it))&&(t.id==null?ge.push(t):ge.splice(Md(t.id),0,t),da())}function da(){!ji&&!Wn&&(Wn=!0,Eo=ca.then(ha))}function Hd(t){const e=ge.indexOf(t);e>it&&ge.splice(e,1)}function Vd(t){B(t)?ti.push(...t):(!pt||!pt.includes(t,t.allowRecurse?Pt+1:Pt))&&ti.push(t),da()}function wr(t,e,i=ji?it+1:0){for(;i<ge.length;i++){const s=ge[i];if(s&&s.pre){if(t&&s.id!==t.uid)continue;ge.splice(i,1),i--,s()}}}function ua(t){if(ti.length){const e=[...new Set(ti)].sort((i,s)=>zi(i)-zi(s));if(ti.length=0,pt){pt.push(...e);return}for(pt=e,Pt=0;Pt<pt.length;Pt++)pt[Pt]();pt=null,Pt=0}}const zi=t=>t.id==null?1/0:t.id,Nd=(t,e)=>{const i=zi(t)-zi(e);if(i===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return i};function ha(t){Wn=!1,ji=!0,ge.sort(Nd);const e=Me;try{for(it=0;it<ge.length;it++){const i=ge[it];i&&i.active!==!1&&vt(i,null,14)}}finally{it=0,ge.length=0,ua(),ji=!1,Eo=null,(ge.length||ti.length)&&ha()}}function jd(t,e,...i){if(t.isUnmounted)return;const s=t.vnode.props||K;let n=i;const o=e.startsWith("update:"),r=o&&e.slice(7);if(r&&r in s){const d=`${r==="modelValue"?"model":r}Modifiers`,{number:h,trim:g}=s[d]||K;g&&(n=i.map($=>ce($)?$.trim():$)),h&&(n=i.map(ed))}let l,a=s[l=bn(e)]||s[l=bn(ri(e))];!a&&o&&(a=s[l=bn(ui(e))]),a&&We(a,t,6,n);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,We(c,t,6,n)}}function fa(t,e,i=!1){const s=e.emitsCache,n=s.get(t);if(n!==void 0)return n;const o=t.emits;let r={},l=!1;if(!H(t)){const a=c=>{const d=fa(c,e,!0);d&&(l=!0,fe(r,d))};!i&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!o&&!l?(ee(t)&&s.set(t,null),null):(B(o)?o.forEach(a=>r[a]=null):fe(r,o),ee(t)&&s.set(t,r),r)}function Js(t,e){return!t||!zs(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,ui(e))||G(t,e))}let st=null,pa=null;function Ps(t){const e=st;return st=t,pa=t&&t.type.__scopeId||null,e}function zd(t,e=st,i){if(!e||t._n)return t;const s=(...n)=>{s._d&&Er(-1);const o=Ps(e);let r;try{r=t(...n)}finally{Ps(o),s._d&&Er(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function yn(t){const{type:e,vnode:i,proxy:s,withProxy:n,propsOptions:[o],slots:r,attrs:l,emit:a,render:c,renderCache:d,props:h,data:g,setupState:$,ctx:R,inheritAttrs:S}=t,_=Ps(t);let W,q;try{if(i.shapeFlag&4){const z=n||s,de=z;W=tt(c.call(de,z,d,h,$,g,R)),q=l}else{const z=e;W=tt(z.length>1?z(h,{attrs:l,slots:r,emit:a}):z(h,null)),q=e.props?l:Ud(l)}}catch(z){Di.length=0,Qs(z,t,1),W=Te(Ui)}let M=W;if(q&&S!==!1){const z=Object.keys(q),{shapeFlag:de}=M;z.length&&de&7&&(o&&z.some(mo)&&(q=qd(q,o)),M=li(M,q))}return i.dirs&&(M=li(M),M.dirs=M.dirs?M.dirs.concat(i.dirs):i.dirs),i.transition&&(M.transition=i.transition),W=M,Ps(_),W}const Ud=t=>{let e;for(const i in t)(i==="class"||i==="style"||zs(i))&&((e||(e={}))[i]=t[i]);return e},qd=(t,e)=>{const i={};for(const s in t)(!mo(s)||!(s.slice(9)in e))&&(i[s]=t[s]);return i};function Gd(t,e,i){const{props:s,children:n,component:o}=t,{props:r,children:l,patchFlag:a}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(i&&a>=0){if(a&1024)return!0;if(a&16)return s?Cr(s,r,c):!!r;if(a&8){const d=e.dynamicProps;for(let h=0;h<d.length;h++){const g=d[h];if(r[g]!==s[g]&&!Js(c,g))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:s===r?!1:s?r?Cr(s,r,c):!0:!!r;return!1}function Cr(t,e,i){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let n=0;n<s.length;n++){const o=s[n];if(e[o]!==t[o]&&!Js(i,o))return!0}return!1}function Wd({vnode:t,parent:e},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=i,e=e.parent;else break}}const Qd=Symbol.for("v-ndc"),Jd=t=>t.__isSuspense;function Yd(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):Vd(t)}const Xd=Symbol.for("v-scx"),Zd=()=>ks(Xd),ps={};function xn(t,e,i){return ga(t,e,i)}function ga(t,e,{immediate:i,deep:s,flush:n,once:o,onTrack:r,onTrigger:l}=K){if(e&&o){const E=e;e=(...re)=>{E(...re),de()}}const a=Ie,c=E=>s===!0?E:Yt(E,s===!1?1:void 0);let d,h=!1,g=!1;if(Pe(t)?(d=()=>t.value,h=Ds(t)):_i(t)?(d=()=>c(t),h=!0):B(t)?(g=!0,h=t.some(E=>_i(E)||Ds(E)),d=()=>t.map(E=>{if(Pe(E))return E.value;if(_i(E))return c(E);if(H(E))return vt(E,a,2)})):H(t)?e?d=()=>vt(t,a,2):d=()=>($&&$(),We(t,a,3,[R])):d=Me,e&&s){const E=d;d=()=>Yt(E())}let $,R=E=>{$=M.onStop=()=>{vt(E,a,4),$=M.onStop=void 0}},S;if(Ks)if(R=Me,e?i&&We(e,a,3,[d(),g?[]:void 0,R]):d(),n==="sync"){const E=Zd();S=E.__watcherHandles||(E.__watcherHandles=[])}else return Me;let _=g?new Array(t.length).fill(ps):ps;const W=()=>{if(!(!M.active||!M.dirty))if(e){const E=M.run();(s||h||(g?E.some((re,pe)=>wt(re,_[pe])):wt(E,_)))&&($&&$(),We(e,a,3,[E,_===ps?void 0:g&&_[0]===ps?[]:_,R]),_=E)}else M.run()};W.allowRecurse=!!e;let q;n==="sync"?q=W:n==="post"?q=()=>Ee(W,a&&a.suspense):(W.pre=!0,a&&(W.id=a.uid),q=()=>Ro(W));const M=new Co(d,Me,q),z=dd(),de=()=>{M.stop(),z&&vo(z.effects,M)};return e?i?W():_=M.run():n==="post"?Ee(M.run.bind(M),a&&a.suspense):M.run(),S&&S.push(de),de}function Kd(t,e,i){const s=this.proxy,n=ce(t)?t.includes(".")?ba(s,t):()=>s[t]:t.bind(s,s);let o;H(e)?o=e:(o=e.handler,i=e);const r=Ki(this),l=ga(n,o.bind(s),i);return r(),l}function ba(t,e){const i=e.split(".");return()=>{let s=t;for(let n=0;n<i.length&&s;n++)s=s[i[n]];return s}}function Yt(t,e,i=0,s){if(!ee(t)||t.__v_skip)return t;if(e&&e>0){if(i>=e)return t;i++}if(s=s||new Set,s.has(t))return t;if(s.add(t),Pe(t))Yt(t.value,e,i,s);else if(B(t))for(let n=0;n<t.length;n++)Yt(t[n],e,i,s);else if(Ml(t)||ei(t))t.forEach(n=>{Yt(n,e,i,s)});else if(Nl(t))for(const n in t)Yt(t[n],e,i,s);return t}function Et(t,e,i,s){const n=t.dirs,o=e&&e.dirs;for(let r=0;r<n.length;r++){const l=n[r];o&&(l.oldValue=o[r].value);let a=l.dir[s];a&&(kt(),We(a,i,8,[t.el,l,t,e]),It())}}/*! #__NO_SIDE_EFFECTS__ */function Ys(t,e){return H(t)?(()=>fe({name:t.name},e,{setup:t}))():t}const $s=t=>!!t.type.__asyncLoader,ma=t=>t.type.__isKeepAlive;function eu(t,e){va(t,"a",e)}function tu(t,e){va(t,"da",e)}function va(t,e,i=Ie){const s=t.__wdc||(t.__wdc=()=>{let n=i;for(;n;){if(n.isDeactivated)return;n=n.parent}return t()});if(Xs(e,s,i),i){let n=i.parent;for(;n&&n.parent;)ma(n.parent.vnode)&&iu(s,e,i,n),n=n.parent}}function iu(t,e,i,s){const n=Xs(e,t,s,!0);xa(()=>{vo(s[e],n)},i)}function Xs(t,e,i=Ie,s=!1){if(i){const n=i[t]||(i[t]=[]),o=e.__weh||(e.__weh=(...r)=>{if(i.isUnmounted)return;kt();const l=Ki(i),a=We(e,i,t,r);return l(),It(),a});return s?n.unshift(o):n.push(o),o}}const at=t=>(e,i=Ie)=>(!Ks||t==="sp")&&Xs(t,(...s)=>e(...s),i),su=at("bm"),ya=at("m"),nu=at("bu"),ou=at("u"),ru=at("bum"),xa=at("um"),lu=at("sp"),au=at("rtg"),cu=at("rtc");function du(t,e=Ie){Xs("ec",t,e)}function uu(t,e,i,s){let n;const o=i&&i[s];if(B(t)||ce(t)){n=new Array(t.length);for(let r=0,l=t.length;r<l;r++)n[r]=e(t[r],r,void 0,o&&o[r])}else if(typeof t=="number"){n=new Array(t);for(let r=0;r<t;r++)n[r]=e(r+1,r,void 0,o&&o[r])}else if(ee(t))if(t[Symbol.iterator])n=Array.from(t,(r,l)=>e(r,l,void 0,o&&o[l]));else{const r=Object.keys(t);n=new Array(r.length);for(let l=0,a=r.length;l<a;l++){const c=r[l];n[l]=e(t[c],c,l,o&&o[l])}}else n=[];return i&&(i[s]=n),n}const Qn=t=>t?Fa(t)?Bo(t)||t.proxy:Qn(t.parent):null,Ei=fe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Qn(t.parent),$root:t=>Qn(t.root),$emit:t=>t.emit,$options:t=>Do(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ro(t.update)}),$nextTick:t=>t.n||(t.n=Ld.bind(t.proxy)),$watch:t=>Kd.bind(t)}),wn=(t,e)=>t!==K&&!t.__isScriptSetup&&G(t,e),hu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:i,setupState:s,data:n,props:o,accessCache:r,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const $=r[e];if($!==void 0)switch($){case 1:return s[e];case 2:return n[e];case 4:return i[e];case 3:return o[e]}else{if(wn(s,e))return r[e]=1,s[e];if(n!==K&&G(n,e))return r[e]=2,n[e];if((c=t.propsOptions[0])&&G(c,e))return r[e]=3,o[e];if(i!==K&&G(i,e))return r[e]=4,i[e];Jn&&(r[e]=0)}}const d=Ei[e];let h,g;if(d)return e==="$attrs"&&De(t.attrs,"get",""),d(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(i!==K&&G(i,e))return r[e]=4,i[e];if(g=a.config.globalProperties,G(g,e))return g[e]},set({_:t},e,i){const{data:s,setupState:n,ctx:o}=t;return wn(n,e)?(n[e]=i,!0):s!==K&&G(s,e)?(s[e]=i,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=i,!0)},has({_:{data:t,setupState:e,accessCache:i,ctx:s,appContext:n,propsOptions:o}},r){let l;return!!i[r]||t!==K&&G(t,r)||wn(e,r)||(l=o[0])&&G(l,r)||G(s,r)||G(Ei,r)||G(n.config.globalProperties,r)},defineProperty(t,e,i){return i.get!=null?t._.accessCache[e]=0:G(i,"value")&&this.set(t,e,i.value,null),Reflect.defineProperty(t,e,i)}};function $r(t){return B(t)?t.reduce((e,i)=>(e[i]=null,e),{}):t}let Jn=!0;function fu(t){const e=Do(t),i=t.proxy,s=t.ctx;Jn=!1,e.beforeCreate&&kr(e.beforeCreate,t,"bc");const{data:n,computed:o,methods:r,watch:l,provide:a,inject:c,created:d,beforeMount:h,mounted:g,beforeUpdate:$,updated:R,activated:S,deactivated:_,beforeDestroy:W,beforeUnmount:q,destroyed:M,unmounted:z,render:de,renderTracked:E,renderTriggered:re,errorCaptured:pe,serverPrefetch:ut,expose:we,inheritAttrs:yi,components:os,directives:rs,filters:hn}=e;if(c&&pu(c,s,null),r)for(const se in r){const X=r[se];H(X)&&(s[se]=X.bind(i))}if(n){const se=n.call(i,i);ee(se)&&(t.data=So(se))}if(Jn=!0,o)for(const se in o){const X=o[se],At=H(X)?X.bind(i,i):H(X.get)?X.get.bind(i,i):Me,ls=!H(X)&&H(X.set)?X.set.bind(i):Me,_t=qu({get:At,set:ls});Object.defineProperty(s,se,{enumerable:!0,configurable:!0,get:()=>_t.value,set:Xe=>_t.value=Xe})}if(l)for(const se in l)wa(l[se],s,i,se);if(a){const se=H(a)?a.call(i):a;Reflect.ownKeys(se).forEach(X=>{xu(X,se[X])})}d&&kr(d,t,"c");function Ce(se,X){B(X)?X.forEach(At=>se(At.bind(i))):X&&se(X.bind(i))}if(Ce(su,h),Ce(ya,g),Ce(nu,$),Ce(ou,R),Ce(eu,S),Ce(tu,_),Ce(du,pe),Ce(cu,E),Ce(au,re),Ce(ru,q),Ce(xa,z),Ce(lu,ut),B(we))if(we.length){const se=t.exposed||(t.exposed={});we.forEach(X=>{Object.defineProperty(se,X,{get:()=>i[X],set:At=>i[X]=At})})}else t.exposed||(t.exposed={});de&&t.render===Me&&(t.render=de),yi!=null&&(t.inheritAttrs=yi),os&&(t.components=os),rs&&(t.directives=rs)}function pu(t,e,i=Me){B(t)&&(t=Yn(t));for(const s in t){const n=t[s];let o;ee(n)?"default"in n?o=ks(n.from||s,n.default,!0):o=ks(n.from||s):o=ks(n),Pe(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):e[s]=o}}function kr(t,e,i){We(B(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,i)}function wa(t,e,i,s){const n=s.includes(".")?ba(i,s):()=>i[s];if(ce(t)){const o=e[t];H(o)&&xn(n,o)}else if(H(t))xn(n,t.bind(i));else if(ee(t))if(B(t))t.forEach(o=>wa(o,e,i,s));else{const o=H(t.handler)?t.handler.bind(i):e[t.handler];H(o)&&xn(n,o,t)}}function Do(t){const e=t.type,{mixins:i,extends:s}=e,{mixins:n,optionsCache:o,config:{optionMergeStrategies:r}}=t.appContext,l=o.get(e);let a;return l?a=l:!n.length&&!i&&!s?a=e:(a={},n.length&&n.forEach(c=>Fs(a,c,r,!0)),Fs(a,e,r)),ee(e)&&o.set(e,a),a}function Fs(t,e,i,s=!1){const{mixins:n,extends:o}=e;o&&Fs(t,o,i,!0),n&&n.forEach(r=>Fs(t,r,i,!0));for(const r in e)if(!(s&&r==="expose")){const l=gu[r]||i&&i[r];t[r]=l?l(t[r],e[r]):e[r]}return t}const gu={data:Ir,props:Tr,emits:Tr,methods:Oi,computed:Oi,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:Oi,directives:Oi,watch:mu,provide:Ir,inject:bu};function Ir(t,e){return e?t?function(){return fe(H(t)?t.call(this,this):t,H(e)?e.call(this,this):e)}:e:t}function bu(t,e){return Oi(Yn(t),Yn(e))}function Yn(t){if(B(t)){const e={};for(let i=0;i<t.length;i++)e[t[i]]=t[i];return e}return t}function $e(t,e){return t?[...new Set([].concat(t,e))]:e}function Oi(t,e){return t?fe(Object.create(null),t,e):e}function Tr(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:fe(Object.create(null),$r(t),$r(e??{})):e}function mu(t,e){if(!t)return e;if(!e)return t;const i=fe(Object.create(null),t);for(const s in e)i[s]=$e(t[s],e[s]);return i}function Ca(){return{app:null,config:{isNativeTag:Jc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vu=0;function yu(t,e){return function(s,n=null){H(s)||(s=fe({},s)),n!=null&&!ee(n)&&(n=null);const o=Ca(),r=new WeakSet;let l=!1;const a=o.app={_uid:vu++,_component:s,_props:n,_container:null,_context:o,_instance:null,version:Gu,get config(){return o.config},set config(c){},use(c,...d){return r.has(c)||(c&&H(c.install)?(r.add(c),c.install(a,...d)):H(c)&&(r.add(c),c(a,...d))),a},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),a},component(c,d){return d?(o.components[c]=d,a):o.components[c]},directive(c,d){return d?(o.directives[c]=d,a):o.directives[c]},mount(c,d,h){if(!l){const g=Te(s,n);return g.appContext=o,h===!0?h="svg":h===!1&&(h=void 0),d&&e?e(g,c):t(g,c,h),l=!0,a._container=c,c.__vue_app__=a,Bo(g.component)||g.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,d){return o.provides[c]=d,a},runWithContext(c){const d=Ri;Ri=a;try{return c()}finally{Ri=d}}};return a}}let Ri=null;function xu(t,e){if(Ie){let i=Ie.provides;const s=Ie.parent&&Ie.parent.provides;s===i&&(i=Ie.provides=Object.create(s)),i[t]=e}}function ks(t,e,i=!1){const s=Ie||st;if(s||Ri){const n=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Ri._context.provides;if(n&&t in n)return n[t];if(arguments.length>1)return i&&H(e)?e.call(s&&s.proxy):e}}const $a={},ka=()=>Object.create($a),Ia=t=>Object.getPrototypeOf(t)===$a;function wu(t,e,i,s=!1){const n={},o=ka();t.propsDefaults=Object.create(null),Ta(t,e,n,o);for(const r in t.propsOptions[0])r in n||(n[r]=void 0);i?t.props=s?n:_d(n):t.type.props?t.props=n:t.props=o,t.attrs=o}function Cu(t,e,i,s){const{props:n,attrs:o,vnode:{patchFlag:r}}=t,l=J(n),[a]=t.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const d=t.vnode.dynamicProps;for(let h=0;h<d.length;h++){let g=d[h];if(Js(t.emitsOptions,g))continue;const $=e[g];if(a)if(G(o,g))$!==o[g]&&(o[g]=$,c=!0);else{const R=ri(g);n[R]=Xn(a,l,R,$,t,!1)}else $!==o[g]&&(o[g]=$,c=!0)}}}else{Ta(t,e,n,o)&&(c=!0);let d;for(const h in l)(!e||!G(e,h)&&((d=ui(h))===h||!G(e,d)))&&(a?i&&(i[h]!==void 0||i[d]!==void 0)&&(n[h]=Xn(a,l,h,void 0,t,!0)):delete n[h]);if(o!==l)for(const h in o)(!e||!G(e,h))&&(delete o[h],c=!0)}c&&lt(t.attrs,"set","")}function Ta(t,e,i,s){const[n,o]=t.propsOptions;let r=!1,l;if(e)for(let a in e){if(Ai(a))continue;const c=e[a];let d;n&&G(n,d=ri(a))?!o||!o.includes(d)?i[d]=c:(l||(l={}))[d]=c:Js(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,r=!0)}if(o){const a=J(i),c=l||K;for(let d=0;d<o.length;d++){const h=o[d];i[h]=Xn(n,a,h,c[h],t,!G(c,h))}}return r}function Xn(t,e,i,s,n,o){const r=t[i];if(r!=null){const l=G(r,"default");if(l&&s===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&H(a)){const{propsDefaults:c}=n;if(i in c)s=c[i];else{const d=Ki(n);s=c[i]=a.call(null,e),d()}}else s=a}r[0]&&(o&&!l?s=!1:r[1]&&(s===""||s===ui(i))&&(s=!0))}return s}function Sa(t,e,i=!1){const s=e.propsCache,n=s.get(t);if(n)return n;const o=t.props,r={},l=[];let a=!1;if(!H(t)){const d=h=>{a=!0;const[g,$]=Sa(h,e,!0);fe(r,g),$&&l.push(...$)};!i&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!o&&!a)return ee(t)&&s.set(t,Kt),Kt;if(B(o))for(let d=0;d<o.length;d++){const h=ri(o[d]);Sr(h)&&(r[h]=K)}else if(o)for(const d in o){const h=ri(d);if(Sr(h)){const g=o[d],$=r[h]=B(g)||H(g)?{type:g}:fe({},g);if($){const R=_r(Boolean,$.type),S=_r(String,$.type);$[0]=R>-1,$[1]=S<0||R<S,(R>-1||G($,"default"))&&l.push(h)}}}const c=[r,l];return ee(t)&&s.set(t,c),c}function Sr(t){return t[0]!=="$"&&!Ai(t)}function Or(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Ar(t,e){return Or(t)===Or(e)}function _r(t,e){return B(e)?e.findIndex(i=>Ar(i,t)):H(e)&&Ar(e,t)?0:-1}const Oa=t=>t[0]==="_"||t==="$stable",Po=t=>B(t)?t.map(tt):[tt(t)],$u=(t,e,i)=>{if(e._n)return e;const s=zd((...n)=>Po(e(...n)),i);return s._c=!1,s},Aa=(t,e,i)=>{const s=t._ctx;for(const n in t){if(Oa(n))continue;const o=t[n];if(H(o))e[n]=$u(n,o,s);else if(o!=null){const r=Po(o);e[n]=()=>r}}},_a=(t,e)=>{const i=Po(e);t.slots.default=()=>i},ku=(t,e)=>{const i=t.slots=ka();if(t.vnode.shapeFlag&32){const s=e._;s?(fe(i,e),zl(i,"_",s)):Aa(e,i)}else e&&_a(t,e)},Iu=(t,e,i)=>{const{vnode:s,slots:n}=t;let o=!0,r=K;if(s.shapeFlag&32){const l=e._;l?i&&l===1?o=!1:(fe(n,e),!i&&l===1&&delete n._):(o=!e.$stable,Aa(e,n)),r=e}else e&&(_a(t,e),r={default:1});if(o)for(const l in n)!Oa(l)&&r[l]==null&&delete n[l]};function Zn(t,e,i,s,n=!1){if(B(t)){t.forEach((g,$)=>Zn(g,e&&(B(e)?e[$]:e),i,s,n));return}if($s(s)&&!n)return;const o=s.shapeFlag&4?Bo(s.component)||s.component.proxy:s.el,r=n?null:o,{i:l,r:a}=t,c=e&&e.r,d=l.refs===K?l.refs={}:l.refs,h=l.setupState;if(c!=null&&c!==a&&(ce(c)?(d[c]=null,G(h,c)&&(h[c]=null)):Pe(c)&&(c.value=null)),H(a))vt(a,l,12,[r,d]);else{const g=ce(a),$=Pe(a);if(g||$){const R=()=>{if(t.f){const S=g?G(h,a)?h[a]:d[a]:a.value;n?B(S)&&vo(S,o):B(S)?S.includes(o)||S.push(o):g?(d[a]=[o],G(h,a)&&(h[a]=d[a])):(a.value=[o],t.k&&(d[t.k]=a.value))}else g?(d[a]=r,G(h,a)&&(h[a]=r)):$&&(a.value=r,t.k&&(d[t.k]=r))};r?(R.id=-1,Ee(R,i)):R()}}}const Ee=Yd;function Tu(t){return Su(t)}function Su(t,e){const i=Ul();i.__VUE__=!0;const{insert:s,remove:n,patchProp:o,createElement:r,createText:l,createComment:a,setText:c,setElementText:d,parentNode:h,nextSibling:g,setScopeId:$=Me,insertStaticContent:R}=t,S=(u,f,b,v=null,y=null,C=null,I=void 0,w=null,k=!!f.dynamicChildren)=>{if(u===f)return;u&&!wi(u,f)&&(v=as(u),Xe(u,y,C,!0),u=null),f.patchFlag===-2&&(k=!1,f.dynamicChildren=null);const{type:x,ref:O,shapeFlag:P}=f;switch(x){case Zs:_(u,f,b,v);break;case Ui:W(u,f,b,v);break;case $n:u==null&&q(f,b,v,I);break;case et:os(u,f,b,v,y,C,I,w,k);break;default:P&1?de(u,f,b,v,y,C,I,w,k):P&6?rs(u,f,b,v,y,C,I,w,k):(P&64||P&128)&&x.process(u,f,b,v,y,C,I,w,k,Wt)}O!=null&&y&&Zn(O,u&&u.ref,C,f||u,!f)},_=(u,f,b,v)=>{if(u==null)s(f.el=l(f.children),b,v);else{const y=f.el=u.el;f.children!==u.children&&c(y,f.children)}},W=(u,f,b,v)=>{u==null?s(f.el=a(f.children||""),b,v):f.el=u.el},q=(u,f,b,v)=>{[u.el,u.anchor]=R(u.children,f,b,v,u.el,u.anchor)},M=({el:u,anchor:f},b,v)=>{let y;for(;u&&u!==f;)y=g(u),s(u,b,v),u=y;s(f,b,v)},z=({el:u,anchor:f})=>{let b;for(;u&&u!==f;)b=g(u),n(u),u=b;n(f)},de=(u,f,b,v,y,C,I,w,k)=>{f.type==="svg"?I="svg":f.type==="math"&&(I="mathml"),u==null?E(f,b,v,y,C,I,w,k):ut(u,f,y,C,I,w,k)},E=(u,f,b,v,y,C,I,w)=>{let k,x;const{props:O,shapeFlag:P,transition:D,dirs:L}=u;if(k=u.el=r(u.type,C,O&&O.is,O),P&8?d(k,u.children):P&16&&pe(u.children,k,null,v,y,Cn(u,C),I,w),L&&Et(u,null,v,"created"),re(k,u,u.scopeId,I,v),O){for(const Y in O)Y!=="value"&&!Ai(Y)&&o(k,Y,null,O[Y],C,u.children,v,y,nt);"value"in O&&o(k,"value",null,O.value,C),(x=O.onVnodeBeforeMount)&&Ke(x,v,u)}L&&Et(u,null,v,"beforeMount");const N=Ou(y,D);N&&D.beforeEnter(k),s(k,f,b),((x=O&&O.onVnodeMounted)||N||L)&&Ee(()=>{x&&Ke(x,v,u),N&&D.enter(k),L&&Et(u,null,v,"mounted")},y)},re=(u,f,b,v,y)=>{if(b&&$(u,b),v)for(let C=0;C<v.length;C++)$(u,v[C]);if(y){let C=y.subTree;if(f===C){const I=y.vnode;re(u,I,I.scopeId,I.slotScopeIds,y.parent)}}},pe=(u,f,b,v,y,C,I,w,k=0)=>{for(let x=k;x<u.length;x++){const O=u[x]=w?gt(u[x]):tt(u[x]);S(null,O,f,b,v,y,C,I,w)}},ut=(u,f,b,v,y,C,I)=>{const w=f.el=u.el;let{patchFlag:k,dynamicChildren:x,dirs:O}=f;k|=u.patchFlag&16;const P=u.props||K,D=f.props||K;let L;if(b&&Rt(b,!1),(L=D.onVnodeBeforeUpdate)&&Ke(L,b,f,u),O&&Et(f,u,b,"beforeUpdate"),b&&Rt(b,!0),x?we(u.dynamicChildren,x,w,b,v,Cn(f,y),C):I||X(u,f,w,null,b,v,Cn(f,y),C,!1),k>0){if(k&16)yi(w,f,P,D,b,v,y);else if(k&2&&P.class!==D.class&&o(w,"class",null,D.class,y),k&4&&o(w,"style",P.style,D.style,y),k&8){const N=f.dynamicProps;for(let Y=0;Y<N.length;Y++){const Z=N[Y],ue=P[Z],ze=D[Z];(ze!==ue||Z==="value")&&o(w,Z,ue,ze,y,u.children,b,v,nt)}}k&1&&u.children!==f.children&&d(w,f.children)}else!I&&x==null&&yi(w,f,P,D,b,v,y);((L=D.onVnodeUpdated)||O)&&Ee(()=>{L&&Ke(L,b,f,u),O&&Et(f,u,b,"updated")},v)},we=(u,f,b,v,y,C,I)=>{for(let w=0;w<f.length;w++){const k=u[w],x=f[w],O=k.el&&(k.type===et||!wi(k,x)||k.shapeFlag&70)?h(k.el):b;S(k,x,O,null,v,y,C,I,!0)}},yi=(u,f,b,v,y,C,I)=>{if(b!==v){if(b!==K)for(const w in b)!Ai(w)&&!(w in v)&&o(u,w,b[w],null,I,f.children,y,C,nt);for(const w in v){if(Ai(w))continue;const k=v[w],x=b[w];k!==x&&w!=="value"&&o(u,w,x,k,I,f.children,y,C,nt)}"value"in v&&o(u,"value",b.value,v.value,I)}},os=(u,f,b,v,y,C,I,w,k)=>{const x=f.el=u?u.el:l(""),O=f.anchor=u?u.anchor:l("");let{patchFlag:P,dynamicChildren:D,slotScopeIds:L}=f;L&&(w=w?w.concat(L):L),u==null?(s(x,b,v),s(O,b,v),pe(f.children||[],b,O,y,C,I,w,k)):P>0&&P&64&&D&&u.dynamicChildren?(we(u.dynamicChildren,D,b,y,C,I,w),(f.key!=null||y&&f===y.subTree)&&Ea(u,f,!0)):X(u,f,b,O,y,C,I,w,k)},rs=(u,f,b,v,y,C,I,w,k)=>{f.slotScopeIds=w,u==null?f.shapeFlag&512?y.ctx.activate(f,b,v,I,k):hn(f,b,v,y,C,I,k):rr(u,f,k)},hn=(u,f,b,v,y,C,I)=>{const w=u.component=Hu(u,v,y);if(ma(u)&&(w.ctx.renderer=Wt),Vu(w),w.asyncDep){if(y&&y.registerDep(w,Ce),!u.el){const k=w.subTree=Te(Ui);W(null,k,f,b)}}else Ce(w,u,f,b,y,C,I)},rr=(u,f,b)=>{const v=f.component=u.component;if(Gd(u,f,b))if(v.asyncDep&&!v.asyncResolved){se(v,f,b);return}else v.next=f,Hd(v.update),v.effect.dirty=!0,v.update();else f.el=u.el,v.vnode=f},Ce=(u,f,b,v,y,C,I)=>{const w=()=>{if(u.isMounted){let{next:O,bu:P,u:D,parent:L,vnode:N}=u;{const Qt=Ra(u);if(Qt){O&&(O.el=N.el,se(u,O,I)),Qt.asyncDep.then(()=>{u.isUnmounted||w()});return}}let Y=O,Z;Rt(u,!1),O?(O.el=N.el,se(u,O,I)):O=N,P&&mn(P),(Z=O.props&&O.props.onVnodeBeforeUpdate)&&Ke(Z,L,O,N),Rt(u,!0);const ue=yn(u),ze=u.subTree;u.subTree=ue,S(ze,ue,h(ze.el),as(ze),u,y,C),O.el=ue.el,Y===null&&Wd(u,ue.el),D&&Ee(D,y),(Z=O.props&&O.props.onVnodeUpdated)&&Ee(()=>Ke(Z,L,O,N),y)}else{let O;const{el:P,props:D}=f,{bm:L,m:N,parent:Y}=u,Z=$s(f);if(Rt(u,!1),L&&mn(L),!Z&&(O=D&&D.onVnodeBeforeMount)&&Ke(O,Y,f),Rt(u,!0),P&&gn){const ue=()=>{u.subTree=yn(u),gn(P,u.subTree,u,y,null)};Z?f.type.__asyncLoader().then(()=>!u.isUnmounted&&ue()):ue()}else{const ue=u.subTree=yn(u);S(null,ue,b,v,u,y,C),f.el=ue.el}if(N&&Ee(N,y),!Z&&(O=D&&D.onVnodeMounted)){const ue=f;Ee(()=>Ke(O,Y,ue),y)}(f.shapeFlag&256||Y&&$s(Y.vnode)&&Y.vnode.shapeFlag&256)&&u.a&&Ee(u.a,y),u.isMounted=!0,f=b=v=null}},k=u.effect=new Co(w,Me,()=>Ro(x),u.scope),x=u.update=()=>{k.dirty&&k.run()};x.id=u.uid,Rt(u,!0),x()},se=(u,f,b)=>{f.component=u;const v=u.vnode.props;u.vnode=f,u.next=null,Cu(u,f.props,v,b),Iu(u,f.children,b),kt(),wr(u),It()},X=(u,f,b,v,y,C,I,w,k=!1)=>{const x=u&&u.children,O=u?u.shapeFlag:0,P=f.children,{patchFlag:D,shapeFlag:L}=f;if(D>0){if(D&128){ls(x,P,b,v,y,C,I,w,k);return}else if(D&256){At(x,P,b,v,y,C,I,w,k);return}}L&8?(O&16&&nt(x,y,C),P!==x&&d(b,P)):O&16?L&16?ls(x,P,b,v,y,C,I,w,k):nt(x,y,C,!0):(O&8&&d(b,""),L&16&&pe(P,b,v,y,C,I,w,k))},At=(u,f,b,v,y,C,I,w,k)=>{u=u||Kt,f=f||Kt;const x=u.length,O=f.length,P=Math.min(x,O);let D;for(D=0;D<P;D++){const L=f[D]=k?gt(f[D]):tt(f[D]);S(u[D],L,b,null,y,C,I,w,k)}x>O?nt(u,y,C,!0,!1,P):pe(f,b,v,y,C,I,w,k,P)},ls=(u,f,b,v,y,C,I,w,k)=>{let x=0;const O=f.length;let P=u.length-1,D=O-1;for(;x<=P&&x<=D;){const L=u[x],N=f[x]=k?gt(f[x]):tt(f[x]);if(wi(L,N))S(L,N,b,null,y,C,I,w,k);else break;x++}for(;x<=P&&x<=D;){const L=u[P],N=f[D]=k?gt(f[D]):tt(f[D]);if(wi(L,N))S(L,N,b,null,y,C,I,w,k);else break;P--,D--}if(x>P){if(x<=D){const L=D+1,N=L<O?f[L].el:v;for(;x<=D;)S(null,f[x]=k?gt(f[x]):tt(f[x]),b,N,y,C,I,w,k),x++}}else if(x>D)for(;x<=P;)Xe(u[x],y,C,!0),x++;else{const L=x,N=x,Y=new Map;for(x=N;x<=D;x++){const Le=f[x]=k?gt(f[x]):tt(f[x]);Le.key!=null&&Y.set(Le.key,x)}let Z,ue=0;const ze=D-N+1;let Qt=!1,cr=0;const xi=new Array(ze);for(x=0;x<ze;x++)xi[x]=0;for(x=L;x<=P;x++){const Le=u[x];if(ue>=ze){Xe(Le,y,C,!0);continue}let Ze;if(Le.key!=null)Ze=Y.get(Le.key);else for(Z=N;Z<=D;Z++)if(xi[Z-N]===0&&wi(Le,f[Z])){Ze=Z;break}Ze===void 0?Xe(Le,y,C,!0):(xi[Ze-N]=x+1,Ze>=cr?cr=Ze:Qt=!0,S(Le,f[Ze],b,null,y,C,I,w,k),ue++)}const dr=Qt?Au(xi):Kt;for(Z=dr.length-1,x=ze-1;x>=0;x--){const Le=N+x,Ze=f[Le],ur=Le+1<O?f[Le+1].el:v;xi[x]===0?S(null,Ze,b,ur,y,C,I,w,k):Qt&&(Z<0||x!==dr[Z]?_t(Ze,b,ur,2):Z--)}}},_t=(u,f,b,v,y=null)=>{const{el:C,type:I,transition:w,children:k,shapeFlag:x}=u;if(x&6){_t(u.component.subTree,f,b,v);return}if(x&128){u.suspense.move(f,b,v);return}if(x&64){I.move(u,f,b,Wt);return}if(I===et){s(C,f,b);for(let P=0;P<k.length;P++)_t(k[P],f,b,v);s(u.anchor,f,b);return}if(I===$n){M(u,f,b);return}if(v!==2&&x&1&&w)if(v===0)w.beforeEnter(C),s(C,f,b),Ee(()=>w.enter(C),y);else{const{leave:P,delayLeave:D,afterLeave:L}=w,N=()=>s(C,f,b),Y=()=>{P(C,()=>{N(),L&&L()})};D?D(C,N,Y):Y()}else s(C,f,b)},Xe=(u,f,b,v=!1,y=!1)=>{const{type:C,props:I,ref:w,children:k,dynamicChildren:x,shapeFlag:O,patchFlag:P,dirs:D}=u;if(w!=null&&Zn(w,null,b,u,!0),O&256){f.ctx.deactivate(u);return}const L=O&1&&D,N=!$s(u);let Y;if(N&&(Y=I&&I.onVnodeBeforeUnmount)&&Ke(Y,f,u),O&6)Gc(u.component,b,v);else{if(O&128){u.suspense.unmount(b,v);return}L&&Et(u,null,f,"beforeUnmount"),O&64?u.type.remove(u,f,b,y,Wt,v):x&&(C!==et||P>0&&P&64)?nt(x,f,b,!1,!0):(C===et&&P&384||!y&&O&16)&&nt(k,f,b),v&&lr(u)}(N&&(Y=I&&I.onVnodeUnmounted)||L)&&Ee(()=>{Y&&Ke(Y,f,u),L&&Et(u,null,f,"unmounted")},b)},lr=u=>{const{type:f,el:b,anchor:v,transition:y}=u;if(f===et){qc(b,v);return}if(f===$n){z(u);return}const C=()=>{n(b),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:I,delayLeave:w}=y,k=()=>I(b,C);w?w(u.el,C,k):k()}else C()},qc=(u,f)=>{let b;for(;u!==f;)b=g(u),n(u),u=b;n(f)},Gc=(u,f,b)=>{const{bum:v,scope:y,update:C,subTree:I,um:w}=u;v&&mn(v),y.stop(),C&&(C.active=!1,Xe(I,u,f,b)),w&&Ee(w,f),Ee(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},nt=(u,f,b,v=!1,y=!1,C=0)=>{for(let I=C;I<u.length;I++)Xe(u[I],f,b,v,y)},as=u=>u.shapeFlag&6?as(u.component.subTree):u.shapeFlag&128?u.suspense.next():g(u.anchor||u.el);let fn=!1;const ar=(u,f,b)=>{u==null?f._vnode&&Xe(f._vnode,null,null,!0):S(f._vnode||null,u,f,null,null,null,b),fn||(fn=!0,wr(),ua(),fn=!1),f._vnode=u},Wt={p:S,um:Xe,m:_t,r:lr,mt:hn,mc:pe,pc:X,pbc:we,n:as,o:t};let pn,gn;return e&&([pn,gn]=e(Wt)),{render:ar,hydrate:pn,createApp:yu(ar,pn)}}function Cn({type:t,props:e},i){return i==="svg"&&t==="foreignObject"||i==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:i}function Rt({effect:t,update:e},i){t.allowRecurse=e.allowRecurse=i}function Ou(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ea(t,e,i=!1){const s=t.children,n=e.children;if(B(s)&&B(n))for(let o=0;o<s.length;o++){const r=s[o];let l=n[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[o]=gt(n[o]),l.el=r.el),i||Ea(r,l)),l.type===Zs&&(l.el=r.el)}}function Au(t){const e=t.slice(),i=[0];let s,n,o,r,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(n=i[i.length-1],t[n]<c){e[s]=n,i.push(s);continue}for(o=0,r=i.length-1;o<r;)l=o+r>>1,t[i[l]]<c?o=l+1:r=l;c<t[i[o]]&&(o>0&&(e[s]=i[o-1]),i[o]=s)}}for(o=i.length,r=i[o-1];o-- >0;)i[o]=r,r=e[r];return i}function Ra(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ra(e)}const _u=t=>t.__isTeleport,et=Symbol.for("v-fgt"),Zs=Symbol.for("v-txt"),Ui=Symbol.for("v-cmt"),$n=Symbol.for("v-stc"),Di=[];let Ge=null;function Pi(t=!1){Di.push(Ge=t?null:[])}function Eu(){Di.pop(),Ge=Di[Di.length-1]||null}let qi=1;function Er(t){qi+=t}function Da(t){return t.dynamicChildren=qi>0?Ge||Kt:null,Eu(),qi>0&&Ge&&Ge.push(t),t}function Bs(t,e,i,s,n,o){return Da(yt(t,e,i,s,n,o,!0))}function Ru(t,e,i,s,n){return Da(Te(t,e,i,s,n,!0))}function Kn(t){return t?t.__v_isVNode===!0:!1}function wi(t,e){return t.type===e.type&&t.key===e.key}const Pa=({key:t})=>t??null,Is=({ref:t,ref_key:e,ref_for:i})=>(typeof t=="number"&&(t=""+t),t!=null?ce(t)||Pe(t)||H(t)?{i:st,r:t,k:e,f:!!i}:t:null);function yt(t,e=null,i=null,s=0,n=null,o=t===et?0:1,r=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pa(e),ref:e&&Is(e),scopeId:pa,slotScopeIds:null,children:i,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:st};return l?(Fo(a,i),o&128&&t.normalize(a)):i&&(a.shapeFlag|=ce(i)?8:16),qi>0&&!r&&Ge&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&Ge.push(a),a}const Te=Du;function Du(t,e=null,i=null,s=0,n=null,o=!1){if((!t||t===Qd)&&(t=Ui),Kn(t)){const l=li(t,e,!0);return i&&Fo(l,i),qi>0&&!o&&Ge&&(l.shapeFlag&6?Ge[Ge.indexOf(t)]=l:Ge.push(l)),l.patchFlag|=-2,l}if(Uu(t)&&(t=t.__vccOpts),e){e=Pu(e);let{class:l,style:a}=e;l&&!ce(l)&&(e.class=wo(l)),ee(a)&&(oa(a)&&!B(a)&&(a=fe({},a)),e.style=xo(a))}const r=ce(t)?1:Jd(t)?128:_u(t)?64:ee(t)?4:H(t)?2:0;return yt(t,e,i,s,n,r,o,!0)}function Pu(t){return t?oa(t)||Ia(t)?fe({},t):t:null}function li(t,e,i=!1){const{props:s,ref:n,patchFlag:o,children:r}=t,l=e?Bu(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Pa(l),ref:e&&e.ref?i&&n?B(n)?n.concat(Is(e)):[n,Is(e)]:Is(e):n,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:r,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==et?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&li(t.ssContent),ssFallback:t.ssFallback&&li(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Fu(t=" ",e=0){return Te(Zs,null,t,e)}function tt(t){return t==null||typeof t=="boolean"?Te(Ui):B(t)?Te(et,null,t.slice()):typeof t=="object"?gt(t):Te(Zs,null,String(t))}function gt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:li(t)}function Fo(t,e){let i=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(B(e))i=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),Fo(t,n()),n._c&&(n._d=!0));return}else{i=32;const n=e._;!n&&!Ia(e)?e._ctx=st:n===3&&st&&(st.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else H(e)?(e={default:e,_ctx:st},i=32):(e=String(e),s&64?(i=16,e=[Fu(e)]):i=8);t.children=e,t.shapeFlag|=i}function Bu(...t){const e={};for(let i=0;i<t.length;i++){const s=t[i];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=wo([e.class,s.class]));else if(n==="style")e.style=xo([e.style,s.style]);else if(zs(n)){const o=e[n],r=s[n];r&&o!==r&&!(B(o)&&o.includes(r))&&(e[n]=o?[].concat(o,r):r)}else n!==""&&(e[n]=s[n])}return e}function Ke(t,e,i,s=null){We(t,e,7,[i,s])}const Lu=Ca();let Mu=0;function Hu(t,e,i){const s=t.type,n=(e?e.appContext:t.appContext)||Lu,o={uid:Mu++,vnode:t,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,scope:new ad(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sa(s,n),emitsOptions:fa(s,n),emit:null,emitted:null,propsDefaults:K,inheritAttrs:s.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:i,suspenseId:i?i.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=jd.bind(null,o),t.ce&&t.ce(o),o}let Ie=null,Ls,eo;{const t=Ul(),e=(i,s)=>{let n;return(n=t[i])||(n=t[i]=[]),n.push(s),o=>{n.length>1?n.forEach(r=>r(o)):n[0](o)}};Ls=e("__VUE_INSTANCE_SETTERS__",i=>Ie=i),eo=e("__VUE_SSR_SETTERS__",i=>Ks=i)}const Ki=t=>{const e=Ie;return Ls(t),t.scope.on(),()=>{t.scope.off(),Ls(e)}},Rr=()=>{Ie&&Ie.scope.off(),Ls(null)};function Fa(t){return t.vnode.shapeFlag&4}let Ks=!1;function Vu(t,e=!1){e&&eo(e);const{props:i,children:s}=t.vnode,n=Fa(t);wu(t,i,n,e),ku(t,s);const o=n?Nu(t,e):void 0;return e&&eo(!1),o}function Nu(t,e){const i=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,hu);const{setup:s}=i;if(s){const n=t.setupContext=s.length>1?zu(t):null,o=Ki(t);kt();const r=vt(s,t,0,[t.props,n]);if(It(),o(),Hl(r)){if(r.then(Rr,Rr),e)return r.then(l=>{Dr(t,l,e)}).catch(l=>{Qs(l,t,0)});t.asyncDep=r}else Dr(t,r,e)}else Ba(t,e)}function Dr(t,e,i){H(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ee(e)&&(t.setupState=aa(e)),Ba(t,i)}let Pr;function Ba(t,e,i){const s=t.type;if(!t.render){if(!e&&Pr&&!s.render){const n=s.template||Do(t).template;if(n){const{isCustomElement:o,compilerOptions:r}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=fe(fe({isCustomElement:o,delimiters:l},r),a);s.render=Pr(n,c)}}t.render=s.render||Me}{const n=Ki(t);kt();try{fu(t)}finally{It(),n()}}}const ju={get(t,e){return De(t,"get",""),t[e]}};function zu(t){const e=i=>{t.exposed=i||{}};return{attrs:new Proxy(t.attrs,ju),slots:t.slots,emit:t.emit,expose:e}}function Bo(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(aa(Ed(t.exposed)),{get(e,i){if(i in e)return e[i];if(i in Ei)return Ei[i](t)},has(e,i){return i in e||i in Ei}}))}function Uu(t){return H(t)&&"__vccOpts"in t}const qu=(t,e)=>Rd(t,e,Ks);function Fr(t,e,i){const s=arguments.length;return s===2?ee(e)&&!B(e)?Kn(e)?Te(t,null,[e]):Te(t,e):Te(t,null,e):(s>3?i=Array.prototype.slice.call(arguments,2):s===3&&Kn(i)&&(i=[i]),Te(t,e,i))}const Gu="3.4.25";/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Wu="http://www.w3.org/2000/svg",Qu="http://www.w3.org/1998/Math/MathML",bt=typeof document<"u"?document:null,Br=bt&&bt.createElement("template"),Ju={insert:(t,e,i)=>{e.insertBefore(t,i||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,i,s)=>{const n=e==="svg"?bt.createElementNS(Wu,t):e==="mathml"?bt.createElementNS(Qu,t):bt.createElement(t,i?{is:i}:void 0);return t==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:t=>bt.createTextNode(t),createComment:t=>bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,i,s,n,o){const r=i?i.previousSibling:e.lastChild;if(n&&(n===o||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),i),!(n===o||!(n=n.nextSibling)););else{Br.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const l=Br.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,i)}return[r?r.nextSibling:e.firstChild,i?i.previousSibling:e.lastChild]}},Yu=Symbol("_vtc");function Xu(t,e,i){const s=t[Yu];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):i?t.setAttribute("class",e):t.className=e}const Lr=Symbol("_vod"),Zu=Symbol("_vsh"),Ku=Symbol(""),eh=/(^|;)\s*display\s*:/;function th(t,e,i){const s=t.style,n=ce(i);let o=!1;if(i&&!n){if(e)if(ce(e))for(const r of e.split(";")){const l=r.slice(0,r.indexOf(":")).trim();i[l]==null&&Ts(s,l,"")}else for(const r in e)i[r]==null&&Ts(s,r,"");for(const r in i)r==="display"&&(o=!0),Ts(s,r,i[r])}else if(n){if(e!==i){const r=s[Ku];r&&(i+=";"+r),s.cssText=i,o=eh.test(i)}}else e&&t.removeAttribute("style");Lr in t&&(t[Lr]=o?s.display:"",t[Zu]&&(s.display="none"))}const Mr=/\s*!important$/;function Ts(t,e,i){if(B(i))i.forEach(s=>Ts(t,e,s));else if(i==null&&(i=""),e.startsWith("--"))t.setProperty(e,i);else{const s=ih(t,e);Mr.test(i)?t.setProperty(ui(s),i.replace(Mr,""),"important"):t[s]=i}}const Hr=["Webkit","Moz","ms"],kn={};function ih(t,e){const i=kn[e];if(i)return i;let s=ri(e);if(s!=="filter"&&s in t)return kn[e]=s;s=jl(s);for(let n=0;n<Hr.length;n++){const o=Hr[n]+s;if(o in t)return kn[e]=o}return e}const Vr="http://www.w3.org/1999/xlink";function sh(t,e,i,s,n){if(s&&e.startsWith("xlink:"))i==null?t.removeAttributeNS(Vr,e.slice(6,e.length)):t.setAttributeNS(Vr,e,i);else{const o=rd(e);i==null||o&&!ql(i)?t.removeAttribute(e):t.setAttribute(e,o?"":i)}}function nh(t,e,i,s,n,o,r){if(e==="innerHTML"||e==="textContent"){s&&r(s,n,o),t[e]=i??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const c=l==="OPTION"?t.getAttribute("value")||"":t.value,d=i??"";(c!==d||!("_value"in t))&&(t.value=d),i==null&&t.removeAttribute(e),t._value=i;return}let a=!1;if(i===""||i==null){const c=typeof t[e];c==="boolean"?i=ql(i):i==null&&c==="string"?(i="",a=!0):c==="number"&&(i=0,a=!0)}try{t[e]=i}catch{}a&&t.removeAttribute(e)}function oh(t,e,i,s){t.addEventListener(e,i,s)}function rh(t,e,i,s){t.removeEventListener(e,i,s)}const Nr=Symbol("_vei");function lh(t,e,i,s,n=null){const o=t[Nr]||(t[Nr]={}),r=o[e];if(s&&r)r.value=s;else{const[l,a]=ah(e);if(s){const c=o[e]=uh(s,n);oh(t,l,c,a)}else r&&(rh(t,l,r,a),o[e]=void 0)}}const jr=/(?:Once|Passive|Capture)$/;function ah(t){let e;if(jr.test(t)){e={};let s;for(;s=t.match(jr);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ui(t.slice(2)),e]}let In=0;const ch=Promise.resolve(),dh=()=>In||(ch.then(()=>In=0),In=Date.now());function uh(t,e){const i=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=i.attached)return;We(hh(s,i.value),e,5,[s])};return i.value=t,i.attached=dh(),i}function hh(t,e){if(B(e)){const i=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{i.call(t),t._stopped=!0},e.map(s=>n=>!n._stopped&&s&&s(n))}else return e}const zr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,fh=(t,e,i,s,n,o,r,l,a)=>{const c=n==="svg";e==="class"?Xu(t,s,c):e==="style"?th(t,i,s):zs(e)?mo(e)||lh(t,e,i,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ph(t,e,s,c))?nh(t,e,s,o,r,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),sh(t,e,s,c))};function ph(t,e,i,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&zr(e)&&H(i));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=t.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return zr(e)&&ce(i)?!1:e in t}const gh=fe({patchProp:fh},Ju);let Ur;function bh(){return Ur||(Ur=Tu(gh))}const mh=(...t)=>{const e=bh().createApp(...t),{mount:i}=e;return e.mount=s=>{const n=yh(s);if(!n)return;const o=e._component;!H(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),n.innerHTML="";const r=i(n,!1,vh(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},e};function vh(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function yh(t){return ce(t)?document.querySelector(t):t}const Ct=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();Ct.trustedTypes===void 0&&(Ct.trustedTypes={createPolicy:(t,e)=>e});const La={configurable:!1,enumerable:!1,writable:!1};Ct.FAST===void 0&&Reflect.defineProperty(Ct,"FAST",Object.assign({value:Object.create(null)},La));const Gi=Ct.FAST;if(Gi.getById===void 0){const t=Object.create(null);Reflect.defineProperty(Gi,"getById",Object.assign({value(e,i){let s=t[e];return s===void 0&&(s=i?t[e]=i():null),s}},La))}const Vt=Object.freeze([]);function Ma(){const t=new WeakMap;return function(e){let i=t.get(e);if(i===void 0){let s=Reflect.getPrototypeOf(e);for(;i===void 0&&s!==null;)i=t.get(s),s=Reflect.getPrototypeOf(s);i=i===void 0?[]:i.slice(0),t.set(e,i)}return i}}const Tn=Ct.FAST.getById(1,()=>{const t=[],e=[];function i(){if(e.length)throw e.shift()}function s(r){try{r.call()}catch(l){e.push(l),setTimeout(i,0)}}function n(){let l=0;for(;l<t.length;)if(s(t[l]),l++,l>1024){for(let a=0,c=t.length-l;a<c;a++)t[a]=t[a+l];t.length-=l,l=0}t.length=0}function o(r){t.length<1&&Ct.requestAnimationFrame(n),t.push(r)}return Object.freeze({enqueue:o,process:n})}),Ha=Ct.trustedTypes.createPolicy("fast-html",{createHTML:t=>t});let Sn=Ha;const Fi=`fast-${Math.random().toString(36).substring(2,8)}`,Va=`${Fi}{`,Lo=`}${Fi}`,V=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(t){if(Sn!==Ha)throw new Error("The HTML policy can only be set once.");Sn=t},createHTML(t){return Sn.createHTML(t)},isMarker(t){return t&&t.nodeType===8&&t.data.startsWith(Fi)},extractDirectiveIndexFromMarker(t){return parseInt(t.data.replace(`${Fi}:`,""))},createInterpolationPlaceholder(t){return`${Va}${t}${Lo}`},createCustomAttributePlaceholder(t,e){return`${t}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(t){return`<!--${Fi}:${t}-->`},queueUpdate:Tn.enqueue,processUpdates:Tn.process,nextUpdate(){return new Promise(Tn.enqueue)},setAttribute(t,e,i){i==null?t.removeAttribute(e):t.setAttribute(e,i)},setBooleanAttribute(t,e,i){i?t.setAttribute(e,""):t.removeAttribute(e)},removeChildNodes(t){for(let e=t.firstChild;e!==null;e=t.firstChild)t.removeChild(e)},createTemplateWalker(t){return document.createTreeWalker(t,133,null,!1)}});class Ms{constructor(e,i){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=i}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){const i=this.spillover;if(i===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else i.indexOf(e)===-1&&i.push(e)}unsubscribe(e){const i=this.spillover;if(i===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}notify(e){const i=this.spillover,s=this.source;if(i===void 0){const n=this.sub1,o=this.sub2;n!==void 0&&n.handleChange(s,e),o!==void 0&&o.handleChange(s,e)}else for(let n=0,o=i.length;n<o;++n)i[n].handleChange(s,e)}}class Na{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var i;const s=this.subscribers[e];s!==void 0&&s.notify(e),(i=this.sourceSubscribers)===null||i===void 0||i.notify(e)}subscribe(e,i){var s;if(i){let n=this.subscribers[i];n===void 0&&(this.subscribers[i]=n=new Ms(this.source)),n.subscribe(e)}else this.sourceSubscribers=(s=this.sourceSubscribers)!==null&&s!==void 0?s:new Ms(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,i){var s;if(i){const n=this.subscribers[i];n!==void 0&&n.unsubscribe(e)}else(s=this.sourceSubscribers)===null||s===void 0||s.unsubscribe(e)}}const j=Gi.getById(2,()=>{const t=/(:|&&|\|\||if)/,e=new WeakMap,i=V.queueUpdate;let s,n=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function o(c){let d=c.$fastController||e.get(c);return d===void 0&&(Array.isArray(c)?d=n(c):e.set(c,d=new Na(c))),d}const r=Ma();class l{constructor(d){this.name=d,this.field=`_${d}`,this.callback=`${d}Changed`}getValue(d){return s!==void 0&&s.watch(d,this.name),d[this.field]}setValue(d,h){const g=this.field,$=d[g];if($!==h){d[g]=h;const R=d[this.callback];typeof R=="function"&&R.call(d,$,h),o(d).notify(this.name)}}}class a extends Ms{constructor(d,h,g=!1){super(d,h),this.binding=d,this.isVolatileBinding=g,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(d,h){this.needsRefresh&&this.last!==null&&this.disconnect();const g=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const $=this.binding(d,h);return s=g,$}disconnect(){if(this.last!==null){let d=this.first;for(;d!==void 0;)d.notifier.unsubscribe(this,d.propertyName),d=d.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(d,h){const g=this.last,$=o(d),R=g===null?this.first:{};if(R.propertySource=d,R.propertyName=h,R.notifier=$,$.subscribe(this,h),g!==null){if(!this.needsRefresh){let S;s=void 0,S=g.propertySource[g.propertyName],s=this,d===S&&(this.needsRefresh=!0)}g.next=R}this.last=R}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let d=this.first;return{next:()=>{const h=d;return h===void 0?{value:void 0,done:!0}:(d=d.next,{value:h,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){n=c},getNotifier:o,track(c,d){s!==void 0&&s.watch(c,d)},trackVolatile(){s!==void 0&&(s.needsRefresh=!0)},notify(c,d){o(c).notify(d)},defineProperty(c,d){typeof d=="string"&&(d=new l(d)),r(c).push(d),Reflect.defineProperty(c,d.name,{enumerable:!0,get:function(){return d.getValue(this)},set:function(h){d.setValue(this,h)}})},getAccessors:r,binding(c,d,h=this.isVolatileBinding(c)){return new a(c,d,h)},isVolatileBinding(c){return t.test(c.toString())}})});function A(t,e){j.defineProperty(t,e)}function xh(t,e,i){return Object.assign({},i,{get:function(){return j.trackVolatile(),i.get.apply(this)}})}const qr=Gi.getById(3,()=>{let t=null;return{get(){return t},set(e){t=e}}});class Wi{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return qr.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){qr.set(e)}}j.defineProperty(Wi.prototype,"index");j.defineProperty(Wi.prototype,"length");const Bi=Object.seal(new Wi);class en{constructor(){this.targetIndex=0}}class ja extends en{constructor(){super(...arguments),this.createPlaceholder=V.createInterpolationPlaceholder}}class Mo extends en{constructor(e,i,s){super(),this.name=e,this.behavior=i,this.options=s}createPlaceholder(e){return V.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function wh(t,e){this.source=t,this.context=e,this.bindingObserver===null&&(this.bindingObserver=j.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(t,e))}function Ch(t,e){this.source=t,this.context=e,this.target.addEventListener(this.targetName,this)}function $h(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function kh(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const t=this.target.$fastView;t!==void 0&&t.isComposed&&(t.unbind(),t.needsBindOnly=!0)}function Ih(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function Th(t){V.setAttribute(this.target,this.targetName,t)}function Sh(t){V.setBooleanAttribute(this.target,this.targetName,t)}function Oh(t){if(t==null&&(t=""),t.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=t.create():this.target.$fastTemplate!==t&&(e.isComposed&&(e.remove(),e.unbind()),e=t.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=t)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=t}}function Ah(t){this.target[this.targetName]=t}function _h(t){const e=this.classVersions||Object.create(null),i=this.target;let s=this.version||0;if(t!=null&&t.length){const n=t.split(/\s+/);for(let o=0,r=n.length;o<r;++o){const l=n[o];l!==""&&(e[l]=s,i.classList.add(l))}}if(this.classVersions=e,this.version=s+1,s!==0){s-=1;for(const n in e)e[n]===s&&i.classList.remove(n)}}class Ho extends ja{constructor(e){super(),this.binding=e,this.bind=wh,this.unbind=$h,this.updateTarget=Th,this.isBindingVolatile=j.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Ah,this.cleanedTargetName==="innerHTML"){const i=this.binding;this.binding=(s,n)=>V.createHTML(i(s,n))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Sh;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=Ch,this.unbind=Ih;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=_h);break}}targetAtContent(){this.updateTarget=Oh,this.unbind=kh}createBehavior(e){return new Eh(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class Eh{constructor(e,i,s,n,o,r,l){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=i,this.isBindingVolatile=s,this.bind=n,this.unbind=o,this.updateTarget=r,this.targetName=l}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Wi.setEvent(e);const i=this.binding(this.source,this.context);Wi.setEvent(null),i!==!0&&e.preventDefault()}}let On=null;class Vo{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){On=this}static borrow(e){const i=On||new Vo;return i.directives=e,i.reset(),On=null,i}}function Rh(t){if(t.length===1)return t[0];let e;const i=t.length,s=t.map(r=>typeof r=="string"?()=>r:(e=r.targetName||e,r.binding)),n=(r,l)=>{let a="";for(let c=0;c<i;++c)a+=s[c](r,l);return a},o=new Ho(n);return o.targetName=e,o}const Dh=Lo.length;function za(t,e){const i=e.split(Va);if(i.length===1)return null;const s=[];for(let n=0,o=i.length;n<o;++n){const r=i[n],l=r.indexOf(Lo);let a;if(l===-1)a=r;else{const c=parseInt(r.substring(0,l));s.push(t.directives[c]),a=r.substring(l+Dh)}a!==""&&s.push(a)}return s}function Gr(t,e,i=!1){const s=e.attributes;for(let n=0,o=s.length;n<o;++n){const r=s[n],l=r.value,a=za(t,l);let c=null;a===null?i&&(c=new Ho(()=>l),c.targetName=r.name):c=Rh(a),c!==null&&(e.removeAttributeNode(r),n--,o--,t.addFactory(c))}}function Ph(t,e,i){const s=za(t,e.textContent);if(s!==null){let n=e;for(let o=0,r=s.length;o<r;++o){const l=s[o],a=o===0?e:n.parentNode.insertBefore(document.createTextNode(""),n.nextSibling);typeof l=="string"?a.textContent=l:(a.textContent=" ",t.captureContentBinding(l)),n=a,t.targetIndex++,a!==e&&i.nextNode()}t.targetIndex--}}function Fh(t,e){const i=t.content;document.adoptNode(i);const s=Vo.borrow(e);Gr(s,t,!0);const n=s.behaviorFactories;s.reset();const o=V.createTemplateWalker(i);let r;for(;r=o.nextNode();)switch(s.targetIndex++,r.nodeType){case 1:Gr(s,r);break;case 3:Ph(s,r,o);break;case 8:V.isMarker(r)&&s.addFactory(e[V.extractDirectiveIndexFromMarker(r)])}let l=0;(V.isMarker(i.firstChild)||i.childNodes.length===1&&e.length)&&(i.insertBefore(document.createComment(""),i.firstChild),l=-1);const a=s.behaviorFactories;return s.release(),{fragment:i,viewBehaviorFactories:a,hostBehaviorFactories:n,targetOffset:l}}const An=document.createRange();class Ua{constructor(e,i){this.fragment=e,this.behaviors=i,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const i=this.lastChild;if(e.previousSibling===i)return;const s=e.parentNode;let n=this.firstChild,o;for(;n!==i;)o=n.nextSibling,s.insertBefore(n,e),n=o;s.insertBefore(i,e)}}remove(){const e=this.fragment,i=this.lastChild;let s=this.firstChild,n;for(;s!==i;)n=s.nextSibling,e.appendChild(s),s=n;e.appendChild(i)}dispose(){const e=this.firstChild.parentNode,i=this.lastChild;let s=this.firstChild,n;for(;s!==i;)n=s.nextSibling,e.removeChild(s),s=n;e.removeChild(i);const o=this.behaviors,r=this.source;for(let l=0,a=o.length;l<a;++l)o[l].unbind(r)}bind(e,i){const s=this.behaviors;if(this.source!==e)if(this.source!==null){const n=this.source;this.source=e,this.context=i;for(let o=0,r=s.length;o<r;++o){const l=s[o];l.unbind(n),l.bind(e,i)}}else{this.source=e,this.context=i;for(let n=0,o=s.length;n<o;++n)s[n].bind(e,i)}}unbind(){if(this.source===null)return;const e=this.behaviors,i=this.source;for(let s=0,n=e.length;s<n;++s)e[s].unbind(i);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){An.setStartBefore(e[0].firstChild),An.setEndAfter(e[e.length-1].lastChild),An.deleteContents();for(let i=0,s=e.length;i<s;++i){const n=e[i],o=n.behaviors,r=n.source;for(let l=0,a=o.length;l<a;++l)o[l].unbind(r)}}}}class Wr{constructor(e,i){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=i}create(e){if(this.fragment===null){let c;const d=this.html;if(typeof d=="string"){c=document.createElement("template"),c.innerHTML=V.createHTML(d);const g=c.content.firstElementChild;g!==null&&g.tagName==="TEMPLATE"&&(c=g)}else c=d;const h=Fh(c,this.directives);this.fragment=h.fragment,this.viewBehaviorFactories=h.viewBehaviorFactories,this.hostBehaviorFactories=h.hostBehaviorFactories,this.targetOffset=h.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const i=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,n=new Array(this.behaviorCount),o=V.createTemplateWalker(i);let r=0,l=this.targetOffset,a=o.nextNode();for(let c=s.length;r<c;++r){const d=s[r],h=d.targetIndex;for(;a!==null;)if(l===h){n[r]=d.createBehavior(a);break}else a=o.nextNode(),l++}if(this.hasHostBehaviors){const c=this.hostBehaviorFactories;for(let d=0,h=c.length;d<h;++d,++r)n[r]=c[d].createBehavior(e)}return new Ua(i,n)}render(e,i,s){typeof i=="string"&&(i=document.getElementById(i)),s===void 0&&(s=i);const n=this.create(s);return n.bind(e,Bi),n.appendTo(i),n}}const Bh=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Q(t,...e){const i=[];let s="";for(let n=0,o=t.length-1;n<o;++n){const r=t[n];let l=e[n];if(s+=r,l instanceof Wr){const a=l;l=()=>a}if(typeof l=="function"&&(l=new Ho(l)),l instanceof ja){const a=Bh.exec(r);a!==null&&(l.targetName=a[2])}l instanceof en?(s+=l.createPlaceholder(i.length),i.push(l)):s+=l}return s+=t[t.length-1],new Wr(s,i)}class Re{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}Re.create=(()=>{if(V.supportsAdoptedStyleSheets){const t=new Map;return e=>new Lh(e,t)}return t=>new Vh(t)})();function No(t){return t.map(e=>e instanceof Re?No(e.styles):[e]).reduce((e,i)=>e.concat(i),[])}function qa(t){return t.map(e=>e instanceof Re?e.behaviors:null).reduce((e,i)=>i===null?e:(e===null&&(e=[]),e.concat(i)),null)}const Ga=Symbol("prependToAdoptedStyleSheets");function Wa(t){const e=[],i=[];return t.forEach(s=>(s[Ga]?e:i).push(s)),{prepend:e,append:i}}let Qa=(t,e)=>{const{prepend:i,append:s}=Wa(e);t.adoptedStyleSheets=[...i,...t.adoptedStyleSheets,...s]},Ja=(t,e)=>{t.adoptedStyleSheets=t.adoptedStyleSheets.filter(i=>e.indexOf(i)===-1)};if(V.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),Qa=(t,e)=>{const{prepend:i,append:s}=Wa(e);t.adoptedStyleSheets.splice(0,0,...i),t.adoptedStyleSheets.push(...s)},Ja=(t,e)=>{for(const i of e){const s=t.adoptedStyleSheets.indexOf(i);s!==-1&&t.adoptedStyleSheets.splice(s,1)}}}catch{}class Lh extends Re{constructor(e,i){super(),this.styles=e,this.styleSheetCache=i,this._styleSheets=void 0,this.behaviors=qa(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,i=this.styleSheetCache;this._styleSheets=No(e).map(s=>{if(s instanceof CSSStyleSheet)return s;let n=i.get(s);return n===void 0&&(n=new CSSStyleSheet,n.replaceSync(s),i.set(s,n)),n})}return this._styleSheets}addStylesTo(e){Qa(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){Ja(e,this.styleSheets),super.removeStylesFrom(e)}}let Mh=0;function Hh(){return`fast-style-class-${++Mh}`}class Vh extends Re{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=qa(e),this.styleSheets=No(e),this.styleClass=Hh()}addStylesTo(e){const i=this.styleSheets,s=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<i.length;n++){const o=document.createElement("style");o.innerHTML=i[n],o.className=s,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const i=e.querySelectorAll(`.${this.styleClass}`);for(let s=0,n=i.length;s<n;++s)e.removeChild(i[s]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const Hs=Object.freeze({locate:Ma()}),Ya={toView(t){return t?"true":"false"},fromView(t){return!(t==null||t==="false"||t===!1||t===0)}},Qe={toView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e.toString()},fromView(t){if(t==null)return null;const e=t*1;return isNaN(e)?null:e}};class Vs{constructor(e,i,s=i.toLowerCase(),n="reflect",o){this.guards=new Set,this.Owner=e,this.name=i,this.attribute=s,this.mode=n,this.converter=o,this.fieldName=`_${i}`,this.callbackName=`${i}Changed`,this.hasCallback=this.callbackName in e.prototype,n==="boolean"&&o===void 0&&(this.converter=Ya)}setValue(e,i){const s=e[this.fieldName],n=this.converter;n!==void 0&&(i=n.fromView(i)),s!==i&&(e[this.fieldName]=i,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](s,i),e.$fastController.notify(this.name))}getValue(e){return j.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,i){this.guards.has(e)||(this.guards.add(e),this.setValue(e,i),this.guards.delete(e))}tryReflectToAttribute(e){const i=this.mode,s=this.guards;s.has(e)||i==="fromView"||V.queueUpdate(()=>{s.add(e);const n=e[this.fieldName];switch(i){case"reflect":const o=this.converter;V.setAttribute(e,this.attribute,o!==void 0?o.toView(n):n);break;case"boolean":V.setBooleanAttribute(e,this.attribute,n);break}s.delete(e)})}static collect(e,...i){const s=[];i.push(Hs.locate(e));for(let n=0,o=i.length;n<o;++n){const r=i[n];if(r!==void 0)for(let l=0,a=r.length;l<a;++l){const c=r[l];typeof c=="string"?s.push(new Vs(e,c)):s.push(new Vs(e,c.property,c.attribute,c.mode,c.converter))}}return s}}function m(t,e){let i;function s(n,o){arguments.length>1&&(i.property=o),Hs.locate(n.constructor).push(i)}if(arguments.length>1){i={},s(t,e);return}return i=t===void 0?{}:t,s}const Qr={mode:"open"},Jr={},to=Gi.getById(4,()=>{const t=new Map;return Object.freeze({register(e){return t.has(e.type)?!1:(t.set(e.type,e),!0)},getByType(e){return t.get(e)}})});class tn{constructor(e,i=e.definition){typeof i=="string"&&(i={name:i}),this.type=e,this.name=i.name,this.template=i.template;const s=Vs.collect(e,i.attributes),n=new Array(s.length),o={},r={};for(let l=0,a=s.length;l<a;++l){const c=s[l];n[l]=c.attribute,o[c.name]=c,r[c.attribute]=c}this.attributes=s,this.observedAttributes=n,this.propertyLookup=o,this.attributeLookup=r,this.shadowOptions=i.shadowOptions===void 0?Qr:i.shadowOptions===null?void 0:Object.assign(Object.assign({},Qr),i.shadowOptions),this.elementOptions=i.elementOptions===void 0?Jr:Object.assign(Object.assign({},Jr),i.elementOptions),this.styles=i.styles===void 0?void 0:Array.isArray(i.styles)?Re.create(i.styles):i.styles instanceof Re?i.styles:Re.create([i.styles])}get isDefined(){return!!to.getByType(this.type)}define(e=customElements){const i=this.type;if(to.register(this)){const s=this.attributes,n=i.prototype;for(let o=0,r=s.length;o<r;++o)j.defineProperty(n,s[o]);Reflect.defineProperty(i,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,i,this.elementOptions),this}}tn.forType=to.getByType;const Xa=new WeakMap,Nh={bubbles:!0,composed:!0,cancelable:!0};function _n(t){return t.shadowRoot||Xa.get(t)||null}class jo extends Na{constructor(e,i){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=i;const s=i.shadowOptions;if(s!==void 0){const o=e.attachShadow(s);s.mode==="closed"&&Xa.set(e,o)}const n=j.getAccessors(e);if(n.length>0){const o=this.boundObservables=Object.create(null);for(let r=0,l=n.length;r<l;++r){const a=n[r].name,c=e[a];c!==void 0&&(delete e[a],o[a]=c)}}}get isConnected(){return j.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,j.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const i=_n(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)i.append(e);else if(!e.isAttachedTo(i)){const s=e.behaviors;e.addStylesTo(i),s!==null&&this.addBehaviors(s)}}removeStyles(e){const i=_n(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)i.removeChild(e);else if(e.isAttachedTo(i)){const s=e.behaviors;e.removeStylesFrom(i),s!==null&&this.removeBehaviors(s)}}addBehaviors(e){const i=this.behaviors||(this.behaviors=new Map),s=e.length,n=[];for(let o=0;o<s;++o){const r=e[o];i.has(r)?i.set(r,i.get(r)+1):(i.set(r,1),n.push(r))}if(this._isConnected){const o=this.element;for(let r=0;r<n.length;++r)n[r].bind(o,Bi)}}removeBehaviors(e,i=!1){const s=this.behaviors;if(s===null)return;const n=e.length,o=[];for(let r=0;r<n;++r){const l=e[r];if(s.has(l)){const a=s.get(l)-1;a===0||i?s.delete(l)&&o.push(l):s.set(l,a)}}if(this._isConnected){const r=this.element;for(let l=0;l<o.length;++l)o[l].unbind(r)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,Bi);const i=this.behaviors;if(i!==null)for(const[s]of i)s.bind(e,Bi);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const i=this.behaviors;if(i!==null){const s=this.element;for(const[n]of i)n.unbind(s)}}onAttributeChangedCallback(e,i,s){const n=this.definition.attributeLookup[e];n!==void 0&&n.onAttributeChangedCallback(this.element,s)}emit(e,i,s){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:i},Nh),s))):!1}finishInitialization(){const e=this.element,i=this.boundObservables;if(i!==null){const n=Object.keys(i);for(let o=0,r=n.length;o<r;++o){const l=n[o];e[l]=i[l]}this.boundObservables=null}const s=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const i=this.element,s=_n(i)||i;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||V.removeChildNodes(s),e&&(this.view=e.render(i,s,i))}static forCustomElement(e){const i=e.$fastController;if(i!==void 0)return i;const s=tn.forType(e.constructor);if(s===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new jo(e,s)}}function Yr(t){return class extends t{constructor(){super(),jo.forCustomElement(this)}$emit(e,i,s){return this.$fastController.emit(e,i,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,i,s){this.$fastController.onAttributeChangedCallback(e,i,s)}}}const sn=Object.assign(Yr(HTMLElement),{from(t){return Yr(t)},define(t,e){return new tn(t,e).define().type}});class Za{createCSS(){return""}createBehavior(){}}function jh(t,e){const i=[];let s="";const n=[];for(let o=0,r=t.length-1;o<r;++o){s+=t[o];let l=e[o];if(l instanceof Za){const a=l.createBehavior();l=l.createCSS(),a&&n.push(a)}l instanceof Re||l instanceof CSSStyleSheet?(s.trim()!==""&&(i.push(s),s=""),i.push(l)):s+=l}return s+=t[t.length-1],s.trim()!==""&&i.push(s),{styles:i,behaviors:n}}function oe(t,...e){const{styles:i,behaviors:s}=jh(t,e),n=Re.create(i);return s.length&&n.withBehaviors(...s),n}function qe(t,e,i){return{index:t,removed:e,addedCount:i}}const Ka=0,ec=1,io=2,so=3;function zh(t,e,i,s,n,o){const r=o-n+1,l=i-e+1,a=new Array(r);let c,d;for(let h=0;h<r;++h)a[h]=new Array(l),a[h][0]=h;for(let h=0;h<l;++h)a[0][h]=h;for(let h=1;h<r;++h)for(let g=1;g<l;++g)t[e+g-1]===s[n+h-1]?a[h][g]=a[h-1][g-1]:(c=a[h-1][g]+1,d=a[h][g-1]+1,a[h][g]=c<d?c:d);return a}function Uh(t){let e=t.length-1,i=t[0].length-1,s=t[e][i];const n=[];for(;e>0||i>0;){if(e===0){n.push(io),i--;continue}if(i===0){n.push(so),e--;continue}const o=t[e-1][i-1],r=t[e-1][i],l=t[e][i-1];let a;r<l?a=r<o?r:o:a=l<o?l:o,a===o?(o===s?n.push(Ka):(n.push(ec),s=o),e--,i--):a===r?(n.push(so),e--,s=r):(n.push(io),i--,s=l)}return n.reverse(),n}function qh(t,e,i){for(let s=0;s<i;++s)if(t[s]!==e[s])return s;return i}function Gh(t,e,i){let s=t.length,n=e.length,o=0;for(;o<i&&t[--s]===e[--n];)o++;return o}function Wh(t,e,i,s){return e<i||s<t?-1:e===i||s===t?0:t<i?e<s?e-i:s-i:s<e?s-t:e-t}function tc(t,e,i,s,n,o){let r=0,l=0;const a=Math.min(i-e,o-n);if(e===0&&n===0&&(r=qh(t,s,a)),i===t.length&&o===s.length&&(l=Gh(t,s,a-r)),e+=r,n+=r,i-=l,o-=l,i-e===0&&o-n===0)return Vt;if(e===i){const R=qe(e,[],0);for(;n<o;)R.removed.push(s[n++]);return[R]}else if(n===o)return[qe(e,[],i-e)];const c=Uh(zh(t,e,i,s,n,o)),d=[];let h,g=e,$=n;for(let R=0;R<c.length;++R)switch(c[R]){case Ka:h!==void 0&&(d.push(h),h=void 0),g++,$++;break;case ec:h===void 0&&(h=qe(g,[],0)),h.addedCount++,g++,h.removed.push(s[$]),$++;break;case io:h===void 0&&(h=qe(g,[],0)),h.addedCount++,g++;break;case so:h===void 0&&(h=qe(g,[],0)),h.removed.push(s[$]),$++;break}return h!==void 0&&d.push(h),d}const Xr=Array.prototype.push;function Qh(t,e,i,s){const n=qe(e,i,s);let o=!1,r=0;for(let l=0;l<t.length;l++){const a=t[l];if(a.index+=r,o)continue;const c=Wh(n.index,n.index+n.removed.length,a.index,a.index+a.addedCount);if(c>=0){t.splice(l,1),l--,r-=a.addedCount-a.removed.length,n.addedCount+=a.addedCount-c;const d=n.removed.length+a.removed.length-c;if(!n.addedCount&&!d)o=!0;else{let h=a.removed;if(n.index<a.index){const g=n.removed.slice(0,a.index-n.index);Xr.apply(g,h),h=g}if(n.index+n.removed.length>a.index+a.addedCount){const g=n.removed.slice(a.index+a.addedCount-n.index);Xr.apply(h,g)}n.removed=h,a.index<n.index&&(n.index=a.index)}}else if(n.index<a.index){o=!0,t.splice(l,0,n),l++;const d=n.addedCount-n.removed.length;a.index+=d,r+=d}}o||t.push(n)}function Jh(t){const e=[];for(let i=0,s=t.length;i<s;i++){const n=t[i];Qh(e,n.index,n.removed,n.addedCount)}return e}function Yh(t,e){let i=[];const s=Jh(e);for(let n=0,o=s.length;n<o;++n){const r=s[n];if(r.addedCount===1&&r.removed.length===1){r.removed[0]!==t[r.index]&&i.push(r);continue}i=i.concat(tc(t,r.index,r.index+r.addedCount,r.removed,0,r.removed.length))}return i}let Zr=!1;function En(t,e){let i=t.index;const s=e.length;return i>s?i=s-t.addedCount:i<0&&(i=s+t.removed.length+i-t.addedCount),i<0&&(i=0),t.index=i,t}class Xh extends Ms{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}subscribe(e){this.flush(),super.subscribe(e)}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,V.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,V.queueUpdate(this))}flush(){const e=this.splices,i=this.oldCollection;if(e===void 0&&i===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const s=i===void 0?Yh(this.source,e):tc(this.source,0,this.source.length,i,0,i.length);this.notify(s)}}function Zh(){if(Zr)return;Zr=!0,j.setArrayObserverFactory(a=>new Xh(a));const t=Array.prototype;if(t.$fastPatch)return;Reflect.defineProperty(t,"$fastPatch",{value:1,enumerable:!1});const e=t.pop,i=t.push,s=t.reverse,n=t.shift,o=t.sort,r=t.splice,l=t.unshift;t.pop=function(){const a=this.length>0,c=e.apply(this,arguments),d=this.$fastController;return d!==void 0&&a&&d.addSplice(qe(this.length,[c],0)),c},t.push=function(){const a=i.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(En(qe(this.length-arguments.length,[],arguments.length),this)),a},t.reverse=function(){let a;const c=this.$fastController;c!==void 0&&(c.flush(),a=this.slice());const d=s.apply(this,arguments);return c!==void 0&&c.reset(a),d},t.shift=function(){const a=this.length>0,c=n.apply(this,arguments),d=this.$fastController;return d!==void 0&&a&&d.addSplice(qe(0,[c],0)),c},t.sort=function(){let a;const c=this.$fastController;c!==void 0&&(c.flush(),a=this.slice());const d=o.apply(this,arguments);return c!==void 0&&c.reset(a),d},t.splice=function(){const a=r.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(En(qe(+arguments[0],a,arguments.length>2?arguments.length-2:0),this)),a},t.unshift=function(){const a=l.apply(this,arguments),c=this.$fastController;return c!==void 0&&c.addSplice(En(qe(0,[],arguments.length),this)),a}}class Kh{constructor(e,i){this.target=e,this.propertyName=i}bind(e){e[this.propertyName]=this.target}unbind(){}}function Oe(t){return new Mo("fast-ref",Kh,t)}const ic=t=>typeof t=="function",ef=()=>null;function Kr(t){return t===void 0?ef:ic(t)?t:()=>t}function zo(t,e,i){const s=ic(t)?t:()=>t,n=Kr(e),o=Kr(i);return(r,l)=>s(r,l)?n(r,l):o(r,l)}function tf(t,e,i,s){t.bind(e[i],s)}function sf(t,e,i,s){const n=Object.create(s);n.index=i,n.length=e.length,t.bind(e[i],n)}class nf{constructor(e,i,s,n,o,r){this.location=e,this.itemsBinding=i,this.templateBinding=n,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=tf,this.itemsBindingObserver=j.binding(i,this,s),this.templateBindingObserver=j.binding(n,this,o),r.positioning&&(this.bindView=sf)}bind(e,i){this.source=e,this.originalContext=i,this.childContext=Object.create(i),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,i){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(i)}observeItems(e=!1){if(!this.items){this.items=Vt;return}const i=this.itemsObserver,s=this.itemsObserver=j.getNotifier(this.items),n=i!==s;n&&i!==null&&i.unsubscribe(this),(n||e)&&s.subscribe(this)}updateViews(e){const i=this.childContext,s=this.views,n=this.bindView,o=this.items,r=this.template,l=this.options.recycle,a=[];let c=0,d=0;for(let h=0,g=e.length;h<g;++h){const $=e[h],R=$.removed;let S=0,_=$.index;const W=_+$.addedCount,q=s.splice($.index,R.length),M=d=a.length+q.length;for(;_<W;++_){const z=s[_],de=z?z.firstChild:this.location;let E;l&&d>0?(S<=M&&q.length>0?(E=q[S],S++):(E=a[c],c++),d--):E=r.create(),s.splice(_,0,E),n(E,o,_,i),E.insertBefore(de)}q[S]&&a.push(...q.slice(S))}for(let h=c,g=a.length;h<g;++h)a[h].dispose();if(this.options.positioning)for(let h=0,g=s.length;h<g;++h){const $=s[h].context;$.length=g,$.index=h}}refreshAllViews(e=!1){const i=this.items,s=this.childContext,n=this.template,o=this.location,r=this.bindView;let l=i.length,a=this.views,c=a.length;if((l===0||e||!this.options.recycle)&&(Ua.disposeContiguousBatch(a),c=0),c===0){this.views=a=new Array(l);for(let d=0;d<l;++d){const h=n.create();r(h,i,d,s),a[d]=h,h.insertBefore(o)}}else{let d=0;for(;d<l;++d)if(d<c){const g=a[d];r(g,i,d,s)}else{const g=n.create();r(g,i,d,s),a.push(g),g.insertBefore(o)}const h=a.splice(d,c-d);for(d=0,l=h.length;d<l;++d)h[d].dispose()}}unbindAllViews(){const e=this.views;for(let i=0,s=e.length;i<s;++i)e[i].unbind()}}class sc extends en{constructor(e,i,s){super(),this.itemsBinding=e,this.templateBinding=i,this.options=s,this.createPlaceholder=V.createBlockPlaceholder,Zh(),this.isItemsBindingVolatile=j.isVolatileBinding(e),this.isTemplateBindingVolatile=j.isVolatileBinding(i)}createBehavior(e){return new nf(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function Uo(t){return t?function(e,i,s){return e.nodeType===1&&e.matches(t)}:function(e,i,s){return e.nodeType===1}}class nc{constructor(e,i){this.target=e,this.options=i,this.source=null}bind(e){const i=this.options.property;this.shouldUpdate=j.getAccessors(e).some(s=>s.name===i),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Vt),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class of extends nc{constructor(e,i){super(e,i)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Ne(t){return typeof t=="string"&&(t={property:t}),new Mo("fast-slotted",of,t)}class rf extends nc{constructor(e,i){super(e,i),this.observer=null,i.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function oc(t){return typeof t=="string"&&(t={property:t}),new Mo("fast-children",rf,t)}class hi{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const fi=(t,e)=>Q`
    <span
        part="end"
        ${Oe("endContainer")}
        class=${i=>e.end?"end":void 0}
    >
        <slot name="end" ${Oe("end")} @slotchange="${i=>i.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,pi=(t,e)=>Q`
    <span
        part="start"
        ${Oe("startContainer")}
        class="${i=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${Oe("start")}
            @slotchange="${i=>i.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;Q`
    <span part="end" ${Oe("endContainer")}>
        <slot
            name="end"
            ${Oe("end")}
            @slotchange="${t=>t.handleEndContentChange()}"
        ></slot>
    </span>
`;Q`
    <span part="start" ${Oe("startContainer")}>
        <slot
            name="start"
            ${Oe("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        ></slot>
    </span>
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function p(t,e,i,s){var n=arguments.length,o=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}const Rn=new Map;"metadata"in Reflect||(Reflect.metadata=function(t,e){return function(i){Reflect.defineMetadata(t,e,i)}},Reflect.defineMetadata=function(t,e,i){let s=Rn.get(i);s===void 0&&Rn.set(i,s=new Map),s.set(t,e)},Reflect.getOwnMetadata=function(t,e){const i=Rn.get(e);if(i!==void 0)return i.get(t)});class lf{constructor(e,i){this.container=e,this.key=i}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,lc(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,i){const{container:s,key:n}=this;return this.container=this.key=void 0,s.registerResolver(n,new Ve(n,e,i))}}function Ci(t){const e=t.slice(),i=Object.keys(t),s=i.length;let n;for(let o=0;o<s;++o)n=i[o],ac(n)||(e[n]=t[n]);return e}const af=Object.freeze({none(t){throw Error(`${t.toString()} not registered, did you forget to add @singleton()?`)},singleton(t){return new Ve(t,1,t)},transient(t){return new Ve(t,2,t)}}),Dn=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:af.singleton})}),el=new Map;function tl(t){return e=>Reflect.getOwnMetadata(t,e)}let il=null;const ne=Object.freeze({createContainer(t){return new Li(null,Object.assign({},Dn.default,t))},findResponsibleContainer(t){const e=t.$$container$$;return e&&e.responsibleForOwnerRequests?e:ne.findParentContainer(t)},findParentContainer(t){const e=new CustomEvent(rc,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return t.dispatchEvent(e),e.detail.container||ne.getOrCreateDOMContainer()},getOrCreateDOMContainer(t,e){return t?t.$$container$$||new Li(t,Object.assign({},Dn.default,e,{parentLocator:ne.findParentContainer})):il||(il=new Li(null,Object.assign({},Dn.default,e,{parentLocator:()=>null})))},getDesignParamtypes:tl("design:paramtypes"),getAnnotationParamtypes:tl("di:paramtypes"),getOrCreateAnnotationParamTypes(t){let e=this.getAnnotationParamtypes(t);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],t),e},getDependencies(t){let e=el.get(t);if(e===void 0){const i=t.inject;if(i===void 0){const s=ne.getDesignParamtypes(t),n=ne.getAnnotationParamtypes(t);if(s===void 0)if(n===void 0){const o=Object.getPrototypeOf(t);typeof o=="function"&&o!==Function.prototype?e=Ci(ne.getDependencies(o)):e=[]}else e=Ci(n);else if(n===void 0)e=Ci(s);else{e=Ci(s);let o=n.length,r;for(let c=0;c<o;++c)r=n[c],r!==void 0&&(e[c]=r);const l=Object.keys(n);o=l.length;let a;for(let c=0;c<o;++c)a=l[c],ac(a)||(e[a]=n[a])}}else e=Ci(i);el.set(t,e)}return e},defineProperty(t,e,i,s=!1){const n=`$di_${e}`;Reflect.defineProperty(t,e,{get:function(){let o=this[n];if(o===void 0&&(o=(this instanceof HTMLElement?ne.findResponsibleContainer(this):ne.getOrCreateDOMContainer()).get(i),this[n]=o,s&&this instanceof sn)){const l=this.$fastController,a=()=>{const d=ne.findResponsibleContainer(this).get(i),h=this[n];d!==h&&(this[n]=o,l.notify(e))};l.subscribe({handleChange:a},"isConnected")}return o}})},createInterface(t,e){const i=typeof t=="function"?t:e,s=typeof t=="string"?t:t&&"friendlyName"in t&&t.friendlyName||rl,n=typeof t=="string"?!1:t&&"respectConnection"in t&&t.respectConnection||!1,o=function(r,l,a){if(r==null||new.target!==void 0)throw new Error(`No registration for interface: '${o.friendlyName}'`);if(l)ne.defineProperty(r,l,o,n);else{const c=ne.getOrCreateAnnotationParamTypes(r);c[a]=o}};return o.$isInterface=!0,o.friendlyName=s??"(anonymous)",i!=null&&(o.register=function(r,l){return i(new lf(r,l??o))}),o.toString=function(){return`InterfaceSymbol<${o.friendlyName}>`},o},inject(...t){return function(e,i,s){if(typeof s=="number"){const n=ne.getOrCreateAnnotationParamTypes(e),o=t[0];o!==void 0&&(n[s]=o)}else if(i)ne.defineProperty(e,i,t[0]);else{const n=s?ne.getOrCreateAnnotationParamTypes(s.value):ne.getOrCreateAnnotationParamTypes(e);let o;for(let r=0;r<t.length;++r)o=t[r],o!==void 0&&(n[r]=o)}}},transient(t){return t.register=function(i){return Qi.transient(t,t).register(i)},t.registerInRequestor=!1,t},singleton(t,e=df){return t.register=function(s){return Qi.singleton(t,t).register(s)},t.registerInRequestor=e.scoped,t}}),cf=ne.createInterface("Container");ne.inject;const df={scoped:!1};class Ve{constructor(e,i,s){this.key=e,this.strategy=i,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,i){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(i),this.strategy=0,this.resolving=!1,this.state}case 2:{const s=e.getFactory(this.state);if(s===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(i)}case 3:return this.state(e,i,this);case 4:return this.state[0].resolve(e,i);case 5:return i.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var i,s,n;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(n=(s=(i=e.getResolver(this.state))===null||i===void 0?void 0:i.getFactory)===null||s===void 0?void 0:s.call(i,e))!==null&&n!==void 0?n:null;default:return null}}}function sl(t){return this.get(t)}function uf(t,e){return e(t)}class hf{constructor(e,i){this.Type=e,this.dependencies=i,this.transformers=null}construct(e,i){let s;return i===void 0?s=new this.Type(...this.dependencies.map(sl,e)):s=new this.Type(...this.dependencies.map(sl,e),...i),this.transformers==null?s:this.transformers.reduce(uf,s)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const ff={$isResolver:!0,resolve(t,e){return e}};function Ss(t){return typeof t.register=="function"}function pf(t){return Ss(t)&&typeof t.registerInRequestor=="boolean"}function nl(t){return pf(t)&&t.registerInRequestor}function gf(t){return t.prototype!==void 0}const bf=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),rc="__DI_LOCATE_PARENT__",Pn=new Map;class Li{constructor(e,i){this.owner=e,this.config=i,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(cf,ff),e instanceof Node&&e.addEventListener(rc,s=>{s.composedPath()[0]!==this.owner&&(s.detail.container=this,s.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...i){return this.context=e,this.register(...i),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let i,s,n,o,r;const l=this.context;for(let a=0,c=e.length;a<c;++a)if(i=e[a],!!ll(i))if(Ss(i))i.register(this,l);else if(gf(i))Qi.singleton(i,i).register(this);else for(s=Object.keys(i),o=0,r=s.length;o<r;++o)n=i[s[o]],ll(n)&&(Ss(n)?n.register(this,l):this.register(n));return--this.registerDepth,this}registerResolver(e,i){gs(e);const s=this.resolvers,n=s.get(e);return n==null?s.set(e,i):n instanceof Ve&&n.strategy===4?n.state.push(i):s.set(e,new Ve(e,4,[n,i])),i}registerTransformer(e,i){const s=this.getResolver(e);if(s==null)return!1;if(s.getFactory){const n=s.getFactory(this);return n==null?!1:(n.registerTransformer(i),!0)}return!1}getResolver(e,i=!0){if(gs(e),e.resolve!==void 0)return e;let s=this,n;for(;s!=null;)if(n=s.resolvers.get(e),n==null){if(s.parent==null){const o=nl(e)?this:s;return i?this.jitRegister(e,o):null}s=s.parent}else return n;return null}has(e,i=!1){return this.resolvers.has(e)?!0:i&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(gs(e),e.$isResolver)return e.resolve(this,this);let i=this,s;for(;i!=null;)if(s=i.resolvers.get(e),s==null){if(i.parent==null){const n=nl(e)?this:i;return s=this.jitRegister(e,n),s.resolve(i,this)}i=i.parent}else return s.resolve(i,this);throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,i=!1){gs(e);const s=this;let n=s,o;if(i){let r=Vt;for(;n!=null;)o=n.resolvers.get(e),o!=null&&(r=r.concat(ol(o,n,s))),n=n.parent;return r}else for(;n!=null;)if(o=n.resolvers.get(e),o==null){if(n=n.parent,n==null)return Vt}else return ol(o,n,s);return Vt}getFactory(e){let i=Pn.get(e);if(i===void 0){if(mf(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Pn.set(e,i=new hf(e,ne.getDependencies(e)))}return i}registerFactory(e,i){Pn.set(e,i)}createChild(e){return new Li(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,i){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(bf.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(Ss(e)){const s=e.register(i);if(!(s instanceof Object)||s.resolve==null){const n=i.resolvers.get(e);if(n!=null)return n;throw new Error("A valid resolver was not returned from the static register method")}return s}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const s=this.config.defaultResolver(e,i);return i.resolvers.set(e,s),s}}}}const Fn=new WeakMap;function lc(t){return function(e,i,s){if(Fn.has(s))return Fn.get(s);const n=t(e,i,s);return Fn.set(s,n),n}}const Qi=Object.freeze({instance(t,e){return new Ve(t,0,e)},singleton(t,e){return new Ve(t,1,e)},transient(t,e){return new Ve(t,2,e)},callback(t,e){return new Ve(t,3,e)},cachedCallback(t,e){return new Ve(t,3,lc(e))},aliasTo(t,e){return new Ve(e,5,t)}});function gs(t){if(t==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function ol(t,e,i){if(t instanceof Ve&&t.strategy===4){const s=t.state;let n=s.length;const o=new Array(n);for(;n--;)o[n]=s[n].resolve(e,i);return o}return[t.resolve(e,i)]}const rl="(anonymous)";function ll(t){return typeof t=="object"&&t!==null||typeof t=="function"}const mf=function(){const t=new WeakMap;let e=!1,i="",s=0;return function(n){return e=t.get(n),e===void 0&&(i=n.toString(),s=i.length,e=s>=29&&s<=100&&i.charCodeAt(s-1)===125&&i.charCodeAt(s-2)<=32&&i.charCodeAt(s-3)===93&&i.charCodeAt(s-4)===101&&i.charCodeAt(s-5)===100&&i.charCodeAt(s-6)===111&&i.charCodeAt(s-7)===99&&i.charCodeAt(s-8)===32&&i.charCodeAt(s-9)===101&&i.charCodeAt(s-10)===118&&i.charCodeAt(s-11)===105&&i.charCodeAt(s-12)===116&&i.charCodeAt(s-13)===97&&i.charCodeAt(s-14)===110&&i.charCodeAt(s-15)===88,t.set(n,e)),e}}(),bs={};function ac(t){switch(typeof t){case"number":return t>=0&&(t|0)===t;case"string":{const e=bs[t];if(e!==void 0)return e;const i=t.length;if(i===0)return bs[t]=!1;let s=0;for(let n=0;n<i;++n)if(s=t.charCodeAt(n),n===0&&s===48&&i>1||s<48||s>57)return bs[t]=!1;return bs[t]=!0}default:return!1}}function al(t){return`${t.toLowerCase()}:presentation`}const ms=new Map,cc=Object.freeze({define(t,e,i){const s=al(t);ms.get(s)===void 0?ms.set(s,e):ms.set(s,!1),i.register(Qi.instance(s,e))},forTag(t,e){const i=al(t),s=ms.get(i);return s===!1?ne.findResponsibleContainer(e).get(i):s||null}});class vf{constructor(e,i){this.template=e||null,this.styles=i===void 0?null:Array.isArray(i)?Re.create(i):i instanceof Re?i:Re.create([i])}applyTo(e){const i=e.$fastController;i.template===null&&(i.template=this.template),i.styles===null&&(i.styles=this.styles)}}class te extends sn{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=cc.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(i={})=>new yf(this===te?class extends te{}:this,e,i)}}p([A],te.prototype,"template",void 0);p([A],te.prototype,"styles",void 0);function $i(t,e,i){return typeof t=="function"?t(e,i):t}class yf{constructor(e,i,s){this.type=e,this.elementDefinition=i,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,i){const s=this.definition,n=this.overrideDefinition,r=`${s.prefix||i.elementPrefix}-${s.baseName}`;i.tryDefineElement({name:r,type:this.type,baseClass:this.elementDefinition.baseClass,callback:l=>{const a=new vf($i(s.template,l,s),$i(s.styles,l,s));l.definePresentation(a);let c=$i(s.shadowOptions,l,s);l.shadowRootMode&&(c?n.shadowOptions||(c.mode=l.shadowRootMode):c!==null&&(c={mode:l.shadowRootMode})),l.defineElement({elementOptions:$i(s.elementOptions,l,s),shadowOptions:c,attributes:$i(s.attributes,l,s)})}})}}function Be(t,...e){const i=Hs.locate(t);e.forEach(s=>{Object.getOwnPropertyNames(s.prototype).forEach(o=>{o!=="constructor"&&Object.defineProperty(t.prototype,o,Object.getOwnPropertyDescriptor(s.prototype,o))}),Hs.locate(s).forEach(o=>i.push(o))})}const qo={horizontal:"horizontal",vertical:"vertical"};function xf(t,e){let i=t.length;for(;i--;)if(e(t[i],i,t))return i;return-1}function wf(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Cf(...t){return t.every(e=>e instanceof HTMLElement)}function $f(){const t=document.querySelector('meta[property="csp-nonce"]');return t?t.getAttribute("content"):null}let Dt;function kf(){if(typeof Dt=="boolean")return Dt;if(!wf())return Dt=!1,Dt;const t=document.createElement("style"),e=$f();e!==null&&t.setAttribute("nonce",e),document.head.appendChild(t);try{t.sheet.insertRule("foo:focus-visible {color:inherit}",0),Dt=!0}catch{Dt=!1}finally{document.head.removeChild(t)}return Dt}const cl="focus",dl="focusin",ai="focusout",ci="keydown";var ul;(function(t){t[t.alt=18]="alt",t[t.arrowDown=40]="arrowDown",t[t.arrowLeft=37]="arrowLeft",t[t.arrowRight=39]="arrowRight",t[t.arrowUp=38]="arrowUp",t[t.back=8]="back",t[t.backSlash=220]="backSlash",t[t.break=19]="break",t[t.capsLock=20]="capsLock",t[t.closeBracket=221]="closeBracket",t[t.colon=186]="colon",t[t.colon2=59]="colon2",t[t.comma=188]="comma",t[t.ctrl=17]="ctrl",t[t.delete=46]="delete",t[t.end=35]="end",t[t.enter=13]="enter",t[t.equals=187]="equals",t[t.equals2=61]="equals2",t[t.equals3=107]="equals3",t[t.escape=27]="escape",t[t.forwardSlash=191]="forwardSlash",t[t.function1=112]="function1",t[t.function10=121]="function10",t[t.function11=122]="function11",t[t.function12=123]="function12",t[t.function2=113]="function2",t[t.function3=114]="function3",t[t.function4=115]="function4",t[t.function5=116]="function5",t[t.function6=117]="function6",t[t.function7=118]="function7",t[t.function8=119]="function8",t[t.function9=120]="function9",t[t.home=36]="home",t[t.insert=45]="insert",t[t.menu=93]="menu",t[t.minus=189]="minus",t[t.minus2=109]="minus2",t[t.numLock=144]="numLock",t[t.numPad0=96]="numPad0",t[t.numPad1=97]="numPad1",t[t.numPad2=98]="numPad2",t[t.numPad3=99]="numPad3",t[t.numPad4=100]="numPad4",t[t.numPad5=101]="numPad5",t[t.numPad6=102]="numPad6",t[t.numPad7=103]="numPad7",t[t.numPad8=104]="numPad8",t[t.numPad9=105]="numPad9",t[t.numPadDivide=111]="numPadDivide",t[t.numPadDot=110]="numPadDot",t[t.numPadMinus=109]="numPadMinus",t[t.numPadMultiply=106]="numPadMultiply",t[t.numPadPlus=107]="numPadPlus",t[t.openBracket=219]="openBracket",t[t.pageDown=34]="pageDown",t[t.pageUp=33]="pageUp",t[t.period=190]="period",t[t.print=44]="print",t[t.quote=222]="quote",t[t.scrollLock=145]="scrollLock",t[t.shift=16]="shift",t[t.space=32]="space",t[t.tab=9]="tab",t[t.tilde=192]="tilde",t[t.windowsLeft=91]="windowsLeft",t[t.windowsOpera=219]="windowsOpera",t[t.windowsRight=92]="windowsRight"})(ul||(ul={}));const zt="ArrowDown",Ji="ArrowLeft",Yi="ArrowRight",Ut="ArrowUp",es="Enter",nn="Escape",gi="Home",bi="End",If="F2",Tf="PageDown",Sf="PageUp",ts=" ",Go="Tab",Of={ArrowDown:zt,ArrowLeft:Ji,ArrowRight:Yi,ArrowUp:Ut};var di;(function(t){t.ltr="ltr",t.rtl="rtl"})(di||(di={}));function Af(t,e,i){return Math.min(Math.max(i,t),e)}function vs(t,e,i=0){return[e,i]=[e,i].sort((s,n)=>s-n),e<=t&&t<i}let _f=0;function Ns(t=""){return`${t}${_f++}`}const Ef=(t,e)=>Q`
    <a
        class="control"
        part="control"
        download="${i=>i.download}"
        href="${i=>i.href}"
        hreflang="${i=>i.hreflang}"
        ping="${i=>i.ping}"
        referrerpolicy="${i=>i.referrerpolicy}"
        rel="${i=>i.rel}"
        target="${i=>i.target}"
        type="${i=>i.type}"
        aria-atomic="${i=>i.ariaAtomic}"
        aria-busy="${i=>i.ariaBusy}"
        aria-controls="${i=>i.ariaControls}"
        aria-current="${i=>i.ariaCurrent}"
        aria-describedby="${i=>i.ariaDescribedby}"
        aria-details="${i=>i.ariaDetails}"
        aria-disabled="${i=>i.ariaDisabled}"
        aria-errormessage="${i=>i.ariaErrormessage}"
        aria-expanded="${i=>i.ariaExpanded}"
        aria-flowto="${i=>i.ariaFlowto}"
        aria-haspopup="${i=>i.ariaHaspopup}"
        aria-hidden="${i=>i.ariaHidden}"
        aria-invalid="${i=>i.ariaInvalid}"
        aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
        aria-label="${i=>i.ariaLabel}"
        aria-labelledby="${i=>i.ariaLabelledby}"
        aria-live="${i=>i.ariaLive}"
        aria-owns="${i=>i.ariaOwns}"
        aria-relevant="${i=>i.ariaRelevant}"
        aria-roledescription="${i=>i.ariaRoledescription}"
        ${Oe("control")}
    >
        ${pi(t,e)}
        <span class="content" part="content">
            <slot ${Ne("defaultSlottedContent")}></slot>
        </span>
        ${fi(t,e)}
    </a>
`;class ie{}p([m({attribute:"aria-atomic"})],ie.prototype,"ariaAtomic",void 0);p([m({attribute:"aria-busy"})],ie.prototype,"ariaBusy",void 0);p([m({attribute:"aria-controls"})],ie.prototype,"ariaControls",void 0);p([m({attribute:"aria-current"})],ie.prototype,"ariaCurrent",void 0);p([m({attribute:"aria-describedby"})],ie.prototype,"ariaDescribedby",void 0);p([m({attribute:"aria-details"})],ie.prototype,"ariaDetails",void 0);p([m({attribute:"aria-disabled"})],ie.prototype,"ariaDisabled",void 0);p([m({attribute:"aria-errormessage"})],ie.prototype,"ariaErrormessage",void 0);p([m({attribute:"aria-flowto"})],ie.prototype,"ariaFlowto",void 0);p([m({attribute:"aria-haspopup"})],ie.prototype,"ariaHaspopup",void 0);p([m({attribute:"aria-hidden"})],ie.prototype,"ariaHidden",void 0);p([m({attribute:"aria-invalid"})],ie.prototype,"ariaInvalid",void 0);p([m({attribute:"aria-keyshortcuts"})],ie.prototype,"ariaKeyshortcuts",void 0);p([m({attribute:"aria-label"})],ie.prototype,"ariaLabel",void 0);p([m({attribute:"aria-labelledby"})],ie.prototype,"ariaLabelledby",void 0);p([m({attribute:"aria-live"})],ie.prototype,"ariaLive",void 0);p([m({attribute:"aria-owns"})],ie.prototype,"ariaOwns",void 0);p([m({attribute:"aria-relevant"})],ie.prototype,"ariaRelevant",void 0);p([m({attribute:"aria-roledescription"})],ie.prototype,"ariaRoledescription",void 0);class Je extends te{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{var i;(i=this.control)===null||i===void 0||i.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}p([m],Je.prototype,"download",void 0);p([m],Je.prototype,"href",void 0);p([m],Je.prototype,"hreflang",void 0);p([m],Je.prototype,"ping",void 0);p([m],Je.prototype,"referrerpolicy",void 0);p([m],Je.prototype,"rel",void 0);p([m],Je.prototype,"target",void 0);p([m],Je.prototype,"type",void 0);p([A],Je.prototype,"defaultSlottedContent",void 0);class Wo{}p([m({attribute:"aria-expanded"})],Wo.prototype,"ariaExpanded",void 0);Be(Wo,ie);Be(Je,hi,Wo);const Rf=t=>{const e=t.closest("[dir]");return e!==null&&e.dir==="rtl"?di.rtl:di.ltr},dc=(t,e)=>Q`
    <template class="${i=>i.circular?"circular":""}">
        <div class="control" part="control" style="${i=>i.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;let is=class extends te{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,i=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?i:`${i} ${e}`}}};p([m({attribute:"fill"})],is.prototype,"fill",void 0);p([m({attribute:"color"})],is.prototype,"color",void 0);p([m({mode:"boolean"})],is.prototype,"circular",void 0);const Df=(t,e)=>Q`
    <button
        class="control"
        part="control"
        ?autofocus="${i=>i.autofocus}"
        ?disabled="${i=>i.disabled}"
        form="${i=>i.formId}"
        formaction="${i=>i.formaction}"
        formenctype="${i=>i.formenctype}"
        formmethod="${i=>i.formmethod}"
        formnovalidate="${i=>i.formnovalidate}"
        formtarget="${i=>i.formtarget}"
        name="${i=>i.name}"
        type="${i=>i.type}"
        value="${i=>i.value}"
        aria-atomic="${i=>i.ariaAtomic}"
        aria-busy="${i=>i.ariaBusy}"
        aria-controls="${i=>i.ariaControls}"
        aria-current="${i=>i.ariaCurrent}"
        aria-describedby="${i=>i.ariaDescribedby}"
        aria-details="${i=>i.ariaDetails}"
        aria-disabled="${i=>i.ariaDisabled}"
        aria-errormessage="${i=>i.ariaErrormessage}"
        aria-expanded="${i=>i.ariaExpanded}"
        aria-flowto="${i=>i.ariaFlowto}"
        aria-haspopup="${i=>i.ariaHaspopup}"
        aria-hidden="${i=>i.ariaHidden}"
        aria-invalid="${i=>i.ariaInvalid}"
        aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
        aria-label="${i=>i.ariaLabel}"
        aria-labelledby="${i=>i.ariaLabelledby}"
        aria-live="${i=>i.ariaLive}"
        aria-owns="${i=>i.ariaOwns}"
        aria-pressed="${i=>i.ariaPressed}"
        aria-relevant="${i=>i.ariaRelevant}"
        aria-roledescription="${i=>i.ariaRoledescription}"
        ${Oe("control")}
    >
        ${pi(t,e)}
        <span class="content" part="content">
            <slot ${Ne("defaultSlottedContent")}></slot>
        </span>
        ${fi(t,e)}
    </button>
`,hl="form-associated-proxy",fl="ElementInternals",pl=fl in window&&"setFormValue"in window[fl].prototype,gl=new WeakMap;function ss(t){const e=class extends t{constructor(...i){super(...i),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return pl}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const i=this.proxy.labels,s=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=i?s.concat(Array.from(i)):s;return Object.freeze(n)}else return Vt}valueChanged(i,s){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(i,s){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(i,s){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),V.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(i,s){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(i,s){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),V.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!pl)return null;let i=gl.get(this);return i||(i=this.attachInternals(),gl.set(this,i)),i}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(i=>this.proxy.removeEventListener(i,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(i,s,n){this.elementInternals?this.elementInternals.setValidity(i,s,n):typeof s=="string"&&this.proxy.setCustomValidity(s)}formDisabledCallback(i){this.disabled=i}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var i;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(s=>this.proxy.addEventListener(s,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",hl),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",hl)),(i=this.shadowRoot)===null||i===void 0||i.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var i;this.removeChild(this.proxy),(i=this.shadowRoot)===null||i===void 0||i.removeChild(this.proxySlot)}validate(i){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,i)}setFormValue(i,s){this.elementInternals&&this.elementInternals.setFormValue(i,s||i)}_keypressHandler(i){switch(i.key){case es:if(this.form instanceof HTMLFormElement){const s=this.form.querySelector("[type=submit]");s==null||s.click()}break}}stopPropagation(i){i.stopPropagation()}};return m({mode:"boolean"})(e.prototype,"disabled"),m({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),m({attribute:"current-value"})(e.prototype,"currentValue"),m(e.prototype,"name"),m({mode:"boolean"})(e.prototype,"required"),A(e.prototype,"value"),e}function uc(t){class e extends ss(t){}class i extends e{constructor(...n){super(n),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(n,o){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),n!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(n,o){this.checked=this.currentChecked}updateForm(){const n=this.checked?this.value:null;this.setFormValue(n,n)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return m({attribute:"checked",mode:"boolean"})(i.prototype,"checkedAttribute"),m({attribute:"current-checked",converter:Ya})(i.prototype,"currentChecked"),A(i.prototype,"defaultChecked"),A(i.prototype,"checked"),i}class Pf extends te{}class Ff extends ss(Pf){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let Ye=class extends Ff{constructor(){super(...arguments),this.handleClick=e=>{var i;this.disabled&&((i=this.defaultSlottedContent)===null||i===void 0?void 0:i.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(!((e=this.$fastController.definition.shadowOptions)===null||e===void 0)&&e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,i){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),i==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),i==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const i=Array.from((e=this.control)===null||e===void 0?void 0:e.children);i&&i.forEach(s=>{s.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const i=Array.from((e=this.control)===null||e===void 0?void 0:e.children);i&&i.forEach(s=>{s.removeEventListener("click",this.handleClick)})}};p([m({mode:"boolean"})],Ye.prototype,"autofocus",void 0);p([m({attribute:"form"})],Ye.prototype,"formId",void 0);p([m],Ye.prototype,"formaction",void 0);p([m],Ye.prototype,"formenctype",void 0);p([m],Ye.prototype,"formmethod",void 0);p([m({mode:"boolean"})],Ye.prototype,"formnovalidate",void 0);p([m],Ye.prototype,"formtarget",void 0);p([m],Ye.prototype,"type",void 0);p([A],Ye.prototype,"defaultSlottedContent",void 0);class on{}p([m({attribute:"aria-expanded"})],on.prototype,"ariaExpanded",void 0);p([m({attribute:"aria-pressed"})],on.prototype,"ariaPressed",void 0);Be(on,ie);Be(Ye,hi,on);const ys={none:"none",default:"default",sticky:"sticky"},ft={default:"default",columnHeader:"columnheader",rowHeader:"rowheader"},Mi={default:"default",header:"header",stickyHeader:"sticky-header"};let ve=class extends te{constructor(){super(...arguments),this.rowType=Mi.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new sc(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(ai,this.handleFocusout),this.addEventListener(ci,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(ai,this.handleFocusout),this.removeEventListener(ci,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let i=0;switch(e.key){case Ji:i=Math.max(0,this.focusColumnIndex-1),this.cellElements[i].focus(),e.preventDefault();break;case Yi:i=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[i].focus(),e.preventDefault();break;case gi:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case bi:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===Mi.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===Mi.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}};p([m({attribute:"grid-template-columns"})],ve.prototype,"gridTemplateColumns",void 0);p([m({attribute:"row-type"})],ve.prototype,"rowType",void 0);p([A],ve.prototype,"rowData",void 0);p([A],ve.prototype,"columnDefinitions",void 0);p([A],ve.prototype,"cellItemTemplate",void 0);p([A],ve.prototype,"headerCellItemTemplate",void 0);p([A],ve.prototype,"rowIndex",void 0);p([A],ve.prototype,"isActiveRow",void 0);p([A],ve.prototype,"activeCellItemTemplate",void 0);p([A],ve.prototype,"defaultCellItemTemplate",void 0);p([A],ve.prototype,"defaultHeaderCellItemTemplate",void 0);p([A],ve.prototype,"cellElements",void 0);function Bf(t){const e=t.tagFor(ve);return Q`
    <${e}
        :rowData="${i=>i}"
        :cellItemTemplate="${(i,s)=>s.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(i,s)=>s.parent.headerCellItemTemplate}"
    ></${e}>
`}const Lf=(t,e)=>{const i=Bf(t),s=t.tagFor(ve);return Q`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>s}"
            :defaultRowItemTemplate="${i}"
            ${oc({property:"rowElements",filter:Uo("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};let ye=class no extends te{constructor(){super(),this.noTabbing=!1,this.generateHeader=ys.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,i,s)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const n=Math.max(0,Math.min(this.rowElements.length-1,e)),r=this.rowElements[n].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),l=Math.max(0,Math.min(r.length-1,i)),a=r[l];s&&this.scrollHeight!==this.clientHeight&&(n<this.focusRowIndex&&this.scrollTop>0||n>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&a.scrollIntoView({block:"center",inline:"center"}),a.focus()},this.onChildListChange=(e,i)=>{e&&e.length&&(e.forEach(s=>{s.addedNodes.forEach(n=>{n.nodeType===1&&n.getAttribute("role")==="row"&&(n.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,V.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(e===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const i=this.rowElements[0];this.generatedGridTemplateColumns=new Array(i.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((i,s)=>{const n=i;n.rowIndex=s,n.gridTemplateColumns=e,this.columnDefinitionsStale&&(n.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let i="";return e.forEach(s=>{i=`${i}${i===""?"":" "}1fr`}),i}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=no.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=no.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new sc(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(cl,this.handleFocus),this.addEventListener(ci,this.handleKeydown),this.addEventListener(ai,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),V.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(cl,this.handleFocus),this.removeEventListener(ci,this.handleKeydown),this.removeEventListener(ai,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const i=e.target;this.focusRowIndex=this.rowElements.indexOf(i),this.focusColumnIndex=i.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let i;const s=this.rowElements.length-1,n=this.offsetHeight+this.scrollTop,o=this.rowElements[s];switch(e.key){case Ut:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case zt:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case Sf:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(i=this.focusRowIndex-1,i;i>=0;i--){const r=this.rowElements[i];if(r.offsetTop<this.scrollTop){this.scrollTop=r.offsetTop+r.clientHeight-this.clientHeight;break}}this.focusOnCell(i,this.focusColumnIndex,!1);break;case Tf:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=s||o.offsetTop+o.offsetHeight<=n){this.focusOnCell(s,this.focusColumnIndex,!1);return}for(i=this.focusRowIndex+1,i;i<=s;i++){const r=this.rowElements[i];if(r.offsetTop+r.offsetHeight>n){let l=0;this.generateHeader===ys.sticky&&this.generatedHeader!==null&&(l=this.generatedHeader.clientHeight),this.scrollTop=r.offsetTop-l;break}}this.focusOnCell(i,this.focusColumnIndex,!1);break;case gi:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case bi:e.ctrlKey&&this.columnDefinitions!==null&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,V.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==ys.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===ys.sticky?Mi.stickyHeader:Mi.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(e,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}};ye.generateColumns=t=>Object.getOwnPropertyNames(t).map((e,i)=>({columnDataKey:e,gridColumn:`${i}`}));p([m({attribute:"no-tabbing",mode:"boolean"})],ye.prototype,"noTabbing",void 0);p([m({attribute:"generate-header"})],ye.prototype,"generateHeader",void 0);p([m({attribute:"grid-template-columns"})],ye.prototype,"gridTemplateColumns",void 0);p([A],ye.prototype,"rowsData",void 0);p([A],ye.prototype,"columnDefinitions",void 0);p([A],ye.prototype,"rowItemTemplate",void 0);p([A],ye.prototype,"cellItemTemplate",void 0);p([A],ye.prototype,"headerCellItemTemplate",void 0);p([A],ye.prototype,"focusRowIndex",void 0);p([A],ye.prototype,"focusColumnIndex",void 0);p([A],ye.prototype,"defaultRowItemTemplate",void 0);p([A],ye.prototype,"rowElementTag",void 0);p([A],ye.prototype,"rowElements",void 0);const Mf=Q`
    <template>
        ${t=>t.rowData===null||t.columnDefinition===null||t.columnDefinition.columnDataKey===null?null:t.rowData[t.columnDefinition.columnDataKey]}
    </template>
`,Hf=Q`
    <template>
        ${t=>t.columnDefinition===null?null:t.columnDefinition.title===void 0?t.columnDefinition.columnDataKey:t.columnDefinition.title}
    </template>
`;let Tt=class extends te{constructor(){super(...arguments),this.cellType=ft.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,i){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(dl,this.handleFocusin),this.addEventListener(ai,this.handleFocusout),this.addEventListener(ci,this.handleKeydown),this.style.gridColumn=`${((e=this.columnDefinition)===null||e===void 0?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(dl,this.handleFocusin),this.removeEventListener(ai,this.handleFocusout),this.removeEventListener(ci,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case ft.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const i=this.columnDefinition.headerCellFocusTargetCallback(this);i!==null&&i.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const i=this.columnDefinition.cellFocusTargetCallback(this);i!==null&&i.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(e){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||this.columnDefinition===null||this.cellType===ft.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===ft.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(e.key){case es:case If:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case ft.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const i=this.columnDefinition.headerCellFocusTargetCallback(this);i!==null&&i.focus(),e.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const i=this.columnDefinition.cellFocusTargetCallback(this);i!==null&&i.focus(),e.preventDefault()}break}break;case nn:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case ft.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=Hf.render(this,this);break;case void 0:case ft.rowHeader:case ft.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=Mf.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}};p([m({attribute:"cell-type"})],Tt.prototype,"cellType",void 0);p([m({attribute:"grid-column"})],Tt.prototype,"gridColumn",void 0);p([A],Tt.prototype,"rowData",void 0);p([A],Tt.prototype,"columnDefinition",void 0);function Vf(t){const e=t.tagFor(Tt);return Q`
    <${e}
        cell-type="${i=>i.isRowHeader?"rowheader":void 0}"
        grid-column="${(i,s)=>s.index+1}"
        :rowData="${(i,s)=>s.parent.rowData}"
        :columnDefinition="${i=>i}"
    ></${e}>
`}function Nf(t){const e=t.tagFor(Tt);return Q`
    <${e}
        cell-type="columnheader"
        grid-column="${(i,s)=>s.index+1}"
        :columnDefinition="${i=>i}"
    ></${e}>
`}const jf=(t,e)=>{const i=Vf(t),s=Nf(t);return Q`
        <template
            role="row"
            class="${n=>n.rowType!=="default"?n.rowType:""}"
            :defaultCellItemTemplate="${i}"
            :defaultHeaderCellItemTemplate="${s}"
            ${oc({property:"cellElements",filter:Uo('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${Ne("slottedCellElements")}></slot>
        </template>
    `},zf=(t,e)=>Q`
        <template
            tabindex="-1"
            role="${i=>!i.cellType||i.cellType==="default"?"gridcell":i.cellType}"
            class="
            ${i=>i.cellType==="columnheader"?"column-header":i.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,Uf=(t,e)=>Q`
    <template
        role="checkbox"
        aria-checked="${i=>i.checked}"
        aria-required="${i=>i.required}"
        aria-disabled="${i=>i.disabled}"
        aria-readonly="${i=>i.readOnly}"
        tabindex="${i=>i.disabled?null:0}"
        @keypress="${(i,s)=>i.keypressHandler(s.event)}"
        @click="${(i,s)=>i.clickHandler(s.event)}"
        class="${i=>i.readOnly?"readonly":""} ${i=>i.checked?"checked":""} ${i=>i.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ne("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class qf extends te{}class Gf extends uc(qf){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let rn=class extends Gf{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{if(!this.readOnly)switch(e.key){case ts:this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.indeterminate&&(this.indeterminate=!1),this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}};p([m({attribute:"readonly",mode:"boolean"})],rn.prototype,"readOnly",void 0);p([A],rn.prototype,"defaultSlottedNodes",void 0);p([A],rn.prototype,"indeterminate",void 0);function hc(t){return Cf(t)&&(t.getAttribute("role")==="option"||t instanceof HTMLOptionElement)}class ct extends te{constructor(e,i,s,n){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),i&&(this.initialValue=i),s&&(this.defaultSelected=s),n&&(this.selected=n),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,i){if(typeof i=="boolean"){this.ariaChecked=i?"true":"false";return}this.ariaChecked=null}contentChanged(e,i){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,i){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,i){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,i;return(i=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&i!==void 0?i:""}set value(e){const i=`${e??""}`;this._value=i,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=i),j.notify(this,"value")}get value(){var e;return j.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}}p([A],ct.prototype,"checked",void 0);p([A],ct.prototype,"content",void 0);p([A],ct.prototype,"defaultSelected",void 0);p([m({mode:"boolean"})],ct.prototype,"disabled",void 0);p([m({attribute:"selected",mode:"boolean"})],ct.prototype,"selectedAttribute",void 0);p([A],ct.prototype,"selected",void 0);p([m({attribute:"value",mode:"fromView"})],ct.prototype,"initialValue",void 0);class mi{}p([A],mi.prototype,"ariaChecked",void 0);p([A],mi.prototype,"ariaPosInSet",void 0);p([A],mi.prototype,"ariaSelected",void 0);p([A],mi.prototype,"ariaSetSize",void 0);Be(mi,ie);Be(ct,hi,mi);class Se extends te{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,i;return(i=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&i!==void 0?i:0}get options(){return j.track(this,"options"),this._options}set options(e){this._options=e,j.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const i=e.target.closest("option,[role=option]");if(i&&!i.disabled)return this.selectedIndex=this.options.indexOf(i),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),i=new RegExp(`^${e}`,"gi");return this.options.filter(s=>s.text.trim().match(i))}getSelectableIndex(e=this.selectedIndex,i){const s=e>i?-1:e<i?1:0,n=e+s;let o=null;switch(s){case-1:{o=this.options.reduceRight((r,l,a)=>!r&&!l.disabled&&a<n?l:r,o);break}case 1:{o=this.options.reduce((r,l,a)=>!r&&!l.disabled&&a>n?l:r,o);break}}return this.options.indexOf(o)}handleChange(e,i){switch(i){case"selected":{Se.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Se.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const i=e.key;switch(i){case gi:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case zt:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case Ut:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case bi:{e.preventDefault(),this.selectLastOption();break}case Go:return this.focusAndScrollOptionIntoView(),!0;case es:case nn:return!0;case ts:if(this.typeaheadExpired)return!0;default:return i.length===1&&this.handleTypeAhead(`${i}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,i){this.ariaMultiSelectable=i?"true":null}selectedIndexChanged(e,i){var s;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((s=this.options[this.selectedIndex])===null||s===void 0)&&s.disabled&&typeof e=="number"){const n=this.getSelectableIndex(e,i),o=n>-1?n:e;this.selectedIndex=o,i===o&&this.selectedIndexChanged(i,o);return}this.setSelectedOptions()}selectedOptionsChanged(e,i){var s;const n=i.filter(Se.slottedOptionFilter);(s=this.options)===null||s===void 0||s.forEach(o=>{const r=j.getNotifier(o);r.unsubscribe(this,"selected"),o.selected=n.includes(o),r.subscribe(this,"selected")})}selectFirstOption(){var e,i;this.disabled||(this.selectedIndex=(i=(e=this.options)===null||e===void 0?void 0:e.findIndex(s=>!s.disabled))!==null&&i!==void 0?i:-1)}selectLastOption(){this.disabled||(this.selectedIndex=xf(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,i;this.selectedIndex=(i=(e=this.options)===null||e===void 0?void 0:e.findIndex(s=>s.defaultSelected))!==null&&i!==void 0?i:-1}setSelectedOptions(){var e,i,s;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(s=(i=this.firstSelectedOption)===null||i===void 0?void 0:i.id)!==null&&s!==void 0?s:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,i){this.options=i.reduce((n,o)=>(hc(o)&&n.push(o),n),[]);const s=`${this.options.length}`;this.options.forEach((n,o)=>{n.id||(n.id=Ns("option-")),n.ariaPosInSet=`${o+1}`,n.ariaSetSize=s}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,i){if(this.$fastController.isConnected){const s=this.getTypeaheadMatches();if(s.length){const n=this.options.indexOf(s[0]);n>-1&&(this.selectedIndex=n)}this.typeaheadExpired=!1}}}Se.slottedOptionFilter=t=>hc(t)&&!t.hidden;Se.TYPE_AHEAD_TIMEOUT_MS=1e3;p([m({mode:"boolean"})],Se.prototype,"disabled",void 0);p([A],Se.prototype,"selectedIndex",void 0);p([A],Se.prototype,"selectedOptions",void 0);p([A],Se.prototype,"slottedOptions",void 0);p([A],Se.prototype,"typeaheadBuffer",void 0);class qt{}p([A],qt.prototype,"ariaActiveDescendant",void 0);p([A],qt.prototype,"ariaDisabled",void 0);p([A],qt.prototype,"ariaExpanded",void 0);p([A],qt.prototype,"ariaMultiSelectable",void 0);Be(qt,ie);Be(Se,qt);const Bn={above:"above",below:"below"};function oo(t){const e=t.parentElement;if(e)return e;{const i=t.getRootNode();if(i.host instanceof HTMLElement)return i.host}return null}function Wf(t,e){let i=e;for(;i!==null;){if(i===t)return!0;i=oo(i)}return!1}const rt=document.createElement("div");function Qf(t){return t instanceof sn}class Qo{setProperty(e,i){V.queueUpdate(()=>this.target.setProperty(e,i))}removeProperty(e){V.queueUpdate(()=>this.target.removeProperty(e))}}class Jf extends Qo{constructor(e){super();const i=new CSSStyleSheet;i[Ga]=!0,this.target=i.cssRules[i.insertRule(":host{}")].style,e.$fastController.addStyles(Re.create([i]))}}class Yf extends Qo{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class Xf extends Qo{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const i=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[i].style}}}class fc{constructor(e){this.store=new Map,this.target=null;const i=e.$fastController;this.style=document.createElement("style"),i.addStyles(this.style),j.getNotifier(i).subscribe(this,"isConnected"),this.handleChange(i,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,i]of this.store.entries())this.target.setProperty(e,i)}setProperty(e,i){this.store.set(e,i),V.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,i)})}removeProperty(e){this.store.delete(e),V.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,i){const{sheet:s}=this.style;if(s){const n=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[n].style}else this.target=null}}p([A],fc.prototype,"target",void 0);class Zf{constructor(e){this.target=e.style}setProperty(e,i){V.queueUpdate(()=>this.target.setProperty(e,i))}removeProperty(e){V.queueUpdate(()=>this.target.removeProperty(e))}}class he{setProperty(e,i){he.properties[e]=i;for(const s of he.roots.values())Xt.getOrCreate(he.normalizeRoot(s)).setProperty(e,i)}removeProperty(e){delete he.properties[e];for(const i of he.roots.values())Xt.getOrCreate(he.normalizeRoot(i)).removeProperty(e)}static registerRoot(e){const{roots:i}=he;if(!i.has(e)){i.add(e);const s=Xt.getOrCreate(this.normalizeRoot(e));for(const n in he.properties)s.setProperty(n,he.properties[n])}}static unregisterRoot(e){const{roots:i}=he;if(i.has(e)){i.delete(e);const s=Xt.getOrCreate(he.normalizeRoot(e));for(const n in he.properties)s.removeProperty(n)}}static normalizeRoot(e){return e===rt?document:e}}he.roots=new Set;he.properties={};const Ln=new WeakMap,Kf=V.supportsAdoptedStyleSheets?Jf:fc,Xt=Object.freeze({getOrCreate(t){if(Ln.has(t))return Ln.get(t);let e;return t===rt?e=new he:t instanceof Document?e=V.supportsAdoptedStyleSheets?new Yf:new Xf:Qf(t)?e=new Kf(t):e=new Zf(t),Ln.set(t,e),e}});class ke extends Za{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=ke.uniqueId(),ke.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new ke({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return ke.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const i=le.getOrCreate(e).get(this);if(i!==void 0)return i;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,i){return this._appliedTo.add(e),i instanceof ke&&(i=this.alias(i)),le.getOrCreate(e).set(this,i),this}deleteValueFor(e){return this._appliedTo.delete(e),le.existsFor(e)&&le.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(rt,e),this}subscribe(e,i){const s=this.getOrCreateSubscriberSet(i);i&&!le.existsFor(i)&&le.getOrCreate(i),s.has(e)||s.add(e)}unsubscribe(e,i){const s=this.subscribers.get(i||this);s&&s.has(e)&&s.delete(e)}notify(e){const i=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(s=>s.handleChange(i)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(s=>s.handleChange(i))}alias(e){return i=>e.getValueFor(i)}}ke.uniqueId=(()=>{let t=0;return()=>(t++,t.toString(16))})();ke.tokensById=new Map;class ep{startReflection(e,i){e.subscribe(this,i),this.handleChange({token:e,target:i})}stopReflection(e,i){e.unsubscribe(this,i),this.remove(e,i)}handleChange(e){const{token:i,target:s}=e;this.add(i,s)}add(e,i){Xt.getOrCreate(i).setProperty(e.cssCustomProperty,this.resolveCSSValue(le.getOrCreate(i).get(e)))}remove(e,i){Xt.getOrCreate(i).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class tp{constructor(e,i,s){this.source=e,this.token=i,this.node=s,this.dependencies=new Set,this.observer=j.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,Bi))}}class ip{constructor(){this.values=new Map}set(e,i){this.values.get(e)!==i&&(this.values.set(e,i),j.getNotifier(this).notify(e.id))}get(e){return j.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const ki=new WeakMap,Ii=new WeakMap;class le{constructor(e){this.target=e,this.store=new ip,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(i,s)=>{const n=ke.getTokenById(s);n&&(n.notify(this.target),this.updateCSSTokenReflection(i,n))}},ki.set(e,this),j.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof sn?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return ki.get(e)||new le(e)}static existsFor(e){return ki.has(e)}static findParent(e){if(rt!==e.target){let i=oo(e.target);for(;i!==null;){if(ki.has(i))return ki.get(i);i=oo(i)}return le.getOrCreate(rt)}return null}static findClosestAssignedNode(e,i){let s=i;do{if(s.has(e))return s;s=s.parent?s.parent:s.target!==rt?le.getOrCreate(rt):null}while(s!==null);return null}get parent(){return Ii.get(this)||null}updateCSSTokenReflection(e,i){if(ke.isCSSDesignToken(i)){const s=this.parent,n=this.isReflecting(i);if(s){const o=s.get(i),r=e.get(i);o!==r&&!n?this.reflectToCSS(i):o===r&&n&&this.stopReflectToCSS(i)}else n||this.reflectToCSS(i)}}has(e){return this.assignedValues.has(e)}get(e){const i=this.store.get(e);if(i!==void 0)return i;const s=this.getRaw(e);if(s!==void 0)return this.hydrate(e,s),this.get(e)}getRaw(e){var i;return this.assignedValues.has(e)?this.assignedValues.get(e):(i=le.findClosestAssignedNode(e,this))===null||i===void 0?void 0:i.getRaw(e)}set(e,i){ke.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,i),ke.isDerivedDesignTokenValue(i)?this.setupBindingObserver(e,i):this.store.set(e,i)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const i=this.getRaw(e);i?this.hydrate(e,i):this.store.delete(e)}bind(){const e=le.findParent(this);e&&e.appendChild(this);for(const i of this.assignedValues.keys())i.notify(this.target)}unbind(){this.parent&&Ii.get(this).removeChild(this)}appendChild(e){e.parent&&Ii.get(e).removeChild(e);const i=this.children.filter(s=>e.contains(s));Ii.set(e,this),this.children.push(e),i.forEach(s=>e.appendChild(s)),j.getNotifier(this.store).subscribe(e);for(const[s,n]of this.store.all())e.hydrate(s,this.bindingObservers.has(s)?this.getRaw(s):n)}removeChild(e){const i=this.children.indexOf(e);return i!==-1&&this.children.splice(i,1),j.getNotifier(this.store).unsubscribe(e),e.parent===this?Ii.delete(e):!1}contains(e){return Wf(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),le.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),le.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,i){const s=ke.getTokenById(i);s&&(this.hydrate(s,this.getRaw(s)),this.updateCSSTokenReflection(this.store,s))}hydrate(e,i){if(!this.has(e)){const s=this.bindingObservers.get(e);ke.isDerivedDesignTokenValue(i)?s?s.source!==i&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,i)):this.setupBindingObserver(e,i):(s&&this.tearDownBindingObserver(e),this.store.set(e,i))}}setupBindingObserver(e,i){const s=new tp(i,e,this);return this.bindingObservers.set(e,s),s}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}le.cssCustomPropertyReflector=new ep;p([A],le.prototype,"children",void 0);function sp(t){return ke.from(t)}const pc=Object.freeze({create:sp,notifyConnection(t){return!t.isConnected||!le.existsFor(t)?!1:(le.getOrCreate(t).bind(),!0)},notifyDisconnection(t){return t.isConnected||!le.existsFor(t)?!1:(le.getOrCreate(t).unbind(),!0)},registerRoot(t=rt){he.registerRoot(t)},unregisterRoot(t=rt){he.unregisterRoot(t)}}),Mn=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),Hn=new Map,Os=new Map;let ii=null;const Ti=ne.createInterface(t=>t.cachedCallback(e=>(ii===null&&(ii=new bc(null,e)),ii))),gc=Object.freeze({tagFor(t){return Os.get(t)},responsibleFor(t){const e=t.$$designSystem$$;return e||ne.findResponsibleContainer(t).get(Ti)},getOrCreate(t){if(!t)return ii===null&&(ii=ne.getOrCreateDOMContainer().get(Ti)),ii;const e=t.$$designSystem$$;if(e)return e;const i=ne.getOrCreateDOMContainer(t);if(i.has(Ti,!1))return i.get(Ti);{const s=new bc(t,i);return i.register(Qi.instance(Ti,s)),s}}});function np(t,e,i){return typeof t=="string"?{name:t,type:e,callback:i}:t}class bc{constructor(e,i){this.owner=e,this.container=i,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>Mn.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const i=this.container,s=[],n=this.disambiguate,o=this.shadowRootMode,r={elementPrefix:this.prefix,tryDefineElement(l,a,c){const d=np(l,a,c),{name:h,callback:g,baseClass:$}=d;let{type:R}=d,S=h,_=Hn.get(S),W=!0;for(;_;){const q=n(S,R,_);switch(q){case Mn.ignoreDuplicate:return;case Mn.definitionCallbackOnly:W=!1,_=void 0;break;default:S=q,_=Hn.get(S);break}}W&&((Os.has(R)||R===te)&&(R=class extends R{}),Hn.set(S,R),Os.set(R,S),$&&Os.set($,S)),s.push(new op(i,S,R,o,g,W))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&pc.registerRoot(this.designTokenRoot)),i.registerWithContext(r,...e);for(const l of s)l.callback(l),l.willDefine&&l.definition!==null&&l.definition.define();return this}}class op{constructor(e,i,s,n,o,r){this.container=e,this.name=i,this.type=s,this.shadowRootMode=n,this.callback=o,this.willDefine=r,this.definition=null}definePresentation(e){cc.define(this.name,e,this.container)}defineElement(e){this.definition=new tn(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return gc.tagFor(e)}}const rp=(t,e)=>Q`
    <template role="${i=>i.role}" aria-orientation="${i=>i.orientation}"></template>
`,lp={separator:"separator",presentation:"presentation"};let Jo=class extends te{constructor(){super(...arguments),this.role=lp.separator,this.orientation=qo.horizontal}};p([m],Jo.prototype,"role",void 0);p([m],Jo.prototype,"orientation",void 0);const ap=(t,e)=>Q`
    <template
        aria-checked="${i=>i.ariaChecked}"
        aria-disabled="${i=>i.ariaDisabled}"
        aria-posinset="${i=>i.ariaPosInSet}"
        aria-selected="${i=>i.ariaSelected}"
        aria-setsize="${i=>i.ariaSetSize}"
        class="${i=>[i.checked&&"checked",i.selected&&"selected",i.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${pi(t,e)}
        <span class="content" part="content">
            <slot ${Ne("content")}></slot>
        </span>
        ${fi(t,e)}
    </template>
`;class ln extends Se{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(i=>i.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,i){var s,n;this.ariaActiveDescendant=(n=(s=this.options[i])===null||s===void 0?void 0:s.id)!==null&&n!==void 0?n:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((i,s)=>{i.checked=vs(s,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((i,s)=>{i.checked=vs(s,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((i,s)=>{i.checked=vs(s,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((i,s)=>{i.checked=vs(s,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var i;if(!this.multiple)return super.clickHandler(e);const s=(i=e.target)===null||i===void 0?void 0:i.closest("[role=option]");if(!(!s||s.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(s),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:i,shiftKey:s}=e;switch(this.shouldSkipFocus=!1,i){case gi:{this.checkFirstOption(s);return}case zt:{this.checkNextOption(s);return}case Ut:{this.checkPreviousOption(s);return}case bi:{this.checkLastOption(s);return}case Go:return this.focusAndScrollOptionIntoView(),!0;case nn:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case ts:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return i.length===1&&this.handleTypeAhead(`${i}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,i){var s;this.ariaMultiSelectable=i?"true":null,(s=this.options)===null||s===void 0||s.forEach(n=>{n.checked=i?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,i){var s;const n=Math.max(0,parseInt((s=i==null?void 0:i.toFixed())!==null&&s!==void 0?s:"",10));n!==i&&V.queueUpdate(()=>{this.size=n})}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter(s=>!s.disabled),i=!e.every(s=>s.selected);e.forEach(s=>s.selected=i),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,i){if(!this.multiple){super.typeaheadBufferChanged(e,i);return}if(this.$fastController.isConnected){const s=this.getTypeaheadMatches(),n=this.options.indexOf(s[0]);n>-1&&(this.activeIndex=n,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(i=>i.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}}p([A],ln.prototype,"activeIndex",void 0);p([m({mode:"boolean"})],ln.prototype,"multiple",void 0);p([m({converter:Qe})],ln.prototype,"size",void 0);class cp extends te{}class dp extends ss(cp){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const up={email:"email",password:"password",tel:"tel",text:"text",url:"url"};let He=class extends dp{constructor(){super(...arguments),this.type=up.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&V.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};p([m({attribute:"readonly",mode:"boolean"})],He.prototype,"readOnly",void 0);p([m({mode:"boolean"})],He.prototype,"autofocus",void 0);p([m],He.prototype,"placeholder",void 0);p([m],He.prototype,"type",void 0);p([m],He.prototype,"list",void 0);p([m({converter:Qe})],He.prototype,"maxlength",void 0);p([m({converter:Qe})],He.prototype,"minlength",void 0);p([m],He.prototype,"pattern",void 0);p([m({converter:Qe})],He.prototype,"size",void 0);p([m({mode:"boolean"})],He.prototype,"spellcheck",void 0);p([A],He.prototype,"defaultSlottedNodes",void 0);class Yo{}Be(Yo,ie);Be(He,hi,Yo);const bl=44,hp=(t,e)=>Q`
    <template
        role="progressbar"
        aria-valuenow="${i=>i.value}"
        aria-valuemin="${i=>i.min}"
        aria-valuemax="${i=>i.max}"
        class="${i=>i.paused?"paused":""}"
    >
        ${zo(i=>typeof i.value=="number",Q`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${i=>bl*i.percentComplete/100}px ${bl}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `,Q`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class vi extends te{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e=typeof this.min=="number"?this.min:0,i=typeof this.max=="number"?this.max:100,s=typeof this.value=="number"?this.value:0,n=i-e;this.percentComplete=n===0?0:Math.fround((s-e)/n*100)}}p([m({converter:Qe})],vi.prototype,"value",void 0);p([m({converter:Qe})],vi.prototype,"min",void 0);p([m({converter:Qe})],vi.prototype,"max",void 0);p([m({mode:"boolean"})],vi.prototype,"paused",void 0);p([A],vi.prototype,"percentComplete",void 0);const fp=(t,e)=>Q`
    <template
        role="radiogroup"
        aria-disabled="${i=>i.disabled}"
        aria-readonly="${i=>i.readOnly}"
        @click="${(i,s)=>i.clickHandler(s.event)}"
        @keydown="${(i,s)=>i.keydownHandler(s.event)}"
        @focusout="${(i,s)=>i.focusOutHandler(s.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${i=>i.orientation===qo.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${Ne({property:"slottedRadioButtons",filter:Uo("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;let St=class extends te{constructor(){super(...arguments),this.orientation=qo.horizontal,this.radioChangeHandler=e=>{const i=e.target;i.checked&&(this.slottedRadioButtons.forEach(s=>{s!==i&&(s.checked=!1,this.isInsideFoundationToolbar||s.setAttribute("tabindex","-1"))}),this.selectedRadio=i,this.value=i.value,i.setAttribute("tabindex","0"),this.focusedRadio=i),e.stopPropagation()},this.moveToRadioByIndex=(e,i)=>{const s=e[i];this.isInsideToolbar||(s.setAttribute("tabindex","0"),s.readOnly?this.slottedRadioButtons.forEach(n=>{n!==s&&n.setAttribute("tabindex","-1")}):(s.checked=!0,this.selectedRadio=s)),this.focusedRadio=s,s.focus()},this.moveRightOffGroup=()=>{var e;(e=this.nextElementSibling)===null||e===void 0||e.focus()},this.moveLeftOffGroup=()=>{var e;(e=this.previousElementSibling)===null||e===void 0||e.focus()},this.focusOutHandler=e=>{const i=this.slottedRadioButtons,s=e.target,n=s!==null?i.indexOf(s):0,o=this.focusedRadio?i.indexOf(this.focusedRadio):-1;return(o===0&&n===o||o===i.length-1&&o===n)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),i.forEach(r=>{r!==this.selectedRadio&&r.setAttribute("tabindex","-1")}))):(this.focusedRadio=i[0],this.focusedRadio.setAttribute("tabindex","0"),i.forEach(r=>{r!==this.focusedRadio&&r.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{const i=e.target;if(i){const s=this.slottedRadioButtons;i.checked||s.indexOf(i)===0?(i.setAttribute("tabindex","0"),this.selectedRadio=i):(i.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=i}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,i,s)=>e===i.length&&this.isInsideToolbar&&s===Yi,this.shouldMoveOffGroupToTheLeft=(e,i)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&i===Ji,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const i=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?i.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(s,i,e.key)){this.moveRightOffGroup();return}else s===i.length&&(s=0);for(;s<i.length&&i.length>1;)if(i[s].disabled){if(this.focusedRadio&&s===i.indexOf(this.focusedRadio))break;if(s+1>=i.length){if(this.isInsideToolbar)break;s=0}else s+=1}else{this.moveToRadioByIndex(i,s);break}},this.moveLeft=e=>{const i=this.slottedRadioButtons;let s=0;if(s=this.focusedRadio?i.indexOf(this.focusedRadio)-1:0,s=s<0?i.length-1:s,this.shouldMoveOffGroupToTheLeft(i,e.key)){this.moveLeftOffGroup();return}for(;s>=0&&i.length>1;)if(i[s].disabled){if(this.focusedRadio&&s===i.indexOf(this.focusedRadio))break;s-1<0?s=i.length-1:s-=1}else{this.moveToRadioByIndex(i,s);break}},this.keydownHandler=e=>{const i=e.key;if(i in Of&&this.isInsideFoundationToolbar)return!0;switch(i){case es:{this.checkFocusedRadio();break}case Yi:case zt:{this.direction===di.ltr?this.moveRight(e):this.moveLeft(e);break}case Ji:case Ut:{this.direction===di.ltr?this.moveLeft(e):this.moveRight(e);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.value===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,i){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return(e=this.parentToolbar)!==null&&e!==void 0?e:!1}get isInsideFoundationToolbar(){var e;return!!(!((e=this.parentToolbar)===null||e===void 0)&&e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=Rf(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const e=this.slottedRadioButtons.filter(n=>n.hasAttribute("checked")),i=e?e.length:0;if(i>1){const n=e[i-1];n.checked=!0}let s=!1;if(this.slottedRadioButtons.forEach(n=>{this.name!==void 0&&n.setAttribute("name",this.name),this.disabled&&(n.disabled=!0),this.readOnly&&(n.readOnly=!0),this.value&&this.value===n.value?(this.selectedRadio=n,this.focusedRadio=n,n.checked=!0,n.setAttribute("tabindex","0"),s=!0):(this.isInsideFoundationToolbar||n.setAttribute("tabindex","-1"),n.checked=!1),n.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const n=this.slottedRadioButtons.filter(r=>r.hasAttribute("checked")),o=n!==null?n.length:0;if(o>0&&!s){const r=n[o-1];r.checked=!0,this.focusedRadio=r,r.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}};p([m({attribute:"readonly",mode:"boolean"})],St.prototype,"readOnly",void 0);p([m({attribute:"disabled",mode:"boolean"})],St.prototype,"disabled",void 0);p([m],St.prototype,"name",void 0);p([m],St.prototype,"value",void 0);p([m],St.prototype,"orientation",void 0);p([A],St.prototype,"childItems",void 0);p([A],St.prototype,"slottedRadioButtons",void 0);const pp=(t,e)=>Q`
    <template
        role="radio"
        class="${i=>i.checked?"checked":""} ${i=>i.readOnly?"readonly":""}"
        aria-checked="${i=>i.checked}"
        aria-required="${i=>i.required}"
        aria-disabled="${i=>i.disabled}"
        aria-readonly="${i=>i.readOnly}"
        @keypress="${(i,s)=>i.keypressHandler(s.event)}"
        @click="${(i,s)=>i.clickHandler(s.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ne("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class gp extends te{}class bp extends uc(gp){constructor(){super(...arguments),this.proxy=document.createElement("input")}}let an=class extends bp{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case ts:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}connectedCallback(){var e,i;super.connectedCallback(),this.validate(),((e=this.parentElement)===null||e===void 0?void 0:e.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(i=this.defaultChecked)!==null&&i!==void 0?i:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}};p([m({attribute:"readonly",mode:"boolean"})],an.prototype,"readOnly",void 0);p([A],an.prototype,"name",void 0);p([A],an.prototype,"defaultSlottedNodes",void 0);function mp(t,e,i){return t.nodeType!==Node.TEXT_NODE?!0:typeof t.nodeValue=="string"&&!!t.nodeValue.trim().length}class vp extends ln{}class yp extends ss(vp){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class Ot extends yp{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Ns("listbox-"),this.maxHeight=0}openChanged(e,i){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,V.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return j.track(this,"value"),this._value}set value(e){var i,s,n,o,r,l,a;const c=`${this._value}`;if(!((i=this._options)===null||i===void 0)&&i.length){const d=this._options.findIndex($=>$.value===e),h=(n=(s=this._options[this.selectedIndex])===null||s===void 0?void 0:s.value)!==null&&n!==void 0?n:null,g=(r=(o=this._options[d])===null||o===void 0?void 0:o.value)!==null&&r!==void 0?r:null;(d===-1||h!==g)&&(e="",this.selectedIndex=d),e=(a=(l=this.firstSelectedOption)===null||l===void 0?void 0:l.value)!==null&&a!==void 0?a:e}c!==e&&(this._value=e,super.valueChanged(c,e),j.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var i,s;this.$fastController.isConnected&&(this.value=(s=(i=this.firstSelectedOption)===null||i===void 0?void 0:i.value)!==null&&s!==void 0?s:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,i){super.selectedIndexChanged(e,i),this.updateValue()}positionChanged(e,i){this.positionAttribute=i,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),s=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>s?Bn.above:Bn.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Bn.above?~~e.top:~~s}get displayValue(){var e,i;return j.track(this,"displayValue"),(i=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&i!==void 0?i:""}disabledChanged(e,i){super.disabledChanged&&super.disabledChanged(e,i),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const i=e.target.closest("option,[role=option]");if(i&&i.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var i;if(super.focusoutHandler(e),!this.open)return!0;const s=e.relatedTarget;if(this.isSameNode(s)){this.focus();return}!((i=this.options)===null||i===void 0)&&i.includes(s)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,i){super.handleChange(e,i),i==="value"&&this.updateValue()}slottedOptionsChanged(e,i){this.options.forEach(s=>{j.getNotifier(s).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,i),this.options.forEach(s=>{j.getNotifier(s).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var i;return e.offsetX>=0&&e.offsetX<=((i=this.listbox)===null||i===void 0?void 0:i.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,i){super.multipleChanged(e,i),this.proxy&&(this.proxy.multiple=i)}selectedOptionsChanged(e,i){var s;super.selectedOptionsChanged(e,i),(s=this.options)===null||s===void 0||s.forEach((n,o)=>{var r;const l=(r=this.proxy)===null||r===void 0?void 0:r.options.item(o);l&&(l.selected=n.selected)})}setDefaultSelectedOption(){var e;const i=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(Se.slottedOptionFilter),s=i==null?void 0:i.findIndex(n=>n.hasAttribute("selected")||n.selected||n.value===this.value);if(s!==-1){this.selectedIndex=s;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const i=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);i&&this.proxy.options.add(i)}))}keydownHandler(e){super.keydownHandler(e);const i=e.key||e.key.charCodeAt(0);switch(i){case ts:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case gi:case bi:{e.preventDefault();break}case es:{e.preventDefault(),this.open=!this.open;break}case nn:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case Go:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(i===zt||i===Ut)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,i){super.sizeChanged(e,i),this.proxy&&(this.proxy.size=i)}updateDisplayValue(){this.collapsible&&j.notify(this,"displayValue")}}p([m({attribute:"open",mode:"boolean"})],Ot.prototype,"open",void 0);p([xh],Ot.prototype,"collapsible",null);p([A],Ot.prototype,"control",void 0);p([m({attribute:"position"})],Ot.prototype,"positionAttribute",void 0);p([A],Ot.prototype,"position",void 0);p([A],Ot.prototype,"maxHeight",void 0);class Xo{}p([A],Xo.prototype,"ariaControls",void 0);Be(Xo,qt);Be(Ot,hi,Xo);const xp=(t,e)=>Q`
    <template
        class="${i=>[i.collapsible&&"collapsible",i.collapsible&&i.open&&"open",i.disabled&&"disabled",i.collapsible&&i.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${i=>i.ariaActiveDescendant}"
        aria-controls="${i=>i.ariaControls}"
        aria-disabled="${i=>i.ariaDisabled}"
        aria-expanded="${i=>i.ariaExpanded}"
        aria-haspopup="${i=>i.collapsible?"listbox":null}"
        aria-multiselectable="${i=>i.ariaMultiSelectable}"
        ?open="${i=>i.open}"
        role="combobox"
        tabindex="${i=>i.disabled?null:"0"}"
        @click="${(i,s)=>i.clickHandler(s.event)}"
        @focusin="${(i,s)=>i.focusinHandler(s.event)}"
        @focusout="${(i,s)=>i.focusoutHandler(s.event)}"
        @keydown="${(i,s)=>i.keydownHandler(s.event)}"
        @mousedown="${(i,s)=>i.mousedownHandler(s.event)}"
    >
        ${zo(i=>i.collapsible,Q`
                <div
                    class="control"
                    part="control"
                    ?disabled="${i=>i.disabled}"
                    ${Oe("control")}
                >
                    ${pi(t,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${i=>i.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${fi(t,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${i=>i.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${i=>i.disabled}"
            ?hidden="${i=>i.collapsible?!i.open:!1}"
            ${Oe("listbox")}
        >
            <slot
                ${Ne({filter:Se.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,wp=(t,e)=>Q`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class Cp extends te{}const $p=(t,e)=>Q`
    <template slot="tab" role="tab" aria-disabled="${i=>i.disabled}">
        <slot></slot>
    </template>
`;class mc extends te{}p([m({mode:"boolean"})],mc.prototype,"disabled",void 0);const kp=(t,e)=>Q`
    <template class="${i=>i.orientation}">
        ${pi(t,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${Ne("tabs")}></slot>

            ${zo(i=>i.showActiveIndicator,Q`
                    <div
                        ${Oe("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${fi(t,e)}
        <div class="tabpanel" part="tabpanel">
            <slot name="tabpanel" ${Ne("tabpanels")}></slot>
        </div>
    </template>
`,ro={vertical:"vertical",horizontal:"horizontal"};class dt extends te{constructor(){super(...arguments),this.orientation=ro.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isHiddenElement=e=>e.hasAttribute("hidden"),this.isFocusableElement=e=>!this.isDisabledElement(e)&&!this.isHiddenElement(e),this.setTabs=()=>{const e="gridColumn",i="gridRow",s=this.isHorizontal()?e:i;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((n,o)=>{if(n.slot==="tab"){const r=this.activeTabIndex===o&&this.isFocusableElement(n);this.activeindicator&&this.isFocusableElement(n)&&(this.showActiveIndicator=!0);const l=this.tabIds[o],a=this.tabpanelIds[o];n.setAttribute("id",l),n.setAttribute("aria-selected",r?"true":"false"),n.setAttribute("aria-controls",a),n.addEventListener("click",this.handleTabClick),n.addEventListener("keydown",this.handleTabKeyDown),n.setAttribute("tabindex",r?"0":"-1"),r&&(this.activetab=n,this.activeid=l)}n.style[e]="",n.style[i]="",n.style[s]=`${o+1}`,this.isHorizontal()?n.classList.remove("vertical"):n.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,i)=>{const s=this.tabIds[i],n=this.tabpanelIds[i];e.setAttribute("id",n),e.setAttribute("aria-labelledby",s),this.activeTabIndex!==i?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{const i=e.currentTarget;i.nodeType===1&&this.isFocusableElement(i)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(i),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Ji:e.preventDefault(),this.adjustBackward(e);break;case Yi:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case Ut:e.preventDefault(),this.adjustBackward(e);break;case zt:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case gi:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case bi:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{const i=this.tabs;let s=0;for(s=this.activetab?i.indexOf(this.activetab)+1:1,s===i.length&&(s=0);s<i.length&&i.length>1;)if(this.isFocusableElement(i[s])){this.moveToTabByIndex(i,s);break}else{if(this.activetab&&s===i.indexOf(this.activetab))break;s+1>=i.length?s=0:s+=1}},this.adjustBackward=e=>{const i=this.tabs;let s=0;for(s=this.activetab?i.indexOf(this.activetab)-1:0,s=s<0?i.length-1:s;s>=0&&i.length>1;)if(this.isFocusableElement(i[s])){this.moveToTabByIndex(i,s);break}else s-1<0?s=i.length-1:s-=1},this.moveToTabByIndex=(e,i)=>{const s=e[i];this.activetab=s,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=i,s.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,i){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(s=>s.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var i;return(i=e.getAttribute("id"))!==null&&i!==void 0?i:`tab-${Ns()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var i;return(i=e.getAttribute("id"))!==null&&i!==void 0?i:`panel-${Ns()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===ro.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",i=this.isHorizontal()?"translateX":"translateY",s=this.isHorizontal()?"offsetLeft":"offsetTop",n=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const o=this.activeIndicatorRef[s];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const r=o-n;this.activeIndicatorRef.style.transform=`${i}(${r}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${i}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){const i=this.tabs.filter(r=>this.isFocusableElement(r)),s=i.indexOf(this.activetab),n=Af(0,i.length-1,s+e),o=this.tabs.indexOf(i[n]);o>-1&&this.moveToTabByIndex(this.tabs,o)}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}p([m],dt.prototype,"orientation",void 0);p([m],dt.prototype,"activeid",void 0);p([A],dt.prototype,"tabs",void 0);p([A],dt.prototype,"tabpanels",void 0);p([m({mode:"boolean"})],dt.prototype,"activeindicator",void 0);p([A],dt.prototype,"activeIndicatorRef",void 0);p([A],dt.prototype,"showActiveIndicator",void 0);Be(dt,hi);class Ip extends te{}class Tp extends ss(Ip){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const vc={none:"none",both:"both",horizontal:"horizontal",vertical:"vertical"};let _e=class extends Tp{constructor(){super(...arguments),this.resize=vc.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}};p([m({mode:"boolean"})],_e.prototype,"readOnly",void 0);p([m],_e.prototype,"resize",void 0);p([m({mode:"boolean"})],_e.prototype,"autofocus",void 0);p([m({attribute:"form"})],_e.prototype,"formId",void 0);p([m],_e.prototype,"list",void 0);p([m({converter:Qe})],_e.prototype,"maxlength",void 0);p([m({converter:Qe})],_e.prototype,"minlength",void 0);p([m],_e.prototype,"name",void 0);p([m],_e.prototype,"placeholder",void 0);p([m({converter:Qe,mode:"fromView"})],_e.prototype,"cols",void 0);p([m({converter:Qe,mode:"fromView"})],_e.prototype,"rows",void 0);p([m({mode:"boolean"})],_e.prototype,"spellcheck",void 0);p([A],_e.prototype,"defaultSlottedNodes",void 0);Be(_e,Yo);const Sp=(t,e)=>Q`
    <template
        class="
            ${i=>i.readOnly?"readonly":""}
            ${i=>i.resize!==vc.none?`resize-${i.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${Ne("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${i=>i.autofocus}"
            cols="${i=>i.cols}"
            ?disabled="${i=>i.disabled}"
            form="${i=>i.form}"
            list="${i=>i.list}"
            maxlength="${i=>i.maxlength}"
            minlength="${i=>i.minlength}"
            name="${i=>i.name}"
            placeholder="${i=>i.placeholder}"
            ?readonly="${i=>i.readOnly}"
            ?required="${i=>i.required}"
            rows="${i=>i.rows}"
            ?spellcheck="${i=>i.spellcheck}"
            :value="${i=>i.value}"
            aria-atomic="${i=>i.ariaAtomic}"
            aria-busy="${i=>i.ariaBusy}"
            aria-controls="${i=>i.ariaControls}"
            aria-current="${i=>i.ariaCurrent}"
            aria-describedby="${i=>i.ariaDescribedby}"
            aria-details="${i=>i.ariaDetails}"
            aria-disabled="${i=>i.ariaDisabled}"
            aria-errormessage="${i=>i.ariaErrormessage}"
            aria-flowto="${i=>i.ariaFlowto}"
            aria-haspopup="${i=>i.ariaHaspopup}"
            aria-hidden="${i=>i.ariaHidden}"
            aria-invalid="${i=>i.ariaInvalid}"
            aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
            aria-label="${i=>i.ariaLabel}"
            aria-labelledby="${i=>i.ariaLabelledby}"
            aria-live="${i=>i.ariaLive}"
            aria-owns="${i=>i.ariaOwns}"
            aria-relevant="${i=>i.ariaRelevant}"
            aria-roledescription="${i=>i.ariaRoledescription}"
            @input="${(i,s)=>i.handleTextInput()}"
            @change="${i=>i.handleChange()}"
            ${Oe("control")}
        ></textarea>
    </template>
`,Op=(t,e)=>Q`
    <template
        class="
            ${i=>i.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${i=>i.defaultSlottedNodes&&i.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${Ne({property:"defaultSlottedNodes",filter:mp})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${pi(t,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${i=>i.handleTextInput()}"
                @change="${i=>i.handleChange()}"
                ?autofocus="${i=>i.autofocus}"
                ?disabled="${i=>i.disabled}"
                list="${i=>i.list}"
                maxlength="${i=>i.maxlength}"
                minlength="${i=>i.minlength}"
                pattern="${i=>i.pattern}"
                placeholder="${i=>i.placeholder}"
                ?readonly="${i=>i.readOnly}"
                ?required="${i=>i.required}"
                size="${i=>i.size}"
                ?spellcheck="${i=>i.spellcheck}"
                :value="${i=>i.value}"
                type="${i=>i.type}"
                aria-atomic="${i=>i.ariaAtomic}"
                aria-busy="${i=>i.ariaBusy}"
                aria-controls="${i=>i.ariaControls}"
                aria-current="${i=>i.ariaCurrent}"
                aria-describedby="${i=>i.ariaDescribedby}"
                aria-details="${i=>i.ariaDetails}"
                aria-disabled="${i=>i.ariaDisabled}"
                aria-errormessage="${i=>i.ariaErrormessage}"
                aria-flowto="${i=>i.ariaFlowto}"
                aria-haspopup="${i=>i.ariaHaspopup}"
                aria-hidden="${i=>i.ariaHidden}"
                aria-invalid="${i=>i.ariaInvalid}"
                aria-keyshortcuts="${i=>i.ariaKeyshortcuts}"
                aria-label="${i=>i.ariaLabel}"
                aria-labelledby="${i=>i.ariaLabelledby}"
                aria-live="${i=>i.ariaLive}"
                aria-owns="${i=>i.ariaOwns}"
                aria-relevant="${i=>i.ariaRelevant}"
                aria-roledescription="${i=>i.ariaRoledescription}"
                ${Oe("control")}
            />
            ${fi(t,e)}
        </div>
    </template>
`,$t="not-allowed",Ap=":host([hidden]){display:none}";function xe(t){return`${Ap}:host{display:${t}}`}const me=kf()?"focus-visible":"focus";function _p(t){return gc.getOrCreate(t).withPrefix("vscode")}function Ep(t){window.addEventListener("load",()=>{new MutationObserver(()=>{ml(t)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),ml(t)})}function ml(t){const e=getComputedStyle(document.body),i=document.querySelector("body");if(i){const s=i.getAttribute("data-vscode-theme-kind");for(const[n,o]of t){let r=e.getPropertyValue(n).toString();if(s==="vscode-high-contrast")r.length===0&&o.name.includes("background")&&(r="transparent"),o.name==="button-icon-hover-background"&&(r="transparent");else if(s==="vscode-high-contrast-light"){if(r.length===0&&o.name.includes("background"))switch(o.name){case"button-primary-hover-background":r="#0F4A85";break;case"button-secondary-hover-background":r="transparent";break;case"button-icon-hover-background":r="transparent";break}}else o.name==="contrast-active-border"&&(r="transparent");o.setValueFor(i,r)}}}const vl=new Map;let yl=!1;function T(t,e){const i=pc.create(t);if(e){if(e.includes("--fake-vscode-token")){const s="id"+Math.random().toString(16).slice(2);e=`${e}-${s}`}vl.set(e,i)}return yl||(Ep(vl),yl=!0),i}const Rp=T("background","--vscode-editor-background").withDefault("#1e1e1e"),U=T("border-width").withDefault(1),yc=T("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518");T("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df");const ns=T("corner-radius").withDefault(0),si=T("corner-radius-round").withDefault(2),F=T("design-unit").withDefault(4),Gt=T("disabled-opacity").withDefault(.4),ae=T("focus-border","--vscode-focusBorder").withDefault("#007fd4"),je=T("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol");T("font-weight","--vscode-font-weight").withDefault("400");const be=T("foreground","--vscode-foreground").withDefault("#cccccc"),As=T("input-height").withDefault("26"),Zo=T("input-min-width").withDefault("100px"),Ae=T("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),Fe=T("type-ramp-base-line-height").withDefault("normal"),xc=T("type-ramp-minus1-font-size").withDefault("11px"),wc=T("type-ramp-minus1-line-height").withDefault("16px");T("type-ramp-minus2-font-size").withDefault("9px");T("type-ramp-minus2-line-height").withDefault("16px");T("type-ramp-plus1-font-size").withDefault("16px");T("type-ramp-plus1-line-height").withDefault("24px");const Dp=T("scrollbarWidth").withDefault("10px"),Pp=T("scrollbarHeight").withDefault("10px"),Fp=T("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),Bp=T("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),Lp=T("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),Cc=T("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),$c=T("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Ko=T("button-border","--vscode-button-border").withDefault("transparent"),xl=T("button-icon-background").withDefault("transparent"),Mp=T("button-icon-corner-radius").withDefault("5px"),Hp=T("button-icon-outline-offset").withDefault(0),wl=T("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),Vp=T("button-icon-padding").withDefault("3px"),ni=T("button-primary-background","--vscode-button-background").withDefault("#0e639c"),kc=T("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),Ic=T("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),Vn=T("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),Np=T("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),jp=T("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),zp=T("button-padding-horizontal").withDefault("11px"),Up=T("button-padding-vertical").withDefault("4px"),ot=T("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),Zt=T("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),qp=T("checkbox-corner-radius").withDefault(3);T("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0");const Ft=T("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),oi=T("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Gp=T("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Wp=T("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),xs=T("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),xt=T("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c");T("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0");const Qp=T("dropdown-list-max-height").withDefault("200px"),Bt=T("input-background","--vscode-input-background").withDefault("#3c3c3c"),Tc=T("input-foreground","--vscode-input-foreground").withDefault("#cccccc");T("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc");const Cl=T("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),Jp=T("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Yp=T("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),Xp=T("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Jt=T("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Zp=T("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799");T("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e");T("panel-view-border","--vscode-panel-border").withDefault("#80808059");const Kp=T("tag-corner-radius").withDefault("2px"),eg=(t,e)=>oe`
	${xe("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${je};
		font-size: ${xc};
		line-height: ${wc};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${Cc};
		border: calc(${U} * 1px) solid ${Ko};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${$c};
		display: flex;
		height: calc(${F} * 4px);
		justify-content: center;
		min-width: calc(${F} * 4px + 2px);
		min-height: calc(${F} * 4px + 2px);
		padding: 3px 6px;
	}
`;class tg extends is{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}const ig=tg.compose({baseName:"badge",template:dc,styles:eg});function sg(t,e,i,s){var n=arguments.length,o=n<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}const ng=oe`
	${xe("inline-flex")} :host {
		outline: none;
		font-family: ${je};
		font-size: ${Ae};
		line-height: ${Fe};
		color: ${kc};
		background: ${ni};
		border-radius: calc(${si} * 1px);
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${Up} ${zp};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${U} * 1px) solid ${Ko};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
	}
	:host(:hover) {
		background: ${Ic};
	}
	:host(:active) {
		background: ${ni};
	}
	.control:${me} {
		outline: calc(${U} * 1px) solid ${ae};
		outline-offset: calc(${U} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${Gt};
		background: ${ni};
		cursor: ${$t};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${F} * 4px);
		height: calc(${F} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,og=oe`
	:host([appearance='primary']) {
		background: ${ni};
		color: ${kc};
	}
	:host([appearance='primary']:hover) {
		background: ${Ic};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${ni};
	}
	:host([appearance='primary']) .control:${me} {
		outline: calc(${U} * 1px) solid ${ae};
		outline-offset: calc(${U} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${ni};
	}
`,rg=oe`
	:host([appearance='secondary']) {
		background: ${Vn};
		color: ${Np};
	}
	:host([appearance='secondary']:hover) {
		background: ${jp};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${Vn};
	}
	:host([appearance='secondary']) .control:${me} {
		outline: calc(${U} * 1px) solid ${ae};
		outline-offset: calc(${U} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${Vn};
	}
`,lg=oe`
	:host([appearance='icon']) {
		background: ${xl};
		border-radius: ${Mp};
		color: ${be};
	}
	:host([appearance='icon']:hover) {
		background: ${wl};
		outline: 1px dotted ${yc};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${Vp};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${wl};
	}
	:host([appearance='icon']) .control:${me} {
		outline: calc(${U} * 1px) solid ${ae};
		outline-offset: ${Hp};
	}
	:host([appearance='icon'][disabled]) {
		background: ${xl};
	}
`,ag=(t,e)=>oe`
	${ng}
	${og}
	${rg}
	${lg}
`;class Sc extends Ye{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,i,s){e==="appearance"&&s==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),e==="aria-label"&&(this.ariaLabel=s),e==="disabled"&&(this.disabled=s!==null)}}sg([m],Sc.prototype,"appearance",void 0);const cg=Sc.compose({baseName:"button",template:Df,styles:ag,shadowOptions:{delegatesFocus:!0}}),dg=(t,e)=>oe`
	${xe("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${F} * 1px) 0;
		user-select: none;
		font-size: ${Ae};
		line-height: ${Fe};
	}
	.control {
		position: relative;
		width: calc(${F} * 4px + 2px);
		height: calc(${F} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${qp} * 1px);
		border: calc(${U} * 1px) solid ${Zt};
		background: ${ot};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${je};
		color: ${be};
		padding-inline-start: calc(${F} * 2px + 2px);
		margin-inline-end: calc(${F} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${be};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${be};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${ot};
		border-color: ${Zt};
	}
	:host(:enabled) .control:active {
		background: ${ot};
		border-color: ${ae};
	}
	:host(:${me}) .control {
		border: calc(${U} * 1px) solid ${ae};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${$t};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${Gt};
	}
`;class ug extends rn{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}const hg=ug.compose({baseName:"checkbox",template:Uf,styles:dg,checkedIndicator:`
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,indeterminateIndicator:`
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`}),fg=(t,e)=>oe`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`,pg=(t,e)=>oe`
	:host {
		display: grid;
		padding: calc((${F} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${Rp};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${Gp};
		outline: 1px dotted ${yc};
		outline-offset: -1px;
	}
`,gg=(t,e)=>oe`
	:host {
		padding: calc(${F} * 1px) calc(${F} * 3px);
		color: ${be};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${je};
		font-size: ${Ae};
		line-height: ${Fe};
		font-weight: 400;
		border: solid calc(${U} * 1px) transparent;
		border-radius: calc(${ns} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
	}
	:host(:${me}),
	:host(:focus),
	:host(:active) {
		background: ${Ft};
		border: solid calc(${U} * 1px) ${ae};
		color: ${oi};
		outline: none;
	}
	:host(:${me}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${oi} !important;
	}
`;class bg extends ye{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}const mg=bg.compose({baseName:"data-grid",baseClass:ye,template:Lf,styles:fg});class vg extends ve{}const yg=vg.compose({baseName:"data-grid-row",baseClass:ve,template:jf,styles:pg});class xg extends Tt{}const wg=xg.compose({baseName:"data-grid-cell",baseClass:Tt,template:zf,styles:gg}),Cg=(t,e)=>oe`
	${xe("block")} :host {
		border: none;
		border-top: calc(${U} * 1px) solid ${Wp};
		box-sizing: content-box;
		height: 0;
		margin: calc(${F} * 1px) 0;
		width: 100%;
	}
`;class $g extends Jo{}const kg=$g.compose({baseName:"divider",template:rp,styles:Cg}),Ig=(t,e)=>oe`
	${xe("inline-flex")} :host {
		background: ${xs};
		border-radius: calc(${si} * 1px);
		box-sizing: border-box;
		color: ${be};
		contain: contents;
		font-family: ${je};
		height: calc(${As} * 1px);
		position: relative;
		user-select: none;
		min-width: ${Zo};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${U} * 1px) solid ${xt};
		border-radius: calc(${si} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${Ae};
		line-height: ${Fe};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${xs};
		border: calc(${U} * 1px) solid ${ae};
		border-radius: calc(${si} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${Qp};
		padding: 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${me}) .control {
		border-color: ${ae};
	}
	:host(:not([disabled]):hover) {
		background: ${xs};
		border-color: ${xt};
	}
	:host(:${me}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${Ft};
		border: calc(${U} * 1px) solid transparent;
		color: ${oi};
	}
	:host([disabled]) {
		cursor: ${$t};
		opacity: ${Gt};
	}
	:host([disabled]) .control {
		cursor: ${$t};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${xs};
		color: ${be};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${ae};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${ae};
	}
	:host([open][position='above']) .listbox {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${As} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${As} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${F} * 4px);
		min-width: calc(${F} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;class Tg extends Ot{}const Sg=Tg.compose({baseName:"dropdown",template:xp,styles:Ig,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`}),Og=(t,e)=>oe`
	${xe("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${Jp};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${je};
		font-size: ${Ae};
		line-height: ${Fe};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${U} * 1px) solid transparent;
		border-radius: calc(${ns} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		word-break: break-word;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${Cl};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${Cl};
	}
	:host(:${me}) .control,
	:host(:focus) .control {
		border: calc(${U} * 1px) solid ${ae};
	}
`;class Ag extends Je{}const _g=Ag.compose({baseName:"link",template:Ef,styles:Og,shadowOptions:{delegatesFocus:!0}}),Eg=(t,e)=>oe`
	${xe("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${ns};
		border: calc(${U} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${be};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${Ae};
		line-height: ${Fe};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${F} / 2) * 1px)
			calc((${F} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${me}) {
		border-color: ${ae};
		background: ${Ft};
		color: ${be};
	}
	:host([aria-selected='true']) {
		background: ${Ft};
		border: calc(${U} * 1px) solid transparent;
		color: ${oi};
	}
	:host(:active) {
		background: ${Ft};
		color: ${oi};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${Ft};
		border: calc(${U} * 1px) solid transparent;
		color: ${oi};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${Ft};
		color: ${be};
	}
	:host([disabled]) {
		cursor: ${$t};
		opacity: ${Gt};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;let Rg=class extends ct{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}};const Dg=Rg.compose({baseName:"option",template:ap,styles:Eg}),Pg=(t,e)=>oe`
	${xe("grid")} :host {
		box-sizing: border-box;
		font-family: ${je};
		font-size: ${Ae};
		line-height: ${Fe};
		color: ${be};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${F} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${F} * 1px) calc(${F} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${F} / 4) * 1px);
		justify-self: center;
		background: ${Jt};
		margin: 0;
		border-radius: calc(${ns} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`,Fg=(t,e)=>oe`
	${xe("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${je};
		font-size: ${Ae};
		line-height: ${Fe};
		height: calc(${F} * 7px);
		padding: calc(${F} * 1px) 0;
		color: ${Zp};
		fill: currentcolor;
		border-radius: calc(${ns} * 1px);
		border: solid calc(${U} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${Jt};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${Jt};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${Jt};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${Jt};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${Jt};
		fill: currentcolor;
	}
	:host(:${me}) {
		outline: none;
		border: solid calc(${U} * 1px) ${Xp};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${F} * 2px);
	}
`,Bg=(t,e)=>oe`
	${xe("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${U} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${Ae};
		line-height: ${Fe};
		padding: 10px calc((${F} + 2) * 1px);
	}
`;class Lg extends dt{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=ro.horizontal),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}const Mg=Lg.compose({baseName:"panels",template:kp,styles:Pg});class Hg extends mc{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}const Vg=Hg.compose({baseName:"panel-tab",template:$p,styles:Fg});class Ng extends Cp{}const jg=Ng.compose({baseName:"panel-view",template:wp,styles:Bg}),zg=(t,e)=>oe`
	${xe("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${F} * 7px);
		width: calc(${F} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${F} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${Yp};
		stroke-width: calc(${F} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`;class Ug extends vi{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,i,s){e==="value"&&this.removeAttribute("value")}}const qg=Ug.compose({baseName:"progress-ring",template:hp,styles:zg,indeterminateIndicator:`
		<svg class="progress" part="progress" viewBox="0 0 16 16">
			<circle
				class="background"
				part="background"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
			<circle
				class="indeterminate-indicator-1"
				part="indeterminate-indicator-1"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
		</svg>
	`}),Gg=(t,e)=>oe`
	${xe("flex")} :host {
		align-items: flex-start;
		margin: calc(${F} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${be};
		font-size: ${Ae};
		margin: calc(${F} * 1px) 0;
	}
`;class Wg extends St{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const i="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",i),this.setAttribute("aria-labelledby",i)}}}const Qg=Wg.compose({baseName:"radio-group",template:fp,styles:Gg}),Jg=(t,e)=>oe`
	${xe("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${Ae};
		line-height: ${Fe};
		margin: calc(${F} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${ot};
		border-radius: 999px;
		border: calc(${U} * 1px) solid ${Zt};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${F} * 4px);
		position: relative;
		outline: none;
		width: calc(${F} * 4px);
	}
	.label {
		color: ${be};
		cursor: pointer;
		font-family: ${je};
		margin-inline-end: calc(${F} * 2px + 2px);
		padding-inline-start: calc(${F} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${be};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${F} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${ot};
		border-color: ${Zt};
	}
	:host(:not([disabled])) .control:active {
		background: ${ot};
		border-color: ${ae};
	}
	:host(:${me}) .control {
		border: calc(${U} * 1px) solid ${ae};
	}
	:host([aria-checked='true']) .control {
		background: ${ot};
		border: calc(${U} * 1px) solid ${Zt};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${ot};
		border: calc(${U} * 1px) solid ${Zt};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${ot};
		border: calc(${U} * 1px) solid ${ae};
	}
	:host([aria-checked="true"]:${me}:not([disabled])) .control {
		border: calc(${U} * 1px) solid ${ae};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${$t};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${Gt};
	}
`;class Yg extends an{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}const Xg=Yg.compose({baseName:"radio",template:pp,styles:Jg,checkedIndicator:`
		<div part="checked-indicator" class="checked-indicator"></div>
	`}),Zg=(t,e)=>oe`
	${xe("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${je};
		font-size: ${xc};
		line-height: ${wc};
	}
	.control {
		background-color: ${Cc};
		border: calc(${U} * 1px) solid ${Ko};
		border-radius: ${Kp};
		color: ${$c};
		padding: calc(${F} * 0.5px) calc(${F} * 1px);
		text-transform: uppercase;
	}
`;class Kg extends is{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}const eb=Kg.compose({baseName:"tag",template:dc,styles:Zg}),tb=(t,e)=>oe`
	${xe("inline-block")} :host {
		font-family: ${je};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${Tc};
		background: ${Bt};
		border-radius: calc(${si} * 1px);
		border: calc(${U} * 1px) solid ${xt};
		font: inherit;
		font-size: ${Ae};
		line-height: ${Fe};
		padding: calc(${F} * 2px + 1px);
		width: 100%;
		min-width: ${Zo};
		resize: none;
	}
	.control:hover:enabled {
		background: ${Bt};
		border-color: ${xt};
	}
	.control:active:enabled {
		background: ${Bt};
		border-color: ${ae};
	}
	.control:hover,
	.control:${me},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${Dp};
		height: ${Pp};
	}
	.control::-webkit-scrollbar-corner {
		background: ${Bt};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${Fp};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${Bp};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${Lp};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${ae};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${be};
		cursor: pointer;
		font-size: ${Ae};
		line-height: ${Fe};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${$t};
	}
	:host([disabled]) {
		opacity: ${Gt};
	}
	:host([disabled]) .control {
		border-color: ${xt};
	}
`;class ib extends _e{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}const sb=ib.compose({baseName:"text-area",template:Sp,styles:tb,shadowOptions:{delegatesFocus:!0}}),nb=(t,e)=>oe`
	${xe("inline-block")} :host {
		font-family: ${je};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${Tc};
		background: ${Bt};
		border-radius: calc(${si} * 1px);
		border: calc(${U} * 1px) solid ${xt};
		height: calc(${As} * 1px);
		min-width: ${Zo};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${F} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${F} * 2px + 1px);
		font-size: ${Ae};
		line-height: ${Fe};
	}
	.control:hover,
	.control:${me},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${be};
		cursor: pointer;
		font-size: ${Ae};
		line-height: ${Fe};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${F} * 4px);
		height: calc(${F} * 4px);
	}
	.start {
		margin-inline-start: calc(${F} * 2px);
	}
	.end {
		margin-inline-end: calc(${F} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${Bt};
		border-color: ${xt};
	}
	:host(:active:not([disabled])) .root {
		background: ${Bt};
		border-color: ${ae};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${ae};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${$t};
	}
	:host([disabled]) {
		opacity: ${Gt};
	}
	:host([disabled]) .control {
		border-color: ${xt};
	}
`;class ob extends He{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}const rb=ob.compose({baseName:"text-field",template:Op,styles:nb,shadowOptions:{delegatesFocus:!0}}),lb={vsCodeBadge:ig,vsCodeButton:cg,vsCodeCheckbox:hg,vsCodeDataGrid:mg,vsCodeDataGridCell:wg,vsCodeDataGridRow:yg,vsCodeDivider:kg,vsCodeDropdown:Sg,vsCodeLink:_g,vsCodeOption:Dg,vsCodePanels:Mg,vsCodePanelTab:Vg,vsCodePanelView:jg,vsCodeProgressRing:qg,vsCodeRadioGroup:Qg,vsCodeRadio:Xg,vsCodeTag:eb,vsCodeTextArea:sb,vsCodeTextField:rb,register(t,...e){if(t)for(const i in this)i!=="register"&&this[i]().register(t,...e)}},$l="VSTodo";class ab{constructor(){hr(this,"vsCodeApi");typeof acquireVsCodeApi=="function"&&(this.vsCodeApi=acquireVsCodeApi())}postMessage(e){this.vsCodeApi?this.vsCodeApi.postMessage(e):console.log(e)}getState(){if(this.vsCodeApi)return this.vsCodeApi.getState()??[];{const e=localStorage.getItem($l)??"[]";return console.log({getState:e}),e?JSON.parse(e):void 0}}setState(e){return this.vsCodeApi?this.vsCodeApi.setState(e):(localStorage.setItem($l,JSON.stringify(e)),console.log({setState:e}),e)}}const Oc=new ab,cb="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let db=(t=21)=>{let e="",i=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+=cb[i[t]&63];return e};const Hi=/^[a-z0-9]+(-[a-z0-9]+)*$/,cn=(t,e,i,s="")=>{const n=t.split(":");if(t.slice(0,1)==="@"){if(n.length<2||n.length>3)return null;s=n.shift().slice(1)}if(n.length>3||!n.length)return null;if(n.length>1){const l=n.pop(),a=n.pop(),c={provider:n.length>0?n[0]:s,prefix:a,name:l};return e&&!_s(c)?null:c}const o=n[0],r=o.split("-");if(r.length>1){const l={provider:s,prefix:r.shift(),name:r.join("-")};return e&&!_s(l)?null:l}if(i&&s===""){const l={provider:s,prefix:"",name:o};return e&&!_s(l,i)?null:l}return null},_s=(t,e)=>t?!!((t.provider===""||t.provider.match(Hi))&&(e&&t.prefix===""||t.prefix.match(Hi))&&t.name.match(Hi)):!1,Ac=Object.freeze({left:0,top:0,width:16,height:16}),js=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),dn=Object.freeze({...Ac,...js}),lo=Object.freeze({...dn,body:"",hidden:!1});function ub(t,e){const i={};!t.hFlip!=!e.hFlip&&(i.hFlip=!0),!t.vFlip!=!e.vFlip&&(i.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(i.rotate=s),i}function kl(t,e){const i=ub(t,e);for(const s in lo)s in js?s in t&&!(s in i)&&(i[s]=js[s]):s in e?i[s]=e[s]:s in t&&(i[s]=t[s]);return i}function hb(t,e){const i=t.icons,s=t.aliases||Object.create(null),n=Object.create(null);function o(r){if(i[r])return n[r]=[];if(!(r in n)){n[r]=null;const l=s[r]&&s[r].parent,a=l&&o(l);a&&(n[r]=[l].concat(a))}return n[r]}return(e||Object.keys(i).concat(Object.keys(s))).forEach(o),n}function fb(t,e,i){const s=t.icons,n=t.aliases||Object.create(null);let o={};function r(l){o=kl(s[l]||n[l],o)}return r(e),i.forEach(r),kl(t,o)}function _c(t,e){const i=[];if(typeof t!="object"||typeof t.icons!="object")return i;t.not_found instanceof Array&&t.not_found.forEach(n=>{e(n,null),i.push(n)});const s=hb(t);for(const n in s){const o=s[n];o&&(e(n,fb(t,n,o)),i.push(n))}return i}const pb={provider:"",aliases:{},not_found:{},...Ac};function Nn(t,e){for(const i in e)if(i in t&&typeof t[i]!=typeof e[i])return!1;return!0}function Ec(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!Nn(t,pb))return null;const i=e.icons;for(const n in i){const o=i[n];if(!n.match(Hi)||typeof o.body!="string"||!Nn(o,lo))return null}const s=e.aliases||Object.create(null);for(const n in s){const o=s[n],r=o.parent;if(!n.match(Hi)||typeof r!="string"||!i[r]&&!s[r]||!Nn(o,lo))return null}return e}const Il=Object.create(null);function gb(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Nt(t,e){const i=Il[t]||(Il[t]=Object.create(null));return i[e]||(i[e]=gb(t,e))}function er(t,e){return Ec(e)?_c(e,(i,s)=>{s?t.icons[i]=s:t.missing.add(i)}):[]}function bb(t,e,i){try{if(typeof i.body=="string")return t.icons[e]={...i},!0}catch{}return!1}let Xi=!1;function Rc(t){return typeof t=="boolean"&&(Xi=t),Xi}function mb(t){const e=typeof t=="string"?cn(t,!0,Xi):t;if(e){const i=Nt(e.provider,e.prefix),s=e.name;return i.icons[s]||(i.missing.has(s)?null:void 0)}}function vb(t,e){const i=cn(t,!0,Xi);if(!i)return!1;const s=Nt(i.provider,i.prefix);return bb(s,i.name,e)}function yb(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),Xi&&!e&&!t.prefix){let n=!1;return Ec(t)&&(t.prefix="",_c(t,(o,r)=>{r&&vb(o,r)&&(n=!0)})),n}const i=t.prefix;if(!_s({provider:e,prefix:i,name:"a"}))return!1;const s=Nt(e,i);return!!er(s,t)}const Dc=Object.freeze({width:null,height:null}),Pc=Object.freeze({...Dc,...js}),xb=/(-?[0-9.]*[0-9]+[0-9.]*)/g,wb=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function Tl(t,e,i){if(e===1)return t;if(i=i||100,typeof t=="number")return Math.ceil(t*e*i)/i;if(typeof t!="string")return t;const s=t.split(xb);if(s===null||!s.length)return t;const n=[];let o=s.shift(),r=wb.test(o);for(;;){if(r){const l=parseFloat(o);isNaN(l)?n.push(o):n.push(Math.ceil(l*e*i)/i)}else n.push(o);if(o=s.shift(),o===void 0)return n.join("");r=!r}}function Cb(t,e="defs"){let i="";const s=t.indexOf("<"+e);for(;s>=0;){const n=t.indexOf(">",s),o=t.indexOf("</"+e);if(n===-1||o===-1)break;const r=t.indexOf(">",o);if(r===-1)break;i+=t.slice(n+1,o).trim(),t=t.slice(0,s).trim()+t.slice(r+1)}return{defs:i,content:t}}function $b(t,e){return t?"<defs>"+t+"</defs>"+e:e}function kb(t,e,i){const s=Cb(t);return $b(s.defs,e+s.content+i)}const Ib=t=>t==="unset"||t==="undefined"||t==="none";function Tb(t,e){const i={...dn,...t},s={...Pc,...e},n={left:i.left,top:i.top,width:i.width,height:i.height};let o=i.body;[i,s].forEach(S=>{const _=[],W=S.hFlip,q=S.vFlip;let M=S.rotate;W?q?M+=2:(_.push("translate("+(n.width+n.left).toString()+" "+(0-n.top).toString()+")"),_.push("scale(-1 1)"),n.top=n.left=0):q&&(_.push("translate("+(0-n.left).toString()+" "+(n.height+n.top).toString()+")"),_.push("scale(1 -1)"),n.top=n.left=0);let z;switch(M<0&&(M-=Math.floor(M/4)*4),M=M%4,M){case 1:z=n.height/2+n.top,_.unshift("rotate(90 "+z.toString()+" "+z.toString()+")");break;case 2:_.unshift("rotate(180 "+(n.width/2+n.left).toString()+" "+(n.height/2+n.top).toString()+")");break;case 3:z=n.width/2+n.left,_.unshift("rotate(-90 "+z.toString()+" "+z.toString()+")");break}M%2===1&&(n.left!==n.top&&(z=n.left,n.left=n.top,n.top=z),n.width!==n.height&&(z=n.width,n.width=n.height,n.height=z)),_.length&&(o=kb(o,'<g transform="'+_.join(" ")+'">',"</g>"))});const r=s.width,l=s.height,a=n.width,c=n.height;let d,h;r===null?(h=l===null?"1em":l==="auto"?c:l,d=Tl(h,a/c)):(d=r==="auto"?a:r,h=l===null?Tl(d,c/a):l==="auto"?c:l);const g={},$=(S,_)=>{Ib(_)||(g[S]=_.toString())};$("width",d),$("height",h);const R=[n.left,n.top,a,c];return g.viewBox=R.join(" "),{attributes:g,viewBox:R,body:o}}const Sb=/\sid="(\S+)"/g,Ob="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let Ab=0;function _b(t,e=Ob){const i=[];let s;for(;s=Sb.exec(t);)i.push(s[1]);if(!i.length)return t;const n="suffix"+(Math.random()*16777216|Date.now()).toString(16);return i.forEach(o=>{const r=typeof e=="function"?e(o):e+(Ab++).toString(),l=o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+l+')([")]|\\.[a-z])',"g"),"$1"+r+n+"$3")}),t=t.replace(new RegExp(n,"g"),""),t}const ao=Object.create(null);function Eb(t,e){ao[t]=e}function co(t){return ao[t]||ao[""]}function tr(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const ir=Object.create(null),Si=["https://api.simplesvg.com","https://api.unisvg.com"],Es=[];for(;Si.length>0;)Si.length===1||Math.random()>.5?Es.push(Si.shift()):Es.push(Si.pop());ir[""]=tr({resources:["https://api.iconify.design"].concat(Es)});function Rb(t,e){const i=tr(e);return i===null?!1:(ir[t]=i,!0)}function sr(t){return ir[t]}const Db=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let Sl=Db();function Pb(t,e){const i=sr(t);if(!i)return 0;let s;if(!i.maxURL)s=0;else{let n=0;i.resources.forEach(r=>{n=Math.max(n,r.length)});const o=e+".json?icons=";s=i.maxURL-n-i.path.length-o.length}return s}function Fb(t){return t===404}const Bb=(t,e,i)=>{const s=[],n=Pb(t,e),o="icons";let r={type:o,provider:t,prefix:e,icons:[]},l=0;return i.forEach((a,c)=>{l+=a.length+1,l>=n&&c>0&&(s.push(r),r={type:o,provider:t,prefix:e,icons:[]},l=a.length),r.icons.push(a)}),s.push(r),s};function Lb(t){if(typeof t=="string"){const e=sr(t);if(e)return e.path}return"/"}const Mb=(t,e,i)=>{if(!Sl){i("abort",424);return}let s=Lb(e.provider);switch(e.type){case"icons":{const o=e.prefix,l=e.icons.join(","),a=new URLSearchParams({icons:l});s+=o+".json?"+a.toString();break}case"custom":{const o=e.uri;s+=o.slice(0,1)==="/"?o.slice(1):o;break}default:i("abort",400);return}let n=503;Sl(t+s).then(o=>{const r=o.status;if(r!==200){setTimeout(()=>{i(Fb(r)?"abort":"next",r)});return}return n=501,o.json()}).then(o=>{if(typeof o!="object"||o===null){setTimeout(()=>{o===404?i("abort",o):i("next",n)});return}setTimeout(()=>{i("success",o)})}).catch(()=>{i("next",n)})},Hb={prepare:Bb,send:Mb};function Vb(t){const e={loaded:[],missing:[],pending:[]},i=Object.create(null);t.sort((n,o)=>n.provider!==o.provider?n.provider.localeCompare(o.provider):n.prefix!==o.prefix?n.prefix.localeCompare(o.prefix):n.name.localeCompare(o.name));let s={provider:"",prefix:"",name:""};return t.forEach(n=>{if(s.name===n.name&&s.prefix===n.prefix&&s.provider===n.provider)return;s=n;const o=n.provider,r=n.prefix,l=n.name,a=i[o]||(i[o]=Object.create(null)),c=a[r]||(a[r]=Nt(o,r));let d;l in c.icons?d=e.loaded:r===""||c.missing.has(l)?d=e.missing:d=e.pending;const h={provider:o,prefix:r,name:l};d.push(h)}),e}function Fc(t,e){t.forEach(i=>{const s=i.loaderCallbacks;s&&(i.loaderCallbacks=s.filter(n=>n.id!==e))})}function Nb(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let i=!1;const s=t.provider,n=t.prefix;e.forEach(o=>{const r=o.icons,l=r.pending.length;r.pending=r.pending.filter(a=>{if(a.prefix!==n)return!0;const c=a.name;if(t.icons[c])r.loaded.push({provider:s,prefix:n,name:c});else if(t.missing.has(c))r.missing.push({provider:s,prefix:n,name:c});else return i=!0,!0;return!1}),r.pending.length!==l&&(i||Fc([t],o.id),o.callback(r.loaded.slice(0),r.missing.slice(0),r.pending.slice(0),o.abort))})}))}let jb=0;function zb(t,e,i){const s=jb++,n=Fc.bind(null,i,s);if(!e.pending.length)return n;const o={id:s,icons:e,callback:t,abort:n};return i.forEach(r=>{(r.loaderCallbacks||(r.loaderCallbacks=[])).push(o)}),n}function Ub(t,e=!0,i=!1){const s=[];return t.forEach(n=>{const o=typeof n=="string"?cn(n,e,i):n;o&&s.push(o)}),s}var qb={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Gb(t,e,i,s){const n=t.resources.length,o=t.random?Math.floor(Math.random()*n):t.index;let r;if(t.random){let E=t.resources.slice(0);for(r=[];E.length>1;){const re=Math.floor(Math.random()*E.length);r.push(E[re]),E=E.slice(0,re).concat(E.slice(re+1))}r=r.concat(E)}else r=t.resources.slice(o).concat(t.resources.slice(0,o));const l=Date.now();let a="pending",c=0,d,h=null,g=[],$=[];typeof s=="function"&&$.push(s);function R(){h&&(clearTimeout(h),h=null)}function S(){a==="pending"&&(a="aborted"),R(),g.forEach(E=>{E.status==="pending"&&(E.status="aborted")}),g=[]}function _(E,re){re&&($=[]),typeof E=="function"&&$.push(E)}function W(){return{startTime:l,payload:e,status:a,queriesSent:c,queriesPending:g.length,subscribe:_,abort:S}}function q(){a="failed",$.forEach(E=>{E(void 0,d)})}function M(){g.forEach(E=>{E.status==="pending"&&(E.status="aborted")}),g=[]}function z(E,re,pe){const ut=re!=="success";switch(g=g.filter(we=>we!==E),a){case"pending":break;case"failed":if(ut||!t.dataAfterTimeout)return;break;default:return}if(re==="abort"){d=pe,q();return}if(ut){d=pe,g.length||(r.length?de():q());return}if(R(),M(),!t.random){const we=t.resources.indexOf(E.resource);we!==-1&&we!==t.index&&(t.index=we)}a="completed",$.forEach(we=>{we(pe)})}function de(){if(a!=="pending")return;R();const E=r.shift();if(E===void 0){if(g.length){h=setTimeout(()=>{R(),a==="pending"&&(M(),q())},t.timeout);return}q();return}const re={status:"pending",resource:E,callback:(pe,ut)=>{z(re,pe,ut)}};g.push(re),c++,h=setTimeout(de,t.rotate),i(E,e,re.callback)}return setTimeout(de),W}function Bc(t){const e={...qb,...t};let i=[];function s(){i=i.filter(l=>l().status==="pending")}function n(l,a,c){const d=Gb(e,l,a,(h,g)=>{s(),c&&c(h,g)});return i.push(d),d}function o(l){return i.find(a=>l(a))||null}return{query:n,find:o,setIndex:l=>{e.index=l},getIndex:()=>e.index,cleanup:s}}function Ol(){}const jn=Object.create(null);function Wb(t){if(!jn[t]){const e=sr(t);if(!e)return;const i=Bc(e),s={config:e,redundancy:i};jn[t]=s}return jn[t]}function Qb(t,e,i){let s,n;if(typeof t=="string"){const o=co(t);if(!o)return i(void 0,424),Ol;n=o.send;const r=Wb(t);r&&(s=r.redundancy)}else{const o=tr(t);if(o){s=Bc(o);const r=t.resources?t.resources[0]:"",l=co(r);l&&(n=l.send)}}return!s||!n?(i(void 0,424),Ol):s.query(e,n,i)().abort}const Al="iconify2",Zi="iconify",Lc=Zi+"-count",_l=Zi+"-version",Mc=36e5,Jb=168,Yb=50;function uo(t,e){try{return t.getItem(e)}catch{}}function nr(t,e,i){try{return t.setItem(e,i),!0}catch{}}function El(t,e){try{t.removeItem(e)}catch{}}function ho(t,e){return nr(t,Lc,e.toString())}function fo(t){return parseInt(uo(t,Lc))||0}const un={local:!0,session:!0},Hc={local:new Set,session:new Set};let or=!1;function Xb(t){or=t}let ws=typeof window>"u"?{}:window;function Vc(t){const e=t+"Storage";try{if(ws&&ws[e]&&typeof ws[e].length=="number")return ws[e]}catch{}un[t]=!1}function Nc(t,e){const i=Vc(t);if(!i)return;const s=uo(i,_l);if(s!==Al){if(s){const l=fo(i);for(let a=0;a<l;a++)El(i,Zi+a.toString())}nr(i,_l,Al),ho(i,0);return}const n=Math.floor(Date.now()/Mc)-Jb,o=l=>{const a=Zi+l.toString(),c=uo(i,a);if(typeof c=="string"){try{const d=JSON.parse(c);if(typeof d=="object"&&typeof d.cached=="number"&&d.cached>n&&typeof d.provider=="string"&&typeof d.data=="object"&&typeof d.data.prefix=="string"&&e(d,l))return!0}catch{}El(i,a)}};let r=fo(i);for(let l=r-1;l>=0;l--)o(l)||(l===r-1?(r--,ho(i,r)):Hc[t].add(l))}function jc(){if(!or){Xb(!0);for(const t in un)Nc(t,e=>{const i=e.data,s=e.provider,n=i.prefix,o=Nt(s,n);if(!er(o,i).length)return!1;const r=i.lastModified||-1;return o.lastModifiedCached=o.lastModifiedCached?Math.min(o.lastModifiedCached,r):r,!0})}}function Zb(t,e){const i=t.lastModifiedCached;if(i&&i>=e)return i===e;if(t.lastModifiedCached=e,i)for(const s in un)Nc(s,n=>{const o=n.data;return n.provider!==t.provider||o.prefix!==t.prefix||o.lastModified===e});return!0}function Kb(t,e){or||jc();function i(s){let n;if(!un[s]||!(n=Vc(s)))return;const o=Hc[s];let r;if(o.size)o.delete(r=Array.from(o).shift());else if(r=fo(n),r>=Yb||!ho(n,r+1))return;const l={cached:Math.floor(Date.now()/Mc),provider:t.provider,data:e};return nr(n,Zi+r.toString(),JSON.stringify(l))}e.lastModified&&!Zb(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),i("local")||i("session"))}function Rl(){}function em(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Nb(t)}))}function tm(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:i,prefix:s}=t,n=t.iconsToLoad;delete t.iconsToLoad;let o;if(!n||!(o=co(i)))return;o.prepare(i,s,n).forEach(l=>{Qb(i,l,a=>{if(typeof a!="object")l.icons.forEach(c=>{t.missing.add(c)});else try{const c=er(t,a);if(!c.length)return;const d=t.pendingIcons;d&&c.forEach(h=>{d.delete(h)}),Kb(t,a)}catch(c){console.error(c)}em(t)})})}))}const im=(t,e)=>{const i=Ub(t,!0,Rc()),s=Vb(i);if(!s.pending.length){let a=!0;return e&&setTimeout(()=>{a&&e(s.loaded,s.missing,s.pending,Rl)}),()=>{a=!1}}const n=Object.create(null),o=[];let r,l;return s.pending.forEach(a=>{const{provider:c,prefix:d}=a;if(d===l&&c===r)return;r=c,l=d,o.push(Nt(c,d));const h=n[c]||(n[c]=Object.create(null));h[d]||(h[d]=[])}),s.pending.forEach(a=>{const{provider:c,prefix:d,name:h}=a,g=Nt(c,d),$=g.pendingIcons||(g.pendingIcons=new Set);$.has(h)||($.add(h),n[c][d].push(h))}),o.forEach(a=>{const{provider:c,prefix:d}=a;n[c][d].length&&tm(a,n[c][d])}),e?zb(e,s,o):Rl};function sm(t,e){const i={...t};for(const s in e){const n=e[s],o=typeof n;s in Dc?(n===null||n&&(o==="string"||o==="number"))&&(i[s]=n):o===typeof i[s]&&(i[s]=s==="rotate"?n%4:n)}return i}const nm=/[\s,]+/;function om(t,e){e.split(nm).forEach(i=>{switch(i.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function rm(t,e=0){const i=t.replace(/^-?[0-9.]*/,"");function s(n){for(;n<0;)n+=4;return n%4}if(i===""){const n=parseInt(t);return isNaN(n)?0:s(n)}else if(i!==t){let n=0;switch(i){case"%":n=25;break;case"deg":n=90}if(n){let o=parseFloat(t.slice(0,t.length-i.length));return isNaN(o)?0:(o=o/n,o%1===0?s(o):0)}}return e}function lm(t,e){let i=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)i+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+i+">"+t+"</svg>"}function am(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function cm(t){return"data:image/svg+xml,"+am(t)}function dm(t){return'url("'+cm(t)+'")'}const Dl={...Pc,inline:!1},um={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},hm={display:"inline-block"},po={backgroundColor:"currentColor"},zc={backgroundColor:"transparent"},Pl={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Fl={webkitMask:po,mask:po,background:zc};for(const t in Fl){const e=Fl[t];for(const i in Pl)e[t+i]=Pl[i]}const Rs={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Rs[t+"-flip"]=e,Rs[t.slice(0,1)+"-flip"]=e,Rs[t+"Flip"]=e});function Bl(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Ll=(t,e)=>{const i=sm(Dl,e),s={...um},n=e.mode||"svg",o={},r=e.style,l=typeof r=="object"&&!(r instanceof Array)?r:{};for(let S in e){const _=e[S];if(_!==void 0)switch(S){case"icon":case"style":case"onLoad":case"mode":break;case"inline":case"hFlip":case"vFlip":i[S]=_===!0||_==="true"||_===1;break;case"flip":typeof _=="string"&&om(i,_);break;case"color":o.color=_;break;case"rotate":typeof _=="string"?i[S]=rm(_):typeof _=="number"&&(i[S]=_);break;case"ariaHidden":case"aria-hidden":_!==!0&&_!=="true"&&delete s["aria-hidden"];break;default:{const W=Rs[S];W?(_===!0||_==="true"||_===1)&&(i[W]=!0):Dl[S]===void 0&&(s[S]=_)}}}const a=Tb(t,i),c=a.attributes;if(i.inline&&(o.verticalAlign="-0.125em"),n==="svg"){s.style={...o,...l},Object.assign(s,c);let S=0,_=e.id;return typeof _=="string"&&(_=_.replace(/-/g,"_")),s.innerHTML=_b(a.body,_?()=>_+"ID"+S++:"iconifyVue"),Fr("svg",s)}const{body:d,width:h,height:g}=t,$=n==="mask"||(n==="bg"?!1:d.indexOf("currentColor")!==-1),R=lm(d,{...c,width:h+"",height:g+""});return s.style={...o,"--svg":dm(R),width:Bl(c.width),height:Bl(c.height),...hm,...$?po:zc,...l},Fr("span",s)};Rc(!0);Eb("",Hb);if(typeof document<"u"&&typeof window<"u"){jc();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,i="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!yb(s))&&console.error(i)}catch{console.error(i)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let i in e){const s="IconifyProviders["+i+"] is invalid.";try{const n=e[i];if(typeof n!="object"||!n||n.resources===void 0)continue;Rb(i,n)||console.error(s)}catch{console.error(s)}}}}const fm={...dn,body:""},Uc=Ys({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let i;if(typeof t!="string"||(i=cn(t,!1,!0))===null)return this.abortLoading(),null;const s=mb(i);if(!s)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",s!==null&&(this._loadingIcon={name:t,abort:im([i],()=>{this.counter++})})),null;this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t));const n=["iconify"];return i.prefix!==""&&n.push("iconify--"+i.prefix),i.provider!==""&&n.push("iconify--"+i.provider),{data:s,classes:n}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad):null;if(!e)return Ll(fm,t);let i=t;return e.classes&&(i={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Ll({...dn,...e.data},i)}}),Lt=_o([]);function go(){Oc.setState(Lt.value)}const pm={class:"w-full flex justify-center gap-3"},gm=["value"],bm=Ys({__name:"InputBox",setup(t){const e=_o("");function i(){if(e.value.length===0)return;const s={id:db(),isChecked:!1,text:e.value};Lt.value.push(s),go(),e.value=""}return(s,n)=>(Pi(),Bs("div",pm,[yt("vscode-text-field",{value:e.value,onChange:n[0]||(n[0]=o=>e.value=o.target.value),placeholder:"Enter text here",className:"w-1/2"},null,40,gm),yt("vscode-button",{onClick:i},[Te(Ws(Uc),{icon:"mdi:plus"})])]))}}),mm={class:"w-96 mx-auto max-h-16 flex justify-between items-center gap-3 px-3 mb-1 py-2"},vm=["checked"],ym={class:"flex-1 overflow-y-auto py-1"},xm=Ys({__name:"TodoItem",props:{item:{}},setup(t){const{item:e}=t,i=_o(e.isChecked);function s(){i.value=!i.value;const o=Lt.value.map(r=>r.id===e.id?{...r,isChecked:!r.isChecked}:r);Lt.value=o,go()}function n(){Lt.value=Lt.value.filter(o=>o.id!==e.id),go()}return(o,r)=>(Pi(),Bs("li",mm,[yt("vscode-checkbox",{checked:i.value,onChange:s},null,40,vm),yt("span",ym,ld(o.item.text),1),yt("vscode-button",{onClick:n},[Te(Ws(Uc),{icon:"mdi:trash-can"})])]))}}),wm={class:"h-screen flex flex-col items-center p-10 gap-5"},Cm={class:"max-h-96 overflow-y-auto py-2 px-2"},$m=Ys({__name:"App",setup(t){return _p().register(lb),ya(()=>{Oc.postMessage({command:"ready"})}),(e,i)=>(Pi(),Bs("div",wm,[Te(bm),yt("ul",Cm,[(Pi(!0),Bs(et,null,uu(Ws(Lt),s=>(Pi(),Ru(xm,{key:s.id,item:s},null,8,["item"]))),128))])]))}});mh($m).mount("#app");
