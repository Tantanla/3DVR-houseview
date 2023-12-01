(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();function oc(i,t){const e=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)e[n[r]]=!0;return t?r=>!!e[r.toLowerCase()]:r=>!!e[r]}const te={},Vr=[],bn=()=>{},Yp=()=>!1,Kp=/^on[^a-z]/,aa=i=>Kp.test(i),ac=i=>i.startsWith("onUpdate:"),Ie=Object.assign,lc=(i,t)=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)},jp=Object.prototype.hasOwnProperty,qt=(i,t)=>jp.call(i,t),Dt=Array.isArray,Wr=i=>ca(i)==="[object Map]",_h=i=>ca(i)==="[object Set]",Ht=i=>typeof i=="function",Se=i=>typeof i=="string",la=i=>typeof i=="symbol",le=i=>i!==null&&typeof i=="object",gh=i=>(le(i)||Ht(i))&&Ht(i.then)&&Ht(i.catch),vh=Object.prototype.toString,ca=i=>vh.call(i),$p=i=>ca(i).slice(8,-1),xh=i=>ca(i)==="[object Object]",cc=i=>Se(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Fo=oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},Zp=/-(\w)/g,Jr=ua(i=>i.replace(Zp,(t,e)=>e?e.toUpperCase():"")),Jp=/\B([A-Z])/g,fs=ua(i=>i.replace(Jp,"-$1").toLowerCase()),Mh=ua(i=>i.charAt(0).toUpperCase()+i.slice(1)),ba=ua(i=>i?`on${Mh(i)}`:""),ur=(i,t)=>!Object.is(i,t),wa=(i,t)=>{for(let e=0;e<i.length;e++)i[e](t)},qo=(i,t,e)=>{Object.defineProperty(i,t,{configurable:!0,enumerable:!1,value:e})},Qp=i=>{const t=parseFloat(i);return isNaN(t)?i:t};let iu;const El=()=>iu||(iu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function uc(i){if(Dt(i)){const t={};for(let e=0;e<i.length;e++){const n=i[e],r=Se(n)?im(n):uc(n);if(r)for(const s in r)t[s]=r[s]}return t}else if(Se(i)||le(i))return i}const tm=/;(?![^(]*\))/g,em=/:([^]+)/,nm=/\/\*[^]*?\*\//g;function im(i){const t={};return i.replace(nm,"").split(tm).forEach(e=>{if(e){const n=e.split(em);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function fc(i){let t="";if(Se(i))t=i;else if(Dt(i))for(let e=0;e<i.length;e++){const n=fc(i[e]);n&&(t+=n+" ")}else if(le(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const rm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sm=oc(rm);function Sh(i){return!!i||i===""}const om=i=>Se(i)?i:i==null?"":Dt(i)||le(i)&&(i.toString===vh||!Ht(i.toString))?JSON.stringify(i,Eh,2):String(i),Eh=(i,t)=>t&&t.__v_isRef?Eh(i,t.value):Wr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[n,r])=>(e[`${n} =>`]=r,e),{})}:_h(t)?{[`Set(${t.size})`]:[...t.values()]}:le(t)&&!Dt(t)&&!xh(t)?String(t):t;let Sn;class am{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Sn,!t&&Sn&&(this.index=(Sn.scopes||(Sn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=Sn;try{return Sn=this,t()}finally{Sn=e}}}on(){Sn=this}off(){Sn=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function lm(i,t=Sn){t&&t.active&&t.effects.push(i)}function cm(){return Sn}const hc=i=>{const t=new Set(i);return t.w=0,t.n=0,t},yh=i=>(i.w&Pi)>0,Ah=i=>(i.n&Pi)>0,um=({deps:i})=>{if(i.length)for(let t=0;t<i.length;t++)i[t].w|=Pi},fm=i=>{const{deps:t}=i;if(t.length){let e=0;for(let n=0;n<t.length;n++){const r=t[n];yh(r)&&!Ah(r)?r.delete(i):t[e++]=r,r.w&=~Pi,r.n&=~Pi}t.length=e}},yl=new WeakMap;let ws=0,Pi=1;const Al=30;let En;const Qi=Symbol(""),Tl=Symbol("");class dc{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,lm(this,n)}run(){if(!this.active)return this.fn();let t=En,e=yi;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=En,En=this,yi=!0,Pi=1<<++ws,ws<=Al?um(this):ru(this),this.fn()}finally{ws<=Al&&fm(this),Pi=1<<--ws,En=this.parent,yi=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){En===this?this.deferStop=!0:this.active&&(ru(this),this.onStop&&this.onStop(),this.active=!1)}}function ru(i){const{deps:t}=i;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(i);t.length=0}}let yi=!0;const Th=[];function hs(){Th.push(yi),yi=!1}function ds(){const i=Th.pop();yi=i===void 0?!0:i}function $e(i,t,e){if(yi&&En){let n=yl.get(i);n||yl.set(i,n=new Map);let r=n.get(e);r||n.set(e,r=hc()),bh(r)}}function bh(i,t){let e=!1;ws<=Al?Ah(i)||(i.n|=Pi,e=!yh(i)):e=!i.has(En),e&&(i.add(En),En.deps.push(i))}function ii(i,t,e,n,r,s){const o=yl.get(i);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(e==="length"&&Dt(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||!la(u)&&u>=l)&&a.push(c)})}else switch(e!==void 0&&a.push(o.get(e)),t){case"add":Dt(i)?cc(e)&&a.push(o.get("length")):(a.push(o.get(Qi)),Wr(i)&&a.push(o.get(Tl)));break;case"delete":Dt(i)||(a.push(o.get(Qi)),Wr(i)&&a.push(o.get(Tl)));break;case"set":Wr(i)&&a.push(o.get(Qi));break}if(a.length===1)a[0]&&bl(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);bl(hc(l))}}function bl(i,t){const e=Dt(i)?i:[...i];for(const n of e)n.computed&&su(n);for(const n of e)n.computed||su(n)}function su(i,t){(i!==En||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const hm=oc("__proto__,__v_isRef,__isVue"),wh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(la)),ou=dm();function dm(){const i={};return["includes","indexOf","lastIndexOf"].forEach(t=>{i[t]=function(...e){const n=Kt(this);for(let s=0,o=this.length;s<o;s++)$e(n,"get",s+"");const r=n[t](...e);return r===-1||r===!1?n[t](...e.map(Kt)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{i[t]=function(...e){hs();const n=Kt(this)[t].apply(this,e);return ds(),n}}),i}function pm(i){const t=Kt(this);return $e(t,"has",i),t.hasOwnProperty(i)}class Rh{constructor(t=!1,e=!1){this._isReadonly=t,this._shallow=e}get(t,e,n){const r=this._isReadonly,s=this._shallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return s;if(e==="__v_raw"&&n===(r?s?wm:Dh:s?Lh:Ph).get(t))return t;const o=Dt(t);if(!r){if(o&&qt(ou,e))return Reflect.get(ou,e,n);if(e==="hasOwnProperty")return pm}const a=Reflect.get(t,e,n);return(la(e)?wh.has(e):hm(e))||(r||$e(t,"get",e),s)?a:Le(a)?o&&cc(e)?a:a.value:le(a)?r?Uh(a):_c(a):a}}class Ch extends Rh{constructor(t=!1){super(!1,t)}set(t,e,n,r){let s=t[e];if(Qr(s)&&Le(s)&&!Le(n))return!1;if(!this._shallow&&(!Yo(n)&&!Qr(n)&&(s=Kt(s),n=Kt(n)),!Dt(t)&&Le(s)&&!Le(n)))return s.value=n,!0;const o=Dt(t)&&cc(e)?Number(e)<t.length:qt(t,e),a=Reflect.set(t,e,n,r);return t===Kt(r)&&(o?ur(n,s)&&ii(t,"set",e,n):ii(t,"add",e,n)),a}deleteProperty(t,e){const n=qt(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&ii(t,"delete",e,void 0),r}has(t,e){const n=Reflect.has(t,e);return(!la(e)||!wh.has(e))&&$e(t,"has",e),n}ownKeys(t){return $e(t,"iterate",Dt(t)?"length":Qi),Reflect.ownKeys(t)}}class mm extends Rh{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const _m=new Ch,gm=new mm,vm=new Ch(!0),pc=i=>i,fa=i=>Reflect.getPrototypeOf(i);function so(i,t,e=!1,n=!1){i=i.__v_raw;const r=Kt(i),s=Kt(t);e||(ur(t,s)&&$e(r,"get",t),$e(r,"get",s));const{has:o}=fa(r),a=n?pc:e?vc:Bs;if(o.call(r,t))return a(i.get(t));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(t)}function oo(i,t=!1){const e=this.__v_raw,n=Kt(e),r=Kt(i);return t||(ur(i,r)&&$e(n,"has",i),$e(n,"has",r)),i===r?e.has(i):e.has(i)||e.has(r)}function ao(i,t=!1){return i=i.__v_raw,!t&&$e(Kt(i),"iterate",Qi),Reflect.get(i,"size",i)}function au(i){i=Kt(i);const t=Kt(this);return fa(t).has.call(t,i)||(t.add(i),ii(t,"add",i,i)),this}function lu(i,t){t=Kt(t);const e=Kt(this),{has:n,get:r}=fa(e);let s=n.call(e,i);s||(i=Kt(i),s=n.call(e,i));const o=r.call(e,i);return e.set(i,t),s?ur(t,o)&&ii(e,"set",i,t):ii(e,"add",i,t),this}function cu(i){const t=Kt(this),{has:e,get:n}=fa(t);let r=e.call(t,i);r||(i=Kt(i),r=e.call(t,i)),n&&n.call(t,i);const s=t.delete(i);return r&&ii(t,"delete",i,void 0),s}function uu(){const i=Kt(this),t=i.size!==0,e=i.clear();return t&&ii(i,"clear",void 0,void 0),e}function lo(i,t){return function(n,r){const s=this,o=s.__v_raw,a=Kt(o),l=t?pc:i?vc:Bs;return!i&&$e(a,"iterate",Qi),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function co(i,t,e){return function(...n){const r=this.__v_raw,s=Kt(r),o=Wr(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=e?pc:t?vc:Bs;return!t&&$e(s,"iterate",l?Tl:Qi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ci(i){return function(...t){return i==="delete"?!1:this}}function xm(){const i={get(s){return so(this,s)},get size(){return ao(this)},has:oo,add:au,set:lu,delete:cu,clear:uu,forEach:lo(!1,!1)},t={get(s){return so(this,s,!1,!0)},get size(){return ao(this)},has:oo,add:au,set:lu,delete:cu,clear:uu,forEach:lo(!1,!0)},e={get(s){return so(this,s,!0)},get size(){return ao(this,!0)},has(s){return oo.call(this,s,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:lo(!0,!1)},n={get(s){return so(this,s,!0,!0)},get size(){return ao(this,!0)},has(s){return oo.call(this,s,!0)},add:ci("add"),set:ci("set"),delete:ci("delete"),clear:ci("clear"),forEach:lo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=co(s,!1,!1),e[s]=co(s,!0,!1),t[s]=co(s,!1,!0),n[s]=co(s,!0,!0)}),[i,e,t,n]}const[Mm,Sm,Em,ym]=xm();function mc(i,t){const e=t?i?ym:Em:i?Sm:Mm;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(qt(e,r)&&r in n?e:n,r,s)}const Am={get:mc(!1,!1)},Tm={get:mc(!1,!0)},bm={get:mc(!0,!1)},Ph=new WeakMap,Lh=new WeakMap,Dh=new WeakMap,wm=new WeakMap;function Rm(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cm(i){return i.__v_skip||!Object.isExtensible(i)?0:Rm($p(i))}function _c(i){return Qr(i)?i:gc(i,!1,_m,Am,Ph)}function Pm(i){return gc(i,!1,vm,Tm,Lh)}function Uh(i){return gc(i,!0,gm,bm,Dh)}function gc(i,t,e,n,r){if(!le(i)||i.__v_raw&&!(t&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=Cm(i);if(o===0)return i;const a=new Proxy(i,o===2?n:e);return r.set(i,a),a}function Xr(i){return Qr(i)?Xr(i.__v_raw):!!(i&&i.__v_isReactive)}function Qr(i){return!!(i&&i.__v_isReadonly)}function Yo(i){return!!(i&&i.__v_isShallow)}function Ih(i){return Xr(i)||Qr(i)}function Kt(i){const t=i&&i.__v_raw;return t?Kt(t):i}function Oh(i){return qo(i,"__v_skip",!0),i}const Bs=i=>le(i)?_c(i):i,vc=i=>le(i)?Uh(i):i;function Nh(i){yi&&En&&(i=Kt(i),bh(i.dep||(i.dep=hc())))}function Fh(i,t){i=Kt(i);const e=i.dep;e&&bl(e)}function Le(i){return!!(i&&i.__v_isRef===!0)}function Ra(i){return Lm(i,!1)}function Lm(i,t){return Le(i)?i:new Dm(i,t)}class Dm{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Kt(t),this._value=e?t:Bs(t)}get value(){return Nh(this),this._value}set value(t){const e=this.__v_isShallow||Yo(t)||Qr(t);t=e?t:Kt(t),ur(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Bs(t),Fh(this))}}function Um(i){return Le(i)?i.value:i}const Im={get:(i,t,e)=>Um(Reflect.get(i,t,e)),set:(i,t,e,n)=>{const r=i[t];return Le(r)&&!Le(e)?(r.value=e,!0):Reflect.set(i,t,e,n)}};function Bh(i){return Xr(i)?i:new Proxy(i,Im)}class Om{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new dc(t,()=>{this._dirty||(this._dirty=!0,Fh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const t=Kt(this);return Nh(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Nm(i,t,e=!1){let n,r;const s=Ht(i);return s?(n=i,r=bn):(n=i.get,r=i.set),new Om(n,r,s||!r,e)}function Ai(i,t,e,n){let r;try{r=n?i(...n):i()}catch(s){ha(s,t,e)}return r}function wn(i,t,e,n){if(Ht(i)){const s=Ai(i,t,e,n);return s&&gh(s)&&s.catch(o=>{ha(o,t,e)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(wn(i[s],t,e,n));return r}function ha(i,t,e,n=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=e;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){Ai(l,null,10,[i,o,a]);return}}Fm(i,e,r,n)}function Fm(i,t,e,n=!0){console.error(i)}let zs=!1,wl=!1;const Re=[];let Nn=0;const qr=[];let Zn=null,ji=0;const zh=Promise.resolve();let xc=null;function Bm(i){const t=xc||zh;return i?t.then(this?i.bind(this):i):t}function zm(i){let t=Nn+1,e=Re.length;for(;t<e;){const n=t+e>>>1,r=Re[n],s=Hs(r);s<i||s===i&&r.pre?t=n+1:e=n}return t}function Mc(i){(!Re.length||!Re.includes(i,zs&&i.allowRecurse?Nn+1:Nn))&&(i.id==null?Re.push(i):Re.splice(zm(i.id),0,i),Hh())}function Hh(){!zs&&!wl&&(wl=!0,xc=zh.then(kh))}function Hm(i){const t=Re.indexOf(i);t>Nn&&Re.splice(t,1)}function Gm(i){Dt(i)?qr.push(...i):(!Zn||!Zn.includes(i,i.allowRecurse?ji+1:ji))&&qr.push(i),Hh()}function fu(i,t=zs?Nn+1:0){for(;t<Re.length;t++){const e=Re[t];e&&e.pre&&(Re.splice(t,1),t--,e())}}function Gh(i){if(qr.length){const t=[...new Set(qr)];if(qr.length=0,Zn){Zn.push(...t);return}for(Zn=t,Zn.sort((e,n)=>Hs(e)-Hs(n)),ji=0;ji<Zn.length;ji++)Zn[ji]();Zn=null,ji=0}}const Hs=i=>i.id==null?1/0:i.id,km=(i,t)=>{const e=Hs(i)-Hs(t);if(e===0){if(i.pre&&!t.pre)return-1;if(t.pre&&!i.pre)return 1}return e};function kh(i){wl=!1,zs=!0,Re.sort(km);const t=bn;try{for(Nn=0;Nn<Re.length;Nn++){const e=Re[Nn];e&&e.active!==!1&&Ai(e,null,14)}}finally{Nn=0,Re.length=0,Gh(),zs=!1,xc=null,(Re.length||qr.length)&&kh()}}function Vm(i,t,...e){if(i.isUnmounted)return;const n=i.vnode.props||te;let r=e;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||te;h&&(r=e.map(p=>Se(p)?p.trim():p)),f&&(r=e.map(Qp))}let a,l=n[a=ba(t)]||n[a=ba(Jr(t))];!l&&s&&(l=n[a=ba(fs(t))]),l&&wn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,wn(c,i,6,r)}}function Vh(i,t,e=!1){const n=t.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Ht(i)){const l=c=>{const u=Vh(c,t,!0);u&&(a=!0,Ie(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(le(i)&&n.set(i,null),null):(Dt(s)?s.forEach(l=>o[l]=null):Ie(o,s),le(i)&&n.set(i,o),o)}function da(i,t){return!i||!aa(t)?!1:(t=t.slice(2).replace(/Once$/,""),qt(i,t[0].toLowerCase()+t.slice(1))||qt(i,fs(t))||qt(i,t))}let Bn=null,Wh=null;function Ko(i){const t=Bn;return Bn=i,Wh=i&&i.type.__scopeId||null,t}function Wm(i,t=Bn,e){if(!t||i._n)return i;const n=(...r)=>{n._d&&Su(-1);const s=Ko(t);let o;try{o=i(...r)}finally{Ko(s),n._d&&Su(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Ca(i){const{type:t,vnode:e,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:p,ctx:g,inheritAttrs:_}=i;let m,d;const E=Ko(i);try{if(e.shapeFlag&4){const y=r||n;m=In(u.call(y,y,f,s,p,h,g)),d=l}else{const y=t;m=In(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),d=t.props?l:Xm(l)}}catch(y){Us.length=0,ha(y,i,1),m=ri(fr)}let v=m;if(d&&_!==!1){const y=Object.keys(d),{shapeFlag:T}=v;y.length&&T&7&&(o&&y.some(ac)&&(d=qm(d,o)),v=ts(v,d))}return e.dirs&&(v=ts(v),v.dirs=v.dirs?v.dirs.concat(e.dirs):e.dirs),e.transition&&(v.transition=e.transition),m=v,Ko(E),m}const Xm=i=>{let t;for(const e in i)(e==="class"||e==="style"||aa(e))&&((t||(t={}))[e]=i[e]);return t},qm=(i,t)=>{const e={};for(const n in i)(!ac(n)||!(n.slice(9)in t))&&(e[n]=i[n]);return e};function Ym(i,t,e){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?hu(n,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!da(c,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?hu(n,o,c):!0:!!o;return!1}function hu(i,t,e){const n=Object.keys(t);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(t[s]!==i[s]&&!da(e,s))return!0}return!1}function Km({vnode:i,parent:t},e){for(;t&&t.subTree===i;)(i=t.vnode).el=e,t=t.parent}const jm=Symbol.for("v-ndc"),$m=i=>i.__isSuspense;function Zm(i,t){t&&t.pendingBranch?Dt(i)?t.effects.push(...i):t.effects.push(i):Gm(i)}const uo={};function Pa(i,t,e){return Xh(i,t,e)}function Xh(i,t,{immediate:e,deep:n,flush:r,onTrack:s,onTrigger:o}=te){var a;const l=cm()===((a=Ce)==null?void 0:a.scope)?Ce:null;let c,u=!1,f=!1;if(Le(i)?(c=()=>i.value,u=Yo(i)):Xr(i)?(c=()=>i,n=!0):Dt(i)?(f=!0,u=i.some(y=>Xr(y)||Yo(y)),c=()=>i.map(y=>{if(Le(y))return y.value;if(Xr(y))return zr(y);if(Ht(y))return Ai(y,l,2)})):Ht(i)?t?c=()=>Ai(i,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),wn(i,l,3,[p])}:c=bn,t&&n){const y=c;c=()=>zr(y())}let h,p=y=>{h=E.onStop=()=>{Ai(y,l,4)}},g;if(ks)if(p=bn,t?e&&wn(t,l,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const y=q_();g=y.__watcherHandles||(y.__watcherHandles=[])}else return bn;let _=f?new Array(i.length).fill(uo):uo;const m=()=>{if(E.active)if(t){const y=E.run();(n||u||(f?y.some((T,C)=>ur(T,_[C])):ur(y,_)))&&(h&&h(),wn(t,l,3,[y,_===uo?void 0:f&&_[0]===uo?[]:_,p]),_=y)}else E.run()};m.allowRecurse=!!t;let d;r==="sync"?d=m:r==="post"?d=()=>ke(m,l&&l.suspense):(m.pre=!0,l&&(m.id=l.uid),d=()=>Mc(m));const E=new dc(c,d);t?e?m():_=E.run():r==="post"?ke(E.run.bind(E),l&&l.suspense):E.run();const v=()=>{E.stop(),l&&l.scope&&lc(l.scope.effects,E)};return g&&g.push(v),v}function Jm(i,t,e){const n=this.proxy,r=Se(i)?i.includes(".")?qh(n,i):()=>n[i]:i.bind(n,n);let s;Ht(t)?s=t:(s=t.handler,e=t);const o=Ce;es(this);const a=Xh(r,s.bind(n),e);return o?es(o):tr(),a}function qh(i,t){const e=t.split(".");return()=>{let n=i;for(let r=0;r<e.length&&n;r++)n=n[e[r]];return n}}function zr(i,t){if(!le(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),Le(i))zr(i.value,t);else if(Dt(i))for(let e=0;e<i.length;e++)zr(i[e],t);else if(_h(i)||Wr(i))i.forEach(e=>{zr(e,t)});else if(xh(i))for(const e in i)zr(i[e],t);return i}function Bi(i,t,e,n){const r=i.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(hs(),wn(l,e,8,[i.el,a,i,t]),ds())}}const Bo=i=>!!i.type.__asyncLoader,Yh=i=>i.type.__isKeepAlive;function Qm(i,t){Kh(i,"a",t)}function t_(i,t){Kh(i,"da",t)}function Kh(i,t,e=Ce){const n=i.__wdc||(i.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(pa(t,n,e),e){let r=e.parent;for(;r&&r.parent;)Yh(r.parent.vnode)&&e_(n,t,e,r),r=r.parent}}function e_(i,t,e,n){const r=pa(t,i,n,!0);$h(()=>{lc(n[t],r)},e)}function pa(i,t,e=Ce,n=!1){if(e){const r=e[i]||(e[i]=[]),s=t.__weh||(t.__weh=(...o)=>{if(e.isUnmounted)return;hs(),es(e);const a=wn(t,e,i,o);return tr(),ds(),a});return n?r.unshift(s):r.push(s),s}}const li=i=>(t,e=Ce)=>(!ks||i==="sp")&&pa(i,(...n)=>t(...n),e),n_=li("bm"),jh=li("m"),i_=li("bu"),r_=li("u"),s_=li("bum"),$h=li("um"),o_=li("sp"),a_=li("rtg"),l_=li("rtc");function c_(i,t=Ce){pa("ec",i,t)}const Rl=i=>i?ad(i)?Tc(i)||i.proxy:Rl(i.parent):null,Ds=Ie(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Rl(i.parent),$root:i=>Rl(i.root),$emit:i=>i.emit,$options:i=>Sc(i),$forceUpdate:i=>i.f||(i.f=()=>Mc(i.update)),$nextTick:i=>i.n||(i.n=Bm.bind(i.proxy)),$watch:i=>Jm.bind(i)}),La=(i,t)=>i!==te&&!i.__isScriptSetup&&qt(i,t),u_={get({_:i},t){const{ctx:e,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return n[t];case 2:return r[t];case 4:return e[t];case 3:return s[t]}else{if(La(n,t))return o[t]=1,n[t];if(r!==te&&qt(r,t))return o[t]=2,r[t];if((c=i.propsOptions[0])&&qt(c,t))return o[t]=3,s[t];if(e!==te&&qt(e,t))return o[t]=4,e[t];Cl&&(o[t]=0)}}const u=Ds[t];let f,h;if(u)return t==="$attrs"&&$e(i,"get",t),u(i);if((f=a.__cssModules)&&(f=f[t]))return f;if(e!==te&&qt(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,qt(h,t))return h[t]},set({_:i},t,e){const{data:n,setupState:r,ctx:s}=i;return La(r,t)?(r[t]=e,!0):n!==te&&qt(n,t)?(n[t]=e,!0):qt(i.props,t)||t[0]==="$"&&t.slice(1)in i?!1:(s[t]=e,!0)},has({_:{data:i,setupState:t,accessCache:e,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!e[o]||i!==te&&qt(i,o)||La(t,o)||(a=s[0])&&qt(a,o)||qt(n,o)||qt(Ds,o)||qt(r.config.globalProperties,o)},defineProperty(i,t,e){return e.get!=null?i._.accessCache[t]=0:qt(e,"value")&&this.set(i,t,e.value,null),Reflect.defineProperty(i,t,e)}};function du(i){return Dt(i)?i.reduce((t,e)=>(t[e]=null,t),{}):i}let Cl=!0;function f_(i){const t=Sc(i),e=i.proxy,n=i.ctx;Cl=!1,t.beforeCreate&&pu(t.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:g,activated:_,deactivated:m,beforeDestroy:d,beforeUnmount:E,destroyed:v,unmounted:y,render:T,renderTracked:C,renderTriggered:w,errorCaptured:L,serverPrefetch:M,expose:R,inheritAttrs:q,components:st,directives:O,filters:k}=t;if(c&&h_(c,n,null),o)for(const B in o){const H=o[B];Ht(H)&&(n[B]=H.bind(e))}if(r){const B=r.call(e,e);le(B)&&(i.data=_c(B))}if(Cl=!0,s)for(const B in s){const H=s[B],et=Ht(H)?H.bind(e,e):Ht(H.get)?H.get.bind(e,e):bn,rt=!Ht(H)&&Ht(H.set)?H.set.bind(e):bn,z=W_({get:et,set:rt});Object.defineProperty(n,B,{enumerable:!0,configurable:!0,get:()=>z.value,set:K=>z.value=K})}if(a)for(const B in a)Zh(a[B],n,e,B);if(l){const B=Ht(l)?l.call(e):l;Reflect.ownKeys(B).forEach(H=>{v_(H,B[H])})}u&&pu(u,i,"c");function j(B,H){Dt(H)?H.forEach(et=>B(et.bind(e))):H&&B(H.bind(e))}if(j(n_,f),j(jh,h),j(i_,p),j(r_,g),j(Qm,_),j(t_,m),j(c_,L),j(l_,C),j(a_,w),j(s_,E),j($h,y),j(o_,M),Dt(R))if(R.length){const B=i.exposed||(i.exposed={});R.forEach(H=>{Object.defineProperty(B,H,{get:()=>e[H],set:et=>e[H]=et})})}else i.exposed||(i.exposed={});T&&i.render===bn&&(i.render=T),q!=null&&(i.inheritAttrs=q),st&&(i.components=st),O&&(i.directives=O)}function h_(i,t,e=bn){Dt(i)&&(i=Pl(i));for(const n in i){const r=i[n];let s;le(r)?"default"in r?s=zo(r.from||n,r.default,!0):s=zo(r.from||n):s=zo(r),Le(s)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[n]=s}}function pu(i,t,e){wn(Dt(i)?i.map(n=>n.bind(t.proxy)):i.bind(t.proxy),t,e)}function Zh(i,t,e,n){const r=n.includes(".")?qh(e,n):()=>e[n];if(Se(i)){const s=t[i];Ht(s)&&Pa(r,s)}else if(Ht(i))Pa(r,i.bind(e));else if(le(i))if(Dt(i))i.forEach(s=>Zh(s,t,e,n));else{const s=Ht(i.handler)?i.handler.bind(e):t[i.handler];Ht(s)&&Pa(r,s,i)}}function Sc(i){const t=i.type,{mixins:e,extends:n}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!e&&!n?l=t:(l={},r.length&&r.forEach(c=>jo(l,c,o,!0)),jo(l,t,o)),le(t)&&s.set(t,l),l}function jo(i,t,e,n=!1){const{mixins:r,extends:s}=t;s&&jo(i,s,e,!0),r&&r.forEach(o=>jo(i,o,e,!0));for(const o in t)if(!(n&&o==="expose")){const a=d_[o]||e&&e[o];i[o]=a?a(i[o],t[o]):t[o]}return i}const d_={data:mu,props:_u,emits:_u,methods:Rs,computed:Rs,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:Rs,directives:Rs,watch:m_,provide:mu,inject:p_};function mu(i,t){return t?i?function(){return Ie(Ht(i)?i.call(this,this):i,Ht(t)?t.call(this,this):t)}:t:i}function p_(i,t){return Rs(Pl(i),Pl(t))}function Pl(i){if(Dt(i)){const t={};for(let e=0;e<i.length;e++)t[i[e]]=i[e];return t}return i}function Be(i,t){return i?[...new Set([].concat(i,t))]:t}function Rs(i,t){return i?Ie(Object.create(null),i,t):t}function _u(i,t){return i?Dt(i)&&Dt(t)?[...new Set([...i,...t])]:Ie(Object.create(null),du(i),du(t??{})):t}function m_(i,t){if(!i)return t;if(!t)return i;const e=Ie(Object.create(null),i);for(const n in t)e[n]=Be(i[n],t[n]);return e}function Jh(){return{app:null,config:{isNativeTag:Yp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let __=0;function g_(i,t){return function(n,r=null){Ht(n)||(n=Ie({},n)),r!=null&&!le(r)&&(r=null);const s=Jh(),o=new WeakSet;let a=!1;const l=s.app={_uid:__++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Y_,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ht(c.install)?(o.add(c),c.install(l,...u)):Ht(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=ri(n,r);return h.appContext=s,u&&t?t(h,c):i(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Tc(h.component)||h.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){$o=l;try{return c()}finally{$o=null}}};return l}}let $o=null;function v_(i,t){if(Ce){let e=Ce.provides;const n=Ce.parent&&Ce.parent.provides;n===e&&(e=Ce.provides=Object.create(n)),e[i]=t}}function zo(i,t,e=!1){const n=Ce||Bn;if(n||$o){const r=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:$o._context.provides;if(r&&i in r)return r[i];if(arguments.length>1)return e&&Ht(t)?t.call(n&&n.proxy):t}}function x_(i,t,e,n=!1){const r={},s={};qo(s,_a,1),i.propsDefaults=Object.create(null),Qh(i,t,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);e?i.props=n?r:Pm(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function M_(i,t,e,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=Kt(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(da(i.emitsOptions,h))continue;const p=t[h];if(l)if(qt(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const g=Jr(h);r[g]=Ll(l,a,g,p,i,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Qh(i,t,r,s)&&(c=!0);let u;for(const f in a)(!t||!qt(t,f)&&((u=fs(f))===f||!qt(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(r[f]=Ll(l,a,f,void 0,i,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!qt(t,f))&&(delete s[f],c=!0)}c&&ii(i,"set","$attrs")}function Qh(i,t,e,n){const[r,s]=i.propsOptions;let o=!1,a;if(t)for(let l in t){if(Fo(l))continue;const c=t[l];let u;r&&qt(r,u=Jr(l))?!s||!s.includes(u)?e[u]=c:(a||(a={}))[u]=c:da(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=Kt(e),c=a||te;for(let u=0;u<s.length;u++){const f=s[u];e[f]=Ll(r,l,f,c[f],i,!qt(c,f))}}return o}function Ll(i,t,e,n,r,s){const o=i[e];if(o!=null){const a=qt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ht(l)){const{propsDefaults:c}=r;e in c?n=c[e]:(es(r),n=c[e]=l.call(null,t),tr())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===fs(e))&&(n=!0))}return n}function td(i,t,e=!1){const n=t.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Ht(i)){const u=f=>{l=!0;const[h,p]=td(f,t,!0);Ie(o,h),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return le(i)&&n.set(i,Vr),Vr;if(Dt(s))for(let u=0;u<s.length;u++){const f=Jr(s[u]);gu(f)&&(o[f]=te)}else if(s)for(const u in s){const f=Jr(u);if(gu(f)){const h=s[u],p=o[f]=Dt(h)||Ht(h)?{type:h}:Ie({},h);if(p){const g=Mu(Boolean,p.type),_=Mu(String,p.type);p[0]=g>-1,p[1]=_<0||g<_,(g>-1||qt(p,"default"))&&a.push(f)}}}const c=[o,a];return le(i)&&n.set(i,c),c}function gu(i){return i[0]!=="$"}function vu(i){const t=i&&i.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:i===null?"null":""}function xu(i,t){return vu(i)===vu(t)}function Mu(i,t){return Dt(t)?t.findIndex(e=>xu(e,i)):Ht(t)&&xu(t,i)?0:-1}const ed=i=>i[0]==="_"||i==="$stable",Ec=i=>Dt(i)?i.map(In):[In(i)],S_=(i,t,e)=>{if(t._n)return t;const n=Wm((...r)=>Ec(t(...r)),e);return n._c=!1,n},nd=(i,t,e)=>{const n=i._ctx;for(const r in i){if(ed(r))continue;const s=i[r];if(Ht(s))t[r]=S_(r,s,n);else if(s!=null){const o=Ec(s);t[r]=()=>o}}},id=(i,t)=>{const e=Ec(t);i.slots.default=()=>e},E_=(i,t)=>{if(i.vnode.shapeFlag&32){const e=t._;e?(i.slots=Kt(t),qo(t,"_",e)):nd(t,i.slots={})}else i.slots={},t&&id(i,t);qo(i.slots,_a,1)},y_=(i,t,e)=>{const{vnode:n,slots:r}=i;let s=!0,o=te;if(n.shapeFlag&32){const a=t._;a?e&&a===1?s=!1:(Ie(r,t),!e&&a===1&&delete r._):(s=!t.$stable,nd(t,r)),o=t}else t&&(id(i,t),o={default:1});if(s)for(const a in r)!ed(a)&&o[a]==null&&delete r[a]};function Dl(i,t,e,n,r=!1){if(Dt(i)){i.forEach((h,p)=>Dl(h,t&&(Dt(t)?t[p]:t),e,n,r));return}if(Bo(n)&&!r)return;const s=n.shapeFlag&4?Tc(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=t&&t.r,u=a.refs===te?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Se(c)?(u[c]=null,qt(f,c)&&(f[c]=null)):Le(c)&&(c.value=null)),Ht(l))Ai(l,a,12,[o,u]);else{const h=Se(l),p=Le(l);if(h||p){const g=()=>{if(i.f){const _=h?qt(f,l)?f[l]:u[l]:l.value;r?Dt(_)&&lc(_,s):Dt(_)?_.includes(s)||_.push(s):h?(u[l]=[s],qt(f,l)&&(f[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else h?(u[l]=o,qt(f,l)&&(f[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,ke(g,e)):g()}}}const ke=Zm;function A_(i){return T_(i)}function T_(i,t){const e=El();e.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=bn,insertStaticContent:g}=i,_=(x,P,U,W=null,X=null,ot=null,at=!1,$=null,lt=!!P.dynamicChildren)=>{if(x===P)return;x&&!vs(x,P)&&(W=Ct(x),K(x,X,ot,!0),x=null),P.patchFlag===-2&&(lt=!1,P.dynamicChildren=null);const{type:nt,ref:St,shapeFlag:A}=P;switch(nt){case ma:m(x,P,U,W);break;case fr:d(x,P,U,W);break;case Da:x==null&&E(P,U,W,at);break;case Un:st(x,P,U,W,X,ot,at,$,lt);break;default:A&1?T(x,P,U,W,X,ot,at,$,lt):A&6?O(x,P,U,W,X,ot,at,$,lt):(A&64||A&128)&&nt.process(x,P,U,W,X,ot,at,$,lt,It)}St!=null&&X&&Dl(St,x&&x.ref,ot,P||x,!P)},m=(x,P,U,W)=>{if(x==null)n(P.el=a(P.children),U,W);else{const X=P.el=x.el;P.children!==x.children&&c(X,P.children)}},d=(x,P,U,W)=>{x==null?n(P.el=l(P.children||""),U,W):P.el=x.el},E=(x,P,U,W)=>{[x.el,x.anchor]=g(x.children,P,U,W,x.el,x.anchor)},v=({el:x,anchor:P},U,W)=>{let X;for(;x&&x!==P;)X=h(x),n(x,U,W),x=X;n(P,U,W)},y=({el:x,anchor:P})=>{let U;for(;x&&x!==P;)U=h(x),r(x),x=U;r(P)},T=(x,P,U,W,X,ot,at,$,lt)=>{at=at||P.type==="svg",x==null?C(P,U,W,X,ot,at,$,lt):M(x,P,X,ot,at,$,lt)},C=(x,P,U,W,X,ot,at,$)=>{let lt,nt;const{type:St,props:A,shapeFlag:S,transition:N,dirs:Q}=x;if(lt=x.el=o(x.type,ot,A&&A.is,A),S&8?u(lt,x.children):S&16&&L(x.children,lt,null,W,X,ot&&St!=="foreignObject",at,$),Q&&Bi(x,null,W,"created"),w(lt,x,x.scopeId,at,W),A){for(const ct in A)ct!=="value"&&!Fo(ct)&&s(lt,ct,null,A[ct],ot,x.children,W,X,yt);"value"in A&&s(lt,"value",null,A.value),(nt=A.onVnodeBeforeMount)&&Dn(nt,W,x)}Q&&Bi(x,null,W,"beforeMount");const it=b_(X,N);it&&N.beforeEnter(lt),n(lt,P,U),((nt=A&&A.onVnodeMounted)||it||Q)&&ke(()=>{nt&&Dn(nt,W,x),it&&N.enter(lt),Q&&Bi(x,null,W,"mounted")},X)},w=(x,P,U,W,X)=>{if(U&&p(x,U),W)for(let ot=0;ot<W.length;ot++)p(x,W[ot]);if(X){let ot=X.subTree;if(P===ot){const at=X.vnode;w(x,at,at.scopeId,at.slotScopeIds,X.parent)}}},L=(x,P,U,W,X,ot,at,$,lt=0)=>{for(let nt=lt;nt<x.length;nt++){const St=x[nt]=$?pi(x[nt]):In(x[nt]);_(null,St,P,U,W,X,ot,at,$)}},M=(x,P,U,W,X,ot,at)=>{const $=P.el=x.el;let{patchFlag:lt,dynamicChildren:nt,dirs:St}=P;lt|=x.patchFlag&16;const A=x.props||te,S=P.props||te;let N;U&&zi(U,!1),(N=S.onVnodeBeforeUpdate)&&Dn(N,U,P,x),St&&Bi(P,x,U,"beforeUpdate"),U&&zi(U,!0);const Q=X&&P.type!=="foreignObject";if(nt?R(x.dynamicChildren,nt,$,U,W,Q,ot):at||H(x,P,$,null,U,W,Q,ot,!1),lt>0){if(lt&16)q($,P,A,S,U,W,X);else if(lt&2&&A.class!==S.class&&s($,"class",null,S.class,X),lt&4&&s($,"style",A.style,S.style,X),lt&8){const it=P.dynamicProps;for(let ct=0;ct<it.length;ct++){const _t=it[ct],ft=A[_t],Z=S[_t];(Z!==ft||_t==="value")&&s($,_t,ft,Z,X,x.children,U,W,yt)}}lt&1&&x.children!==P.children&&u($,P.children)}else!at&&nt==null&&q($,P,A,S,U,W,X);((N=S.onVnodeUpdated)||St)&&ke(()=>{N&&Dn(N,U,P,x),St&&Bi(P,x,U,"updated")},W)},R=(x,P,U,W,X,ot,at)=>{for(let $=0;$<P.length;$++){const lt=x[$],nt=P[$],St=lt.el&&(lt.type===Un||!vs(lt,nt)||lt.shapeFlag&70)?f(lt.el):U;_(lt,nt,St,null,W,X,ot,at,!0)}},q=(x,P,U,W,X,ot,at)=>{if(U!==W){if(U!==te)for(const $ in U)!Fo($)&&!($ in W)&&s(x,$,U[$],null,at,P.children,X,ot,yt);for(const $ in W){if(Fo($))continue;const lt=W[$],nt=U[$];lt!==nt&&$!=="value"&&s(x,$,nt,lt,at,P.children,X,ot,yt)}"value"in W&&s(x,"value",U.value,W.value)}},st=(x,P,U,W,X,ot,at,$,lt)=>{const nt=P.el=x?x.el:a(""),St=P.anchor=x?x.anchor:a("");let{patchFlag:A,dynamicChildren:S,slotScopeIds:N}=P;N&&($=$?$.concat(N):N),x==null?(n(nt,U,W),n(St,U,W),L(P.children,U,St,X,ot,at,$,lt)):A>0&&A&64&&S&&x.dynamicChildren?(R(x.dynamicChildren,S,U,X,ot,at,$),(P.key!=null||X&&P===X.subTree)&&rd(x,P,!0)):H(x,P,U,St,X,ot,at,$,lt)},O=(x,P,U,W,X,ot,at,$,lt)=>{P.slotScopeIds=$,x==null?P.shapeFlag&512?X.ctx.activate(P,U,W,at,lt):k(P,U,W,X,ot,at,lt):G(x,P,lt)},k=(x,P,U,W,X,ot,at)=>{const $=x.component=B_(x,W,X);if(Yh(x)&&($.ctx.renderer=It),z_($),$.asyncDep){if(X&&X.registerDep($,j),!x.el){const lt=$.subTree=ri(fr);d(null,lt,P,U)}return}j($,x,P,U,X,ot,at)},G=(x,P,U)=>{const W=P.component=x.component;if(Ym(x,P,U))if(W.asyncDep&&!W.asyncResolved){B(W,P,U);return}else W.next=P,Hm(W.update),W.update();else P.el=x.el,W.vnode=P},j=(x,P,U,W,X,ot,at)=>{const $=()=>{if(x.isMounted){let{next:St,bu:A,u:S,parent:N,vnode:Q}=x,it=St,ct;zi(x,!1),St?(St.el=Q.el,B(x,St,at)):St=Q,A&&wa(A),(ct=St.props&&St.props.onVnodeBeforeUpdate)&&Dn(ct,N,St,Q),zi(x,!0);const _t=Ca(x),ft=x.subTree;x.subTree=_t,_(ft,_t,f(ft.el),Ct(ft),x,X,ot),St.el=_t.el,it===null&&Km(x,_t.el),S&&ke(S,X),(ct=St.props&&St.props.onVnodeUpdated)&&ke(()=>Dn(ct,N,St,Q),X)}else{let St;const{el:A,props:S}=P,{bm:N,m:Q,parent:it}=x,ct=Bo(P);if(zi(x,!1),N&&wa(N),!ct&&(St=S&&S.onVnodeBeforeMount)&&Dn(St,it,P),zi(x,!0),A&&Ot){const _t=()=>{x.subTree=Ca(x),Ot(A,x.subTree,x,X,null)};ct?P.type.__asyncLoader().then(()=>!x.isUnmounted&&_t()):_t()}else{const _t=x.subTree=Ca(x);_(null,_t,U,W,x,X,ot),P.el=_t.el}if(Q&&ke(Q,X),!ct&&(St=S&&S.onVnodeMounted)){const _t=P;ke(()=>Dn(St,it,_t),X)}(P.shapeFlag&256||it&&Bo(it.vnode)&&it.vnode.shapeFlag&256)&&x.a&&ke(x.a,X),x.isMounted=!0,P=U=W=null}},lt=x.effect=new dc($,()=>Mc(nt),x.scope),nt=x.update=()=>lt.run();nt.id=x.uid,zi(x,!0),nt()},B=(x,P,U)=>{P.component=x;const W=x.vnode.props;x.vnode=P,x.next=null,M_(x,P.props,W,U),y_(x,P.children,U),hs(),fu(),ds()},H=(x,P,U,W,X,ot,at,$,lt=!1)=>{const nt=x&&x.children,St=x?x.shapeFlag:0,A=P.children,{patchFlag:S,shapeFlag:N}=P;if(S>0){if(S&128){rt(nt,A,U,W,X,ot,at,$,lt);return}else if(S&256){et(nt,A,U,W,X,ot,at,$,lt);return}}N&8?(St&16&&yt(nt,X,ot),A!==nt&&u(U,A)):St&16?N&16?rt(nt,A,U,W,X,ot,at,$,lt):yt(nt,X,ot,!0):(St&8&&u(U,""),N&16&&L(A,U,W,X,ot,at,$,lt))},et=(x,P,U,W,X,ot,at,$,lt)=>{x=x||Vr,P=P||Vr;const nt=x.length,St=P.length,A=Math.min(nt,St);let S;for(S=0;S<A;S++){const N=P[S]=lt?pi(P[S]):In(P[S]);_(x[S],N,U,null,X,ot,at,$,lt)}nt>St?yt(x,X,ot,!0,!1,A):L(P,U,W,X,ot,at,$,lt,A)},rt=(x,P,U,W,X,ot,at,$,lt)=>{let nt=0;const St=P.length;let A=x.length-1,S=St-1;for(;nt<=A&&nt<=S;){const N=x[nt],Q=P[nt]=lt?pi(P[nt]):In(P[nt]);if(vs(N,Q))_(N,Q,U,null,X,ot,at,$,lt);else break;nt++}for(;nt<=A&&nt<=S;){const N=x[A],Q=P[S]=lt?pi(P[S]):In(P[S]);if(vs(N,Q))_(N,Q,U,null,X,ot,at,$,lt);else break;A--,S--}if(nt>A){if(nt<=S){const N=S+1,Q=N<St?P[N].el:W;for(;nt<=S;)_(null,P[nt]=lt?pi(P[nt]):In(P[nt]),U,Q,X,ot,at,$,lt),nt++}}else if(nt>S)for(;nt<=A;)K(x[nt],X,ot,!0),nt++;else{const N=nt,Q=nt,it=new Map;for(nt=Q;nt<=S;nt++){const gt=P[nt]=lt?pi(P[nt]):In(P[nt]);gt.key!=null&&it.set(gt.key,nt)}let ct,_t=0;const ft=S-Q+1;let Z=!1,Tt=0;const At=new Array(ft);for(nt=0;nt<ft;nt++)At[nt]=0;for(nt=N;nt<=A;nt++){const gt=x[nt];if(_t>=ft){K(gt,X,ot,!0);continue}let xt;if(gt.key!=null)xt=it.get(gt.key);else for(ct=Q;ct<=S;ct++)if(At[ct-Q]===0&&vs(gt,P[ct])){xt=ct;break}xt===void 0?K(gt,X,ot,!0):(At[xt-Q]=nt+1,xt>=Tt?Tt=xt:Z=!0,_(gt,P[xt],U,null,X,ot,at,$,lt),_t++)}const bt=Z?w_(At):Vr;for(ct=bt.length-1,nt=ft-1;nt>=0;nt--){const gt=Q+nt,xt=P[gt],Nt=gt+1<St?P[gt+1].el:W;At[nt]===0?_(null,xt,U,Nt,X,ot,at,$,lt):Z&&(ct<0||nt!==bt[ct]?z(xt,U,Nt,2):ct--)}}},z=(x,P,U,W,X=null)=>{const{el:ot,type:at,transition:$,children:lt,shapeFlag:nt}=x;if(nt&6){z(x.component.subTree,P,U,W);return}if(nt&128){x.suspense.move(P,U,W);return}if(nt&64){at.move(x,P,U,It);return}if(at===Un){n(ot,P,U);for(let A=0;A<lt.length;A++)z(lt[A],P,U,W);n(x.anchor,P,U);return}if(at===Da){v(x,P,U);return}if(W!==2&&nt&1&&$)if(W===0)$.beforeEnter(ot),n(ot,P,U),ke(()=>$.enter(ot),X);else{const{leave:A,delayLeave:S,afterLeave:N}=$,Q=()=>n(ot,P,U),it=()=>{A(ot,()=>{Q(),N&&N()})};S?S(ot,Q,it):it()}else n(ot,P,U)},K=(x,P,U,W=!1,X=!1)=>{const{type:ot,props:at,ref:$,children:lt,dynamicChildren:nt,shapeFlag:St,patchFlag:A,dirs:S}=x;if($!=null&&Dl($,null,U,x,!0),St&256){P.ctx.deactivate(x);return}const N=St&1&&S,Q=!Bo(x);let it;if(Q&&(it=at&&at.onVnodeBeforeUnmount)&&Dn(it,P,x),St&6)dt(x.component,U,W);else{if(St&128){x.suspense.unmount(U,W);return}N&&Bi(x,null,P,"beforeUnmount"),St&64?x.type.remove(x,P,U,X,It,W):nt&&(ot!==Un||A>0&&A&64)?yt(nt,P,U,!1,!0):(ot===Un&&A&384||!X&&St&16)&&yt(lt,P,U),W&&pt(x)}(Q&&(it=at&&at.onVnodeUnmounted)||N)&&ke(()=>{it&&Dn(it,P,x),N&&Bi(x,null,P,"unmounted")},U)},pt=x=>{const{type:P,el:U,anchor:W,transition:X}=x;if(P===Un){ut(U,W);return}if(P===Da){y(x);return}const ot=()=>{r(U),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(x.shapeFlag&1&&X&&!X.persisted){const{leave:at,delayLeave:$}=X,lt=()=>at(U,ot);$?$(x.el,ot,lt):lt()}else ot()},ut=(x,P)=>{let U;for(;x!==P;)U=h(x),r(x),x=U;r(P)},dt=(x,P,U)=>{const{bum:W,scope:X,update:ot,subTree:at,um:$}=x;W&&wa(W),X.stop(),ot&&(ot.active=!1,K(at,x,P,U)),$&&ke($,P),ke(()=>{x.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&x.asyncDep&&!x.asyncResolved&&x.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},yt=(x,P,U,W=!1,X=!1,ot=0)=>{for(let at=ot;at<x.length;at++)K(x[at],P,U,W,X)},Ct=x=>x.shapeFlag&6?Ct(x.component.subTree):x.shapeFlag&128?x.suspense.next():h(x.anchor||x.el),wt=(x,P,U)=>{x==null?P._vnode&&K(P._vnode,null,null,!0):_(P._vnode||null,x,P,null,null,null,U),fu(),Gh(),P._vnode=x},It={p:_,um:K,m:z,r:pt,mt:k,mc:L,pc:H,pbc:R,n:Ct,o:i};let fe,Ot;return t&&([fe,Ot]=t(It)),{render:wt,hydrate:fe,createApp:g_(wt,fe)}}function zi({effect:i,update:t},e){i.allowRecurse=t.allowRecurse=e}function b_(i,t){return(!i||i&&!i.pendingBranch)&&t&&!t.persisted}function rd(i,t,e=!1){const n=i.children,r=t.children;if(Dt(n)&&Dt(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=pi(r[s]),a.el=o.el),e||rd(o,a)),a.type===ma&&(a.el=o.el)}}function w_(i){const t=i.slice(),e=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=e[e.length-1],i[r]<c){t[n]=r,e.push(n);continue}for(s=0,o=e.length-1;s<o;)a=s+o>>1,i[e[a]]<c?s=a+1:o=a;c<i[e[s]]&&(s>0&&(t[n]=e[s-1]),e[s]=n)}}for(s=e.length,o=e[s-1];s-- >0;)e[s]=o,o=t[o];return e}const R_=i=>i.__isTeleport,Un=Symbol.for("v-fgt"),ma=Symbol.for("v-txt"),fr=Symbol.for("v-cmt"),Da=Symbol.for("v-stc"),Us=[];let Tn=null;function Ho(i=!1){Us.push(Tn=i?null:[])}function C_(){Us.pop(),Tn=Us[Us.length-1]||null}let Gs=1;function Su(i){Gs+=i}function sd(i){return i.dynamicChildren=Gs>0?Tn||Vr:null,C_(),Gs>0&&Tn&&Tn.push(i),i}function Ua(i,t,e,n,r,s){return sd(mi(i,t,e,n,r,s,!0))}function P_(i,t,e,n,r){return sd(ri(i,t,e,n,r,!0))}function L_(i){return i?i.__v_isVNode===!0:!1}function vs(i,t){return i.type===t.type&&i.key===t.key}const _a="__vInternal",od=({key:i})=>i??null,Go=({ref:i,ref_key:t,ref_for:e})=>(typeof i=="number"&&(i=""+i),i!=null?Se(i)||Le(i)||Ht(i)?{i:Bn,r:i,k:t,f:!!e}:i:null);function mi(i,t=null,e=null,n=0,r=null,s=i===Un?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&od(t),ref:t&&Go(t),scopeId:Wh,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Bn};return a?(yc(l,e),s&128&&i.normalize(l)):e&&(l.shapeFlag|=Se(e)?8:16),Gs>0&&!o&&Tn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Tn.push(l),l}const ri=D_;function D_(i,t=null,e=null,n=0,r=null,s=!1){if((!i||i===jm)&&(i=fr),L_(i)){const a=ts(i,t,!0);return e&&yc(a,e),Gs>0&&!s&&Tn&&(a.shapeFlag&6?Tn[Tn.indexOf(i)]=a:Tn.push(a)),a.patchFlag|=-2,a}if(V_(i)&&(i=i.__vccOpts),t){t=U_(t);let{class:a,style:l}=t;a&&!Se(a)&&(t.class=fc(a)),le(l)&&(Ih(l)&&!Dt(l)&&(l=Ie({},l)),t.style=uc(l))}const o=Se(i)?1:$m(i)?128:R_(i)?64:le(i)?4:Ht(i)?2:0;return mi(i,t,e,n,r,o,s,!0)}function U_(i){return i?Ih(i)||_a in i?Ie({},i):i:null}function ts(i,t,e=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=t?O_(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&od(a),ref:t&&t.ref?e&&r?Dt(r)?r.concat(Go(t)):[r,Go(t)]:Go(t):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==Un?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&ts(i.ssContent),ssFallback:i.ssFallback&&ts(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function I_(i=" ",t=0){return ri(ma,null,i,t)}function Eu(i="",t=!1){return t?(Ho(),P_(fr,null,i)):ri(fr,null,i)}function In(i){return i==null||typeof i=="boolean"?ri(fr):Dt(i)?ri(Un,null,i.slice()):typeof i=="object"?pi(i):ri(ma,null,String(i))}function pi(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:ts(i)}function yc(i,t){let e=0;const{shapeFlag:n}=i;if(t==null)t=null;else if(Dt(t))e=16;else if(typeof t=="object")if(n&65){const r=t.default;r&&(r._c&&(r._d=!1),yc(i,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!(_a in t)?t._ctx=Bn:r===3&&Bn&&(Bn.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else Ht(t)?(t={default:t,_ctx:Bn},e=32):(t=String(t),n&64?(e=16,t=[I_(t)]):e=8);i.children=t,i.shapeFlag|=e}function O_(...i){const t={};for(let e=0;e<i.length;e++){const n=i[e];for(const r in n)if(r==="class")t.class!==n.class&&(t.class=fc([t.class,n.class]));else if(r==="style")t.style=uc([t.style,n.style]);else if(aa(r)){const s=t[r],o=n[r];o&&s!==o&&!(Dt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=n[r])}return t}function Dn(i,t,e,n=null){wn(i,t,7,[e,n])}const N_=Jh();let F_=0;function B_(i,t,e){const n=i.type,r=(t?t.appContext:i.appContext)||N_,s={uid:F_++,vnode:i,type:n,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new am(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:td(n,r),emitsOptions:Vh(n,r),emit:null,emitted:null,propsDefaults:te,inheritAttrs:n.inheritAttrs,ctx:te,data:te,props:te,attrs:te,slots:te,refs:te,setupState:te,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Vm.bind(null,s),i.ce&&i.ce(s),s}let Ce=null,Ac,_r,yu="__VUE_INSTANCE_SETTERS__";(_r=El()[yu])||(_r=El()[yu]=[]),_r.push(i=>Ce=i),Ac=i=>{_r.length>1?_r.forEach(t=>t(i)):_r[0](i)};const es=i=>{Ac(i),i.scope.on()},tr=()=>{Ce&&Ce.scope.off(),Ac(null)};function ad(i){return i.vnode.shapeFlag&4}let ks=!1;function z_(i,t=!1){ks=t;const{props:e,children:n}=i.vnode,r=ad(i);x_(i,e,r,t),E_(i,n);const s=r?H_(i,t):void 0;return ks=!1,s}function H_(i,t){const e=i.type;i.accessCache=Object.create(null),i.proxy=Oh(new Proxy(i.ctx,u_));const{setup:n}=e;if(n){const r=i.setupContext=n.length>1?k_(i):null;es(i),hs();const s=Ai(n,i,0,[i.props,r]);if(ds(),tr(),gh(s)){if(s.then(tr,tr),t)return s.then(o=>{Au(i,o,t)}).catch(o=>{ha(o,i,0)});i.asyncDep=s}else Au(i,s,t)}else ld(i,t)}function Au(i,t,e){Ht(t)?i.type.__ssrInlineRender?i.ssrRender=t:i.render=t:le(t)&&(i.setupState=Bh(t)),ld(i,e)}let Tu;function ld(i,t,e){const n=i.type;if(!i.render){if(!t&&Tu&&!n.render){const r=n.template||Sc(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Ie(Ie({isCustomElement:s,delimiters:a},o),l);n.render=Tu(r,c)}}i.render=n.render||bn}{es(i),hs();try{f_(i)}finally{ds(),tr()}}}function G_(i){return i.attrsProxy||(i.attrsProxy=new Proxy(i.attrs,{get(t,e){return $e(i,"get","$attrs"),t[e]}}))}function k_(i){const t=e=>{i.exposed=e||{}};return{get attrs(){return G_(i)},slots:i.slots,emit:i.emit,expose:t}}function Tc(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(Bh(Oh(i.exposed)),{get(t,e){if(e in t)return t[e];if(e in Ds)return Ds[e](i)},has(t,e){return e in t||e in Ds}}))}function V_(i){return Ht(i)&&"__vccOpts"in i}const W_=(i,t)=>Nm(i,t,ks),X_=Symbol.for("v-scx"),q_=()=>zo(X_),Y_="3.3.8",K_="http://www.w3.org/2000/svg",$i=typeof document<"u"?document:null,bu=$i&&$i.createElement("template"),j_={insert:(i,t,e)=>{t.insertBefore(i,e||null)},remove:i=>{const t=i.parentNode;t&&t.removeChild(i)},createElement:(i,t,e,n)=>{const r=t?$i.createElementNS(K_,i):$i.createElement(i,e?{is:e}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>$i.createTextNode(i),createComment:i=>$i.createComment(i),setText:(i,t)=>{i.nodeValue=t},setElementText:(i,t)=>{i.textContent=t},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>$i.querySelector(i),setScopeId(i,t){i.setAttribute(t,"")},insertStaticContent(i,t,e,n,r,s){const o=e?e.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===s||!(r=r.nextSibling)););else{bu.innerHTML=n?`<svg>${i}</svg>`:i;const a=bu.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},$_=Symbol("_vtc");function Z_(i,t,e){const n=i[$_];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?i.removeAttribute("class"):e?i.setAttribute("class",t):i.className=t}const J_=Symbol("_vod");function Q_(i,t,e){const n=i.style,r=Se(e);if(e&&!r){if(t&&!Se(t))for(const s in t)e[s]==null&&Ul(n,s,"");for(const s in e)Ul(n,s,e[s])}else{const s=n.display;r?t!==e&&(n.cssText=e):t&&i.removeAttribute("style"),J_ in i&&(n.display=s)}}const wu=/\s*!important$/;function Ul(i,t,e){if(Dt(e))e.forEach(n=>Ul(i,t,n));else if(e==null&&(e=""),t.startsWith("--"))i.setProperty(t,e);else{const n=tg(i,t);wu.test(e)?i.setProperty(fs(n),e.replace(wu,""),"important"):i[n]=e}}const Ru=["Webkit","Moz","ms"],Ia={};function tg(i,t){const e=Ia[t];if(e)return e;let n=Jr(t);if(n!=="filter"&&n in i)return Ia[t]=n;n=Mh(n);for(let r=0;r<Ru.length;r++){const s=Ru[r]+n;if(s in i)return Ia[t]=s}return t}const Cu="http://www.w3.org/1999/xlink";function eg(i,t,e,n,r){if(n&&t.startsWith("xlink:"))e==null?i.removeAttributeNS(Cu,t.slice(6,t.length)):i.setAttributeNS(Cu,t,e);else{const s=sm(t);e==null||s&&!Sh(e)?i.removeAttribute(t):i.setAttribute(t,s?"":e)}}function ng(i,t,e,n,r,s,o){if(t==="innerHTML"||t==="textContent"){n&&o(n,r,s),i[t]=e??"";return}const a=i.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){i._value=e;const c=a==="OPTION"?i.getAttribute("value"):i.value,u=e??"";c!==u&&(i.value=u),e==null&&i.removeAttribute(t);return}let l=!1;if(e===""||e==null){const c=typeof i[t];c==="boolean"?e=Sh(e):e==null&&c==="string"?(e="",l=!0):c==="number"&&(e=0,l=!0)}try{i[t]=e}catch{}l&&i.removeAttribute(t)}function ig(i,t,e,n){i.addEventListener(t,e,n)}function rg(i,t,e,n){i.removeEventListener(t,e,n)}const Pu=Symbol("_vei");function sg(i,t,e,n,r=null){const s=i[Pu]||(i[Pu]={}),o=s[t];if(n&&o)o.value=n;else{const[a,l]=og(t);if(n){const c=s[t]=cg(n,r);ig(i,a,c,l)}else o&&(rg(i,a,o,l),s[t]=void 0)}}const Lu=/(?:Once|Passive|Capture)$/;function og(i){let t;if(Lu.test(i)){t={};let n;for(;n=i.match(Lu);)i=i.slice(0,i.length-n[0].length),t[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):fs(i.slice(2)),t]}let Oa=0;const ag=Promise.resolve(),lg=()=>Oa||(ag.then(()=>Oa=0),Oa=Date.now());function cg(i,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;wn(ug(n,e.value),t,5,[n])};return e.value=i,e.attached=lg(),e}function ug(i,t){if(Dt(t)){const e=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{e.call(i),i._stopped=!0},t.map(n=>r=>!r._stopped&&n&&n(r))}else return t}const Du=/^on[a-z]/,fg=(i,t,e,n,r=!1,s,o,a,l)=>{t==="class"?Z_(i,n,r):t==="style"?Q_(i,e,n):aa(t)?ac(t)||sg(i,t,e,n,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):hg(i,t,n,r))?ng(i,t,n,s,o,a,l):(t==="true-value"?i._trueValue=n:t==="false-value"&&(i._falseValue=n),eg(i,t,n,r))};function hg(i,t,e,n){return n?!!(t==="innerHTML"||t==="textContent"||t in i&&Du.test(t)&&Ht(e)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&i.tagName==="INPUT"||t==="type"&&i.tagName==="TEXTAREA"||Du.test(t)&&Se(e)?!1:t in i}const dg=Ie({patchProp:fg},j_);let Uu;function pg(){return Uu||(Uu=A_(dg))}const mg=(...i)=>{const t=pg().createApp(...i),{mount:e}=t;return t.mount=n=>{const r=_g(n);if(!r)return;const s=t._component;!Ht(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=e(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function _g(i){return Se(i)?document.querySelector(i):i}const gg=""+new URL("map-f2949ed5.gif",import.meta.url).href,vg="data:image/gif;base64,R0lGODlhIAAQAOZKACAgICoqKsDAwH9/fz8/P4CAgN/f39XV1erq6khISLCwsIyMjL+/v+Dg4HBwcPPz85mZmR8fH3NzcxUVFeLi4re3t2ZmZkBAQB0dHY+PjwwMDE9PT6enp5GRkUxMTDMzM0dHR05OTrOzs6qqqnd3d25ubvb29tTU1Lm5uZOTk9vb2xoaGo2NjWxsbMfHx8zMzFhYWLi4uMbGxlVVVfHx8fDw8CEhITk5OQkJCeXl5XJycg8PDw4ODjg4OAsLC4iIiPT09KOjo97e3lxcXEZGRiQkJLGxsSsrK////wAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFAABKACwAAAAAIAAQAAAHTIBJgoOEhYaHhUiKi4yNjo+KgpCTlIuSlZiOl5mcSJudmJ+TIwQEI5mikASCBKhJmatJraGvmKSmrqCcqbqPvL2Nv8CWtcOQiMjJhoEAIfkEBQAASgAsDQAFAAYABgAABxaAOQMBAQOCSYhJg4lJhIyFjIaDhTmBACH5BAUAAEoALAwABAAIAAgAAAcigEgMFhERFgyCH0mLSR+DjIyEkIuFk0mGloeKjI6ChIaIgQAh+QQFAABKACwKAAIADAAMAAAHOoBISBQZCRMTCRkUgkgyG0mQkRsyg4+RlxuEl5tJhZyXhp+Rh6KQiKVJiaiKlpyZja2SlIKEhoiKgoEAIfkEBQAASgAsCAABABAADgAAB0iASEgGEhpJh4gaEgaCg0OIkIhDjEgSkZdJEkgohpiQGig6npc6PaORPTunkDuqq4c7pq9JPaKzOpyvoJWvmo6nk42EnZ+LgoEAIfkEBQAASgAsBQABABYADgAAB0eASAYeSYWGh4hJHgZISAOJkIgDSCdFkZdJRScdmJgdMJ2XMAGhkQE+pZA+qKmIPqSthwGgsYYwnLWFHZW5mo65k4KErYtIgQAh+QQFAABKACwCAAEAHAAOAAAHRoBIKUmEhYaHiIUpSDQEiY+QBDRGkJWJRiSWmoUkIJubIDafmjY4o5Y4pqeQOKKrjzaer4kgmbOIJJS3h0aNu4WSgr+Ei4EAIfkEBQAASgAsAQABAB4ADgAABx+ASYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnI6BACH5BAUAAEoALA4ABgAEAAQAAAcNgDMCAoJISIOGhIMzgQAh+QQFAABKACwNAAUABgAGAAAHFoArBQcHBYJIiEiDiUiEjIWMhoOFK4EAIfkEBQAASgAsDAAEAAgACAAAByKASRcQDQ0QF4IvSItIL4OMjISQi4WTSIaWh4qMjoKEhoiBACH5BAUAAEoALAoAAgAMAAwAAAc6gElJGA4VCAgVDhiCSTcKSJCRCjeDj5GXCoSXm0iFnJeGn5GHopCIpUiJqIqWnJmNrZKUgoSGiIqCgQAh+QQFAABKACwIAAEAEAAOAAAHSIBJSQALD0iHiA8LAIKDQYiQiEGMSQuRl0gLSUSGmJAPRCyelywuo5EuNaeQNaqrhzWmr0guorMsnK+gla+ajqeTjYSdn4uCgQAh+QQFAABKACwFAAEAFgAOAAAHR4BJACJIhYaHiEgiAElJBYmQiAVJRyqRl0gqRyWYmCUcnZccB6GRB0ClkECoqYhApK2HB6CxhhyctYUllbmajrmTgoSti0mBACH5BAUAAEoALAIAAQAcAA4AAAdGgEktSISFhoeIhS1JPAKJj5ACPCGQlYkhP5aahT8xm5sxQp+aQiajliamp5AmoquPQp6viTGZs4g/lLeHIY27hZKCv4SLgQAh+QQFAABKACwBAAEAHgAOAAAHH4BIgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucjoEAOw0K";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bc="154",xg=0,Iu=1,Mg=2,cd=1,Sg=2,$n=3,Li=0,Xe=1,ti=2,Ti=0,Yr=1,Ou=2,Nu=3,Fu=4,Eg=5,Br=100,yg=101,Ag=102,Bu=103,zu=104,Tg=200,bg=201,wg=202,Rg=203,ud=204,fd=205,Cg=206,Pg=207,Lg=208,Dg=209,Ug=210,Ig=0,Og=1,Ng=2,Il=3,Fg=4,Bg=5,zg=6,Hg=7,hd=0,Gg=1,kg=2,si=0,Vg=1,Wg=2,Xg=3,qg=4,Yg=5,dd=300,ns=301,is=302,Ol=303,Nl=304,ga=306,Fl=1e3,yn=1001,Bl=1002,He=1003,Hu=1004,Na=1005,cn=1006,Kg=1007,Vs=1008,bi=1009,jg=1010,$g=1011,wc=1012,pd=1013,_i=1014,gi=1015,Ws=1016,md=1017,_d=1018,er=1020,Zg=1021,An=1023,Jg=1024,Qg=1025,nr=1026,rs=1027,t0=1028,gd=1029,e0=1030,vd=1031,xd=1033,Fa=33776,Ba=33777,za=33778,Ha=33779,Gu=35840,ku=35841,Vu=35842,Wu=35843,n0=36196,Xu=37492,qu=37496,Yu=37808,Ku=37809,ju=37810,$u=37811,Zu=37812,Ju=37813,Qu=37814,tf=37815,ef=37816,nf=37817,rf=37818,sf=37819,of=37820,af=37821,Ga=36492,i0=36283,lf=36284,cf=36285,uf=36286,Md=3e3,ir=3001,r0=3200,s0=3201,o0=0,a0=1,rr="",zt="srgb",Gn="srgb-linear",Sd="display-p3",ka=7680,l0=519,c0=512,u0=513,f0=514,h0=515,d0=516,p0=517,m0=518,_0=519,zl=35044,ff="300 es",Hl=1035,ei=2e3,Zo=2001;class ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Va=Math.PI/180,Gl=180/Math.PI;function wi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ve(i,t,e){return Math.max(t,Math.min(e,i))}function g0(i,t){return(i%t+t)%t}function Wa(i,t,e){return(1-e)*i+e*t}function hf(i){return(i&i-1)===0&&i!==0}function kl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jt(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gt{constructor(t,e,n,r,s,o,a,l,c){Gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],_=r[0],m=r[3],d=r[6],E=r[1],v=r[4],y=r[7],T=r[2],C=r[5],w=r[8];return s[0]=o*_+a*E+l*T,s[3]=o*m+a*v+l*C,s[6]=o*d+a*y+l*w,s[1]=c*_+u*E+f*T,s[4]=c*m+u*v+f*C,s[7]=c*d+u*y+f*w,s[2]=h*_+p*E+g*T,s[5]=h*m+p*v+g*C,s[8]=h*d+p*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=e*f+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(r*c-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=h*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Xa.makeScale(t,e)),this}rotate(t){return this.premultiply(Xa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Xa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new Gt;function Ed(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const df={};function Is(i){i in df||(df[i]=!0,console.warn(i))}function Kr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const v0=new Gt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),x0=new Gt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function M0(i){return i.convertSRGBToLinear().applyMatrix3(x0)}function S0(i){return i.applyMatrix3(v0).convertLinearToSRGB()}const E0={[Gn]:i=>i,[zt]:i=>i.convertSRGBToLinear(),[Sd]:M0},y0={[Gn]:i=>i,[zt]:i=>i.convertLinearToSRGB(),[Sd]:S0},gn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Gn},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=E0[t],r=y0[e];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)}};let gr;class yd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gr===void 0&&(gr=Xs("canvas")),gr.width=t.width,gr.height=t.height;const n=gr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Kr(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kr(e[n]/255)*255):e[n]=Kr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let A0=0;class Ad{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=wi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ya(r[o].image)):s.push(Ya(r[o]))}else s=Ya(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ya(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T0=0;class Ge extends ps{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=yn,r=yn,s=cn,o=Vs,a=An,l=bi,c=Ge.DEFAULT_ANISOTROPY,u=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=wi(),this.name="",this.source=new Ad(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ir?zt:rr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fl:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case Bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fl:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case Bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===zt?ir:Md}set encoding(t){Is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ir?zt:rr}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=dd;Ge.DEFAULT_ANISOTROPY=1;class Ae{constructor(t=0,e=0,n=0,r=1){Ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,y=(p+1)/2,T=(d+1)/2,C=(u+h)/4,w=(f+_)/4,L=(g+m)/4;return v>y&&v>T?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=C/n,s=w/n):y>T?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=C/r,s=L/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=w/s,r=L/s),this.set(n,r,s,e),this}let E=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-_)/E,this.z=(h-u)/E,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hr extends ps{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e);const r={width:t,height:e,depth:1};n.encoding!==void 0&&(Is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ir?zt:rr),this.texture=new Ge(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:cn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ad(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Td extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=He,this.minFilter=He,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class b0 extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=He,this.minFilter=He,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*_,E=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const T=Math.sqrt(v),C=Math.atan2(T,d*E);m=Math.sin(m*C)/T,a=Math.sin(a*C)/T}const y=a*E;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,f=f*m+_*y,m===1-a){const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*f+l*p-c*h,t[e+1]=l*g+u*h+c*f-a*p,t[e+2]=c*g+u*p+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ve(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),n*Math.sin(s),n*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*r-a*n,u=l*n+a*e-s*r,f=l*r+s*n-o*e,h=-s*e-o*n-a*r;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ka.copy(this).projectOnVector(t),this.sub(Ka)}reflect(t){return this.sub(Ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ve(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new I,pf=new Qs;class to{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),vr.copy(t.boundingBox),vr.applyMatrix4(t.matrixWorld),this.union(vr);else{const r=t.geometry;if(r!==void 0)if(e&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Xn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Xn)}else r.boundingBox===null&&r.computeBoundingBox(),vr.copy(r.boundingBox),vr.applyMatrix4(t.matrixWorld),this.union(vr)}const n=t.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),fo.subVectors(this.max,xs),xr.subVectors(t.a,xs),Mr.subVectors(t.b,xs),Sr.subVectors(t.c,xs),ui.subVectors(Mr,xr),fi.subVectors(Sr,Mr),Hi.subVectors(xr,Sr);let e=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Hi.z,Hi.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Hi.z,0,-Hi.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Hi.y,Hi.x,0];return!ja(e,xr,Mr,Sr,fo)||(e=[1,0,0,0,1,0,0,0,1],!ja(e,xr,Mr,Sr,fo))?!1:(ho.crossVectors(ui,fi),e=[ho.x,ho.y,ho.z],ja(e,xr,Mr,Sr,fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Wn=[new I,new I,new I,new I,new I,new I,new I,new I],Xn=new I,vr=new to,xr=new I,Mr=new I,Sr=new I,ui=new I,fi=new I,Hi=new I,xs=new I,fo=new I,ho=new I,Gi=new I;function ja(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Gi.fromArray(i,s);const a=r.x*Math.abs(Gi.x)+r.y*Math.abs(Gi.y)+r.z*Math.abs(Gi.z),l=t.dot(Gi),c=e.dot(Gi),u=n.dot(Gi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const w0=new to,Ms=new I,$a=new I;class Rc{constructor(t=new I,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):w0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ms.subVectors(t,this.center);const e=Ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ms,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ms.copy(t.center).add($a)),this.expandByPoint(Ms.copy(t.center).sub($a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qn=new I,Za=new I,po=new I,hi=new I,Ja=new I,mo=new I,Qa=new I;class bd{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Za.copy(t).add(e).multiplyScalar(.5),po.copy(e).sub(t).normalize(),hi.copy(this.origin).sub(Za);const s=t.distanceTo(e)*.5,o=-this.direction.dot(po),a=hi.dot(this.direction),l=-hi.dot(po),c=hi.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Za).addScaledVector(po,h),p}intersectSphere(t,e){qn.subVectors(t.center,this.origin);const n=qn.dot(this.direction),r=qn.dot(qn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,r,s){Ja.subVectors(e,t),mo.subVectors(n,t),Qa.crossVectors(Ja,mo);let o=this.direction.dot(Qa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,t);const l=a*this.direction.dot(mo.crossVectors(hi,mo));if(l<0)return null;const c=a*this.direction.dot(Ja.cross(hi));if(c<0||l+c>o)return null;const u=-a*hi.dot(Qa);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Me{constructor(t,e,n,r,s,o,a,l,c,u,f,h,p,g,_,m){Me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,f,h,p,g,_,m)}set(t,e,n,r,s,o,a,l,c,u,f,h,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Er.setFromMatrixColumn(t,0).length(),s=1/Er.setFromMatrixColumn(t,1).length(),o=1/Er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=o*u,p=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=p+g*c,e[5]=h-_*c,e[9]=-a*l,e[2]=_-h*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,p=l*f,g=c*u,_=c*f;e[0]=h+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,p=l*f,g=c*u,_=c*f;e[0]=h-_*a,e[4]=-o*f,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,p=o*f,g=a*u,_=a*f;e[0]=l*u,e[4]=g*c-p,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+p,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=o*u,e[9]=p*f-g,e[2]=g*f-p,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(R0,t,C0)}lookAt(t,e,n){const r=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),di.crossVectors(n,Qe),di.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),di.crossVectors(n,Qe)),di.normalize(),_o.crossVectors(Qe,di),r[0]=di.x,r[4]=_o.x,r[8]=Qe.x,r[1]=di.y,r[5]=_o.y,r[9]=Qe.y,r[2]=di.z,r[6]=_o.z,r[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],E=n[3],v=n[7],y=n[11],T=n[15],C=r[0],w=r[4],L=r[8],M=r[12],R=r[1],q=r[5],st=r[9],O=r[13],k=r[2],G=r[6],j=r[10],B=r[14],H=r[3],et=r[7],rt=r[11],z=r[15];return s[0]=o*C+a*R+l*k+c*H,s[4]=o*w+a*q+l*G+c*et,s[8]=o*L+a*st+l*j+c*rt,s[12]=o*M+a*O+l*B+c*z,s[1]=u*C+f*R+h*k+p*H,s[5]=u*w+f*q+h*G+p*et,s[9]=u*L+f*st+h*j+p*rt,s[13]=u*M+f*O+h*B+p*z,s[2]=g*C+_*R+m*k+d*H,s[6]=g*w+_*q+m*G+d*et,s[10]=g*L+_*st+m*j+d*rt,s[14]=g*M+_*O+m*B+d*z,s[3]=E*C+v*R+y*k+T*H,s[7]=E*w+v*q+y*G+T*et,s[11]=E*L+v*st+y*j+T*rt,s[15]=E*M+v*O+y*B+T*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*p-n*l*p)+_*(+e*l*p-e*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+e*c*f-e*a*p-s*o*f+n*o*p+s*a*u-n*c*u)+d*(-r*a*u-e*l*f+e*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],E=f*m*c-_*h*c+_*l*p-a*m*p-f*l*d+a*h*d,v=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,y=u*_*c-g*f*c+g*a*p-o*_*p-u*a*d+o*f*d,T=g*f*l-u*_*l-g*a*h+o*_*h+u*a*m-o*f*m,C=e*E+n*v+r*y+s*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return t[0]=E*w,t[1]=(_*h*s-f*m*s-_*r*p+n*m*p+f*r*d-n*h*d)*w,t[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*d+n*l*d)*w,t[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*p-n*l*p)*w,t[4]=v*w,t[5]=(u*m*s-g*h*s+g*r*p-e*m*p-u*r*d+e*h*d)*w,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*d-e*l*d)*w,t[7]=(o*h*s-u*l*s+u*r*c-e*h*c-o*r*p+e*l*p)*w,t[8]=y*w,t[9]=(g*f*s-u*_*s-g*n*p+e*_*p+u*n*d-e*f*d)*w,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*d+e*a*d)*w,t[11]=(u*a*s-o*f*s-u*n*c+e*f*c+o*n*p-e*a*p)*w,t[12]=T*w,t[13]=(u*_*r-g*f*r+g*n*h-e*_*h-u*n*m+e*f*m)*w,t[14]=(g*a*r-o*_*r-g*n*l+e*_*l+o*n*m-e*a*m)*w,t[15]=(o*f*r-u*a*r+u*n*l-e*f*l-o*n*h+e*a*h)*w,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,_=o*u,m=o*f,d=a*f,E=l*c,v=l*u,y=l*f,T=n.x,C=n.y,w=n.z;return r[0]=(1-(_+d))*T,r[1]=(p+y)*T,r[2]=(g-v)*T,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(h+d))*C,r[6]=(m+E)*C,r[7]=0,r[8]=(g+v)*w,r[9]=(m-E)*w,r[10]=(1-(h+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Er.set(r[0],r[1],r[2]).length();const o=Er.set(r[4],r[5],r[6]).length(),a=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],vn.copy(this);const c=1/s,u=1/o,f=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=f,vn.elements[9]*=f,vn.elements[10]*=f,e.setFromRotationMatrix(vn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=ei){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),h=(n+r)/(n-r);let p,g;if(a===ei)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Zo)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=ei){const l=this.elements,c=1/(e-t),u=1/(n-r),f=1/(o-s),h=(e+t)*c,p=(n+r)*u;let g,_;if(a===ei)g=(o+s)*f,_=-2*f;else if(a===Zo)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Er=new I,vn=new Me,R0=new I(0,0,0),C0=new I(1,1,1),di=new I,_o=new I,Qe=new I,mf=new Me,_f=new Qs;class xi{constructor(t=0,e=0,n=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _f.setFromEuler(this),this.setFromQuaternion(_f,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Cc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let P0=0;const gf=new I,yr=new Qs,Yn=new Me,go=new I,Ss=new I,L0=new I,D0=new Qs,vf=new I(1,0,0),xf=new I(0,1,0),Mf=new I(0,0,1),U0={type:"added"},Sf={type:"removed"};class qe extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const t=new I,e=new xi,n=new Qs,r=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Me},normalMatrix:{value:new Gt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,e){return yr.setFromAxisAngle(t,e),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(vf,t)}rotateY(t){return this.rotateOnAxis(xf,t)}rotateZ(t){return this.rotateOnAxis(Mf,t)}translateOnAxis(t,e){return gf.copy(t).applyQuaternion(this.quaternion),this.position.add(gf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vf,t)}translateY(t){return this.translateOnAxis(xf,t)}translateZ(t){return this.translateOnAxis(Mf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?go.copy(t):go.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ss,go,this.up):Yn.lookAt(go,Ss,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(Yn),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(U0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Sf)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,L0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,D0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}qe.DEFAULT_UP=new I(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new I,Kn=new I,tl=new I,jn=new I,Ar=new I,Tr=new I,Ef=new I,el=new I,nl=new I,il=new I;let vo=!1;class un{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),xn.subVectors(t,e),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){xn.subVectors(r,e),Kn.subVectors(n,e),tl.subVectors(t,e);const o=xn.dot(xn),a=xn.dot(Kn),l=xn.dot(tl),c=Kn.dot(Kn),u=Kn.dot(tl),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,jn),jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getUV(t,e,n,r,s,o,a,l){return vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vo=!0),this.getInterpolation(t,e,n,r,s,o,a,l)}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,jn),l.setScalar(0),l.addScaledVector(s,jn.x),l.addScaledVector(o,jn.y),l.addScaledVector(a,jn.z),l}static isFrontFacing(t,e,n,r){return xn.subVectors(n,e),Kn.subVectors(t,e),xn.cross(Kn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),xn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,r,s){return vo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),vo=!0),un.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}getInterpolation(t,e,n,r,s){return un.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Ar.subVectors(r,n),Tr.subVectors(s,n),el.subVectors(t,n);const l=Ar.dot(el),c=Tr.dot(el);if(l<=0&&c<=0)return e.copy(n);nl.subVectors(t,r);const u=Ar.dot(nl),f=Tr.dot(nl);if(u>=0&&f<=u)return e.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ar,o);il.subVectors(t,s);const p=Ar.dot(il),g=Tr.dot(il);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Tr,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Ef.subVectors(s,r),a=(f-u)/(f-u+(p-g)),e.copy(r).addScaledVector(Ef,a);const d=1/(m+_+h);return o=_*d,a=h*d,e.copy(n).addScaledVector(Ar,o).addScaledVector(Tr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let I0=0;class eo extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=Yr,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ud,this.blendDst=fd,this.blendEquation=Br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Il,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=l0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},xo={h:0,s:0,l:0};function rl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=zt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,gn.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=gn.workingColorSpace){return this.r=t,this.g=e,this.b=n,gn.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=gn.workingColorSpace){if(t=g0(t,1),e=Ve(e,0,1),n=Ve(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=rl(o,s,t+1/3),this.g=rl(o,s,t),this.b=rl(o,s,t-1/3)}return gn.toWorkingColorSpace(this,r),this}setStyle(t,e=zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=zt){const n=wd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kr(t.r),this.g=Kr(t.g),this.b=Kr(t.b),this}copyLinearToSRGB(t){return this.r=qa(t.r),this.g=qa(t.g),this.b=qa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zt){return gn.fromWorkingColorSpace(be.copy(this),t),Math.round(Ve(be.r*255,0,255))*65536+Math.round(Ve(be.g*255,0,255))*256+Math.round(Ve(be.b*255,0,255))}getHexString(t=zt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=gn.workingColorSpace){gn.fromWorkingColorSpace(be.copy(this),e);const n=be.r,r=be.g,s=be.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=gn.workingColorSpace){return gn.fromWorkingColorSpace(be.copy(this),e),t.r=be.r,t.g=be.g,t.b=be.b,t}getStyle(t=zt){gn.fromWorkingColorSpace(be.copy(this),t);const e=be.r,n=be.g,r=be.b;return t!==zt?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Mn),Mn.h+=t,Mn.s+=e,Mn.l+=n,this.setHSL(Mn.h,Mn.s,Mn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mn),t.getHSL(xo);const n=Wa(Mn.h,xo.h,e),r=Wa(Mn.s,xo.s,e),s=Wa(Mn.l,xo.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const be=new Qt;Qt.NAMES=wd;class Pc extends eo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new I,Mo=new Vt;class Rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zl,this.updateRange={offset:0,count:-1},this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Rd extends Rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Cd extends Rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class sr extends Rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let O0=0;const on=new Me,sl=new qe,br=new I,tn=new to,Es=new to,xe=new I;class Ii extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ed(t)?Cd:Rd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Gt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return sl.lookAt(t),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sr(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(tn.min,Es.min),tn.expandByPoint(xe),xe.addVectors(tn.max,Es.max),tn.expandByPoint(xe)):(tn.expandByPoint(Es.min),tn.expandByPoint(Es.max))}tn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)xe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(xe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xe.fromBufferAttribute(a,c),l&&(br.fromBufferAttribute(t,c),xe.add(br)),r=Math.max(r,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new I,u[R]=new I;const f=new I,h=new I,p=new I,g=new Vt,_=new Vt,m=new Vt,d=new I,E=new I;function v(R,q,st){f.fromArray(r,R*3),h.fromArray(r,q*3),p.fromArray(r,st*3),g.fromArray(o,R*2),_.fromArray(o,q*2),m.fromArray(o,st*2),h.sub(f),p.sub(f),_.sub(g),m.sub(g);const O=1/(_.x*m.y-m.x*_.y);isFinite(O)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(O),E.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(O),c[R].add(d),c[q].add(d),c[st].add(d),u[R].add(E),u[q].add(E),u[st].add(E))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let R=0,q=y.length;R<q;++R){const st=y[R],O=st.start,k=st.count;for(let G=O,j=O+k;G<j;G+=3)v(n[G+0],n[G+1],n[G+2])}const T=new I,C=new I,w=new I,L=new I;function M(R){w.fromArray(s,R*3),L.copy(w);const q=c[R];T.copy(q),T.sub(w.multiplyScalar(w.dot(q))).normalize(),C.crossVectors(L,q);const O=C.dot(u[R])<0?-1:1;l[R*4]=T.x,l[R*4+1]=T.y,l[R*4+2]=T.z,l[R*4+3]=O}for(let R=0,q=y.length;R<q;++R){const st=y[R],O=st.start,k=st.count;for(let G=O,j=O+k;G<j;G+=3)M(n[G+0]),M(n[G+1]),M(n[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,c=new I,u=new I,f=new I;if(t)for(let h=0,p=t.count;h<p;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new Rn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ii,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yf=new Me,ki=new bd,So=new Rc,Af=new I,wr=new I,Rr=new I,Cr=new I,ol=new I,Eo=new I,yo=new Vt,Ao=new Vt,To=new Vt,Tf=new I,bf=new I,wf=new I,bo=new I,wo=new I;class ni extends qe{constructor(t=new Ii,e=new Pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Eo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ol.fromBufferAttribute(f,t),o?Eo.addScaledVector(ol,u):Eo.addScaledVector(ol.sub(e),u))}e.add(Eo)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(s),ki.copy(t.ray).recast(t.near),!(So.containsPoint(ki.origin)===!1&&(ki.intersectSphere(So,Af)===null||ki.origin.distanceToSquared(Af)>(t.far-t.near)**2))&&(yf.copy(s).invert(),ki.copy(t.ray).applyMatrix4(yf),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,T=v;y<T;y+=3){const C=a.getX(y),w=a.getX(y+1),L=a.getX(y+2);r=Ro(this,d,t,n,c,u,f,C,w,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Ro(this,o,t,n,c,u,f,E,v,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=E,T=v;y<T;y+=3){const C=y,w=y+1,L=y+2;r=Ro(this,d,t,n,c,u,f,C,w,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=m,v=m+1,y=m+2;r=Ro(this,o,t,n,c,u,f,E,v,y),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function N0(i,t,e,n,r,s,o,a){let l;if(t.side===Xe?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Li,a),l===null)return null;wo.copy(a),wo.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(wo);return c<e.near||c>e.far?null:{distance:c,point:wo.clone(),object:i}}function Ro(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,wr),i.getVertexPosition(l,Rr),i.getVertexPosition(c,Cr);const u=N0(i,t,e,n,wr,Rr,Cr,bo);if(u){r&&(yo.fromBufferAttribute(r,a),Ao.fromBufferAttribute(r,l),To.fromBufferAttribute(r,c),u.uv=un.getInterpolation(bo,wr,Rr,Cr,yo,Ao,To,new Vt)),s&&(yo.fromBufferAttribute(s,a),Ao.fromBufferAttribute(s,l),To.fromBufferAttribute(s,c),u.uv1=un.getInterpolation(bo,wr,Rr,Cr,yo,Ao,To,new Vt),u.uv2=u.uv1),o&&(Tf.fromBufferAttribute(o,a),bf.fromBufferAttribute(o,l),wf.fromBufferAttribute(o,c),u.normal=un.getInterpolation(bo,wr,Rr,Cr,Tf,bf,wf,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};un.getNormal(wr,Rr,Cr,f.normal),u.face=f}return u}class ms extends Ii{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new sr(c,3)),this.setAttribute("normal",new sr(u,3)),this.setAttribute("uv",new sr(f,2));function g(_,m,d,E,v,y,T,C,w,L,M){const R=y/w,q=T/L,st=y/2,O=T/2,k=C/2,G=w+1,j=L+1;let B=0,H=0;const et=new I;for(let rt=0;rt<j;rt++){const z=rt*q-O;for(let K=0;K<G;K++){const pt=K*R-st;et[_]=pt*E,et[m]=z*v,et[d]=k,c.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[d]=C>0?1:-1,u.push(et.x,et.y,et.z),f.push(K/w),f.push(1-rt/L),B+=1}}for(let rt=0;rt<L;rt++)for(let z=0;z<w;z++){const K=h+z+G*rt,pt=h+z+G*(rt+1),ut=h+(z+1)+G*(rt+1),dt=h+(z+1)+G*rt;l.push(K,pt,dt),l.push(pt,ut,dt),H+=6}a.addGroup(p,H,M),p+=H,h+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ss(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ze(i){const t={};for(let e=0;e<i.length;e++){const n=ss(i[e]);for(const r in n)t[r]=n[r]}return t}function F0(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pd(i){return i.getRenderTarget()===null?i.outputColorSpace:Gn}const B0={clone:ss,merge:ze};var z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends eo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z0,this.fragmentShader=H0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=F0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ld extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=ei}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fn extends Ld{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gl*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Va*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Pr=-90,Lr=1;class G0 extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new fn(Pr,Lr,t,e);r.layers=this.layers,this.add(r);const s=new fn(Pr,Lr,t,e);s.layers=this.layers,this.add(s);const o=new fn(Pr,Lr,t,e);o.layers=this.layers,this.add(o);const a=new fn(Pr,Lr,t,e);a.layers=this.layers,this.add(a);const l=new fn(Pr,Lr,t,e);l.layers=this.layers,this.add(l);const c=new fn(Pr,Lr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===ei)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=t.getRenderTarget(),f=t.toneMapping,h=t.xr.enabled;t.toneMapping=si,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,r),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=f,t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Dd extends Ge{constructor(t,e,n,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ns,super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class k0 extends hr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];e.encoding!==void 0&&(Is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ir?zt:rr),this.texture=new Dd(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ms(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:Ti});s.uniforms.tEquirect.value=e;const o=new ni(r,s),a=e.minFilter;return e.minFilter===Vs&&(e.minFilter=cn),new G0(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const al=new I,V0=new I,W0=new Gt;class qi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=al.subVectors(n,e).cross(V0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(al),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||W0.getNormalMatrix(t),r=this.coplanarPoint(al).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new Rc,Co=new I;class Ud{constructor(t=new qi,e=new qi,n=new qi,r=new qi,s=new qi,o=new qi){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ei){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],E=r[13],v=r[14],y=r[15];if(n[0].setComponents(l-s,h-c,m-p,y-d).normalize(),n[1].setComponents(l+s,h+c,m+p,y+d).normalize(),n[2].setComponents(l+o,h+u,m+g,y+E).normalize(),n[3].setComponents(l-o,h-u,m-g,y-E).normalize(),n[4].setComponents(l-a,h-f,m-_,y-v).normalize(),e===ei)n[5].setComponents(l+a,h+f,m+_,y+v).normalize();else if(e===Zo)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Co.x=r.normal.x>0?t.max.x:t.min.x,Co.y=r.normal.y>0?t.max.y:t.min.y,Co.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Co)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Id(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function X0(i,t){const e=t.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;i.bindBuffer(f,c),p.count===-1?i.bufferSubData(f,0,h):(e?i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Lc extends Ii{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=t/a,h=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const E=d*h-o;for(let v=0;v<c;v++){const y=v*f-s;g.push(y,-E,0),_.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const v=E+c*d,y=E+c*(d+1),T=E+1+c*(d+1),C=E+1+c*d;p.push(v,y,C),p.push(y,T,C)}this.setIndex(p),this.setAttribute("position",new sr(g,3)),this.setAttribute("normal",new sr(_,3)),this.setAttribute("uv",new sr(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.width,t.height,t.widthSegments,t.heightSegments)}}var q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y0=`#ifdef USE_ALPHAHASH
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
#endif`,K0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Q0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ev=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iv=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,rv=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dv=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,pv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,mv=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sv=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ev=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,yv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,Tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bv=`#ifdef USE_ENVMAP
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
#endif`,wv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lv=`#ifdef USE_GRADIENTMAP
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
}`,Dv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Fv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Bv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Vv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Wv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Yv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$v=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Zv=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Jv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tx=`#if defined( USE_POINTS_UV )
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
#endif`,ex=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ix=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,sx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ax=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,lx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hx=`#ifdef USE_NORMALMAP
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
#endif`,dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_x=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,xx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ex=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ax=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Px=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dx=`#ifdef USE_SKINNING
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
#endif`,Ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ix=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nx=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fx=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bx=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,$x=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Jx=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Qx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eM=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iM=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,rM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,sM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,oM=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,aM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,lM=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uM=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,hM=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,dM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,pM=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mM=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,_M=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,gM=`uniform float size;
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
}`,vM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,xM=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,MM=`uniform vec3 color;
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
}`,SM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,EM=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Bt={alphahash_fragment:q0,alphahash_pars_fragment:Y0,alphamap_fragment:K0,alphamap_pars_fragment:j0,alphatest_fragment:$0,alphatest_pars_fragment:Z0,aomap_fragment:J0,aomap_pars_fragment:Q0,begin_vertex:tv,beginnormal_vertex:ev,bsdfs:nv,iridescence_fragment:iv,bumpmap_pars_fragment:rv,clipping_planes_fragment:sv,clipping_planes_pars_fragment:ov,clipping_planes_pars_vertex:av,clipping_planes_vertex:lv,color_fragment:cv,color_pars_fragment:uv,color_pars_vertex:fv,color_vertex:hv,common:dv,cube_uv_reflection_fragment:pv,defaultnormal_vertex:mv,displacementmap_pars_vertex:_v,displacementmap_vertex:gv,emissivemap_fragment:vv,emissivemap_pars_fragment:xv,colorspace_fragment:Mv,colorspace_pars_fragment:Sv,envmap_fragment:Ev,envmap_common_pars_fragment:yv,envmap_pars_fragment:Av,envmap_pars_vertex:Tv,envmap_physical_pars_fragment:Fv,envmap_vertex:bv,fog_vertex:wv,fog_pars_vertex:Rv,fog_fragment:Cv,fog_pars_fragment:Pv,gradientmap_pars_fragment:Lv,lightmap_fragment:Dv,lightmap_pars_fragment:Uv,lights_lambert_fragment:Iv,lights_lambert_pars_fragment:Ov,lights_pars_begin:Nv,lights_toon_fragment:Bv,lights_toon_pars_fragment:zv,lights_phong_fragment:Hv,lights_phong_pars_fragment:Gv,lights_physical_fragment:kv,lights_physical_pars_fragment:Vv,lights_fragment_begin:Wv,lights_fragment_maps:Xv,lights_fragment_end:qv,logdepthbuf_fragment:Yv,logdepthbuf_pars_fragment:Kv,logdepthbuf_pars_vertex:jv,logdepthbuf_vertex:$v,map_fragment:Zv,map_pars_fragment:Jv,map_particle_fragment:Qv,map_particle_pars_fragment:tx,metalnessmap_fragment:ex,metalnessmap_pars_fragment:nx,morphcolor_vertex:ix,morphnormal_vertex:rx,morphtarget_pars_vertex:sx,morphtarget_vertex:ox,normal_fragment_begin:ax,normal_fragment_maps:lx,normal_pars_fragment:cx,normal_pars_vertex:ux,normal_vertex:fx,normalmap_pars_fragment:hx,clearcoat_normal_fragment_begin:dx,clearcoat_normal_fragment_maps:px,clearcoat_pars_fragment:mx,iridescence_pars_fragment:_x,opaque_fragment:gx,packing:vx,premultiplied_alpha_fragment:xx,project_vertex:Mx,dithering_fragment:Sx,dithering_pars_fragment:Ex,roughnessmap_fragment:yx,roughnessmap_pars_fragment:Ax,shadowmap_pars_fragment:Tx,shadowmap_pars_vertex:bx,shadowmap_vertex:wx,shadowmask_pars_fragment:Rx,skinbase_vertex:Cx,skinning_pars_vertex:Px,skinning_vertex:Lx,skinnormal_vertex:Dx,specularmap_fragment:Ux,specularmap_pars_fragment:Ix,tonemapping_fragment:Ox,tonemapping_pars_fragment:Nx,transmission_fragment:Fx,transmission_pars_fragment:Bx,uv_pars_fragment:zx,uv_pars_vertex:Hx,uv_vertex:Gx,worldpos_vertex:kx,background_vert:Vx,background_frag:Wx,backgroundCube_vert:Xx,backgroundCube_frag:qx,cube_vert:Yx,cube_frag:Kx,depth_vert:jx,depth_frag:$x,distanceRGBA_vert:Zx,distanceRGBA_frag:Jx,equirect_vert:Qx,equirect_frag:tM,linedashed_vert:eM,linedashed_frag:nM,meshbasic_vert:iM,meshbasic_frag:rM,meshlambert_vert:sM,meshlambert_frag:oM,meshmatcap_vert:aM,meshmatcap_frag:lM,meshnormal_vert:cM,meshnormal_frag:uM,meshphong_vert:fM,meshphong_frag:hM,meshphysical_vert:dM,meshphysical_frag:pM,meshtoon_vert:mM,meshtoon_frag:_M,points_vert:gM,points_frag:vM,shadow_vert:xM,shadow_frag:MM,sprite_vert:SM,sprite_frag:EM},mt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},On={basic:{uniforms:ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:ze([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:ze([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:ze([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:ze([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:ze([mt.points,mt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:ze([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:ze([mt.common,mt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:ze([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:ze([mt.sprite,mt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:ze([mt.common,mt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:ze([mt.lights,mt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};On.physical={uniforms:ze([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Po={r:0,b:0,g:0};function yM(i,t,e,n,r,s,o){const a=new Qt(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(m,d){let E=!1,v=d.isScene===!0?d.background:null;switch(v&&v.isTexture&&(v=(d.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),E=!0),i.xr.getEnvironmentBlendMode()){case"opaque":E=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),E=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),E=!0;break}(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ga)?(u===void 0&&(u=new ni(new ms(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:ss(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,w,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=v.colorSpace!==zt,(f!==v||h!==v.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new ni(new Lc(2,2),new dr({name:"BackgroundMaterial",uniforms:ss(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=v.colorSpace!==zt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(Po,Pd(i)),n.buffers.color.setClear(Po.r,Po.g,Po.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:g}}function AM(i,t,e,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(k,G,j,B,H){let et=!1;if(o){const rt=_(B,j,G);c!==rt&&(c=rt,p(c.object)),et=d(k,B,j,H),et&&E(k,B,j,H)}else{const rt=G.wireframe===!0;(c.geometry!==B.id||c.program!==j.id||c.wireframe!==rt)&&(c.geometry=B.id,c.program=j.id,c.wireframe=rt,et=!0)}H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(et||u)&&(u=!1,L(k,G,j,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(k){return n.isWebGL2?i.bindVertexArray(k):s.bindVertexArrayOES(k)}function g(k){return n.isWebGL2?i.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function _(k,G,j){const B=j.wireframe===!0;let H=a[k.id];H===void 0&&(H={},a[k.id]=H);let et=H[G.id];et===void 0&&(et={},H[G.id]=et);let rt=et[B];return rt===void 0&&(rt=m(h()),et[B]=rt),rt}function m(k){const G=[],j=[],B=[];for(let H=0;H<r;H++)G[H]=0,j[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:j,attributeDivisors:B,object:k,attributes:{},index:null}}function d(k,G,j,B){const H=c.attributes,et=G.attributes;let rt=0;const z=j.getAttributes();for(const K in z)if(z[K].location>=0){const ut=H[K];let dt=et[K];if(dt===void 0&&(K==="instanceMatrix"&&k.instanceMatrix&&(dt=k.instanceMatrix),K==="instanceColor"&&k.instanceColor&&(dt=k.instanceColor)),ut===void 0||ut.attribute!==dt||dt&&ut.data!==dt.data)return!0;rt++}return c.attributesNum!==rt||c.index!==B}function E(k,G,j,B){const H={},et=G.attributes;let rt=0;const z=j.getAttributes();for(const K in z)if(z[K].location>=0){let ut=et[K];ut===void 0&&(K==="instanceMatrix"&&k.instanceMatrix&&(ut=k.instanceMatrix),K==="instanceColor"&&k.instanceColor&&(ut=k.instanceColor));const dt={};dt.attribute=ut,ut&&ut.data&&(dt.data=ut.data),H[K]=dt,rt++}c.attributes=H,c.attributesNum=rt,c.index=B}function v(){const k=c.newAttributes;for(let G=0,j=k.length;G<j;G++)k[G]=0}function y(k){T(k,0)}function T(k,G){const j=c.newAttributes,B=c.enabledAttributes,H=c.attributeDivisors;j[k]=1,B[k]===0&&(i.enableVertexAttribArray(k),B[k]=1),H[k]!==G&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,G),H[k]=G)}function C(){const k=c.newAttributes,G=c.enabledAttributes;for(let j=0,B=G.length;j<B;j++)G[j]!==k[j]&&(i.disableVertexAttribArray(j),G[j]=0)}function w(k,G,j,B,H,et,rt){rt===!0?i.vertexAttribIPointer(k,G,j,H,et):i.vertexAttribPointer(k,G,j,B,H,et)}function L(k,G,j,B){if(n.isWebGL2===!1&&(k.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const H=B.attributes,et=j.getAttributes(),rt=G.defaultAttributeValues;for(const z in et){const K=et[z];if(K.location>=0){let pt=H[z];if(pt===void 0&&(z==="instanceMatrix"&&k.instanceMatrix&&(pt=k.instanceMatrix),z==="instanceColor"&&k.instanceColor&&(pt=k.instanceColor)),pt!==void 0){const ut=pt.normalized,dt=pt.itemSize,yt=e.get(pt);if(yt===void 0)continue;const Ct=yt.buffer,wt=yt.type,It=yt.bytesPerElement,fe=n.isWebGL2===!0&&(wt===i.INT||wt===i.UNSIGNED_INT||pt.gpuType===pd);if(pt.isInterleavedBufferAttribute){const Ot=pt.data,x=Ot.stride,P=pt.offset;if(Ot.isInstancedInterleavedBuffer){for(let U=0;U<K.locationSize;U++)T(K.location+U,Ot.meshPerAttribute);k.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Ot.meshPerAttribute*Ot.count)}else for(let U=0;U<K.locationSize;U++)y(K.location+U);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let U=0;U<K.locationSize;U++)w(K.location+U,dt/K.locationSize,wt,ut,x*It,(P+dt/K.locationSize*U)*It,fe)}else{if(pt.isInstancedBufferAttribute){for(let Ot=0;Ot<K.locationSize;Ot++)T(K.location+Ot,pt.meshPerAttribute);k.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ot=0;Ot<K.locationSize;Ot++)y(K.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let Ot=0;Ot<K.locationSize;Ot++)w(K.location+Ot,dt/K.locationSize,wt,ut,dt*It,dt/K.locationSize*Ot*It,fe)}}else if(rt!==void 0){const ut=rt[z];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(K.location,ut);break;case 3:i.vertexAttrib3fv(K.location,ut);break;case 4:i.vertexAttrib4fv(K.location,ut);break;default:i.vertexAttrib1fv(K.location,ut)}}}}C()}function M(){st();for(const k in a){const G=a[k];for(const j in G){const B=G[j];for(const H in B)g(B[H].object),delete B[H];delete G[j]}delete a[k]}}function R(k){if(a[k.id]===void 0)return;const G=a[k.id];for(const j in G){const B=G[j];for(const H in B)g(B[H].object),delete B[H];delete G[j]}delete a[k.id]}function q(k){for(const G in a){const j=a[G];if(j[k.id]===void 0)continue;const B=j[k.id];for(const H in B)g(B[H].object),delete B[H];delete j[k.id]}}function st(){O(),u=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:st,resetDefaultState:O,dispose:M,releaseStatesOfGeometry:R,releaseStatesOfProgram:q,initAttributes:v,enableAttribute:y,disableUnusedAttributes:C}}function TM(i,t,e,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(r)h=i,p="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),e.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function bM(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||t.has("OES_texture_float"),T=v&&y,C=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:C}}function wM(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new qi,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||r;return r=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,v=E*4;let y=d.clippingState||null;l.value=y,y=u(g,h,v,p);for(let T=0;T!==v;++T)y[T]=e[T];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,E=h.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,y=p;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(E,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function RM(i){let t=new WeakMap;function e(o,a){return a===Ol?o.mapping=ns:a===Nl&&(o.mapping=is),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ol||a===Nl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new k0(l.height/2);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class CM extends Ld{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hr=4,Rf=[.125,.215,.35,.446,.526,.582],Zi=20,ll=new CM,Cf=new Qt;let cl=null;const Yi=(1+Math.sqrt(5))/2,Dr=1/Yi,Pf=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,Yi,Dr),new I(0,Yi,-Dr),new I(Dr,0,Yi),new I(-Dr,0,Yi),new I(Yi,Dr,0),new I(-Yi,Dr,0)];class Lf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){cl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=If(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cl),t.scissorTest=!1,Lo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ns||t.mapping===is?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cl=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Ws,format:An,colorSpace:Gn,depthBuffer:!1},r=Df(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Df(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PM(s)),this._blurMaterial=LM(s,t,e)}return r}_compileMaterial(t){const e=new ni(this._lodPlanes[0],t);this._renderer.compile(e,ll)}_sceneToCubeUV(t,e,n,r){const a=new fn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Cf),u.toneMapping=si,u.autoClear=!1;const p=new Pc({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),g=new ni(new ms,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Cf),_=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Lo(r,E*v,d>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ns||t.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=If()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ni(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Lo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ll)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pf[(r-1)%Pf.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ni(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Zi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Zi;m>Zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);const d=[];let E=0;for(let w=0;w<Zi;++w){const L=w/_,M=Math.exp(-L*L/2);d.push(M),w===0?E+=M:w<m&&(E+=2*M)}for(let w=0;w<d.length;w++)d[w]=d[w]/E;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const y=this._sizeLods[r],T=3*y*(r>v-Hr?r-v+Hr:0),C=4*(this._cubeSize-y);Lo(e,T,C,3*y,2*y),l.setRenderTarget(e),l.render(f,ll)}}function PM(i){const t=[],e=[],n=[];let r=i;const s=i-Hr+1+Rf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Hr?l=Rf[o-i+Hr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,E=new Float32Array(_*g*p),v=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,L=C>2?0:-1,M=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];E.set(M,_*g*C),v.set(h,m*g*C);const R=[C,C,C,C,C,C];y.set(R,d*g*C)}const T=new Ii;T.setAttribute("position",new Rn(E,_)),T.setAttribute("uv",new Rn(v,m)),T.setAttribute("faceIndex",new Rn(y,d)),t.push(T),r>Hr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Df(i,t,e){const n=new hr(i,t,e);return n.texture.mapping=ga,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lo(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function LM(i,t,e){const n=new Float32Array(Zi),r=new I(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Uf(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function If(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Dc(){return`

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
	`}function DM(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ol||l===Nl,u=l===ns||l===is;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new Lf(i)),f=c?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){e===null&&(e=new Lf(i));const h=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function UM(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function IM(i,t,e,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let v=0,y=E.length;v<y;v+=3){const T=E[v+0],C=E[v+1],w=E[v+2];h.push(T,C,C,w,w,T)}}else{const E=g.array;_=g.version;for(let v=0,y=E.length/3-1;v<y;v+=3){const T=v+0,C=v+1,w=v+2;h.push(T,C,C,w,w,T)}}const m=new(Ed(h)?Cd:Rd)(h,1);m.version=_;const d=s.get(f);d&&t.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function OM(i,t,e,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,p){i.drawElements(s,p,a,h*l),e.update(p,s,1)}function f(h,p,g){if(g===0)return;let _,m;if(r)_=i,m="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,a,h*l,g),e.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function NM(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function FM(i,t){return i[0]-t[0]}function BM(i,t){return Math.abs(t[1])-Math.abs(i[1])}function zM(i,t,e){const n={},r=new Float32Array(8),s=new WeakMap,o=new Ae,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(t.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let k=function(){st.dispose(),s.delete(u),u.removeEventListener("dispose",k)};_!==void 0&&_.texture.dispose();const E=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let L=0;E===!0&&(L=1),v===!0&&(L=2),y===!0&&(L=3);let M=u.attributes.position.count*L,R=1;M>t.maxTextureSize&&(R=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const q=new Float32Array(M*R*4*g),st=new Td(q,M,R,g);st.type=gi,st.needsUpdate=!0;const O=L*4;for(let G=0;G<g;G++){const j=T[G],B=C[G],H=w[G],et=M*R*4*G;for(let rt=0;rt<j.count;rt++){const z=rt*O;E===!0&&(o.fromBufferAttribute(j,rt),q[et+z+0]=o.x,q[et+z+1]=o.y,q[et+z+2]=o.z,q[et+z+3]=0),v===!0&&(o.fromBufferAttribute(B,rt),q[et+z+4]=o.x,q[et+z+5]=o.y,q[et+z+6]=o.z,q[et+z+7]=0),y===!0&&(o.fromBufferAttribute(H,rt),q[et+z+8]=o.x,q[et+z+9]=o.y,q[et+z+10]=o.z,q[et+z+11]=H.itemSize===4?o.w:1)}}_={count:g,texture:st,size:new Vt(M,R)},s.set(u,_),u.addEventListener("dispose",k)}let m=0;for(let E=0;E<h.length;E++)m+=h[E];const d=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",d),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const p=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<p;v++){const y=g[v];y[0]=v,y[1]=h[v]}g.sort(BM);for(let v=0;v<8;v++)v<p&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(FM);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let v=0;v<8;v++){const y=a[v],T=y[0],C=y[1];T!==Number.MAX_SAFE_INTEGER&&C?(_&&u.getAttribute("morphTarget"+v)!==_[T]&&u.setAttribute("morphTarget"+v,_[T]),m&&u.getAttribute("morphNormal"+v)!==m[T]&&u.setAttribute("morphNormal"+v,m[T]),r[v]=C,d+=C):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const E=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",E),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function HM(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(r.get(f)!==c&&(t.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Od=new Ge,Nd=new Td,Fd=new b0,Bd=new Dd,Of=[],Nf=[],Ff=new Float32Array(16),Bf=new Float32Array(9),zf=new Float32Array(4);function _s(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Of[r];if(s===void 0&&(s=new Float32Array(r),Of[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function _e(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function va(i,t){let e=Nf[t];e===void 0&&(e=new Int32Array(t),Nf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function GM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function kM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),_e(e,t)}}function VM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),_e(e,t)}}function WM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),_e(e,t)}}function XM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;zf.set(n),i.uniformMatrix2fv(this.addr,!1,zf),_e(e,n)}}function qM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;Bf.set(n),i.uniformMatrix3fv(this.addr,!1,Bf),_e(e,n)}}function YM(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(me(e,n))return;Ff.set(n),i.uniformMatrix4fv(this.addr,!1,Ff),_e(e,n)}}function KM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function jM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),_e(e,t)}}function $M(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),_e(e,t)}}function ZM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),_e(e,t)}}function JM(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function QM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),_e(e,t)}}function tS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),_e(e,t)}}function eS(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),_e(e,t)}}function nS(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2D(t||Od,r)}function iS(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Fd,r)}function rS(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Bd,r)}function sS(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Nd,r)}function oS(i){switch(i){case 5126:return GM;case 35664:return kM;case 35665:return VM;case 35666:return WM;case 35674:return XM;case 35675:return qM;case 35676:return YM;case 5124:case 35670:return KM;case 35667:case 35671:return jM;case 35668:case 35672:return $M;case 35669:case 35673:return ZM;case 5125:return JM;case 36294:return QM;case 36295:return tS;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return nS;case 35679:case 36299:case 36307:return iS;case 35680:case 36300:case 36308:case 36293:return rS;case 36289:case 36303:case 36311:case 36292:return sS}}function aS(i,t){i.uniform1fv(this.addr,t)}function lS(i,t){const e=_s(t,this.size,2);i.uniform2fv(this.addr,e)}function cS(i,t){const e=_s(t,this.size,3);i.uniform3fv(this.addr,e)}function uS(i,t){const e=_s(t,this.size,4);i.uniform4fv(this.addr,e)}function fS(i,t){const e=_s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function hS(i,t){const e=_s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dS(i,t){const e=_s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pS(i,t){i.uniform1iv(this.addr,t)}function mS(i,t){i.uniform2iv(this.addr,t)}function _S(i,t){i.uniform3iv(this.addr,t)}function gS(i,t){i.uniform4iv(this.addr,t)}function vS(i,t){i.uniform1uiv(this.addr,t)}function xS(i,t){i.uniform2uiv(this.addr,t)}function MS(i,t){i.uniform3uiv(this.addr,t)}function SS(i,t){i.uniform4uiv(this.addr,t)}function ES(i,t,e){const n=this.cache,r=t.length,s=va(e,r);me(n,s)||(i.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Od,s[o])}function yS(i,t,e){const n=this.cache,r=t.length,s=va(e,r);me(n,s)||(i.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Fd,s[o])}function AS(i,t,e){const n=this.cache,r=t.length,s=va(e,r);me(n,s)||(i.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Bd,s[o])}function TS(i,t,e){const n=this.cache,r=t.length,s=va(e,r);me(n,s)||(i.uniform1iv(this.addr,s),_e(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Nd,s[o])}function bS(i){switch(i){case 5126:return aS;case 35664:return lS;case 35665:return cS;case 35666:return uS;case 35674:return fS;case 35675:return hS;case 35676:return dS;case 5124:case 35670:return pS;case 35667:case 35671:return mS;case 35668:case 35672:return _S;case 35669:case 35673:return gS;case 5125:return vS;case 36294:return xS;case 36295:return MS;case 36296:return SS;case 35678:case 36198:case 36298:case 36306:case 35682:return ES;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return AS;case 36289:case 36303:case 36311:case 36292:return TS}}class wS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=oS(e.type)}}class RS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=bS(e.type)}}class CS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const ul=/(\w+)(\])?(\[|\.)?/g;function Hf(i,t){i.seq.push(t),i.map[t.id]=t}function PS(i,t,e){const n=i.name,r=n.length;for(ul.lastIndex=0;;){const s=ul.exec(n),o=ul.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Hf(e,c===void 0?new wS(a,i,t):new RS(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new CS(a),Hf(e,f)),e=f}}}class ko{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);PS(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Gf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}let LS=0;function DS(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function US(i){switch(i){case Gn:return["Linear","( value )"];case zt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function kf(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+DS(i.getShaderSource(t),o)}else return r}function IS(i,t){const e=US(t);return"vec4 "+i+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function OS(i,t){let e;switch(t){case Vg:e="Linear";break;case Wg:e="Reinhard";break;case Xg:e="OptimizedCineon";break;case qg:e="ACESFilmic";break;case Yg:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function NS(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cs).join(`
