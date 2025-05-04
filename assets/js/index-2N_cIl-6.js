const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ScrollDetail-Bplo3M0X.js","./vendor-Cz7S_O-B.js","./index-kI4H50ON.js","../css/ScrollDetail-C3etXz-y.css","./Gallery-CHBYlN-K.js","../css/Gallery-Bj0xLdxI.css","./Interactive-yGIwQb8r.js","../css/Interactive-Dp_8y0fR.css","./HistoricalTimeline-BJLpP68y.js","../css/HistoricalTimeline-BVmq7IQE.css","./DigitalDrawing-Bc7YA-2J.js","./userArtworkService-BWPUhC9p.js","../css/DigitalDrawing-yGNfoPbw.css","./ARFrame-CM1LFTof.js","../css/ARFrame-Cb1iWz9z.css","./InkLab-DF7CFNjT.js","../css/InkLab-D4aWouV9.css","./AIPoetry-Cyt5FUQB.js","../css/AIPoetry-gpJawHzt.css","./About-D0wwXKz8.js","../css/About-BeC2fL3A.css","./TechniqueDetail-DLt-qTGZ.js","./art-detail-info-DgScSf78.js","../css/TechniqueDetail-CO3T1wyz.css","./MasterpieceDetail-BHRE2sNd.js","../css/MasterpieceDetail-C5DJa6UM.css","./ArtistDetail-BNtZaPSR.js","./马麟-B3L2R_KN.js","../css/ArtistDetail-le7SNB-V.css","./TechniqueList-WxvfAJ4c.js","../css/TechniqueList-IVmQUpHi.css","./MasterpieceList-DcyMIBqi.js","../css/MasterpieceList-C_URdu32.css","./ArtistList-DJ5hhHao.js","../css/ArtistList-CN9o5ppW.css","./ThreeScene-CxuX8Syt.js","../css/ThreeScene-DnBBUurO.css","./NotFound-DaWvqkg9.js","../css/NotFound-ByFAEwld.css"])))=>i.map(i=>d[i]);
var Wl=Object.defineProperty;var Xl=(s,e,t)=>e in s?Wl(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Tn=(s,e,t)=>Xl(s,typeof e!="symbol"?e+"":e,t);import{d as zi,r as je,c as Xe,a as Ht,b as le,e as ns,T as zc,w as ea,F as Hn,f as oi,t as xt,n as dt,u as tr,o as He,g as Vc,h as ql,i as ta,j as Yl,p as jl,k as vn,l as Kl,m as $l,q as na,v as ia,s as Xs,x as Wc,y as fr,z as Zl,A as Jl,B as Ql}from"./vendor-Cz7S_O-B.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const xa="introductionShown";function Xc(){return localStorage.getItem(xa)==="true"}function eu(){localStorage.setItem(xa,"true")}function tu(){localStorage.removeItem(xa)}function nu(){return!Xc()}const qc={hasSeenIntroduction:Xc,markIntroductionAsSeen:eu,resetIntroductionState:tu,shouldShowIntroduction:nu},iu={key:0,class:"intro-modal-overlay"},su={class:"intro-modal"},ru={class:"intro-content"},au={class:"large-character"},ou={class:"decorative-elements"},cu={key:0,class:"ink-elements"},lu={key:1,class:"function-elements"},uu={key:2,class:"journey-elements"},hu={class:"intro-text"},du={key:0,class:"feature-buttons"},fu={class:"intro-navigation"},pu=["disabled"],mu={class:"intro-pagination"},gu=["onClick"],ms=3,_u=zi({__name:"IntroductionModal",props:{show:{type:Boolean},autoMarkAsSeen:{type:Boolean}},emits:["close"],setup(s,{emit:e}){const t=s,n=e,i=je(0),r=tr(),a=[{title:"欢迎使用数绘古意",content:"数绘古意是一个致力于中国传统书画数字化展示与互动体验的平台，让传统艺术焕发新生。",theme:"theme-1",char:"山"},{title:"丰富的功能体验",content:"浏览精美卷轴、体验数字临摹、虚拟装裱、AI题诗创作等多种互动功能，感受传统与现代的完美融合。",theme:"theme-2",char:"艺"},{title:"开始您的艺术之旅",content:"现在就开始探索中国传统书画的魅力，让我们与您一同领略千年艺术的风采。",theme:"theme-3",char:"境"}],o=()=>{i.value<ms-1?i.value++:l()},c=()=>{i.value>0&&i.value--},l=()=>{t.autoMarkAsSeen!==!1&&qc.markIntroductionAsSeen(),n("close")},u=d=>{d>=0&&d<ms&&(i.value=d)},h=d=>{l(),r.push({name:d})};return(d,f)=>d.show?(He(),Xe("div",iu,[le("div",su,[le("button",{class:"close-button",onClick:l},"×"),le("div",ru,[ns(zc,{name:"slide",mode:"out-in"},{default:ea(()=>[(He(),Xe("div",{key:i.value,class:"intro-page"},[le("div",{class:dt(["intro-visual-container",a[i.value].theme])},[le("div",au,xt(a[i.value].char),1),le("div",ou,[i.value===0?(He(),Xe("div",cu,f[4]||(f[4]=[le("div",{class:"ink-stroke ink-stroke-1"},null,-1),le("div",{class:"ink-stroke ink-stroke-2"},null,-1),le("div",{class:"ink-drop"},null,-1)]))):i.value===1?(He(),Xe("div",lu,f[5]||(f[5]=[le("span",{class:"function-icon"},"📜",-1),le("span",{class:"function-icon"},"🖌️",-1),le("span",{class:"function-icon"},"🖼️",-1),le("span",{class:"function-icon"},"📝",-1)]))):(He(),Xe("div",uu,f[6]||(f[6]=[le("div",{class:"journey-circle"},null,-1),le("div",{class:"journey-line"},null,-1)])))])],2),le("div",hu,[le("h2",null,xt(a[i.value].title),1),le("p",null,xt(a[i.value].content),1)]),i.value===1?(He(),Xe("div",du,[le("button",{class:"feature-button",onClick:f[0]||(f[0]=g=>h("Gallery"))},"卷轴画廊"),le("button",{class:"feature-button",onClick:f[1]||(f[1]=g=>h("DigitalDrawing"))},"数字临摹"),le("button",{class:"feature-button",onClick:f[2]||(f[2]=g=>h("ARFrame"))},"虚拟装裱"),le("button",{class:"feature-button",onClick:f[3]||(f[3]=g=>h("AIPoetry"))},"AI题诗创作")])):Ht("",!0)]))]),_:1})]),le("div",fu,[le("button",{class:"nav-button",onClick:c,disabled:i.value===0},"上一页",8,pu),le("div",mu,[(He(),Xe(Hn,null,oi(ms,g=>le("span",{key:g,class:dt(["pagination-dot",{active:i.value===g-1}]),onClick:_=>u(g-1)},null,10,gu)),64))]),le("button",{class:"nav-button",onClick:o},xt(i.value===ms-1?"开始探索":"下一页"),1)])])])):Ht("",!0)}}),ls=(s,e)=>{const t=s.__vccOpts||s;for(const[n,i]of e)t[n]=i;return t},vu=ls(_u,[["__scopeId","data-v-6f2c50e6"]]),xu=zi({__name:"App",setup(s){const e=je(!1),t=je(!0);Vc(()=>{qc.shouldShowIntroduction()&&(e.value=!0,t.value=!0)});const n=()=>{e.value=!1};return jl("openIntroduction",()=>{e.value=!0,t.value=!1}),(r,a)=>{const o=ql("router-view");return He(),Xe(Hn,null,[ns(o,null,{default:ea(({Component:c})=>[ns(zc,{name:"fade",mode:"out-in"},{default:ea(()=>[(He(),ta(Yl(c)))]),_:2},1024)]),_:1}),ns(vu,{show:e.value,autoMarkAsSeen:t.value,onClose:n},null,8,["show","autoMarkAsSeen"])],64)}}}),yu="modulepreload",Mu=function(s,e){return new URL(s,e).href},za={},gt=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=Mu(l,n),l in za)return;za[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const _=a[g];if(_.href===l&&(!u||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":yu,u||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ya="162",$0={ROTATE:0,DOLLY:1,PAN:2},Z0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Su=0,Va=1,Eu=2,Yc=1,Tu=2,gn=3,Mn=0,Ot=1,nn=2,Fn=0,si=1,Wa=2,Xa=3,qa=4,Au=5,ei=100,bu=101,wu=102,Ya=103,ja=104,Ru=200,Cu=201,Lu=202,Pu=203,sa=204,ra=205,Iu=206,Du=207,Uu=208,Nu=209,Ou=210,Fu=211,Bu=212,ku=213,Hu=214,Gu=0,zu=1,Vu=2,qs=3,Wu=4,Xu=5,qu=6,Yu=7,jc=0,ju=1,Ku=2,Bn=0,$u=1,Zu=2,Ju=3,Qu=4,eh=5,th=6,nh=7,Ka="attached",ih="detached",Kc=300,Di=301,Ui=302,aa=303,oa=304,nr=306,Ni=1e3,qt=1001,Ys=1002,vt=1003,ca=1004,Ri=1005,Lt=1006,Vs=1007,xn=1008,kn=1009,sh=1010,rh=1011,Ma=1012,$c=1013,Un=1014,Zt=1015,as=1016,Zc=1017,Jc=1018,ri=1020,ah=1021,Yt=1023,oh=1024,ch=1025,ai=1026,Oi=1027,Qc=1028,el=1029,lh=1030,tl=1031,nl=1033,pr=33776,mr=33777,gr=33778,_r=33779,$a=35840,Za=35841,Ja=35842,Qa=35843,il=36196,eo=37492,to=37496,no=37808,io=37809,so=37810,ro=37811,ao=37812,oo=37813,co=37814,lo=37815,uo=37816,ho=37817,fo=37818,po=37819,mo=37820,go=37821,vr=36492,_o=36494,vo=36495,uh=36283,xo=36284,yo=36285,Mo=36286,os=2300,Fi=2301,xr=2302,So=2400,Eo=2401,To=2402,hh=2500,dh=0,sl=1,la=2,fh=3200,ph=3201,rl=0,mh=1,Dn="",At="srgb",St="srgb-linear",Sa="display-p3",ir="display-p3-linear",js="linear",nt="srgb",Ks="rec709",$s="p3",hi=7680,Ao=519,gh=512,_h=513,vh=514,al=515,xh=516,yh=517,Mh=518,Sh=519,ua=35044,bo="300 es",ha=1035,yn=2e3,Zs=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Rt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wo=1234567;const is=Math.PI/180,Bi=180/Math.PI;function Qt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Rt[s&255]+Rt[s>>8&255]+Rt[s>>16&255]+Rt[s>>24&255]+"-"+Rt[e&255]+Rt[e>>8&255]+"-"+Rt[e>>16&15|64]+Rt[e>>24&255]+"-"+Rt[t&63|128]+Rt[t>>8&255]+"-"+Rt[t>>16&255]+Rt[t>>24&255]+Rt[n&255]+Rt[n>>8&255]+Rt[n>>16&255]+Rt[n>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function Ea(s,e){return(s%e+e)%e}function Eh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Th(s,e,t){return s!==e?(t-s)/(e-s):0}function ss(s,e,t){return(1-t)*s+t*e}function Ah(s,e,t,n){return ss(s,e,1-Math.exp(-t*n))}function bh(s,e=1){return e-Math.abs(Ea(s,e*2)-e)}function wh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Rh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Ch(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Lh(s,e){return s+Math.random()*(e-s)}function Ph(s){return s*(.5-Math.random())}function Ih(s){s!==void 0&&(wo=s);let e=wo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dh(s){return s*is}function Uh(s){return s*Bi}function da(s){return(s&s-1)===0&&s!==0}function Nh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Js(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Oh(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*d,o*l);break;case"YZY":s.set(c*d,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*d,o*u,o*l);break;case"XZX":s.set(o*u,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*u,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Jt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ze(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Fh={DEG2RAD:is,RAD2DEG:Bi,generateUUID:Qt,clamp:bt,euclideanModulo:Ea,mapLinear:Eh,inverseLerp:Th,lerp:ss,damp:Ah,pingpong:bh,smoothstep:wh,smootherstep:Rh,randInt:Ch,randFloat:Lh,randFloatSpread:Ph,seededRandom:Ih,degToRad:Dh,radToDeg:Uh,isPowerOfTwo:da,ceilPowerOfTwo:Nh,floorPowerOfTwo:Js,setQuaternionFromProperEuler:Oh,normalize:Ze,denormalize:Jt};class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,t,n,i,r,a,o,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=i[0],p=i[3],m=i[6],S=i[1],v=i[4],E=i[7],C=i[2],A=i[5],w=i[8];return r[0]=a*_+o*S+c*C,r[3]=a*p+o*v+c*A,r[6]=a*m+o*E+c*w,r[1]=l*_+u*S+h*C,r[4]=l*p+u*v+h*A,r[7]=l*m+u*E+h*w,r[2]=d*_+f*S+g*C,r[5]=d*p+f*v+g*A,r[8]=d*m+f*E+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(yr.makeScale(e,t)),this}rotate(e){return this.premultiply(yr.makeRotation(-e)),this}translate(e,t){return this.premultiply(yr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yr=new Oe;function ol(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function cs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bh(){const s=cs("canvas");return s.style.display="block",s}const Ro={};function cl(s){s in Ro||(Ro[s]=!0,console.warn(s))}const Co=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Lo=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gs={[St]:{transfer:js,primaries:Ks,toReference:s=>s,fromReference:s=>s},[At]:{transfer:nt,primaries:Ks,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ir]:{transfer:js,primaries:$s,toReference:s=>s.applyMatrix3(Lo),fromReference:s=>s.applyMatrix3(Co)},[Sa]:{transfer:nt,primaries:$s,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Lo),fromReference:s=>s.applyMatrix3(Co).convertLinearToSRGB()}},kh=new Set([St,ir]),Ke={enabled:!0,_workingColorSpace:St,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!kh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=gs[e].toReference,i=gs[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return gs[s].primaries},getTransfer:function(s){return s===Dn?js:gs[s].transfer}};function Pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Mr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let di;class ll{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{di===void 0&&(di=cs("canvas")),di.width=e.width,di.height=e.height;const n=di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hh=0;class ul{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Qt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Sr(i[a].image)):r.push(Sr(i[a]))}else r=Sr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Sr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ll.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gh=0;class yt extends Vi{constructor(e=yt.DEFAULT_IMAGE,t=yt.DEFAULT_MAPPING,n=qt,i=qt,r=Lt,a=xn,o=Yt,c=kn,l=yt.DEFAULT_ANISOTROPY,u=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Qt(),this.name="",this.source=new ul(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case Ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case Ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yt.DEFAULT_IMAGE=null;yt.DEFAULT_MAPPING=Kc;yt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],p=c[6],m=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,E=(f+1)/2,C=(m+1)/2,A=(u+d)/4,w=(h+_)/4,N=(g+p)/4;return v>E&&v>C?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=A/n,r=w/n):E>C?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=A/i,r=N/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=w/r,i=N/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-_)/S,this.z=(d-u)/S,this.w=Math.acos((l+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zh extends Vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new yt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ul(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends zh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class hl extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vh extends yt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vt,this.minFilter=vt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let p=1-o;const m=c*d+l*f+u*g+h*_,S=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const C=Math.sqrt(v),A=Math.atan2(C,m*S);p=Math.sin(p*A)/C,o=Math.sin(o*A)/C}const E=o*S;if(c=c*p+d*E,l=l*p+f*E,u=u*p+g*E,h=h*p+_*E,p===1-o){const C=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=C,l*=C,u*=C,h*=C}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Po.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Po.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Er.copy(this).projectOnVector(e),this.sub(Er)}reflect(e){return this.sub(Er.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Er=new L,Po=new zn;class Sn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(jt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(jt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=jt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jt):jt.fromBufferAttribute(r,a),jt.applyMatrix4(e.matrixWorld),this.expandByPoint(jt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_s.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_s.copy(n.boundingBox)),_s.applyMatrix4(e.matrixWorld),this.union(_s)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jt),jt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),vs.subVectors(this.max,ji),fi.subVectors(e.a,ji),pi.subVectors(e.b,ji),mi.subVectors(e.c,ji),An.subVectors(pi,fi),bn.subVectors(mi,pi),Xn.subVectors(fi,mi);let t=[0,-An.z,An.y,0,-bn.z,bn.y,0,-Xn.z,Xn.y,An.z,0,-An.x,bn.z,0,-bn.x,Xn.z,0,-Xn.x,-An.y,An.x,0,-bn.y,bn.x,0,-Xn.y,Xn.x,0];return!Tr(t,fi,pi,mi,vs)||(t=[1,0,0,0,1,0,0,0,1],!Tr(t,fi,pi,mi,vs))?!1:(xs.crossVectors(An,bn),t=[xs.x,xs.y,xs.z],Tr(t,fi,pi,mi,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new L,new L,new L,new L,new L,new L,new L,new L],jt=new L,_s=new Sn,fi=new L,pi=new L,mi=new L,An=new L,bn=new L,Xn=new L,ji=new L,vs=new L,xs=new L,qn=new L;function Tr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){qn.fromArray(s,r);const o=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),c=e.dot(qn),l=t.dot(qn),u=n.dot(qn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Wh=new Sn,Ki=new L,Ar=new L;class on{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ki.subVectors(e,this.center);const t=Ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ki,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ar.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ki.copy(e.center).add(Ar)),this.expandByPoint(Ki.copy(e.center).sub(Ar))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new L,br=new L,ys=new L,wn=new L,wr=new L,Ms=new L,Rr=new L;class us{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){br.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(br);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ys),o=wn.dot(this.direction),c=-wn.dot(ys),l=wn.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(br).addScaledVector(ys,d),f}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const n=hn.dot(this.direction),i=hn.dot(hn)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,n,i,r){wr.subVectors(t,e),Ms.subVectors(n,e),Rr.crossVectors(wr,Ms);let a=this.direction.dot(Rr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);const c=o*this.direction.dot(Ms.crossVectors(wn,Ms));if(c<0)return null;const l=o*this.direction.dot(wr.cross(wn));if(l<0||c+l>a)return null;const u=-o*wn.dot(Rr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(e,t,n,i,r,a,o,c,l,u,h,d,f,g,_,p){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,d,f,g,_,p)}set(e,t,n,i,r,a,o,c,l,u,h,d,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gi.setFromMatrixColumn(e,0).length(),r=1/gi.setFromMatrixColumn(e,1).length(),a=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xh,e,qh)}lookAt(e,t,n){const i=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Rn.crossVectors(n,Bt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Rn.crossVectors(n,Bt)),Rn.normalize(),Ss.crossVectors(Bt,Rn),i[0]=Rn.x,i[4]=Ss.x,i[8]=Bt.x,i[1]=Rn.y,i[5]=Ss.y,i[9]=Bt.y,i[2]=Rn.z,i[6]=Ss.z,i[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],S=n[3],v=n[7],E=n[11],C=n[15],A=i[0],w=i[4],N=i[8],q=i[12],y=i[1],R=i[5],$=i[9],Z=i[13],b=i[2],B=i[6],D=i[10],F=i[14],W=i[3],U=i[7],j=i[11],Y=i[15];return r[0]=a*A+o*y+c*b+l*W,r[4]=a*w+o*R+c*B+l*U,r[8]=a*N+o*$+c*D+l*j,r[12]=a*q+o*Z+c*F+l*Y,r[1]=u*A+h*y+d*b+f*W,r[5]=u*w+h*R+d*B+f*U,r[9]=u*N+h*$+d*D+f*j,r[13]=u*q+h*Z+d*F+f*Y,r[2]=g*A+_*y+p*b+m*W,r[6]=g*w+_*R+p*B+m*U,r[10]=g*N+_*$+p*D+m*j,r[14]=g*q+_*Z+p*F+m*Y,r[3]=S*A+v*y+E*b+C*W,r[7]=S*w+v*R+E*B+C*U,r[11]=S*N+v*$+E*D+C*j,r[15]=S*q+v*Z+E*F+C*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+r*c*h-i*l*h-r*o*d+n*l*d+i*o*f-n*c*f)+_*(+t*c*f-t*l*d+r*a*d-i*a*f+i*l*u-r*c*u)+p*(+t*l*h-t*o*f-r*a*h+n*a*f+r*o*u-n*l*u)+m*(-i*o*u-t*c*h+t*o*d+i*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],S=h*p*l-_*d*l+_*c*f-o*p*f-h*c*m+o*d*m,v=g*d*l-u*p*l-g*c*f+a*p*f+u*c*m-a*d*m,E=u*_*l-g*h*l+g*o*f-a*_*f-u*o*m+a*h*m,C=g*h*c-u*_*c-g*o*d+a*_*d+u*o*p-a*h*p,A=t*S+n*v+i*E+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=S*w,e[1]=(_*d*r-h*p*r-_*i*f+n*p*f+h*i*m-n*d*m)*w,e[2]=(o*p*r-_*c*r+_*i*l-n*p*l-o*i*m+n*c*m)*w,e[3]=(h*c*r-o*d*r-h*i*l+n*d*l+o*i*f-n*c*f)*w,e[4]=v*w,e[5]=(u*p*r-g*d*r+g*i*f-t*p*f-u*i*m+t*d*m)*w,e[6]=(g*c*r-a*p*r-g*i*l+t*p*l+a*i*m-t*c*m)*w,e[7]=(a*d*r-u*c*r+u*i*l-t*d*l-a*i*f+t*c*f)*w,e[8]=E*w,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*m-t*h*m)*w,e[10]=(a*_*r-g*o*r+g*n*l-t*_*l-a*n*m+t*o*m)*w,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*f-t*o*f)*w,e[12]=C*w,e[13]=(u*_*i-g*h*i+g*n*d-t*_*d-u*n*p+t*h*p)*w,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*p-t*o*p)*w,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,g=r*h,_=a*u,p=a*h,m=o*h,S=c*l,v=c*u,E=c*h,C=n.x,A=n.y,w=n.z;return i[0]=(1-(_+m))*C,i[1]=(f+E)*C,i[2]=(g-v)*C,i[3]=0,i[4]=(f-E)*A,i[5]=(1-(d+m))*A,i[6]=(p+S)*A,i[7]=0,i[8]=(g+v)*w,i[9]=(p-S)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=gi.set(i[0],i[1],i[2]).length();const a=gi.set(i[4],i[5],i[6]).length(),o=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Kt.copy(this);const l=1/r,u=1/a,h=1/o;return Kt.elements[0]*=l,Kt.elements[1]*=l,Kt.elements[2]*=l,Kt.elements[4]*=u,Kt.elements[5]*=u,Kt.elements[6]*=u,Kt.elements[8]*=h,Kt.elements[9]*=h,Kt.elements[10]*=h,t.setFromRotationMatrix(Kt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=yn){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(o===yn)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Zs)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=yn){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-r),d=(t+e)*l,f=(n+i)*u;let g,_;if(o===yn)g=(a+r)*h,_=-2*h;else if(o===Zs)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gi=new L,Kt=new Pe,Xh=new L(0,0,0),qh=new L(1,1,1),Rn=new L,Ss=new L,Bt=new L,Io=new Pe,Do=new zn;class an{constructor(e=0,t=0,n=0,i=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Io,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Do.setFromEuler(this),this.setFromQuaternion(Do,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class Ta{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yh=0;const Uo=new L,_i=new zn,dn=new Pe,Es=new L,$i=new L,jh=new L,Kh=new zn,No=new L(1,0,0),Oo=new L(0,1,0),Fo=new L(0,0,1),$h={type:"added"},Zh={type:"removed"},Cr={type:"childadded",child:null},Lr={type:"childremoved",child:null};class at extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=at.DEFAULT_UP.clone();const e=new L,t=new an,n=new zn,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Oe}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=at.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(No,e)}rotateY(e){return this.rotateOnAxis(Oo,e)}rotateZ(e){return this.rotateOnAxis(Fo,e)}translateOnAxis(e,t){return Uo.copy(e).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(No,e)}translateY(e){return this.translateOnAxis(Oo,e)}translateZ(e){return this.translateOnAxis(Fo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Es.copy(e):Es.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt($i,Es,this.up):dn.lookAt(Es,$i,this.up),this.quaternion.setFromRotationMatrix(dn),i&&(dn.extractRotation(i.matrixWorld),_i.setFromRotationMatrix(dn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($h),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zh),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,e,jh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Kh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}at.DEFAULT_UP=new L(0,1,0);at.DEFAULT_MATRIX_AUTO_UPDATE=!0;at.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new L,fn=new L,Pr=new L,pn=new L,vi=new L,xi=new L,Bo=new L,Ir=new L,Dr=new L,Ur=new L;class sn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),$t.subVectors(e,t),i.cross($t);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){$t.subVectors(i,t),fn.subVectors(n,t),Pr.subVectors(e,t);const a=$t.dot($t),o=$t.dot(fn),c=$t.dot(Pr),l=fn.dot(fn),u=fn.dot(Pr),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pn.x),c.addScaledVector(a,pn.y),c.addScaledVector(o,pn.z),c)}static isFrontFacing(e,t,n,i){return $t.subVectors(n,t),fn.subVectors(e,t),$t.cross(fn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),$t.cross(fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;vi.subVectors(i,n),xi.subVectors(r,n),Ir.subVectors(e,n);const c=vi.dot(Ir),l=xi.dot(Ir);if(c<=0&&l<=0)return t.copy(n);Dr.subVectors(e,i);const u=vi.dot(Dr),h=xi.dot(Dr);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(vi,a);Ur.subVectors(e,r);const f=vi.dot(Ur),g=xi.dot(Ur);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(xi,o);const p=u*g-f*h;if(p<=0&&h-u>=0&&f-g>=0)return Bo.subVectors(r,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Bo,o);const m=1/(p+_+d);return a=_*m,o=d*m,t.copy(n).addScaledVector(vi,a).addScaledVector(xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function Nr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Ea(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Nr(a,r,e+1/3),this.g=Nr(a,r,e),this.b=Nr(a,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){const n=dl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return Ke.fromWorkingColorSpace(Ct.copy(this),e),Math.round(bt(Ct.r*255,0,255))*65536+Math.round(bt(Ct.g*255,0,255))*256+Math.round(bt(Ct.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Ct.copy(this),t);const n=Ct.r,i=Ct.g,r=Ct.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=At){Ke.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,i=Ct.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(Ts);const n=ss(Cn.h,Ts.h,t),i=ss(Cn.s,Ts.s,t),r=ss(Cn.l,Ts.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Te;Te.NAMES=dl;let Jh=0;class rn extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Qt(),this.name="",this.type="Material",this.blending=si,this.side=Mn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=ra,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ao,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==Mn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sa&&(n.blendSrc=this.blendSrc),this.blendDst!==ra&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ao&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ni extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new L,As=new Le;class Mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ua,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return cl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)As.fromBufferAttribute(this,t),As.applyMatrix3(e),this.setXY(t,As.x,As.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Jt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Jt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Jt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Jt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ua&&(e.usage=this.usage),e}}class fl extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pl extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Qh=0;const Wt=new Pe,Or=new at,yi=new L,kt=new Sn,Zi=new Sn,_t=new L;class Pt extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Qt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ol(e)?pl:fl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Or.lookAt(e),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(kt.min,Zi.min),kt.expandByPoint(_t),_t.addVectors(kt.max,Zi.max),kt.expandByPoint(_t)):(kt.expandByPoint(Zi.min),kt.expandByPoint(Zi.max))}kt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)_t.fromBufferAttribute(o,l),c&&(yi.fromBufferAttribute(e,l),_t.add(yi)),i=Math.max(i,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new L,c[N]=new L;const l=new L,u=new L,h=new L,d=new Le,f=new Le,g=new Le,_=new L,p=new L;function m(N,q,y){l.fromBufferAttribute(n,N),u.fromBufferAttribute(n,q),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,q),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(R),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),o[N].add(_),o[q].add(_),o[y].add(_),c[N].add(p),c[q].add(p),c[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let N=0,q=S.length;N<q;++N){const y=S[N],R=y.start,$=y.count;for(let Z=R,b=R+$;Z<b;Z+=3)m(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const v=new L,E=new L,C=new L,A=new L;function w(N){C.fromBufferAttribute(i,N),A.copy(C);const q=o[N];v.copy(q),v.sub(C.multiplyScalar(C.dot(q))).normalize(),E.crossVectors(A,q);const R=E.dot(c[N])<0?-1:1;a.setXYZW(N,v.x,v.y,v.z,R)}for(let N=0,q=S.length;N<q;++N){const y=S[N],R=y.start,$=y.count;for(let Z=R,b=R+$;Z<b;Z+=3)w(e.getX(Z+0)),w(e.getX(Z+1)),w(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,a=new L,o=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let m=0;m<u;m++)d[g++]=l[f++]}return new Mt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ko=new Pe,Yn=new us,bs=new on,Ho=new L,Mi=new L,Si=new L,Ei=new L,Fr=new L,ws=new L,Rs=new Le,Cs=new Le,Ls=new Le,Go=new L,zo=new L,Vo=new L,Ps=new L,Is=new L;class Gt extends at{constructor(e=new Pt,t=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ws.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Fr.fromBufferAttribute(h,e),a?ws.addScaledVector(Fr,u):ws.addScaledVector(Fr.sub(t),u))}t.add(ws)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),bs.copy(n.boundingSphere),bs.applyMatrix4(r),Yn.copy(e.ray).recast(e.near),!(bs.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(bs,Ho)===null||Yn.origin.distanceToSquared(Ho)>(e.far-e.near)**2))&&(ko.copy(r).invert(),Yn.copy(e.ray).applyMatrix4(ko),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),v=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let E=S,C=v;E<C;E+=3){const A=o.getX(E),w=o.getX(E+1),N=o.getX(E+2);i=Ds(this,m,e,n,l,u,h,A,w,N),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=o.getX(p),v=o.getX(p+1),E=o.getX(p+2);i=Ds(this,a,e,n,l,u,h,S,v,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),v=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let E=S,C=v;E<C;E+=3){const A=E,w=E+1,N=E+2;i=Ds(this,m,e,n,l,u,h,A,w,N),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const S=p,v=p+1,E=p+2;i=Ds(this,a,e,n,l,u,h,S,v,E),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function ed(s,e,t,n,i,r,a,o){let c;if(e.side===Ot?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Mn,o),c===null)return null;Is.copy(o),Is.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Is);return l<t.near||l>t.far?null:{distance:l,point:Is.clone(),object:s}}function Ds(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,Mi),s.getVertexPosition(c,Si),s.getVertexPosition(l,Ei);const u=ed(s,e,t,n,Mi,Si,Ei,Ps);if(u){i&&(Rs.fromBufferAttribute(i,o),Cs.fromBufferAttribute(i,c),Ls.fromBufferAttribute(i,l),u.uv=sn.getInterpolation(Ps,Mi,Si,Ei,Rs,Cs,Ls,new Le)),r&&(Rs.fromBufferAttribute(r,o),Cs.fromBufferAttribute(r,c),Ls.fromBufferAttribute(r,l),u.uv1=sn.getInterpolation(Ps,Mi,Si,Ei,Rs,Cs,Ls,new Le)),a&&(Go.fromBufferAttribute(a,o),zo.fromBufferAttribute(a,c),Vo.fromBufferAttribute(a,l),u.normal=sn.getInterpolation(Ps,Mi,Si,Ei,Go,zo,Vo,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new L,materialIndex:0};sn.getNormal(Mi,Si,Ei,h.normal),u.face=h}return u}class hs extends Pt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(h,2));function g(_,p,m,S,v,E,C,A,w,N,q){const y=E/w,R=C/N,$=E/2,Z=C/2,b=A/2,B=w+1,D=N+1;let F=0,W=0;const U=new L;for(let j=0;j<D;j++){const Y=j*R-Z;for(let J=0;J<B;J++){const Se=J*y-$;U[_]=Se*S,U[p]=Y*v,U[m]=b,l.push(U.x,U.y,U.z),U[_]=0,U[p]=0,U[m]=A>0?1:-1,u.push(U.x,U.y,U.z),h.push(J/w),h.push(1-j/N),F+=1}}for(let j=0;j<N;j++)for(let Y=0;Y<w;Y++){const J=d+Y+B*j,Se=d+Y+B*(j+1),V=d+(Y+1)+B*(j+1),ee=d+(Y+1)+B*j;c.push(J,Se,ee),c.push(Se,V,ee),W+=6}o.addGroup(f,W,q),f+=W,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ut(s){const e={};for(let t=0;t<s.length;t++){const n=ki(s[t]);for(const i in n)e[i]=n[i]}return e}function td(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ml(s){return s.getRenderTarget()===null?s.outputColorSpace:Ke.workingColorSpace}const nd={clone:ki,merge:Ut};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gl extends at{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new L,Wo=new Le,Xo=new Le;class Nt extends gl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(is*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(is*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,Wo,Xo),t.subVectors(Xo,Wo)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(is*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,Ai=1;class rd extends at{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Nt(Ti,Ai,e,t);i.layers=this.layers,this.add(i);const r=new Nt(Ti,Ai,e,t);r.layers=this.layers,this.add(r);const a=new Nt(Ti,Ai,e,t);a.layers=this.layers,this.add(a);const o=new Nt(Ti,Ai,e,t);o.layers=this.layers,this.add(o);const c=new Nt(Ti,Ai,e,t);c.layers=this.layers,this.add(c);const l=new Nt(Ti,Ai,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _l extends yt{constructor(e,t,n,i,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Di,super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ad extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _l(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hs(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Fn});r.uniforms.tEquirect.value=t;const a=new Gt(i,r),o=t.minFilter;return t.minFilter===xn&&(t.minFilter=Lt),new rd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Br=new L,od=new L,cd=new Oe;class Jn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Br.subVectors(n,t).cross(od.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Br),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cd.getNormalMatrix(e),i=this.coplanarPoint(Br).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new on,Us=new L;class Aa{constructor(e=new Jn,t=new Jn,n=new Jn,i=new Jn,r=new Jn,a=new Jn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],f=i[8],g=i[9],_=i[10],p=i[11],m=i[12],S=i[13],v=i[14],E=i[15];if(n[0].setComponents(c-r,d-l,p-f,E-m).normalize(),n[1].setComponents(c+r,d+l,p+f,E+m).normalize(),n[2].setComponents(c+a,d+u,p+g,E+S).normalize(),n[3].setComponents(c-a,d-u,p-g,E-S).normalize(),n[4].setComponents(c-o,d-h,p-_,E-v).normalize(),t===yn)n[5].setComponents(c+o,d+h,p+_,E+v).normalize();else if(t===Zs)n[5].setComponents(o,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(e){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Us.x=i.normal.x>0?e.max.x:e.min.x,Us.y=i.normal.y>0?e.max.y:e.min.y,Us.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function vl(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function ld(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,f=h.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,h,d),l.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,u,h){const d=u.array,f=u._updateRange,g=u.updateRanges;if(s.bindBuffer(h,l),f.count===-1&&g.length===0&&s.bufferSubData(h,0,d),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?s.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d,m.start,m.count):s.bufferSubData(h,m.start*d.BYTES_PER_ELEMENT,d.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}f.count!==-1&&(t?s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(h,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:a,remove:o,update:c}}class sr extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const S=m*d-a;for(let v=0;v<l;v++){const E=v*h-r;g.push(E,-S,0),_.push(0,0,1),p.push(v/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){const v=S+l*m,E=S+l*(m+1),C=S+1+l*(m+1),A=S+1+l*m;f.push(v,E,A),f.push(E,C,A)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(_,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.widthSegments,e.heightSegments)}}var ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hd=`#ifdef USE_ALPHAHASH
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
#endif`,dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
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
#endif`,_d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Md=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ed=`#ifdef USE_IRIDESCENCE
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
#endif`,Td=`#ifdef USE_BUMPMAP
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
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Dd=`#define PI 3.141592653589793
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
} // validated`,Ud=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nd=`vec3 transformedNormal = objectNormal;
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
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,zd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zd=`#ifdef USE_GRADIENTMAP
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
}`,Jd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nf=`uniform bool receiveShadow;
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
#endif`,sf=`#ifdef USE_ENVMAP
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
#endif`,rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,of=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lf=`PhysicalMaterial material;
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
#endif`,uf=`struct PhysicalMaterial {
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
}`,hf=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,df=`#if defined( RE_IndirectDiffuse )
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
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mf=`#if defined( USE_POINTS_UV )
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
#endif`,Sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Af=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bf=`#ifdef USE_MORPHNORMALS
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
#endif`,wf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Rf=`#ifdef USE_MORPHTARGETS
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
#endif`,Cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uf=`#ifdef USE_NORMALMAP
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
#endif`,Nf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Of=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$f=`float getShadowMask() {
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
}`,Zf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jf=`#ifdef USE_SKINNING
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
#endif`,Qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,tp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sp=`#ifndef saturate
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rp=`#ifdef USE_TRANSMISSION
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
#endif`,ap=`#ifdef USE_TRANSMISSION
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
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dp=`uniform sampler2D t2D;
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
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`#include <common>
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
}`,vp=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,xp=`#define DISTANCE
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
}`,yp=`#define DISTANCE
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`uniform float scale;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,bp=`uniform vec3 diffuse;
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
}`,wp=`#define LAMBERT
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
}`,Rp=`#define LAMBERT
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
}`,Cp=`#define MATCAP
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
}`,Lp=`#define MATCAP
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
}`,Pp=`#define NORMAL
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
}`,Ip=`#define NORMAL
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
}`,Dp=`#define PHONG
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
}`,Up=`#define PHONG
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
}`,Np=`#define STANDARD
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
}`,Op=`#define STANDARD
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
}`,Fp=`#define TOON
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
}`,Bp=`#define TOON
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
}`,kp=`uniform float size;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Gp=`#include <common>
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
}`,zp=`uniform vec3 color;
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
}`,Vp=`uniform float rotation;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Ne={alphahash_fragment:ud,alphahash_pars_fragment:hd,alphamap_fragment:dd,alphamap_pars_fragment:fd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:_d,batching_pars_vertex:vd,batching_vertex:xd,begin_vertex:yd,beginnormal_vertex:Md,bsdfs:Sd,iridescence_fragment:Ed,bumpmap_pars_fragment:Td,clipping_planes_fragment:Ad,clipping_planes_pars_fragment:bd,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Rd,color_fragment:Cd,color_pars_fragment:Ld,color_pars_vertex:Pd,color_vertex:Id,common:Dd,cube_uv_reflection_fragment:Ud,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Od,displacementmap_vertex:Fd,emissivemap_fragment:Bd,emissivemap_pars_fragment:kd,colorspace_fragment:Hd,colorspace_pars_fragment:Gd,envmap_fragment:zd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:sf,envmap_vertex:qd,fog_vertex:Yd,fog_pars_vertex:jd,fog_fragment:Kd,fog_pars_fragment:$d,gradientmap_pars_fragment:Zd,lightmap_fragment:Jd,lightmap_pars_fragment:Qd,lights_lambert_fragment:ef,lights_lambert_pars_fragment:tf,lights_pars_begin:nf,lights_toon_fragment:rf,lights_toon_pars_fragment:af,lights_phong_fragment:of,lights_phong_pars_fragment:cf,lights_physical_fragment:lf,lights_physical_pars_fragment:uf,lights_fragment_begin:hf,lights_fragment_maps:df,lights_fragment_end:ff,logdepthbuf_fragment:pf,logdepthbuf_pars_fragment:mf,logdepthbuf_pars_vertex:gf,logdepthbuf_vertex:_f,map_fragment:vf,map_pars_fragment:xf,map_particle_fragment:yf,map_particle_pars_fragment:Mf,metalnessmap_fragment:Sf,metalnessmap_pars_fragment:Ef,morphinstance_vertex:Tf,morphcolor_vertex:Af,morphnormal_vertex:bf,morphtarget_pars_vertex:wf,morphtarget_vertex:Rf,normal_fragment_begin:Cf,normal_fragment_maps:Lf,normal_pars_fragment:Pf,normal_pars_vertex:If,normal_vertex:Df,normalmap_pars_fragment:Uf,clearcoat_normal_fragment_begin:Nf,clearcoat_normal_fragment_maps:Of,clearcoat_pars_fragment:Ff,iridescence_pars_fragment:Bf,opaque_fragment:kf,packing:Hf,premultiplied_alpha_fragment:Gf,project_vertex:zf,dithering_fragment:Vf,dithering_pars_fragment:Wf,roughnessmap_fragment:Xf,roughnessmap_pars_fragment:qf,shadowmap_pars_fragment:Yf,shadowmap_pars_vertex:jf,shadowmap_vertex:Kf,shadowmask_pars_fragment:$f,skinbase_vertex:Zf,skinning_pars_vertex:Jf,skinning_vertex:Qf,skinnormal_vertex:ep,specularmap_fragment:tp,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:sp,transmission_fragment:rp,transmission_pars_fragment:ap,uv_pars_fragment:op,uv_pars_vertex:cp,uv_vertex:lp,worldpos_vertex:up,background_vert:hp,background_frag:dp,backgroundCube_vert:fp,backgroundCube_frag:pp,cube_vert:mp,cube_frag:gp,depth_vert:_p,depth_frag:vp,distanceRGBA_vert:xp,distanceRGBA_frag:yp,equirect_vert:Mp,equirect_frag:Sp,linedashed_vert:Ep,linedashed_frag:Tp,meshbasic_vert:Ap,meshbasic_frag:bp,meshlambert_vert:wp,meshlambert_frag:Rp,meshmatcap_vert:Cp,meshmatcap_frag:Lp,meshnormal_vert:Pp,meshnormal_frag:Ip,meshphong_vert:Dp,meshphong_frag:Up,meshphysical_vert:Np,meshphysical_frag:Op,meshtoon_vert:Fp,meshtoon_frag:Bp,points_vert:kp,points_frag:Hp,shadow_vert:Gp,shadow_frag:zp,sprite_vert:Vp,sprite_frag:Wp},se={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},tn={basic:{uniforms:Ut([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:Ut([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:Ut([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:Ut([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:Ut([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:Ut([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:Ut([se.points,se.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:Ut([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:Ut([se.common,se.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:Ut([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:Ut([se.sprite,se.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:Ut([se.common,se.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:Ut([se.lights,se.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};tn.physical={uniforms:Ut([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Ns={r:0,b:0,g:0},Kn=new an,Xp=new Pe;function qp(s,e,t,n,i,r,a){const o=new Te(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(p,m){let S=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),S=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===nr)?(u===void 0&&(u=new Gt(new hs(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:ki(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Kn.copy(m.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Xp.makeRotationFromEuler(Kn)),u.material.toneMapped=Ke.getTransfer(v.colorSpace)!==nt,(h!==v||d!==v.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Gt(new sr(2,2),new Gn({name:"BackgroundMaterial",uniforms:ki(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(v.colorSpace)!==nt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,m){p.getRGB(Ns,ml(s)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),c=m,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(o,c)},render:g}}function Yp(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null);let l=c,u=!1;function h(b,B,D,F,W){let U=!1;if(a){const j=_(F,D,B);l!==j&&(l=j,f(l.object)),U=m(b,F,D,W),U&&S(b,F,D,W)}else{const j=B.wireframe===!0;(l.geometry!==F.id||l.program!==D.id||l.wireframe!==j)&&(l.geometry=F.id,l.program=D.id,l.wireframe=j,U=!0)}W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(U||u)&&(u=!1,N(b,B,D,F),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(b){return n.isWebGL2?s.bindVertexArray(b):r.bindVertexArrayOES(b)}function g(b){return n.isWebGL2?s.deleteVertexArray(b):r.deleteVertexArrayOES(b)}function _(b,B,D){const F=D.wireframe===!0;let W=o[b.id];W===void 0&&(W={},o[b.id]=W);let U=W[B.id];U===void 0&&(U={},W[B.id]=U);let j=U[F];return j===void 0&&(j=p(d()),U[F]=j),j}function p(b){const B=[],D=[],F=[];for(let W=0;W<i;W++)B[W]=0,D[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:D,attributeDivisors:F,object:b,attributes:{},index:null}}function m(b,B,D,F){const W=l.attributes,U=B.attributes;let j=0;const Y=D.getAttributes();for(const J in Y)if(Y[J].location>=0){const V=W[J];let ee=U[J];if(ee===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ee=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ee=b.instanceColor)),V===void 0||V.attribute!==ee||ee&&V.data!==ee.data)return!0;j++}return l.attributesNum!==j||l.index!==F}function S(b,B,D,F){const W={},U=B.attributes;let j=0;const Y=D.getAttributes();for(const J in Y)if(Y[J].location>=0){let V=U[J];V===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(V=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(V=b.instanceColor));const ee={};ee.attribute=V,V&&V.data&&(ee.data=V.data),W[J]=ee,j++}l.attributes=W,l.attributesNum=j,l.index=F}function v(){const b=l.newAttributes;for(let B=0,D=b.length;B<D;B++)b[B]=0}function E(b){C(b,0)}function C(b,B){const D=l.newAttributes,F=l.enabledAttributes,W=l.attributeDivisors;D[b]=1,F[b]===0&&(s.enableVertexAttribArray(b),F[b]=1),W[b]!==B&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](b,B),W[b]=B)}function A(){const b=l.newAttributes,B=l.enabledAttributes;for(let D=0,F=B.length;D<F;D++)B[D]!==b[D]&&(s.disableVertexAttribArray(D),B[D]=0)}function w(b,B,D,F,W,U,j){j===!0?s.vertexAttribIPointer(b,B,D,W,U):s.vertexAttribPointer(b,B,D,F,W,U)}function N(b,B,D,F){if(n.isWebGL2===!1&&(b.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const W=F.attributes,U=D.getAttributes(),j=B.defaultAttributeValues;for(const Y in U){const J=U[Y];if(J.location>=0){let Se=W[Y];if(Se===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(Se=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(Se=b.instanceColor)),Se!==void 0){const V=Se.normalized,ee=Se.itemSize,he=t.get(Se);if(he===void 0)continue;const Ae=he.buffer,ge=he.type,de=he.bytesPerElement,$e=n.isWebGL2===!0&&(ge===s.INT||ge===s.UNSIGNED_INT||Se.gpuType===$c);if(Se.isInterleavedBufferAttribute){const be=Se.data,O=be.stride,Et=Se.offset;if(be.isInstancedInterleavedBuffer){for(let ve=0;ve<J.locationSize;ve++)C(J.location+ve,be.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ve=0;ve<J.locationSize;ve++)E(J.location+ve);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let ve=0;ve<J.locationSize;ve++)w(J.location+ve,ee/J.locationSize,ge,V,O*de,(Et+ee/J.locationSize*ve)*de,$e)}else{if(Se.isInstancedBufferAttribute){for(let be=0;be<J.locationSize;be++)C(J.location+be,Se.meshPerAttribute);b.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let be=0;be<J.locationSize;be++)E(J.location+be);s.bindBuffer(s.ARRAY_BUFFER,Ae);for(let be=0;be<J.locationSize;be++)w(J.location+be,ee/J.locationSize,ge,V,ee*de,ee/J.locationSize*be*de,$e)}}else if(j!==void 0){const V=j[Y];if(V!==void 0)switch(V.length){case 2:s.vertexAttrib2fv(J.location,V);break;case 3:s.vertexAttrib3fv(J.location,V);break;case 4:s.vertexAttrib4fv(J.location,V);break;default:s.vertexAttrib1fv(J.location,V)}}}}A()}function q(){$();for(const b in o){const B=o[b];for(const D in B){const F=B[D];for(const W in F)g(F[W].object),delete F[W];delete B[D]}delete o[b]}}function y(b){if(o[b.id]===void 0)return;const B=o[b.id];for(const D in B){const F=B[D];for(const W in F)g(F[W].object),delete F[W];delete B[D]}delete o[b.id]}function R(b){for(const B in o){const D=o[B];if(D[b.id]===void 0)continue;const F=D[b.id];for(const W in F)g(F[W].object),delete F[W];delete D[b.id]}}function $(){Z(),u=!0,l!==c&&(l=c,f(l.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:$,resetDefaultState:Z,dispose:q,releaseStatesOfGeometry:y,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:E,disableUnusedAttributes:A}}function jp(s,e,t,n){const i=n.isWebGL2;let r;function a(u){r=u}function o(u,h){s.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,d){if(d===0)return;let f,g;if(i)f=s,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,u,h,d),t.update(h,r,d)}function l(u,h,d){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(u[g],h[g]);else{f.multiDrawArraysWEBGL(r,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Kp(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),m=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,E=a||e.has("OES_texture_float"),C=v&&E,A=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:A}}function $p(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Jn,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,m=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):l();else{const S=r?0:n,v=S*4;let E=m.clippingState||null;c.value=E,E=u(g,d,v,f);for(let C=0;C!==v;++C)E[C]=t[C];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const m=f+_*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,E=f;v!==_;++v,E+=4)a.copy(h[v]).applyMatrix4(S,o),a.normal.toArray(p,E),p[E+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Zp(s){let e=new WeakMap;function t(a,o){return o===aa?a.mapping=Di:o===oa&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===aa||o===oa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ad(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ba extends gl{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ci=4,qo=[.125,.215,.35,.446,.526,.582],ti=20,kr=new ba,Yo=new Te;let Hr=null,Gr=0,zr=0;const Qn=(1+Math.sqrt(5))/2,bi=1/Qn,jo=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Qn,bi),new L(0,Qn,-bi),new L(bi,0,Qn),new L(-bi,0,Qn),new L(Qn,bi,0),new L(-Qn,bi,0)];class Ko{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Hr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hr,Gr,zr),e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Di||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hr=this._renderer.getRenderTarget(),Gr=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:as,format:Yt,colorSpace:St,depthBuffer:!1},i=$o(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$o(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jp(r)),this._blurMaterial=Qp(r,e,t)}return i}_compileMaterial(e){const t=new Gt(this._lodPlanes[0],e);this._renderer.compile(t,kr)}_sceneToCubeUV(e,t,n,i){const o=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Yo),u.toneMapping=Bn,u.autoClear=!1;const f=new ni({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new Gt(new hs,f);let _=!1;const p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,_=!0):(f.color.copy(Yo),_=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):S===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const v=this._cubeSize;Os(i,S*v,m>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Di||e.mapping===Ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new Gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Os(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,kr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=jo[(i-1)%jo.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Gt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ti-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):ti;p>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ti}`);const m=[];let S=0;for(let w=0;w<ti;++w){const N=w/_,q=Math.exp(-N*N/2);m.push(q),w===0?S+=q:w<p&&(S+=2*q)}for(let w=0;w<m.length;w++)m[w]=m[w]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const E=this._sizeLods[i],C=3*E*(i>v-Ci?i-v+Ci:0),A=4*(this._cubeSize-E);Os(t,C,A,3*E,2*E),c.setRenderTarget(t),c.render(h,kr)}}function Jp(s){const e=[],t=[],n=[];let i=s;const r=s-Ci+1+qo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Ci?c=qo[a-s+Ci-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,p=2,m=1,S=new Float32Array(_*g*f),v=new Float32Array(p*g*f),E=new Float32Array(m*g*f);for(let A=0;A<f;A++){const w=A%3*2/3-1,N=A>2?0:-1,q=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];S.set(q,_*g*A),v.set(d,p*g*A);const y=[A,A,A,A,A,A];E.set(y,m*g*A)}const C=new Pt;C.setAttribute("position",new Mt(S,_)),C.setAttribute("uv",new Mt(v,p)),C.setAttribute("faceIndex",new Mt(E,m)),e.push(C),i>Ci&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $o(s,e,t){const n=new ci(s,e,t);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Qp(s,e,t){const n=new Float32Array(ti),i=new L(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Zo(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Jo(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function wa(){return`

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
	`}function em(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===aa||c===oa,u=c===Di||c===Ui;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Ko(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Ko(s));const d=l?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",r),d.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function tm(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nm(s,e,t,n){const i={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],s.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let v=0,E=S.length;v<E;v+=3){const C=S[v+0],A=S[v+1],w=S[v+2];d.push(C,A,A,w,w,C)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,E=S.length/3-1;v<E;v+=3){const C=v+0,A=v+1,w=v+2;d.push(C,A,A,w,w,C)}}else return;const p=new(ol(d)?pl:fl)(d,1);p.version=_;const m=r.get(h);m&&e.remove(m),r.set(h,p)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function im(s,e,t,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function u(f,g){s.drawElements(r,g,o,f*c),t.update(g,r,1)}function h(f,g,_){if(_===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,g,o,f*c,_),t.update(g,r,_)}function d(f,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(f[m]/c,g[m]);else{p.multiDrawElementsWEBGL(r,g,0,o,f,0,_);let m=0;for(let S=0;S<_;S++)m+=g[S];t.update(m,r,1)}}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d}function sm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function rm(s,e){return s[0]-e[0]}function am(s,e){return Math.abs(e[1])-Math.abs(s[1])}function om(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,a=new Qe,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,u,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const f=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=f!==void 0?f.length:0;let _=r.get(u);if(_===void 0||_.count!==g){let $=function(){y.dispose(),r.delete(u),u.removeEventListener("dispose",$)};_!==void 0&&_.texture.dispose();const p=u.morphAttributes.position!==void 0,m=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,v=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let A=0;p===!0&&(A=1),m===!0&&(A=2),S===!0&&(A=3);let w=u.attributes.position.count*A,N=1;w>e.maxTextureSize&&(N=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const q=new Float32Array(w*N*4*g),y=new hl(q,w,N,g);y.type=Zt,y.needsUpdate=!0;const R=A*4;for(let Z=0;Z<g;Z++){const b=v[Z],B=E[Z],D=C[Z],F=w*N*4*Z;for(let W=0;W<b.count;W++){const U=W*R;p===!0&&(a.fromBufferAttribute(b,W),q[F+U+0]=a.x,q[F+U+1]=a.y,q[F+U+2]=a.z,q[F+U+3]=0),m===!0&&(a.fromBufferAttribute(B,W),q[F+U+4]=a.x,q[F+U+5]=a.y,q[F+U+6]=a.z,q[F+U+7]=0),S===!0&&(a.fromBufferAttribute(D,W),q[F+U+8]=a.x,q[F+U+9]=a.y,q[F+U+10]=a.z,q[F+U+11]=D.itemSize===4?a.w:1)}}_={count:g,texture:y,size:new Le(w,N)},r.set(u,_),u.addEventListener("dispose",$)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",l.morphTexture,t);else{let p=0;for(let S=0;S<d.length;S++)p+=d[S];const m=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",m),h.getUniforms().setValue(s,"morphTargetInfluences",d)}h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const f=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<f;v++){const E=g[v];E[0]=v,E[1]=d[v]}g.sort(am);for(let v=0;v<8;v++)v<f&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(rm);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const E=o[v],C=E[0],A=E[1];C!==Number.MAX_SAFE_INTEGER&&A?(_&&u.getAttribute("morphTarget"+v)!==_[C]&&u.setAttribute("morphTarget"+v,_[C]),p&&u.getAttribute("morphNormal"+v)!==p[C]&&u.setAttribute("morphNormal"+v,p[C]),i[v]=A,m+=A):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const S=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",S),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function cm(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class xl extends yt{constructor(e,t,n,i,r,a,o,c,l,u){if(u=u!==void 0?u:ai,u!==ai&&u!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ai&&(n=Un),n===void 0&&u===Oi&&(n=ri),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=c!==void 0?c:vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yl=new yt,Ml=new xl(1,1);Ml.compareFunction=al;const Sl=new hl,El=new Vh,Tl=new _l,Qo=[],ec=[],tc=new Float32Array(16),nc=new Float32Array(9),ic=new Float32Array(4);function Wi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Qo[i];if(r===void 0&&(r=new Float32Array(i),Qo[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ft(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function rr(s,e){let t=ec[e];t===void 0&&(t=new Int32Array(e),ec[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function lm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function um(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2fv(this.addr,e),pt(t,e)}}function hm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;s.uniform3fv(this.addr,e),pt(t,e)}}function dm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4fv(this.addr,e),pt(t,e)}}function fm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;ic.set(n),s.uniformMatrix2fv(this.addr,!1,ic),pt(t,n)}}function pm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;nc.set(n),s.uniformMatrix3fv(this.addr,!1,nc),pt(t,n)}}function mm(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;tc.set(n),s.uniformMatrix4fv(this.addr,!1,tc),pt(t,n)}}function gm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function _m(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2iv(this.addr,e),pt(t,e)}}function vm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3iv(this.addr,e),pt(t,e)}}function xm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4iv(this.addr,e),pt(t,e)}}function ym(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;s.uniform2uiv(this.addr,e),pt(t,e)}}function Sm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;s.uniform3uiv(this.addr,e),pt(t,e)}}function Em(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;s.uniform4uiv(this.addr,e),pt(t,e)}}function Tm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Ml:yl;t.setTexture2D(e||r,i)}function Am(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||El,i)}function bm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Tl,i)}function wm(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Sl,i)}function Rm(s){switch(s){case 5126:return lm;case 35664:return um;case 35665:return hm;case 35666:return dm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return _m;case 35668:case 35672:return vm;case 35669:case 35673:return xm;case 5125:return ym;case 36294:return Mm;case 36295:return Sm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Am;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return wm}}function Cm(s,e){s.uniform1fv(this.addr,e)}function Lm(s,e){const t=Wi(e,this.size,2);s.uniform2fv(this.addr,t)}function Pm(s,e){const t=Wi(e,this.size,3);s.uniform3fv(this.addr,t)}function Im(s,e){const t=Wi(e,this.size,4);s.uniform4fv(this.addr,t)}function Dm(s,e){const t=Wi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Um(s,e){const t=Wi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Nm(s,e){const t=Wi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Om(s,e){s.uniform1iv(this.addr,e)}function Fm(s,e){s.uniform2iv(this.addr,e)}function Bm(s,e){s.uniform3iv(this.addr,e)}function km(s,e){s.uniform4iv(this.addr,e)}function Hm(s,e){s.uniform1uiv(this.addr,e)}function Gm(s,e){s.uniform2uiv(this.addr,e)}function zm(s,e){s.uniform3uiv(this.addr,e)}function Vm(s,e){s.uniform4uiv(this.addr,e)}function Wm(s,e,t){const n=this.cache,i=e.length,r=rr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||yl,r[a])}function Xm(s,e,t){const n=this.cache,i=e.length,r=rr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||El,r[a])}function qm(s,e,t){const n=this.cache,i=e.length,r=rr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Tl,r[a])}function Ym(s,e,t){const n=this.cache,i=e.length,r=rr(t,i);ft(n,r)||(s.uniform1iv(this.addr,r),pt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Sl,r[a])}function jm(s){switch(s){case 5126:return Cm;case 35664:return Lm;case 35665:return Pm;case 35666:return Im;case 35674:return Dm;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Om;case 35667:case 35671:return Fm;case 35668:case 35672:return Bm;case 35669:case 35673:return km;case 5125:return Hm;case 36294:return Gm;case 36295:return zm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}class Km{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rm(t.type)}}class $m{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jm(t.type)}}class Zm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Vr=/(\w+)(\])?(\[|\.)?/g;function sc(s,e){s.seq.push(e),s.map[e.id]=e}function Jm(s,e,t){const n=s.name,i=n.length;for(Vr.lastIndex=0;;){const r=Vr.exec(n),a=Vr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){sc(t,l===void 0?new Km(o,s,e):new $m(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new Zm(o),sc(t,h)),t=h}}}class Ws{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Jm(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function rc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Qm=37297;let eg=0;function tg(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ng(s){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(s);let n;switch(e===t?n="":e===$s&&t===Ks?n="LinearDisplayP3ToLinearSRGB":e===Ks&&t===$s&&(n="LinearSRGBToLinearDisplayP3"),s){case St:case ir:return[n,"LinearTransferOETF"];case At:case Sa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ac(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+tg(s.getShaderSource(e),a)}else return i}function ig(s,e){const t=ng(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sg(s,e){let t;switch(e){case $u:t="Linear";break;case Zu:t="Reinhard";break;case Ju:t="OptimizedCineon";break;case Qu:t="ACESFilmic";break;case th:t="AgX";break;case nh:t="Neutral";break;case eh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.alphaToCoverage||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Li).join(`
`)}function ag(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Li).join(`
`)}function og(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function cg(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Li(s){return s!==""}function oc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(s){return s.replace(lg,hg)}const ug=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function hg(s,e){let t=Ne[e];if(t===void 0){const n=ug.get(e);if(n!==void 0)t=Ne[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return fa(t)}const dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(s){return s.replace(dg,fg)}function fg(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function uc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	`;return s.isWebGL2&&(e+=`precision ${s.precision} sampler3D;
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
		`),s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Yc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tu?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gn&&(e="SHADOWMAP_TYPE_VSM"),e}function mg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Di:case Ui:e="ENVMAP_TYPE_CUBE";break;case nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}function _g(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case jc:e="ENVMAP_BLENDING_MULTIPLY";break;case ju:e="ENVMAP_BLENDING_MIX";break;case Ku:e="ENVMAP_BLENDING_ADD";break}return e}function vg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function xg(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=pg(t),l=mg(t),u=gg(t),h=_g(t),d=vg(t),f=t.isWebGL2?"":rg(t),g=ag(t),_=og(r),p=i.createProgram();let m,S,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Li).join(`
`),m.length>0&&(m+=`
`),S=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Li).join(`
`),S.length>0&&(S+=`
`)):(m=[uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),S=[f,uc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Bn?sg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,ig("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),a=fa(a),a=oc(a,t),a=cc(a,t),o=fa(o),o=oc(o,t),o=cc(o,t),a=lc(a),o=lc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const E=v+m+a,C=v+S+o,A=rc(i,i.VERTEX_SHADER,E),w=rc(i,i.FRAGMENT_SHADER,C);i.attachShader(p,A),i.attachShader(p,w),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function N($){if(s.debug.checkShaderErrors){const Z=i.getProgramInfoLog(p).trim(),b=i.getShaderInfoLog(A).trim(),B=i.getShaderInfoLog(w).trim();let D=!0,F=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(D=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,A,w);else{const W=ac(i,A,"vertex"),U=ac(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+$.name+`
Material Type: `+$.type+`

Program Info Log: `+Z+`
`+W+`
`+U)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(b===""||B==="")&&(F=!1);F&&($.diagnostics={runnable:D,programLog:Z,vertexShader:{log:b,prefix:m},fragmentShader:{log:B,prefix:S}})}i.deleteShader(A),i.deleteShader(w),q=new Ws(i,p),y=cg(i,p)}let q;this.getUniforms=function(){return q===void 0&&N(this),q};let y;this.getAttributes=function(){return y===void 0&&N(this),y};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(p,Qm)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=w,this}let yg=0;class Mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Sg(e),t.set(e,n)),n}}class Sg{constructor(e){this.id=yg++,this.code=e,this.usedTimes=0}}function Eg(s,e,t,n,i,r,a){const o=new Ta,c=new Mg,l=new Set,u=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let g=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,R,$,Z,b){const B=Z.fog,D=b.geometry,F=y.isMeshStandardMaterial?Z.environment:null,W=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),U=W&&W.mapping===nr?W.image.height:null,j=_[y.type];y.precision!==null&&(g=i.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const Y=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,J=Y!==void 0?Y.length:0;let Se=0;D.morphAttributes.position!==void 0&&(Se=1),D.morphAttributes.normal!==void 0&&(Se=2),D.morphAttributes.color!==void 0&&(Se=3);let V,ee,he,Ae;if(j){const et=tn[j];V=et.vertexShader,ee=et.fragmentShader}else V=y.vertexShader,ee=y.fragmentShader,c.update(y),he=c.getVertexShaderID(y),Ae=c.getFragmentShaderID(y);const ge=s.getRenderTarget(),de=b.isInstancedMesh===!0,$e=b.isBatchedMesh===!0,be=!!y.map,O=!!y.matcap,Et=!!W,ve=!!y.aoMap,ke=!!y.lightMap,ye=!!y.bumpMap,qe=!!y.normalMap,Fe=!!y.displacementMap,Ge=!!y.emissiveMap,ot=!!y.metalnessMap,T=!!y.roughnessMap,x=y.anisotropy>0,X=y.clearcoat>0,K=y.iridescence>0,te=y.sheen>0,Q=y.transmission>0,Ie=x&&!!y.anisotropyMap,Me=X&&!!y.clearcoatMap,re=X&&!!y.clearcoatNormalMap,oe=X&&!!y.clearcoatRoughnessMap,De=K&&!!y.iridescenceMap,ne=K&&!!y.iridescenceThicknessMap,ut=te&&!!y.sheenColorMap,ze=te&&!!y.sheenRoughnessMap,_e=!!y.specularMap,fe=!!y.specularColorMap,pe=!!y.specularIntensityMap,Ye=Q&&!!y.transmissionMap,Re=Q&&!!y.thicknessMap,it=!!y.gradientMap,P=!!y.alphaMap,ae=y.alphaTest>0,H=!!y.alphaHash,ie=!!y.extensions;let ce=Bn;y.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ce=s.toneMapping);const Ve={isWebGL2:h,shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:ee,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:Ae,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:$e,instancing:de,instancingColor:de&&b.instanceColor!==null,instancingMorph:de&&b.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ge===null?s.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:St,alphaToCoverage:!!y.alphaToCoverage,map:be,matcap:O,envMap:Et,envMapMode:Et&&W.mapping,envMapCubeUVHeight:U,aoMap:ve,lightMap:ke,bumpMap:ye,normalMap:qe,displacementMap:f&&Fe,emissiveMap:Ge,normalMapObjectSpace:qe&&y.normalMapType===mh,normalMapTangentSpace:qe&&y.normalMapType===rl,metalnessMap:ot,roughnessMap:T,anisotropy:x,anisotropyMap:Ie,clearcoat:X,clearcoatMap:Me,clearcoatNormalMap:re,clearcoatRoughnessMap:oe,iridescence:K,iridescenceMap:De,iridescenceThicknessMap:ne,sheen:te,sheenColorMap:ut,sheenRoughnessMap:ze,specularMap:_e,specularColorMap:fe,specularIntensityMap:pe,transmission:Q,transmissionMap:Ye,thicknessMap:Re,gradientMap:it,opaque:y.transparent===!1&&y.blending===si&&y.alphaToCoverage===!1,alphaMap:P,alphaTest:ae,alphaHash:H,combine:y.combine,mapUv:be&&p(y.map.channel),aoMapUv:ve&&p(y.aoMap.channel),lightMapUv:ke&&p(y.lightMap.channel),bumpMapUv:ye&&p(y.bumpMap.channel),normalMapUv:qe&&p(y.normalMap.channel),displacementMapUv:Fe&&p(y.displacementMap.channel),emissiveMapUv:Ge&&p(y.emissiveMap.channel),metalnessMapUv:ot&&p(y.metalnessMap.channel),roughnessMapUv:T&&p(y.roughnessMap.channel),anisotropyMapUv:Ie&&p(y.anisotropyMap.channel),clearcoatMapUv:Me&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ze&&p(y.sheenRoughnessMap.channel),specularMapUv:_e&&p(y.specularMap.channel),specularColorMapUv:fe&&p(y.specularColorMap.channel),specularIntensityMapUv:pe&&p(y.specularIntensityMap.channel),transmissionMapUv:Ye&&p(y.transmissionMap.channel),thicknessMapUv:Re&&p(y.thicknessMap.channel),alphaMapUv:P&&p(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(qe||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!D.attributes.uv&&(be||P),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:b.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&$.length>0,shadowMapType:s.shadowMap.type,toneMapping:ce,useLegacyLights:s._useLegacyLights,decodeVideoTexture:be&&y.map.isVideoTexture===!0&&Ke.getTransfer(y.map.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===nn,flipSided:y.side===Ot,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ie&&y.extensions.derivatives===!0,extensionFragDepth:ie&&y.extensions.fragDepth===!0,extensionDrawBuffers:ie&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ie&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ie&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ie&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ve.vertexUv1s=l.has(1),Ve.vertexUv2s=l.has(2),Ve.vertexUv3s=l.has(3),l.clear(),Ve}function S(y){const R=[];if(y.shaderID?R.push(y.shaderID):(R.push(y.customVertexShaderID),R.push(y.customFragmentShaderID)),y.defines!==void 0)for(const $ in y.defines)R.push($),R.push(y.defines[$]);return y.isRawShaderMaterial===!1&&(v(R,y),E(R,y),R.push(s.outputColorSpace)),R.push(y.customProgramCacheKey),R.join()}function v(y,R){y.push(R.precision),y.push(R.outputColorSpace),y.push(R.envMapMode),y.push(R.envMapCubeUVHeight),y.push(R.mapUv),y.push(R.alphaMapUv),y.push(R.lightMapUv),y.push(R.aoMapUv),y.push(R.bumpMapUv),y.push(R.normalMapUv),y.push(R.displacementMapUv),y.push(R.emissiveMapUv),y.push(R.metalnessMapUv),y.push(R.roughnessMapUv),y.push(R.anisotropyMapUv),y.push(R.clearcoatMapUv),y.push(R.clearcoatNormalMapUv),y.push(R.clearcoatRoughnessMapUv),y.push(R.iridescenceMapUv),y.push(R.iridescenceThicknessMapUv),y.push(R.sheenColorMapUv),y.push(R.sheenRoughnessMapUv),y.push(R.specularMapUv),y.push(R.specularColorMapUv),y.push(R.specularIntensityMapUv),y.push(R.transmissionMapUv),y.push(R.thicknessMapUv),y.push(R.combine),y.push(R.fogExp2),y.push(R.sizeAttenuation),y.push(R.morphTargetsCount),y.push(R.morphAttributeCount),y.push(R.numDirLights),y.push(R.numPointLights),y.push(R.numSpotLights),y.push(R.numSpotLightMaps),y.push(R.numHemiLights),y.push(R.numRectAreaLights),y.push(R.numDirLightShadows),y.push(R.numPointLightShadows),y.push(R.numSpotLightShadows),y.push(R.numSpotLightShadowsWithMaps),y.push(R.numLightProbes),y.push(R.shadowMapType),y.push(R.toneMapping),y.push(R.numClippingPlanes),y.push(R.numClipIntersection),y.push(R.depthPacking)}function E(y,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.instancingMorph&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.normalMapObjectSpace&&o.enable(7),R.normalMapTangentSpace&&o.enable(8),R.clearcoat&&o.enable(9),R.iridescence&&o.enable(10),R.alphaTest&&o.enable(11),R.vertexColors&&o.enable(12),R.vertexAlphas&&o.enable(13),R.vertexUv1s&&o.enable(14),R.vertexUv2s&&o.enable(15),R.vertexUv3s&&o.enable(16),R.vertexTangents&&o.enable(17),R.anisotropy&&o.enable(18),R.alphaHash&&o.enable(19),R.batching&&o.enable(20),y.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.alphaToCoverage&&o.enable(20),y.push(o.mask)}function C(y){const R=_[y.type];let $;if(R){const Z=tn[R];$=nd.clone(Z.uniforms)}else $=y.uniforms;return $}function A(y,R){let $;for(let Z=0,b=u.length;Z<b;Z++){const B=u[Z];if(B.cacheKey===R){$=B,++$.usedTimes;break}}return $===void 0&&($=new xg(s,R,y,r),u.push($)),$}function w(y){if(--y.usedTimes===0){const R=u.indexOf(y);u[R]=u[u.length-1],u.pop(),y.destroy()}}function N(y){c.remove(y)}function q(){c.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:C,acquireProgram:A,releaseProgram:w,releaseShaderCache:N,programs:u,dispose:q}}function Tg(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ag(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function dc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,g,_,p){let m=s[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},s[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=h.renderOrder,m.z=_,m.group=p),e++,m}function o(h,d,f,g,_,p){const m=a(h,d,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):t.push(m)}function c(h,d,f,g,_,p){const m=a(h,d,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):t.unshift(m)}function l(h,d){t.length>1&&t.sort(h||Ag),n.length>1&&n.sort(d||hc),i.length>1&&i.sort(d||hc)}function u(){for(let h=e,d=s.length;h<d;h++){const f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function bg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new dc,s.set(n,[a])):i>=r.length?(a=new dc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function wg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Te};break;case"SpotLight":t={position:new L,direction:new L,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function Rg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Cg=0;function Lg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Pg(s,e){const t=new wg,n=Rg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new L);const r=new L,a=new Pe,o=new Pe;function c(u,h){let d=0,f=0,g=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let _=0,p=0,m=0,S=0,v=0,E=0,C=0,A=0,w=0,N=0,q=0;u.sort(Lg);const y=h===!0?Math.PI:1;for(let $=0,Z=u.length;$<Z;$++){const b=u[$],B=b.color,D=b.intensity,F=b.distance,W=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)d+=B.r*D*y,f+=B.g*D*y,g+=B.b*D*y;else if(b.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(b.sh.coefficients[U],D);q++}else if(b.isDirectionalLight){const U=t.get(b);if(U.color.copy(b.color).multiplyScalar(b.intensity*y),b.castShadow){const j=b.shadow,Y=n.get(b);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.directionalShadow[_]=Y,i.directionalShadowMap[_]=W,i.directionalShadowMatrix[_]=b.shadow.matrix,E++}i.directional[_]=U,_++}else if(b.isSpotLight){const U=t.get(b);U.position.setFromMatrixPosition(b.matrixWorld),U.color.copy(B).multiplyScalar(D*y),U.distance=F,U.coneCos=Math.cos(b.angle),U.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),U.decay=b.decay,i.spot[m]=U;const j=b.shadow;if(b.map&&(i.spotLightMap[w]=b.map,w++,j.updateMatrices(b),b.castShadow&&N++),i.spotLightMatrix[m]=j.matrix,b.castShadow){const Y=n.get(b);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.spotShadow[m]=Y,i.spotShadowMap[m]=W,A++}m++}else if(b.isRectAreaLight){const U=t.get(b);U.color.copy(B).multiplyScalar(D),U.halfWidth.set(b.width*.5,0,0),U.halfHeight.set(0,b.height*.5,0),i.rectArea[S]=U,S++}else if(b.isPointLight){const U=t.get(b);if(U.color.copy(b.color).multiplyScalar(b.intensity*y),U.distance=b.distance,U.decay=b.decay,b.castShadow){const j=b.shadow,Y=n.get(b);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,i.pointShadow[p]=Y,i.pointShadowMap[p]=W,i.pointShadowMatrix[p]=b.shadow.matrix,C++}i.point[p]=U,p++}else if(b.isHemisphereLight){const U=t.get(b);U.skyColor.copy(b.color).multiplyScalar(D*y),U.groundColor.copy(b.groundColor).multiplyScalar(D*y),i.hemi[v]=U,v++}}S>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const R=i.hash;(R.directionalLength!==_||R.pointLength!==p||R.spotLength!==m||R.rectAreaLength!==S||R.hemiLength!==v||R.numDirectionalShadows!==E||R.numPointShadows!==C||R.numSpotShadows!==A||R.numSpotMaps!==w||R.numLightProbes!==q)&&(i.directional.length=_,i.spot.length=m,i.rectArea.length=S,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=A+w-N,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=q,R.directionalLength=_,R.pointLength=p,R.spotLength=m,R.rectAreaLength=S,R.hemiLength=v,R.numDirectionalShadows=E,R.numPointShadows=C,R.numSpotShadows=A,R.numSpotMaps=w,R.numLightProbes=q,i.version=Cg++)}function l(u,h){let d=0,f=0,g=0,_=0,p=0;const m=h.matrixWorldInverse;for(let S=0,v=u.length;S<v;S++){const E=u[S];if(E.isDirectionalLight){const C=i.directional[d];C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),d++}else if(E.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(m),g++}else if(E.isRectAreaLight){const C=i.rectArea[_];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),o.identity(),a.copy(E.matrixWorld),a.premultiply(m),o.extractRotation(a),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const C=i.point[f];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const C=i.hemi[p];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:c,setupView:l,state:i}}function fc(s,e){const t=new Pg(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Ig(s,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let c;return o===void 0?(c=new fc(s,e),t.set(r,[c])):a>=o.length?(c=new fc(s,e),o.push(c)):c=o[a],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class Dg extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ug extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
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
}`;function Fg(s,e,t){let n=new Aa;const i=new Le,r=new Le,a=new Qe,o=new Dg({depthPacking:ph}),c=new Ug,l={},u=t.maxTextureSize,h={[Mn]:Ot,[Ot]:Mn,[nn]:nn},d=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:Ng,fragmentShader:Og}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yc;let m=this.type;this.render=function(A,w,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const q=s.getRenderTarget(),y=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Fn),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Z=m!==gn&&this.type===gn,b=m===gn&&this.type!==gn;for(let B=0,D=A.length;B<D;B++){const F=A[B],W=F.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const U=W.getFrameExtents();if(i.multiply(U),r.copy(W.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/U.x),i.x=r.x*U.x,W.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/U.y),i.y=r.y*U.y,W.mapSize.y=r.y)),W.map===null||Z===!0||b===!0){const Y=this.type!==gn?{minFilter:vt,magFilter:vt}:{};W.map!==null&&W.map.dispose(),W.map=new ci(i.x,i.y,Y),W.map.texture.name=F.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const j=W.getViewportCount();for(let Y=0;Y<j;Y++){const J=W.getViewport(Y);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),$.viewport(a),W.updateMatrices(F,Y),n=W.getFrustum(),E(w,N,W.camera,F,this.type)}W.isPointLightShadow!==!0&&this.type===gn&&S(W,N),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(q,y,R)};function S(A,w){const N=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ci(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,N,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,N,f,_,null)}function v(A,w,N,q){let y=null;const R=N.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)y=R;else if(y=N.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const $=y.uuid,Z=w.uuid;let b=l[$];b===void 0&&(b={},l[$]=b);let B=b[Z];B===void 0&&(B=y.clone(),b[Z]=B,w.addEventListener("dispose",C)),y=B}if(y.visible=w.visible,y.wireframe=w.wireframe,q===gn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const $=s.properties.get(y);$.light=N}return y}function E(A,w,N,q,y){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===gn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,A.matrixWorld);const Z=e.update(A),b=A.material;if(Array.isArray(b)){const B=Z.groups;for(let D=0,F=B.length;D<F;D++){const W=B[D],U=b[W.materialIndex];if(U&&U.visible){const j=v(A,U,q,y);A.onBeforeShadow(s,A,w,N,Z,j,W),s.renderBufferDirect(N,null,Z,j,A,W),A.onAfterShadow(s,A,w,N,Z,j,W)}}}else if(b.visible){const B=v(A,b,q,y);A.onBeforeShadow(s,A,w,N,Z,B,null),s.renderBufferDirect(N,null,Z,B,A,null),A.onAfterShadow(s,A,w,N,Z,B,null)}}const $=A.children;for(let Z=0,b=$.length;Z<b;Z++)E($[Z],w,N,q,y)}function C(A){A.target.removeEventListener("dispose",C);for(const N in l){const q=l[N],y=A.target.uuid;y in q&&(q[y].dispose(),delete q[y])}}}function Bg(s,e,t){const n=t.isWebGL2;function i(){let P=!1;const ae=new Qe;let H=null;const ie=new Qe(0,0,0,0);return{setMask:function(ce){H!==ce&&!P&&(s.colorMask(ce,ce,ce,ce),H=ce)},setLocked:function(ce){P=ce},setClear:function(ce,Ve,et,Tt,zt){zt===!0&&(ce*=Tt,Ve*=Tt,et*=Tt),ae.set(ce,Ve,et,Tt),ie.equals(ae)===!1&&(s.clearColor(ce,Ve,et,Tt),ie.copy(ae))},reset:function(){P=!1,H=null,ie.set(-1,0,0,0)}}}function r(){let P=!1,ae=null,H=null,ie=null;return{setTest:function(ce){ce?de(s.DEPTH_TEST):$e(s.DEPTH_TEST)},setMask:function(ce){ae!==ce&&!P&&(s.depthMask(ce),ae=ce)},setFunc:function(ce){if(H!==ce){switch(ce){case Gu:s.depthFunc(s.NEVER);break;case zu:s.depthFunc(s.ALWAYS);break;case Vu:s.depthFunc(s.LESS);break;case qs:s.depthFunc(s.LEQUAL);break;case Wu:s.depthFunc(s.EQUAL);break;case Xu:s.depthFunc(s.GEQUAL);break;case qu:s.depthFunc(s.GREATER);break;case Yu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}H=ce}},setLocked:function(ce){P=ce},setClear:function(ce){ie!==ce&&(s.clearDepth(ce),ie=ce)},reset:function(){P=!1,ae=null,H=null,ie=null}}}function a(){let P=!1,ae=null,H=null,ie=null,ce=null,Ve=null,et=null,Tt=null,zt=null;return{setTest:function(tt){P||(tt?de(s.STENCIL_TEST):$e(s.STENCIL_TEST))},setMask:function(tt){ae!==tt&&!P&&(s.stencilMask(tt),ae=tt)},setFunc:function(tt,It,en){(H!==tt||ie!==It||ce!==en)&&(s.stencilFunc(tt,It,en),H=tt,ie=It,ce=en)},setOp:function(tt,It,en){(Ve!==tt||et!==It||Tt!==en)&&(s.stencilOp(tt,It,en),Ve=tt,et=It,Tt=en)},setLocked:function(tt){P=tt},setClear:function(tt){zt!==tt&&(s.clearStencil(tt),zt=tt)},reset:function(){P=!1,ae=null,H=null,ie=null,ce=null,Ve=null,et=null,Tt=null,zt=null}}}const o=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,_=[],p=null,m=!1,S=null,v=null,E=null,C=null,A=null,w=null,N=null,q=new Te(0,0,0),y=0,R=!1,$=null,Z=null,b=null,B=null,D=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,U=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(j)[1]),W=U>=1):j.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),W=U>=2);let Y=null,J={};const Se=s.getParameter(s.SCISSOR_BOX),V=s.getParameter(s.VIEWPORT),ee=new Qe().fromArray(Se),he=new Qe().fromArray(V);function Ae(P,ae,H,ie){const ce=new Uint8Array(4),Ve=s.createTexture();s.bindTexture(P,Ve),s.texParameteri(P,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(P,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<H;et++)n&&(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)?s.texImage3D(ae,0,s.RGBA,1,1,ie,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(ae+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return Ve}const ge={};ge[s.TEXTURE_2D]=Ae(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=Ae(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ge[s.TEXTURE_2D_ARRAY]=Ae(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=Ae(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),de(s.DEPTH_TEST),c.setFunc(qs),Fe(!1),Ge(Va),de(s.CULL_FACE),ye(Fn);function de(P){d[P]!==!0&&(s.enable(P),d[P]=!0)}function $e(P){d[P]!==!1&&(s.disable(P),d[P]=!1)}function be(P,ae){return f[P]!==ae?(s.bindFramebuffer(P,ae),f[P]=ae,n&&(P===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=ae),P===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=ae)),!0):!1}function O(P,ae){let H=_,ie=!1;if(P){H=g.get(ae),H===void 0&&(H=[],g.set(ae,H));const ce=P.textures;if(H.length!==ce.length||H[0]!==s.COLOR_ATTACHMENT0){for(let Ve=0,et=ce.length;Ve<et;Ve++)H[Ve]=s.COLOR_ATTACHMENT0+Ve;H.length=ce.length,ie=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,ie=!0);if(ie)if(t.isWebGL2)s.drawBuffers(H);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Et(P){return p!==P?(s.useProgram(P),p=P,!0):!1}const ve={[ei]:s.FUNC_ADD,[bu]:s.FUNC_SUBTRACT,[wu]:s.FUNC_REVERSE_SUBTRACT};if(n)ve[Ya]=s.MIN,ve[ja]=s.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(ve[Ya]=P.MIN_EXT,ve[ja]=P.MAX_EXT)}const ke={[Ru]:s.ZERO,[Cu]:s.ONE,[Lu]:s.SRC_COLOR,[sa]:s.SRC_ALPHA,[Ou]:s.SRC_ALPHA_SATURATE,[Uu]:s.DST_COLOR,[Iu]:s.DST_ALPHA,[Pu]:s.ONE_MINUS_SRC_COLOR,[ra]:s.ONE_MINUS_SRC_ALPHA,[Nu]:s.ONE_MINUS_DST_COLOR,[Du]:s.ONE_MINUS_DST_ALPHA,[Fu]:s.CONSTANT_COLOR,[Bu]:s.ONE_MINUS_CONSTANT_COLOR,[ku]:s.CONSTANT_ALPHA,[Hu]:s.ONE_MINUS_CONSTANT_ALPHA};function ye(P,ae,H,ie,ce,Ve,et,Tt,zt,tt){if(P===Fn){m===!0&&($e(s.BLEND),m=!1);return}if(m===!1&&(de(s.BLEND),m=!0),P!==Au){if(P!==S||tt!==R){if((v!==ei||A!==ei)&&(s.blendEquation(s.FUNC_ADD),v=ei,A=ei),tt)switch(P){case si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wa:s.blendFunc(s.ONE,s.ONE);break;case Xa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Xa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case qa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,C=null,w=null,N=null,q.set(0,0,0),y=0,S=P,R=tt}return}ce=ce||ae,Ve=Ve||H,et=et||ie,(ae!==v||ce!==A)&&(s.blendEquationSeparate(ve[ae],ve[ce]),v=ae,A=ce),(H!==E||ie!==C||Ve!==w||et!==N)&&(s.blendFuncSeparate(ke[H],ke[ie],ke[Ve],ke[et]),E=H,C=ie,w=Ve,N=et),(Tt.equals(q)===!1||zt!==y)&&(s.blendColor(Tt.r,Tt.g,Tt.b,zt),q.copy(Tt),y=zt),S=P,R=!1}function qe(P,ae){P.side===nn?$e(s.CULL_FACE):de(s.CULL_FACE);let H=P.side===Ot;ae&&(H=!H),Fe(H),P.blending===si&&P.transparent===!1?ye(Fn):ye(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),o.setMask(P.colorWrite);const ie=P.stencilWrite;l.setTest(ie),ie&&(l.setMask(P.stencilWriteMask),l.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),l.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),T(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):$e(s.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(P){$!==P&&(P?s.frontFace(s.CW):s.frontFace(s.CCW),$=P)}function Ge(P){P!==Su?(de(s.CULL_FACE),P!==Z&&(P===Va?s.cullFace(s.BACK):P===Eu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):$e(s.CULL_FACE),Z=P}function ot(P){P!==b&&(W&&s.lineWidth(P),b=P)}function T(P,ae,H){P?(de(s.POLYGON_OFFSET_FILL),(B!==ae||D!==H)&&(s.polygonOffset(ae,H),B=ae,D=H)):$e(s.POLYGON_OFFSET_FILL)}function x(P){P?de(s.SCISSOR_TEST):$e(s.SCISSOR_TEST)}function X(P){P===void 0&&(P=s.TEXTURE0+F-1),Y!==P&&(s.activeTexture(P),Y=P)}function K(P,ae,H){H===void 0&&(Y===null?H=s.TEXTURE0+F-1:H=Y);let ie=J[H];ie===void 0&&(ie={type:void 0,texture:void 0},J[H]=ie),(ie.type!==P||ie.texture!==ae)&&(Y!==H&&(s.activeTexture(H),Y=H),s.bindTexture(P,ae||ge[P]),ie.type=P,ie.texture=ae)}function te(){const P=J[Y];P!==void 0&&P.type!==void 0&&(s.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Q(){try{s.compressedTexImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ie(){try{s.compressedTexImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{s.texSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{s.texSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function De(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{s.texStorage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{s.texStorage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{s.texImage3D.apply(s,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(P){ee.equals(P)===!1&&(s.scissor(P.x,P.y,P.z,P.w),ee.copy(P))}function pe(P){he.equals(P)===!1&&(s.viewport(P.x,P.y,P.z,P.w),he.copy(P))}function Ye(P,ae){let H=h.get(ae);H===void 0&&(H=new WeakMap,h.set(ae,H));let ie=H.get(P);ie===void 0&&(ie=s.getUniformBlockIndex(ae,P.name),H.set(P,ie))}function Re(P,ae){const ie=h.get(ae).get(P);u.get(ae)!==ie&&(s.uniformBlockBinding(ae,ie,P.__bindingPointIndex),u.set(ae,ie))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},Y=null,J={},f={},g=new WeakMap,_=[],p=null,m=!1,S=null,v=null,E=null,C=null,A=null,w=null,N=null,q=new Te(0,0,0),y=0,R=!1,$=null,Z=null,b=null,B=null,D=null,ee.set(0,0,s.canvas.width,s.canvas.height),he.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:de,disable:$e,bindFramebuffer:be,drawBuffers:O,useProgram:Et,setBlending:ye,setMaterial:qe,setFlipSided:Fe,setCullFace:Ge,setLineWidth:ot,setPolygonOffset:T,setScissorTest:x,activeTexture:X,bindTexture:K,unbindTexture:te,compressedTexImage2D:Q,compressedTexImage3D:Ie,texImage2D:ze,texImage3D:_e,updateUBOMapping:Ye,uniformBlockBinding:Re,texStorage2D:ne,texStorage3D:ut,texSubImage2D:Me,texSubImage3D:re,compressedTexSubImage2D:oe,compressedTexSubImage3D:De,scissor:fe,viewport:pe,reset:it}}function kg(s,e,t,n,i,r,a){const o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Le,h=new WeakMap;let d;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,x){return g?new OffscreenCanvas(T,x):cs("canvas")}function p(T,x,X,K){let te=1;const Q=ot(T);if((Q.width>K||Q.height>K)&&(te=K/Math.max(Q.width,Q.height)),te<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Ie=x?Js:Math.floor,Me=Ie(te*Q.width),re=Ie(te*Q.height);d===void 0&&(d=_(Me,re));const oe=X?_(Me,re):d;return oe.width=Me,oe.height=re,oe.getContext("2d").drawImage(T,0,0,Me,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Me+"x"+re+")."),oe}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function m(T){const x=ot(T);return da(x.width)&&da(x.height)}function S(T){return o?!1:T.wrapS!==qt||T.wrapT!==qt||T.minFilter!==vt&&T.minFilter!==Lt}function v(T,x){return T.generateMipmaps&&x&&T.minFilter!==vt&&T.minFilter!==Lt}function E(T){s.generateMipmap(T)}function C(T,x,X,K,te=!1){if(o===!1)return x;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Q=x;if(x===s.RED&&(X===s.FLOAT&&(Q=s.R32F),X===s.HALF_FLOAT&&(Q=s.R16F),X===s.UNSIGNED_BYTE&&(Q=s.R8)),x===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(Q=s.R8UI),X===s.UNSIGNED_SHORT&&(Q=s.R16UI),X===s.UNSIGNED_INT&&(Q=s.R32UI),X===s.BYTE&&(Q=s.R8I),X===s.SHORT&&(Q=s.R16I),X===s.INT&&(Q=s.R32I)),x===s.RG&&(X===s.FLOAT&&(Q=s.RG32F),X===s.HALF_FLOAT&&(Q=s.RG16F),X===s.UNSIGNED_BYTE&&(Q=s.RG8)),x===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(Q=s.RG8UI),X===s.UNSIGNED_SHORT&&(Q=s.RG16UI),X===s.UNSIGNED_INT&&(Q=s.RG32UI),X===s.BYTE&&(Q=s.RG8I),X===s.SHORT&&(Q=s.RG16I),X===s.INT&&(Q=s.RG32I)),x===s.RGBA){const Ie=te?js:Ke.getTransfer(K);X===s.FLOAT&&(Q=s.RGBA32F),X===s.HALF_FLOAT&&(Q=s.RGBA16F),X===s.UNSIGNED_BYTE&&(Q=Ie===nt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function A(T,x,X){return v(T,X)===!0||T.isFramebufferTexture&&T.minFilter!==vt&&T.minFilter!==Lt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function w(T){return T===vt||T===ca||T===Ri?s.NEAREST:s.LINEAR}function N(T){const x=T.target;x.removeEventListener("dispose",N),y(x),x.isVideoTexture&&h.delete(x)}function q(T){const x=T.target;x.removeEventListener("dispose",q),$(x)}function y(T){const x=n.get(T);if(x.__webglInit===void 0)return;const X=T.source,K=f.get(X);if(K){const te=K[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(T),Object.keys(K).length===0&&f.delete(X)}n.remove(T)}function R(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const X=T.source,K=f.get(X);delete K[x.__cacheKey],a.memory.textures--}function $(T){const x=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let te=0;te<x.__webglFramebuffer[K].length;te++)s.deleteFramebuffer(x.__webglFramebuffer[K][te]);else s.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)s.deleteFramebuffer(x.__webglFramebuffer[K]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const X=T.textures;for(let K=0,te=X.length;K<te;K++){const Q=n.get(X[K]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(X[K])}n.remove(T)}let Z=0;function b(){Z=0}function B(){const T=Z;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),Z+=1,T}function D(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function F(T,x){const X=n.get(T);if(T.isVideoTexture&&Fe(T),T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(X,T,x);return}}t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+x)}function W(T,x){const X=n.get(T);if(T.version>0&&X.__version!==T.version){he(X,T,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+x)}function U(T,x){const X=n.get(T);if(T.version>0&&X.__version!==T.version){he(X,T,x);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+x)}function j(T,x){const X=n.get(T);if(T.version>0&&X.__version!==T.version){Ae(X,T,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+x)}const Y={[Ni]:s.REPEAT,[qt]:s.CLAMP_TO_EDGE,[Ys]:s.MIRRORED_REPEAT},J={[vt]:s.NEAREST,[ca]:s.NEAREST_MIPMAP_NEAREST,[Ri]:s.NEAREST_MIPMAP_LINEAR,[Lt]:s.LINEAR,[Vs]:s.LINEAR_MIPMAP_NEAREST,[xn]:s.LINEAR_MIPMAP_LINEAR},Se={[gh]:s.NEVER,[Sh]:s.ALWAYS,[_h]:s.LESS,[al]:s.LEQUAL,[vh]:s.EQUAL,[Mh]:s.GEQUAL,[xh]:s.GREATER,[yh]:s.NOTEQUAL};function V(T,x,X){if(x.type===Zt&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Lt||x.magFilter===Vs||x.magFilter===Ri||x.magFilter===xn||x.minFilter===Lt||x.minFilter===Vs||x.minFilter===Ri||x.minFilter===xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(s.texParameteri(T,s.TEXTURE_WRAP_S,Y[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,Y[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,Y[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,J[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,J[x.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==qt||x.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,w(x.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,w(x.minFilter)),x.minFilter!==vt&&x.minFilter!==Lt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,Se[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===vt||x.minFilter!==Ri&&x.minFilter!==xn||x.type===Zt&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===as&&e.has("OES_texture_half_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ee(T,x){let X=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",N));const K=x.source;let te=f.get(K);te===void 0&&(te={},f.set(K,te));const Q=D(x);if(Q!==T.__cacheKey){te[Q]===void 0&&(te[Q]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),te[Q].usedTimes++;const Ie=te[T.__cacheKey];Ie!==void 0&&(te[T.__cacheKey].usedTimes--,Ie.usedTimes===0&&R(x)),T.__cacheKey=Q,T.__webglTexture=te[Q].texture}return X}function he(T,x,X){let K=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=s.TEXTURE_3D);const te=ee(T,x),Q=x.source;t.bindTexture(K,T.__webglTexture,s.TEXTURE0+X);const Ie=n.get(Q);if(Q.version!==Ie.__version||te===!0){t.activeTexture(s.TEXTURE0+X);const Me=Ke.getPrimaries(Ke.workingColorSpace),re=x.colorSpace===Dn?null:Ke.getPrimaries(x.colorSpace),oe=x.colorSpace===Dn||Me===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const De=S(x)&&m(x.image)===!1;let ne=p(x.image,De,!1,i.maxTextureSize);ne=Ge(x,ne);const ut=m(ne)||o,ze=r.convert(x.format,x.colorSpace);let _e=r.convert(x.type),fe=C(x.internalFormat,ze,_e,x.colorSpace,x.isVideoTexture);V(K,x,ut);let pe;const Ye=x.mipmaps,Re=o&&x.isVideoTexture!==!0&&fe!==il,it=Ie.__version===void 0||te===!0,P=Q.dataReady,ae=A(x,ne,ut);if(x.isDepthTexture)fe=s.DEPTH_COMPONENT,o?x.type===Zt?fe=s.DEPTH_COMPONENT32F:x.type===Un?fe=s.DEPTH_COMPONENT24:x.type===ri?fe=s.DEPTH24_STENCIL8:fe=s.DEPTH_COMPONENT16:x.type===Zt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ai&&fe===s.DEPTH_COMPONENT&&x.type!==Ma&&x.type!==Un&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Un,_e=r.convert(x.type)),x.format===Oi&&fe===s.DEPTH_COMPONENT&&(fe=s.DEPTH_STENCIL,x.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=ri,_e=r.convert(x.type))),it&&(Re?t.texStorage2D(s.TEXTURE_2D,1,fe,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,fe,ne.width,ne.height,0,ze,_e,null));else if(x.isDataTexture)if(Ye.length>0&&ut){Re&&it&&t.texStorage2D(s.TEXTURE_2D,ae,fe,Ye[0].width,Ye[0].height);for(let H=0,ie=Ye.length;H<ie;H++)pe=Ye[H],Re?P&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,pe.width,pe.height,ze,_e,pe.data):t.texImage2D(s.TEXTURE_2D,H,fe,pe.width,pe.height,0,ze,_e,pe.data);x.generateMipmaps=!1}else Re?(it&&t.texStorage2D(s.TEXTURE_2D,ae,fe,ne.width,ne.height),P&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,ze,_e,ne.data)):t.texImage2D(s.TEXTURE_2D,0,fe,ne.width,ne.height,0,ze,_e,ne.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Re&&it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,fe,Ye[0].width,Ye[0].height,ne.depth);for(let H=0,ie=Ye.length;H<ie;H++)pe=Ye[H],x.format!==Yt?ze!==null?Re?P&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,pe.width,pe.height,ne.depth,ze,pe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,fe,pe.width,pe.height,ne.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?P&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,pe.width,pe.height,ne.depth,ze,_e,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,H,fe,pe.width,pe.height,ne.depth,0,ze,_e,pe.data)}else{Re&&it&&t.texStorage2D(s.TEXTURE_2D,ae,fe,Ye[0].width,Ye[0].height);for(let H=0,ie=Ye.length;H<ie;H++)pe=Ye[H],x.format!==Yt?ze!==null?Re?P&&t.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,pe.width,pe.height,ze,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,H,fe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Re?P&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,pe.width,pe.height,ze,_e,pe.data):t.texImage2D(s.TEXTURE_2D,H,fe,pe.width,pe.height,0,ze,_e,pe.data)}else if(x.isDataArrayTexture)Re?(it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ae,fe,ne.width,ne.height,ne.depth),P&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ze,_e,ne.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,fe,ne.width,ne.height,ne.depth,0,ze,_e,ne.data);else if(x.isData3DTexture)Re?(it&&t.texStorage3D(s.TEXTURE_3D,ae,fe,ne.width,ne.height,ne.depth),P&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ze,_e,ne.data)):t.texImage3D(s.TEXTURE_3D,0,fe,ne.width,ne.height,ne.depth,0,ze,_e,ne.data);else if(x.isFramebufferTexture){if(it)if(Re)t.texStorage2D(s.TEXTURE_2D,ae,fe,ne.width,ne.height);else{let H=ne.width,ie=ne.height;for(let ce=0;ce<ae;ce++)t.texImage2D(s.TEXTURE_2D,ce,fe,H,ie,0,ze,_e,null),H>>=1,ie>>=1}}else if(Ye.length>0&&ut){if(Re&&it){const H=ot(Ye[0]);t.texStorage2D(s.TEXTURE_2D,ae,fe,H.width,H.height)}for(let H=0,ie=Ye.length;H<ie;H++)pe=Ye[H],Re?P&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,ze,_e,pe):t.texImage2D(s.TEXTURE_2D,H,fe,ze,_e,pe);x.generateMipmaps=!1}else if(Re){if(it){const H=ot(ne);t.texStorage2D(s.TEXTURE_2D,ae,fe,H.width,H.height)}P&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,_e,ne)}else t.texImage2D(s.TEXTURE_2D,0,fe,ze,_e,ne);v(x,ut)&&E(K),Ie.__version=Q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ae(T,x,X){if(x.image.length!==6)return;const K=ee(T,x),te=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+X);const Q=n.get(te);if(te.version!==Q.__version||K===!0){t.activeTexture(s.TEXTURE0+X);const Ie=Ke.getPrimaries(Ke.workingColorSpace),Me=x.colorSpace===Dn?null:Ke.getPrimaries(x.colorSpace),re=x.colorSpace===Dn||Ie===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const oe=x.isCompressedTexture||x.image[0].isCompressedTexture,De=x.image[0]&&x.image[0].isDataTexture,ne=[];for(let H=0;H<6;H++)!oe&&!De?ne[H]=p(x.image[H],!1,!0,i.maxCubemapSize):ne[H]=De?x.image[H].image:x.image[H],ne[H]=Ge(x,ne[H]);const ut=ne[0],ze=m(ut)||o,_e=r.convert(x.format,x.colorSpace),fe=r.convert(x.type),pe=C(x.internalFormat,_e,fe,x.colorSpace),Ye=o&&x.isVideoTexture!==!0,Re=Q.__version===void 0||K===!0,it=te.dataReady;let P=A(x,ut,ze);V(s.TEXTURE_CUBE_MAP,x,ze);let ae;if(oe){Ye&&Re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,P,pe,ut.width,ut.height);for(let H=0;H<6;H++){ae=ne[H].mipmaps;for(let ie=0;ie<ae.length;ie++){const ce=ae[ie];x.format!==Yt?_e!==null?Ye?it&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie,0,0,ce.width,ce.height,_e,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie,pe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?it&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie,0,0,ce.width,ce.height,_e,fe,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie,pe,ce.width,ce.height,0,_e,fe,ce.data)}}}else{if(ae=x.mipmaps,Ye&&Re){ae.length>0&&P++;const H=ot(ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,P,pe,H.width,H.height)}for(let H=0;H<6;H++)if(De){Ye?it&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,ne[H].width,ne[H].height,_e,fe,ne[H].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,pe,ne[H].width,ne[H].height,0,_e,fe,ne[H].data);for(let ie=0;ie<ae.length;ie++){const Ve=ae[ie].image[H].image;Ye?it&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie+1,0,0,Ve.width,Ve.height,_e,fe,Ve.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie+1,pe,Ve.width,Ve.height,0,_e,fe,Ve.data)}}else{Ye?it&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,_e,fe,ne[H]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,pe,_e,fe,ne[H]);for(let ie=0;ie<ae.length;ie++){const ce=ae[ie];Ye?it&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie+1,0,0,_e,fe,ce.image[H]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+H,ie+1,pe,_e,fe,ce.image[H])}}}v(x,ze)&&E(s.TEXTURE_CUBE_MAP),Q.__version=te.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ge(T,x,X,K,te,Q){const Ie=r.convert(X.format,X.colorSpace),Me=r.convert(X.type),re=C(X.internalFormat,Ie,Me,X.colorSpace);if(!n.get(x).__hasExternalTextures){const De=Math.max(1,x.width>>Q),ne=Math.max(1,x.height>>Q);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,Q,re,De,ne,x.depth,0,Ie,Me,null):t.texImage2D(te,Q,re,De,ne,0,Ie,Me,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),qe(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,te,n.get(X).__webglTexture,0,ye(x)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,te,n.get(X).__webglTexture,Q),t.bindFramebuffer(s.FRAMEBUFFER,null)}function de(T,x,X){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let K=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(X||qe(x)){const te=x.depthTexture;te&&te.isDepthTexture&&(te.type===Zt?K=s.DEPTH_COMPONENT32F:te.type===Un&&(K=s.DEPTH_COMPONENT24));const Q=ye(x);qe(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,K,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,K,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,K,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const K=ye(x);X&&qe(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,x.width,x.height):qe(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,K,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const K=x.textures;for(let te=0;te<K.length;te++){const Q=K[te],Ie=r.convert(Q.format,Q.colorSpace),Me=r.convert(Q.type),re=C(Q.internalFormat,Ie,Me,Q.colorSpace),oe=ye(x);X&&qe(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,re,x.width,x.height):qe(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,re,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,re,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function $e(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),F(x.depthTexture,0);const K=n.get(x.depthTexture).__webglTexture,te=ye(x);if(x.depthTexture.format===ai)qe(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,K,0);else if(x.depthTexture.format===Oi)qe(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function be(T){const x=n.get(T),X=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");$e(x.__webglFramebuffer,T)}else if(X){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]=s.createRenderbuffer(),de(x.__webglDepthbuffer[K],T,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),de(x.__webglDepthbuffer,T,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function O(T,x,X){const K=n.get(T);x!==void 0&&ge(K.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&be(T)}function Et(T){const x=T.texture,X=n.get(T),K=n.get(x);T.addEventListener("dispose",q);const te=T.textures,Q=T.isWebGLCubeRenderTarget===!0,Ie=te.length>1,Me=m(T)||o;if(Ie||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=x.version,a.memory.textures++),Q){X.__webglFramebuffer=[];for(let re=0;re<6;re++)if(o&&x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer[re]=[];for(let oe=0;oe<x.mipmaps.length;oe++)X.__webglFramebuffer[re][oe]=s.createFramebuffer()}else X.__webglFramebuffer[re]=s.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){X.__webglFramebuffer=[];for(let re=0;re<x.mipmaps.length;re++)X.__webglFramebuffer[re]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Ie)if(i.drawBuffers)for(let re=0,oe=te.length;re<oe;re++){const De=n.get(te[re]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&qe(T)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let re=0;re<te.length;re++){const oe=te[re];X.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[re]);const De=r.convert(oe.format,oe.colorSpace),ne=r.convert(oe.type),ut=C(oe.internalFormat,De,ne,oe.colorSpace,T.isXRRenderTarget===!0),ze=ye(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,ut,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,X.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),de(X.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),V(s.TEXTURE_CUBE_MAP,x,Me);for(let re=0;re<6;re++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let oe=0;oe<x.mipmaps.length;oe++)ge(X.__webglFramebuffer[re][oe],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe);else ge(X.__webglFramebuffer[re],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);v(x,Me)&&E(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let re=0,oe=te.length;re<oe;re++){const De=te[re],ne=n.get(De);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),V(s.TEXTURE_2D,De,Me),ge(X.__webglFramebuffer,T,De,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,0),v(De,Me)&&E(s.TEXTURE_2D)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?re=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,K.__webglTexture),V(re,x,Me),o&&x.mipmaps&&x.mipmaps.length>0)for(let oe=0;oe<x.mipmaps.length;oe++)ge(X.__webglFramebuffer[oe],T,x,s.COLOR_ATTACHMENT0,re,oe);else ge(X.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,re,0);v(x,Me)&&E(re),t.unbindTexture()}T.depthBuffer&&be(T)}function ve(T){const x=m(T)||o,X=T.textures;for(let K=0,te=X.length;K<te;K++){const Q=X[K];if(v(Q,x)){const Ie=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Me=n.get(Q).__webglTexture;t.bindTexture(Ie,Me),E(Ie),t.unbindTexture()}}}function ke(T){if(o&&T.samples>0&&qe(T)===!1){const x=T.textures,X=T.width,K=T.height;let te=s.COLOR_BUFFER_BIT;const Q=[],Ie=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=n.get(T),re=x.length>1;if(re)for(let oe=0;oe<x.length;oe++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){Q.push(s.COLOR_ATTACHMENT0+oe),T.depthBuffer&&Q.push(Ie);const De=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(De===!1&&(T.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),re&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[oe]),De===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ie]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ie])),re){const ne=n.get(x[oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ne,0)}s.blitFramebuffer(0,0,X,K,0,0,X,K,te,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let oe=0;oe<x.length;oe++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,Me.__webglColorRenderbuffer[oe]);const De=n.get(x[oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,De,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function ye(T){return Math.min(i.maxSamples,T.samples)}function qe(T){const x=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Fe(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Ge(T,x){const X=T.colorSpace,K=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===ha||X!==St&&X!==Dn&&(Ke.getTransfer(X)===nt?o===!1?e.has("EXT_sRGB")===!0&&K===Yt?(T.format=ha,T.minFilter=Lt,T.generateMipmaps=!1):x=ll.sRGBToLinear(x):(K!==Yt||te!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),x}function ot(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=b,this.setTexture2D=F,this.setTexture2DArray=W,this.setTexture3D=U,this.setTextureCube=j,this.rebindTextures=O,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=qe}function Hg(s,e,t){const n=t.isWebGL2;function i(r,a=Dn){let o;const c=Ke.getTransfer(a);if(r===kn)return s.UNSIGNED_BYTE;if(r===Zc)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Jc)return s.UNSIGNED_SHORT_5_5_5_1;if(r===sh)return s.BYTE;if(r===rh)return s.SHORT;if(r===Ma)return s.UNSIGNED_SHORT;if(r===$c)return s.INT;if(r===Un)return s.UNSIGNED_INT;if(r===Zt)return s.FLOAT;if(r===as)return n?s.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===ah)return s.ALPHA;if(r===Yt)return s.RGBA;if(r===oh)return s.LUMINANCE;if(r===ch)return s.LUMINANCE_ALPHA;if(r===ai)return s.DEPTH_COMPONENT;if(r===Oi)return s.DEPTH_STENCIL;if(r===ha)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Qc)return s.RED;if(r===el)return s.RED_INTEGER;if(r===lh)return s.RG;if(r===tl)return s.RG_INTEGER;if(r===nl)return s.RGBA_INTEGER;if(r===pr||r===mr||r===gr||r===_r)if(c===nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===pr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===gr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_r)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===pr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===mr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===gr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_r)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$a||r===Za||r===Ja||r===Qa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===$a)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Za)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ja)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===il)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===eo||r===to)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===eo)return c===nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===to)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===no||r===io||r===so||r===ro||r===ao||r===oo||r===co||r===lo||r===uo||r===ho||r===fo||r===po||r===mo||r===go)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===no)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===io)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===so)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ro)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ao)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===oo)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===co)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===lo)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===uo)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ho)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===fo)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===po)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===mo)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===go)return c===nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vr||r===_o||r===vo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===vr)return c===nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_o)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===vo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===uh||r===xo||r===yo||r===Mo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===vr)return o.COMPRESSED_RED_RGTC1_EXT;if(r===xo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ri?n?s.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Gg extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ii extends at{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zg={type:"move"};class Wr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(l,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ii;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new yt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Gn({extensions:{fragDepth:!0},vertexShader:Vg,fragmentShader:Wg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Gt(new sr(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class qg extends Vi{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new Xg,p=t.getContextAttributes();let m=null,S=null;const v=[],E=[],C=new Le;let A=null;const w=new Nt;w.layers.enable(1),w.viewport=new Qe;const N=new Nt;N.layers.enable(2),N.viewport=new Qe;const q=[w,N],y=new Gg;y.layers.enable(1),y.layers.enable(2);let R=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ee=v[V];return ee===void 0&&(ee=new Wr,v[V]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(V){let ee=v[V];return ee===void 0&&(ee=new Wr,v[V]=ee),ee.getGripSpace()},this.getHand=function(V){let ee=v[V];return ee===void 0&&(ee=new Wr,v[V]=ee),ee.getHandSpace()};function Z(V){const ee=E.indexOf(V.inputSource);if(ee===-1)return;const he=v[ee];he!==void 0&&(he.update(V.inputSource,V.frame,l||a),he.dispatchEvent({type:V.type,data:V.inputSource}))}function b(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",b),i.removeEventListener("inputsourceschange",B);for(let V=0;V<v.length;V++){const ee=E[V];ee!==null&&(E[V]=null,v[V].disconnect(ee))}R=null,$=null,_.reset(),e.setRenderTarget(m),f=null,d=null,h=null,i=null,S=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",b),i.addEventListener("inputsourceschange",B),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,ee),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new ci(f.framebufferWidth,f.framebufferHeight,{format:Yt,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ee=null,he=null,Ae=null;p.depth&&(Ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=p.stencil?Oi:ai,he=p.stencil?ri:Un);const ge={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new ci(d.textureWidth,d.textureHeight,{format:Yt,type:kn,depthTexture:new xl(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const de=e.properties.get(S);de.__ignoreDepthValues=d.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function B(V){for(let ee=0;ee<V.removed.length;ee++){const he=V.removed[ee],Ae=E.indexOf(he);Ae>=0&&(E[Ae]=null,v[Ae].disconnect(he))}for(let ee=0;ee<V.added.length;ee++){const he=V.added[ee];let Ae=E.indexOf(he);if(Ae===-1){for(let de=0;de<v.length;de++)if(de>=E.length){E.push(he),Ae=de;break}else if(E[de]===null){E[de]=he,Ae=de;break}if(Ae===-1)break}const ge=v[Ae];ge&&ge.connect(he)}}const D=new L,F=new L;function W(V,ee,he){D.setFromMatrixPosition(ee.matrixWorld),F.setFromMatrixPosition(he.matrixWorld);const Ae=D.distanceTo(F),ge=ee.projectionMatrix.elements,de=he.projectionMatrix.elements,$e=ge[14]/(ge[10]-1),be=ge[14]/(ge[10]+1),O=(ge[9]+1)/ge[5],Et=(ge[9]-1)/ge[5],ve=(ge[8]-1)/ge[0],ke=(de[8]+1)/de[0],ye=$e*ve,qe=$e*ke,Fe=Ae/(-ve+ke),Ge=Fe*-ve;ee.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ge),V.translateZ(Fe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const ot=$e+Fe,T=be+Fe,x=ye-Ge,X=qe+(Ae-Ge),K=O*be/T*ot,te=Et*be/T*ot;V.projectionMatrix.makePerspective(x,X,K,te,ot,T),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function U(V,ee){ee===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ee.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),y.near=N.near=w.near=V.near,y.far=N.far=w.far=V.far,(R!==y.near||$!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,$=y.far,w.near=R,w.far=$,N.near=R,N.far=$,w.updateProjectionMatrix(),N.updateProjectionMatrix(),V.updateProjectionMatrix());const ee=V.parent,he=y.cameras;U(y,ee);for(let Ae=0;Ae<he.length;Ae++)U(he[Ae],ee);he.length===2?W(y,w,N):y.projectionMatrix.copy(w.projectionMatrix),j(V,y,ee)};function j(V,ee,he){he===null?V.matrix.copy(ee.matrixWorld):(V.matrix.copy(he.matrixWorld),V.matrix.invert(),V.matrix.multiply(ee.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ee.projectionMatrix),V.projectionMatrixInverse.copy(ee.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Bi*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let Y=null;function J(V,ee){if(u=ee.getViewerPose(l||a),g=ee,u!==null){const he=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ae=!1;he.length!==y.cameras.length&&(y.cameras.length=0,Ae=!0);for(let de=0;de<he.length;de++){const $e=he[de];let be=null;if(f!==null)be=f.getViewport($e);else{const Et=h.getViewSubImage(d,$e);be=Et.viewport,de===0&&(e.setRenderTargetTextures(S,Et.colorTexture,d.ignoreDepthValues?void 0:Et.depthStencilTexture),e.setRenderTarget(S))}let O=q[de];O===void 0&&(O=new Nt,O.layers.enable(de),O.viewport=new Qe,q[de]=O),O.matrix.fromArray($e.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray($e.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(be.x,be.y,be.width,be.height),de===0&&(y.matrix.copy(O.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ae===!0&&y.cameras.push(O)}const ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")){const de=h.getDepthInformation(he[0]);de&&de.isValid&&de.texture&&_.init(e,de,i.renderState)}}for(let he=0;he<v.length;he++){const Ae=E[he],ge=v[he];Ae!==null&&ge!==void 0&&ge.update(Ae,ee,l||a)}_.render(e,y),Y&&Y(V,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}const Se=new vl;Se.setAnimationLoop(J),this.setAnimationLoop=function(V){Y=V},this.dispose=function(){}}}const $n=new an,Yg=new Pe;function jg(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ml(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,v,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),h(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&f(p,m,E)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,S,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ot&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ot&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),v=S.envMap,E=S.envMapRotation;if(v&&(p.envMap.value=v,$n.copy(E),$n.x*=-1,$n.y*=-1,$n.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),p.envMapRotation.value.setFromMatrix4(Yg.makeRotationFromEuler($n)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const C=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*C,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,S,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ot&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Kg(s,e,t,n){let i={},r={},a=[];const o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,v){const E=v.program;n.uniformBlockBinding(S,E)}function l(S,v){let E=i[S.id];E===void 0&&(g(S),E=u(S),i[S.id]=E,S.addEventListener("dispose",p));const C=v.program;n.updateUBOMapping(S,C);const A=e.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function u(S){const v=h();S.__bindingPointIndex=v;const E=s.createBuffer(),C=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,C,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,E),E}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const v=i[S.id],E=S.uniforms,C=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let A=0,w=E.length;A<w;A++){const N=Array.isArray(E[A])?E[A]:[E[A]];for(let q=0,y=N.length;q<y;q++){const R=N[q];if(f(R,A,q,C)===!0){const $=R.__offset,Z=Array.isArray(R.value)?R.value:[R.value];let b=0;for(let B=0;B<Z.length;B++){const D=Z[B],F=_(D);typeof D=="number"||typeof D=="boolean"?(R.__data[0]=D,s.bufferSubData(s.UNIFORM_BUFFER,$+b,R.__data)):D.isMatrix3?(R.__data[0]=D.elements[0],R.__data[1]=D.elements[1],R.__data[2]=D.elements[2],R.__data[3]=0,R.__data[4]=D.elements[3],R.__data[5]=D.elements[4],R.__data[6]=D.elements[5],R.__data[7]=0,R.__data[8]=D.elements[6],R.__data[9]=D.elements[7],R.__data[10]=D.elements[8],R.__data[11]=0):(D.toArray(R.__data,b),b+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(S,v,E,C){const A=S.value,w=v+"_"+E;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const N=C[w];if(typeof A=="number"||typeof A=="boolean"){if(N!==A)return C[w]=A,!0}else if(N.equals(A)===!1)return N.copy(A),!0}return!1}function g(S){const v=S.uniforms;let E=0;const C=16;for(let w=0,N=v.length;w<N;w++){const q=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,R=q.length;y<R;y++){const $=q[y],Z=Array.isArray($.value)?$.value:[$.value];for(let b=0,B=Z.length;b<B;b++){const D=Z[b],F=_(D),W=E%C;W!==0&&C-W<F.boundary&&(E+=C-W),$.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=E,E+=F.storage}}}const A=E%C;return A>0&&(E+=C-A),S.__size=E,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function p(S){const v=S.target;v.removeEventListener("dispose",p);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function m(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:c,update:l,dispose:m}}class $g{constructor(e={}){const{canvas:t=Bh(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=Bn,this.toneMappingExposure=1;const v=this;let E=!1,C=0,A=0,w=null,N=-1,q=null;const y=new Qe,R=new Qe;let $=null;const Z=new Te(0);let b=0,B=t.width,D=t.height,F=1,W=null,U=null;const j=new Qe(0,0,B,D),Y=new Qe(0,0,B,D);let J=!1;const Se=new Aa;let V=!1,ee=!1,he=null;const Ae=new Pe,ge=new Le,de=new L,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return w===null?F:1}let O=n;function Et(M,I){for(let G=0;G<M.length;G++){const z=M[G],k=t.getContext(z,I);if(k!==null)return k}return null}try{const M={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ya}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ae,!1),O===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),O=Et(I,M),O===null)throw Et(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let ve,ke,ye,qe,Fe,Ge,ot,T,x,X,K,te,Q,Ie,Me,re,oe,De,ne,ut,ze,_e,fe,pe;function Ye(){ve=new tm(O),ke=new Kp(O,ve,e),ve.init(ke),_e=new Hg(O,ve,ke),ye=new Bg(O,ve,ke),qe=new sm(O),Fe=new Tg,Ge=new kg(O,ve,ye,Fe,ke,_e,qe),ot=new Zp(v),T=new em(v),x=new ld(O,ke),fe=new Yp(O,ve,x,ke),X=new nm(O,x,qe,fe),K=new cm(O,X,x,qe),ne=new om(O,ke,Ge),re=new $p(Fe),te=new Eg(v,ot,T,ve,ke,fe,re),Q=new jg(v,Fe),Ie=new bg,Me=new Ig(ve,ke),De=new qp(v,ot,T,ye,K,d,c),oe=new Fg(v,K,ke),pe=new Kg(O,qe,ke,ye),ut=new jp(O,ve,qe,ke),ze=new im(O,ve,qe,ke),qe.programs=te.programs,v.capabilities=ke,v.extensions=ve,v.properties=Fe,v.renderLists=Ie,v.shadowMap=oe,v.state=ye,v.info=qe}Ye();const Re=new qg(v,O);this.xr=Re,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const M=ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(M){M!==void 0&&(F=M,this.setSize(B,D,!1))},this.getSize=function(M){return M.set(B,D)},this.setSize=function(M,I,G=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,D=I,t.width=Math.floor(M*F),t.height=Math.floor(I*F),G===!0&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(B*F,D*F).floor()},this.setDrawingBufferSize=function(M,I,G){B=M,D=I,F=G,t.width=Math.floor(M*G),t.height=Math.floor(I*G),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(j)},this.setViewport=function(M,I,G,z){M.isVector4?j.set(M.x,M.y,M.z,M.w):j.set(M,I,G,z),ye.viewport(y.copy(j).multiplyScalar(F).round())},this.getScissor=function(M){return M.copy(Y)},this.setScissor=function(M,I,G,z){M.isVector4?Y.set(M.x,M.y,M.z,M.w):Y.set(M,I,G,z),ye.scissor(R.copy(Y).multiplyScalar(F).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(M){ye.setScissorTest(J=M)},this.setOpaqueSort=function(M){W=M},this.setTransparentSort=function(M){U=M},this.getClearColor=function(M){return M.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(M=!0,I=!0,G=!0){let z=0;if(M){let k=!1;if(w!==null){const ue=w.texture.format;k=ue===nl||ue===tl||ue===el}if(k){const ue=w.texture.type,me=ue===kn||ue===Un||ue===Ma||ue===ri||ue===Zc||ue===Jc,xe=De.getClearColor(),Ee=De.getClearAlpha(),Be=xe.r,we=xe.g,Ce=xe.b;me?(f[0]=Be,f[1]=we,f[2]=Ce,f[3]=Ee,O.clearBufferuiv(O.COLOR,0,f)):(g[0]=Be,g[1]=we,g[2]=Ce,g[3]=Ee,O.clearBufferiv(O.COLOR,0,g))}else z|=O.COLOR_BUFFER_BIT}I&&(z|=O.DEPTH_BUFFER_BIT),G&&(z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Ie.dispose(),Me.dispose(),Fe.dispose(),ot.dispose(),T.dispose(),K.dispose(),fe.dispose(),pe.dispose(),te.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",zt),Re.removeEventListener("sessionend",tt),he&&(he.dispose(),he=null),It.stop()};function it(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const M=qe.autoReset,I=oe.enabled,G=oe.autoUpdate,z=oe.needsUpdate,k=oe.type;Ye(),qe.autoReset=M,oe.enabled=I,oe.autoUpdate=G,oe.needsUpdate=z,oe.type=k}function ae(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function H(M){const I=M.target;I.removeEventListener("dispose",H),ie(I)}function ie(M){ce(M),Fe.remove(M)}function ce(M){const I=Fe.get(M).programs;I!==void 0&&(I.forEach(function(G){te.releaseProgram(G)}),M.isShaderMaterial&&te.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,G,z,k,ue){I===null&&(I=$e);const me=k.isMesh&&k.matrixWorld.determinant()<0,xe=Hl(M,I,G,z,k);ye.setMaterial(z,me);let Ee=G.index,Be=1;if(z.wireframe===!0){if(Ee=X.getWireframeAttribute(G),Ee===void 0)return;Be=2}const we=G.drawRange,Ce=G.attributes.position;let ct=we.start*Be,Ft=(we.start+we.count)*Be;ue!==null&&(ct=Math.max(ct,ue.start*Be),Ft=Math.min(Ft,(ue.start+ue.count)*Be)),Ee!==null?(ct=Math.max(ct,0),Ft=Math.min(Ft,Ee.count)):Ce!=null&&(ct=Math.max(ct,0),Ft=Math.min(Ft,Ce.count));const mt=Ft-ct;if(mt<0||mt===1/0)return;fe.setup(k,z,xe,G,Ee);let ln,rt=ut;if(Ee!==null&&(ln=x.get(Ee),rt=ze,rt.setIndex(ln)),k.isMesh)z.wireframe===!0?(ye.setLineWidth(z.wireframeLinewidth*be()),rt.setMode(O.LINES)):rt.setMode(O.TRIANGLES);else if(k.isLine){let Ue=z.linewidth;Ue===void 0&&(Ue=1),ye.setLineWidth(Ue*be()),k.isLineSegments?rt.setMode(O.LINES):k.isLineLoop?rt.setMode(O.LINE_LOOP):rt.setMode(O.LINE_STRIP)}else k.isPoints?rt.setMode(O.POINTS):k.isSprite&&rt.setMode(O.TRIANGLES);if(k.isBatchedMesh)rt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)rt.renderInstances(ct,mt,k.count);else if(G.isInstancedBufferGeometry){const Ue=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,lr=Math.min(G.instanceCount,Ue);rt.renderInstances(ct,mt,lr)}else rt.render(ct,mt)};function Ve(M,I,G){M.transparent===!0&&M.side===nn&&M.forceSinglePass===!1?(M.side=Ot,M.needsUpdate=!0,ps(M,I,G),M.side=Mn,M.needsUpdate=!0,ps(M,I,G),M.side=nn):ps(M,I,G)}this.compile=function(M,I,G=null){G===null&&(G=M),p=Me.get(G),p.init(),S.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),M!==G&&M.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(v._useLegacyLights);const z=new Set;return M.traverse(function(k){const ue=k.material;if(ue)if(Array.isArray(ue))for(let me=0;me<ue.length;me++){const xe=ue[me];Ve(xe,G,k),z.add(xe)}else Ve(ue,G,k),z.add(ue)}),S.pop(),p=null,z},this.compileAsync=function(M,I,G=null){const z=this.compile(M,I,G);return new Promise(k=>{function ue(){if(z.forEach(function(me){Fe.get(me).currentProgram.isReady()&&z.delete(me)}),z.size===0){k(M);return}setTimeout(ue,10)}ve.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let et=null;function Tt(M){et&&et(M)}function zt(){It.stop()}function tt(){It.start()}const It=new vl;It.setAnimationLoop(Tt),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(M){et=M,Re.setAnimationLoop(M),M===null?It.stop():It.start()},Re.addEventListener("sessionstart",zt),Re.addEventListener("sessionend",tt),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(I),I=Re.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,I,w),p=Me.get(M,S.length),p.init(),S.push(p),Ae.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Se.setFromProjectionMatrix(Ae),ee=this.localClippingEnabled,V=re.init(this.clippingPlanes,ee),_=Ie.get(M,m.length),_.init(),m.push(_),en(M,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(W,U),this.info.render.frame++,V===!0&&re.beginShadows();const G=p.state.shadowsArray;if(oe.render(G,M,I),V===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1)&&De.render(_,M),p.setupLights(v._useLegacyLights),I.isArrayCamera){const z=I.cameras;for(let k=0,ue=z.length;k<ue;k++){const me=z[k];Oa(_,M,me,me.viewport)}}else Oa(_,M,I);w!==null&&(Ge.updateMultisampleRenderTarget(w),Ge.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(v,M,I),fe.resetDefaultState(),N=-1,q=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function en(M,I,G,z){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Se.intersectsSprite(M)){z&&de.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ae);const me=K.update(M),xe=M.material;xe.visible&&_.push(M,me,xe,G,de.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Se.intersectsObject(M))){const me=K.update(M),xe=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),de.copy(M.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),de.copy(me.boundingSphere.center)),de.applyMatrix4(M.matrixWorld).applyMatrix4(Ae)),Array.isArray(xe)){const Ee=me.groups;for(let Be=0,we=Ee.length;Be<we;Be++){const Ce=Ee[Be],ct=xe[Ce.materialIndex];ct&&ct.visible&&_.push(M,me,ct,G,de.z,Ce)}}else xe.visible&&_.push(M,me,xe,G,de.z,null)}}const ue=M.children;for(let me=0,xe=ue.length;me<xe;me++)en(ue[me],I,G,z)}function Oa(M,I,G,z){const k=M.opaque,ue=M.transmissive,me=M.transparent;p.setupLightsView(G),V===!0&&re.setGlobalState(v.clippingPlanes,G),ue.length>0&&kl(k,ue,I,G),z&&ye.viewport(y.copy(z)),k.length>0&&fs(k,I,G),ue.length>0&&fs(ue,I,G),me.length>0&&fs(me,I,G),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function kl(M,I,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const ue=ke.isWebGL2;he===null&&(he=new ci(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?as:kn,minFilter:xn,samples:ue?4:0})),v.getDrawingBufferSize(ge),ue?he.setSize(ge.x,ge.y):he.setSize(Js(ge.x),Js(ge.y));const me=v.getRenderTarget();v.setRenderTarget(he),v.getClearColor(Z),b=v.getClearAlpha(),b<1&&v.setClearColor(16777215,.5),v.clear();const xe=v.toneMapping;v.toneMapping=Bn,fs(M,G,z),Ge.updateMultisampleRenderTarget(he),Ge.updateRenderTargetMipmap(he);let Ee=!1;for(let Be=0,we=I.length;Be<we;Be++){const Ce=I[Be],ct=Ce.object,Ft=Ce.geometry,mt=Ce.material,ln=Ce.group;if(mt.side===nn&&ct.layers.test(z.layers)){const rt=mt.side;mt.side=Ot,mt.needsUpdate=!0,Fa(ct,G,z,Ft,mt,ln),mt.side=rt,mt.needsUpdate=!0,Ee=!0}}Ee===!0&&(Ge.updateMultisampleRenderTarget(he),Ge.updateRenderTargetMipmap(he)),v.setRenderTarget(me),v.setClearColor(Z,b),v.toneMapping=xe}function fs(M,I,G){const z=I.isScene===!0?I.overrideMaterial:null;for(let k=0,ue=M.length;k<ue;k++){const me=M[k],xe=me.object,Ee=me.geometry,Be=z===null?me.material:z,we=me.group;xe.layers.test(G.layers)&&Fa(xe,I,G,Ee,Be,we)}}function Fa(M,I,G,z,k,ue){M.onBeforeRender(v,I,G,z,k,ue),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(v,I,G,z,M,ue),k.transparent===!0&&k.side===nn&&k.forceSinglePass===!1?(k.side=Ot,k.needsUpdate=!0,v.renderBufferDirect(G,I,z,k,M,ue),k.side=Mn,k.needsUpdate=!0,v.renderBufferDirect(G,I,z,k,M,ue),k.side=nn):v.renderBufferDirect(G,I,z,k,M,ue),M.onAfterRender(v,I,G,z,k,ue)}function ps(M,I,G){I.isScene!==!0&&(I=$e);const z=Fe.get(M),k=p.state.lights,ue=p.state.shadowsArray,me=k.state.version,xe=te.getParameters(M,k.state,ue,I,G),Ee=te.getProgramCacheKey(xe);let Be=z.programs;z.environment=M.isMeshStandardMaterial?I.environment:null,z.fog=I.fog,z.envMap=(M.isMeshStandardMaterial?T:ot).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",H),Be=new Map,z.programs=Be);let we=Be.get(Ee);if(we!==void 0){if(z.currentProgram===we&&z.lightsStateVersion===me)return ka(M,xe),we}else xe.uniforms=te.getUniforms(M),M.onBuild(G,xe,v),M.onBeforeCompile(xe,v),we=te.acquireProgram(xe,Ee),Be.set(Ee,we),z.uniforms=xe.uniforms;const Ce=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=re.uniform),ka(M,xe),z.needsLights=zl(M),z.lightsStateVersion=me,z.needsLights&&(Ce.ambientLightColor.value=k.state.ambient,Ce.lightProbe.value=k.state.probe,Ce.directionalLights.value=k.state.directional,Ce.directionalLightShadows.value=k.state.directionalShadow,Ce.spotLights.value=k.state.spot,Ce.spotLightShadows.value=k.state.spotShadow,Ce.rectAreaLights.value=k.state.rectArea,Ce.ltc_1.value=k.state.rectAreaLTC1,Ce.ltc_2.value=k.state.rectAreaLTC2,Ce.pointLights.value=k.state.point,Ce.pointLightShadows.value=k.state.pointShadow,Ce.hemisphereLights.value=k.state.hemi,Ce.directionalShadowMap.value=k.state.directionalShadowMap,Ce.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ce.spotShadowMap.value=k.state.spotShadowMap,Ce.spotLightMatrix.value=k.state.spotLightMatrix,Ce.spotLightMap.value=k.state.spotLightMap,Ce.pointShadowMap.value=k.state.pointShadowMap,Ce.pointShadowMatrix.value=k.state.pointShadowMatrix),z.currentProgram=we,z.uniformsList=null,we}function Ba(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Ws.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function ka(M,I){const G=Fe.get(M);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function Hl(M,I,G,z,k){I.isScene!==!0&&(I=$e),Ge.resetTextureUnits();const ue=I.fog,me=z.isMeshStandardMaterial?I.environment:null,xe=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:St,Ee=(z.isMeshStandardMaterial?T:ot).get(z.envMap||me),Be=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,we=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!G.morphAttributes.position,ct=!!G.morphAttributes.normal,Ft=!!G.morphAttributes.color;let mt=Bn;z.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(mt=v.toneMapping);const ln=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,rt=ln!==void 0?ln.length:0,Ue=Fe.get(z),lr=p.state.lights;if(V===!0&&(ee===!0||M!==q)){const Vt=M===q&&z.id===N;re.setState(z,M,Vt)}let st=!1;z.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==lr.state.version||Ue.outputColorSpace!==xe||k.isBatchedMesh&&Ue.batching===!1||!k.isBatchedMesh&&Ue.batching===!0||k.isInstancedMesh&&Ue.instancing===!1||!k.isInstancedMesh&&Ue.instancing===!0||k.isSkinnedMesh&&Ue.skinning===!1||!k.isSkinnedMesh&&Ue.skinning===!0||k.isInstancedMesh&&Ue.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ue.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ue.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ue.instancingMorph===!1&&k.morphTexture!==null||Ue.envMap!==Ee||z.fog===!0&&Ue.fog!==ue||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==re.numPlanes||Ue.numIntersection!==re.numIntersection)||Ue.vertexAlphas!==Be||Ue.vertexTangents!==we||Ue.morphTargets!==Ce||Ue.morphNormals!==ct||Ue.morphColors!==Ft||Ue.toneMapping!==mt||ke.isWebGL2===!0&&Ue.morphTargetsCount!==rt)&&(st=!0):(st=!0,Ue.__version=z.version);let Vn=Ue.currentProgram;st===!0&&(Vn=ps(z,I,k));let Ha=!1,Yi=!1,ur=!1;const wt=Vn.getUniforms(),Wn=Ue.uniforms;if(ye.useProgram(Vn.program)&&(Ha=!0,Yi=!0,ur=!0),z.id!==N&&(N=z.id,Yi=!0),Ha||q!==M){wt.setValue(O,"projectionMatrix",M.projectionMatrix),wt.setValue(O,"viewMatrix",M.matrixWorldInverse);const Vt=wt.map.cameraPosition;Vt!==void 0&&Vt.setValue(O,de.setFromMatrixPosition(M.matrixWorld)),ke.logarithmicDepthBuffer&&wt.setValue(O,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&wt.setValue(O,"isOrthographic",M.isOrthographicCamera===!0),q!==M&&(q=M,Yi=!0,ur=!0)}if(k.isSkinnedMesh){wt.setOptional(O,k,"bindMatrix"),wt.setOptional(O,k,"bindMatrixInverse");const Vt=k.skeleton;Vt&&(ke.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),wt.setValue(O,"boneTexture",Vt.boneTexture,Ge)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(wt.setOptional(O,k,"batchingTexture"),wt.setValue(O,"batchingTexture",k._matricesTexture,Ge));const hr=G.morphAttributes;if((hr.position!==void 0||hr.normal!==void 0||hr.color!==void 0&&ke.isWebGL2===!0)&&ne.update(k,G,Vn),(Yi||Ue.receiveShadow!==k.receiveShadow)&&(Ue.receiveShadow=k.receiveShadow,wt.setValue(O,"receiveShadow",k.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Wn.envMap.value=Ee,Wn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),Yi&&(wt.setValue(O,"toneMappingExposure",v.toneMappingExposure),Ue.needsLights&&Gl(Wn,ur),ue&&z.fog===!0&&Q.refreshFogUniforms(Wn,ue),Q.refreshMaterialUniforms(Wn,z,F,D,he),Ws.upload(O,Ba(Ue),Wn,Ge)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ws.upload(O,Ba(Ue),Wn,Ge),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&wt.setValue(O,"center",k.center),wt.setValue(O,"modelViewMatrix",k.modelViewMatrix),wt.setValue(O,"normalMatrix",k.normalMatrix),wt.setValue(O,"modelMatrix",k.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Vt=z.uniformsGroups;for(let dr=0,Vl=Vt.length;dr<Vl;dr++)if(ke.isWebGL2){const Ga=Vt[dr];pe.update(Ga,Vn),pe.bind(Ga,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function Gl(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function zl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,I,G){Fe.get(M.texture).__webglTexture=I,Fe.get(M.depthTexture).__webglTexture=G;const z=Fe.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=G===void 0,z.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const G=Fe.get(M);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,G=0){w=M,C=I,A=G;let z=!0,k=null,ue=!1,me=!1;if(M){const Ee=Fe.get(M);Ee.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(O.FRAMEBUFFER,null),z=!1):Ee.__webglFramebuffer===void 0?Ge.setupRenderTarget(M):Ee.__hasExternalTextures&&Ge.rebindTextures(M,Fe.get(M.texture).__webglTexture,Fe.get(M.depthTexture).__webglTexture);const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(me=!0);const we=Fe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[I])?k=we[I][G]:k=we[I],ue=!0):ke.isWebGL2&&M.samples>0&&Ge.useMultisampledRTT(M)===!1?k=Fe.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?k=we[G]:k=we,y.copy(M.viewport),R.copy(M.scissor),$=M.scissorTest}else y.copy(j).multiplyScalar(F).floor(),R.copy(Y).multiplyScalar(F).floor(),$=J;if(ye.bindFramebuffer(O.FRAMEBUFFER,k)&&ke.drawBuffers&&z&&ye.drawBuffers(M,k),ye.viewport(y),ye.scissor(R),ye.setScissorTest($),ue){const Ee=Fe.get(M.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ee.__webglTexture,G)}else if(me){const Ee=Fe.get(M.texture),Be=I||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ee.__webglTexture,G||0,Be)}N=-1},this.readRenderTargetPixels=function(M,I,G,z,k,ue,me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){ye.bindFramebuffer(O.FRAMEBUFFER,xe);try{const Ee=M.texture,Be=Ee.format,we=Ee.type;if(Be!==Yt&&_e.convert(Be)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=we===as&&(ve.has("EXT_color_buffer_half_float")||ke.isWebGL2&&ve.has("EXT_color_buffer_float"));if(we!==kn&&_e.convert(we)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===Zt&&(ke.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-z&&G>=0&&G<=M.height-k&&O.readPixels(I,G,z,k,_e.convert(Be),_e.convert(we),ue)}finally{const Ee=w!==null?Fe.get(w).__webglFramebuffer:null;ye.bindFramebuffer(O.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(M,I,G=0){const z=Math.pow(2,-G),k=Math.floor(I.image.width*z),ue=Math.floor(I.image.height*z);Ge.setTexture2D(I,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,M.x,M.y,k,ue),ye.unbindTexture()},this.copyTextureToTexture=function(M,I,G,z=0){const k=I.image.width,ue=I.image.height,me=_e.convert(G.format),xe=_e.convert(G.type);Ge.setTexture2D(G,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment),I.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,z,M.x,M.y,k,ue,me,xe,I.image.data):I.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,z,M.x,M.y,I.mipmaps[0].width,I.mipmaps[0].height,me,I.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,z,M.x,M.y,me,xe,I.image),z===0&&G.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(M,I,G,z,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=Math.round(M.max.x-M.min.x),me=Math.round(M.max.y-M.min.y),xe=M.max.z-M.min.z+1,Ee=_e.convert(z.format),Be=_e.convert(z.type);let we;if(z.isData3DTexture)Ge.setTexture3D(z,0),we=O.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Ge.setTexture2DArray(z,0),we=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const Ce=O.getParameter(O.UNPACK_ROW_LENGTH),ct=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ft=O.getParameter(O.UNPACK_SKIP_PIXELS),mt=O.getParameter(O.UNPACK_SKIP_ROWS),ln=O.getParameter(O.UNPACK_SKIP_IMAGES),rt=G.isCompressedTexture?G.mipmaps[k]:G.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,rt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,rt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,M.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,M.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,M.min.z),G.isDataTexture||G.isData3DTexture?O.texSubImage3D(we,k,I.x,I.y,I.z,ue,me,xe,Ee,Be,rt.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(we,k,I.x,I.y,I.z,ue,me,xe,Ee,rt.data):O.texSubImage3D(we,k,I.x,I.y,I.z,ue,me,xe,Ee,Be,rt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ce),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ft),O.pixelStorei(O.UNPACK_SKIP_ROWS,mt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ln),k===0&&z.generateMipmaps&&O.generateMipmap(we),ye.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Ge.setTextureCube(M,0):M.isData3DTexture?Ge.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ge.setTexture2DArray(M,0):Ge.setTexture2D(M,0),ye.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,ye.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Sa?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===ir?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Zg extends $g{}Zg.prototype.isWebGL1Renderer=!0;class J0 extends at{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ua,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return cl("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Dt=new L;class Ra{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Jt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Jt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Jt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Jt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Jt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ra(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const pc=new L,mc=new Qe,gc=new Qe,Qg=new L,_c=new Pe,Fs=new L,Xr=new on,vc=new Pe,qr=new us;class e_ extends Gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ka,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Sn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fs),this.boundingBox.expandByPoint(Fs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new on),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Fs),this.boundingSphere.expandByPoint(Fs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(i),e.ray.intersectsSphere(Xr)!==!1&&(vc.copy(i).invert(),qr.copy(e.ray).applyMatrix4(vc),!(this.boundingBox!==null&&qr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ka?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ih?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;mc.fromBufferAttribute(i.attributes.skinIndex,e),gc.fromBufferAttribute(i.attributes.skinWeight,e),pc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=gc.getComponent(r);if(a!==0){const o=mc.getComponent(r);_c.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Qg.copy(pc).applyMatrix4(_c),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Al extends at{constructor(){super(),this.isBone=!0,this.type="Bone"}}class bl extends yt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=vt,u=vt,h,d){super(null,a,o,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xc=new Pe,t_=new Pe;class Ca{constructor(e=[],t=[]){this.uuid=Qt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:t_;xc.multiplyMatrices(o,t[r]),xc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Ca(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new bl(t,e,e,Yt,Zt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Al),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class pa extends Mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const wi=new Pe,yc=new Pe,Bs=[],Mc=new Sn,n_=new Pe,Ji=new Gt,Qi=new on;class i_ extends Gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,n_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),Mc.copy(e.boundingBox).applyMatrix4(wi),this.boundingBox.union(Mc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,wi),Qi.copy(e.boundingSphere).applyMatrix4(wi),this.boundingSphere.union(Qi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ji.geometry=this.geometry,Ji.material=this.material,Ji.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qi.copy(this.boundingSphere),Qi.applyMatrix4(n),e.ray.intersectsSphere(Qi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,wi),yc.multiplyMatrices(n,wi),Ji.matrixWorld=yc,Ji.raycast(e,Bs);for(let a=0,o=Bs.length;a<o;a++){const c=Bs[a];c.instanceId=r,c.object=this,t.push(c)}Bs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new pa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bl(new Float32Array(i*this.count),i,this.count,Qc,Zt));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new L,Ec=new L,Tc=new Pe,Yr=new us,ks=new on;class La extends at{constructor(e=new Pt,t=new ar){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Sc.fromBufferAttribute(t,i-1),Ec.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Sc.distanceTo(Ec);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ks.copy(n.boundingSphere),ks.applyMatrix4(i),ks.radius+=r,e.ray.intersectsSphere(ks)===!1)return;Tc.copy(i).invert(),Yr.copy(e.ray).applyMatrix4(Tc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new L,u=new L,h=new L,d=new L,f=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const m=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let v=m,E=S-1;v<E;v+=f){const C=g.getX(v),A=g.getX(v+1);if(l.fromBufferAttribute(p,C),u.fromBufferAttribute(p,A),Yr.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const N=e.ray.origin.distanceTo(d);N<e.near||N>e.far||t.push({distance:N,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),S=Math.min(p.count,a.start+a.count);for(let v=m,E=S-1;v<E;v+=f){if(l.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),Yr.distanceSqToSegment(l,u,d,h)>c)continue;d.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(d);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const Ac=new L,bc=new L;class Pa extends La{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ac.fromBufferAttribute(t,i),bc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ac.distanceTo(bc);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class s_ extends La{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class wl extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const wc=new Pe,ma=new us,Hs=new on,Gs=new L;class r_ extends at{constructor(e=new Pt,t=new wl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(i),Hs.radius+=r,e.ray.intersectsSphere(Hs)===!1)return;wc.copy(i).invert(),ma.copy(e.ray).applyMatrix4(wc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const p=l.getX(g);Gs.fromBufferAttribute(h,p),Rc(Gs,p,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Gs.fromBufferAttribute(h,g),Rc(Gs,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Rc(s,e,t,n,i,r,a){const o=ma.distanceSqToPoint(s);if(o<t){const c=new L;ma.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Rl extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new L,u=new Le;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(o,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Cl extends Pt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],p=n/2;let m=0;S(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new lt(h,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function S(){const E=new L,C=new L;let A=0;const w=(t-e)/n;for(let N=0;N<=r;N++){const q=[],y=N/r,R=y*(t-e)+e;for(let $=0;$<=i;$++){const Z=$/i,b=Z*c+o,B=Math.sin(b),D=Math.cos(b);C.x=R*B,C.y=-y*n+p,C.z=R*D,h.push(C.x,C.y,C.z),E.set(B,w,D).normalize(),d.push(E.x,E.y,E.z),f.push(Z,1-y),q.push(g++)}_.push(q)}for(let N=0;N<i;N++)for(let q=0;q<r;q++){const y=_[q][N],R=_[q+1][N],$=_[q+1][N+1],Z=_[q][N+1];u.push(y,R,Z),u.push(R,$,Z),A+=6}l.addGroup(m,A,0),m+=A}function v(E){const C=g,A=new Le,w=new L;let N=0;const q=E===!0?e:t,y=E===!0?1:-1;for(let $=1;$<=i;$++)h.push(0,p*y,0),d.push(0,y,0),f.push(.5,.5),g++;const R=g;for(let $=0;$<=i;$++){const b=$/i*c+o,B=Math.cos(b),D=Math.sin(b);w.x=q*D,w.y=p*y,w.z=q*B,h.push(w.x,w.y,w.z),d.push(0,y,0),A.x=B*.5+.5,A.y=D*.5*y+.5,f.push(A.x,A.y),g++}for(let $=0;$<i;$++){const Z=C+$,b=R+$;E===!0?u.push(b,b+1,Z):u.push(b+1,b,Z),N+=3}l.addGroup(m,N,E===!0?1:2),m+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ll extends Pt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],c=[],l=[],u=[];let h=e;const d=(t-e)/i,f=new L,g=new Le;for(let _=0;_<=i;_++){for(let p=0;p<=n;p++){const m=r+p/n*a;f.x=h*Math.cos(m),f.y=h*Math.sin(m),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<i;_++){const p=_*(n+1);for(let m=0;m<n;m++){const S=m+p,v=S,E=S+n+1,C=S+n+2,A=S+1;o.push(v,E,A),o.push(E,C,A)}}this.setIndex(o),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ia extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class En extends Ia{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function zs(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function a_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function o_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Cc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Pl(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class ds{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class c_ extends ds{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:So,endingEnd:So}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Eo:r=e,o=2*t-n;break;case To:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Eo:a=e,c=2*n-t;break;case To:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,m=-d*p+2*d*_-d*g,S=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-f)*p+(1.5+f)*_+.5*g,E=f*p-f*_;for(let C=0;C!==o;++C)r[C]=m*a[u+C]+S*a[l+C]+v*a[c+C]+E*a[h+C];return r}}class l_ extends ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}}class u_ extends ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class cn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zs(t,this.TimeBufferType),this.values=zs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zs(e.times,Array),values:zs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new u_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new l_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new c_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case os:t=this.InterpolantFactoryMethodDiscrete;break;case Fi:t=this.InterpolantFactoryMethodLinear;break;case xr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return os;case this.InterpolantFactoryMethodLinear:return Fi;case this.InterpolantFactoryMethodSmooth:return xr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&a_(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===xr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const _=t[h+g];if(_!==t[d+g]||_!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=Fi;class Xi extends cn{}Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=os;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class Il extends cn{}Il.prototype.ValueTypeName="color";class Hi extends cn{}Hi.prototype.ValueTypeName="number";class h_ extends ds{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)zn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class li extends cn{InterpolantFactoryMethodLinear(e){return new h_(this.times,this.values,this.getValueSize(),e)}}li.prototype.ValueTypeName="quaternion";li.prototype.DefaultInterpolation=Fi;li.prototype.InterpolantFactoryMethodSmooth=void 0;class qi extends cn{}qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=os;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;class Gi extends cn{}Gi.prototype.ValueTypeName="vector";class d_{constructor(e,t=-1,n,i=hh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Qt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(p_(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(cn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=o_(c);c=Cc(c,1,u),l=Cc(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Hi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,_){if(f.length!==0){const p=[],m=[];Pl(f,p,m,g),p.length!==0&&_.push(new h(d,p,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let S=0;S!==d[g].morphTargets.length;++S){const v=d[g];p.push(v.time),m.push(v.morphTarget===_?1:0)}i.push(new Hi(".morphTargetInfluence["+_+"]",p,m))}c=f.length*a}else{const f=".bones["+t[h].name+"]";n(Gi,f+".position",d,"pos",i),n(li,f+".quaternion",d,"rot",i),n(Gi,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function f_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hi;case"vector":case"vector2":case"vector3":case"vector4":return Gi;case"color":return Il;case"quaternion":return li;case"bool":case"boolean":return Xi;case"string":return qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function p_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=f_(s.type);if(s.times===void 0){const t=[],n=[];Pl(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Nn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class m_{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const g_=new m_;class ui{constructor(e){this.manager=e!==void 0?e:g_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ui.DEFAULT_MATERIAL_NAME="__DEFAULT";const mn={};class __ extends Error{constructor(e,t){super(e),this.response=t}}class Qs extends ui{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Nn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(mn[e]!==void 0){mn[e].push({onLoad:t,onProgress:n,onError:i});return}mn[e]=[],mn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=mn[e],h=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){S();function S(){h.read().then(({done:v,value:E})=>{if(v)m.close();else{_+=E.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let A=0,w=u.length;A<w;A++){const N=u[A];N.onProgress&&N.onProgress(C)}m.enqueue(E),S()}})}}});return new Response(p)}else throw new __(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Nn.add(e,l);const u=mn[e];delete mn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=mn[e];if(u===void 0)throw this.manager.itemError(e),l;delete mn[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class v_ extends ui{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Nn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=cs("img");function c(){u(),Nn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class x_ extends ui{constructor(e){super(e)}load(e,t,n,i){const r=new yt,a=new v_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class or extends at{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const jr=new Pe,Lc=new L,Pc=new L;class Da{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lc),Pc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pc),t.updateMatrixWorld(),jr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class y_ extends Da{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Bi*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class M_ extends or{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new y_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ic=new Pe,es=new L,Kr=new L;class S_ extends Da{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),es.setFromMatrixPosition(e.matrixWorld),n.position.copy(es),Kr.copy(n.position),Kr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kr),n.updateMatrixWorld(),i.makeTranslation(-es.x,-es.y,-es.z),Ic.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ic)}}class E_ extends or{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new S_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class T_ extends Da{constructor(){super(new ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class A_ extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(at.DEFAULT_UP),this.updateMatrix(),this.target=new at,this.shadow=new T_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Q0 extends or{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class rs{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class b_ extends ui{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Nn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Nn.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Nn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Nn.add(e,c),r.manager.itemStart(e)}}const Ua="\\[\\]\\.:\\/",w_=new RegExp("["+Ua+"]","g"),Na="[^"+Ua+"]",R_="[^"+Ua.replace("\\.","")+"]",C_=/((?:WC+[\/:])*)/.source.replace("WC",Na),L_=/(WCOD+)?/.source.replace("WCOD",R_),P_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Na),I_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Na),D_=new RegExp("^"+C_+L_+P_+I_+"$"),U_=["material","materials","bones","map"];class N_{constructor(e,t,n){const i=n||Je.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Je{constructor(e,t,n){this.path=t,this.parsedPath=n||Je.parseTrackName(t),this.node=Je.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Je.Composite(e,t,n):new Je(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(w_,"")}static parseTrackName(e){const t=D_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);U_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Je.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Je.Composite=N_;Je.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Je.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Je.prototype.GetterByBindingType=[Je.prototype._getValue_direct,Je.prototype._getValue_array,Je.prototype._getValue_arrayElement,Je.prototype._getValue_toArray];Je.prototype.SetterByBindingTypeAndVersioning=[[Je.prototype._setValue_direct,Je.prototype._setValue_direct_setNeedsUpdate,Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_array,Je.prototype._setValue_array_setNeedsUpdate,Je.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_arrayElement,Je.prototype._setValue_arrayElement_setNeedsUpdate,Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Je.prototype._setValue_fromArray,Je.prototype._setValue_fromArray_setNeedsUpdate,Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Dc=new Pe;class ex{constructor(e,t,n=0,i=1/0){this.ray=new us(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Dc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dc),this}intersectObject(e,t=!0,n=[]){return ga(e,this,n,t),n.sort(Uc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)ga(e[i],this,n,t);return n.sort(Uc),n}}function Uc(s,e){return s.distance-e.distance}function ga(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)ga(i[r],e,t,!0)}}class tx{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class nx extends Pa{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new Pt;r.setIndex(new Mt(n,1)),r.setAttribute("position",new lt(i,3)),super(r,new ar({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class ix extends Pa{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Pt;i.setAttribute("position",new lt(t,3)),i.setAttribute("color",new lt(n,3));const r=new ar({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Te,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);const O_=""+new URL("../img/梅花山茶雪雀图-Cjo6SvEa.webp",import.meta.url).href,F_=""+new URL("../img/梨花斑鸠图-BPyiB7j5.webp",import.meta.url).href,B_=""+new URL("../img/猿马图-HRPh7N5X.webp",import.meta.url).href,k_=""+new URL("../img/芙蓉锦鸡图-MF8WHQ1I.webp",import.meta.url).href,H_=""+new URL("../img/桃鸠图-BT228BrR.webp",import.meta.url).href,G_=""+new URL("../img/五色鹦鹉图-CbtIRVHz.webp",import.meta.url).href,z_=""+new URL("../img/八花图卷-DSBroWqe.webp",import.meta.url).href,V_=""+new URL("../img/花鸟图卷-sO76PrYq.webp",import.meta.url).href,W_=""+new URL("../img/桃竹锦鸡图轴-aSx0W6gG.webp",import.meta.url).href,X_=""+new URL("../img/狮头鹅图-DiP7FyM0.webp",import.meta.url).href,q_=""+new URL("../img/桂菊山禽图-BkiHxSd2.webp",import.meta.url).href,Y_=""+new URL("../img/竹鹤图轴-D2egRJea.webp",import.meta.url).href,j_=""+new URL("../img/秋海棠图-CMSzNwjm.webp",import.meta.url).href,K_=""+new URL("../img/九兰图-CdNfC-BD.webp",import.meta.url).href,$_=""+new URL("../img/兰竹图-BbaJtMO5.webp",import.meta.url).href,Z_=""+new URL("../img/江帆楼阁图-DadCCXZj.webp",import.meta.url).href,J_=""+new URL("../img/明皇幸蜀图-rWYcP8kg.webp",import.meta.url).href,Q_=""+new URL("../img/雪景寒林图-CcDBkWnA.webp",import.meta.url).href,ev=""+new URL("../img/层叠冰绡图轴-B6Ss9ske.webp",import.meta.url).href,tv=""+new URL("../img/溪山行旅图-BWtZZv3O.webp",import.meta.url).href,nv=""+new URL("../img/山居图-Bv0x8pLF.webp",import.meta.url).href,iv=""+new URL("../img/墨梅图-CbX9DmsK.webp",import.meta.url).href,sv=""+new URL("../img/枯木竹石图-BYOR5Vmv.webp",import.meta.url).href,rv=""+new URL("../img/墨竹坡石图轴-S398d7y-.webp",import.meta.url).href,av=""+new URL("../img/梅花小鸟-CrNr164H.webp",import.meta.url).href,ov=""+new URL("../img/梅石图轴-DPi-l4O8.webp",import.meta.url).href,cv=""+new URL("../img/驴背吟诗图轴-Cpz6K2ps.webp",import.meta.url).href,lv=""+new URL("../img/水墨牡丹图轴-C7zjZta8.webp",import.meta.url).href,uv=""+new URL("../img/疏树归林图-CGYuaIiR.webp",import.meta.url).href,hv=""+new URL("../img/玉堂富贵图-DJHwEtG_.webp",import.meta.url).href,dv=""+new URL("../img/月夜山鸡图-BQwa76S1.webp",import.meta.url).href,fv={id:0,name:"唐",period:"618年 - 907年",overview:"唐代是中国传统绘画发展的重要时期，花鸟画正式成为独立画科，工笔重彩技法成熟，边鸾创新的折枝构图法对后世影响深远。",characteristics:["花鸟独立成科，单纯花鸟题材逐渐取代鞍马题材成为主流","注重写生与观察，追求“妙得其真”","折枝构图法的创新，截取花卉局部入画，配以禽鸟","线条的骨力与表现力突出，强调线条的准确性与物理质感"],schools:["宫廷画派","写实派"],techniques:["工笔重彩技法","折枝构图法","骨法用笔","白描勾线"],masterpieces:[{id:"tang001",title:"梅花山茶雪雀图",artist:"边鸾",time:"8世纪末-9世纪初",description:"画面描绘了梅花、山茶与雪雀的优美组合。边鸾运用精细的工笔重彩技法，准确捕捉了花鸟的形态特征和神韵。",significance:"代表了唐代花鸟画独立成科后的艺术成就，体现了边鸾对物象深入观察和精准表现的能力。",location:"故宫博物院",imageId:"0001"},{id:"tang002",title:"梨花斑鸠图",artist:"边鸾",time:"8世纪末-9世纪初",description:"此画采用独创的“折枝法”，仅描绘一枝梨花与栖息的斑鸠，构图简洁而富有自然天趣。",story:"边鸾创作此画时，据说曾在宫中梨园观察多日，精选最富有韵味的一枝入画，开创了折枝画法。",significance:"开创了花鸟画“折枝法”的构图模式，对后世宋元花鸟画产生深远影响。",location:"上海博物馆",imageId:"0002"},{id:"tang003",title:"猿马图",artist:"韩干",time:"8世纪",description:"绘有三猿，其中二猿悬挂在树顶，另一猿盘踞在石上，形态各异，或攀爬，或嬉戏，生动自然。其下绘黑白双骏，黑马垂首摆尾，呈腾跃之态，白马膘肥体壮，具神骏之姿，仿佛正并肩小跑前行。画面还描绘了竹石树林，树木枝干虬曲，竹叶随风摇曳，石头形态各异，与猿马相互映衬，营造出自然生动的氛围。",story:"韩干曾师从王维，并在宫廷养马场长期观察马匹神态，因此能将马的神形兼备地表现出来。",significance:"《猿马图》具有重要的历史价值，它反映了宋末元初的绘画风格与技法特点，为研究这一时期的绘画发展提供了珍贵的实物资料。其艺术意义非凡，以精湛的写实技法生动呈现猿马形态，展现出画家高超的技艺，对后世同类题材绘画创作具有深远的影响和借鉴作用。",location:"台北故宫博物院",imageId:"0003"},{id:"tang004",title:"江帆楼阁图",artist:"李思训",time:"盛唐时期",description:"近景江岸错落有致，桃、松、竹等树木郁郁葱葱，楼阁庭院在山石树木间若现。坡岸之上，两人正临水驻足，赏春抒怀。中景山中树木茂盛，有四人沿山上小路而来，主人骑马，三个仆人或引领，或挑担，或提物，前后簇拥而行。远景江水荡漾，几叶扁舟凌驾于万顷茫然之上，江天壮阔浩渺。",significance:"《江帆楼阁图》是中国早期青绿山水画风格的代表作品，体现了李思训精湛的艺术技法和审美理念。画作构图阔远，不画江岸边际，显得烟水浩瀚，境界宽广，运用散点透视法，聚万千景象于一纸之上。以石青、石绿为主的色彩设计，在部分墨线转折处勾以金粉提示，即所谓的'青绿为质，金碧为纹'，'阳面涂金，阴面加蓝'，很好地表现出山石的阴阳向背及质感，有金碧辉煌的装饰效果。对后世的山水画创作产生了深远的影响。",location:"台北故宫博物院",imageId:"0016"},{id:"tang005",title:"明皇幸蜀图",artist:"李昭道",time:"盛唐时期",description:"画面以崇山峻岭为背景，山峰高耸入云，白云缭绕其间，山路曲折蜿蜒，栈道高悬于悬崖峭壁之上，展现出蜀道的艰难险阻。画中人物众多，皆为唐朝时期的服饰装扮，唐玄宗骑在一匹枣红色的三花马上，位于画面右下部，正欲过桥，其马惊蹶停步，生动地表现出唐玄宗避难途中的惊慌心理。画中部有一处人仰马翻的场景，筋疲力竭的马匹和人物，生动地刻画了逃难途中的艰辛与不易。",significance:"《明皇幸蜀图》是记录唐代历史事件的重要画作，采用散点透视的方法和全景式构图，把高峻的山峰、潺潺的泉水、曲折的山路、茂密的树林、活动着的人物、驮马等综合到一幅画面上，既详细描述了历史事件，又充分发挥了山水画的审美功能，使画面具有强烈的视觉冲击力。以细劲的线条勾勒物象，线条刚劲有力，带有铁线描的特点，同时以石青、石绿等矿物颜料为主的色彩富丽堂皇，整体画面展现了唐代绘画的高超技法。",location:"台北故宫博物院",imageId:"0017"}],famousArtists:[{name:"边鸾",lifetime:"约8世纪末-9世纪初",achievements:"唐代著名画家，右卫长史，花鸟画大师。首创“折枝法”，将花鸟画开宗立派，独立成科。技法上注重写生，色彩鲜明，形态逼真。其作品《梅花山茶雪雀图》《梨花斑鸠图》等为唐代花鸟画的代表作。",story:"据记载，边鸾为德宗画孔雀“一正一背，翠彩生动”，观者称奇。他善于观察自然，对花鸟的形态、习性、神情等有着深入的了解，能够准确地捕捉到它们最生动的瞬间。"},{name:"韩干",lifetime:"约680年-760年",achievements:"唐代著名画家，以画马闻名于世。年少时被王维赏识并资助学画，经过十余年努力成为优秀画家。曾官至太府寺丞，主要活动于唐玄宗时期。所绘马匹体态矫健、神形兼备，具有独特的艺术风格。",story:"韩干家境贫寒，曾在酒肆做工。据说，他常利用空闲时间在地上画马，其绘画天赋被诗人王维发现。他画马注重写实，以真马为师，所画马匹不仅展现了马的外形之美，更传达出马的精神气质。"},{name:"李思训",lifetime:"653年-718年",achievements:"唐代宗室、官员、书画家，擅长青绿山水画，被誉为“北宗”画派之祖。工书法，善丹青，世称“李将军山水”。其山水树石师法隋代展子虔，并加以发展，形成笔格遒劲，金碧辉映，意境奇伟的风格。",story:"李思训出身宗室，官至右武卫大将军，为与其子李昭道相区别，世称“大李将军”。唐人朱景玄列其画为“神品”，明人董其昌尊其为“北宗”画派之祖。其代表作《江帆楼阁图》体现了他独特的青绿山水画风格。"},{name:"李昭道",lifetime:"675年-758年",achievements:"唐朝宗室、画家，李思训之子，世称小李将军。擅长青绿山水，兼善鸟兽、楼台、人物，并创海景。画风巧赡精致，虽“豆人寸马”，也画得须眉毕现。",story:"李昭道为唐代著名画家李思训之子，继承了父亲的青绿山水画技法，画风繁复精致。由于画面线条纤细，有“笔力不及思训”之评，但其创作的《明皇幸蜀图》等作品生动记录了历史事件，具有很高的艺术价值。"}],historicalContext:"花鸟独立成科：唐代以前，花鸟多作为器物纹饰或宗教壁画中的附属元素（如新石器彩陶、商周青铜器、汉代祥瑞图等） 至唐代，花鸟画正式成为独立画科，尤其盛唐至中晚唐时期，单纯花鸟题材逐渐取代鞍马题材，成为主流。技法成熟：唐代画家注重写生与观察，追求“妙得其真”（如边鸾为德宗画孔雀“一正一背，翠彩生动”），工笔重彩技法成熟。韩滉《五牛图》以精准的形态和透视关系成为早期写实典范 。折枝构图法的创新：边鸾首创“折枝法”，截取花卉局部入画，配以禽鸟，形成自然天趣的构图模式（如《梨花斑鸠图》），影响后世至宋元。"},pv={id:1,name:"宋",period:"960年 - 1279年",overview:"宋代是中国绘画艺术的黄金时期，花鸟画成为宫廷与民间并重的独立艺术门类，技法从工笔到写意多元发展，北宋宋徽宗赵佶更是推动写实臻于巅峰。",characteristics:["花鸟画地位提升，从珍禽异卉扩展至枯木寒禽、蔬果草虫","融入文人审美，形成'诗书画印'结合的完整艺术形式","从“形似”到“形神兼备”，注重自然规律的观察","宫廷垄断到世俗化，画院制度成熟，绘画市场化"],schools:["院体画派","文人画派","北宗画派","南宗画派"],techniques:["双勾填彩（勾填法）","皴擦与晕染结合","没骨法","诗书画印结合"],masterpieces:[{id:"song001",title:"芙蓉锦鸡图",artist:"赵佶",time:"北宋",description:"画面细致描绘了芙蓉花与锦鸡的优美组合，锦鸡羽毛色彩艳丽，形态逼真，花朵娇艳欲滴。整幅作品线条精细，色彩鲜明。",significance:"代表了宋代工笔花鸟画的最高成就，体现了赵佶精湛的工笔花鸟画技艺和对自然物象的细致观察能力。",location:"北京故宫博物院",imageId:"0004"},{id:"song002",title:"桃鸠图",artist:"赵佶",time:"北宋",description:"桃花盛开与含苞待放相互映衬，花瓣如丝绸般柔软，色泽鲜艳粉嫩，白中透红，娇艳欲滴。枝叶细嫩柔滑，脉络清晰可见，桃枝线条勾勒精细入微，展现出生命的脉络。一只体形肥硕的绿色鸠鸟安静地停栖在桃枝上，缩着脖颈，尾羽自然下垂。其羽毛色彩典雅，绿背闪烁着独特光泽，眼神清澈明亮，鸟喙刻画逼真，胸腹部绒毛细腻柔软，仿佛一团轻柔的云朵。",story:"据传赵佶对绘画有着极高的要求，曾说“孔雀抬脚必先左”，体现了他对自然观察的严谨态度。",significance:"《桃鸠图》是北宋时期花鸟画的代表作品之一，此画以其精湛的技艺和独特的艺术风格，成为折枝花鸟画的经典之作，对后世花鸟画的发展产生了深远影响，其工笔细腻、色彩艳丽、神态生动等特点，反映了当时宫廷绘画的风格和审美趣味，为研究北宋时期的艺术发展、文化氛围以及审美观念等提供了珍贵的实物资料。",location:"位于日本，个人收藏",imageId:"0005"},{id:"song003",title:"五色鹦鹉图",artist:"赵佶",time:"北宋",description:"画中一只五色鹦鹉侧身栖于杏花枝头，嘴厚眼圆颈粗，羽翼齐整，足脚有力，显得心满意足，无忧无虑。鹦鹉羽毛呈五色，黑、灰、红、绿相间，鲜丽耀日，头呈黑灰色，脖颈呈深红色，翅羽、尾羽呈浅绿色。眼睛大而有神，正炯炯注视眼前繁茂的杏花，眼睛以生漆点之，呼之欲活。鹦鹉露出一足紧紧抓住杏枝，另一足微露脚爪，足角质鳞片也悄然画出。",significance:"此画展现了宋徽宗赵佶“妙体众形”的深厚功力，体现了宋代宫廷绘画注重写实、追求意境的特点，其写实派的表现手法以及精细的工笔技法、和谐的色彩搭配等，对后世 “院体画” 的发展产生了重要影响",location:"美国波士顿美术馆",imageId:"0006"},{id:"song004",title:"雪景寒林图",artist:"范宽",time:"北宋",description:"画面主体为皑皑白雪覆盖下的群山和寒林。远景是雄伟的雪山，山势巍峨，连绵起伏，主峰高耸入云，展现出磅礴的气势。中景是一片寒林，树木枝干虬曲，形态各异，有的枝干上残留着积雪，有的则光秃秃地伸向天空，在寒风中显得坚韧而孤寂。近景是一条曲折的溪流，溪边有巨石和枯树，溪水在冰雪的映衬下仿佛凝固了一般，更增添了画面的寒冷氛围。",significance:"此画是范宽艺术风格的典型代表，也是中国古代山水画中的珍品。范宽运用了他擅长的'雨点皴'来表现山石的质感和纹理，通过密集的墨点，生动地描绘出了山石的坚硬和粗糙。对于研究北宋时期的绘画风格、技法以及当时的社会文化背景等方面都具有重要的价值。",location:"天津博物馆",imageId:"0018"},{id:"song005",title:"层叠冰绡图轴",artist:"马麟",time:"南宋",description:"图中所画两枝梅花据称为绿萼梅，是梅花中的名贵品种。枝干细秀劲挺，一枝高昂扬起，伸至画面右中部，枝疏花密，花朵绽开；一枝低垂叶艳，由画幅右侧横出，伸展画幅中部与另一挺拔高枝相呼应，两枝枝干清瘦如铁，一俯一仰，婀娜多姿。花朵繁密俏媚，枝头的朵朵繁花与点点未放的花苞相互交错。",story:"本幅款识'臣马麟'，另有宋宁宗皇后杨氏题'层叠冰绡'，并题诗：'浑如冷蝶宿花房，拥抱檀心忆旧香。开到寒梢尤可爱，此般必是汉宫妆。赐王提举。'钤'杨娃之章''丙子刊宁翰墨'朱文。",significance:"此画是南宋院体风格的代表作。马麟运用了双勾填色法，先用淡墨细线精微勾勒出花瓣、花萼和枝干的轮廓，再层层填色，使花色显得华丽鲜艳，娇嫩可爱。构图简洁而富有韵味，采用折枝花的手法，以少胜多，仅绘两枝梅花却能展现出丰富的画面效果。杨皇后的题字和题诗使得画作的情感表达更加丰富，充满了诗情画意，提升了画作的文化内涵和艺术价值。",location:"北京故宫博物院",imageId:"0019"},{id:"song006",title:"溪山行旅图",artist:"范宽",time:"北宋",description:"画面采用'全景构图高远山水'，以主峰为中轴线布局。整幅画面远景主峰要仰视，中景山峰、树木、商队是平视，近景巨石溪水可俯视，使观者与画中景物之间形成巨大的空间距离。区隔承转近、中景的是一道河滩小路，景中两个人赶着四头驮着货物的驴子十分渺小与大山形成了鲜明对比，体现出人于自然虽是匆匆过客，却又'天人合一'的思想。",significance:"《溪山行旅图》是范宽的代表作，也是中国山水画的经典之作。范宽运用了复合多变的笔法表现山石、建筑、人与动物，用'雨点皴'等多种皴法表现不同位置岩石的肌理，完美地提炼了秦岭的山体特色。这一技法不但丰富了中国山水画笔法的表现形式，还对以后的积墨法产生了重要的影响。北宋李唐的《万壑松风图》、南宋萧照的《关山行旅》、夏圭的《山水轴》都是受其影响的作品。",location:"台北故宫博物院",imageId:"0020"}],famousArtists:[{name:"赵佶",lifetime:"1082-1135年",achievements:"宋徽宗，北宋末代皇帝，同时也是中国绘画史上著名的艺术家。他精通书法、绘画，创瘦金体，设立画学，擅长花鸟画，形成“宣和体”画风，将北宋工笔花鸟画推向巅峰。其代表作有《芙蓉锦鸡图》《桃鸠图》《五色鹦鹉图》等。",story:"赵佶天性爱画，据《宣和画谱》记载，他能“妙体众形,不留刻画之迹,有神气者咸肖似之”。宋徽宗为画院定下严格的写生制度，他曾在御园饲养珍禽异兽、培植奇花异草，供画家们写生创作之用。"},{name:"范宽",lifetime:"约950年-约1032年",achievements:"北宋著名山水画家，与李成、董源并称'北宋三大家'。范宽最初学李成，后因感悟'与其师于人者，未若师诸造化'，遂隐居终南、太华，对景造意，写山真骨，自成一家。他创造性地运用'雨点皴'表现山石纹理，对后世山水画发展产生深远影响。",story:"范宽为人性格宽厚豁达，时人称之为'宽'，他便以范宽自名。据记载，范宽作画时，常常'六七日不洗面，不梳头，不解带，不脱靴，曰恐有所失'，表现出对绘画的极度专注与热忱。他的代表作《溪山行旅图》《雪景寒林图》等都是中国山水画的经典之作。"},{name:"马麟",lifetime:"南宋时期（约12世纪末-13世纪初）",achievements:"南宋画家马麟是马远之子，出身绘画世家，擅画人物、山水、花鸟，用笔圆劲，轩昂洒落。宁宗嘉泰间（1201-1204）授画院祗候，颇得宁宗赵扩、恭圣皇后杨氏及杨妹子称赏。其工花卉，与朝廷贵族关系密切，多有作品得到皇室题跋。",story:"马麟承袭家学而画风秀润过于其父。据传，宋宁宗赵扩评论马麟的绘画'轩朗敏妙，人品高邁'，对其极为推崇。恭圣皇后杨氏在其《层叠冰绡图》中题诗道:'浑如冷蝶宿花房，拥抱檀心忆旧香。开到寒梢尤可爱，此般必是汉宫妆。'展现了宫廷对其艺术的赞赏。"}],historicalContext:"从附属到独立，花鸟画地位提升：艺术独立与题材拓展   宋代花鸟画成为宫廷与民间并重的独立艺术门类，题材从珍禽异卉扩展至枯木寒禽、蔬果草虫（如《果熟来禽图》《寒雀图》），并融入文人审美，形成“诗书画印”结合的完整艺术形式。技法革新，从工笔到写意的多元发展：北宋初期延续黄筌风格，追求“形似”与精细刻画（如《芙蓉锦鸡图》），宋徽宗更以“孔雀抬脚必先左”的观察标准推动写实臻于巅峰。北宋中叶崔白打破黄家垄断，融合徐熙野逸风格，以《寒雀图》开创工写结合的先例，南宋梁楷、牧溪则发展简笔水墨，为元代写意奠定基础  。引入山水画的皴擦技法（如《寒雀图》树干）、丝毛法表现羽毛层次，并探索“没骨法”等新形式，突破勾线填色的单一模式。从“形似”到“形神兼备”：宋代文人受“格物致知”思想影响，强调对自然规律的观察（如赵昌晨露写生），追求“物之理”与“形神兼备”（如《果熟来禽图》中果叶的质感）。宋徽宗首创“诗书画印”结合（如《瑞鹤图》题诗），文人画家则以梅兰竹菊喻人格，赋予花鸟画哲学深度与抒情性。从宫廷垄断到世俗化：出现画院制度，宋徽宗设立画院，以画取仕，推动专业画家群体形成，并鼓励创新。南宋商品经济繁荣，绘画市场化，职业画家（如刘宗道）创作贴近市民生活的题材（如“照盆孩儿”），花鸟画从宫廷走向市井。"},mv={id:2,name:"元",period:"1271年 - 1368年",overview:"元代花鸟画在文人阶层的推动下，从工笔写实转向水墨写意的审美，摒弃宋代繁复的设色与形似追求，转向“简略淡雅”的表达方式，强化了文人主体性与抒情功能。",characteristics:["从工笔写实到水墨写意的审美转向","文人主体性与抒情功能强化","“逸格”成为最高标准，追求“平淡天真”的气韵","书法用笔融入绘画，注重线条韵律"],schools:["文人画派","南北宗"],techniques:["水墨取代设色，以墨代色","疏简空灵的构图","书法用笔的融入","点墨、破墨等写意手法"],masterpieces:[{id:"yuan001",title:"八花图",artist:"钱选",time:"元中期",description:"此画描绘了梅、兰、竹、菊、山茶、牡丹、芍药、莲八种花卉，按四季排列组合而成。钱选运用纤细的线条勾勒花叶轮廓，淡雅的彩色晕染，绘制出花卉的神韵和风格。每种花卉都配有钱选亲笔题诗，使诗书画完美结合。",significance:"虽保留宋代写生传统，但更强调文人雅玩的意趣，体现了元代文人画的审美转向，是元代文人花鸟画的代表作，展现了'平淡天真'的审美理念。",location:"上海博物馆",imageId:"0007"},{id:"yuan002",title:"花鸟图卷",artist:"钱选",time:"元中期",description:"画面描绘了各种花卉与鸟类的优美组合。钱选以纤细流畅的线条勾勒物象轮廓，淡雅的水墨渲染层次，辅以点缀性的淡彩，营造出清新雅致的艺术效果。",significance:"反映了元代文人画家追求简约与内在韵味的审美倾向，体现了'士气说'的文人画理念和诗画结合的艺术特色。",location:"台北故宫博物院",imageId:"0008"},{id:"yuan003",title:"桃竹锦鸡图",artist:"王渊",time:"元晚期",description:"画幅正中的太湖石上，一只锦鸡悠闲地梳理着胸前的羽毛，春风中绽放的山桃枝上，一只活泼的山雀正在昂首吟唱，身旁的几枝竹叶穿插其间。远处的溪水载着几片摇落的花瓣缓缓流出，拍打着长满浅浅草芽的溪岸及岩石，回荡起片片涟漪“以墨代色”的新风，兼具工整与写意之美。",significance:"锦鸡在中国文化中具有吉祥寓意，古人认为鸡有文、武、仁、勇、信五德，常将其比拟为仁人君子，锦鸡生有斑斓的羽毛和漂亮的长尾，因此常常被取之入画。桃花象征着春天、繁荣和美好，竹子则代表着坚韧、高洁和君子之风。整幅画营造出一种安静祥和、雅意周正的氛围，展现了大自然的生机与和谐，也寄托了画家对美好生活的向往与追求。“以墨代色”的新风，其作品兼具工整与写意之美，对后世花鸟画的发展产生了深远影响",location:"北京故宫博物院",imageId:"0009"}],famousArtists:[{name:"钱选",lifetime:"1239年-1299年",achievements:"宋末元初著名画家，与赵孟頫等合称为“吴兴八俊”。入元不仕，工诗，善书画。继承苏轼等人的文人画理论，提倡士气说，倡导戾家画。他提倡绘画中的“士气”，在画上题写诗文或跋语，萌芽了诗、书、画紧密结合的文人画的鲜明特色。",story:"钱选画学极杂：山水师从赵令穰；人物师从李公麟；花鸟师赵昌；青绿山水师赵伯驹。他的艺术风格兼容并蓄，既保留了宋代院体画的工整细致，又融入了文人画的意趣，为元代文人花鸟画的发展作出了重要贡献。"},{name:"王渊",lifetime:"13世纪-14世纪中叶",achievements:"元代著名画家，字若水，号澹轩，钱塘人。工于花鸟、人物、山水，尤精于花鸟，堪称元代花鸟画巨擘。其作品以水墨花鸟竹石为多，墨色渲染，浓淡有致，以无彩胜于有彩，被誉为“元代的黄荃”，是“元代绝艺花鸟画家”。",story:"王渊水墨下的花鸟画，先是工笔重彩，专求黄筌风格画法，中年多用精工艳丽笔触。他的作品于秀丽之中见得浑朴，勾勒与渲染这二种画法，各尽其妙，写实与写意都有天机溢发之感。"}],historicalContext:"从工笔写实到水墨写意的审美转向：元朝文人画家受隐逸思潮影响，摒弃宋代繁复的设色与形似追求，转向“简略淡雅”的水墨写意。例如，钱选的《八花图》虽保留宋代写生传统，但线条更纤细、设色更单纯，强调“平淡天真”的意境  ；王渊以纯水墨替代设色，通过墨色浓淡表现层次，开启了“以墨代色”的文人化表达。文人主体性与抒情功能强化：元代文人因科举废除和民族压迫被迫远离仕途，转而以绘画寄托心志。如倪瓒提出“不求形似，聊以自娱”，主张通过花鸟画抒发个人情感与哲学思考。理论构建与品评标准的转型：“逸格”成为最高标准：元代确立“逸、神、妙、能”四品，以“逸”为尊，强调画家主观意趣与自然天真。柯九思等理论家推崇“平淡天真”的气韵，与宋代重“神似”的审美形成对比。"},gv={id:3,name:"明",period:"1368年 - 1644年",overview:"明代花鸟画在继承前代传统的基础上有所突破，以陈淳、徐渭为代表的大写意花鸟画兴起，生宣与水墨技法创新，宫廷与民间画风交融，绘画逐渐面向市民市场。",characteristics:["大写意花鸟画兴起，突破形似束缚，墨色淋漓","生宣与水墨技法创新，利用生宣吸水性增强水墨渗化效果","宫廷与民间交融，从院体工笔到文人水墨的多元发展","从宫廷雅玩到市民需求，绘画逐渐市场化"],schools:["吴门画派","宫廷院体画派","大写意画派"],techniques:["水墨大写意技法","草书笔法融入绘画","点、勾、擦、染等核心技法","生宣泼墨法"],masterpieces:[{id:"ming001",title:"狮头鹅图",artist:"吕纪",time:"明中期",description:"此画生动描绘了一只头部如狮子般雄壮的白鹅。吕纪以精湛的工笔技法刻画鹅的羽毛和形态，线条流畅有力，色彩清新明丽。",significance:"体现了明代院体花鸟画的写实传统和艺术成就，展现了吕纪对物象精准观察和细致刻画的能力，被称为明代花鸟画第一家。",location:"北京故宫博物院",imageId:"0010"},{id:"ming002",title:"桂菊山禽图",artist:"吕纪",time:"明中期",description:"画面描绘了桂花、菊花与山禽的自然组合。吕纪继承并发展了宋代院体花鸟画的精细写实传统，色彩艳丽，笔法精微，刻画入微。",story:"据说吕纪在画作上常用寓意手法对皇帝劝谏，皇帝知其用心，曾说：“工执艺事以谏，吕纪有之。”",significance:"代表了明代工笔花鸟画的高超成就，花叶禽鸟均形神兼备，富有生命力，展现了院体画的精工之美。",location:"台北故宫博物院",imageId:"0011"},{id:"ming003",title:"竹鹤图",artist:"边景昭",time:"明初",description:"画面描绘了一只丹顶鹤立于翠竹旁的优美场景。边景昭以工整的线条勾勒竹与鹤的形态，设色清丽典雅，构图简洁而富有韵味。",significance:"是明初宫廷画风的代表作品，体现了边景昭承继宋代院体传统，又融入明代审美的艺术特色，被誉为“宋元后一人”。",location:"台北故宫博物院",imageId:"0012"},{id:"ming004",title:"梅花小鸟",artist:"陈洪绶",time:"明末",description:"画面中描绘了几枝梅花，枝干虬曲多姿，梅花或绽放，或含苞待放，以简洁而富有韵味的笔触表现出梅花的形态和神韵。一只或几只小鸟栖息在梅枝上，小鸟的姿态各异，或低头啄羽，或引颈张望，或展翅欲飞，生动形象地刻画了小鸟的活泼可爱。",significance:"作品体现了陈洪绶独特的艺术风格，他以刚劲有力的线条来勾勒梅花的枝干和小鸟的轮廓。线条粗细有致，顿挫分明，既表现出梅花枝干的坚硬和挺拔，又体现了小鸟羽毛的细腻和质感，使画面具有一种强烈的形式美感和装饰性。",location:"私人收藏",imageId:"0025"},{id:"ming005",title:"梅石图轴",artist:"陈洪绶",time:"明末",description:"此图以简洁而富有张力的构图展现出梅石相依的景致。画面中，一块嶙峋的巨石占据了画面的左侧，巨石以古朴苍劲的笔法勾勒，石面的纹理通过细腻的皴擦表现出来，显得质感强烈，仿佛历经岁月的沧桑。梅树从巨石右侧斜出，枝干曲折向上，姿态婀娜。梅树枝干以劲挺的线条描绘，表现出其坚韧的气质。枝头梅花或绽放，或含苞，花朵以淡墨点染，再用重墨勾勒花蕊，显得清新雅致，与粗壮的枝干形成鲜明对比，展现出梅花的娇艳与坚韧。",significance:"在技法上，陈洪绶融合了多种传统绘画技巧并加以创新。他的线条刚劲有力，如“铁线描”般流畅而富有弹性，无论是勾勒梅枝还是描绘石块，都能精准地表现出物体的形态和质感。墨色运用上，浓淡干湿相得益彰。以浓墨表现梅树枝干的暗处和石块的纹理凹陷处，增强了画面的立体感和层次感；用淡墨渲染梅花和石块的亮部，使画面呈现出一种柔和的光影效果，营造出宁静雅致的氛围。",location:"台北故宫博物院",imageId:"0026"},{id:"ming006",title:"驴背吟诗图轴",artist:"徐渭",time:"明中晚期",description:"此画以简洁的笔墨勾勒出驴和人物的形态。画面中，一老者骑在驴背上，悠然自得，仿佛在吟诗构思，人物神态生动，毛驴的形态也憨态可掬。徐渭以其独特的大写意画风，运用豪放、泼辣的笔墨，通过浓淡干湿的变化，将驴和人物的形象刻画得淋漓尽致，展现出一种古朴、自然的意境，同时也流露出画家自身的情感和心境，体现了他不拘一格、自由奔放的艺术风格。",significance:"徐渭在绘制《驴背吟诗图轴》时，运用了丰富多变的笔法。如在画驴的身体时，以较为粗壮、沉稳的线条来表现其结实的体态，线条流畅而富有张力，体现出毛驴的健壮。画驴的鬃毛和尾巴时，则采用了较为洒脱、灵动的笔触，似不经意间挥洒而成，却生动地表现出毛发的质感和动态。在描绘人物时，笔法更加细腻，通过简洁的线条勾勒出人物的面部表情、身体姿态以及衣物的褶皱，展现出人物悠然闲适的神情。整幅作品营造出一种充满诗意的氛围，引发观者无尽的遐想，使人们能够感受到画家所追求的那种宁静、高远的精神境界。",location:"北京故宫博物院",imageId:"0027"},{id:"ming007",title:"水墨牡丹图轴",artist:"徐渭",time:"明中晚期",description:"这幅作品体现了徐渭独特的艺术风格。他以水墨大写意的手法来描绘牡丹，用豪放洒脱的笔触和浓淡变化丰富的墨色，展现出牡丹的神韵。画面中，牡丹的花朵以淡墨晕染，花瓣层次丰富，看似随意的几笔却生动地表现出花朵的形态与质感，仿佛在微风中轻轻摇曳。叶片则以浓墨挥洒，墨色淋漓，富有动感和生命力，与淡雅的花朵形成鲜明对比。整幅画布局简洁，却通过笔墨的运用传达出一种大气磅礴、不拘小节的气质，既展现了牡丹的娇艳富贵之态，又赋予了其一种超凡脱俗的文人气息，是徐渭将个人情感与自然物象相融合的佳作，也反映了他对传统花鸟画的创新与突破。",significance:"徐渭在《水墨牡丹图轴》中对墨色的运用达到了炉火纯青的境界。他以墨代色，通过墨的干湿、浓淡、焦润等多种变化来表现牡丹的不同部位和质感。例如，用浓墨勾勒牡丹的枝干，表现出枝干的苍劲有力，仿佛承载着生命的力量；以淡墨渲染花朵，使花瓣呈现出柔和、娇嫩的质感，仿佛能感受到花瓣的细腻纹理；在叶片上，则运用了丰富的墨色层次，从浓墨的叶尖到淡墨的叶根，表现出叶片的立体感和光影变化，使叶片看起来更加生动逼真，富有生机。徐渭一生坎坷，怀才不遇，他将自己的人生经历和情感融入到绘画中，以牡丹自比，表达了自己虽身处逆境，但依然坚守内心的高洁和对艺术的执着追求。",location:"北京故宫博物院",imageId:"0028"}],famousArtists:[{name:"吕纪",lifetime:"1439年-1505年",achievements:"明代院体花鸟画家，字廷振，号乐愚，鄞（今浙江宁波）人。花鸟初师边景昭，又学林良，并广泛师法唐宋诸家。所作有工笔重彩和水墨写意两种画法，前者描绘精工，色彩富丽，法度谨严；后者粗笔挥洒，随意点染，简练奔放。被称为明代花鸟画第一家。",story:"据说吕纪在画作上常用寓意手法对皇帝劝谏，皇帝知其用心，曾说：“工执艺事以谏，吕纪有之。”他的花鸟设色鲜艳，生气奕奕，作品如《新春双雉图》《桂花山禽图》《残荷鹰鹭图》等都体现了其精湛的技艺。"},{name:"边景昭",lifetime:"明永乐至宣德年间（1403-1435年）",achievements:"明初'宫院派'花鸟画家代表，边文进，字景昭，沙县城关兴义坊人。供事内殿，工花鸟，画史称其画“花之娇笑，鸟之飞鸣，叶之反正，苞之蕴藉，不但勾勒有力，其用墨无不合宜”，被称为“禁中三绝”之一，与同期的画家吕纪齐名。",story:"边景昭的花鸟画以工笔重彩法见长，传统渊源无疑来自宋代“院体”。他的艺术追求，既承继了宫廷花鸟画的传统特色，又掺入了明代皇室平民化的贵族品味，在取材、立意、构图、笔墨、格调等方面都有所反映。"},{name:"陈洪绶",lifetime:"1599年-1652年",achievements:"明末清初画家，字章侯，号老莲，别号悦髯、云门僧、老遨、洪绶道人等，浙江诸暨人。工诗善画，擅长人物、花鸟。其画风独特，线条圆润流畅，形象饱满夸张，风格奇特古雅，富有变化，并自成一派，被誉为'百变洪绶'。陈洪绶融合唐以来的线描传统，在古拙中略施变形，使其画风古朴夸张而富有神韵，对清代扬州八怪等影响深远。",story:"陈洪绶是明末清初著名的画家，他的绘画风格独树一帜，线条古朴浑厚，形象夸张变形，富有强烈的个人特色。他的人物画最为著名，如《五百罗汉图》，但其花鸟画也别具一格，梅花系列体现了他的高洁情怀和艺术创新。他的艺术风格对后世产生了深远影响，特别是对清代'扬州八怪'的艺术创作。"},{name:"徐渭",lifetime:"1521年-1593年",achievements:"字文长，号青藤，又号天池生、白鹇子、青藤道人、崖谷老人等，绍兴府山阴县（今浙江绍兴）人。明代文学家、书画家、戏曲家。徐渭一生坎坷，怀才不遇，三十岁始中举人，屡试不第，后追随名将胡宗宪，官至左参政。胡宗宪被杀后，徐渭惨遭牵连入狱。出狱后，生活潦倒，穷困终身。徐渭诗文、书法、绘画、戏曲创作都有很高成就，被称为'四绝'，对后世影响深远。",story:"徐渭善画葡萄、蔬果和花卉，以独创的泼墨法入画，墨色淋漓，墨彩浑成，形成奔放豪迈、气势磅礴的艺术风格。其花卉画颠覆了传统的工整描绘，而是以狂草的书法笔意挥洒，开创了'逸笔草草'的写意画风，以写意手法表达情感宣泄，揭开明末清初大写意花鸟画的先河。其著名的'四时花卉'册页中，牡丹、葫芦、柳、蔬果等形象生动，境界豪放，充满了强烈的个性色彩，被后世评为'气韵盖唐宋而独步明清'。"}],historicalContext:"对宋元传统的突破：宋元时期以工笔设色（黄筌“富贵”风格）和水墨小写意（徐熙“野逸”风格、钱选、王渊等）为主，元代文人虽强调“以墨代色”，但仍保留形似与细腻。而明代中后期，以陈淳、徐渭为代表的大写意花鸟画兴起，彻底突破形似束缚，以狂草笔法入画，墨色淋漓，如徐渭《墨葡萄图》以泼墨法表现物象，开创“不求形似求生韵”的新范式。生宣与水墨技法创新：明代画家首次广泛使用生宣作画，利用其吸水性增强水墨渗化效果。徐渭的《杂花图》以生宣泼墨，墨色层次丰富，情感宣泄强烈，与元代王渊的工致水墨形成鲜明对比。宫廷与民间交融：明代初期延续南宋院体工笔（边景昭《竹鹤图》、吕纪《桂菊山禽图》），中期吴门画派（沈周、文徵明）融合文人水墨与院体技法，晚期徐渭、陈淳的大写意则彻底打破院体规范从宫廷雅玩到市民需求：宋代花鸟画主要为宫廷服务，元代文人画限于士大夫圈层，而明代花鸟画因商品经济繁荣，逐渐面向市民市场。如“吴门四家”作品兼具艺术性与装饰性，适应了新兴市民阶层的审美"},_v={id:4,name:"清",period:"1644年 - 1912年",overview:"清代花鸟画呈现多元发展趋势，恽寿平以“没骨写生”法重塑花卉画风，宫廷绘画融合中西技法，扬州八怪以个性化的笔墨表现世俗题材，晚清赵之谦、吴昌硕将金石篆刻的苍劲笔法融入花鸟。",characteristics:["没骨法的复兴与革新，形成温润如玉的质感","宫廷绘画的融合与创新，中西合璧","扬州八怪与世俗化倾向，笔墨狂放，题材贴近市民生活","金石学的渗透，篆刻的苍劲笔法融入花鸟"],schools:["常州画派","扬州画派","金石画派","宫廷画派"],techniques:["没骨写生法","撞水撞色技法","中西合璧的透视光影技法","边角式构图与留白"],masterpieces:[{id:"qing001",title:"秋海棠图",artist:"恽寿平",time:"清初",description:"此画以“没骨法”描绘秋海棠，不用墨线勾勒，直接以水墨或淡彩点染，形成温润如玉的质感。恽寿平通过精妙的水法和色彩运用，呈现出秋海棠的清雅气质和生命活力。",significance:"开创了“常州画派”的典雅风格，代表了恽寿平没骨写生的艺术成就，对清代花鸟画产生深远影响，被尊为“写生正派”。",location:"南京博物院",imageId:"0013"},{id:"qing002",title:"九兰图",artist:"恽寿平",time:"清初",description:"画面描绘了九种不同品类的兰花，以恽寿平独创的“撞水撞色”技法表现兰花的优美姿态和清雅气质。整幅作品设色淡雅，笔法精微，兰叶挺拔，兰花清秀。",story:"恽寿平自称学北宋徐崇嗣法，重视写生，对明末清初花卉有“起衰之功”。他通过控制水分与颜料交融，形成透明鲜亮的视觉效果，创立了独特的艺术风格。",significance:"充分体现了“南田画派”的艺术特色，代表了恽寿平花卉画的最高成就，影响遍及大江南北。",location:"上海博物馆",imageId:"0014"},{id:"qing003",title:"兰竹图",artist:"郑燮",time:"清中期",description:"运用浓淡墨色来表现兰竹的形态和质感。以浓墨绘制兰叶和竹枝的关键部位，如兰叶的尖端、竹节等，使画面更具层次感和立体感；用淡墨渲染竹叶和兰花的部分，展现出其轻盈、飘逸的感觉，体现出郑板桥 “以少少许胜多多许” 的笔墨理念。",significance:"作品蕴含着深厚的中国传统文化内涵，兰竹所代表的高洁、坚韧等品质，是中国传统文化中对君子品德的推崇，这幅画将这些文化精神以艺术的形式展现出来，具有传承和弘扬中国传统文化的重要意义",location:"北京故宫博物馆",imageId:"0015"},{id:"qing004",title:"疏树归林图",artist:"华岩",time:"清中期",description:"画面中描绘了几株形态各异的树木，树干以淡墨勾勒，线条流畅而富有变化，表现出树干的纹理和质感。树枝则用干笔皴擦，再以淡墨渲染，呈现出一种疏朗、苍劲的韵味。树叶的表现手法丰富多样，有的以点厾法画出，浓淡相间，富有层次感；有的则以简洁的线条勾勒，寥寥数笔，便生动地表现出树叶的形态和疏密关系。远处的山林以淡墨晕染，营造出一种朦胧的氛围，与近处的树木形成虚实对比，使画面具有深远的空间感。在画面的一角，有一位身着长袍的隐士正缓缓走向山林，通过人物的动态和神情，传达出一种悠然自得、回归自然的心境。",significance:"《疏树归林图》体现了华岩高超的绘画技艺。他在这幅画中运用了多种笔墨技法，线条灵活多变，既有细腻流畅的勾勒，又有粗犷豪放的皴擦，使画面富有节奏感和韵律感。在用墨方面，注重墨色的浓淡干湿变化，通过巧妙的运用，使画面层次分明，富有立体感。画面采用了简洁的构图方式，以疏树和归林为主题，将主要元素集中在画面的中心和下部，使画面重心稳定。整幅作品营造出一种宁静、淡泊、回归自然的意境，反映了画家对自然的热爱和对闲适生活的向往。",location:"北京故宫博物院",imageId:"0029"},{id:"qing005",title:"玉堂富贵图",artist:"邹一桂",time:"清中期",description:"《玉堂富贵图》是邹一桂创作的绢本设色画，画面中牡丹、玉兰、海棠、杜鹃布满全幅。牡丹色彩纷繁，敷以淡粉，用重粉点染边缘，显得晶莹剔透、庄重典雅；玉兰洁白无瑕，花朵硕大，枝干挺拔；海棠淡紫娇羞，花朵小巧玲珑，与牡丹、玉兰相互映衬；杜鹃则以鲜艳的红色点缀其中，为画面增添了几分活泼与灵动。画面最后用石青衬底，使整个画面的色彩更加丰富、沉稳，同时也衬托出花卉的娇艳与高贵，营造出一种华丽而不失典雅的氛围。",significance:"《玉堂富贵图》在技法上，花、叶、枝皆以没骨法为之，直接继承南田法，不用墨线勾勒轮廓，而是以色彩直接渲染出花卉的形态和质感，疏而不散，铺而不空，聚散分布井然有序，或倒垂，或上仰，或斜出，刻画细腻，清艳隽永。设色明净素雅又高贵动人，画家运用细腻的色彩过渡和渲染技巧，将各种花卉的颜色表现得淋漓尽致，相互搭配，和谐统一，形成了一个色彩斑斓又不失整体感的画面。画中暗含'玉堂富贵'的寓意，寓意职位高升、富裕显贵，表达了对美好生活的向往和追求。",location:"辽宁省博物馆",imageId:"0030"},{id:"qing006",title:"月夜山鸡图",artist:"任伯年",time:"清晚期",description:"《月夜山鸡图》描绘了一个月夜下的自然景象。画面中央一只雄壮的山鸡站立在岩石上，昂首挺胸，神态威武。山鸡羽毛色彩绚丽，红冠、金黄色羽翎和深色尾羽在月光下依然鲜明夺目。月色如水，月光照耀下的景物显得清晰而神秘，岩石、花草等环境元素以淡墨勾勒，营造出一种宁静而略带神秘的夜晚氛围。任伯年在构图上创新，借鉴西方透视法，同时融合中国传统花鸟画的特点，让画面既有现实感又充满诗意。",significance:"《月夜山鸡图》代表了任伯年融合中西方绘画技法的艺术成就。这幅作品体现了他对光影处理的娴熟掌握，在表现月光下物象的明暗变化方面独具匠心。任伯年运用西方写实手法与中国传统写意笔墨相结合的技巧，创造了既有中国画意蕴又具西方透视感的新风格，成为晚清'海派'画风的代表作品。这幅画不仅在技法上有所创新，在构图上也别具一格，以山鸡为主体，月色为烘托，简洁而富有表现力，体现了任伯年对自然观察的敏锐和艺术表现的才能。",location:"上海博物馆",imageId:"0031"}],famousArtists:[{name:"恽寿平",lifetime:"1633年-1690年",achievements:"清代著名画家，初名格，字寿平，又字正叔，别号南田，江苏常州府武进县人。创常州派，为清朝“一代之冠”。特点是以潇洒秀逸的用笔直接点蘸颜色敷染成画，讲究形似，但又不以形似为满足，有文人画的情调、韵味。与“四王”、吴历并称“清初六大家”。",story:"恽寿平善诗文和书法，诗被誉为“毗陵六逸之冠”。书法主要学褚遂良，被称为“恽体”。诗文书画成就皆斐然，尤长于没骨花卉，自称学北宋徐崇嗣法，重视写生，色彩明净，对明末清初花卉有'起衰之功'，被尊为'写生正派'。"},{name:"郑燮",lifetime:"1693年-1766年",achievements:"清代著名书画家、文学家，原名郑燮，字克柔，号理庵，又号板桥，人称板桥先生。擅画兰、竹、石、松、菊等，而画兰竹五十余年，成就最为突出。取法于徐渭、石涛、八大诸人，而自成家法，体貌疏朗，风格劲峭。工书法，用汉八分杂入楷行草，自称六分半书。",story:"郑板桥主张继承传统“十分学七要抛三”，不泥古法，重视艺术的独创性和风格的多样化，所谓“未画之先，不立一格，既画之后，不留一格”，对今天仍有借鉴意义。诗文真挚风趣，为人民大众所喜诵。其诗书画，世称“三绝”，是清代比较有代表性的文人画家。"},{name:"华岩",lifetime:"1682年-1756年",achievements:"华岩，字德嵩，更字秋岳，号新罗山人、东园生、布衣生等，福建上杭人，是清代著名的画家，为扬州画派的代表人物之一。他的绘画风格清新秀逸，兼工带写，在人物、山水、花鸟等方面都有很高的造诣。",story:"华岩生于康熙年间、卒于乾隆年间，经历'康乾盛世'，却一生贫苦，故老年自喻'飘篷者'。华岩一生大部分时间往来于扬州与杭州之间，卖画为生，并在杭州西湖附近筑简陋住宅，名曰'解弢馆'。他工画，善书，能诗，时称'三绝'，是清代'康乾盛世'享有很高声誉的绘画大家。他开创的兼工带写的花鸟小写意技法，与八大山人朱耷的水墨大写意技法和恽寿平的没骨写生技法，并称为清代花鸟画的三大创造性贡献，对晚清及近现代绘画的发展起着重要的启发作用。"},{name:"邹一桂",lifetime:"1688年-1772年",achievements:"邹一桂，字原褒，号小山，又号让卿，晚号二知老人，江苏无锡人。雍正五年二甲第一名进士，授翰林院编修。历官云南道监察御史、贵州学政、太常寺少卿、大理寺卿、礼部侍郎，官至内阁学士。擅画花卉，学恽寿平画法，风格清秀。",story:"邹一桂曾作《百花卷》，每种赋诗，一经进呈，皇上亦赐题绝句百篇，一桂复写一卷，恭录御制于每种之前，而书己作于后，藏于家。著有《小山画谱》、《大雅续稿》。他的花卉画继承了恽寿平的没骨技法，但风格更为清丽典雅，色彩更为典雅素雅，在清代宫廷画坛颇有影响。"},{name:"任伯年",lifetime:"1840年-1895年",achievements:"任伯年，原名颐，字伯年，号小楼，又署月叟、月老、缶道人等，上海嘉定人。清末著名画家，'海派'代表人物。擅长人物、花鸟、山水等多种题材，尤以人物、花鸟最为著名。他融合中西方技法，将传统笔墨与西方光影、透视相结合，创造出独特的艺术风格。",story:"任伯年出身贫寒，幼年家贫，以卖画为生。太平天国运动期间任伯年曾入杭州天平天国，担任过翼王石达开的幕僚，后流落上海，成为职业画家。他的绘画融入了西方绘画的透视和明暗法，同时又保持了中国画的传统神韵，善于观察生活，其人物画栩栩如生，花鸟画清新活泼，尤其是对市民生活的描绘，充满了生活情趣和人情味，对近现代中国画的发展产生了深远的影响。近代画坛有'南任北吴'之说，与吴昌硕齐名。"}],historicalContext:"没骨法的复兴与革新：恽寿平以“没骨写生”法重塑花卉画风，摒弃传统工笔勾线，直接以水墨或淡彩点染，形成“撞水撞色”的技法，使花卉呈现温润如玉的质感。其作品如《锦石有花图》以轻快线条和典雅设色表现自然生机，开创“常州画派”，成为清代花鸟画主流。宫廷绘画的融合与创新：中西合璧，郎世宁等欧洲传教士引入透视、光影技法，与中国传统工笔结合，形成“院体新格”。如郎世宁《花鸟图》以细腻晕染表现立体感，但题材仍以祥瑞为主。扬州八怪与世俗化倾向：扬州八怪（如郑燮、金农）以职业画家身份突破文人画藩篱，题材贴近市民生活，笔墨狂放。如郑燮以书法入画，竹石题材中融入刚劲笔法；李鱓融合石涛笔意，画风粗犷不羁。金石学的渗透：晚清赵之谦、吴昌硕将金石篆刻的苍劲笔法融入花鸟，如吴昌硕以篆书笔意画梅，线条浑厚凝重，开创“金石画派”，为近代花鸟画注入雄健气魄"},Dl=[fv,pv,mv,gv,_v];function Ul(s){return Dl.find(e=>e.id===s)}function sx(s){const e=Ul(s);return e?e.masterpieces:[]}function rx(s){const e=Ul(s);return e?e.famousArtists:[]}const er=[{id:"0001",title:"梅花山茶雪雀图",dynasty:"唐",period:"",artist:"边鸾",content:"一只梅花山雪雀在梅花山的悬崖上，旁边是一株参天古木。画面的上半部分是苍穹之高，下半部分是碧绿的群山。悬崖上的树木，峰峦叠翠，黄昏的余晖，深深地勾勒出梅花山之美。",technique:"",dimensions:"纵60.5cm，横34.8cm（卷轴中为画心部分）",location:"未知",yiyi:"梅花山茶雪雀图可以说是宋代自然艺术的典范。它反映了宋代艺术家们对自然的敬畏和崇尚，也展示了宋代自然艺术的独特优势。在宋代的梅花山，梅花山茶雪雀图依然为我们展示着宋代自然艺术的精致风采。"},{id:"0002",title:"梨花斑鸠图",dynasty:"唐",period:"",artist:"边鸾",content:"此画采用独创的'折枝法'，仅描绘一枝梨花与栖息的斑鸠，构图简洁而富有自然天趣。画面线条流畅，色彩淡雅，充分体现了唐代花鸟画的审美特点和艺术成就。",technique:"",dimensions:"纵159.1cm，横90.5cm",location:"已无真迹传世",yiyi:"《梨花斑鸠图》见证了唐代花鸟画独立发展历程，体现了边鸾高超的艺术技法，对后世花鸟画发展影响深远。其独特的题材、构图与色彩运用，丰富了花鸟画的表现形式，具有重要的历史价值和艺术意义。"},{id:"0003",title:"猿马图",dynasty:"唐",period:"",artist:"韩干",content:"绘有三猿，其中二猿悬挂在树顶，另一猿盘踞在石上，形态各异，或攀爬，或嬉戏，生动自然。其下绘黑白双骏，黑马垂首摆尾，呈腾跃之态，白马膘肥体壮，具神骏之姿，仿佛正并肩小跑前行。画面还描绘了竹石树林，树木枝干虬曲，竹叶随风摇曳，石头形态各异，与猿马相互映衬，营造出自然生动的氛围。",technique:"",dimensions:"纵136.8cm，横48.58cm",location:"台北故宫博物院",yiyi:"《猿马图》具有重要的历史价值，它反映了宋末元初的绘画风格与技法特点，为研究这一时期的绘画发展提供了珍贵的实物资料。其艺术意义非凡，以精湛的写实技法生动呈现猿马形态，展现出画家高超的技艺，对后世同类题材绘画创作具有深远的影响和借鉴作用。画上宋徽宗题字和 “御书” 一玺，及理宗 “缉熙殿宝” 玺皆伪，当为后加，可能曾被乾隆皇帝赏玩，他还为此画题诗 “既云意寓参同契，凌厉超腾又底为”"},{id:"0004",title:"芙蓉锦鸡图",dynasty:"宋",period:"",artist:"赵佶",content:"图中芙蓉盛开，从左侧伸出，一枝向上斜出，一枝向右横曳，随风轻轻颤动，娴静而优雅。一只五彩斑斓的锦鸡蓦然飞临芙蓉的枝头，压弯了枝头，却浑然不顾，已回首翘望右上角那对翩翩起舞的彩蝶，跃跃欲试，生动地表现出了锦鸡的动态与神情。右上两只彩蝶上下流连，相互追逐嬉戏，轻盈灵巧，不仅为画面增添了动感，也吸引了锦鸡的目光，成为画面的视觉焦点之一。左下角斜出几枝菊花，修长而富有弹性，花与叶都玲珑又精致，与宽大舒展的芙蓉叶形成对比，既丰富了全图的线条，又渲染出了秋天的氛围。右上宋徽宗赵佶以瘦金体题 “秋劲拒霜盛，峨冠锦羽鸡。已知全五德，安逸胜凫鹥”，右下书款 “宣和殿御制并书”，草押书 “天下一人”。画内藏印有 “万历之宝”“乾隆御览之宝”“嘉庆御览之宝”“宣统御览之宝” 等。",technique:"",dimensions:"纵81.5cm，横53.6cm",location:"北京故宫博物院",yiyi:"《芙蓉锦鸡图》是北宋时期绘画风格的典型代表，反映了当时皇家审美和画院绘画的最高水平，为研究北宋时期的艺术发展、文化氛围以及审美观念等提供了珍贵的实物资料。此画将诗、书、画、印完美结合，开创了中国绘画史上的新传统，对后世花鸟画的发展产生了深远影响，其精湛的绘画技法和独特的艺术风格，成为后世画家学习和借鉴的典范"},{id:"0005",title:"桃鸠图",dynasty:"宋",period:"",artist:"赵佶",content:"桃花盛开与含苞待放相互映衬，花瓣如丝绸般柔软，色泽鲜艳粉嫩，白中透红，娇艳欲滴。枝叶细嫩柔滑，脉络清晰可见，桃枝线条勾勒精细入微，展现出生命的脉络。一只体形肥硕的绿色鸠鸟安静地停栖在桃枝上，缩着脖颈，尾羽自然下垂。其羽毛色彩典雅，绿背闪烁着独特光泽，眼神清澈明亮，鸟喙刻画逼真，胸腹部绒毛细腻柔软，仿佛一团轻柔的云朵。",technique:"",dimensions:"纵26.1cm，横28.5cm",location:"位于日本，个人收藏",yiyi:"《桃鸠图》是北宋时期花鸟画的代表作品之一，此画以其精湛的技艺和独特的艺术风格，成为折枝花鸟画的经典之作，对后世花鸟画的发展产生了深远影响，其工笔细腻、色彩艳丽、神态生动等特点，反映了当时宫廷绘画的风格和审美趣味，为研究北宋时期的艺术发展、文化氛围以及审美观念等提供了珍贵的实物资料。"},{id:"0006",title:"五色鹦鹉图",dynasty:"宋",period:"",artist:"赵佶",content:"画中一只五色鹦鹉侧身栖于杏花枝头，嘴厚眼圆颈粗，羽翼齐整，足脚有力，显得心满意足，无忧无虑。鹦鹉羽毛呈五色，黑、灰、红、绿相间，鲜丽耀日，头呈黑灰色，脖颈呈深红色，翅羽、尾羽呈浅绿色。眼睛大而有神，正炯炯注视眼前繁茂的杏花，眼睛以生漆点之，呼之欲活。鹦鹉露出一足紧紧抓住杏枝，另一足微露脚爪，足角质鳞片也悄然画出。",technique:"",dimensions:"纵53.3cm，横125.1cm",location:"美国波士顿美术馆",yiyi:"此画展现了宋徽宗赵佶 “妙体众形” 的深厚功力，体现了宋代宫廷绘画注重写实、追求意境的特点，其写实派的表现手法以及精细的工笔技法、和谐的色彩搭配等，对后世 “院体画” 的发展产生了重要影响"},{id:"0007",title:"八花图",dynasty:"元",period:"",artist:"钱选",content:"以分段法描绘了海棠、梨花、杏花、水仙、桃花、牡丹等 8 种花卉，每种花卉相对独立，合之又成为整体。花卉各具姿态，偃仰向背绝无雷同，出枝均为从下到上，保持花草树木自然之姿，部分还保留截取时的自然痕迹，以最自然的构图形式还原最初的状态",technique:"",dimensions:"纵29cm，横33.3cm",location:"北京故宫博物院",yiyi:"钱选在继承北宋、南宋花鸟画传统的基础上，进行了创新和发展，将浓艳富丽的画风转变为工致淡雅，由宫廷化的装饰感走向文人士大夫所重的清澈自然，为研究元代艺术发展、文化氛围以及审美观念等提供了珍贵的实物资料。同时，赵孟頫的题跋也为作品的断代和流传提供了重要的历史依据"},{id:"0008",title:"花鸟图卷",dynasty:"元",period:"",artist:"钱选",content:"钱选《花鸟图卷》以分段法依次绘出春桃枝头翠鸟伫立、粉白牡丹摇曳生姿、寒梅老干新枝错落的画面，展现海棠、牡丹、梅花等花卉与禽鸟的生动形态 。",technique:"",dimensions:"纵38cm，横316.7cm",location:"天津博物馆",yiyi:"钱选在继承宋代院体花鸟画的基础上，进行了创新和发展，将浓艳富丽的画风转变为工致淡雅，其独特的 “水洗法” 等技巧也为后世画家提供了新的技法借鉴"},{id:"0009",title:"桃竹锦鸡图",dynasty:"元",period:"",artist:"王渊",content:"画幅正中的太湖石上，一只锦鸡悠闲地梳理着胸前的羽毛，春风中绽放的山桃枝上，一只活泼的山雀正在昂首吟唱，身旁的几枝竹叶穿插其间。远处的溪水载着几片摇落的花瓣缓缓流出，拍打着长满浅浅草芽的溪岸及岩石，回荡起片片涟漪'以墨代色'的新风，兼具工整与写意之美。",technique:"",dimensions:"纵102.3厘米，横55.4厘米",location:"北京故宫博物院",yiyi:"锦鸡在中国文化中具有吉祥寓意，古人认为鸡有文、武、仁、勇、信五德，常将其比拟为仁人君子，锦鸡生有斑斓的羽毛和漂亮的长尾，因此常常被取之入画。桃花象征着春天、繁荣和美好，竹子则代表着坚韧、高洁和君子之风。整幅画营造出一种安静祥和、雅意周正的氛围，展现了大自然的生机与和谐，也寄托了画家对美好生活的向往与追求。'以墨代色'的新风，其作品兼具工整与写意之美，对后世花鸟画的发展产生了深远影响"},{id:"0010",title:"狮头鹅图",dynasty:"明",period:"",artist:"吕纪",content:"此画生动描绘了一只头部如狮子般雄壮的白鹅。吕纪以精湛的工笔技法刻画鹅的羽毛和形态，线条流畅有力，色彩清新明丽，体现了明代院体花鸟画的写实传统和艺术成就。",technique:"",dimensions:"纵192.5cm，横106cm",location:"辽宁省博物馆",yiyi:"《狮头鹅图》艺术价值极高，技法精湛、构图巧妙、意境深远，展现出画家高超技艺。其历史意义重大，反映明代绘画风貌，传承绘画技艺，承载丰富文化内涵，对研究美术史及文化传承有重要作用"},{id:"0011",title:"桂菊山禽图",dynasty:"明",period:"",artist:"吕纪",content:"画面中高大茂盛的桂花树占据显著位置，树干苍健，长满疤节，绿叶茂密，树枝相互交错，枝头桂花簇聚，黄色金桂似散出阵阵幽香。桂树下生长着野草和形状各异的石头，石后几株菊花正开得鲜艳，红、黄、粉、白等色彩斑斓，竞相斗艳。桂树上栖落着几只八哥，有两只正隔着树枝对唱，一只正翘首远眺。在低一些的树枝上，有一只蓝色绶带鸟朝着树下鸣叫，其黑白相间的羽翼间长着蓝色羽毛，嘴和爪子为红色。树下的三只绶带鸟，正在争食一只草虫，它们翘起高高的羽翎，晃动着色彩艳丽的长尾。",technique:"",dimensions:"纵100cm，横55.7cm",location:"北京故宫博物院",yiyi:"《桂菊山禽图》以工笔重彩与水墨写意交融的技法，勾勒出桂花繁茂、菊英缤纷，禽鸟姿态鲜活的画面，色彩艳丽而不失雅致，构图疏密有致，尽显艺术匠心。其历史意义非凡，既传承宋元院体画精髓，又彰显明代宫廷富贵华丽的审美风尚，是研究明代绘画风格演变与宫廷艺术趣味的珍贵实证。"},{id:"0012",title:"竹鹤图",dynasty:"明",period:"",artist:"边景昭",content:"画面中描绘了两只在溪水之畔、竹荫之下的丹顶鹤。一只意欲低头汲水，另一只单腿独立，弯着颈项梳理着自己的羽毛，神态悠闲。双鹤造型准确，朱冠、黑颈、白羽毛、黑飞翅对比鲜明，尤其是全身白色羽毛，写实技巧高超，极有真实感",technique:"",dimensions:"纵180.4cm，横118cm",location:"北京故宫博物院",yiyi:"边景昭的工笔重彩花鸟主要继承宋代院体花鸟面貌，而《竹鹤图》是其代表作，是明初 “院体画” 的典型代表，为研究明代宫廷文化和艺术发展提供了珍贵的实物资料"},{id:"0013",title:"秋海棠图",dynasty:"清",period:"",artist:"恽寿平",content:"画面中，三两根海棠从右下方入画，海棠树枝头挂满了红艳夺目的果子，鲜嫩欲滴，引人垂涎",technique:"",dimensions:"纵60cm，42cm",location:"北京故宫博物院",yiyi:"该作品反映了明末清初时期的绘画风格和审美趋势，是常州画派的重要代表作品之一，对于研究中国绘画史的发展演变，特别是清代花鸟画的发展历程具有重要的历史意义，有助于我们了解当时的艺术风貌和文化背景"},{id:"0014",title:"九兰图",dynasty:"清",period:"",artist:"恽寿平",content:"画面描绘了九种不同品类的兰花，以恽寿平独创的'撞水撞色'技法表现兰花的优美姿态和清雅气质。整幅作品设色淡雅，笔法精微，兰叶挺拔，兰花清秀，充分体现了'南田画派'的艺术特色。",technique:"",dimensions:"纵23.4cm，横60.8cm",location:"北京故宫博物院",yiyi:"该画创作于初秋时节，是恽寿平为答谢友人赠兰雅谊，同时也寄托了对远行至闽海的澹贻堂主人的怀念之情，作为常州画派的开山之作，《九兰图》标志着恽寿平 “以极似求传神” 的艺术理念成熟，其 “摄情” 美学深刻影响了清代花鸟画的发展，被后世誉为 “没骨花卉的创意典范”"},{id:"0015",title:"兰竹图",dynasty:"清",period:"清中期",artist:"郑燮",content:"运用浓淡墨色来表现兰竹的形态和质感。以浓墨绘制兰叶和竹枝的关键部位，如兰叶的尖端、竹节等，使画面更具层次感和立体感；用淡墨渲染竹叶和兰花的部分，展现出其轻盈、飘逸的感觉，体现出郑板桥 “以少少许胜多多许” 的笔墨理念。",technique:"水墨写意、书法用笔、六分半书",dimensions:"纵90cm，横50cm",location:"北京故宫博物馆",yiyi:"作品蕴含着深厚的中国传统文化内涵，兰竹所代表的高洁、坚韧等品质，是中国传统文化中对君子品德的推崇，这幅画将这些文化精神以艺术的形式展现出来，具有传承和弘扬中国传统文化的重要意义"},{id:"0016",title:"江帆楼阁图",dynasty:"唐",period:"盛唐时期",artist:"李思训",content:"《江帆楼阁图》是唐代画家李思训创作的一幅绢本绘画作品，是中国早期青绿山水画风格的代表作品。画面近景江岸错落有致，桃、松、竹等树木郁郁葱葱，楼阁庭院在山石树木间若现。坡岸之上，两人正临水驻足，赏春抒怀。中景山中树木茂盛，有四人沿山上小路而来，主人骑马，三个仆人或引领，或挑担，或提物，前后簇拥而行。远景江水荡漾，几叶扁舟凌驾于万顷茫然之上，江天壮阔浩渺。",technique:"青绿山水、金碧设色、散点透视",dimensions:"纵101.9厘米，横54.7厘米",location:"台北故宫博物院",yiyi:"《江帆楼阁图》是中国早期青绿山水画风格的代表作品，体现了李思训精湛的艺术技法和审美理念。画作构图阔远，不画江岸边际，显得烟水浩瀚，境界宽广，运用散点透视法，聚万千景象于一纸之上。采用一角式的构图法，视觉重点位于左侧，以山之一角衬浩瀚江波，以树之青翠欲滴烘托沁人心脾的清凉。以石青、石绿为主的色彩设计，在部分墨线转折处勾以金粉提示，即所谓的'青绿为质，金碧为纹'，'阳面涂金，阴面加蓝'，很好地表现出山石的阴阳向背及质感，有金碧辉煌的装饰效果。作品钤有'缉熙殿宝''安''仪周鉴赏'以及乾隆、嘉庆、宣统诸玺，历史价值极高。对后世的山水画创作产生了深远的影响，是研究唐代绘画和李思训风格的重要作品。"},{id:"0017",title:"明皇幸蜀图",dynasty:"唐",period:"盛唐时期",artist:"李昭道",content:"《明皇幸蜀图》是唐代画家李昭道创作的一幅绢本作品，描绘了唐玄宗避难途中的场景。画面以崇山峻岭为背景，山峰高耸入云，白云缭绕其间，山路曲折蜿蜒，栈道高悬于悬崖峭壁之上，展现出蜀道的艰难险阻。画中人物众多，皆为唐朝时期的服饰装扮，唐玄宗骑在一匹枣红色的三花马上，位于画面右下部，正欲过桥，其马惊蹶停步，生动地表现出唐玄宗避难途中的惊慌心理。玄宗身后有骑马随从及身穿胡装、头戴帷帽的嫔妃多人。画中部有一处人仰马翻的场景，筋疲力竭的马匹和人物，生动地刻画了逃难途中的艰辛与不易。",technique:"青绿山水、历史叙事、细劲线条",dimensions:"纵55.9厘米，横81厘米",location:"台北故宫博物院",yiyi:"《明皇幸蜀图》是记录唐代历史事件的重要画作，采用散点透视的方法和全景式构图，把高峻的山峰、潺潺的泉水、曲折的山路、茂密的树林、活动着的人物、驮马等综合到一幅画面上，既详细描述了历史事件，又充分发挥了山水画的审美功能，使画面具有强烈的视觉冲击力。以细劲的线条勾勒物象，线条刚劲有力，带有铁线描的特点，能表现出山石的硬度和质感，同时也清晰地表现了每一物象自身的体积关系，人物、马匹等的形态也通过细腻的线条得以精准呈现。色彩以石青、石绿等矿物颜料为主，色彩富丽堂皇，整体画面展现了唐代绘画的高超技法，是研究李昭道艺术的重要作品。"},{id:"0018",title:"雪景寒林图",dynasty:"宋",period:"北宋",artist:"范宽",content:"画面主体为皑皑白雪覆盖下的群山和寒林。远景是雄伟的雪山，山势巍峨，连绵起伏，主峰高耸入云，展现出磅礴的气势。中景是一片寒林，树木枝干虬曲，形态各异，有的枝干上残留着积雪，有的则光秃秃地伸向天空，在寒风中显得坚韧而孤寂。近景是一条曲折的溪流，溪边有巨石和枯树，溪水在冰雪的映衬下仿佛凝固了一般，更增添了画面的寒冷氛围。",technique:"雨点皴、水墨、皴擦",dimensions:"纵128厘米，横103厘米",location:"天津博物馆",yiyi:"此画是范宽艺术风格的典型代表，也是中国古代山水画中的珍品。画作采用全景式构图，将高远、深远、平远等多种透视方法相结合，使画面层次丰富，空间感强烈。范宽运用了他擅长的'雨点皴'来表现山石的质感和纹理，通过密集的墨点，生动地描绘出了山石的坚硬和粗糙。对于研究北宋时期的绘画风格、技法以及当时的社会文化背景等方面都具有重要的价值。"},{id:"0019",title:"层叠冰绡图轴",dynasty:"宋",period:"南宋",artist:"马麟",content:"图中所画两枝梅花据称为绿萼梅，是梅花中的名贵品种。枝干细秀劲挺，一枝高昂扬起，伸至画面右中部，枝疏花密，花朵绽开；一枝低垂叶艳，由画幅右侧横出，伸展画幅中部与另一挺拔高枝相呼应，两枝枝干清瘦如铁，一俯一仰，婀娜多姿。花朵繁密俏媚，枝头的朵朵繁花与点点未放的花苞相互交错。画家以细笔点画花瓣，精致柔嫩，充分表现出了梅花的清幽冷艳。",technique:"双勾填色法、没骨法",dimensions:"纵101.7厘米，横49.6厘米",location:"北京故宫博物院",yiyi:"此画是南宋院体风格的代表作。马麟运用了双勾填色法，先用淡墨细线精微勾勒出花瓣、花萼和枝干的轮廓，再层层填色，使花色显得华丽鲜艳，娇嫩可爱。同时，在花瓣外沿和背面又厚施白粉加以强调，将梅花冰清玉洁、如纱似绢的姣美形象表现得极其完美。构图简洁而富有韵味，采用折枝花的手法，以少胜多，仅绘两枝梅花却能展现出丰富的画面效果。杨皇后的题字和题诗不仅赞美了梅花的美丽，也将其比作汉宫中的美女，使得画作的情感表达更加丰富，充满了诗情画意，提升了画作的文化内涵和艺术价值。"},{id:"0020",title:"溪山行旅图",dynasty:"宋",period:"北宋",artist:"范宽",content:"画面远景主峰要仰视，中景山峰、树木、商队是平视，近景巨石溪水可俯视，使观者与画中景物之间形成巨大的空间距离。从深远瀑布到突兀大石，再到'碑式'主峰巍然挺立，范宽通过简洁的团块造型塑造了山石的体量感，将画面由正面刻画逐渐引向深远。近景和中景巨石横斜之势，起着底座的作用，前、中景与后景以3:7的黄金比例分开在中轴线上，大跨度的跳跃上升，完美地凸显了主峰的磅礴气势。区隔承转近、中景的是一道河滩小路，景中两个人赶着四头驮着货物的驴子十分渺小与大山形成了鲜明对比，体现出人于自然虽是匆匆过客，却又'天人合一'的思想。",technique:"雨点皴、豆瓣皴、披麻皴、卷云皴、刮铁皴、短条子皴",dimensions:"纵206.3厘米，横103.3厘米",location:"台北故宫博物院",yiyi:"《溪山行旅图》是范宽的代表作，也是中国山水画的经典之作。画中描绘的山体原形据考是陕西华原（今耀州）的照金山一带。范宽运用了复合多变的笔法表现山石、建筑、人与动物，用'雨点皴'等多种皴法表现不同位置岩石的肌理，完美地提炼了秦岭的山体特色。这一技法不但丰富了中国山水画笔法的表现形式，还对以后的积墨法产生了重要的影响。北宋李唐的《万壑松风图》、南宋萧照的《关山行旅》、夏圭的《山水轴》都是受其影响的作品。"},{id:"0021",title:"山居图",dynasty:"元",period:"元代",artist:"钱选",content:"此图展现了一幅宁静而优美的山居景象。画面以高远和深远的构图方式，描绘了远处起伏的山峦，山上植被茂密，云雾缭绕。山间有清泉流淌，形成一道瀑布直泻而下。近处是一片宁静的湖水，湖边有树木环绕，枝叶繁茂。湖旁有一处幽静的山居，房屋错落有致，周围有篱笆环绕，展现出一种与世无争的田园生活氛围。屋内有人或坐或立，神态悠然，仿佛在享受着这宁静的时光。",technique:"分段式构图、中锋勾勒、侧锋皴擦",dimensions:"纵26.7厘米，横111.6厘米",location:"北京故宫博物院",yiyi:"《山居图》是钱选的代表作之一，具有很高的艺术价值。它不仅体现了钱选独特的绘画风格和艺术成就，也反映了元代山水画的发展特点和审美倾向。钱选是宋末元初的画家，入元后他不愿出仕，过着隐居的生活。《山居图》反映了他对隐居生活的向往和追求，以及对自然山水的热爱。在这幅画中，他通过对山居环境的细致描绘，寄托了自己的情感和理想，展现了一种超脱世俗、宁静致远的心境。对于研究元代的社会文化、文人心态以及绘画技法的演变等方面都具有重要的参考价值。它在中国绘画史上占有重要的地位，对后世的绘画创作产生了深远的影响。"},{id:"0022",title:"墨梅图",dynasty:"元",period:"元代",artist:"王冕",content:"枝干：画面上的梅花枝干或从左边上角向右下斜伸而出，或自下而上曲昂仰首，或倒挂左伸右展，枝干舒展自然、挺秀有力，如弯弓秋月，尽显苍劲之姿。花朵：数十朵白梅花分布在枝干上，形态各异，有的含苞待放，花蕾圆满充实；大部分花则竞相吐艳，正侧偃仰，千姿百态。",technique:"水墨写意、折枝构图",dimensions:"纵31.9厘米，横50.9厘米",location:"北京故宫博物院",yiyi:"《墨梅图》的艺术价值和历史意义非凡。构图方面，简洁而富有韵味，布局十分得体，疏枝与繁花相互映衬，形成独特的韵律感。笔法上，继承了北宋扬无咎派的传统，又自出新意，笔力挺劲，运用独特的顿挫方法，以简练的笔触勾勒出梅花的枝干与花瓣，生动地刻画了梅花含笑盈枝之态。用墨大胆而有力，浓淡相间，以清淡的水墨写生，仅花蕊处重墨加点，枝干与花朵浓淡对比较强，充分展现了梅花的生机与活力，也显示出梅花的丽质，营造出一种空灵而高洁的意境。在文化内涵上，梅花在中国文化中象征着坚韧、高洁和自强不息的精神。王冕通过绘制墨梅，将自己的情感和志向寄托于梅花之上，表达了对这种精神的崇尚和追求。作为元代末期的名作，王冕的《墨梅图》神韵秀逸，对明清画坛产生了十分深远的影响，成为后世画家学习和借鉴的典范。他开创的以繁花密蕊表现梅花的新图式，丰富了中国传统花鸟画的表现手法和审美内涵，在中国绘画史上占有重要的地位。"},{id:"0023",title:"枯木竹石图",dynasty:"元",period:"元代",artist:"吴镇",content:"枯木：画面中枯木枝干虬曲，枝桠伸展，仿佛在向人们展示着岁月的沧桑。枯木的形态古雅清逸，尽显苍劲之姿，其用笔沉着、雄健、简率，将枯木的质感和神韵表现得淋漓尽致。竹子：竹子生长在石头旁边，或挺拔直立，或随风摇曳，竹叶疏密有致，以浓墨画出，笔力挺劲，展现出竹子的坚韧与生机，体现了吴镇高超的写竹技法。石头：石头尖峭如削，以类似李唐的大斧劈皴写出，其势略向左倾。吴镇运用浓淡相间的墨色对石头进行皴染，表现出石头的立体感和质感，使石头仿佛真实地屹立在那里。",technique:"苍郁饱满墨法、浓淡干湿变化",dimensions:"纵103.3厘米，横33.3厘米",location:"北京故宫博物院",yiyi:"《枯木竹石图轴》是中国绘画史上的经典之作，具有很高的艺术价值和历史价值。吴镇生活在元朝，社会动荡不安，民族矛盾和阶级矛盾尖锐。他一生隐居不仕，以卖卜为生，这种生活经历使得他对自然和人生有着深刻的感悟。《枯木竹石图轴》正是他在这种心境下创作的，通过描绘枯木、竹石等自然元素，表达了他超脱世俗、追求自然和宁静的心境，同时也借竹子的坚韧和石头的坚硬，隐喻自己在困境中坚守自我、不屈不挠的精神。此画不仅体现了吴镇独特的绘画风格和艺术成就，也反映了元代山水画的发展特点和审美倾向，对后世的绘画创作产生了深远的影响，为研究元代绘画艺术提供了重要的实物资料。"},{id:"0024",title:"墨竹坡石图轴",dynasty:"元",period:"元代",artist:"吴镇",content:"坡石：画面下方绘有一块坡石，以淡墨皴擦，浓墨点苔，表现出坡石的纹理和质感，其形态古朴，轮廓线条简洁流畅，似是经过岁月的冲刷和磨砺，给人一种沉稳、厚实的感觉。竹子：坡石旁生长着几竿墨竹，主干挺拔有力，以中锋用笔，节节向上，表现出竹子坚韧的气质。竹叶则以浓墨撇写，有偃有仰、有正有侧，疏密相间，层次分明，仿佛在微风中轻轻摇曳，充满了生机与活力。",technique:"书法用笔、多变墨色",dimensions:"纵80厘米，横31厘米",location:"上海博物馆",yiyi:"这幅画是吴镇墨竹画的典型代表，体现了他在墨竹绘画领域的独特风格和卓越成就，对后世墨竹画的发展产生了重要影响。吴镇画竹的笔法极为精湛，他以书法入画，运用多种笔法来表现竹子的不同部位和质感。画竹干时，行笔沉稳，笔力遒劲，体现出竹子的挺拔之姿；画竹叶时，运笔灵动，或疾或徐，或轻或重，通过笔触的变化表现出竹叶的丰富形态。墨色运用上，吴镇注重浓淡干湿的变化，通过巧妙的墨色层次来营造画面的立体感和空间感，增强了画面的整体意境。吴镇生活在元代，当时汉族文人在政治上受到压抑，许多人选择寄情于山水之间，以绘画来表达自己的情感和心境。吴镇一生隐居不仕，对自然有着深厚的情感和独特的感悟，他常以竹石等为题材进行创作，借竹子的高风亮节和石头的坚韧不拔来象征自己的品格和精神追求，《墨竹坡石图轴》便是在这样的背景下诞生的。"},{id:"0025",title:"梅花小鸟",dynasty:"明",period:"明末",artist:"陈洪绶",content:"画面中描绘了几枝梅花，枝干虬曲多姿，梅花或绽放，或含苞待放，以简洁而富有韵味的笔触表现出梅花的形态和神韵。一只或几只小鸟栖息在梅枝上，小鸟的姿态各异，或低头啄羽，或引颈张望，或展翅欲飞，生动形象地刻画了小鸟的活泼可爱。陈洪绶的人物画造型独特，富有夸张和变形，在《梅花小鸟》中，这种风格也有所体现。梅花枝干的形态古朴奇特，小鸟的造型也并非完全写实，而是经过了一定的艺术加工，具有一种古拙的美感，使其超脱于自然的一般形态，更具艺术感染力。",technique:"刚劲线条、典雅设色",dimensions:"纵132.5厘米，横52.5厘米",location:"私人收藏",yiyi:"作品体现了陈洪绶独特的艺术风格，他以刚劲有力的线条来勾勒梅花的枝干和小鸟的轮廓。线条粗细有致，顿挫分明，既表现出梅花枝干的坚硬和挺拔，又体现了小鸟羽毛的细腻和质感，使画面具有一种强烈的形式美感和装饰性。在色彩运用上，陈洪绶注重色彩的搭配和对比，设色典雅古朴。梅花的颜色通常以淡粉色或白色为主，点缀以淡淡的黄色花蕊，与枝干的墨色形成鲜明对比，小鸟的羽毛则根据不同的种类施以相应的色彩，色彩鲜艳而不张扬，整体色调和谐统一，营造出一种宁静、高雅的氛围。陈洪绶生活在明清交替的动荡时期，社会的变革和人生的起伏对他的绘画风格产生了深远影响。他的作品常常流露出一种对现实的不满和对理想世界的追求。《梅花小鸟》这类作品可能也是他在借梅花的高洁和小鸟的自由，来表达自己内心深处对宁静、自由生活的向往，以及对美好事物的赞美和追求。"},{id:"0026",title:"梅石图轴",dynasty:"明",period:"明末",artist:"陈洪绶",content:"此图以简洁而富有张力的构图展现出梅石相依的景致。画面中，一块嶙峋的巨石占据了画面的左侧，巨石以古朴苍劲的笔法勾勒，石面的纹理通过细腻的皴擦表现出来，显得质感强烈，仿佛历经岁月的沧桑。梅树从巨石右侧斜出，枝干曲折向上，姿态婀娜。梅树枝干以劲挺的线条描绘，表现出其坚韧的气质。枝头梅花或绽放，或含苞，花朵以淡墨点染，再用重墨勾勒花蕊，显得清新雅致，与粗壮的枝干形成鲜明对比，展现出梅花的娇艳与坚韧。",technique:"铁线描法、浓淡墨色运用",dimensions:"纵115.2厘米，横56厘米",location:"台北故宫博物院",yiyi:"在技法上，陈洪绶融合了多种传统绘画技巧并加以创新。他的线条刚劲有力，如“铁线描”般流畅而富有弹性，无论是勾勒梅枝还是描绘石块，都能精准地表现出物体的形态和质感。墨色运用上，浓淡干湿相得益彰。以浓墨表现梅树枝干的暗处和石块的纹理凹陷处，增强了画面的立体感和层次感；用淡墨渲染梅花和石块的亮部，使画面呈现出一种柔和的光影效果，营造出宁静雅致的氛围。陈洪绶的《梅石图轴》体现了他独特的艺术风格。他的作品常常具有一种古拙、高逸的气质，这幅画也不例外。画面中的梅石形象经过他的艺术加工，既具有写实的成分，又带有夸张和变形的元素，展现出一种超脱自然的美感。这种风格既继承了宋代绘画的严谨写实，又融入了明代文人画的写意精神，形成了自己独特的艺术语言，对后世绘画产生了深远的影响。梅与石在中国传统文化中都具有丰富的象征意义。梅花傲雪凌霜，是坚韧不拔、高洁品格的象征；石头则寓意着坚定、沉稳。陈洪绶通过描绘梅石图，可能意在表达自己对高尚品格的追求和坚守，以及在复杂的社会环境中保持内心的坚定和纯净。"},{id:"0027",title:"驴背吟诗图轴",dynasty:"明",period:"明中晚期",artist:"徐渭",content:"此画以简洁的笔墨勾勒出驴和人物的形态。画面中，一老者骑在驴背上，悠然自得，仿佛在吟诗构思，人物神态生动，毛驴的形态也憨态可掬。徐渭以其独特的大写意画风，运用豪放、泼辣的笔墨，通过浓淡干湿的变化，将驴和人物的形象刻画得淋漓尽致，展现出一种古朴、自然的意境，同时也流露出画家自身的情感和心境，体现了他不拘一格、自由奔放的艺术风格。",technique:"水墨大写意、墨法丰富",dimensions:"纵54厘米，横30厘米",location:"北京故宫博物院",yiyi:"徐渭在绘制《驴背吟诗图轴》时，运用了丰富多变的笔法。如在画驴的身体时，以较为粗壮、沉稳的线条来表现其结实的体态，线条流畅而富有张力，体现出毛驴的健壮。画驴的鬃毛和尾巴时，则采用了较为洒脱、灵动的笔触，似不经意间挥洒而成，却生动地表现出毛发的质感和动态。在描绘人物时，笔法更加细腻，通过简洁的线条勾勒出人物的面部表情、身体姿态以及衣物的褶皱，展现出人物悠然闲适的神情。他的墨法运用堪称一绝。以淡墨来渲染驴的身体轮廓和明暗关系，使驴的形象具有立体感和层次感。在驴的背部和腿部等部位，适当加重墨色，以突出其结构和体积感。对于人物的衣物，也通过墨色的浓淡变化来表现其质感和光影效果。背景部分则以淡墨轻染，营造出一种朦胧的氛围，使整个画面更具意境。整幅作品营造出一种充满诗意的氛围。驴背之上的老者，头戴斗笠，身着长袍，在驴的缓缓前行中，沉浸于吟诗的情境之中。周围的环境虽然描绘简略，但通过墨色的渲染和留白，让人仿佛能感受到微风拂面、山林静谧的氛围，仿佛老者正置身于一个远离尘嚣的诗意世界里，引发观者无尽的遐想，使人们能够感受到画家所追求的那种宁静、高远的精神境界。"},{id:"0028",title:"水墨牡丹图轴",dynasty:"明",period:"明中晚期",artist:"徐渭",content:"这幅作品体现了徐渭独特的艺术风格。他以水墨大写意的手法来描绘牡丹，用豪放洒脱的笔触和浓淡变化丰富的墨色，展现出牡丹的神韵。画面中，牡丹的花朵以淡墨晕染，花瓣层次丰富，看似随意的几笔却生动地表现出花朵的形态与质感，仿佛在微风中轻轻摇曳。叶片则以浓墨挥洒，墨色淋漓，富有动感和生命力，与淡雅的花朵形成鲜明对比。整幅画布局简洁，却通过笔墨的运用传达出一种大气磅礴、不拘小节的气质，既展现了牡丹的娇艳富贵之态，又赋予了其一种超凡脱俗的文人气息，是徐渭将个人情感与自然物象相融合的佳作，也反映了他对传统花鸟画的创新与突破。",technique:"大写意、泼墨法",dimensions:"纵109.2厘米，横33厘米",location:"北京故宫博物院",yiyi:"徐渭在《水墨牡丹图轴》中对墨色的运用达到了炉火纯青的境界。他以墨代色，通过墨的干湿、浓淡、焦润等多种变化来表现牡丹的不同部位和质感。例如，用浓墨勾勒牡丹的枝干，表现出枝干的苍劲有力，仿佛承载着生命的力量；以淡墨渲染花朵，使花瓣呈现出柔和、娇嫩的质感，仿佛能感受到花瓣的细腻纹理；在叶片上，则运用了丰富的墨色层次，从浓墨的叶尖到淡墨的叶根，表现出叶片的立体感和光影变化，使叶片看起来更加生动逼真，富有生机。徐渭的笔触极具个性和表现力。他运用豪放不羁的笔触来描绘牡丹，有的笔触如疾风骤雨，快速而有力，表现出牡丹的动态和生命力；有的笔触则细腻柔和，如轻抚花瓣，展现出牡丹的娇艳与柔美。徐渭一生坎坷，怀才不遇，他将自己的人生经历和情感融入到这幅《水墨牡丹图轴》中。牡丹通常被视为富贵、繁荣的象征，但徐渭笔下的牡丹却以水墨表现，摒弃了传统的艳丽色彩，这或许暗示着他对世俗富贵的不屑和超脱。同时，牡丹在风雨中依然保持着坚韧的姿态，也象征着徐渭自己在困境中不屈不挠的精神，他以牡丹自比，表达了自己虽身处逆境，但依然坚守内心的高洁和对艺术的执着追求。"},{id:"0029",title:"疏树归林图",dynasty:"清",period:"清中期",artist:"华岩",content:"画面中描绘了几株形态各异的树木，树干以淡墨勾勒，线条流畅而富有变化，表现出树干的纹理和质感。树枝则用干笔皴擦，再以淡墨渲染，呈现出一种疏朗、苍劲的韵味。树叶的表现手法丰富多样，有的以点厾法画出，浓淡相间，富有层次感；有的则以简洁的线条勾勒，寥寥数笔，便生动地表现出树叶的形态和疏密关系。远处的山林以淡墨晕染，营造出一种朦胧的氛围，与近处的树木形成虚实对比，使画面具有深远的空间感。山林的轮廓起伏有致，展现出大自然的山川之美。在画面的一角，有一位身着长袍的隐士正缓缓走向山林。人物的描绘较为简洁，以线条勾勒出人物的姿态和轮廓，通过人物的动态和神情，传达出一种悠然自得、回归自然的心境。",technique:"雨点皴、水墨、皴擦",dimensions:"纵35厘米，横40厘米",location:"北京故宫博物院",yiyi:"《疏树归林图》是华岩艺术风格的典型代表，体现了他高超的绘画技艺。他在这幅画中运用了多种笔墨技法，线条灵活多变，既有细腻流畅的勾勒，又有粗犷豪放的皴擦，使画面富有节奏感和韵律感。在用墨方面，他注重墨色的浓淡干湿变化，通过巧妙的运用，使画面层次分明，富有立体感。画面采用了简洁的构图方式，以疏树和归林为主题，将主要元素集中在画面的中心和下部，使画面重心稳定。同时，通过树木的高低错落、疏密分布，以及人物的位置安排，打破了画面的单调感，营造出一种和谐、自然的氛围。画面中大量的留白，给人以无限的遐想空间，使整个作品具有一种空灵、悠远的意境。华岩善于通过画面元素的组合和表现手法，营造出独特的意境。在《疏树归林图》中，他以简洁的笔墨描绘出疏树、归林和隐士等元素，传达出一种宁静、淡泊、回归自然的意境。画面中的隐士悠然走向山林，仿佛在远离尘世的喧嚣，寻求内心的宁静与自由，这种意境反映了画家对自然的热爱和对闲适生活的向往，也让观者在欣赏作品时感受到一种心灵的慰藉和宁静。"},{id:"0030",title:"玉堂富贵图",dynasty:"清",period:"清中期",artist:"邹一桂",content:"牡丹、玉兰、海棠、杜鹃布满全幅。牡丹色彩纷繁，敷以淡粉，用重粉点染边缘，显得晶莹剔透、庄重典雅；玉兰洁白无瑕，花朵硕大，枝干挺拔；海棠淡紫娇羞，花朵小巧玲珑，与牡丹、玉兰相互映衬；杜鹃则以鲜艳的红色点缀其中，为画面增添了几分活泼与灵动。画面最后用石青衬底，使整个画面的色彩更加丰富、沉稳，同时也衬托出花卉的娇艳与高贵，营造出一种华丽而不失典雅的氛围。",technique:"没骨法、设色、色彩渲染",dimensions:"纵197厘米，横96厘米",location:"辽宁省博物馆",yiyi:"《玉堂富贵图》的艺术特色主要体现在技法运用、设色特点和构图布局三个方面。花、叶、枝皆以没骨法为之，直接继承南田法，不用墨线勾勒轮廓，而是以色彩直接渲染出花卉的形态和质感，疏而不散，铺而不空，聚散分布井然有序，或倒垂，或上仰，或斜出，刻画细腻，清艳隽永。设色明净素雅又高贵动人，画家运用细腻的色彩过渡和渲染技巧，将各种花卉的颜色表现得淋漓尽致，牡丹的粉色、玉兰的白色、海棠的紫色、杜鹃的红色等，相互搭配，和谐统一，形成了一个色彩斑斓又不失整体感的画面。采用了全景式构图，将各种花卉布满全幅，使画面显得饱满而充实，同时又通过花卉的高低错落、疏密聚散，以及枝干的穿插交织，营造出一种富有节奏感和韵律感的视觉效果，让观者在欣赏时能够感受到画面的丰富与生动。此画具有深厚的文化寓意。汉代皇宫有'玉堂殿'，后世以'玉堂'指翰林院，'历金门，上玉堂有日矣'意思是职位高升指日可待。'富贵'一词出自《论语・颜渊》'商闻之矣，生死有命，富贵在天'，指富裕而显贵。民间常以兰花象征玉堂，牡丹花象征富贵，此图借喻玉堂富贵，表达了对职位高升、富裕显贵的祝愿，也反映了人们对美好生活的向往和追求。"},{id:"0031",title:"月夜山鸡图",dynasty:"清",period:"清晚期",artist:"任伯年",content:"画面中央一只雄壮的山鸡站立在岩石上，昂首挺胸，神态威武。山鸡羽毛色彩绚丽，红冠、金黄色羽翎和深色尾羽在月光下依然鲜明夺目。月色如水，月光照耀下的景物显得清晰而神秘，岩石、花草等环境元素以淡墨勾勒，营造出一种宁静而略带神秘的夜晚氛围。任伯年在构图上创新，借鉴西方透视法，同时融合中国传统花鸟画的特点，让画面既有现实感又充满诗意。",technique:"工笔写意结合、光影处理、透视法",dimensions:"纵111.2厘米，横55.4厘米",location:"故宫博物院",yiyi:"《月夜山鸡图》代表了任伯年融合中西方绘画技法的艺术成就。这幅作品体现了他对光影处理的娴熟掌握，在表现月光下物象的明暗变化方面独具匠心。任伯年运用西方写实手法与中国传统写意笔墨相结合的技巧，创造了既有中国画意蕴又具西方透视感的新风格，成为晚清'海派'画风的代表作品。这幅画不仅在技法上有所创新，在构图上也别具一格，以山鸡为主体，月色为烘托，简洁而富有表现力，体现了任伯年对自然观察的敏锐和艺术表现的才能。作为'海派'绘画的代表人物，任伯年的作品打破了传统绘画的格局，融入了更多的现实生活元素和个人情感，为中国近代绘画的发展开辟了新的道路。"}];function vv(s){if(s>=0&&s<er.length)return er[s]}const On=[O_,F_,B_,k_,H_,G_,z_,V_,W_,X_,q_,Y_,j_,K_,$_,Z_,J_,Q_,ev,tv,nv,iv,sv,rv,av,ov,cv,lv,uv,hv,dv],Nc={0:{dynastyId:3,paintingIndex:0},1:{dynastyId:4,paintingIndex:1},2:{dynastyId:4,paintingIndex:0},3:{dynastyId:2,paintingIndex:0},4:{dynastyId:4,paintingIndex:4},5:{dynastyId:4,paintingIndex:3},6:{dynastyId:3,paintingIndex:1},7:{dynastyId:4,paintingIndex:2},8:{dynastyId:3,paintingIndex:2},9:{dynastyId:2,paintingIndex:1},10:{dynastyId:1,paintingIndex:0},11:{dynastyId:0,paintingIndex:0},12:{dynastyId:5,paintingIndex:0},13:{dynastyId:5,paintingIndex:1},14:{dynastyId:5,paintingIndex:2},15:{dynastyId:0,paintingIndex:1},16:{dynastyId:0,paintingIndex:2},17:{dynastyId:1,paintingIndex:3},18:{dynastyId:1,paintingIndex:4},19:{dynastyId:1,paintingIndex:5},20:{dynastyId:3,paintingIndex:3},21:{dynastyId:3,paintingIndex:4},22:{dynastyId:3,paintingIndex:5},23:{dynastyId:3,paintingIndex:6},24:{dynastyId:2,paintingIndex:3},25:{dynastyId:2,paintingIndex:4},26:{dynastyId:2,paintingIndex:5},27:{dynastyId:2,paintingIndex:6},28:{dynastyId:6,paintingIndex:0},29:{dynastyId:6,paintingIndex:1},30:{dynastyId:6,paintingIndex:2}},ax=s=>{const e=vv(s);if(e)return{title:e.title,artist:e.artist,dynasty:e.dynasty,year:e.period,description:e.content,medium:e.technique||"未知",dimensions:e.dimensions||"未知",collection:e.location||"未知",significance:e.yiyi||"未知"};if(s in Nc){const{dynastyId:t,paintingIndex:n}=Nc[s],i=Dl[t];if(i&&i.masterpieces.length>n){const r=i.masterpieces[n];return{title:r.title,artist:r.artist,dynasty:i.name,year:r.time,description:r.description+(r.story?` ${r.story}`:""),medium:"未知",dimensions:"未知",collection:r.location||"未知",significance:r.significance}}}return{title:"未知作品",artist:"佚名",dynasty:"未知",year:"未知",description:"暂无描述",medium:"未知",dimensions:"未知",collection:"未知",significance:"暂无艺术价值和历史意义的相关信息"}},xv=""+new URL("../../logo.svg",import.meta.url).href,yv=""+new URL("../../about-icon.svg",import.meta.url).href,Mv={class:"nav-menu desktop-menu"},Sv=["onClick"],Ev=["innerHTML"],Tv={class:"nav-text"},Av={key:0,class:"mobile-bottom-nav"},bv=["onClick"],wv=["innerHTML"],Rv={class:"mobile-nav-text"},Cv=zi({__name:"AppHeader",props:{activePath:{type:String,required:!0},onBackClick:{type:Function,default:null}},setup(s){const e=s,t=tr(),n=Kl(),i=vn(()=>["/technique-list","/masterpiece-list","/artist-list","/technique/","/masterpiece/","/artist/"].some(_=>n.path===_||_.endsWith("/")&&n.path.startsWith(_))),r=()=>{const g=n.path,_=sessionStorage.getItem("masterpieceReferrer");if(g.startsWith("/masterpiece/")&&_)sessionStorage.removeItem("masterpieceReferrer"),t.push(_);else if(g.startsWith("/masterpiece/"))t.push("/historical-timeline");else if(g.startsWith("/technique/"))t.push("/technique-list");else if(g.startsWith("/artist/"))t.push("/artist-list");else if(g==="/technique-list"||g==="/masterpiece-list"||g==="/artist-list")t.push("/historical-timeline");else try{t.back()}catch{t.push("/")}},a=[{name:"首页",path:"/",icon:'<img src="/home-icon-new.svg" class="custom-icon" alt="首页" />'},{name:"互动体验",path:"/interactive",icon:'<img src="/interactive-icon.svg" class="custom-icon" alt="互动体验" />'},{name:"历史长河",path:"/historical-timeline",icon:'<img src="/history-icon.svg" class="custom-icon" alt="历史长河" />'},{name:"画廊",path:"/gallery",icon:'<img src="/gallery-icon.svg" class="custom-icon" alt="画廊" />'}],o=[...a,{name:"关于",path:"/about",icon:'<img src="/about-icon.svg" class="custom-icon" alt="关于" />'}],c=g=>{t.push(g)},l=()=>{t.push("/about")},u=()=>{e.onBackClick?e.onBackClick():r()},h=je(!1),d=()=>{h.value=window.innerWidth<=768},f=()=>{window.addEventListener("resize",d),d()};return Vc(()=>{f()}),$l(()=>{window.removeEventListener("resize",d)}),(g,_)=>(He(),Xe("div",null,[le("nav",{class:dt(["navbar",{"mobile-navbar":h.value}])},[i.value?(He(),Xe("div",{key:0,class:"back-button",onClick:u},_[1]||(_[1]=[le("span",{class:"back-icon"},"←",-1),le("span",{class:"back-text"},"返回",-1)]))):(He(),Xe("div",{key:1,class:"logo",onClick:_[0]||(_[0]=p=>c("/"))},_[2]||(_[2]=[le("img",{src:xv,alt:"数绘古意",class:"logo-image"},null,-1)]))),le("ul",Mv,[(He(),Xe(Hn,null,oi(o,(p,m)=>le("li",{key:m,class:dt(["nav-item",{active:p.path===s.activePath}]),onClick:S=>c(p.path)},[le("span",{class:"nav-icon",innerHTML:p.icon},null,8,Ev),le("span",Tv,xt(p.name),1)],10,Sv)),64))]),h.value?(He(),Xe("div",{key:2,class:dt(["mobile-about-button",{active:s.activePath==="/about"}]),onClick:l},_[3]||(_[3]=[le("img",{src:yv,class:"custom-icon",alt:"关于"},null,-1)]),2)):Ht("",!0)],2),h.value?(He(),Xe("div",Av,[(He(),Xe(Hn,null,oi(a,(p,m)=>le("div",{key:m,class:dt(["mobile-nav-item",{active:p.path===s.activePath}]),onClick:S=>c(p.path)},[le("div",{class:"mobile-nav-icon",innerHTML:p.icon},null,8,wv),le("div",Rv,xt(p.name),1)],10,bv)),64))])):Ht("",!0)]))}}),Lv=ls(Cv,[["__scopeId","data-v-f0af2dc8"]]),Pv={class:"dynasty-title"},Iv=["onMouseenter","onClick"],Dv={class:"scroll-paper"},Uv={class:"dynasty-name"},Nv={key:0,class:"dynasty-name"},Ov={class:"images-wrapper"},Fv=["onClick"],Bv={class:"image-info"},kv={key:0},Hv=zi({__name:"ScrollWrapper2D",props:{isMobile:{type:Boolean,default:!1},dynasties:{type:Array,default:null}},emits:["select-dynasty"],setup(s,{emit:e}){const t=tr(),n=s,i=vn(()=>{const U={},j=["唐","宋","元","明","清"];j.forEach(J=>{U[J]=[]}),er.forEach(J=>{const Se=J.dynasty;U[Se]||(U[Se]=[]);const V=parseInt(J.id)-1;if(V>=0&&V<On.length){const ee={...J,imagePath:On[V],width:800,height:400};U[Se].push(ee)}else console.warn(`图片索引超出范围：ID=${J.id}, 索引=${V}`)}),Object.keys(U).forEach(J=>{U[J].length===0&&delete U[J]});const Y={};return j.forEach(J=>{U[J]&&U[J].length>0&&(Y[J]=U[J])}),Object.keys(U).forEach(J=>{!Y[J]&&U[J].length>0&&(Y[J]=U[J])}),Y}),r=vn(()=>Object.entries(i.value).map(([U,j])=>{if(j.length===0)return null;const Y=j[0];return{id:U.replace(/代|朝/g,"").toLowerCase(),name:U,period:Y.period,images:j.map(J=>({src:J.imagePath,alt:J.title,width:J.width,height:J.height,info:J}))}}).filter(Boolean)),a=e,o=je(""),c=vn(()=>n.dynasties||r.value),l=U=>{o.value=U},u=()=>{d.value||(o.value="")},h=vn(()=>c.value.find(U=>U.id===o.value)),d=je(!1),f=je(null),g=je({top:0,left:0}),_=je(!1),p=je(!0),m=je(!1),S=je(!1),v=je(0),E=je(!1),C=je(0),A=je(null),w=U=>{A.value&&(E.value=!0,C.value=U.pageX,v.value=A.value.scrollLeft,A.value.style.cursor="grabbing")},N=U=>{if(!E.value||!A.value)return;U.preventDefault();const j=U.pageX-C.value,Y=v.value-j;A.value.scrollLeft=Y},q=()=>{E.value=!1,A.value&&(A.value.style.cursor="grab")},y=U=>{!A.value||U.touches.length!==1||(E.value=!0,C.value=U.touches[0].pageX,v.value=A.value.scrollLeft)},R=U=>{if(!E.value||!A.value||U.touches.length!==1)return;U.preventDefault();const j=U.touches[0].pageX-C.value,Y=v.value-j;A.value.scrollLeft=Y},$=()=>{E.value=!1,A.value&&(v.value=A.value.scrollLeft)},Z=U=>{if(!A.value)return;U.preventDefault();const j=U.deltaY||U.deltaX;A.value.scrollLeft+=j},b=()=>{Wc(()=>{A.value&&(A.value.addEventListener("wheel",Z,{passive:!1}),A.value.addEventListener("mousedown",w),window.addEventListener("mousemove",N),window.addEventListener("mouseup",q),A.value.addEventListener("touchstart",y),window.addEventListener("touchmove",R,{passive:!1}),window.addEventListener("touchend",$),A.value.style.cursor="grab")})},B=()=>{A.value&&(A.value.removeEventListener("wheel",Z),A.value.removeEventListener("mousedown",w),window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",q),A.value.removeEventListener("touchstart",y),window.removeEventListener("touchmove",R),window.removeEventListener("touchend",$))},D=(U,j)=>{if(d.value||m.value)return;const J=j.currentTarget.getBoundingClientRect();g.value={top:J.top,left:J.left},f.value=U,o.value=U.id,d.value=!0,m.value=!0,setTimeout(()=>{p.value=!1,m.value=!1,setTimeout(()=>{_.value=!0,b(),a("select-dynasty",U.id)},50)},300)},F=()=>{B(),_.value=!1,setTimeout(()=>{p.value=!0,S.value=!0,setTimeout(()=>{d.value=!1,setTimeout(()=>{S.value=!1,o.value=""},300)},100)},500)},W=U=>{var J;sessionStorage.setItem("scrollReferrer","home");const j=(J=U.info)==null?void 0:J.id;if(!j){console.warn("图片信息不完整，无法确定图片ID"),t.push("/scroll/0");return}const Y=parseInt(j)-1;Y>=0&&Y<On.length?(console.log(`导航到图片详情页：ID=${j}, 索引=${Y}`),t.push(`/scroll/${Y}`)):(console.warn(`图片索引超出范围：ID=${j}, 索引=${Y}, 总图片数=${On.length}`),t.push("/scroll/0"))};return(U,j)=>(He(),Xe("div",{class:dt(["scroll-wrapper",{mobile:s.isMobile}])},[le("h1",Pv,xt(h.value?h.value.name:"中国朝代"),1),na(le("div",{class:dt(["scrolls-container",{"fade-out":m.value,"fade-in":S.value}])},[(He(!0),Xe(Hn,null,oi(c.value,Y=>(He(),Xe("div",{key:Y.id,class:"scroll-item",onMouseenter:J=>l(Y.id),onMouseleave:u,onClick:J=>D(Y,J)},[j[0]||(j[0]=le("div",{class:"scroll-handle left-handle"},null,-1)),le("div",Dv,[le("span",Uv,xt(Y.name),1)]),j[1]||(j[1]=le("div",{class:"scroll-handle right-handle"},null,-1))],40,Iv))),128))],2),[[ia,p.value]]),d.value&&f.value?(He(),Xe("div",{key:0,class:dt(["cloned-scroll-container",{expanded:_.value,"fade-in":d.value&&!_.value,"fade-out":!d.value}]),style:Xs(_.value?{}:{top:`${g.value.top}px`,left:`${g.value.left}px`})},[le("div",{class:dt(["close-button",{"expanded-close":_.value}]),onClick:F},"×",2),le("div",{class:dt(["cloned-scroll-item",{"expanded-item":_.value}])},[le("div",{class:dt(["scroll-handle left-handle",{"expanded-handle":_.value}])},null,2),le("div",{class:dt(["scroll-paper",{"expanded-paper":_.value}])},[_.value?Ht("",!0):(He(),Xe("span",Nv,xt(f.value.name),1)),_.value&&f.value.images?(He(),Xe("div",{key:1,class:"images-scroll-container",ref_key:"scrollContainer",ref:A},[le("div",Ov,[(He(!0),Xe(Hn,null,oi(f.value.images,(Y,J)=>(He(),Xe("div",{key:J,class:"dynasty-image-container"},[le("div",{class:"dynasty-image",style:Xs({backgroundImage:`url(${Y.src})`,width:`${Math.min(400,Y.width)}px`,aspectRatio:`${Y.width}/${Y.height}`}),onClick:Se=>W(Y)},null,12,Fv),le("div",Bv,[le("h3",null,xt(Y.alt),1),Y.info?(He(),Xe("p",kv,[le("small",null,xt(Y.info.artist)+" | "+xt(Y.info.period),1)])):Ht("",!0)])]))),128))])],512)):Ht("",!0)],2),le("div",{class:dt(["scroll-handle right-handle",{"expanded-handle":_.value}])},null,2)],2)],6)):Ht("",!0)],2))}}),Gv=ls(Hv,[["__scopeId","data-v-c95cfe70"]]),zv={class:"mobile-scroll-wrapper"},Vv=["onClick"],Wv={class:"dynasty-paper"},Xv={class:"dynasty-name"},qv=["data-dynasty-name"],Yv={key:0,class:"dynasty-name"},jv={class:"images-wrapper"},Kv=["onClick"],$v={class:"image-info"},Zv={key:0},Jv=zi({__name:"MobileScrollWrapper2D",props:{dynasties:{type:Array,default:null}},emits:["select-dynasty"],setup(s,{emit:e}){const t=tr(),n=s,i=vn(()=>{const b={},B=["唐","宋","元","明","清","五代"];B.forEach(F=>{b[F]=[]}),er.forEach(F=>{const W=F.dynasty;b[W]||(b[W]=[]);const U=parseInt(F.id)-1;if(U>=0&&U<On.length){const j={...F,imagePath:On[U],width:800,height:400};b[W].push(j)}else console.warn(`图片索引超出范围：ID=${F.id}, 索引=${U}`)}),Object.keys(b).forEach(F=>{b[F].length===0&&delete b[F]});const D={};return B.forEach(F=>{b[F]&&b[F].length>0&&(D[F]=b[F])}),Object.keys(b).forEach(F=>{!D[F]&&b[F].length>0&&(D[F]=b[F])}),D}),r=vn(()=>Object.entries(i.value).map(([b,B])=>{if(B.length===0)return null;const D=B[0];return{id:b.replace(/代|朝/g,"").toLowerCase(),name:b,period:D.period,images:B.map(F=>({src:F.imagePath,alt:F.title,width:F.width,height:F.height,info:F}))}}).filter(Boolean)),a=e,o=je(""),c=vn(()=>n.dynasties||r.value),l=vn(()=>c.value.find(b=>b.id===o.value)),u=je(null),h=je(null),d=je({top:0,left:0,width:0,height:0}),f=je(!1),g=je(!1),_=je(!0),p=je(!1),m=je(!1),S=(b,B)=>{if(u.value||p.value)return;const F=B.currentTarget.getBoundingClientRect();d.value={top:F.top,left:F.left,width:F.width,height:F.height},o.value=b.id,u.value=b,p.value=!0,setTimeout(()=>{_.value=!1,p.value=!1,f.value=!0,setTimeout(()=>{f.value=!1,g.value=!0,a("select-dynasty",b.id),q()},500)},300)},v=()=>{y(),g.value=!1,f.value=!0,setTimeout(()=>{f.value=!1,_.value=!0,m.value=!0,setTimeout(()=>{u.value=null,setTimeout(()=>{m.value=!1,o.value=""},300)},100)},300)},E=b=>{var F;if(w.value){console.log("滑动中，忽略点击事件");return}sessionStorage.setItem("scrollReferrer","home");const B=(F=b.info)==null?void 0:F.id;if(!B){console.warn("图片信息不完整，无法确定图片ID"),t.push("/scroll/0");return}const D=parseInt(B)-1;D>=0&&D<On.length?(console.log(`导航到图片详情页：ID=${B}, 索引=${D}`),t.push(`/scroll/${D}`)):(console.warn(`图片索引超出范围：ID=${B}, 索引=${D}, 总图片数=${On.length}`),t.push("/scroll/0"))},C=je(0),A=je(0),w=je(!1),N=je(0),q=()=>{Wc(()=>{if(h.value){console.log("设置滚动事件监听器"),h.value.style.cursor="grab";const b=h.value;b.addEventListener("touchstart",R,{passive:!0}),b.addEventListener("touchmove",$,{passive:!1}),b.addEventListener("touchend",Z),console.log("触摸事件已添加到容器:",b);const B=W=>{W.preventDefault(),w.value=!0,C.value=W.pageX,A.value=W.pageY,N.value=b.scrollTop,b.style.cursor="grabbing",console.log("鼠标按下:",W.pageX,W.pageY)},D=W=>{if(!w.value)return;W.preventDefault();const U=A.value-W.pageY;b.scrollTop=N.value+U,console.log("鼠标移动:",U,b.scrollTop)},F=()=>{w.value&&(w.value=!1,b.style.cursor="grab",console.log("鼠标释放"))};b.addEventListener("mousedown",B),window.addEventListener("mousemove",D),window.addEventListener("mouseup",F),b._mouseHandlers={down:B,move:D,up:F}}})},y=()=>{if(console.log("移除滚动事件监听器"),h.value){const b=h.value;b.removeEventListener("touchstart",R),b.removeEventListener("touchmove",$),b.removeEventListener("touchend",Z);const B=b._mouseHandlers;B&&(b.removeEventListener("mousedown",B.down),window.removeEventListener("mousemove",B.move),window.removeEventListener("mouseup",B.up),delete b._mouseHandlers)}},R=b=>{console.log("触摸开始"),!(!h.value||b.touches.length!==1)&&(w.value=!0,C.value=b.touches[0].pageX,A.value=b.touches[0].pageY,N.value=h.value.scrollTop,h.value&&(h.value.style.cursor="grabbing"))},$=b=>{if(!w.value||!h.value||b.touches.length!==1)return;b.preventDefault();const B=b.touches[0].pageY,D=A.value-B;h.value.scrollTop=N.value+D,console.log(`触摸移动: dy=${D}, 当前滚动位置=${h.value.scrollTop}`)},Z=()=>{console.log("触摸结束"),w.value=!1,h.value&&(N.value=h.value.scrollTop,h.value.style.cursor="grab")};return(b,B)=>(He(),Xe("div",zv,[na(le("h1",{class:dt(["dynasty-title",{"expanded-title":g.value,"fade-out":p.value,"fade-in":m.value}])},xt(l.value?l.value.name:"中国朝代"),3),[[ia,_.value]]),na(le("div",{class:dt(["dynasties-list",{"fade-out":p.value,"fade-in":m.value}])},[(He(!0),Xe(Hn,null,oi(c.value,D=>(He(),Xe("div",{key:D.id,class:dt(["dynasty-item",{selected:o.value===D.id&&!f.value&&!g.value}]),onClick:F=>S(D,F)},[B[0]||(B[0]=le("div",{class:"scroll-handle top-handle"},null,-1)),le("div",Wv,[le("span",Xv,xt(D.name),1)]),B[1]||(B[1]=le("div",{class:"scroll-handle bottom-handle"},null,-1))],10,Vv))),128))],2),[[ia,_.value]]),u.value?(He(),Xe("div",{key:0,class:dt(["dynasty-clone",{expanding:f.value,expanded:g.value}]),style:Xs(!f.value&&!g.value?{top:`${d.value.top}px`,left:`${d.value.left}px`,width:`${d.value.width}px`,height:`${d.value.height}px`}:{}),"data-dynasty-name":u.value.name},[g.value?(He(),Xe("div",{key:0,class:"close-button",onClick:v},"×")):Ht("",!0),B[2]||(B[2]=le("div",{class:"scroll-handle top-handle clone-handle"},null,-1)),le("div",{class:dt(["dynasty-paper clone-paper",{"expanded-paper":g.value||f.value}])},[g.value?Ht("",!0):(He(),Xe("span",Yv,xt(u.value.name),1)),g.value&&u.value.images?(He(),Xe("div",{key:1,class:"images-container",ref_key:"scrollContainer",ref:h},[le("div",jv,[(He(!0),Xe(Hn,null,oi(u.value.images,(D,F)=>(He(),Xe("div",{key:F,class:"dynasty-image-container",onClick:W=>E(D)},[le("div",{class:"dynasty-image",style:Xs({backgroundImage:`url(${D.src})`,width:`${Math.min(300,D.width)}px`,aspectRatio:`${D.width}/${D.height}`})},null,4),le("div",$v,[le("h3",null,xt(D.alt),1),D.info?(He(),Xe("p",Zv,[le("small",null,xt(D.info.artist)+" | "+xt(D.info.period),1)])):Ht("",!0)])],8,Kv))),128))])],512)):Ht("",!0)],2),B[3]||(B[3]=le("div",{class:"scroll-handle bottom-handle clone-handle"},null,-1))],14,qv)):Ht("",!0)]))}}),Qv=ls(Jv,[["__scopeId","data-v-411fbd10"]]),e0={class:"home-container"},t0={class:"main-content"},n0=zi({__name:"Home",setup(s){const e=je(window.innerWidth<768);window.addEventListener("resize",()=>{e.value=window.innerWidth<768});const t=n=>{console.log("选中朝代:",n)};return(n,i)=>(He(),Xe("div",e0,[ns(fr(Lv),{activePath:"/"}),le("main",t0,[e.value?(He(),ta(fr(Qv),{key:1,onSelectDynasty:t})):(He(),ta(fr(Gv),{key:0,isMobile:e.value,onSelectDynasty:t},null,8,["isMobile"]))])]))}}),i0=ls(n0,[["__scopeId","data-v-ff5dbc2d"]]),s0=[{path:"/",name:"Home",component:i0,meta:{title:"首页"}},{path:"/scroll/:id",name:"ScrollDetail",component:()=>gt(()=>import("./ScrollDetail-Bplo3M0X.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),props:!0,meta:{title:"卷轴详情"}},{path:"/gallery",name:"Gallery",component:()=>gt(()=>import("./Gallery-CHBYlN-K.js"),__vite__mapDeps([4,1,5]),import.meta.url),meta:{title:"卷轴画廊"}},{path:"/interactive",name:"Interactive",component:()=>gt(()=>import("./Interactive-yGIwQb8r.js"),__vite__mapDeps([6,1,7]),import.meta.url),meta:{title:"互动体验"}},{path:"/historical-timeline",name:"HistoricalTimeline",component:()=>gt(()=>import("./HistoricalTimeline-BJLpP68y.js"),__vite__mapDeps([8,1,9]),import.meta.url),meta:{title:"历史长河"}},{path:"/interactive/drawing",name:"DigitalDrawing",component:()=>gt(()=>import("./DigitalDrawing-Bc7YA-2J.js"),__vite__mapDeps([10,1,11,12]),import.meta.url),meta:{title:"数字临摹系统"}},{path:"/drawing",redirect:"/interactive/drawing"},{path:"/interactive/ar",name:"ARFrame",component:()=>gt(()=>import("./ARFrame-CM1LFTof.js"),__vite__mapDeps([13,1,11,14]),import.meta.url),meta:{title:"虚拟装裱"}},{path:"/frame",component:()=>gt(()=>import("./ARFrame-CM1LFTof.js"),__vite__mapDeps([13,1,11,14]),import.meta.url),meta:{title:"虚拟装裱"}},{path:"/interactive/ink",name:"InkLab",component:()=>gt(()=>import("./InkLab-DF7CFNjT.js"),__vite__mapDeps([15,1,11,16]),import.meta.url),meta:{title:"水墨实验室"}},{path:"/interactive/ai-poetry",name:"AIPoetry",component:()=>gt(()=>import("./AIPoetry-Cyt5FUQB.js"),__vite__mapDeps([17,1,18]),import.meta.url),meta:{title:"AI题诗创作"}},{path:"/about",name:"About",component:()=>gt(()=>import("./About-D0wwXKz8.js"),__vite__mapDeps([19,1,20]),import.meta.url),meta:{title:"关于我们"}},{path:"/technique/:id",name:"TechniqueDetail",component:()=>gt(()=>import("./TechniqueDetail-DLt-qTGZ.js"),__vite__mapDeps([21,1,22,23]),import.meta.url),props:!0},{path:"/masterpiece/:id",name:"MasterpieceDetail",component:()=>gt(()=>import("./MasterpieceDetail-BHRE2sNd.js"),__vite__mapDeps([24,1,22,25]),import.meta.url),props:!0},{path:"/artist/:id",name:"ArtistDetail",component:()=>gt(()=>import("./ArtistDetail-BNtZaPSR.js"),__vite__mapDeps([26,27,1,22,28]),import.meta.url),props:!0},{path:"/technique-list",name:"TechniqueList",component:()=>gt(()=>import("./TechniqueList-WxvfAJ4c.js"),__vite__mapDeps([29,1,30]),import.meta.url)},{path:"/masterpiece-list",name:"MasterpieceList",component:()=>gt(()=>import("./MasterpieceList-DcyMIBqi.js"),__vite__mapDeps([31,1,22,32]),import.meta.url)},{path:"/artist-list",name:"ArtistList",component:()=>gt(()=>import("./ArtistList-DJ5hhHao.js"),__vite__mapDeps([33,27,1,22,34]),import.meta.url)},{path:"/three-scene",name:"ThreeScene",component:()=>gt(()=>import("./ThreeScene-CxuX8Syt.js"),__vite__mapDeps([35,2,1,36]),import.meta.url),meta:{title:"古风场景编辑器"}},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>gt(()=>import("./NotFound-DaWvqkg9.js"),__vite__mapDeps([37,1,38]),import.meta.url),meta:{title:"页面未找到"}}],cr=Zl({history:Jl(),routes:s0});cr.beforeEach((s,e,t)=>{if(document.title=s.meta.title||"卷轴查看器",s.matched.length===0&&s.path==="/"){t({name:"Home"});return}if(s.name==="InkLab"&&e.name==="Interactive"){t({name:"Interactive"});return}t()});cr.beforeResolve((s,e,t)=>{e.name==="MasterpieceDetail"&&["HistoricalTimeline","Home","Interactive","About","Gallery","ArtistList","TechniqueList","MasterpieceList"].includes(s.name)&&(s.meta.requiresRefresh=!0),t()});cr.afterEach(s=>{s.meta.requiresRefresh&&(s.meta.requiresRefresh=!1,setTimeout(()=>{window.location.reload()},100))});function Oc(s,e){if(e===dh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===la||e===sl){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===la)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Nl extends ui{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new l0(t)}),this.register(function(t){return new v0(t)}),this.register(function(t){return new x0(t)}),this.register(function(t){return new y0(t)}),this.register(function(t){return new h0(t)}),this.register(function(t){return new d0(t)}),this.register(function(t){return new f0(t)}),this.register(function(t){return new p0(t)}),this.register(function(t){return new c0(t)}),this.register(function(t){return new m0(t)}),this.register(function(t){return new u0(t)}),this.register(function(t){return new _0(t)}),this.register(function(t){return new g0(t)}),this.register(function(t){return new a0(t)}),this.register(function(t){return new M0(t)}),this.register(function(t){return new S0(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=rs.extractUrlBase(e);a=rs.resolveURL(l,this.path)}else a=rs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Qs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ol){try{a[We.KHR_BINARY_GLTF]=new E0(e)}catch(h){i&&i(h);return}r=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new O0(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case We.KHR_MATERIALS_UNLIT:a[h]=new o0;break;case We.KHR_DRACO_MESH_COMPRESSION:a[h]=new T0(r,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[h]=new A0;break;case We.KHR_MESH_QUANTIZATION:a[h]=new b0;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function r0(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class a0{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Te(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],St);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new A_(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new E_(u),l.distance=h;break;case"spot":l=new M_(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,In(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class o0{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return ni}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],St),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(i)}}class c0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class l0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Le(o,o)}return Promise.all(r)}}class u0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class h0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],St)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,At)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class d0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class f0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Te().setRGB(o[0],o[1],o[2],St),Promise.all(r)}}class p0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class m0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Te().setRGB(o[0],o[1],o[2],St),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,At)),Promise.all(r)}}class g0{constructor(e){this.parser=e,this.name=We.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class _0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:En}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class v0{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class x0{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class y0{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class M0{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class S0{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Xt.TRIANGLES&&l.mode!==Xt.TRIANGLE_STRIP&&l.mode!==Xt.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const _=new Pe,p=new L,m=new zn,S=new L(1,1,1),v=new i_(g.geometry,g.material,d);for(let E=0;E<d;E++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,E),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,E),c.SCALE&&S.fromBufferAttribute(c.SCALE,E),v.setMatrixAt(E,_.compose(p,m,S));for(const E in c)if(E==="_COLOR_0"){const C=c[E];v.instanceColor=new pa(C.array,C.itemSize,C.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&g.geometry.setAttribute(E,c[E]);at.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Ol="glTF",ts=12,Fc={JSON:1313821514,BIN:5130562};class E0{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ts),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ol)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ts,r=new DataView(e,ts);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Fc.JSON){const l=new Uint8Array(e,ts+a,o);this.content=n.decode(l)}else if(c===Fc.BIN){const l=ts+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class T0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=_a[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=_a[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Ii[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const _=f.attributes[g],p=c[g];p!==void 0&&(_.normalized=p)}h(f)},o,l,St,d)})})}}class A0{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class b0{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class Fl extends ds{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,_=g-l,p=-2*f+3*d,m=f-d,S=1-p,v=m-d+h;for(let E=0;E!==o;E++){const C=a[_+E+o],A=a[_+E+c]*u,w=a[g+E+o],N=a[g+E]*u;r[E]=S*C+v*A+p*w+m*N}return r}}const w0=new zn;class R0 extends Fl{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return w0.fromArray(r).normalize().toArray(r),r}}const Xt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ii={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bc={9728:vt,9729:Lt,9984:ca,9985:Vs,9986:Ri,9987:xn},kc={33071:qt,33648:Ys,10497:Ni},$r={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_a={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Pn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},C0={CUBICSPLINE:void 0,LINEAR:Fi,STEP:os},Zr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function L0(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ia({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Mn})),s.DefaultMaterial}function Zn(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function In(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function P0(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function I0(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function D0(s){let e;const t=s.extensions&&s.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jr(t.attributes):e=s.indices+":"+Jr(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Jr(s.targets[n]);return e}function Jr(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function va(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function U0(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const N0=new Pe;class O0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new r0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new x_(this.options.manager):this.textureLoader=new b_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Zn(r,o,i),In(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(rs.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=$r[i.type],o=Ii[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Mt(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=$r[i.type],l=Ii[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,p;if(f&&f!==h){const m=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let v=t.cache.get(S);v||(_=new l(o,m*f,i.count*f/u),v=new Jg(_,f/u),t.cache.add(S,v)),p=new Ra(v,c,d%f/u,g)}else o===null?_=new l(i.count*c):_=new l(o,d,i.count*c),p=new Mt(_,c,g);if(i.sparse!==void 0){const m=$r.SCALAR,S=Ii[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,C=new S(a[1],v,i.sparse.count*m),A=new l(a[2],E,i.sparse.count*c);o!==null&&(p=new Mt(p.array.slice(),p.itemSize,p.normalized));for(let w=0,N=C.length;w<N;w++){const q=C[w];if(p.setX(q,A[w*c]),c>=2&&p.setY(q,A[w*c+1]),c>=3&&p.setZ(q,A[w*c+2]),c>=4&&p.setW(q,A[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Bc[d.magFilter]||Lt,u.minFilter=Bc[d.minFilter]||xn,u.wrapS=kc[d.wrapS]||Ni,u.wrapT=kc[d.wrapT]||Ni,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const p=new yt(_);p.needsUpdate=!0,d(p)}),t.load(rs.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),h.userData.mimeType=a.mimeType||U0(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[We.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new wl,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ar,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ia}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[We.KHR_MATERIALS_UNLIT]){const h=i[We.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],St),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,At)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=nn);const u=r.alphaMode||Zr.OPAQUE;if(u===Zr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Zr.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ni&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Le(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==ni&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ni){const h=r.emissiveFactor;o.emissive=new Te().setRGB(h[0],h[1],h[2],St)}return r.emissiveTexture!==void 0&&a!==ni&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,At)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),In(h,r),t.associations.set(h,{materials:e}),r.extensions&&Zn(i,h,r),h})}createUniqueName(e){const t=Je.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Hc(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=D0(l),h=i[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[We.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Hc(new Pt,l,t),i[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?L0(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const _=u[f],p=a[f];let m;const S=l[f];if(p.mode===Xt.TRIANGLES||p.mode===Xt.TRIANGLE_STRIP||p.mode===Xt.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new e_(_,S):new Gt(_,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===Xt.TRIANGLE_STRIP?m.geometry=Oc(m.geometry,sl):p.mode===Xt.TRIANGLE_FAN&&(m.geometry=Oc(m.geometry,la));else if(p.mode===Xt.LINES)m=new Pa(_,S);else if(p.mode===Xt.LINE_STRIP)m=new La(_,S);else if(p.mode===Xt.LINE_LOOP)m=new s_(_,S);else if(p.mode===Xt.POINTS)m=new r_(_,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&I0(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),In(m,r),p.extensions&&Zn(i,m,p),t.assignFinalMaterial(m),h.push(m)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Zn(i,h[0],r),h[0];const d=new ii;r.extensions&&Zn(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nt(Fh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ba(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),In(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new Pe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Ca(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],_=f.target,p=_.node,m=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",S)),l.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],_=h[3],p=h[4],m=[];for(let S=0,v=d.length;S<v;S++){const E=d[S],C=f[S],A=g[S],w=_[S],N=p[S];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const q=n._createAnimationTracks(E,C,A,w,N);if(q)for(let y=0;y<q.length;y++)m.push(q[y])}return new d_(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,N0)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new Al:l.length>1?u=new ii:l.length===1?u=l[0]:u=new at,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),In(u,r),r.extensions&&Zn(n,u,r),r.matrix!==void 0){const h=new Pe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new ii;n.name&&(r.name=i.createUniqueName(n.name)),In(r,n),n.extensions&&Zn(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof rn||d instanceof yt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];Pn[r.path]===Pn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Pn[r.path]){case Pn.weights:l=Hi;break;case Pn.rotation:l=li;break;case Pn.position:case Pn.scale:l=Gi;break;default:switch(n.itemSize){case 1:l=Hi;break;case 2:case 3:default:l=Gi;break}break}const u=i.interpolation!==void 0?C0[i.interpolation]:Fi,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Pn[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=va(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof li?R0:Fl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function F0(s,e,t){const n=e.attributes,i=new Sn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){const u=va(Ii[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new L,c=new L;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const _=va(Ii[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new on;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Hc(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=_a[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ke.workingColorSpace!==St&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ke.workingColorSpace}" not supported.`),In(s,e),F0(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?P0(s,e.targets,t):s})}const Qr=new WeakMap;class B0 extends ui{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Qs(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,At).catch(n)}decodeDracoFile(e,t,n,i,r=St,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Qr.has(e)){const c=Qr.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(c=>(i=c,new Promise((l,u)=>{i._callbacks[r]={resolve:l,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Qr.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Pt;e.index&&t.setIndex(new Mt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,a=i.array,o=i.itemSize,c=new Mt(a,o);r==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(a instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==At)return;const n=new Te;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Qs(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=k0.toString(),a=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function k0(){let s,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const c=o.buffer,l=o.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const f=t(h,d,new Int8Array(c),l),g=f.attributes.map(_=>_.array.buffer);f.index&&g.push(f.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:f},g)}catch(f){console.error(f),self.postMessage({type:"error",id:o.id,error:f.message})}finally{h.destroy(d)}});break}};function t(a,o,c,l){const u=l.attributeIDs,h=l.attributeTypes;let d,f;const g=o.GetEncodedGeometryType(c);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,f=o.DecodeArrayToMesh(c,c.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,f=o.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const _={index:null,attributes:[]};for(const p in u){const m=self[h[p]];let S,v;if(l.useUniqueIDs)v=u[p],S=o.GetAttributeByUniqueId(d,v);else{if(v=o.GetAttributeId(d,a[u[p]]),v===-1)continue;S=o.GetAttribute(d,v)}const E=i(a,o,d,p,m,S);p==="color"&&(E.vertexColorSpace=l.vertexColorSpace),_.attributes.push(E)}return g===a.TRIANGULAR_MESH&&(_.index=n(a,o,d)),a.destroy(d),_}function n(a,o,c){const u=c.num_faces()*3,h=u*4,d=a._malloc(h);o.GetTrianglesUInt32Array(c,h,d);const f=new Uint32Array(a.HEAPF32.buffer,d,u).slice();return a._free(d),{array:f,itemSize:1}}function i(a,o,c,l,u,h){const d=h.num_components(),g=c.num_points()*d,_=g*u.BYTES_PER_ELEMENT,p=r(a,u),m=a._malloc(_);o.GetAttributeDataArrayForAllPoints(c,h,p,_,m);const S=new u(a.HEAPF32.buffer,m,g).slice();return a._free(m),{name:l,array:S,itemSize:d}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}const _n={},Bl={landscape:{id:"landscape",name:"千里江山图",path:"/models/landscape.glb",cameraSettings:{position:new L(0,1.5,5),target:new L(0,0,0)},needsMaterialFix:!0},flower:{id:"flower",name:"花朵",path:"/models/flower.glb",cameraSettings:{position:new L(0,4,5),target:new L(0,2.5,0)},needsMaterialFix:!1}},H0=()=>Object.values(Bl),G0=(s=3e5)=>{const e=Date.now();for(const t in _n)e-_n[t].timestamp>s&&(z0(_n[t].gltf),delete _n[t],console.log(`模型缓存 ${t} 已过期并清理`))},z0=s=>{!s||!s.scene||s.scene.traverse(e=>{e.isMesh&&(e.geometry&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(t=>Gc(t)):Gc(e.material)))})},Gc=s=>{const e=s;e.map&&e.map.dispose(),e.lightMap&&e.lightMap.dispose(),e.bumpMap&&e.bumpMap.dispose(),e.normalMap&&e.normalMap.dispose(),e.specularMap&&e.specularMap.dispose(),e.envMap&&e.envMap.dispose(),e.alphaMap&&e.alphaMap.dispose(),e.aoMap&&e.aoMap.dispose(),e.displacementMap&&e.displacementMap.dispose(),e.emissiveMap&&e.emissiveMap.dispose(),e.metalnessMap&&e.metalnessMap.dispose(),e.roughnessMap&&e.roughnessMap.dispose(),s.dispose()},V0=()=>{const s=new Nl,e=new B0;return e.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/"),s.setDRACOLoader(e),s},W0=(s,e,t,n)=>{const i=Bl[s];if(!i){n(`模型 "${s}" 未定义`);return}if(_n[s]){console.log(`使用缓存模型: ${s}`),_n[s].timestamp=Date.now(),setTimeout(()=>{e({isLoading:!1,progress:100,message:"模型加载成功 (从缓存)"});const a=_n[s],o=a.gltf.scene.clone(),c={...a.gltf,scene:o};t(c,i)},100);return}const r=V0();e({isLoading:!0,progress:0,message:"正在加载模型..."}),r.load(i.path,a=>{e({isLoading:!1,progress:100,message:"模型加载成功"}),_n[s]={gltf:a,modelDef:i,timestamp:Date.now()},setTimeout(()=>G0(),3e5),t(a,i)},a=>{if(a.total>0){const o=Math.floor(a.loaded/a.total*100);e({isLoading:!0,progress:o,message:`模型加载中: ${o}%`})}else{const o=Math.floor(a.loaded/1024);e({isLoading:!0,progress:-1,message:`模型加载中: ${o} KB`})}},a=>{const o=a instanceof Error?a.message:String(a);e({isLoading:!1,progress:0,message:`模型加载错误: ${o}`}),console.error("模型加载错误:",a),console.log("尝试不使用DRACO解码器加载..."),new Nl().load(i.path,l=>{e({isLoading:!1,progress:100,message:"模型加载成功 (非压缩方式)"}),_n[s]={gltf:l,modelDef:i,timestamp:Date.now()},t(l,i)},l=>{if(l.total>0){const u=Math.floor(l.loaded/l.total*100);e({isLoading:!0,progress:u,message:`备用加载中: ${u}%`})}else{const u=Math.floor(l.loaded/1024);e({isLoading:!0,progress:-1,message:`备用加载中: ${u} KB`})}},l=>{const u=l instanceof Error?l.message:String(l);e({isLoading:!1,progress:0,message:`无法加载模型: ${u}`}),n(`无法加载模型: ${u}`)})})},ox=s=>(s.depthTest=!0,s.depthWrite=!0,s.transparent&&("alphaTest"in s&&(s.alphaTest=.5),"polygonOffset"in s&&(s.polygonOffset=!0,s.polygonOffsetFactor=1,s.polygonOffsetUnits=1)),s.blending=si,s.needsUpdate=!0,s.transparent);class X0{constructor(){Tn(this,"isPreloading",!1);Tn(this,"preloadedModels",[]);Tn(this,"modelQueue",[]);Tn(this,"concurrentLoads",1);Tn(this,"activeLoads",0);Tn(this,"onProgress");Tn(this,"modelStatus",{})}startPreloading(e,t=1){if(this.isPreloading)return;this.isPreloading=!0,this.concurrentLoads=t,this.onProgress=e;const n=H0();this.modelQueue=n.map(i=>i.id),n.forEach(i=>{this.modelStatus[i.id]={isLoading:!1,progress:0}}),this.processQueue()}prioritizeModel(e){this.modelQueue=this.modelQueue.filter(t=>t!==e),this.modelQueue.unshift(e),this.activeLoads===0&&!this.isPreloaded(e)&&this.processQueue()}isPreloaded(e){return this.preloadedModels.includes(e)}getPreloadedModels(){return[...this.preloadedModels]}getStatus(e){return this.modelStatus[e]||{isLoading:!1,progress:0}}getPreloadStatus(){const e=this.modelQueue.length+this.preloadedModels.length+this.activeLoads,t=this.preloadedModels.length;return{isPreloading:this.isPreloading,totalModels:e,loadedModels:t,progress:e>0?t/e*100:100,remainingModels:[...this.modelQueue]}}processQueue(){if(this.modelQueue.length===0||this.activeLoads>=this.concurrentLoads)return;const e=this.modelQueue.shift();if(e){if(this.preloadedModels.includes(e)){this.processQueue();return}this.activeLoads++,this.modelStatus[e]={isLoading:!0,progress:0},this.requestIdleOperation(()=>{console.log(`开始后台预加载模型: ${e}`),W0(e,t=>{this.modelStatus[e]={isLoading:t.isLoading,progress:t.progress},this.onProgress&&t.isLoading&&this.onProgress(e,t.progress),t.isLoading||(console.log(`模型预加载完成: ${e}`),this.preloadedModels.push(e),this.activeLoads--,this.processQueue(),this.modelQueue.length===0&&this.activeLoads===0&&(this.isPreloading=!1))},()=>{},t=>{console.error(`预加载模型 ${e} 失败:`,t),this.modelStatus[e]={isLoading:!1,progress:0},this.activeLoads--,this.processQueue(),this.modelQueue.length===0&&this.activeLoads===0&&(this.isPreloading=!1)})})}}requestIdleOperation(e){typeof window<"u"&&("requestIdleCallback"in window?window.requestIdleCallback(()=>e(),{timeout:3e3}):setTimeout(e,100))}}const q0=new X0,Y0=Ql(xu).use(cr);Y0.mount("#app");setTimeout(()=>{const s=navigator.connection||navigator.mozConnection||navigator.webkitConnection;let e=!0,t=1;if(s){const i=s.type||s.effectiveType;(i==="slow-2g"||i==="2g")&&(e=!1),(i==="4g"||i==="wifi")&&(t=2),s.saveData&&(e=!1)}/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(t=1),e?(console.log("开始后台预加载模型资源..."),q0.startPreloading((i,r)=>{console.log(`预加载模型 ${i}: ${r}%`)},t)):console.log("网络条件不适合预加载，已跳过预加载阶段")},3e3);export{Q0 as A,Sn as B,Te as C,A_ as D,nx as E,Vi as F,ii as G,$0 as H,Z0 as I,tx as J,us as K,Jn as L,Gt as M,Fh as N,Nt as P,zn as Q,ex as R,J0 as S,x_ as T,Le as V,$g as W,ls as _,Tu as a,Rl as b,Gn as c,nn as d,sr as e,Cl as f,qt as g,En as h,ax as i,Lv as j,Dl as k,qc as l,er as m,sx as n,rx as o,q0 as p,G0 as q,L as r,On as s,At as t,Ia as u,Ll as v,ix as w,H0 as x,W0 as y,ox as z};
