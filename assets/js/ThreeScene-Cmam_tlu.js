import{r as T,t as kt,S as Mt,C as tt,P as Ft,u as R,W as Lt,v as Dt,A as Ot,D as zt,b as Vt,w as at,d as dt,M as ht,x as It,y as Pt,z as Bt,B as Ht,E as ct,F as W,H as Yt,_ as ft,k as Tt}from"./index-DPFM1B2x.js";import{O as Rt,g as H}from"./index-ChknvcnO.js";import{d as vt,r as V,L as Wt,D as et,g as jt,h as Gt,c as j,b as y,a as J,n as ut,t as it,y as pt,o as G,e as gt,s as Nt}from"./vendor-DTVt_46P.js";/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class M{constructor(t,e,i,l,b="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(b),this.domElement.classList.add("controller"),this.domElement.classList.add(l),this.$name=document.createElement("div"),this.$name.classList.add("name"),M.nextNameID=M.nextNameID||0,this.$name.id=`lil-gui-name-${++M.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",p=>p.stopPropagation()),this.domElement.addEventListener("keyup",p=>p.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Xt extends M{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function nt(a){let t,e;return(t=a.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=a.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=a.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Jt={isPrimitive:!0,match:a=>typeof a=="string",fromHexString:nt,toHexString:nt},X={isPrimitive:!0,match:a=>typeof a=="number",fromHexString:a=>parseInt(a.substring(1),16),toHexString:a=>"#"+a.toString(16).padStart(6,0)},Kt={isPrimitive:!1,match:a=>Array.isArray(a),fromHexString(a,t,e=1){const i=X.fromHexString(a);t[0]=(i>>16&255)/255*e,t[1]=(i>>8&255)/255*e,t[2]=(i&255)/255*e},toHexString([a,t,e],i=1){i=255/i;const l=a*i<<16^t*i<<8^e*i<<0;return X.toHexString(l)}},Ut={isPrimitive:!1,match:a=>Object(a)===a,fromHexString(a,t,e=1){const i=X.fromHexString(a);t.r=(i>>16&255)/255*e,t.g=(i>>8&255)/255*e,t.b=(i&255)/255*e},toHexString({r:a,g:t,b:e},i=1){i=255/i;const l=a*i<<16^t*i<<8^e*i<<0;return X.toHexString(l)}},Zt=[Jt,X,Kt,Ut];function Qt(a){return Zt.find(t=>t.match(a))}class qt extends M{constructor(t,e,i,l){super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Qt(this.initialValue),this._rgbScale=l,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const b=nt(this.$text.value);b&&this._setValueFromHexString(b)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class st extends M{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",l=>{l.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class te extends M{constructor(t,e,i,l,b,p){super(t,e,i,"number"),this._initInput(),this.min(l),this.max(b);const _=p!==void 0;this.step(_?p:this._getImplicitStep(),_),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let o=parseFloat(this.$input.value);isNaN(o)||(this._stepExplicit&&(o=this._snap(o)),this.setValue(this._clamp(o)))},i=o=>{const g=parseFloat(this.$input.value);isNaN(g)||(this._snapClampSetValue(g+o),this.$input.value=this.getValue())},l=o=>{o.key==="Enter"&&this.$input.blur(),o.code==="ArrowUp"&&(o.preventDefault(),i(this._step*this._arrowKeyMultiplier(o))),o.code==="ArrowDown"&&(o.preventDefault(),i(this._step*this._arrowKeyMultiplier(o)*-1))},b=o=>{this._inputFocused&&(o.preventDefault(),i(this._step*this._normalizeMouseWheel(o)))};let p=!1,_,S,C,f,v;const x=5,E=o=>{_=o.clientX,S=C=o.clientY,p=!0,f=this.getValue(),v=0,window.addEventListener("mousemove",n),window.addEventListener("mouseup",u)},n=o=>{if(p){const g=o.clientX-_,D=o.clientY-S;Math.abs(D)>x?(o.preventDefault(),this.$input.blur(),p=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(g)>x&&u()}if(!p){const g=o.clientY-C;v-=g*this._step*this._arrowKeyMultiplier(o),f+v>this._max?v=this._max-f:f+v<this._min&&(v=this._min-f),this._snapClampSetValue(f+v)}C=o.clientY},u=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",u)},I=()=>{this._inputFocused=!0},h=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",l),this.$input.addEventListener("wheel",b,{passive:!1}),this.$input.addEventListener("mousedown",E),this.$input.addEventListener("focus",I),this.$input.addEventListener("blur",h)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(h,o,g,D,P)=>(h-o)/(g-o)*(P-D)+D,e=h=>{const o=this.$slider.getBoundingClientRect();let g=t(h,o.left,o.right,this._min,this._max);this._snapClampSetValue(g)},i=h=>{this._setDraggingStyle(!0),e(h.clientX),window.addEventListener("mousemove",l),window.addEventListener("mouseup",b)},l=h=>{e(h.clientX)},b=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",b)};let p=!1,_,S;const C=h=>{h.preventDefault(),this._setDraggingStyle(!0),e(h.touches[0].clientX),p=!1},f=h=>{h.touches.length>1||(this._hasScrollBar?(_=h.touches[0].clientX,S=h.touches[0].clientY,p=!0):C(h),window.addEventListener("touchmove",v,{passive:!1}),window.addEventListener("touchend",x))},v=h=>{if(p){const o=h.touches[0].clientX-_,g=h.touches[0].clientY-S;Math.abs(o)>Math.abs(g)?C(h):(window.removeEventListener("touchmove",v),window.removeEventListener("touchend",x))}else h.preventDefault(),e(h.touches[0].clientX)},x=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",v),window.removeEventListener("touchend",x)},E=this._callOnFinishChange.bind(this),n=400;let u;const I=h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const g=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+g),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(E,n)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",f,{passive:!1}),this.$slider.addEventListener("wheel",I,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120,i*=this._stepExplicit?1:10),e+-i}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ee extends M{constructor(t,e,i,l){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(l)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const i=document.createElement("option");i.textContent=e,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class ie extends M{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",l=>{l.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const se=`.lil-gui {
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
}`;function ne(a){const t=document.createElement("style");t.innerHTML=a;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let mt=!1;class ot{constructor({parent:t,autoPlace:e=t===void 0,container:i,width:l,title:b="Controls",closeFolders:p=!1,injectStyles:_=!0,touchStyles:S=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",C=>{(C.code==="Enter"||C.code==="Space")&&(C.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(b),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),S&&this.domElement.classList.add("allow-touch-styles"),!mt&&_&&(ne(se),mt=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),l&&this.domElement.style.setProperty("--width",l+"px"),this._closeFolders=p}add(t,e,i,l,b){if(Object(i)===i)return new ee(this,t,e,i);const p=t[e];switch(typeof p){case"number":return new te(this,t,e,i,l,b);case"boolean":return new Xt(this,t,e);case"string":return new ie(this,t,e);case"function":return new st(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,p)}addColor(t,e,i=1){return new qt(this,t,e,i)}addFolder(t){const e=new ot({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof st||i._name in t.controllers&&i.load(t.controllers[i._name])}),e&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof st)){if(i._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);e.controllers[i._name]=i.save()}}),t&&this.folders.forEach(i=>{if(i._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);e.folders[i._title]=i.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const i=b=>{b.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const l=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=l+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const oe={class:"three-scene-editor"},re={class:"panel-header"},le={key:0,class:"preload-status"},ae={class:"preload-model"},de={class:"preload-progress-container"},he={key:1,class:"loading-indicator"},ce={class:"loading-text"},ue={key:0,class:"progress-bar-container"},pe=vt({__name:"ThreeSceneEditor",props:{modelPath:{type:String,default:"/models/landscape.glb"}},setup(a){const t=V(0),e=a,i=Bt(),l=V(null),b=V(null),p=V(!0),_=V("等待加载模型..."),S=V(!1),C=V(0);let f,v,x,E,n=null,u=null,I=V(!1),h,o,g,D,P,N;const F=Wt({isPreloading:!1,currentModel:"",progress:0});let K=null;const bt=()=>{if(!l.value)return;f=new Mt,f.background=new tt(16115411);const r=l.value,s=r.clientWidth/r.clientHeight;v=new Ft(75,s,.1,1e3);const w=new R(0,1.5,5),c=new R(0,0,0);v.position.copy(w),P=w.clone(),N=c.clone(),x=new Lt({antialias:!0}),x.setSize(r.clientWidth,r.clientHeight),x.setPixelRatio(Math.min(window.devicePixelRatio,2)),x.shadowMap.enabled=!0,x.outputColorSpace=Dt,r.appendChild(x.domElement),E=new Rt(v,x.domElement),E.enableDamping=!0,E.dampingFactor=.05,h=new Ot(16777215,.5),f.add(h),o=new zt(16777215,1),o.position.set(5,10,5),o.castShadow=!0,o.shadow.mapSize.width=1024,o.shadow.mapSize.height=1024,f.add(o);const d=25,m=new Vt(d,64),A=new at({color:15127992,side:dt,roughness:.8,metalness:.2}),$=new ht(m,A);$.rotation.x=-Math.PI/2,$.receiveShadow=!0,f.add($);const O=d*1.02,L=new It(d,O,64),B=new at({color:9127187,side:dt,roughness:.9,metalness:.1}),Y=new ht(L,B);Y.rotation.x=-Math.PI/2,Y.position.y=-.01,Y.receiveShadow=!0,f.add(Y);const Q=new Pt(2);f.add(Q),At(),window.addEventListener("resize",Z),_t(),rt()},wt=r=>{if(!v||!E)return;const s=r.cameraSettings||{position:new R(0,1.5,5),target:new R(0,0,0)};H.to(v.position,{x:s.position.x,y:s.position.y,z:s.position.z,duration:1.5,ease:"power2.inOut",onUpdate:function(){v.lookAt(E.target)}}),H.to(E.target,{x:s.target.x,y:s.target.y,z:s.target.z,duration:1.5,ease:"power2.inOut",onUpdate:function(){E.update()}}),P.copy(s.position),N.copy(s.target)},At=()=>{let r="landscape";for(const s of i)if(s.path===e.modelPath){r=s.id,t.value=i.findIndex(w=>w.id===s.id);break}T.isPreloaded(r)||T.prioritizeModel(r),U(r)},U=r=>{S.value=!0,_.value="正在加载模型...",C.value=0,T.isPreloaded(r)&&(_.value="模型已预加载，正在准备..."),Ht(r,s=>{S.value=s.isLoading,_.value=s.message,C.value=s.progress},(s,w)=>{xt(s,w),t.value=i.findIndex(c=>c.id===w.id)},s=>{console.error("模型加载失败:",s),S.value=!1,_.value=s})},xt=(r,s)=>{if(n&&f.remove(n),u&&(f.remove(u),u=null),n=r.scene,!n){_.value="模型数据无效";return}wt(s);const w=[],c=[];n.traverse(k=>{if(k.isMesh&&(k.castShadow=!0,k.receiveShadow=!0,s.needsMaterialFix)){const z=k.material;let q=!1;Array.isArray(z)?z.forEach(St=>{ct(St)&&(q=!0)}):z&&(q=ct(z)),q?w.push(k):c.push(k)}}),w.forEach((k,z)=>{k.renderOrder=10+z}),c.forEach((k,z)=>{k.renderOrder=z});const m=new W().setFromObject(n).getSize(new R),$=2/Math.max(m.x,m.y,m.z)*3;n.scale.set($,$,$);const O=$,L=new W().setFromObject(n);u=new Yt(L,new tt(35071)),u.visible=I.value,f.add(u);const B=L.min.y,Y=.05;n.position.x=0,n.position.y=-B+Y,n.position.z=0;const Q=n.position.clone(),$t=n.rotation.clone();n.userData.initialTransform={position:Q,rotation:$t,scale:O},f.add(n),L.setFromObject(n),u&&u.updateMatrixWorld(!0),Ct()},yt=()=>{t.value=(t.value+1)%i.length,U(i[t.value].id)},_t=()=>{g=new ot({autoPlace:!1,width:300}),b.value&&b.value.appendChild(g.domElement);const r=g.addFolder("相机控制"),s={resetView:()=>Et()};r.add(s,"resetView").name("重置视角"),r.open();const w=g.addFolder("模型控制"),c={switchModel:()=>yt(),showBoundingBox:I.value};w.add(c,"switchModel").name("切换到下一个模型"),w.add(c,"showBoundingBox").name("显示模型边界").onChange(A=>{I.value=A,u&&(u.visible=A)}),w.open();const d=g.addFolder("场景设置"),m={backgroundColor:"#f5e6d3",ambientIntensity:.5,directionalIntensity:1};d.addColor(m,"backgroundColor").name("背景颜色").onChange(A=>{f.background=new tt(A)}),d.add(m,"ambientIntensity",0,1,.01).name("地面亮度").onChange(A=>{h.intensity=A}),d.add(m,"directionalIntensity",0,2,.01).name("地面明度").onChange(A=>{o.intensity=A}),d.open()},Ct=()=>{if(!n||!g)return;const r=g.folders.find(d=>d._title==="模型调整");r&&g.removeFolder(r);const s=g.addFolder("模型调整"),w=n.userData.initialTransform||{position:new R(0,0,0)},c={rotationY:n.rotation.y,scale:1,positionY:n.position.y-w.position.y,wireframe:!1,reset:()=>{if(!n)return;const d=n.userData.initialTransform;if(d){H.to(n.rotation,{x:d.rotation.x,y:d.rotation.y,z:d.rotation.z,duration:1.2,ease:"power2.inOut"}),H.to(n.position,{x:d.position.x,y:d.position.y,z:d.position.z,duration:1.2,ease:"power2.inOut"});const m=d.scale;H.to(n.scale,{x:m,y:m,z:m,duration:1.2,ease:"power2.inOut",onComplete:()=>{if(u){const A=new W().setFromObject(n);u.box=A,u.updateMatrixWorld(!0)}},onUpdate:()=>{const A=(n.scale.x-d.scale)/(c.scale*d.scale-d.scale),$=1-(1-c.scale)*A;c.scale=$,c.rotationY=n.rotation.y;const O=(n.position.y-d.position.y)/(c.positionY||1e-4),L=c.positionY*(1-O);c.positionY=L;for(const B of s.controllers)B.updateDisplay()}}),setTimeout(()=>{c.rotationY=d.rotation.y,c.scale=1,c.positionY=0;for(const A of s.controllers)A.updateDisplay()},1200)}}};s.add(c,"rotationY",0,Math.PI*2,.01).name("旋转").onChange(d=>{if(n&&(n.rotation.y=d,u)){const m=new W().setFromObject(n);u.box=m,u.updateMatrixWorld(!0)}}),s.add(c,"scale",.1,3,.01).name("大小").onChange(d=>{if(!n)return;const m=n.userData.initialTransform;if(m){const $=m.scale*d;if(n.scale.set($,$,$),u){const O=new W().setFromObject(n),L=O.min.y,B=c.positionY;n.position.y=-L+.01+B,u.box=O,u.updateMatrixWorld(!0)}}}),s.add(c,"positionY",-2,2,.01).name("高度").onChange(d=>{if(!n)return;const m=n.userData.initialTransform;if(m&&(n.position.y=m.position.y+d,u)){const A=new W().setFromObject(n);u.box=A,u.updateMatrixWorld(!0)}}),s.add(c,"wireframe").name("线框模式").onChange(d=>{n&&n.traverse(m=>{m.isMesh&&(m.material.wireframe=d)})}),s.add(c,"reset").name("重置模型"),s.open()},Et=()=>{!v||!E||(H.to(v.position,{x:P.x,y:P.y,z:P.z,duration:1.5,ease:"power2.inOut"}),H.to(E.target,{x:N.x,y:N.y,z:N.z,duration:1.5,ease:"power2.inOut",onUpdate:function(){E.update()}}))},Z=()=>{if(!l.value)return;const r=l.value;v.aspect=r.clientWidth/r.clientHeight,v.updateProjectionMatrix(),x.setSize(r.clientWidth,r.clientHeight)},rt=()=>{D=requestAnimationFrame(rt),E.update(),x.render(f,v)},lt=()=>{p.value=!p.value};return et(p,()=>{l.value&&setTimeout(Z,300)}),et(()=>e.modelPath,r=>{if(r){for(const s of i)if(s.path===r){U(s.id);break}}},{immediate:!1}),et(()=>T.getPreloadStatus(),r=>{if(F.isPreloading=r.isPreloading,F.currentModel=r.remainingModels[0]||"",F.progress=r.progress,g){const s=g.controllers.find(w=>w.property==="selectedModelIndex");if(s){const w=s._values;i.forEach((c,d)=>{const m=T.isPreloaded(c.id);w[d]=m?`${c.name} ✓`:c.name}),s.updateDisplay()}}},{deep:!0}),jt(()=>{bt(),K=setInterval(()=>{const r=T.getPreloadStatus();F.isPreloading=r.isPreloading,F.currentModel=r.remainingModels[0]||"",F.progress=r.progress},2e3)}),Gt(()=>{if(D&&cancelAnimationFrame(D),window.removeEventListener("resize",Z),g&&g.destroy(),x&&(x.dispose(),l.value)){const r=l.value.querySelector("canvas");r&&l.value.removeChild(r)}n&&(f.remove(n),n=null),K&&clearInterval(K),kt()}),(r,s)=>(G(),j("div",oe,[y("div",{class:ut(["control-panel",{collapsed:!p.value}])},[y("div",re,[s[0]||(s[0]=y("h3",null,"控制面板",-1)),y("button",{class:"toggle-button",onClick:lt},it(p.value?"收起":"展开"),1)]),y("div",{ref_key:"controlPanelRef",ref:b,class:"gui-container"},null,512),F.isPreloading?(G(),j("div",le,[s[1]||(s[1]=y("div",{class:"preload-header"},"后台预加载",-1)),y("div",ae,it(F.currentModel||"等待中..."),1),y("div",de,[y("div",{class:"preload-progress-bar",style:pt({width:`${F.progress}%`})},null,4)])])):J("",!0)],2),p.value?J("",!0):(G(),j("button",{key:0,class:"floating-toggle-button",onClick:lt},s[2]||(s[2]=[y("span",null,"打开控制面板",-1)]))),S.value?(G(),j("div",he,[s[3]||(s[3]=y("div",{class:"loading-spinner"},null,-1)),y("div",ce,it(_.value),1),C.value>=0?(G(),j("div",ue,[y("div",{class:"progress-bar",style:pt({width:`${C.value}%`})},null,4)])):J("",!0)])):J("",!0),y("div",{ref_key:"containerRef",ref:l,class:ut(["scene-container",{expanded:!p.value}])},null,2)]))}}),ge=ft(pe,[["__scopeId","data-v-32d56dec"]]),me={class:"three-scene-page"},fe={class:"editor-container"},ve=vt({__name:"ThreeScene",setup(a){return(t,e)=>(G(),j("div",me,[gt(Nt(Tt),{activePath:"/three-scene"}),y("div",fe,[gt(ge,{modelPath:"/models/千里江山图.glb"})]),e[0]||(e[0]=y("div",{class:"page-header"},[y("h1",null,"古风场景编辑器"),y("p",null,"探索中国传统文化的三维空间")],-1))]))}}),xe=ft(ve,[["__scopeId","data-v-8485cbe2"]]);export{xe as default};