`)}function FS(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function BS(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Cs(i){return i!==""}function Vf(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(i){return i.replace(zS,GS)}const HS=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function GS(i,t){let e=Bt[t];if(e===void 0){const n=HS.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vl(e)}const kS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xf(i){return i.replace(kS,VS)}function VS(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function qf(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function WS(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===cd?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sg?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(t="SHADOWMAP_TYPE_VSM"),t}function XS(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ns:case is:t="ENVMAP_TYPE_CUBE";break;case ga:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qS(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case is:t="ENVMAP_MODE_REFRACTION";break}return t}function YS(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hd:t="ENVMAP_BLENDING_MULTIPLY";break;case Gg:t="ENVMAP_BLENDING_MIX";break;case kg:t="ENVMAP_BLENDING_ADD";break}return t}function KS(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function jS(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=WS(e),c=XS(e),u=qS(e),f=YS(e),h=KS(e),p=e.isWebGL2?"":NS(e),g=FS(s),_=r.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Cs).join(`
`),d.length>0&&(d+=`
`)):(m=[qf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),d=[p,qf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?Bt.tonemapping_pars_fragment:"",e.toneMapping!==si?OS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,IS("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),o=Vl(o),o=Vf(o,e),o=Wf(o,e),a=Vl(a),a=Vf(a,e),a=Wf(a,e),o=Xf(o),a=Xf(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=E+m+o,y=E+d+a,T=Gf(r,r.VERTEX_SHADER,v),C=Gf(r,r.FRAGMENT_SHADER,y);if(r.attachShader(_,T),r.attachShader(_,C),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(_).trim(),R=r.getShaderInfoLog(T).trim(),q=r.getShaderInfoLog(C).trim();let st=!0,O=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(st=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,T,C);else{const k=kf(r,T,"vertex"),G=kf(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+k+`
`+G)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(R===""||q==="")&&(O=!1);O&&(this.diagnostics={runnable:st,programLog:M,vertexShader:{log:R,prefix:m},fragmentShader:{log:q,prefix:d}})}r.deleteShader(T),r.deleteShader(C);let w;this.getUniforms=function(){return w===void 0&&(w=new ko(r,_)),w};let L;return this.getAttributes=function(){return L===void 0&&(L=BS(r,_)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=LS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=C,this}let $S=0;class ZS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new JS(t),e.set(t,n)),n}}class JS{constructor(t){this.id=$S++,this.code=t,this.usedTimes=0}}function QS(i,t,e,n,r,s,o){const a=new Cc,l=new ZS,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,R,q,st,O){const k=st.fog,G=O.geometry,j=M.isMeshStandardMaterial?st.environment:null,B=(M.isMeshStandardMaterial?e:t).get(M.envMap||j),H=B&&B.mapping===ga?B.image.height:null,et=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const rt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,z=rt!==void 0?rt.length:0;let K=0;G.morphAttributes.position!==void 0&&(K=1),G.morphAttributes.normal!==void 0&&(K=2),G.morphAttributes.color!==void 0&&(K=3);let pt,ut,dt,yt;if(et){const Pn=On[et];pt=Pn.vertexShader,ut=Pn.fragmentShader}else pt=M.vertexShader,ut=M.fragmentShader,l.update(M),dt=l.getVertexShaderID(M),yt=l.getFragmentShaderID(M);const Ct=i.getRenderTarget(),wt=O.isInstancedMesh===!0,It=!!M.map,fe=!!M.matcap,Ot=!!B,x=!!M.aoMap,P=!!M.lightMap,U=!!M.bumpMap,W=!!M.normalMap,X=!!M.displacementMap,ot=!!M.emissiveMap,at=!!M.metalnessMap,$=!!M.roughnessMap,lt=M.anisotropy>0,nt=M.clearcoat>0,St=M.iridescence>0,A=M.sheen>0,S=M.transmission>0,N=lt&&!!M.anisotropyMap,Q=nt&&!!M.clearcoatMap,it=nt&&!!M.clearcoatNormalMap,ct=nt&&!!M.clearcoatRoughnessMap,_t=St&&!!M.iridescenceMap,ft=St&&!!M.iridescenceThicknessMap,Z=A&&!!M.sheenColorMap,Tt=A&&!!M.sheenRoughnessMap,At=!!M.specularMap,bt=!!M.specularColorMap,gt=!!M.specularIntensityMap,xt=S&&!!M.transmissionMap,Nt=S&&!!M.thicknessMap,Zt=!!M.gradientMap,D=!!M.alphaMap,vt=M.alphaTest>0,Y=!!M.alphaHash,ht=!!M.extensions,Mt=!!G.attributes.uv1,Yt=!!G.attributes.uv2,ee=!!G.attributes.uv3;return{isWebGL2:u,shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:pt,fragmentShader:ut,defines:M.defines,customVertexShaderID:dt,customFragmentShaderID:yt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:wt,instancingColor:wt&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ct===null?i.outputColorSpace:Ct.isXRRenderTarget===!0?Ct.texture.colorSpace:Gn,map:It,matcap:fe,envMap:Ot,envMapMode:Ot&&B.mapping,envMapCubeUVHeight:H,aoMap:x,lightMap:P,bumpMap:U,normalMap:W,displacementMap:h&&X,emissiveMap:ot,normalMapObjectSpace:W&&M.normalMapType===a0,normalMapTangentSpace:W&&M.normalMapType===o0,metalnessMap:at,roughnessMap:$,anisotropy:lt,anisotropyMap:N,clearcoat:nt,clearcoatMap:Q,clearcoatNormalMap:it,clearcoatRoughnessMap:ct,iridescence:St,iridescenceMap:_t,iridescenceThicknessMap:ft,sheen:A,sheenColorMap:Z,sheenRoughnessMap:Tt,specularMap:At,specularColorMap:bt,specularIntensityMap:gt,transmission:S,transmissionMap:xt,thicknessMap:Nt,gradientMap:Zt,opaque:M.transparent===!1&&M.blending===Yr,alphaMap:D,alphaTest:vt,alphaHash:Y,combine:M.combine,mapUv:It&&_(M.map.channel),aoMapUv:x&&_(M.aoMap.channel),lightMapUv:P&&_(M.lightMap.channel),bumpMapUv:U&&_(M.bumpMap.channel),normalMapUv:W&&_(M.normalMap.channel),displacementMapUv:X&&_(M.displacementMap.channel),emissiveMapUv:ot&&_(M.emissiveMap.channel),metalnessMapUv:at&&_(M.metalnessMap.channel),roughnessMapUv:$&&_(M.roughnessMap.channel),anisotropyMapUv:N&&_(M.anisotropyMap.channel),clearcoatMapUv:Q&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&_(M.sheenRoughnessMap.channel),specularMapUv:At&&_(M.specularMap.channel),specularColorMapUv:bt&&_(M.specularColorMap.channel),specularIntensityMapUv:gt&&_(M.specularIntensityMap.channel),transmissionMapUv:xt&&_(M.transmissionMap.channel),thicknessMapUv:Nt&&_(M.thicknessMap.channel),alphaMapUv:D&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(W||lt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Mt,vertexUv2s:Yt,vertexUv3s:ee,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(It||D),fog:!!k,useFog:M.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:K,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:M.toneMapped?i.toneMapping:si,useLegacyLights:i.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ti,flipSided:M.side===Xe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ht&&M.extensions.derivatives===!0,extensionFragDepth:ht&&M.extensions.fragDepth===!0,extensionDrawBuffers:ht&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const q in M.defines)R.push(q),R.push(M.defines[q]);return M.isRawShaderMaterial===!1&&(E(R,M),v(R,M),R.push(i.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function E(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function v(M,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),M.push(a.mask)}function y(M){const R=g[M.type];let q;if(R){const st=On[R];q=B0.clone(st.uniforms)}else q=M.uniforms;return q}function T(M,R){let q;for(let st=0,O=c.length;st<O;st++){const k=c[st];if(k.cacheKey===R){q=k,++q.usedTimes;break}}return q===void 0&&(q=new jS(i,R,M,s),c.push(q)),q}function C(M){if(--M.usedTimes===0){const R=c.indexOf(M);c[R]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:T,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:L}}function tE(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function eE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kf(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,h,p,g,_,m){let d=i[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),t++,d}function a(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):e.push(d)}function l(f,h,p,g,_,m){const d=o(f,h,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function c(f,h){e.length>1&&e.sort(f||eE),n.length>1&&n.sort(h||Yf),r.length>1&&r.sort(h||Yf)}function u(){for(let f=t,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function nE(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Kf,i.set(n,[o])):r>=s.length?(o=new Kf,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function iE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Qt};break;case"SpotLight":e={position:new I,direction:new I,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function rE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let sE=0;function oE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function aE(i,t){const e=new iE,n=rE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new I);const s=new I,o=new Me,a=new Me;function l(u,f){let h=0,p=0,g=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let _=0,m=0,d=0,E=0,v=0,y=0,T=0,C=0,w=0,L=0;u.sort(oE);const M=f===!0?Math.PI:1;for(let q=0,st=u.length;q<st;q++){const O=u[q],k=O.color,G=O.intensity,j=O.distance,B=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)h+=k.r*G*M,p+=k.g*G*M,g+=k.b*G*M;else if(O.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(O.sh.coefficients[H],G);else if(O.isDirectionalLight){const H=e.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity*M),O.castShadow){const et=O.shadow,rt=n.get(O);rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,r.directionalShadow[_]=rt,r.directionalShadowMap[_]=B,r.directionalShadowMatrix[_]=O.shadow.matrix,y++}r.directional[_]=H,_++}else if(O.isSpotLight){const H=e.get(O);H.position.setFromMatrixPosition(O.matrixWorld),H.color.copy(k).multiplyScalar(G*M),H.distance=j,H.coneCos=Math.cos(O.angle),H.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),H.decay=O.decay,r.spot[d]=H;const et=O.shadow;if(O.map&&(r.spotLightMap[w]=O.map,w++,et.updateMatrices(O),O.castShadow&&L++),r.spotLightMatrix[d]=et.matrix,O.castShadow){const rt=n.get(O);rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,r.spotShadow[d]=rt,r.spotShadowMap[d]=B,C++}d++}else if(O.isRectAreaLight){const H=e.get(O);H.color.copy(k).multiplyScalar(G),H.halfWidth.set(O.width*.5,0,0),H.halfHeight.set(0,O.height*.5,0),r.rectArea[E]=H,E++}else if(O.isPointLight){const H=e.get(O);if(H.color.copy(O.color).multiplyScalar(O.intensity*M),H.distance=O.distance,H.decay=O.decay,O.castShadow){const et=O.shadow,rt=n.get(O);rt.shadowBias=et.bias,rt.shadowNormalBias=et.normalBias,rt.shadowRadius=et.radius,rt.shadowMapSize=et.mapSize,rt.shadowCameraNear=et.camera.near,rt.shadowCameraFar=et.camera.far,r.pointShadow[m]=rt,r.pointShadowMap[m]=B,r.pointShadowMatrix[m]=O.shadow.matrix,T++}r.point[m]=H,m++}else if(O.isHemisphereLight){const H=e.get(O);H.skyColor.copy(O.color).multiplyScalar(G*M),H.groundColor.copy(O.groundColor).multiplyScalar(G*M),r.hemi[v]=H,v++}}E>0&&(t.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=mt.LTC_FLOAT_1,r.rectAreaLTC2=mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=mt.LTC_HALF_1,r.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==d||R.rectAreaLength!==E||R.hemiLength!==v||R.numDirectionalShadows!==y||R.numPointShadows!==T||R.numSpotShadows!==C||R.numSpotMaps!==w)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=E,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=C+w-L,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=L,R.directionalLength=_,R.pointLength=m,R.spotLength=d,R.rectAreaLength=E,R.hemiLength=v,R.numDirectionalShadows=y,R.numPointShadows=T,R.numSpotShadows=C,R.numSpotMaps=w,r.version=sE++)}function c(u,f){let h=0,p=0,g=0,_=0,m=0;const d=f.matrixWorldInverse;for(let E=0,v=u.length;E<v;E++){const y=u[E];if(y.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),h++}else if(y.isSpotLight){const T=r.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),g++}else if(y.isRectAreaLight){const T=r.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const T=r.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function jf(i,t){const e=new aE(i,t),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){e.setup(n,f)}function c(f){e.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function lE(i,t){let e=new WeakMap;function n(s,o=0){const a=e.get(s);let l;return a===void 0?(l=new jf(i,t),e.set(s,[l])):o>=a.length?(l=new jf(i,t),a.push(l)):l=a[o],l}function r(){e=new WeakMap}return{get:n,dispose:r}}class cE extends eo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uE extends eo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const fE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hE=`uniform sampler2D shadow_pass;
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
}`;function dE(i,t,e){let n=new Ud;const r=new Vt,s=new Vt,o=new Ae,a=new cE({depthPacking:s0}),l=new uE,c={},u=e.maxTextureSize,f={[Li]:Xe,[Xe]:Li,[ti]:ti},h=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:fE,fragmentShader:hE}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ii;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ni(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cd;let d=this.type;this.render=function(T,C,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const L=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Ti),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const st=d!==$n&&this.type===$n,O=d===$n&&this.type!==$n;for(let k=0,G=T.length;k<G;k++){const j=T[k],B=j.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const H=B.getFrameExtents();if(r.multiply(H),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,B.mapSize.y=s.y)),B.map===null||st===!0||O===!0){const rt=this.type!==$n?{minFilter:He,magFilter:He}:{};B.map!==null&&B.map.dispose(),B.map=new hr(r.x,r.y,rt),B.map.texture.name=j.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const et=B.getViewportCount();for(let rt=0;rt<et;rt++){const z=B.getViewport(rt);o.set(s.x*z.x,s.y*z.y,s.x*z.z,s.y*z.w),q.viewport(o),B.updateMatrices(j,rt),n=B.getFrustum(),y(C,w,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===$n&&E(B,w),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(L,M,R)};function E(T,C){const w=t.update(_);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new hr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,w,h,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,w,p,_,null)}function v(T,C,w,L){let M=null;const R=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)M=R;else if(M=w.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const q=M.uuid,st=C.uuid;let O=c[q];O===void 0&&(O={},c[q]=O);let k=O[st];k===void 0&&(k=M.clone(),O[st]=k),M=k}if(M.visible=C.visible,M.wireframe=C.wireframe,L===$n?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=i.properties.get(M);q.light=w}return M}function y(T,C,w,L,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===$n)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const st=t.update(T),O=T.material;if(Array.isArray(O)){const k=st.groups;for(let G=0,j=k.length;G<j;G++){const B=k[G],H=O[B.materialIndex];if(H&&H.visible){const et=v(T,H,L,M);i.renderBufferDirect(w,null,st,et,T,B)}}}else if(O.visible){const k=v(T,O,L,M);i.renderBufferDirect(w,null,st,k,T,null)}}const q=T.children;for(let st=0,O=q.length;st<O;st++)y(q[st],C,w,L,M)}}function pE(i,t,e){const n=e.isWebGL2;function r(){let D=!1;const vt=new Ae;let Y=null;const ht=new Ae(0,0,0,0);return{setMask:function(Mt){Y!==Mt&&!D&&(i.colorMask(Mt,Mt,Mt,Mt),Y=Mt)},setLocked:function(Mt){D=Mt},setClear:function(Mt,Yt,ee,ge,Pn){Pn===!0&&(Mt*=ge,Yt*=ge,ee*=ge),vt.set(Mt,Yt,ee,ge),ht.equals(vt)===!1&&(i.clearColor(Mt,Yt,ee,ge),ht.copy(vt))},reset:function(){D=!1,Y=null,ht.set(-1,0,0,0)}}}function s(){let D=!1,vt=null,Y=null,ht=null;return{setTest:function(Mt){Mt?Ct(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(Mt){vt!==Mt&&!D&&(i.depthMask(Mt),vt=Mt)},setFunc:function(Mt){if(Y!==Mt){switch(Mt){case Ig:i.depthFunc(i.NEVER);break;case Og:i.depthFunc(i.ALWAYS);break;case Ng:i.depthFunc(i.LESS);break;case Il:i.depthFunc(i.LEQUAL);break;case Fg:i.depthFunc(i.EQUAL);break;case Bg:i.depthFunc(i.GEQUAL);break;case zg:i.depthFunc(i.GREATER);break;case Hg:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=Mt}},setLocked:function(Mt){D=Mt},setClear:function(Mt){ht!==Mt&&(i.clearDepth(Mt),ht=Mt)},reset:function(){D=!1,vt=null,Y=null,ht=null}}}function o(){let D=!1,vt=null,Y=null,ht=null,Mt=null,Yt=null,ee=null,ge=null,Pn=null;return{setTest:function(re){D||(re?Ct(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(re){vt!==re&&!D&&(i.stencilMask(re),vt=re)},setFunc:function(re,Ln,Oe){(Y!==re||ht!==Ln||Mt!==Oe)&&(i.stencilFunc(re,Ln,Oe),Y=re,ht=Ln,Mt=Oe)},setOp:function(re,Ln,Oe){(Yt!==re||ee!==Ln||ge!==Oe)&&(i.stencilOp(re,Ln,Oe),Yt=re,ee=Ln,ge=Oe)},setLocked:function(re){D=re},setClear:function(re){Pn!==re&&(i.clearStencil(re),Pn=re)},reset:function(){D=!1,vt=null,Y=null,ht=null,Mt=null,Yt=null,ee=null,ge=null,Pn=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,_=[],m=null,d=!1,E=null,v=null,y=null,T=null,C=null,w=null,L=null,M=!1,R=null,q=null,st=null,O=null,k=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,B=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(H)[1]),j=B>=1):H.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),j=B>=2);let et=null,rt={};const z=i.getParameter(i.SCISSOR_BOX),K=i.getParameter(i.VIEWPORT),pt=new Ae().fromArray(z),ut=new Ae().fromArray(K);function dt(D,vt,Y,ht){const Mt=new Uint8Array(4),Yt=i.createTexture();i.bindTexture(D,Yt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ee=0;ee<Y;ee++)n&&(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)?i.texImage3D(vt,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(vt+ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return Yt}const yt={};yt[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),yt[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(yt[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),yt[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ct(i.DEPTH_TEST),l.setFunc(Il),X(!1),ot(Iu),Ct(i.CULL_FACE),U(Ti);function Ct(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function wt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function It(D,vt){return p[D]!==vt?(i.bindFramebuffer(D,vt),p[D]=vt,n&&(D===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=vt),D===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=vt)),!0):!1}function fe(D,vt){let Y=_,ht=!1;if(D)if(Y=g.get(vt),Y===void 0&&(Y=[],g.set(vt,Y)),D.isWebGLMultipleRenderTargets){const Mt=D.texture;if(Y.length!==Mt.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let Yt=0,ee=Mt.length;Yt<ee;Yt++)Y[Yt]=i.COLOR_ATTACHMENT0+Yt;Y.length=Mt.length,ht=!0}}else Y[0]!==i.COLOR_ATTACHMENT0&&(Y[0]=i.COLOR_ATTACHMENT0,ht=!0);else Y[0]!==i.BACK&&(Y[0]=i.BACK,ht=!0);ht&&(e.isWebGL2?i.drawBuffers(Y):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Ot(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const x={[Br]:i.FUNC_ADD,[yg]:i.FUNC_SUBTRACT,[Ag]:i.FUNC_REVERSE_SUBTRACT};if(n)x[Bu]=i.MIN,x[zu]=i.MAX;else{const D=t.get("EXT_blend_minmax");D!==null&&(x[Bu]=D.MIN_EXT,x[zu]=D.MAX_EXT)}const P={[Tg]:i.ZERO,[bg]:i.ONE,[wg]:i.SRC_COLOR,[ud]:i.SRC_ALPHA,[Ug]:i.SRC_ALPHA_SATURATE,[Lg]:i.DST_COLOR,[Cg]:i.DST_ALPHA,[Rg]:i.ONE_MINUS_SRC_COLOR,[fd]:i.ONE_MINUS_SRC_ALPHA,[Dg]:i.ONE_MINUS_DST_COLOR,[Pg]:i.ONE_MINUS_DST_ALPHA};function U(D,vt,Y,ht,Mt,Yt,ee,ge){if(D===Ti){d===!0&&(wt(i.BLEND),d=!1);return}if(d===!1&&(Ct(i.BLEND),d=!0),D!==Eg){if(D!==E||ge!==M){if((v!==Br||C!==Br)&&(i.blendEquation(i.FUNC_ADD),v=Br,C=Br),ge)switch(D){case Yr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ou:i.blendFunc(i.ONE,i.ONE);break;case Nu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fu:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Yr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ou:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Nu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fu:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,T=null,w=null,L=null,E=D,M=ge}return}Mt=Mt||vt,Yt=Yt||Y,ee=ee||ht,(vt!==v||Mt!==C)&&(i.blendEquationSeparate(x[vt],x[Mt]),v=vt,C=Mt),(Y!==y||ht!==T||Yt!==w||ee!==L)&&(i.blendFuncSeparate(P[Y],P[ht],P[Yt],P[ee]),y=Y,T=ht,w=Yt,L=ee),E=D,M=!1}function W(D,vt){D.side===ti?wt(i.CULL_FACE):Ct(i.CULL_FACE);let Y=D.side===Xe;vt&&(Y=!Y),X(Y),D.blending===Yr&&D.transparent===!1?U(Ti):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const ht=D.stencilWrite;c.setTest(ht),ht&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),$(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Ct(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function X(D){R!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),R=D)}function ot(D){D!==xg?(Ct(i.CULL_FACE),D!==q&&(D===Iu?i.cullFace(i.BACK):D===Mg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),q=D}function at(D){D!==st&&(j&&i.lineWidth(D),st=D)}function $(D,vt,Y){D?(Ct(i.POLYGON_OFFSET_FILL),(O!==vt||k!==Y)&&(i.polygonOffset(vt,Y),O=vt,k=Y)):wt(i.POLYGON_OFFSET_FILL)}function lt(D){D?Ct(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function nt(D){D===void 0&&(D=i.TEXTURE0+G-1),et!==D&&(i.activeTexture(D),et=D)}function St(D,vt,Y){Y===void 0&&(et===null?Y=i.TEXTURE0+G-1:Y=et);let ht=rt[Y];ht===void 0&&(ht={type:void 0,texture:void 0},rt[Y]=ht),(ht.type!==D||ht.texture!==vt)&&(et!==Y&&(i.activeTexture(Y),et=Y),i.bindTexture(D,vt||yt[D]),ht.type=D,ht.texture=vt)}function A(){const D=rt[et];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function N(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ft(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function bt(D){pt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),pt.copy(D))}function gt(D){ut.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ut.copy(D))}function xt(D,vt){let Y=f.get(vt);Y===void 0&&(Y=new WeakMap,f.set(vt,Y));let ht=Y.get(D);ht===void 0&&(ht=i.getUniformBlockIndex(vt,D.name),Y.set(D,ht))}function Nt(D,vt){const ht=f.get(vt).get(D);u.get(vt)!==ht&&(i.uniformBlockBinding(vt,ht,D.__bindingPointIndex),u.set(vt,ht))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,rt={},p={},g=new WeakMap,_=[],m=null,d=!1,E=null,v=null,y=null,T=null,C=null,w=null,L=null,M=!1,R=null,q=null,st=null,O=null,k=null,pt.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ct,disable:wt,bindFramebuffer:It,drawBuffers:fe,useProgram:Ot,setBlending:U,setMaterial:W,setFlipSided:X,setCullFace:ot,setLineWidth:at,setPolygonOffset:$,setScissorTest:lt,activeTexture:nt,bindTexture:St,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:N,texImage2D:Tt,texImage3D:At,updateUBOMapping:xt,uniformBlockBinding:Nt,texStorage2D:ft,texStorage3D:Z,texSubImage2D:Q,texSubImage3D:it,compressedTexSubImage2D:ct,compressedTexSubImage3D:_t,scissor:bt,viewport:gt,reset:Zt}}function mE(i,t,e,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,S){return d?new OffscreenCanvas(A,S):Xs("canvas")}function v(A,S,N,Q){let it=1;if((A.width>Q||A.height>Q)&&(it=Q/Math.max(A.width,A.height)),it<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ct=S?kl:Math.floor,_t=ct(it*A.width),ft=ct(it*A.height);_===void 0&&(_=E(_t,ft));const Z=N?E(_t,ft):_;return Z.width=_t,Z.height=ft,Z.getContext("2d").drawImage(A,0,0,_t,ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+_t+"x"+ft+")."),Z}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function y(A){return hf(A.width)&&hf(A.height)}function T(A){return a?!1:A.wrapS!==yn||A.wrapT!==yn||A.minFilter!==He&&A.minFilter!==cn}function C(A,S){return A.generateMipmaps&&S&&A.minFilter!==He&&A.minFilter!==cn}function w(A){i.generateMipmap(A)}function L(A,S,N,Q,it=!1){if(a===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ct=S;return S===i.RED&&(N===i.FLOAT&&(ct=i.R32F),N===i.HALF_FLOAT&&(ct=i.R16F),N===i.UNSIGNED_BYTE&&(ct=i.R8)),S===i.RG&&(N===i.FLOAT&&(ct=i.RG32F),N===i.HALF_FLOAT&&(ct=i.RG16F),N===i.UNSIGNED_BYTE&&(ct=i.RG8)),S===i.RGBA&&(N===i.FLOAT&&(ct=i.RGBA32F),N===i.HALF_FLOAT&&(ct=i.RGBA16F),N===i.UNSIGNED_BYTE&&(ct=Q===zt&&it===!1?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(ct=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(ct=i.RGB5_A1)),(ct===i.R16F||ct===i.R32F||ct===i.RG16F||ct===i.RG32F||ct===i.RGBA16F||ct===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function M(A,S,N){return C(A,N)===!0||A.isFramebufferTexture&&A.minFilter!==He&&A.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){return A===He||A===Hu||A===Na?i.NEAREST:i.LINEAR}function q(A){const S=A.target;S.removeEventListener("dispose",q),O(S),S.isVideoTexture&&g.delete(S)}function st(A){const S=A.target;S.removeEventListener("dispose",st),G(S)}function O(A){const S=n.get(A);if(S.__webglInit===void 0)return;const N=A.source,Q=m.get(N);if(Q){const it=Q[S.__cacheKey];it.usedTimes--,it.usedTimes===0&&k(A),Object.keys(Q).length===0&&m.delete(N)}n.remove(A)}function k(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const N=A.source,Q=m.get(N);delete Q[S.__cacheKey],o.memory.textures--}function G(A){const S=A.texture,N=n.get(A),Q=n.get(S);if(Q.__webglTexture!==void 0&&(i.deleteTexture(Q.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++)i.deleteFramebuffer(N.__webglFramebuffer[it]),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[it]);else{if(i.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let it=0;it<N.__webglColorRenderbuffer.length;it++)N.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[it]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let it=0,ct=S.length;it<ct;it++){const _t=n.get(S[it]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),o.memory.textures--),n.remove(S[it])}n.remove(S),n.remove(A)}let j=0;function B(){j=0}function H(){const A=j;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),j+=1,A}function et(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function rt(A,S){const N=n.get(A);if(A.isVideoTexture&&nt(A),A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{It(N,A,S);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+S)}function z(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){It(N,A,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+S)}function K(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){It(N,A,S);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+S)}function pt(A,S){const N=n.get(A);if(A.version>0&&N.__version!==A.version){fe(N,A,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+S)}const ut={[Fl]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[Bl]:i.MIRRORED_REPEAT},dt={[He]:i.NEAREST,[Hu]:i.NEAREST_MIPMAP_NEAREST,[Na]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[Kg]:i.LINEAR_MIPMAP_NEAREST,[Vs]:i.LINEAR_MIPMAP_LINEAR},yt={[c0]:i.NEVER,[_0]:i.ALWAYS,[u0]:i.LESS,[h0]:i.LEQUAL,[f0]:i.EQUAL,[m0]:i.GEQUAL,[d0]:i.GREATER,[p0]:i.NOTEQUAL};function Ct(A,S,N){if(N?(i.texParameteri(A,i.TEXTURE_WRAP_S,ut[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ut[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ut[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,dt[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,dt[S.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==yn||S.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,R(S.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==He&&S.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,yt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===He||S.minFilter!==Na&&S.minFilter!==Vs||S.type===gi&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===Ws&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function wt(A,S){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",q));const Q=S.source;let it=m.get(Q);it===void 0&&(it={},m.set(Q,it));const ct=et(S);if(ct!==A.__cacheKey){it[ct]===void 0&&(it[ct]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),it[ct].usedTimes++;const _t=it[A.__cacheKey];_t!==void 0&&(it[A.__cacheKey].usedTimes--,_t.usedTimes===0&&k(S)),A.__cacheKey=ct,A.__webglTexture=it[ct].texture}return N}function It(A,S,N){let Q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=i.TEXTURE_3D);const it=wt(A,S),ct=S.source;e.bindTexture(Q,A.__webglTexture,i.TEXTURE0+N);const _t=n.get(ct);if(ct.version!==_t.__version||it===!0){e.activeTexture(i.TEXTURE0+N),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ft=T(S)&&y(S.image)===!1;let Z=v(S.image,ft,!1,u);Z=St(S,Z);const Tt=y(Z)||a,At=s.convert(S.format,S.colorSpace);let bt=s.convert(S.type),gt=L(S.internalFormat,At,bt,S.colorSpace);Ct(Q,S,Tt);let xt;const Nt=S.mipmaps,Zt=a&&S.isVideoTexture!==!0,D=_t.__version===void 0||it===!0,vt=M(S,Z,Tt);if(S.isDepthTexture)gt=i.DEPTH_COMPONENT,a?S.type===gi?gt=i.DEPTH_COMPONENT32F:S.type===_i?gt=i.DEPTH_COMPONENT24:S.type===er?gt=i.DEPTH24_STENCIL8:gt=i.DEPTH_COMPONENT16:S.type===gi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===nr&&gt===i.DEPTH_COMPONENT&&S.type!==wc&&S.type!==_i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=_i,bt=s.convert(S.type)),S.format===rs&&gt===i.DEPTH_COMPONENT&&(gt=i.DEPTH_STENCIL,S.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=er,bt=s.convert(S.type))),D&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,gt,Z.width,Z.height):e.texImage2D(i.TEXTURE_2D,0,gt,Z.width,Z.height,0,At,bt,null));else if(S.isDataTexture)if(Nt.length>0&&Tt){Zt&&D&&e.texStorage2D(i.TEXTURE_2D,vt,gt,Nt[0].width,Nt[0].height);for(let Y=0,ht=Nt.length;Y<ht;Y++)xt=Nt[Y],Zt?e.texSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,At,bt,xt.data):e.texImage2D(i.TEXTURE_2D,Y,gt,xt.width,xt.height,0,At,bt,xt.data);S.generateMipmaps=!1}else Zt?(D&&e.texStorage2D(i.TEXTURE_2D,vt,gt,Z.width,Z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,At,bt,Z.data)):e.texImage2D(i.TEXTURE_2D,0,gt,Z.width,Z.height,0,At,bt,Z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Zt&&D&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,gt,Nt[0].width,Nt[0].height,Z.depth);for(let Y=0,ht=Nt.length;Y<ht;Y++)xt=Nt[Y],S.format!==An?At!==null?Zt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,Z.depth,At,xt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,gt,xt.width,xt.height,Z.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,xt.width,xt.height,Z.depth,At,bt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,gt,xt.width,xt.height,Z.depth,0,At,bt,xt.data)}else{Zt&&D&&e.texStorage2D(i.TEXTURE_2D,vt,gt,Nt[0].width,Nt[0].height);for(let Y=0,ht=Nt.length;Y<ht;Y++)xt=Nt[Y],S.format!==An?At!==null?Zt?e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,At,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,gt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(i.TEXTURE_2D,Y,0,0,xt.width,xt.height,At,bt,xt.data):e.texImage2D(i.TEXTURE_2D,Y,gt,xt.width,xt.height,0,At,bt,xt.data)}else if(S.isDataArrayTexture)Zt?(D&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,gt,Z.width,Z.height,Z.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,At,bt,Z.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,Z.width,Z.height,Z.depth,0,At,bt,Z.data);else if(S.isData3DTexture)Zt?(D&&e.texStorage3D(i.TEXTURE_3D,vt,gt,Z.width,Z.height,Z.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,At,bt,Z.data)):e.texImage3D(i.TEXTURE_3D,0,gt,Z.width,Z.height,Z.depth,0,At,bt,Z.data);else if(S.isFramebufferTexture){if(D)if(Zt)e.texStorage2D(i.TEXTURE_2D,vt,gt,Z.width,Z.height);else{let Y=Z.width,ht=Z.height;for(let Mt=0;Mt<vt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,gt,Y,ht,0,At,bt,null),Y>>=1,ht>>=1}}else if(Nt.length>0&&Tt){Zt&&D&&e.texStorage2D(i.TEXTURE_2D,vt,gt,Nt[0].width,Nt[0].height);for(let Y=0,ht=Nt.length;Y<ht;Y++)xt=Nt[Y],Zt?e.texSubImage2D(i.TEXTURE_2D,Y,0,0,At,bt,xt):e.texImage2D(i.TEXTURE_2D,Y,gt,At,bt,xt);S.generateMipmaps=!1}else Zt?(D&&e.texStorage2D(i.TEXTURE_2D,vt,gt,Z.width,Z.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,bt,Z)):e.texImage2D(i.TEXTURE_2D,0,gt,At,bt,Z);C(S,Tt)&&w(Q),_t.__version=ct.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function fe(A,S,N){if(S.image.length!==6)return;const Q=wt(A,S),it=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+N);const ct=n.get(it);if(it.version!==ct.__version||Q===!0){e.activeTexture(i.TEXTURE0+N),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const _t=S.isCompressedTexture||S.image[0].isCompressedTexture,ft=S.image[0]&&S.image[0].isDataTexture,Z=[];for(let Y=0;Y<6;Y++)!_t&&!ft?Z[Y]=v(S.image[Y],!1,!0,c):Z[Y]=ft?S.image[Y].image:S.image[Y],Z[Y]=St(S,Z[Y]);const Tt=Z[0],At=y(Tt)||a,bt=s.convert(S.format,S.colorSpace),gt=s.convert(S.type),xt=L(S.internalFormat,bt,gt,S.colorSpace),Nt=a&&S.isVideoTexture!==!0,Zt=ct.__version===void 0||Q===!0;let D=M(S,Tt,At);Ct(i.TEXTURE_CUBE_MAP,S,At);let vt;if(_t){Nt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,D,xt,Tt.width,Tt.height);for(let Y=0;Y<6;Y++){vt=Z[Y].mipmaps;for(let ht=0;ht<vt.length;ht++){const Mt=vt[ht];S.format!==An?bt!==null?Nt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ht,0,0,Mt.width,Mt.height,bt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ht,xt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ht,0,0,Mt.width,Mt.height,bt,gt,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ht,xt,Mt.width,Mt.height,0,bt,gt,Mt.data)}}}else{vt=S.mipmaps,Nt&&Zt&&(vt.length>0&&D++,e.texStorage2D(i.TEXTURE_CUBE_MAP,D,xt,Z[0].width,Z[0].height));for(let Y=0;Y<6;Y++)if(ft){Nt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Z[Y].width,Z[Y].height,bt,gt,Z[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,xt,Z[Y].width,Z[Y].height,0,bt,gt,Z[Y].data);for(let ht=0;ht<vt.length;ht++){const Yt=vt[ht].image[Y].image;Nt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ht+1,0,0,Yt.width,Yt.height,bt,gt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ht+1,xt,Yt.width,Yt.height,0,bt,gt,Yt.data)}}else{Nt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,bt,gt,Z[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,xt,bt,gt,Z[Y]);for(let ht=0;ht<vt.length;ht++){const Mt=vt[ht];Nt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ht+1,0,0,bt,gt,Mt.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ht+1,xt,bt,gt,Mt.image[Y])}}}C(S,At)&&w(i.TEXTURE_CUBE_MAP),ct.__version=it.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ot(A,S,N,Q,it){const ct=s.convert(N.format,N.colorSpace),_t=s.convert(N.type),ft=L(N.internalFormat,ct,_t,N.colorSpace);n.get(S).__hasExternalTextures||(it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,0,ft,S.width,S.height,S.depth,0,ct,_t,null):e.texImage2D(it,0,ft,S.width,S.height,0,ct,_t,null)),e.bindFramebuffer(i.FRAMEBUFFER,A),lt(S)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,it,n.get(N).__webglTexture,0,$(S)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,it,n.get(N).__webglTexture,0),e.bindFramebuffer(i.FRAMEBUFFER,null)}function x(A,S,N){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let Q=i.DEPTH_COMPONENT16;if(N||lt(S)){const it=S.depthTexture;it&&it.isDepthTexture&&(it.type===gi?Q=i.DEPTH_COMPONENT32F:it.type===_i&&(Q=i.DEPTH_COMPONENT24));const ct=$(S);lt(S)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Q,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Q,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,Q,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const Q=$(S);N&&lt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,S.width,S.height):lt(S)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Q,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const Q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let it=0;it<Q.length;it++){const ct=Q[it],_t=s.convert(ct.format,ct.colorSpace),ft=s.convert(ct.type),Z=L(ct.internalFormat,_t,ft,ct.colorSpace),Tt=$(S);N&&lt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,Z,S.width,S.height):lt(S)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function P(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),rt(S.depthTexture,0);const Q=n.get(S.depthTexture).__webglTexture,it=$(S);if(S.depthTexture.format===nr)lt(S)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(S.depthTexture.format===rs)lt(S)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function U(A){const S=n.get(A),N=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");P(S.__webglFramebuffer,A)}else if(N){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=i.createRenderbuffer(),x(S.__webglDepthbuffer[Q],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),x(S.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function W(A,S,N){const Q=n.get(A);S!==void 0&&Ot(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),N!==void 0&&U(A)}function X(A){const S=A.texture,N=n.get(A),Q=n.get(S);A.addEventListener("dispose",st),A.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=S.version,o.memory.textures++);const it=A.isWebGLCubeRenderTarget===!0,ct=A.isWebGLMultipleRenderTargets===!0,_t=y(A)||a;if(it){N.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)N.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(N.__webglFramebuffer=i.createFramebuffer(),ct)if(r.drawBuffers){const ft=A.texture;for(let Z=0,Tt=ft.length;Z<Tt;Z++){const At=n.get(ft[Z]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&lt(A)===!1){const ft=ct?S:[S];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let Z=0;Z<ft.length;Z++){const Tt=ft[Z];N.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[Z]);const At=s.convert(Tt.format,Tt.colorSpace),bt=s.convert(Tt.type),gt=L(Tt.internalFormat,At,bt,Tt.colorSpace,A.isXRRenderTarget===!0),xt=$(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,N.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),x(N.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ct(i.TEXTURE_CUBE_MAP,S,_t);for(let ft=0;ft<6;ft++)Ot(N.__webglFramebuffer[ft],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft);C(S,_t)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){const ft=A.texture;for(let Z=0,Tt=ft.length;Z<Tt;Z++){const At=ft[Z],bt=n.get(At);e.bindTexture(i.TEXTURE_2D,bt.__webglTexture),Ct(i.TEXTURE_2D,At,_t),Ot(N.__webglFramebuffer,A,At,i.COLOR_ATTACHMENT0+Z,i.TEXTURE_2D),C(At,_t)&&w(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ft=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ft,Q.__webglTexture),Ct(ft,S,_t),Ot(N.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ft),C(S,_t)&&w(ft),e.unbindTexture()}A.depthBuffer&&U(A)}function ot(A){const S=y(A)||a,N=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Q=0,it=N.length;Q<it;Q++){const ct=N[Q];if(C(ct,S)){const _t=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ft=n.get(ct).__webglTexture;e.bindTexture(_t,ft),w(_t),e.unbindTexture()}}}function at(A){if(a&&A.samples>0&&lt(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],N=A.width,Q=A.height;let it=i.COLOR_BUFFER_BIT;const ct=[],_t=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(A),Z=A.isWebGLMultipleRenderTargets===!0;if(Z)for(let Tt=0;Tt<S.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let Tt=0;Tt<S.length;Tt++){ct.push(i.COLOR_ATTACHMENT0+Tt),A.depthBuffer&&ct.push(_t);const At=ft.__ignoreDepthValues!==void 0?ft.__ignoreDepthValues:!1;if(At===!1&&(A.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),Z&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[Tt]),At===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[_t]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_t])),Z){const bt=n.get(S[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,bt,0)}i.blitFramebuffer(0,0,N,Q,0,0,N,Q,it,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let Tt=0;Tt<S.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,ft.__webglColorRenderbuffer[Tt]);const At=n.get(S[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,At,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}}function $(A){return Math.min(f,A.samples)}function lt(A){const S=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function nt(A){const S=o.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function St(A,S){const N=A.colorSpace,Q=A.format,it=A.type;return A.isCompressedTexture===!0||A.format===Hl||N!==Gn&&N!==rr&&(N===zt?a===!1?t.has("EXT_sRGB")===!0&&Q===An?(A.format=Hl,A.minFilter=cn,A.generateMipmaps=!1):S=yd.sRGBToLinear(S):(Q!==An||it!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=rt,this.setTexture2DArray=z,this.setTexture3D=K,this.setTextureCube=pt,this.rebindTextures=W,this.setupRenderTarget=X,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=U,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=lt}function _E(i,t,e){const n=e.isWebGL2;function r(s,o=rr){let a;if(s===bi)return i.UNSIGNED_BYTE;if(s===md)return i.UNSIGNED_SHORT_4_4_4_4;if(s===_d)return i.UNSIGNED_SHORT_5_5_5_1;if(s===jg)return i.BYTE;if(s===$g)return i.SHORT;if(s===wc)return i.UNSIGNED_SHORT;if(s===pd)return i.INT;if(s===_i)return i.UNSIGNED_INT;if(s===gi)return i.FLOAT;if(s===Ws)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Zg)return i.ALPHA;if(s===An)return i.RGBA;if(s===Jg)return i.LUMINANCE;if(s===Qg)return i.LUMINANCE_ALPHA;if(s===nr)return i.DEPTH_COMPONENT;if(s===rs)return i.DEPTH_STENCIL;if(s===Hl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===t0)return i.RED;if(s===gd)return i.RED_INTEGER;if(s===e0)return i.RG;if(s===vd)return i.RG_INTEGER;if(s===xd)return i.RGBA_INTEGER;if(s===Fa||s===Ba||s===za||s===Ha)if(o===zt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===za)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ha)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gu||s===ku||s===Vu||s===Wu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Gu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ku)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===n0)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xu||s===qu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Xu)return o===zt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===qu)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Yu||s===Ku||s===ju||s===$u||s===Zu||s===Ju||s===Qu||s===tf||s===ef||s===nf||s===rf||s===sf||s===of||s===af)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Yu)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ku)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ju)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$u)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Zu)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ju)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qu)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===tf)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ef)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nf)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rf)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sf)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===of)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===af)return o===zt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ga)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ga)return o===zt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===i0||s===lf||s===cf||s===uf)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ga)return a.COMPRESSED_RED_RGTC1_EXT;if(s===lf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===cf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===uf)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===er?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class gE extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Do extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vE={type:"move"};class fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Do;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class xE extends Ge{constructor(t,e,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:nr,u!==nr&&u!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===nr&&(n=_i),n===void 0&&u===rs&&(n=er),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=l!==void 0?l:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class ME extends ps{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const _=e.getContextAttributes();let m=null,d=null;const E=[],v=[],y=new fn;y.layers.enable(1),y.viewport=new Ae;const T=new fn;T.layers.enable(2),T.viewport=new Ae;const C=[y,T],w=new gE;w.layers.enable(1),w.layers.enable(2);let L=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let K=E[z];return K===void 0&&(K=new fl,E[z]=K),K.getTargetRaySpace()},this.getControllerGrip=function(z){let K=E[z];return K===void 0&&(K=new fl,E[z]=K),K.getGripSpace()},this.getHand=function(z){let K=E[z];return K===void 0&&(K=new fl,E[z]=K),K.getHandSpace()};function R(z){const K=v.indexOf(z.inputSource);if(K===-1)return;const pt=E[K];pt!==void 0&&(pt.update(z.inputSource,z.frame,c||o),pt.dispatchEvent({type:z.type,data:z.inputSource}))}function q(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",st);for(let z=0;z<E.length;z++){const K=v[z];K!==null&&(v[z]=null,E[z].disconnect(K))}L=null,M=null,t.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,rt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",q),r.addEventListener("inputsourceschange",st),_.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,K),r.updateRenderState({baseLayer:p}),d=new hr(p.framebufferWidth,p.framebufferHeight,{format:An,type:bi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let K=null,pt=null,ut=null;_.depth&&(ut=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,K=_.stencil?rs:nr,pt=_.stencil?er:_i);const dt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};f=new XRWebGLBinding(r,e),h=f.createProjectionLayer(dt),r.updateRenderState({layers:[h]}),d=new hr(h.textureWidth,h.textureHeight,{format:An,type:bi,depthTexture:new xE(h.textureWidth,h.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const yt=t.properties.get(d);yt.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),rt.setContext(r),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function st(z){for(let K=0;K<z.removed.length;K++){const pt=z.removed[K],ut=v.indexOf(pt);ut>=0&&(v[ut]=null,E[ut].disconnect(pt))}for(let K=0;K<z.added.length;K++){const pt=z.added[K];let ut=v.indexOf(pt);if(ut===-1){for(let yt=0;yt<E.length;yt++)if(yt>=v.length){v.push(pt),ut=yt;break}else if(v[yt]===null){v[yt]=pt,ut=yt;break}if(ut===-1)break}const dt=E[ut];dt&&dt.connect(pt)}}const O=new I,k=new I;function G(z,K,pt){O.setFromMatrixPosition(K.matrixWorld),k.setFromMatrixPosition(pt.matrixWorld);const ut=O.distanceTo(k),dt=K.projectionMatrix.elements,yt=pt.projectionMatrix.elements,Ct=dt[14]/(dt[10]-1),wt=dt[14]/(dt[10]+1),It=(dt[9]+1)/dt[5],fe=(dt[9]-1)/dt[5],Ot=(dt[8]-1)/dt[0],x=(yt[8]+1)/yt[0],P=Ct*Ot,U=Ct*x,W=ut/(-Ot+x),X=W*-Ot;K.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(X),z.translateZ(W),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const ot=Ct+W,at=wt+W,$=P-X,lt=U+(ut-X),nt=It*wt/at*ot,St=fe*wt/at*ot;z.projectionMatrix.makePerspective($,lt,nt,St,ot,at),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function j(z,K){K===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(K.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;w.near=T.near=y.near=z.near,w.far=T.far=y.far=z.far,(L!==w.near||M!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,M=w.far);const K=z.parent,pt=w.cameras;j(w,K);for(let ut=0;ut<pt.length;ut++)j(pt[ut],K);pt.length===2?G(w,y,T):w.projectionMatrix.copy(y.projectionMatrix),B(z,w,K)};function B(z,K,pt){pt===null?z.matrix.copy(K.matrixWorld):(z.matrix.copy(pt.matrixWorld),z.matrix.invert(),z.matrix.multiply(K.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0);const ut=z.children;for(let dt=0,yt=ut.length;dt<yt;dt++)ut[dt].updateMatrixWorld(!0);z.projectionMatrix.copy(K.projectionMatrix),z.projectionMatrixInverse.copy(K.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Gl*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(z){l=z,h!==null&&(h.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)};let H=null;function et(z,K){if(u=K.getViewerPose(c||o),g=K,u!==null){const pt=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let ut=!1;pt.length!==w.cameras.length&&(w.cameras.length=0,ut=!0);for(let dt=0;dt<pt.length;dt++){const yt=pt[dt];let Ct=null;if(p!==null)Ct=p.getViewport(yt);else{const It=f.getViewSubImage(h,yt);Ct=It.viewport,dt===0&&(t.setRenderTargetTextures(d,It.colorTexture,h.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(d))}let wt=C[dt];wt===void 0&&(wt=new fn,wt.layers.enable(dt),wt.viewport=new Ae,C[dt]=wt),wt.matrix.fromArray(yt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(yt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),dt===0&&(w.matrix.copy(wt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ut===!0&&w.cameras.push(wt)}}for(let pt=0;pt<E.length;pt++){const ut=v[pt],dt=E[pt];ut!==null&&dt!==void 0&&dt.update(ut,K,c||o)}H&&H(z,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const rt=new Id;rt.setAnimationLoop(et),this.setAnimationLoop=function(z){H=z},this.dispose=function(){}}}function SE(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Pd(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,E,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Xe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Xe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=v*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xe&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function EE(i,t,e,n){let r={},s={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,v){const y=v.program;n.uniformBlockBinding(E,y)}function c(E,v){let y=r[E.id];y===void 0&&(g(E),y=u(E),r[E.id]=y,E.addEventListener("dispose",m));const T=v.program;n.updateUBOMapping(E,T);const C=t.render.frame;s[E.id]!==C&&(h(E),s[E.id]=C)}function u(E){const v=f();E.__bindingPointIndex=v;const y=i.createBuffer(),T=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(E){const v=r[E.id],y=E.uniforms,T=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let C=0,w=y.length;C<w;C++){const L=y[C];if(p(L,C,T)===!0){const M=L.__offset,R=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let st=0;st<R.length;st++){const O=R[st],k=_(O);typeof O=="number"?(L.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,M+q,L.__data)):O.isMatrix3?(L.__data[0]=O.elements[0],L.__data[1]=O.elements[1],L.__data[2]=O.elements[2],L.__data[3]=O.elements[0],L.__data[4]=O.elements[3],L.__data[5]=O.elements[4],L.__data[6]=O.elements[5],L.__data[7]=O.elements[0],L.__data[8]=O.elements[6],L.__data[9]=O.elements[7],L.__data[10]=O.elements[8],L.__data[11]=O.elements[0]):(O.toArray(L.__data,q),q+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,L.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,v,y){const T=E.value;if(y[v]===void 0){if(typeof T=="number")y[v]=T;else{const C=Array.isArray(T)?T:[T],w=[];for(let L=0;L<C.length;L++)w.push(C[L].clone());y[v]=w}return!0}else if(typeof T=="number"){if(y[v]!==T)return y[v]=T,!0}else{const C=Array.isArray(y[v])?y[v]:[y[v]],w=Array.isArray(T)?T:[T];for(let L=0;L<C.length;L++){const M=C[L];if(M.equals(w[L])===!1)return M.copy(w[L]),!0}}return!1}function g(E){const v=E.uniforms;let y=0;const T=16;let C=0;for(let w=0,L=v.length;w<L;w++){const M=v[w],R={boundary:0,storage:0},q=Array.isArray(M.value)?M.value:[M.value];for(let st=0,O=q.length;st<O;st++){const k=q[st],G=_(k);R.boundary+=G.boundary,R.storage+=G.storage}if(M.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,w>0){C=y%T;const st=T-C;C!==0&&st-R.boundary<0&&(y+=T-C,M.__offset=y)}y+=R.storage}return C=y%T,C>0&&(y+=T-C),E.__size=y,E.__cache={},this}function _(E){const v={boundary:0,storage:0};return typeof E=="number"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(E){const v=E.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}function yE(){const i=Xs("canvas");return i.style.display="block",i}class zd{constructor(t={}){const{canvas:e=yE(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=zt,this.useLegacyLights=!0,this.toneMapping=si,this.toneMappingExposure=1;const v=this;let y=!1,T=0,C=0,w=null,L=-1,M=null;const R=new Ae,q=new Ae;let st=null;const O=new Qt(0);let k=0,G=e.width,j=e.height,B=1,H=null,et=null;const rt=new Ae(0,0,G,j),z=new Ae(0,0,G,j);let K=!1;const pt=new Ud;let ut=!1,dt=!1,yt=null;const Ct=new Me,wt=new Vt,It=new I,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ot(){return w===null?B:1}let x=n;function P(b,V){for(let J=0;J<b.length;J++){const F=b[J],tt=e.getContext(F,V);if(tt!==null)return tt}return null}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${bc}`),e.addEventListener("webglcontextlost",vt,!1),e.addEventListener("webglcontextrestored",Y,!1),e.addEventListener("webglcontextcreationerror",ht,!1),x===null){const V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),x=P(V,b),x===null)throw P(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&x instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),x.getShaderPrecisionFormat===void 0&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let U,W,X,ot,at,$,lt,nt,St,A,S,N,Q,it,ct,_t,ft,Z,Tt,At,bt,gt,xt,Nt;function Zt(){U=new UM(x),W=new bM(x,U,t),U.init(W),gt=new _E(x,U,W),X=new pE(x,U,W),ot=new NM(x),at=new tE,$=new mE(x,U,X,at,W,gt,ot),lt=new RM(v),nt=new DM(v),St=new X0(x,W),xt=new AM(x,U,St,W),A=new IM(x,St,ot,xt),S=new HM(x,A,St,ot),Tt=new zM(x,W,$),_t=new wM(at),N=new QS(v,lt,nt,U,W,xt,_t),Q=new SE(v,at),it=new nE,ct=new lE(U,W),Z=new yM(v,lt,nt,X,S,h,l),ft=new dE(v,S,W),Nt=new EE(x,ot,W,X),At=new TM(x,U,ot,W),bt=new OM(x,U,ot,W),ot.programs=N.programs,v.capabilities=W,v.extensions=U,v.properties=at,v.renderLists=it,v.shadowMap=ft,v.state=X,v.info=ot}Zt();const D=new ME(v,x);this.xr=D,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const b=U.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=U.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(G,j,!1))},this.getSize=function(b){return b.set(G,j)},this.setSize=function(b,V,J=!0){if(D.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,j=V,e.width=Math.floor(b*B),e.height=Math.floor(V*B),J===!0&&(e.style.width=b+"px",e.style.height=V+"px"),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(G*B,j*B).floor()},this.setDrawingBufferSize=function(b,V,J){G=b,j=V,B=J,e.width=Math.floor(b*J),e.height=Math.floor(V*J),this.setViewport(0,0,b,V)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(rt)},this.setViewport=function(b,V,J,F){b.isVector4?rt.set(b.x,b.y,b.z,b.w):rt.set(b,V,J,F),X.viewport(R.copy(rt).multiplyScalar(B).floor())},this.getScissor=function(b){return b.copy(z)},this.setScissor=function(b,V,J,F){b.isVector4?z.set(b.x,b.y,b.z,b.w):z.set(b,V,J,F),X.scissor(q.copy(z).multiplyScalar(B).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(b){X.setScissorTest(K=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){et=b},this.getClearColor=function(b){return b.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor.apply(Z,arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha.apply(Z,arguments)},this.clear=function(b=!0,V=!0,J=!0){let F=0;if(b){let tt=!1;if(w!==null){const Et=w.texture.format;tt=Et===xd||Et===vd||Et===gd}if(tt){const Et=w.texture.type,Rt=Et===bi||Et===_i||Et===wc||Et===er||Et===md||Et===_d,Pt=Z.getClearColor(),Lt=Z.getClearAlpha(),kt=Pt.r,Ut=Pt.g,Ft=Pt.b;Rt?(p[0]=kt,p[1]=Ut,p[2]=Ft,p[3]=Lt,x.clearBufferuiv(x.COLOR,0,p)):(g[0]=kt,g[1]=Ut,g[2]=Ft,g[3]=Lt,x.clearBufferiv(x.COLOR,0,g))}else F|=x.COLOR_BUFFER_BIT}V&&(F|=x.DEPTH_BUFFER_BIT),J&&(F|=x.STENCIL_BUFFER_BIT),x.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",vt,!1),e.removeEventListener("webglcontextrestored",Y,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),it.dispose(),ct.dispose(),at.dispose(),lt.dispose(),nt.dispose(),S.dispose(),xt.dispose(),Nt.dispose(),N.dispose(),D.dispose(),D.removeEventListener("sessionstart",re),D.removeEventListener("sessionend",Ln),yt&&(yt.dispose(),yt=null),Oe.stop()};function vt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const b=ot.autoReset,V=ft.enabled,J=ft.autoUpdate,F=ft.needsUpdate,tt=ft.type;Zt(),ot.autoReset=b,ft.enabled=V,ft.autoUpdate=J,ft.needsUpdate=F,ft.type=tt}function ht(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Mt(b){const V=b.target;V.removeEventListener("dispose",Mt),Yt(V)}function Yt(b){ee(b),at.remove(b)}function ee(b){const V=at.get(b).programs;V!==void 0&&(V.forEach(function(J){N.releaseProgram(J)}),b.isShaderMaterial&&N.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,J,F,tt,Et){V===null&&(V=fe);const Rt=tt.isMesh&&tt.matrixWorld.determinant()<0,Pt=Vp(b,V,J,F,tt);X.setMaterial(F,Rt);let Lt=J.index,kt=1;F.wireframe===!0&&(Lt=A.getWireframeAttribute(J),kt=2);const Ut=J.drawRange,Ft=J.attributes.position;let se=Ut.start*kt,ce=(Ut.start+Ut.count)*kt;Et!==null&&(se=Math.max(se,Et.start*kt),ce=Math.min(ce,(Et.start+Et.count)*kt)),Lt!==null?(se=Math.max(se,0),ce=Math.min(ce,Lt.count)):Ft!=null&&(se=Math.max(se,0),ce=Math.min(ce,Ft.count));const _n=ce-se;if(_n<0||_n===1/0)return;xt.setup(tt,F,Pt,J,Lt);let Vn,he=At;if(Lt!==null&&(Vn=St.get(Lt),he=bt,he.setIndex(Vn)),tt.isMesh)F.wireframe===!0?(X.setLineWidth(F.wireframeLinewidth*Ot()),he.setMode(x.LINES)):he.setMode(x.TRIANGLES);else if(tt.isLine){let Xt=F.linewidth;Xt===void 0&&(Xt=1),X.setLineWidth(Xt*Ot()),tt.isLineSegments?he.setMode(x.LINES):tt.isLineLoop?he.setMode(x.LINE_LOOP):he.setMode(x.LINE_STRIP)}else tt.isPoints?he.setMode(x.POINTS):tt.isSprite&&he.setMode(x.TRIANGLES);if(tt.isInstancedMesh)he.renderInstances(se,_n,tt.count);else if(J.isInstancedBufferGeometry){const Xt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ea=Math.min(J.instanceCount,Xt);he.renderInstances(se,_n,Ea)}else he.render(se,_n)},this.compile=function(b,V){function J(F,tt,Et){F.transparent===!0&&F.side===ti&&F.forceSinglePass===!1?(F.side=Xe,F.needsUpdate=!0,ro(F,tt,Et),F.side=Li,F.needsUpdate=!0,ro(F,tt,Et),F.side=ti):ro(F,tt,Et)}m=ct.get(b),m.init(),E.push(m),b.traverseVisible(function(F){F.isLight&&F.layers.test(V.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(v.useLegacyLights),b.traverse(function(F){const tt=F.material;if(tt)if(Array.isArray(tt))for(let Et=0;Et<tt.length;Et++){const Rt=tt[Et];J(Rt,b,F)}else J(tt,b,F)}),E.pop(),m=null};let ge=null;function Pn(b){ge&&ge(b)}function re(){Oe.stop()}function Ln(){Oe.start()}const Oe=new Id;Oe.setAnimationLoop(Pn),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(b){ge=b,D.setAnimationLoop(b),b===null?Oe.stop():Oe.start()},D.addEventListener("sessionstart",re),D.addEventListener("sessionend",Ln),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),D.enabled===!0&&D.isPresenting===!0&&(D.cameraAutoUpdate===!0&&D.updateCamera(V),V=D.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,V,w),m=ct.get(b,E.length),m.init(),E.push(m),Ct.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),pt.setFromProjectionMatrix(Ct),dt=this.localClippingEnabled,ut=_t.init(this.clippingPlanes,dt),_=it.get(b,d.length),_.init(),d.push(_),Zc(b,V,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(H,et),this.info.render.frame++,ut===!0&&_t.beginShadows();const J=m.state.shadowsArray;if(ft.render(J,b,V),ut===!0&&_t.endShadows(),this.info.autoReset===!0&&this.info.reset(),Z.render(_,b),m.setupLights(v.useLegacyLights),V.isArrayCamera){const F=V.cameras;for(let tt=0,Et=F.length;tt<Et;tt++){const Rt=F[tt];Jc(_,b,Rt,Rt.viewport)}}else Jc(_,b,V);w!==null&&($.updateMultisampleRenderTarget(w),$.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(v,b,V),xt.resetDefaultState(),L=-1,M=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Zc(b,V,J,F){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||pt.intersectsSprite(b)){F&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ct);const Rt=S.update(b),Pt=b.material;Pt.visible&&_.push(b,Rt,Pt,J,It.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||pt.intersectsObject(b))){const Rt=S.update(b),Pt=b.material;if(F&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),It.copy(Rt.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(Ct)),Array.isArray(Pt)){const Lt=Rt.groups;for(let kt=0,Ut=Lt.length;kt<Ut;kt++){const Ft=Lt[kt],se=Pt[Ft.materialIndex];se&&se.visible&&_.push(b,Rt,se,J,It.z,Ft)}}else Pt.visible&&_.push(b,Rt,Pt,J,It.z,null)}}const Et=b.children;for(let Rt=0,Pt=Et.length;Rt<Pt;Rt++)Zc(Et[Rt],V,J,F)}function Jc(b,V,J,F){const tt=b.opaque,Et=b.transmissive,Rt=b.transparent;m.setupLightsView(J),ut===!0&&_t.setGlobalState(v.clippingPlanes,J),Et.length>0&&kp(tt,Et,V,J),F&&X.viewport(R.copy(F)),tt.length>0&&io(tt,V,J),Et.length>0&&io(Et,V,J),Rt.length>0&&io(Rt,V,J),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function kp(b,V,J,F){const tt=W.isWebGL2;yt===null&&(yt=new hr(1,1,{generateMipmaps:!0,type:U.has("EXT_color_buffer_half_float")?Ws:bi,minFilter:Vs,samples:tt?4:0})),v.getDrawingBufferSize(wt),tt?yt.setSize(wt.x,wt.y):yt.setSize(kl(wt.x),kl(wt.y));const Et=v.getRenderTarget();v.setRenderTarget(yt),v.getClearColor(O),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear();const Rt=v.toneMapping;v.toneMapping=si,io(b,J,F),$.updateMultisampleRenderTarget(yt),$.updateRenderTargetMipmap(yt);let Pt=!1;for(let Lt=0,kt=V.length;Lt<kt;Lt++){const Ut=V[Lt],Ft=Ut.object,se=Ut.geometry,ce=Ut.material,_n=Ut.group;if(ce.side===ti&&Ft.layers.test(F.layers)){const Vn=ce.side;ce.side=Xe,ce.needsUpdate=!0,Qc(Ft,J,F,se,ce,_n),ce.side=Vn,ce.needsUpdate=!0,Pt=!0}}Pt===!0&&($.updateMultisampleRenderTarget(yt),$.updateRenderTargetMipmap(yt)),v.setRenderTarget(Et),v.setClearColor(O,k),v.toneMapping=Rt}function io(b,V,J){const F=V.isScene===!0?V.overrideMaterial:null;for(let tt=0,Et=b.length;tt<Et;tt++){const Rt=b[tt],Pt=Rt.object,Lt=Rt.geometry,kt=F===null?Rt.material:F,Ut=Rt.group;Pt.layers.test(J.layers)&&Qc(Pt,V,J,Lt,kt,Ut)}}function Qc(b,V,J,F,tt,Et){b.onBeforeRender(v,V,J,F,tt,Et),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),tt.onBeforeRender(v,V,J,F,b,Et),tt.transparent===!0&&tt.side===ti&&tt.forceSinglePass===!1?(tt.side=Xe,tt.needsUpdate=!0,v.renderBufferDirect(J,V,F,tt,b,Et),tt.side=Li,tt.needsUpdate=!0,v.renderBufferDirect(J,V,F,tt,b,Et),tt.side=ti):v.renderBufferDirect(J,V,F,tt,b,Et),b.onAfterRender(v,V,J,F,tt,Et)}function ro(b,V,J){V.isScene!==!0&&(V=fe);const F=at.get(b),tt=m.state.lights,Et=m.state.shadowsArray,Rt=tt.state.version,Pt=N.getParameters(b,tt.state,Et,V,J),Lt=N.getProgramCacheKey(Pt);let kt=F.programs;F.environment=b.isMeshStandardMaterial?V.environment:null,F.fog=V.fog,F.envMap=(b.isMeshStandardMaterial?nt:lt).get(b.envMap||F.environment),kt===void 0&&(b.addEventListener("dispose",Mt),kt=new Map,F.programs=kt);let Ut=kt.get(Lt);if(Ut!==void 0){if(F.currentProgram===Ut&&F.lightsStateVersion===Rt)return tu(b,Pt),Ut}else Pt.uniforms=N.getUniforms(b),b.onBuild(J,Pt,v),b.onBeforeCompile(Pt,v),Ut=N.acquireProgram(Pt,Lt),kt.set(Lt,Ut),F.uniforms=Pt.uniforms;const Ft=F.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ft.clippingPlanes=_t.uniform),tu(b,Pt),F.needsLights=Xp(b),F.lightsStateVersion=Rt,F.needsLights&&(Ft.ambientLightColor.value=tt.state.ambient,Ft.lightProbe.value=tt.state.probe,Ft.directionalLights.value=tt.state.directional,Ft.directionalLightShadows.value=tt.state.directionalShadow,Ft.spotLights.value=tt.state.spot,Ft.spotLightShadows.value=tt.state.spotShadow,Ft.rectAreaLights.value=tt.state.rectArea,Ft.ltc_1.value=tt.state.rectAreaLTC1,Ft.ltc_2.value=tt.state.rectAreaLTC2,Ft.pointLights.value=tt.state.point,Ft.pointLightShadows.value=tt.state.pointShadow,Ft.hemisphereLights.value=tt.state.hemi,Ft.directionalShadowMap.value=tt.state.directionalShadowMap,Ft.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Ft.spotShadowMap.value=tt.state.spotShadowMap,Ft.spotLightMatrix.value=tt.state.spotLightMatrix,Ft.spotLightMap.value=tt.state.spotLightMap,Ft.pointShadowMap.value=tt.state.pointShadowMap,Ft.pointShadowMatrix.value=tt.state.pointShadowMatrix);const se=Ut.getUniforms(),ce=ko.seqWithValue(se.seq,Ft);return F.currentProgram=Ut,F.uniformsList=ce,Ut}function tu(b,V){const J=at.get(b);J.outputColorSpace=V.outputColorSpace,J.instancing=V.instancing,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Vp(b,V,J,F,tt){V.isScene!==!0&&(V=fe),$.resetTextureUnits();const Et=V.fog,Rt=F.isMeshStandardMaterial?V.environment:null,Pt=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Gn,Lt=(F.isMeshStandardMaterial?nt:lt).get(F.envMap||Rt),kt=F.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ut=!!J.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ft=!!J.morphAttributes.position,se=!!J.morphAttributes.normal,ce=!!J.morphAttributes.color,_n=F.toneMapped?v.toneMapping:si,Vn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,he=Vn!==void 0?Vn.length:0,Xt=at.get(F),Ea=m.state.lights;if(ut===!0&&(dt===!0||b!==M)){const Je=b===M&&F.id===L;_t.setState(F,b,Je)}let ve=!1;F.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Ea.state.version||Xt.outputColorSpace!==Pt||tt.isInstancedMesh&&Xt.instancing===!1||!tt.isInstancedMesh&&Xt.instancing===!0||tt.isSkinnedMesh&&Xt.skinning===!1||!tt.isSkinnedMesh&&Xt.skinning===!0||Xt.envMap!==Lt||F.fog===!0&&Xt.fog!==Et||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==_t.numPlanes||Xt.numIntersection!==_t.numIntersection)||Xt.vertexAlphas!==kt||Xt.vertexTangents!==Ut||Xt.morphTargets!==Ft||Xt.morphNormals!==se||Xt.morphColors!==ce||Xt.toneMapping!==_n||W.isWebGL2===!0&&Xt.morphTargetsCount!==he)&&(ve=!0):(ve=!0,Xt.__version=F.version);let Ni=Xt.currentProgram;ve===!0&&(Ni=ro(F,V,tt));let eu=!1,gs=!1,ya=!1;const Ne=Ni.getUniforms(),Fi=Xt.uniforms;if(X.useProgram(Ni.program)&&(eu=!0,gs=!0,ya=!0),F.id!==L&&(L=F.id,gs=!0),eu||M!==b){if(Ne.setValue(x,"projectionMatrix",b.projectionMatrix),W.logarithmicDepthBuffer&&Ne.setValue(x,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),M!==b&&(M=b,gs=!0,ya=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Je=Ne.map.cameraPosition;Je!==void 0&&Je.setValue(x,It.setFromMatrixPosition(b.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Ne.setValue(x,"isOrthographic",b.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||tt.isSkinnedMesh)&&Ne.setValue(x,"viewMatrix",b.matrixWorldInverse)}if(tt.isSkinnedMesh){Ne.setOptional(x,tt,"bindMatrix"),Ne.setOptional(x,tt,"bindMatrixInverse");const Je=tt.skeleton;Je&&(W.floatVertexTextures?(Je.boneTexture===null&&Je.computeBoneTexture(),Ne.setValue(x,"boneTexture",Je.boneTexture,$),Ne.setValue(x,"boneTextureSize",Je.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Aa=J.morphAttributes;if((Aa.position!==void 0||Aa.normal!==void 0||Aa.color!==void 0&&W.isWebGL2===!0)&&Tt.update(tt,J,Ni),(gs||Xt.receiveShadow!==tt.receiveShadow)&&(Xt.receiveShadow=tt.receiveShadow,Ne.setValue(x,"receiveShadow",tt.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Fi.envMap.value=Lt,Fi.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),gs&&(Ne.setValue(x,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&Wp(Fi,ya),Et&&F.fog===!0&&Q.refreshFogUniforms(Fi,Et),Q.refreshMaterialUniforms(Fi,F,B,j,yt),ko.upload(x,Xt.uniformsList,Fi,$)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ko.upload(x,Xt.uniformsList,Fi,$),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Ne.setValue(x,"center",tt.center),Ne.setValue(x,"modelViewMatrix",tt.modelViewMatrix),Ne.setValue(x,"normalMatrix",tt.normalMatrix),Ne.setValue(x,"modelMatrix",tt.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Je=F.uniformsGroups;for(let Ta=0,qp=Je.length;Ta<qp;Ta++)if(W.isWebGL2){const nu=Je[Ta];Nt.update(nu,Ni),Nt.bind(nu,Ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ni}function Wp(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function Xp(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,V,J){at.get(b.texture).__webglTexture=V,at.get(b.depthTexture).__webglTexture=J;const F=at.get(b);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=J===void 0,F.__autoAllocateDepthBuffer||U.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,V){const J=at.get(b);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(b,V=0,J=0){w=b,T=V,C=J;let F=!0,tt=null,Et=!1,Rt=!1;if(b){const Lt=at.get(b);Lt.__useDefaultFramebuffer!==void 0?(X.bindFramebuffer(x.FRAMEBUFFER,null),F=!1):Lt.__webglFramebuffer===void 0?$.setupRenderTarget(b):Lt.__hasExternalTextures&&$.rebindTextures(b,at.get(b.texture).__webglTexture,at.get(b.depthTexture).__webglTexture);const kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Rt=!0);const Ut=at.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(tt=Ut[V],Et=!0):W.isWebGL2&&b.samples>0&&$.useMultisampledRTT(b)===!1?tt=at.get(b).__webglMultisampledFramebuffer:tt=Ut,R.copy(b.viewport),q.copy(b.scissor),st=b.scissorTest}else R.copy(rt).multiplyScalar(B).floor(),q.copy(z).multiplyScalar(B).floor(),st=K;if(X.bindFramebuffer(x.FRAMEBUFFER,tt)&&W.drawBuffers&&F&&X.drawBuffers(b,tt),X.viewport(R),X.scissor(q),X.setScissorTest(st),Et){const Lt=at.get(b.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+V,Lt.__webglTexture,J)}else if(Rt){const Lt=at.get(b.texture),kt=V||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Lt.__webglTexture,J||0,kt)}L=-1},this.readRenderTargetPixels=function(b,V,J,F,tt,Et,Rt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=at.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Rt!==void 0&&(Pt=Pt[Rt]),Pt){X.bindFramebuffer(x.FRAMEBUFFER,Pt);try{const Lt=b.texture,kt=Lt.format,Ut=Lt.type;if(kt!==An&&gt.convert(kt)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ft=Ut===Ws&&(U.has("EXT_color_buffer_half_float")||W.isWebGL2&&U.has("EXT_color_buffer_float"));if(Ut!==bi&&gt.convert(Ut)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ut===gi&&(W.isWebGL2||U.has("OES_texture_float")||U.has("WEBGL_color_buffer_float")))&&!Ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-F&&J>=0&&J<=b.height-tt&&x.readPixels(V,J,F,tt,gt.convert(kt),gt.convert(Ut),Et)}finally{const Lt=w!==null?at.get(w).__webglFramebuffer:null;X.bindFramebuffer(x.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(b,V,J=0){const F=Math.pow(2,-J),tt=Math.floor(V.image.width*F),Et=Math.floor(V.image.height*F);$.setTexture2D(V,0),x.copyTexSubImage2D(x.TEXTURE_2D,J,0,0,b.x,b.y,tt,Et),X.unbindTexture()},this.copyTextureToTexture=function(b,V,J,F=0){const tt=V.image.width,Et=V.image.height,Rt=gt.convert(J.format),Pt=gt.convert(J.type);$.setTexture2D(J,0),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,J.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,J.unpackAlignment),V.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,F,b.x,b.y,tt,Et,Rt,Pt,V.image.data):V.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,F,b.x,b.y,V.mipmaps[0].width,V.mipmaps[0].height,Rt,V.mipmaps[0].data):x.texSubImage2D(x.TEXTURE_2D,F,b.x,b.y,Rt,Pt,V.image),F===0&&J.generateMipmaps&&x.generateMipmap(x.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(b,V,J,F,tt=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Et=b.max.x-b.min.x+1,Rt=b.max.y-b.min.y+1,Pt=b.max.z-b.min.z+1,Lt=gt.convert(F.format),kt=gt.convert(F.type);let Ut;if(F.isData3DTexture)$.setTexture3D(F,0),Ut=x.TEXTURE_3D;else if(F.isDataArrayTexture)$.setTexture2DArray(F,0),Ut=x.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,F.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,F.unpackAlignment);const Ft=x.getParameter(x.UNPACK_ROW_LENGTH),se=x.getParameter(x.UNPACK_IMAGE_HEIGHT),ce=x.getParameter(x.UNPACK_SKIP_PIXELS),_n=x.getParameter(x.UNPACK_SKIP_ROWS),Vn=x.getParameter(x.UNPACK_SKIP_IMAGES),he=J.isCompressedTexture?J.mipmaps[0]:J.image;x.pixelStorei(x.UNPACK_ROW_LENGTH,he.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,he.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,b.min.x),x.pixelStorei(x.UNPACK_SKIP_ROWS,b.min.y),x.pixelStorei(x.UNPACK_SKIP_IMAGES,b.min.z),J.isDataTexture||J.isData3DTexture?x.texSubImage3D(Ut,tt,V.x,V.y,V.z,Et,Rt,Pt,Lt,kt,he.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),x.compressedTexSubImage3D(Ut,tt,V.x,V.y,V.z,Et,Rt,Pt,Lt,he.data)):x.texSubImage3D(Ut,tt,V.x,V.y,V.z,Et,Rt,Pt,Lt,kt,he),x.pixelStorei(x.UNPACK_ROW_LENGTH,Ft),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,se),x.pixelStorei(x.UNPACK_SKIP_PIXELS,ce),x.pixelStorei(x.UNPACK_SKIP_ROWS,_n),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Vn),tt===0&&F.generateMipmaps&&x.generateMipmap(Ut),X.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?$.setTextureCube(b,0):b.isData3DTexture?$.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?$.setTexture2DArray(b,0):$.setTexture2D(b,0),X.unbindTexture()},this.resetState=function(){T=0,C=0,w=null,X.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===zt?ir:Md}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ir?zt:Gn}}class AE extends zd{}AE.prototype.isWebGL1Renderer=!0;class TE extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class bE{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zl,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=wi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Fe=new I;class Jo{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}setX(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Jt(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Jt(e,this.array),n=Jt(n,this.array),r=Jt(r,this.array),s=Jt(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Rn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Jo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hd extends eo{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ur;const ys=new I,Ir=new I,Or=new I,Nr=new Vt,As=new Vt,Gd=new Me,Uo=new I,Ts=new I,Io=new I,$f=new Vt,hl=new Vt,Zf=new Vt;class wE extends qe{constructor(t){if(super(),this.isSprite=!0,this.type="Sprite",Ur===void 0){Ur=new Ii;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bE(e,5);Ur.setIndex([0,1,2,0,2,3]),Ur.setAttribute("position",new Jo(n,3,0,!1)),Ur.setAttribute("uv",new Jo(n,2,3,!1))}this.geometry=Ur,this.material=t!==void 0?t:new Hd,this.center=new Vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ir.setFromMatrixScale(this.matrixWorld),Gd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Or.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ir.multiplyScalar(-Or.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const o=this.center;Oo(Uo.set(-.5,-.5,0),Or,o,Ir,r,s),Oo(Ts.set(.5,-.5,0),Or,o,Ir,r,s),Oo(Io.set(.5,.5,0),Or,o,Ir,r,s),$f.set(0,0),hl.set(1,0),Zf.set(1,1);let a=t.ray.intersectTriangle(Uo,Ts,Io,!1,ys);if(a===null&&(Oo(Ts.set(-.5,.5,0),Or,o,Ir,r,s),hl.set(0,1),a=t.ray.intersectTriangle(Uo,Io,Ts,!1,ys),a===null))return;const l=t.ray.origin.distanceTo(ys);l<t.near||l>t.far||e.push({distance:l,point:ys.clone(),uv:un.getInterpolation(ys,Uo,Ts,Io,$f,hl,Zf,new Vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Oo(i,t,e,n,r,s){Nr.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(As.x=s*Nr.x-r*Nr.y,As.y=r*Nr.x+s*Nr.y):As.copy(Nr),i.copy(t),i.x+=As.x,i.y+=As.y,i.applyMatrix4(Gd)}class RE extends Ge{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Jf={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class CE{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const kd=new CE;class Uc{constructor(t){this.manager=t!==void 0?t:kd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Uc.DEFAULT_MATERIAL_NAME="__DEFAULT";class PE extends Uc{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Jf.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Xs("img");function l(){u(),Jf.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(f){u(),r&&r(f),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class LE extends Uc{constructor(t){super(t)}load(t,e,n,r){const s=new Ge,o=new PE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class DE{constructor(t,e,n=0,r=1/0){this.ray=new bd(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Cc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Wl(t,this,n,e),n.sort(Qf),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Wl(t[r],this,n,e);return n.sort(Qf),n}}function Qf(i,t){return i.distance-t.distance}function Wl(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)Wl(r[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bc);function Jn(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Vd(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},os={duration:.5,overwrite:!1,delay:0},Ic,De,oe,hn=1e8,$t=1/hn,Xl=Math.PI*2,UE=Xl/4,IE=0,Wd=Math.sqrt,OE=Math.cos,NE=Math.sin,Ee=function(t){return typeof t=="string"},ae=function(t){return typeof t=="function"},oi=function(t){return typeof t=="number"},Oc=function(t){return typeof t>"u"},kn=function(t){return typeof t=="object"},Ye=function(t){return t!==!1},Nc=function(){return typeof window<"u"},No=function(t){return ae(t)||Ee(t)},Xd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ue=Array.isArray,ql=/(?:-?\.?\d|\.)+/gi,qd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Gr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,dl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yd=/[+-]=-?[.\d]+/,Kd=/[^,'"\[\]\s]+/gi,FE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ne,ln,Yl,Fc,sn={},Qo={},jd,$d=function(t){return(Qo=pr(t,sn))&&Ze},Bc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ta=function(t,e){return!e&&console.warn(t)},Zd=function(t,e){return t&&(sn[t]=e)&&Qo&&(Qo[t]=e)||sn},qs=function(){return 0},BE={suppressEvents:!0,isStart:!0,kill:!1},Vo={suppressEvents:!0,kill:!1},zE={suppressEvents:!0},zc={},Ri=[],Kl={},Jd,en={},pl={},th=30,Wo=[],Hc="",Gc=function(t){var e=t[0],n,r;if(kn(e)||ae(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=Wo.length;r--&&!Wo[r].targetTest(e););n=Wo[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Ep(t[r],n)))||t.splice(r,1);return t},or=function(t){return t._gsap||Gc(dn(t))[0]._gsap},Qd=function(t,e,n){return(n=t[e])&&ae(n)?t[e]():Oc(n)&&t.getAttribute&&t.getAttribute(e)||n},Ke=function(t,e){return(t=t.split(",")).forEach(e)||t},ue=function(t){return Math.round(t*1e5)/1e5||0},ye=function(t){return Math.round(t*1e7)/1e7||0},jr=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},HE=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},ea=function(){var t=Ri.length,e=Ri.slice(0),n,r;for(Kl={},Ri.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},tp=function(t,e,n,r){Ri.length&&!De&&ea(),t.render(e,n,r||De&&e<0&&(t._initted||t._startAt)),Ri.length&&!De&&ea()},ep=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Kd).length<2?e:Ee(t)?t.trim():t},np=function(t){return t},mn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},GE=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},pr=function(t,e){for(var n in e)t[n]=e[n];return t},eh=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=kn(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},na=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},Os=function(t){var e=t.parent||ne,n=t.keyframes?GE(Ue(t.keyframes)):mn;if(Ye(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},kE=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},ip=function(t,e,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},xa=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Di=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ar=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},VE=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},jl=function(t,e,n,r){return t._startAt&&(De?t._startAt.revert(Vo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},WE=function i(t){return!t||t._ts&&i(t.parent)},nh=function(t){return t._repeat?as(t._tTime,t=t.duration()+t._rDelay)*t:0},as=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ia=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ma=function(t){return t._end=ye(t._start+(t._tDur/Math.abs(t._ts||t._rts||$t)||0))},Sa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ye(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ma(t),n._dirty||ar(n,t)),t},rp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ia(t.rawTime(),e),(!e._dur||no(0,e.totalDuration(),n)-e._tTime>$t)&&e.render(n,!0)),ar(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-$t}},Fn=function(t,e,n,r){return e.parent&&Di(e),e._start=ye((oi(n)?n:n||t!==ne?an(t,n,e):t._time)+e._delay),e._end=ye(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ip(t,e,"_first","_last",t._sort?"_start":0),$l(e)||(t._recent=e),r||rp(t,e),t._ts<0&&Sa(t,t._tTime),t},sp=function(t,e){return(sn.ScrollTrigger||Bc("scrollTrigger",e))&&sn.ScrollTrigger.create(e,t)},op=function(t,e,n,r,s){if(Vc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!De&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Jd!==nn.frame)return Ri.push(t),t._lazy=[s,r],1},XE=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},$l=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},qE=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&XE(t)&&!(!t._initted&&$l(t))||(t._ts<0||t._dp._ts<0)&&!$l(t))?0:1,a=t._rDelay,l=0,c,u,f;if(a&&t._repeat&&(l=no(0,t._tDur,e),u=as(l,a),t._yoyo&&u&1&&(o=1-o),u!==as(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||De||r||t._zTime===$t||!e&&t._zTime){if(!t._initted&&op(t,e,r,n,l))return;for(f=t._zTime,t._zTime=e||(n?$t:0),n||(n=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&jl(t,e,n,!0),t._onUpdate&&!n&&pn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&pn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Di(t,1),!n&&!De&&(pn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},YE=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},ls=function(t,e,n,r){var s=t._repeat,o=ye(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:ye(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Sa(t,t._tTime=t._tDur*a),t.parent&&Ma(t),n||ar(t.parent,t),t},ih=function(t){return t instanceof We?ar(t):ls(t,t._dur)},KE={_start:0,endTime:qs,totalDuration:qs},an=function i(t,e,n){var r=t.labels,s=t._recent||KE,o=t.duration()>=hn?s.endTime(!1):t._dur,a,l,c;return Ee(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Ue(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},Ns=function(t,e,n){var r=oi(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ye(l.vars.inherit)&&l.parent;o.immediateRender=Ye(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new pe(e[0],o,e[s+1])},Oi=function(t,e){return t||t===0?e(t):e},no=function(t,e,n){return n<t?t:n>e?e:n},Pe=function(t,e){return!Ee(t)||!(e=FE.exec(t))?"":e[1]},jE=function(t,e,n){return Oi(n,function(r){return no(t,e,r)})},Zl=[].slice,ap=function(t,e){return t&&kn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&kn(t[0]))&&!t.nodeType&&t!==ln},$E=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return Ee(r)&&!e||ap(r,1)?(s=n).push.apply(s,dn(r)):n.push(r)})||n},dn=function(t,e,n){return oe&&!e&&oe.selector?oe.selector(t):Ee(t)&&!n&&(Yl||!cs())?Zl.call((e||Fc).querySelectorAll(t),0):Ue(t)?$E(t,n):ap(t)?Zl.call(t,0):t?[t]:[]},Jl=function(t){return t=dn(t)[0]||ta("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return dn(e,n.querySelectorAll?n:n===t?ta("Invalid scope")||Fc.createElement("div"):t)}},lp=function(t){return t.sort(function(){return .5-Math.random()})},cp=function(t){if(ae(t))return t;var e=kn(t)?t:{each:t},n=lr(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,f=r;return Ee(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,p,g){var _=(g||e).length,m=o[_],d,E,v,y,T,C,w,L,M;if(!m){if(M=e.grid==="auto"?0:(e.grid||[1,hn])[1],!M){for(w=-hn;w<(w=g[M++].getBoundingClientRect().left)&&M<_;);M--}for(m=o[_]=[],d=l?Math.min(M,_)*u-.5:r%M,E=M===hn?0:l?_*f/M-.5:r/M|0,w=0,L=hn,C=0;C<_;C++)v=C%M-d,y=E-(C/M|0),m[C]=T=c?Math.abs(c==="y"?y:v):Wd(v*v+y*y),T>w&&(w=T),T<L&&(L=T);r==="random"&&lp(m),m.max=w-L,m.min=L,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Pe(e.amount||e.each)||0,n=n&&_<0?xp(n):n}return _=(m[h]-m.min)/m.max||0,ye(m.b+(n?n(_):_)*m.v)+m.u}},Ql=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=ye(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(oi(n)?0:Pe(n))}},up=function(t,e){var n=Ue(t),r,s;return!n&&kn(t)&&(r=n=t.radius||hn,t.values?(t=dn(t.values),(s=!oi(t[0]))&&(r*=r)):t=Ql(t.increment)),Oi(e,n?ae(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=hn,u=0,f=t.length,h,p;f--;)s?(h=t[f].x-a,p=t[f].y-l,h=h*h+p*p):h=Math.abs(t[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?t[u]:o,s||u===o||oi(o)?u:u+Pe(o)}:Ql(t))},fp=function(t,e,n,r){return Oi(Ue(t)?!e:n===!0?!!(n=0):!r,function(){return Ue(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},ZE=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},JE=function(t,e){return function(n){return t(parseFloat(n))+(e||Pe(n))}},QE=function(t,e,n){return dp(t,e,0,1,n)},hp=function(t,e,n){return Oi(n,function(r){return t[~~e(r)]})},ty=function i(t,e,n){var r=e-t;return Ue(t)?hp(t,i(0,t.length),e):Oi(n,function(s){return(r+(s-t)%r)%r+t})},ey=function i(t,e,n){var r=e-t,s=r*2;return Ue(t)?hp(t,i(0,t.length-1),e):Oi(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},Ys=function(t){for(var e=0,n="",r,s,o,a;~(r=t.indexOf("random(",e));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?Kd:ql),n+=t.substr(e,r-e)+fp(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},dp=function(t,e,n,r,s){var o=e-t,a=r-n;return Oi(s,function(l){return n+((l-t)/o*a||0)})},ny=function i(t,e,n,r){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var o=Ee(t),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(Ue(t)&&!Ue(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(i(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=e}else r||(t=pr(Ue(t)?[]:{},t));if(!u){for(l in e)kc.call(a,t,l,"get",e[l]);s=function(g){return qc(g,a)||(o?t.p:t)}}}return Oi(n,s)},rh=function(t,e,n){var r=t.labels,s=hn,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},pn=function(t,e,n){var r=t.vars,s=r[e],o=oe,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&Ri.length&&ea(),a&&(oe=a),u=l?s.apply(c,l):s.call(c),oe=o,u},Ps=function(t){return Di(t),t.scrollTrigger&&t.scrollTrigger.kill(!!De),t.progress()<1&&pn(t,"onInterrupt"),t},kr,pp=[],mp=function(t){if(Nc()&&t){t=!t.name&&t.default||t;var e=t.name,n=ae(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:qs,render:qc,add:kc,kill:vy,modifier:gy,rawVars:0},o={targetTest:0,get:0,getSetter:Xc,aliases:{},register:0};if(cs(),t!==r){if(en[e])return;mn(r,mn(na(t,s),o)),pr(r.prototype,pr(s,na(t,o))),en[r.prop=e]=r,t.targetTest&&(Wo.push(r),zc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Zd(e,r),t.register&&t.register(Ze,r,je)}else t&&pp.push(t)},jt=255,Ls={aqua:[0,jt,jt],lime:[0,jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,jt],navy:[0,0,128],white:[jt,jt,jt],olive:[128,128,0],yellow:[jt,jt,0],orange:[jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[jt,0,0],pink:[jt,192,203],cyan:[0,jt,jt],transparent:[jt,jt,jt,0]},ml=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*jt+.5|0},_p=function(t,e,n){var r=t?oi(t)?[t>>16,t>>8&jt,t&jt]:0:Ls.black,s,o,a,l,c,u,f,h,p,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ls[t])r=Ls[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&jt,r&jt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&jt,t&jt]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(ql),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=ml(l+1/3,s,o),r[1]=ml(l,s,o),r[2]=ml(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(qd),n&&r.length<4&&(r[3]=1),r}else r=t.match(ql)||Ls.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/jt,o=r[1]/jt,a=r[2]/jt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},gp=function(t){var e=[],n=[],r=-1;return t.split(Ci).forEach(function(s){var o=s.match(Gr)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},sh=function(t,e,n){var r="",s=(t+r).match(Ci),o=e?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=_p(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=gp(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(Ci,"1").split(Gr),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Ci),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},Ci=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ls)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),iy=/hsl[a]?\(/,vp=function(t){var e=t.join(" "),n;if(Ci.lastIndex=0,Ci.test(e))return n=iy.test(e),t[1]=sh(t[1],n),t[0]=sh(t[0],n,gp(t[1])),!0},Ks,nn=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,p,g=function _(m){var d=i()-r,E=m===!0,v,y,T,C;if(d>t&&(n+=d-e),r+=d,T=r-n,v=T-o,(v>0||E)&&(C=++f.frame,h=T-f.time*1e3,f.time=T=T/1e3,o+=v+(v>=s?4:s-v),y=1),E||(l=c(_)),y)for(p=0;p<a.length;p++)a[p](T,h,C,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){jd&&(!Yl&&Nc()&&(ln=Yl=window,Fc=ln.document||{},sn.gsap=Ze,(ln.gsapVersions||(ln.gsapVersions=[])).push(Ze.version),$d(Qo||ln.GreenSockGlobals||!ln.gsap&&ln||{}),u=ln.requestAnimationFrame,pp.forEach(mp)),l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Ks=1,g(2))},sleep:function(){(u?ln.cancelAnimationFrame:clearTimeout)(l),Ks=0,c=qs},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,d,E){var v=d?function(y,T,C,w){m(y,T,C,w),f.remove(v)}:m;return f.remove(m),a[E?"unshift":"push"](v),cs(),v},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),cs=function(){return!Ks&&nn.wake()},Wt={},ry=/^[\d.\-M][\d.\-,\s]/,sy=/["']/g,oy=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(sy,"").trim():+c,r=l.substr(a+1).trim();return e},ay=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},ly=function(t){var e=(t+"").split("("),n=Wt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[oy(e[1])]:ay(t).split(",").map(ep)):Wt._CE&&ry.test(t)?Wt._CE("",t):n},xp=function(t){return function(e){return 1-t(1-e)}},Mp=function i(t,e){for(var n=t._first,r;n;)n instanceof We?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},lr=function(t,e){return t&&(ae(t)?t:Wt[t]||ly(t))||e},mr=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return Ke(t,function(a){Wt[a]=sn[a]=s,Wt[o=a.toLowerCase()]=n;for(var l in s)Wt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Wt[a+"."+l]=s[l]}),s},Sp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},_l=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Xl*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*NE((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Sp(a);return s=Xl/s,l.config=function(c,u){return i(t,c,u)},l},gl=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Sp(n);return r.config=function(s){return i(t,s)},r};Ke("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;mr(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Wt.Linear.easeNone=Wt.none=Wt.Linear.easeIn;mr("Elastic",_l("in"),_l("out"),_l());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};mr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);mr("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});mr("Circ",function(i){return-(Wd(1-i*i)-1)});mr("Sine",function(i){return i===1?1:-OE(i*UE)+1});mr("Back",gl("in"),gl("out"),gl());Wt.SteppedEase=Wt.steps=sn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-$t;return function(a){return((r*no(0,o,a)|0)+s)*n}}};os.ease=Wt["quad.out"];Ke("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Hc+=i+","+i+"Params,"});var Ep=function(t,e){this.id=IE++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Qd,this.set=e?e.getSetter:Xc},js=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ls(this,+e.duration,1,1),this.data=e.data,oe&&(this._ctx=oe,oe.data.push(this)),Ks||nn.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,ls(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(cs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Sa(this,n),!s._dp||s.parent||rp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===$t||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),tp(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+nh(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+nh(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?as(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-$t?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ia(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-$t?0:this._rts,this.totalTime(no(-Math.abs(this._delay),this._tDur,r),!0),Ma(this),VE(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(cs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$t&&(this._tTime-=$t)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Fn(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ye(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ia(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=zE);var r=De;return De=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),De=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ih(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,ih(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(an(this,n),Ye(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Ye(r))},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-$t:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-$t,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-$t)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this;return new Promise(function(s){var o=ae(n)?n:np,a=function(){var c=r.then;r.then=null,ae(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){Ps(this)},i}();mn(js.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-$t,_prom:0,_ps:!1,_rts:1});var We=function(i){Vd(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ye(n.sortChildren),ne&&Fn(n.parent||ne,Jn(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&sp(Jn(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return Ns(0,arguments,this),this},e.from=function(r,s,o){return Ns(1,arguments,this),this},e.fromTo=function(r,s,o,a){return Ns(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,Os(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new pe(r,s,an(this,o),1),this},e.call=function(r,s,o){return Fn(this,pe.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new pe(r,o,an(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Os(o).immediateRender=Ye(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,Os(a).immediateRender=Ye(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:ye(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,p,g,_,m,d,E,v,y,T,C,w;if(this!==ne&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,y=this._start,v=this._ts,d=!v,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=ye(u%m),u===l?(_=this._repeat,h=c):(_=~~(u/m),_&&_===u/m&&(h=c,_--),h>c&&(h=c)),T=as(this._tTime,m),!a&&this._tTime&&T!==_&&this._tTime-T*m-this._dur<=0&&(T=_),C&&_&1&&(h=c-h,w=1),_!==T&&!this._lock){var L=C&&T&1,M=L===(C&&_&1);if(_<T&&(L=!L),a=L?0:u%c?c:u,this._lock=1,this.render(a||(w?0:ye(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&pn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=L?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Mp(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=YE(this,ye(a),ye(h)),E&&(u-=h-(h=E._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(pn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&E!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){E=0,g&&(u+=this._zTime=-$t);break}}p=g}else{p=this._last;for(var R=r<0?r:h;p;){if(g=p._prev,(p._act||R<=p._end)&&p._ts&&E!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(R-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(R-p._start)*p._ts,s,o||De&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!d){E=0,g&&(u+=this._zTime=R?-$t:$t);break}}p=g}}if(E&&!s&&(this.pause(),E.render(h>=a?0:-$t)._zTime=h>=a?1:-1,this._ts))return this._start=y,Ma(this),this.render(r,s,o);this._onUpdate&&!s&&pn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Di(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(pn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(oi(s)||(s=an(this,s,r)),!(r instanceof js)){if(Ue(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ee(r))return this.addLabel(r,s);if(ae(r))r=pe.delayedCall(0,r);else return this}return this!==r?Fn(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-hn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof pe?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return Ee(r)?this.removeLabel(r):ae(r)?this.killTweensOf(r):(xa(this,r),r===this._recent&&(this._recent=this._last),ar(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ye(nn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=an(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=pe.delayedCall(0,s||qs,o);return a.data="isPause",this._hasPause=1,Fn(this,a,an(this,r))},e.removePause=function(r){var s=this._first;for(r=an(this,r);s;)s._start===r&&s.data==="isPause"&&Di(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Mi!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=dn(r),l=this._first,c=oi(s),u;l;)l instanceof pe?HE(l._targets,a)&&(c?(!Mi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=an(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=pe.to(o,mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||$t,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&ls(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,mn({startAt:{time:an(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),rh(this,an(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),rh(this,an(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+$t)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return ar(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ar(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=hn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Fn(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ls(o,o===ne&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(ne._ts&&(tp(ne,ia(r,ne)),Jd=nn.frame),nn.frame>=th){th+=rn.autoSleep||120;var s=ne._first;if((!s||!s._ts)&&rn.autoSleep&&nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||nn.sleep()}}},t}(js);mn(We.prototype,{_lock:0,_hasPause:0,_forcing:0});var cy=function(t,e,n,r,s,o,a){var l=new je(this._pt,t,e,0,1,Rp,null,s),c=0,u=0,f,h,p,g,_,m,d,E;for(l.b=n,l.e=r,n+="",r+="",(d=~r.indexOf("random("))&&(r=Ys(r)),o&&(E=[n,r],o(E,t,e),n=E[0],r=E[1]),h=n.match(dl)||[];f=dl.exec(r);)g=f[0],_=r.substring(c,f.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?jr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=dl.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Yd.test(r)||d)&&(l.e=0),this._pt=l,l},kc=function(t,e,n,r,s,o,a,l,c,u){ae(r)&&(r=r(s||0,t,o));var f=t[e],h=n!=="get"?n:ae(f)?c?t[e.indexOf("set")||!ae(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,p=ae(f)?c?py:bp:Wc,g;if(Ee(r)&&(~r.indexOf("random(")&&(r=Ys(r)),r.charAt(1)==="="&&(g=jr(h,r)+(Pe(h)||0),(g||g===0)&&(r=g))),!u||h!==r||tc)return!isNaN(h*r)&&r!==""?(g=new je(this._pt,t,e,+h||0,r-(h||0),typeof f=="boolean"?_y:wp,0,p),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(e in t)&&Bc(e,r),cy.call(this,t,e,h,r,p,l||rn.stringFilter,c))},uy=function(t,e,n,r,s){if(ae(t)&&(t=Fs(t,s,e,n,r)),!kn(t)||t.style&&t.nodeType||Ue(t)||Xd(t))return Ee(t)?Fs(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=Fs(t[a],s,e,n,r);return o},yp=function(t,e,n,r,s,o){var a,l,c,u;if(en[t]&&(a=new en[t]).init(s,a.rawVars?e[t]:uy(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new je(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==kr))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Mi,tc,Vc=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,f=r.callbackScope,h=r.runBackwards,p=r.yoyoEase,g=r.keyframes,_=r.autoRevert,m=t._dur,d=t._startAt,E=t._targets,v=t.parent,y=v&&v.data==="nested"?v.vars.targets:E,T=t._overwrite==="auto"&&!Ic,C=t.timeline,w,L,M,R,q,st,O,k,G,j,B,H,et;if(C&&(!g||!s)&&(s="none"),t._ease=lr(s,os.ease),t._yEase=p?xp(lr(p===!0?s:p,os.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!C&&!!r.runBackwards,!C||g&&!r.stagger){if(k=E[0]?or(E[0]).harness:0,H=k&&r[k.prop],w=na(r,zc),d&&(d._zTime<0&&d.progress(1),e<0&&h&&a&&!_?d.render(-1,!0):d.revert(h&&m?Vo:BE),d._lazy=0),o){if(Di(t._startAt=pe.set(E,mn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!d&&Ye(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(De||!a&&!_)&&t._startAt.revert(Vo),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!d){if(e&&(a=!1),M=mn({overwrite:!1,data:"isFromStart",lazy:a&&!d&&Ye(l),immediateRender:a,stagger:0,parent:v},w),H&&(M[k.prop]=H),Di(t._startAt=pe.set(E,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(De?t._startAt.revert(Vo):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,$t,$t);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Ye(l)||l&&!m,L=0;L<E.length;L++){if(q=E[L],O=q._gsap||Gc(E)[L]._gsap,t._ptLookup[L]=j={},Kl[O.id]&&Ri.length&&ea(),B=y===E?L:y.indexOf(q),k&&(G=new k).init(q,H||w,t,B,y)!==!1&&(t._pt=R=new je(t._pt,q,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(rt){j[rt]=R}),G.priority&&(st=1)),!k||H)for(M in w)en[M]&&(G=yp(M,w,t,B,q,y))?G.priority&&(st=1):j[M]=R=kc.call(t,q,M,"get",w[M],B,y,0,r.stringFilter);t._op&&t._op[L]&&t.kill(q,t._op[L]),T&&t._pt&&(Mi=t,ne.killTweensOf(q,j,t.globalTime(e)),et=!t.parent,Mi=0),t._pt&&l&&(Kl[O.id]=1)}st&&Cp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!et,g&&e<=0&&C.render(hn,!0,!0)},fy=function(t,e,n,r,s,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,f,h;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,h=t._targets.length;h--;){if(c=f[h][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return tc=1,t.vars[e]="+=0",Vc(t,a),tc=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=ue(n)+Pe(u.e)),u.b&&(u.b=c.s+Pe(u.b))},hy=function(t,e){var n=t[0]?or(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=pr({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},dy=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(Ue(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Fs=function(t,e,n,r,s){return ae(t)?t.call(e,n,r,s):Ee(t)&&~t.indexOf("random(")?Ys(t):t},Ap=Hc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Tp={};Ke(Ap+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Tp[i]=1});var pe=function(i){Vd(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Os(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,E=r.parent||ne,v=(Ue(n)||Xd(n)?oi(n[0]):"length"in r)?[n]:dn(n),y,T,C,w,L,M,R,q;if(a._targets=v.length?Gc(v):ta("GSAP target "+n+" not found. https://greensock.com",!rn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||h||No(c)||No(u)){if(r=a.vars,y=a.timeline=new We({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:v}),y.kill(),y.parent=y._dp=Jn(a),y._start=0,h||No(c)||No(u)){if(w=v.length,R=h&&cp(h),kn(h))for(L in h)~Ap.indexOf(L)&&(q||(q={}),q[L]=h[L]);for(T=0;T<w;T++)C=na(r,Tp),C.stagger=0,d&&(C.yoyoEase=d),q&&pr(C,q),M=v[T],C.duration=+Fs(c,Jn(a),T,M,v),C.delay=(+Fs(u,Jn(a),T,M,v)||0)-a._delay,!h&&w===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),y.to(M,C,R?R(T,M,v):0),y._ease=Wt.none;y.duration()?c=u=0:a.timeline=0}else if(g){Os(mn(y.vars.defaults,{ease:"none"})),y._ease=lr(g.ease||r.ease||"none");var st=0,O,k,G;if(Ue(g))g.forEach(function(j){return y.to(v,j,">")}),y.duration();else{C={};for(L in g)L==="ease"||L==="easeEach"||dy(L,g[L],C,g.easeEach);for(L in C)for(O=C[L].sort(function(j,B){return j.t-B.t}),st=0,T=0;T<O.length;T++)k=O[T],G={ease:k.e,duration:(k.t-(T?O[T-1].t:0))/100*c},G[L]=k.v,y.to(v,G,st),st+=G.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return p===!0&&!Ic&&(Mi=Jn(a),ne.killTweensOf(v),Mi=0),Fn(E,Jn(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===ye(E._time)&&Ye(f)&&WE(Jn(a))&&E.data!=="nested")&&(a._tTime=-$t,a.render(Math.max(0,-u)||0)),m&&sp(Jn(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-$t&&!u?l:r<$t?0:r,h,p,g,_,m,d,E,v,y;if(!c)qE(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=ye(f%_),f===l?(g=this._repeat,h=c):(g=~~(f/_),g&&g===f/_&&(h=c,g--),h>c&&(h=c)),d=this._yoyo&&g&1,d&&(y=this._yEase,h=c-h),m=as(this._tTime,_),h===a&&!o&&this._initted)return this._tTime=f,this;g!==m&&(v&&this._yEase&&Mp(v,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=o=1,this.render(ye(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(op(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(y||this._ease)(h/c),this._from&&(this.ratio=E=1-E),h&&!a&&!s&&!g&&(pn(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(E,p.d),p=p._next;v&&v.render(r<0?r:!h&&d?-$t:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&jl(this,r,s,o),pn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&pn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&jl(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Di(this,1),!s&&!(u&&!a)&&(f||a||d)&&(pn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a){Ks||nn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Vc(this,l),c=this._ease(l/this._dur),fy(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(Sa(this,0),this.parent||ip(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ps(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Mi&&Mi.vars.overwrite!==!0)._first||Ps(this),this.parent&&o!==this.timeline.totalDuration()&&ls(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?dn(r):a,c=this._ptLookup,u=this._pt,f,h,p,g,_,m,d;if((!s||s==="all")&&kE(a,l))return s==="all"&&(this._pt=0),Ps(this);for(f=this._op=this._op||[],s!=="all"&&(Ee(s)&&(_={},Ke(s,function(E){return _[E]=1}),s=_),s=hy(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=c[d],s==="all"?(f[d]=s,g=h,p={}):(p=f[d]=f[d]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&xa(this,m,"_pt"),delete h[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Ps(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Ns(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return Ns(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return ne.killTweensOf(r,s,o)},t}(js);mn(pe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ke("staggerTo,staggerFrom,staggerFromTo",function(i){pe[i]=function(){var t=new We,e=Zl.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Wc=function(t,e,n){return t[e]=n},bp=function(t,e,n){return t[e](n)},py=function(t,e,n,r){return t[e](r.fp,n)},my=function(t,e,n){return t.setAttribute(e,n)},Xc=function(t,e){return ae(t[e])?bp:Oc(t[e])&&t.setAttribute?my:Wc},wp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},_y=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Rp=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},qc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},gy=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},vy=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?xa(this,e,"_pt"):e.dep||(n=1),e=r;return!n},xy=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},Cp=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},je=function(){function i(e,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||wp,this.d=l||this,this.set=c||Wc,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=xy,this.m=n,this.mt=s,this.tween=r},i}();Ke(Hc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return zc[i]=1});sn.TweenMax=sn.TweenLite=pe;sn.TimelineLite=sn.TimelineMax=We;ne=new We({sortChildren:!1,defaults:os,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});rn.stringFilter=vp;var cr=[],Xo={},My=[],oh=0,Sy=0,vl=function(t){return(Xo[t]||My).map(function(e){return e()})},ec=function(){var t=Date.now(),e=[];t-oh>2&&(vl("matchMediaInit"),cr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=ln.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),vl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),oh=t,vl("matchMedia"))},Pp=function(){function i(e,n){this.selector=n&&Jl(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Sy++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){ae(n)&&(s=r,r=n,n=ae);var o=this,a=function(){var c=oe,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Jl(s)),oe=o,f=r.apply(o,arguments),ae(f)&&o._r.push(f),oe=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===ae?a(o):n?o[n]=a:a},t.ignore=function(n){var r=oe;oe=null,n(this),oe=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof pe&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof pe)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r)for(var a=cr.length;a--;)cr[a].id===this.id&&cr.splice(a,1)},t.revert=function(n){this.kill(n||{})},i}(),Ey=function(){function i(e){this.contexts=[],this.scope=e}var t=i.prototype;return t.add=function(n,r,s){kn(n)||(n={matches:n});var o=new Pp(0,s||this.scope),a=o.conditions={},l,c,u;oe&&!o.selector&&(o.selector=oe.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=ln.matchMedia(n[c]),l&&(cr.indexOf(o)<0&&cr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(ec):l.addEventListener("change",ec)));return u&&r(o),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),ra={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return mp(r)})},timeline:function(t){return new We(t)},getTweensOf:function(t,e){return ne.getTweensOf(t,e)},getProperty:function(t,e,n,r){Ee(t)&&(t=dn(t)[0]);var s=or(t||{}).get,o=n?np:ep;return n==="native"&&(n=""),t&&(e?o((en[e]&&en[e].get||s)(t,e,n,r)):function(a,l,c){return o((en[a]&&en[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=dn(t),t.length>1){var r=t.map(function(u){return Ze.quickSetter(u,e,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}t=t[0]||{};var o=en[e],a=or(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var f=new o;kr._pt=0,f.init(t,n?u+n:u,kr,0,[t]),f.render(1,f),kr._pt&&qc(1,kr)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var r,s=Ze.to(t,pr((r={},r[e]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return ne.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=lr(t.ease,os.ease)),eh(os,t||{})},config:function(t){return eh(rn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!en[a]&&!sn[a]&&ta(e+" effect requires "+a+" plugin.")}),pl[e]=function(a,l,c){return n(dn(a),mn(l||{},s),c)},o&&(We.prototype[e]=function(a,l,c){return this.add(pl[e](a,kn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Wt[t]=lr(e)},parseEase:function(t,e){return arguments.length?lr(t,e):Wt},getById:function(t){return ne.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new We(t),r,s;for(n.smoothChildTiming=Ye(t.smoothChildTiming),ne.remove(n),n._dp=0,n._time=n._tTime=ne._time,r=ne._first;r;)s=r._next,(e||!(!r._dur&&r instanceof pe&&r.vars.onComplete===r._targets[0]))&&Fn(n,r,r._start-r._delay),r=s;return Fn(ne,n,0),n},context:function(t,e){return t?new Pp(t,e):oe},matchMedia:function(t){return new Ey(t)},matchMediaRefresh:function(){return cr.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||ec()},addEventListener:function(t,e){var n=Xo[t]||(Xo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Xo[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:ty,wrapYoyo:ey,distribute:cp,random:fp,snap:up,normalize:QE,getUnit:Pe,clamp:jE,splitColor:_p,toArray:dn,selector:Jl,mapRange:dp,pipe:ZE,unitize:JE,interpolate:ny,shuffle:lp},install:$d,effects:pl,ticker:nn,updateRoot:We.updateRoot,plugins:en,globalTimeline:ne,core:{PropTween:je,globals:Zd,Tween:pe,Timeline:We,Animation:js,getCache:or,_removeLinkedListItem:xa,reverting:function(){return De},context:function(t){return t&&oe&&(oe.data.push(t),t._ctx=oe),oe},suppressOverwrites:function(t){return Ic=t}}};Ke("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ra[i]=pe[i]});nn.add(We.updateRoot);kr=ra.to({},{duration:0});var yy=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Ay=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=yy(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},xl=function(t,e){return{name:t,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Ee(s)&&(l={},Ke(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Ay(a,s)}}}},Ze=ra.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)De?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},xl("roundProps",Ql),xl("modifiers"),xl("snap",up))||ra;pe.version=We.version=Ze.version="3.12.2";jd=1;Nc()&&cs();Wt.Power0;Wt.Power1;Wt.Power2;Wt.Power3;Wt.Power4;Wt.Linear;Wt.Quad;Wt.Cubic;Wt.Quart;Wt.Quint;Wt.Strong;Wt.Elastic;Wt.Back;Wt.SteppedEase;Wt.Bounce;Wt.Sine;Wt.Expo;Wt.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ah,Si,$r,Yc,Ji,lh,Kc,Ty=function(){return typeof window<"u"},ai={},Ki=180/Math.PI,Zr=Math.PI/180,Fr=Math.atan2,ch=1e8,jc=/([A-Z])/g,by=/(left|right|width|margin|padding|x)/i,wy=/[\s,\(]\S/,zn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},nc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Ry=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cy=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Py=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Lp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Dp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Ly=function(t,e,n){return t.style[e]=n},Dy=function(t,e,n){return t.style.setProperty(e,n)},Uy=function(t,e,n){return t._gsap[e]=n},Iy=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Oy=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ny=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},ie="transform",Cn=ie+"Origin",Fy=function i(t,e){var n=this,r=this.target,s=r.style;if(t in ai&&s){if(this.tfm=this.tfm||{},t!=="transform")t=zn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Qn(r,o)}):this.tfm[t]=r._gsap.x?r._gsap[t]:Qn(r,t);else return zn.transform.split(",").forEach(function(o){return i.call(n,o,e)});if(this.props.indexOf(ie)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Cn,e,"")),t=ie}(s||e)&&this.props.push(t,e,s[t])},Up=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},By=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(jc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Kc(),(!s||!s.isStart)&&!n[ie]&&(Up(n),r.uncache=1)}},Ip=function(t,e){var n={target:t,props:[],revert:By,save:Fy};return t._gsap||Ze.core.getCache(t),e&&e.split(",").forEach(function(r){return n.save(r)}),n},Op,ic=function(t,e){var n=Si.createElementNS?Si.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Si.createElement(t);return n.style?n:Si.createElement(t)},Hn=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(jc,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,us(e)||e,1)||""},uh="O,Moz,ms,Ms,Webkit".split(","),us=function(t,e,n){var r=e||Ji,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(uh[o]+t in s););return o<0?null:(o===3?"ms":o>=0?uh[o]:"")+t},rc=function(){Ty()&&window.document&&(ah=window,Si=ah.document,$r=Si.documentElement,Ji=ic("div")||{style:{}},ic("div"),ie=us(ie),Cn=ie+"Origin",Ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Op=!!us("perspective"),Kc=Ze.core.reverting,Yc=1)},Ml=function i(t){var e=ic("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if($r.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),$r.removeChild(e),this.style.cssText=s,o},fh=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Np=function(t){var e;try{e=t.getBBox()}catch{e=Ml.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ml||(e=Ml.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+fh(t,["x","cx","x1"])||0,y:+fh(t,["y","cy","y1"])||0,width:0,height:0}:e},Fp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Np(t))},$s=function(t,e){if(e){var n=t.style;e in ai&&e!==Cn&&(e=ie),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(jc,"-$1").toLowerCase())):n.removeAttribute(e)}},Ei=function(t,e,n,r,s,o){var a=new je(t._pt,e,n,0,1,o?Dp:Lp);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},hh={deg:1,rad:1,turn:1},zy={grid:1,flex:1},Ui=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ji.style,l=by.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",g,_,m,d;return r===o||!s||hh[r]||hh[o]?s:(o!=="px"&&!h&&(s=i(t,e,n,"px")),d=t.getCTM&&Fp(t),(p||o==="%")&&(ai[e]||~e.indexOf("adius"))?(g=d?t.getBBox()[l?"width":"height"]:t[u],ue(p?s/g*f:s/100*g)):(a[l?"width":"height"]=f+(h?o:r),_=~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Si||!_.appendChild)&&(_=Si.body),m=_._gsap,m&&p&&m.width&&l&&m.time===nn.time&&!m.uncache?ue(s/m.width*f):((p||o==="%")&&!zy[Hn(_,"display")]&&(a.position=Hn(t,"position")),_===t&&(a.position="static"),_.appendChild(Ji),g=Ji[u],_.removeChild(Ji),a.position="absolute",l&&p&&(m=or(_),m.time=nn.time,m.width=_[u]),ue(h?g*s/f:g&&s?f/g*s:0))))},Qn=function(t,e,n,r){var s;return Yc||rc(),e in zn&&e!=="transform"&&(e=zn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ai[e]&&e!=="transform"?(s=Js(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:oa(Hn(t,Cn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=sa[e]&&sa[e](t,e,n)||Hn(t,e)||Qd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ui(t,e,s,n)+n:s},Hy=function(t,e,n,r){if(!n||n==="none"){var s=us(e,t,1),o=s&&Hn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Hn(t,"borderTopColor"))}var a=new je(this._pt,t.style,e,0,1,Rp),l=0,c=0,u,f,h,p,g,_,m,d,E,v,y,T;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(t.style[e]=r,r=Hn(t,e)||r,t.style[e]=n),u=[n,r],vp(u),n=u[0],r=u[1],h=n.match(Gr)||[],T=r.match(Gr)||[],T.length){for(;f=Gr.exec(r);)m=f[0],E=r.substring(l,f.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=jr(p,m)+y),d=parseFloat(m),v=m.substr((d+"").length),l=Gr.lastIndex-v.length,v||(v=v||rn.units[e]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(p=Ui(t,e,_,v)||0),a._pt={_next:a._pt,p:E||c===1?E:",",s:p,c:d-p,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?Dp:Lp;return Yd.test(r)&&(a.e=0),this._pt=a,a},dh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Gy=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=dh[n]||n,e[1]=dh[r]||r,e.join(" ")},ky=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ai[a]&&(l=1,a=a==="transformOrigin"?Cn:ie),$s(n,a);l&&($s(n,ie),o&&(o.svg&&n.removeAttribute("transform"),Js(n,1),o.uncache=1,Up(r)))}},sa={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new je(t._pt,e,n,0,0,ky);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},Zs=[1,0,0,1,0,0],Bp={},zp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ph=function(t){var e=Hn(t,ie);return zp(e)?Zs:e.substr(7).match(qd).map(ue)},$c=function(t,e){var n=t._gsap||or(t),r=t.style,s=ph(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Zs:s):(s===Zs&&!t.offsetParent&&t!==$r&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,$r.appendChild(t)),s=ph(t),l?r.display=l:$s(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):$r.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},sc=function(t,e,n,r,s,o){var a=t._gsap,l=s||$c(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],E=l[5],v=e.split(" "),y=parseFloat(v[0])||0,T=parseFloat(v[1])||0,C,w,L,M;n?l!==Zs&&(w=p*m-g*_)&&(L=y*(m/w)+T*(-_/w)+(_*E-m*d)/w,M=y*(-g/w)+T*(p/w)-(p*E-g*d)/w,y=L,T=M):(C=Np(t),y=C.x+(~v[0].indexOf("%")?y/100*C.width:y),T=C.y+(~(v[1]||v[0]).indexOf("%")?T/100*C.height:T)),r||r!==!1&&a.smooth?(d=y-c,E=T-u,a.xOffset=f+(d*p+E*_)-d,a.yOffset=h+(d*g+E*m)-E):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[Cn]="0px 0px",o&&(Ei(o,a,"xOrigin",c,y),Ei(o,a,"yOrigin",u,T),Ei(o,a,"xOffset",f,a.xOffset),Ei(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},Js=function(t,e){var n=t._gsap||new Ep(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Hn(t,Cn)||"0",u,f,h,p,g,_,m,d,E,v,y,T,C,w,L,M,R,q,st,O,k,G,j,B,H,et,rt,z,K,pt,ut,dt;return u=f=h=_=m=d=E=v=y=0,p=g=1,n.svg=!!(t.getCTM&&Fp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ie]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ie]!=="none"?l[ie]:"")),r.scale=r.rotate=r.translate="none"),w=$c(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),sc(t,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,w)),T=n.xOrigin||0,C=n.yOrigin||0,w!==Zs&&(q=w[0],st=w[1],O=w[2],k=w[3],u=G=w[4],f=j=w[5],w.length===6?(p=Math.sqrt(q*q+st*st),g=Math.sqrt(k*k+O*O),_=q||st?Fr(st,q)*Ki:0,E=O||k?Fr(O,k)*Ki+_:0,E&&(g*=Math.abs(Math.cos(E*Zr))),n.svg&&(u-=T-(T*q+C*O),f-=C-(T*st+C*k))):(dt=w[6],pt=w[7],rt=w[8],z=w[9],K=w[10],ut=w[11],u=w[12],f=w[13],h=w[14],L=Fr(dt,K),m=L*Ki,L&&(M=Math.cos(-L),R=Math.sin(-L),B=G*M+rt*R,H=j*M+z*R,et=dt*M+K*R,rt=G*-R+rt*M,z=j*-R+z*M,K=dt*-R+K*M,ut=pt*-R+ut*M,G=B,j=H,dt=et),L=Fr(-O,K),d=L*Ki,L&&(M=Math.cos(-L),R=Math.sin(-L),B=q*M-rt*R,H=st*M-z*R,et=O*M-K*R,ut=k*R+ut*M,q=B,st=H,O=et),L=Fr(st,q),_=L*Ki,L&&(M=Math.cos(L),R=Math.sin(L),B=q*M+st*R,H=G*M+j*R,st=st*M-q*R,j=j*M-G*R,q=B,G=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=ue(Math.sqrt(q*q+st*st+O*O)),g=ue(Math.sqrt(j*j+dt*dt)),L=Fr(G,j),E=Math.abs(L)>2e-4?L*Ki:0,y=ut?1/(ut<0?-ut:ut):0),n.svg&&(B=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!zp(Hn(t,ie)),B&&t.setAttribute("transform",B))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(p*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=ue(p),n.scaleY=ue(g),n.rotation=ue(_)+a,n.rotationX=ue(m)+a,n.rotationY=ue(d)+a,n.skewX=E+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[Cn]=oa(c)),n.xOffset=n.yOffset=0,n.force3D=rn.force3D,n.renderTransform=n.svg?Wy:Op?Hp:Vy,n.uncache=0,n},oa=function(t){return(t=t.split(" "))[0]+" "+t[1]},Sl=function(t,e,n){var r=Pe(e);return ue(parseFloat(e)+parseFloat(Ui(t,"x",n+"px",r)))+r},Vy=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Hp(t,e)},Wi="0deg",bs="0px",Xi=") ",Hp=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,E=n.target,v=n.zOrigin,y="",T=d==="auto"&&t&&t!==1||d===!0;if(v&&(f!==Wi||u!==Wi)){var C=parseFloat(u)*Zr,w=Math.sin(C),L=Math.cos(C),M;C=parseFloat(f)*Zr,M=Math.cos(C),o=Sl(E,o,w*M*-v),a=Sl(E,a,-Math.sin(C)*-v),l=Sl(E,l,L*M*-v+v)}m!==bs&&(y+="perspective("+m+Xi),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(T||o!==bs||a!==bs||l!==bs)&&(y+=l!==bs||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Xi),c!==Wi&&(y+="rotate("+c+Xi),u!==Wi&&(y+="rotateY("+u+Xi),f!==Wi&&(y+="rotateX("+f+Xi),(h!==Wi||p!==Wi)&&(y+="skew("+h+", "+p+Xi),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Xi),E.style[ie]=y||"translate(0, 0)"},Wy=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,E=n.forceCSS,v=parseFloat(o),y=parseFloat(a),T,C,w,L,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Zr,c*=Zr,T=Math.cos(l)*f,C=Math.sin(l)*f,w=Math.sin(l-c)*-h,L=Math.cos(l-c)*h,c&&(u*=Zr,M=Math.tan(c-u),M=Math.sqrt(1+M*M),w*=M,L*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),T*=M,C*=M)),T=ue(T),C=ue(C),w=ue(w),L=ue(L)):(T=f,L=h,C=w=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Ui(p,"x",o,"px"),y=Ui(p,"y",a,"px")),(g||_||m||d)&&(v=ue(v+g-(g*T+_*w)+m),y=ue(y+_-(g*C+_*L)+d)),(r||s)&&(M=p.getBBox(),v=ue(v+r/100*M.width),y=ue(y+s/100*M.height)),M="matrix("+T+","+C+","+w+","+L+","+v+","+y+")",p.setAttribute("transform",M),E&&(p.style[ie]=M)},Xy=function(t,e,n,r,s){var o=360,a=Ee(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ki:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*ch)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*ch)%o-~~(c/o)*o)),t._pt=h=new je(t._pt,e,n,r,c,Ry),h.e=u,h.u="deg",t._props.push(n),h},mh=function(t,e){for(var n in e)t[n]=e[n];return t},qy=function(t,e,n){var r=mh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,p,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ie]=e,a=Js(n,1),$s(n,ie),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ie],o[ie]=e,a=Js(n,1),o[ie]=c);for(l in ai)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=Pe(c),g=Pe(u),f=p!==g?Ui(n,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new je(t._pt,a,l,f,h-f,nc),t._pt.u=g||0,t._props.push(l));mh(a,r)};Ke("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});sa[t>1?"border"+i:i]=function(a,l,c,u,f){var h,p;if(arguments.length<4)return h=o.map(function(g){return Qn(a,g,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},o.forEach(function(g,_){return p[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,p,f)}});var Gp={name:"css",register:rc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,f,h,p,g,_,m,d,E,v,y,T,C,w,L;Yc||rc(),this.styles=this.styles||Ip(t),L=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(en[_]&&yp(_,e,n,r,t,s)))){if(p=typeof u,g=sa[_],p==="function"&&(u=u.call(n,r,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Ys(u)),g)g(this,t,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Ci.lastIndex=0,Ci.test(c)||(m=Pe(c),d=Pe(u)),d?m!==d&&(c=Ui(t,_,c,d)+d):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),L.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,t,s):l[_],Ee(c)&&~c.indexOf("random(")&&(c=Ys(c)),Pe(c+"")||(c+=rn.units[_]||Pe(Qn(t,_))||""),(c+"").charAt(1)==="="&&(c=Qn(t,_))):c=Qn(t,_),h=parseFloat(c),E=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),f=parseFloat(u),_ in zn&&(_==="autoAlpha"&&(h===1&&Qn(t,"visibility")==="hidden"&&f&&(h=0),L.push("visibility",0,a.visibility),Ei(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=zn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in ai,v){if(this.styles.save(_),y||(T=t._gsap,T.renderTransform&&!e.parseTransform||Js(t,e.parseTransform),C=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new je(this._pt,a,ie,0,1,T.renderTransform,T,0,-1),y.dep=1),_==="scale")this._pt=new je(this._pt,T,"scaleY",T.scaleY,(E?jr(T.scaleY,E+f):f)-T.scaleY||0,nc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Cn,0,a[Cn]),u=Gy(u),T.svg?sc(t,u,0,C,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==T.zOrigin&&Ei(this,T,"zOrigin",T.zOrigin,d),Ei(this,a,_,oa(c),oa(u)));continue}else if(_==="svgOrigin"){sc(t,u,1,C,0,this);continue}else if(_ in Bp){Xy(this,T,_,h,E?jr(h,E+u):u);continue}else if(_==="smoothOrigin"){Ei(this,T,"smooth",T.smooth,u);continue}else if(_==="force3D"){T[_]=u;continue}else if(_==="transform"){qy(this,u,t);continue}}else _ in a||(_=us(_)||_);if(v||(f||f===0)&&(h||h===0)&&!wy.test(u)&&_ in a)m=(c+"").substr((h+"").length),f||(f=0),d=Pe(u)||(_ in rn.units?rn.units[_]:m),m!==d&&(h=Ui(t,_,c,d)),this._pt=new je(this._pt,v?T:a,_,h,(E?jr(h,E+f):f)-h,!v&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?Py:nc),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=Cy);else if(_ in a)Hy.call(this,t,_,c,E?E+u:u);else if(_ in t)this.add(t,_,c||t[_],E?E+u:u,r,s);else if(_!=="parseTransform"){Bc(_,u);continue}v||(_ in a?L.push(_,0,a[_]):L.push(_,1,c||t[_])),o.push(_)}}w&&Cp(this)},render:function(t,e){if(e.tween._time||!Kc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Qn,aliases:zn,getSetter:function(t,e,n){var r=zn[e];return r&&r.indexOf(",")<0&&(e=r),e in ai&&e!==Cn&&(t._gsap.x||Qn(t,"x"))?n&&lh===n?e==="scale"?Iy:Uy:(lh=n||{})&&(e==="scale"?Oy:Ny):t.style&&!Oc(t.style[e])?Ly:~e.indexOf("-")?Dy:Xc(t,e)},core:{_removeProperty:$s,_getMatrix:$c}};Ze.utils.checkPrefix=us;Ze.core.getStyleSaver=Ip;(function(i,t,e,n){var r=Ke(i+","+t+","+e,function(s){ai[s]=1});Ke(t,function(s){rn.units[s]="deg",Bp[s]=1}),zn[r[13]]=i+","+t,Ke(n,function(s){var o=s.split(":");zn[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ke("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){rn.units[i]="px"});Ze.registerPlugin(Gp);var we=Ze.registerPlugin(Gp)||Ze;we.core.Tween;const Yy={class:"map"},Ky=mi("img",{src:gg,alt:""},null,-1),jy={key:0,class:"loading"},$y={key:1,class:"progress"},Zy=mi("img",{src:vg,alt:""},null,-1),Jy={__name:"App",setup(i){const t=new TE,e=new fn(75,window.innerWidth/window.innerHeight,.1,1e3);e.position.set(0,0,0);const n=new zd;n.setSize(window.innerWidth,window.innerHeight);const r=()=>{n.render(t,e),requestAnimationFrame(r)},s=Ra(),o=Ra(),a=Ra(0);jh(()=>{let u=!1;s.value.addEventListener("mousedown",()=>{u=!0}),s.value.addEventListener("mouseup",()=>{u=!1}),s.value.addEventListener("mouseout",()=>{u=!1}),s.value.addEventListener("mousemove",U=>{u&&(e.rotation.y+=U.movementX*.01,e.rotation.x+=U.movementY*.01,e.rotation.order="YXZ")}),s.value.appendChild(n.domElement),r(),o.value.style.cssText="transform:translate(100px,110px)";function f(U){let W={客厅:[100,110],厨房:[180,190],阳台:[50,50]};W[U]&&we.to(o.value,{duration:.5,x:W[U][0],y:W[U][1]})}new l("客厅",0,"./imgs/livingroom/");const h=new I(-5,0,-10),p=new xi(0,-Math.PI/2,0);new l("厨房",3,"./imgs/kitchen/",h,p);const g=new I(-1,0,-3);new c("厨房",g).onClick(()=>{we.to(e.position,{duration:1,x:h.x,y:h.y,z:h.z}),f("厨房")});const m=new I(-4,0,-6);new c("客厅",m).onClick(()=>{we.to(e.position,{duration:1,x:0,y:0,z:0}),f("客厅")});const E=new I(0,0,15);new l("阳台",8,"./imgs/balcony/",E);const v=new I(0,0,3);new c("阳台",v).onClick(()=>{we.to(e.position,{duration:1,x:E.x,y:E.y,z:E.z}),f("阳台")});const T=new I(-1,0,11);new c("客厅",T).onClick(()=>{we.to(e.position,{duration:1,x:0,y:0,z:0}),f("客厅")});const w=new I(-10,0,0),L=new xi(0,-Math.PI/2,0);new l("走廊",7,"./imgs/restroom/",w,L);const M=new I(-4.5,0,.5);new c("走廊",M).onClick(()=>{we.to(e.position,{duration:1,x:w.x,y:w.y,z:w.z}),f("走廊")});const q=new I(-5.5,0,1);new c("客厅",q).onClick(()=>{we.to(e.position,{duration:1,x:0,y:0,z:0}),f("客厅")});const O=new I(-20,0,0),k=new xi(0,-Math.PI/2,0);new l("主卧门口",20,"./imgs/bedroom/",O,k);const G=new I(-14.5,.5,1);new c("主卧门口",G).onClick(()=>{we.to(e.position,{duration:1,x:O.x,y:O.y,z:O.z}),f("主卧门口")});const B=new I(-15.5,0,2);new c("走廊",B).onClick(()=>{we.to(e.position,{duration:1,x:w.x,y:w.y,z:w.z}),f("走廊")});const et=new I(-35,0,-10);new l("主卧内",23,"./imgs/bedroom/",et);const rt=new I(-24,.5,1);new c("主卧内",rt).onClick(()=>{we.to(e.position,{duration:1,x:et.x,y:et.y,z:et.z}),f("主卧内")});const K=new I(-39,0,-11);new c("主卧门口",K).onClick(()=>{we.to(e.position,{duration:1,x:O.x,y:O.y,z:O.z}),f("主卧门口")});const ut=new I(10,0,-10);new l("儿童房",19,"./imgs/childroom/",ut);const dt=new I(-14.5,-.5,1.5);new c("儿童房",dt).onClick(()=>{we.to(e.position,{duration:1,x:ut.x,y:ut.y,z:ut.z}),f("儿童房")});const Ct=new I(7,0,-13);new c("走廊",Ct).onClick(()=>{we.to(e.position,{duration:1,x:w.x,y:w.y,z:w.z}),f("走廊")});const It=new I(-17.5,0,-10);new l("客房",11,"./imgs/childroom/",It);const fe=new I(-14.5,-.5,0);new c("客房",fe).onClick(()=>{we.to(e.position,{duration:1,x:It.x,y:It.y,z:It.z}),f("客房")});const x=new I(-19.5,0,-13);new c("走廊",x).onClick(()=>{we.to(e.position,{duration:1,x:w.x,y:w.y,z:w.z}),f("走廊")})});class l{constructor(f,h,p,g=new I(0,0,0),_=new xi(0,0,0)){this.name=f;const m=new ms(10,10,10);m.scale(1,1,-1);let d=[`${h}_l`,`${h}_r`,`${h}_u`,`${h}_d`,`${h}_b`,`${h}_f`],E=[];d.forEach(y=>{const T=new LE().load(p+y+".jpg");(y===`${h}_d`||y===`${h}_u`)&&(T.rotation=Math.PI,T.center=new Vt(.5,.5)),E.push(new Pc({map:T}))});const v=new ni(m,E);v.position.copy(g),v.rotation.copy(_),t.add(v)}}class c{constructor(f,h){this.callbacks=[];const p=document.createElement("canvas");p.width=1024,p.height=1024;const g=p.getContext("2d");g.fillStyle="rgba(100,100,100,0.7)",g.fillRect(0,256,1025,512),g.textAlign="center",g.textBaseline="middle",g.font="bold 200px Arial",g.fillStyle="white",g.fillText(f,512,512);let _=new RE(p);const m=new Hd({map:_,transparent:!0}),d=new wE(m);d.scale.set(.5,.5,.5),d.position.copy(h),this.sprite=d,t.add(d);const E=new DE;let v=new Vt;window.addEventListener("click",y=>{v.x=y.clientX/window.innerWidth*2-1,v.y=-(y.clientY/window.innerHeight)*2+1,E.setFromCamera(v,e),E.intersectObject(d).length>0&&this.callbacks.forEach(C=>{C()})})}onClick(f){this.callbacks.push(f)}}return kd.onProgress=(u,f,h)=>{a.value=new Number(f/h*100).toFixed(2)},(u,f)=>(Ho(),Ua(Un,null,[mi("div",{class:"container",ref_key:"container",ref:s},null,512),mi("div",Yy,[mi("div",{class:"tag",ref_key:"tagDiv",ref:o},null,512),Ky]),a.value!=100?(Ho(),Ua("div",jy)):Eu("",!0),a.value!=100?(Ho(),Ua("div",$y,[Zy,mi("span",null,"新房加载中："+om(a.value)+"%",1)])):Eu("",!0)],64))}};mg(Jy).mount("#app");
