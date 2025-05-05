import{r as F,t as Mt,S as Ft,C as tt,P as Lt,u as R,W as Dt,v as Pt,A as Ot,D as zt,b as Vt,w as at,d as dt,M as ht,x as It,y as Bt,z as Ht,B as Yt,E as ct,F as W,H as Tt,_ as ft,k as Rt}from"./index-DUKlNenR.js";import{O as Wt,g as T}from"./index-B1Lv5AAi.js";import{d as vt,r as I,L as jt,C as et,g as Gt,D as Nt,c as j,b as C,a as J,n as ut,t as it,x as pt,o as G,e as gt,m as Xt}from"./vendor-B5ERtXls.js";/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class P{constructor(t,e,i,a,A="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(A),this.domElement.classList.add("controller"),this.domElement.classList.add(a),this.$name=document.createElement("div"),this.$name.classList.add("name"),P.nextNameID=P.nextNameID||0,this.$name.id=`lil-gui-name-${++P.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",m=>m.stopPropagation()),this.domElement.addEventListener("keyup",m=>m.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Jt extends P{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function st(d){let t,e;return(t=d.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=d.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=d.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Kt={isPrimitive:!0,match:d=>typeof d=="string",fromHexString:st,toHexString:st},X={isPrimitive:!0,match:d=>typeof d=="number",fromHexString:d=>parseInt(d.substring(1),16),toHexString:d=>"#"+d.toString(16).padStart(6,0)},Ut={isPrimitive:!1,match:d=>Array.isArray(d),fromHexString(d,t,e=1){const i=X.fromHexString(d);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([d,t,e],i=1){i=255/i;const a=d*i<<16^t*i<<8^e*i<<0;return X.toHexString(a)}},Zt={isPrimitive:!1,match:d=>Object(d)===d,fromHexString(d,t,e=1){const i=X.fromHexString(d);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:d,g:t,b:e},i=1){i=255/i;const a=d*i<<16^t*i<<8^e*i<<0;return X.toHexString(a)}},Qt=[Kt,X,Ut,Zt];function qt(d){return Qt.find(t=>t.match(d))}class te extends P{constructor(t,e,i,a){super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=qt(this.initialValue),this._rgbScale=a,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const A=st(this.$text.value);A&&this._setValueFromHexString(A)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class nt extends P{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",a=>{a.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class ee extends P{constructor(t,e,i,a,A,m){super(t,e,i,"number"),this._initInput(),this.min(a),this.max(A);const x=m!==void 0;this.step(x?m:this._getImplicitStep(),x),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let r=parseFloat(this.$input.value);isNaN(r)||(this._stepExplicit&&(r=this._snap(r)),this.setValue(this._clamp(r)))},i=r=>{const p=parseFloat(this.$input.value);isNaN(p)||(this._snapClampSetValue(p+r),this.$input.value=this.getValue())},a=r=>{r.key==="Enter"&&this.$input.blur(),r.code==="ArrowUp"&&(r.preventDefault(),i(this._step*this._arrowKeyMultiplier(r))),r.code==="ArrowDown"&&(r.preventDefault(),i(this._step*this._arrowKeyMultiplier(r)*-1))},A=r=>{this._inputFocused&&(r.preventDefault(),i(this._step*this._normalizeMouseWheel(r)))};let m=!1,x,k,$,v,b;const y=5,S=r=>{x=r.clientX,k=$=r.clientY,m=!0,v=this.getValue(),b=0,window.addEventListener("mousemove",s),window.addEventListener("mouseup",f)},s=r=>{if(m){const p=r.clientX-x,z=r.clientY-k;Math.abs(z)>y?(r.preventDefault(),this.$input.blur(),m=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(p)>y&&f()}if(!m){const p=r.clientY-$;b-=p*this._step*this._arrowKeyMultiplier(r),v+b>this._max?b=this._max-v:v+b<this._min&&(b=this._min-v),this._snapClampSetValue(v+b)}$=r.clientY},f=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",f)},B=()=>{this._inputFocused=!0},u=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",a),this.$input.addEventListener("wheel",A,{passive:!1}),this.$input.addEventListener("mousedown",S),this.$input.addEventListener("focus",B),this.$input.addEventListener("blur",u)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(u,r,p,z,H)=>(u-r)/(p-r)*(H-z)+z,e=u=>{const r=this.$slider.getBoundingClientRect();let p=t(u,r.left,r.right,this._min,this._max);this._snapClampSetValue(p)},i=u=>{this._setDraggingStyle(!0),e(u.clientX),window.addEventListener("mousemove",a),window.addEventListener("mouseup",A)},a=u=>{e(u.clientX)},A=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",A)};let m=!1,x,k;const $=u=>{u.preventDefault(),this._setDraggingStyle(!0),e(u.touches[0].clientX),m=!1},v=u=>{u.touches.length>1||(this._hasScrollBar?(x=u.touches[0].clientX,k=u.touches[0].clientY,m=!0):$(u),window.addEventListener("touchmove",b,{passive:!1}),window.addEventListener("touchend",y))},b=u=>{if(m){const r=u.touches[0].clientX-x,p=u.touches[0].clientY-k;Math.abs(r)>Math.abs(p)?$(u):(window.removeEventListener("touchmove",b),window.removeEventListener("touchend",y))}else u.preventDefault(),e(u.touches[0].clientX)},y=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",b),window.removeEventListener("touchend",y)},S=this._callOnFinishChange.bind(this),s=400;let f;const B=u=>{if(Math.abs(u.deltaX)<Math.abs(u.deltaY)&&this._hasScrollBar)return;u.preventDefault();const p=this._normalizeMouseWheel(u)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(f),f=setTimeout(S,s)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",v,{passive:!1}),this.$slider.addEventListener("wheel",B,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ie extends P{constructor(t,e,i,a){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(a)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class ne extends P{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",a=>{a.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const se=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function oe(d){const t=document.createElement("style");t.innerHTML=d;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let mt=!1;class ot{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:a,title:A="Controls",closeFolders:m=!1,injectStyles:x=!0,touchStyles:k=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",$=>{($.code==="Enter"||$.code==="Space")&&($.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(A),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),k&&this.domElement.classList.add("allow-touch-styles"),!mt&&x&&(oe(se),mt=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),a&&this.domElement.style.setProperty("--width",a+"px"),this._closeFolders=m}add(t,e,i,a,A){if(Object(i)===i)return new ie(this,t,e,i);const m=t[e];switch(typeof m){case"number":return new ee(this,t,e,i,a,A);case"boolean":return new Jt(this,t,e);case"string":return new ne(this,t,e);case"function":return new nt(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,m)}addColor(t,e,i=1){return new te(this,t,e,i)}addFolder(t){const e=new ot({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof nt||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof nt)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=A=>{A.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const a=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=a+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const re={class:"three-scene-editor"},le={class:"panel-header"},ae={key:0,class:"preload-status"},de={class:"preload-model"},he={class:"preload-progress-container"},ce={key:1,class:"loading-indicator"},ue={class:"loading-text"},pe={key:0,class:"progress-bar-container"},ge=vt({__name:"ThreeSceneEditor",props:{modelPath:{type:String,default:"/models/landscape.glb"}},setup(d){const t=I(0),e=d,i=Ht(),a=I(null),A=I(null),m=I(!0),x=I("等待加载模型..."),k=I(!1),$=I(0);let v,b,y,S,s=null,f=null,B=I(!1),u,r,p,z,H,N;const O=jt({isPreloading:!1,currentModel:"",progress:0});let K=null;const bt=()=>{if(!a.value)return;v=new Ft,v.background=new tt(16115411);const o=a.value,n=o.clientWidth/o.clientHeight;b=new Lt(75,n,.1,1e3);const g=new R(0,1.5,5),h=new R(0,0,0);b.position.copy(g),H=g.clone(),N=h.clone(),y=new Dt({antialias:!0}),y.setSize(o.clientWidth,o.clientHeight),y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.shadowMap.enabled=!0,y.outputColorSpace=Pt,o.appendChild(y.domElement),S=new Wt(b,y.domElement),S.enableDamping=!0,S.dampingFactor=.05,u=new Ot(16777215,.5),v.add(u),r=new zt(16777215,1),r.position.set(5,10,5),r.castShadow=!0,r.shadow.mapSize.width=1024,r.shadow.mapSize.height=1024,v.add(r);const _=25,l=new Vt(_,64),c=new at({color:15127992,side:dt,roughness:.8,metalness:.2}),w=new ht(l,c);w.rotation.x=-Math.PI/2,w.receiveShadow=!0,v.add(w);const E=_*1.02,M=new It(_,E,64),Y=new at({color:9127187,side:dt,roughness:.9,metalness:.1}),L=new ht(M,Y);L.rotation.x=-Math.PI/2,L.position.y=-.01,L.receiveShadow=!0,v.add(L);const Q=new Bt(2);v.add(Q),At(),window.addEventListener("resize",Z),Ct(),rt()},wt=o=>{if(!b||!S)return;const n=o.cameraSettings||{position:new R(0,1.5,5),target:new R(0,0,0)};T.to(b.position,{x:n.position.x,y:n.position.y,z:n.position.z,duration:1.5,ease:"power2.inOut",onUpdate:function(){b.lookAt(S.target)}}),T.to(S.target,{x:n.target.x,y:n.target.y,z:n.target.z,duration:1.5,ease:"power2.inOut",onUpdate:function(){S.update()}}),H.copy(n.position),N.copy(n.target)},At=()=>{let o="landscape";for(const n of i)if(n.path===e.modelPath){o=n.id,t.value=i.findIndex(g=>g.id===n.id);break}F.isPreloaded(o)||F.prioritizeModel(o),U(o)},U=o=>{k.value=!0,x.value="正在加载模型...",$.value=0,F.isPreloaded(o)&&(x.value="模型已预加载，正在准备..."),Yt(o,n=>{k.value=n.isLoading,x.value=n.message,$.value=n.progress},(n,g)=>{xt(n,g),t.value=i.findIndex(h=>h.id===g.id)},n=>{console.error("模型加载失败:",n),k.value=!1,x.value=n})},xt=(o,n)=>{if(s&&v.remove(s),f&&(v.remove(f),f=null),s=o.scene,!s){x.value="模型数据无效";return}wt(n);const g=[],h=[];s.traverse(D=>{if(D.isMesh&&(D.castShadow=!0,D.receiveShadow=!0,n.needsMaterialFix)){const V=D.material;let q=!1;Array.isArray(V)?V.forEach(kt=>{ct(kt)&&(q=!0)}):V&&(q=ct(V)),q?g.push(D):h.push(D)}}),g.forEach((D,V)=>{D.renderOrder=10+V}),h.forEach((D,V)=>{D.renderOrder=V});const l=new W().setFromObject(s).getSize(new R),w=2/Math.max(l.x,l.y,l.z)*3;s.scale.set(w,w,w);const E=w,M=new W().setFromObject(s);f=new Tt(M,new tt(35071)),f.visible=B.value,v.add(f);const Y=M.min.y,L=.05;s.position.x=0,s.position.y=-Y+L,s.position.z=0;const Q=s.position.clone(),St=s.rotation.clone();s.userData.initialTransform={position:Q,rotation:St,scale:E},v.add(s),M.setFromObject(s),f&&f.updateMatrixWorld(!0),$t()},yt=()=>{t.value=(t.value+1)%i.length,U(i[t.value].id)},_t=async o=>{k.value=!0,$.value=0;const n=i[o];n&&(F.isPreloaded(n.id)?(x.value="使用预加载模型...",await new Promise(g=>setTimeout(g,300)),$.value=100):(x.value="正在加载模型...",F.prioritizeModel(n.id)))},Ct=()=>{p=new ot({autoPlace:!1,width:300}),A.value&&A.value.appendChild(p.domElement);const o=p.addFolder("相机控制"),n={resetView:()=>Et()};o.add(n,"resetView").name("重置视角"),o.open();const g=p.addFolder("模型控制"),h={currentModel:i[t.value].name,switchModel:()=>yt(),showBoundingBox:B.value};g.add(h,"currentModel",i.map(c=>F.isPreloaded(c.id)?`✓ ${c.name}`:c.name)).name("当前模型").onChange(c=>{const w=c.replace("✓ ",""),E=i.findIndex(M=>M.name===w);E!==-1&&_t(E)}),g.add(h,"switchModel").name("切换到下一个模型"),g.add(h,"showBoundingBox").name("显示模型边界").onChange(c=>{B.value=c,f&&(f.visible=c)}),g.open();const _=p.addFolder("场景设置"),l={backgroundColor:"#f5e6d3",ambientIntensity:.5,directionalIntensity:1};_.addColor(l,"backgroundColor").onChange(c=>{v.background=new tt(c)}),_.add(l,"ambientIntensity",0,1,.01).onChange(c=>{u.intensity=c}),_.add(l,"directionalIntensity",0,2,.01).onChange(c=>{r.intensity=c}),_.open(),setInterval(()=>{if(m.value&&g&&g.controllers&&g.controllers.length>0){const c=g.controllers[0],w=i.map(E=>F.isPreloaded(E.id)?`✓ ${E.name}`:E.name);c._values=w,c.updateDisplay()}},2e3)},$t=()=>{if(!s||!p)return;const o=p.folders.find(l=>l._title==="模型调整");o&&p.removeFolder(o);const n=p.addFolder("模型调整"),g=s.userData.initialTransform||{position:new R(0,0,0)},h={rotationY:s.rotation.y,scale:1,positionY:s.position.y-g.position.y,wireframe:!1,reset:()=>{if(!s)return;const l=s.userData.initialTransform;if(l){T.to(s.rotation,{x:l.rotation.x,y:l.rotation.y,z:l.rotation.z,duration:1.2,ease:"power2.inOut"}),T.to(s.position,{x:l.position.x,y:l.position.y,z:l.position.z,duration:1.2,ease:"power2.inOut"});const c=l.scale;T.to(s.scale,{x:c,y:c,z:c,duration:1.2,ease:"power2.inOut",onComplete:()=>{if(f){const w=new W().setFromObject(s);f.box=w,f.updateMatrixWorld(!0)}},onUpdate:()=>{const w=(s.scale.x-l.scale)/(h.scale*l.scale-l.scale),E=1-(1-h.scale)*w;h.scale=E,h.rotationY=s.rotation.y;const M=(s.position.y-l.position.y)/(h.positionY||1e-4),Y=h.positionY*(1-M);h.positionY=Y;for(const L of n.controllers)L.updateDisplay()}}),setTimeout(()=>{h.rotationY=l.rotation.y,h.scale=1,h.positionY=0;for(const w of n.controllers)w.updateDisplay()},1200)}}};n.add(h,"rotationY",0,Math.PI*2,.01).name("旋转").onChange(l=>{if(s&&(s.rotation.y=l,f)){const c=new W().setFromObject(s);f.box=c,f.updateMatrixWorld(!0)}}),n.add(h,"scale",.1,3,.01).name("大小").onChange(l=>{if(!s)return;const c=s.userData.initialTransform;if(c){const E=c.scale*l;if(s.scale.set(E,E,E),f){const M=new W().setFromObject(s),Y=M.min.y,L=h.positionY;s.position.y=-Y+.01+L,f.box=M,f.updateMatrixWorld(!0)}}}),n.add(h,"positionY",-2,2,.01).name("高度").onChange(l=>{if(!s)return;const c=s.userData.initialTransform;if(c&&(s.position.y=c.position.y+l,f)){const w=new W().setFromObject(s);f.box=w,f.updateMatrixWorld(!0)}}),n.add(h,"wireframe").name("线框模式").onChange(l=>{s&&s.traverse(c=>{c.isMesh&&(c.material.wireframe=l)})}),n.add(h,"reset").name("重置模型"),n.open();const _=p.folders.find(l=>l._title==="模型控制");_&&_.controllers&&_.controllers.length>0&&_.controllers[0].setValue(i[t.value].name)},Et=()=>{!b||!S||(T.to(b.position,{x:H.x,y:H.y,z:H.z,duration:1.5,ease:"power2.inOut"}),T.to(S.target,{x:N.x,y:N.y,z:N.z,duration:1.5,ease:"power2.inOut",onUpdate:function(){S.update()}}))},Z=()=>{if(!a.value)return;const o=a.value;b.aspect=o.clientWidth/o.clientHeight,b.updateProjectionMatrix(),y.setSize(o.clientWidth,o.clientHeight)},rt=()=>{z=requestAnimationFrame(rt),S.update(),y.render(v,b)},lt=()=>{m.value=!m.value};return et(m,()=>{a.value&&setTimeout(Z,300)}),et(()=>e.modelPath,o=>{if(o){for(const n of i)if(n.path===o){U(n.id);break}}},{immediate:!1}),et(()=>F.getPreloadStatus(),o=>{if(O.isPreloading=o.isPreloading,O.currentModel=o.remainingModels[0]||"",O.progress=o.progress,p){const n=p.controllers.find(g=>g.property==="selectedModelIndex");if(n){const g=n._values;i.forEach((h,_)=>{const l=F.isPreloaded(h.id);g[_]=l?`${h.name} ✓`:h.name}),n.updateDisplay()}}},{deep:!0}),Gt(()=>{bt(),K=setInterval(()=>{const o=F.getPreloadStatus();if(O.isPreloading=o.isPreloading,O.currentModel=o.remainingModels[0]||"",O.progress=o.progress,p){const n=p.controllers.find(g=>g.property==="selectedModelIndex");if(n){const g=n._values;i.forEach((h,_)=>{const l=F.isPreloaded(h.id);g[_]=l?`${h.name} ✓`:h.name}),n.updateDisplay()}}},2e3)}),Nt(()=>{if(z&&cancelAnimationFrame(z),window.removeEventListener("resize",Z),p&&p.destroy(),y&&(y.dispose(),a.value)){const o=a.value.querySelector("canvas");o&&a.value.removeChild(o)}s&&(v.remove(s),s=null),K&&clearInterval(K),Mt()}),(o,n)=>(G(),j("div",re,[C("div",{class:ut(["control-panel",{collapsed:!m.value}])},[C("div",le,[n[0]||(n[0]=C("h3",null,"控制面板",-1)),C("button",{class:"toggle-button",onClick:lt},it(m.value?"收起":"展开"),1)]),C("div",{ref_key:"controlPanelRef",ref:A,class:"gui-container"},null,512),O.isPreloading?(G(),j("div",ae,[n[1]||(n[1]=C("div",{class:"preload-header"},"后台预加载",-1)),C("div",de,it(O.currentModel||"等待中..."),1),C("div",he,[C("div",{class:"preload-progress-bar",style:pt({width:`${O.progress}%`})},null,4)])])):J("",!0)],2),m.value?J("",!0):(G(),j("button",{key:0,class:"floating-toggle-button",onClick:lt},n[2]||(n[2]=[C("span",null,"打开控制面板",-1)]))),k.value?(G(),j("div",ce,[n[3]||(n[3]=C("div",{class:"loading-spinner"},null,-1)),C("div",ue,it(x.value),1),$.value>=0?(G(),j("div",pe,[C("div",{class:"progress-bar",style:pt({width:`${$.value}%`})},null,4)])):J("",!0)])):J("",!0),C("div",{ref_key:"containerRef",ref:a,class:ut(["scene-container",{expanded:!m.value}])},null,2)]))}}),me=ft(ge,[["__scopeId","data-v-362618cf"]]),fe={class:"three-scene-page"},ve={class:"editor-container"},be=vt({__name:"ThreeScene",setup(d){return(t,e)=>(G(),j("div",fe,[gt(Xt(Rt),{activePath:"/three-scene"}),C("div",ve,[gt(me,{modelPath:"/models/千里江山图.glb"})]),e[0]||(e[0]=C("div",{class:"page-header"},[C("h1",null,"古风场景编辑器"),C("p",null,"探索中国传统文化的三维空间")],-1))]))}}),ye=ft(be,[["__scopeId","data-v-8485cbe2"]]);export{ye as default};
