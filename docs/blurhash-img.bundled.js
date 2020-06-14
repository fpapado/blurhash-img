/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,e=(t,e,s=null)=>{for(;e!==s;){const s=e.nextSibling;t.removeChild(e),e=s}},s=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${s}--\x3e`,n=new RegExp(`${s}|${i}`);class o{constructor(t,e){this.parts=[],this.element=e;const i=[],o=[],h=document.createTreeWalker(e.content,133,null,!1);let u=0,l=-1,d=0;const{strings:f,values:{length:p}}=t;for(;d<p;){const t=h.nextNode();if(null!==t){if(l++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:s}=e;let i=0;for(let t=0;t<s;t++)r(e[t].name,"$lit$")&&i++;for(;i-- >0;){const e=f[d],s=a.exec(e)[2],i=s.toLowerCase()+"$lit$",o=t.getAttribute(i);t.removeAttribute(i);const r=o.split(n);this.parts.push({type:"attribute",index:l,name:s,strings:r}),d+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),h.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(s)>=0){const s=t.parentNode,o=e.split(n),h=o.length-1;for(let e=0;e<h;e++){let i,n=o[e];if(""===n)i=c();else{const t=a.exec(n);null!==t&&r(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(n)}s.insertBefore(i,t),this.parts.push({type:"node",index:++l})}""===o[h]?(s.insertBefore(c(),t),i.push(t)):t.data=o[h],d+=h}}else if(8===t.nodeType)if(t.data===s){const e=t.parentNode;null!==t.previousSibling&&l!==u||(l++,e.insertBefore(c(),t)),u=l,this.parts.push({type:"node",index:l}),null===t.nextSibling?t.data="":(i.push(t),l--),d++}else{let e=-1;for(;-1!==(e=t.data.indexOf(s,e+1));)this.parts.push({type:"node",index:-1}),d++}}else h.currentNode=o.pop()}for(const t of i)t.parentNode.removeChild(t)}}const r=(t,e)=>{const s=t.length-e.length;return s>=0&&t.slice(s)===e},h=t=>-1!==t.index,c=()=>document.createComment(""),a=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:s},parts:i}=t,n=document.createTreeWalker(s,133,null,!1);let o=d(i),r=i[o],h=-1,c=0;const a=[];let u=null;for(;n.nextNode();){h++;const t=n.currentNode;for(t.previousSibling===u&&(u=null),e.has(t)&&(a.push(t),null===u&&(u=t)),null!==u&&c++;void 0!==r&&r.index===h;)r.index=null!==u?-1:r.index-c,o=d(i,o),r=i[o]}a.forEach(t=>t.parentNode.removeChild(t))}const l=t=>{let e=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)e++;return e},d=(t,e=-1)=>{for(let s=e+1;s<t.length;s++){const e=t[s];if(h(e))return s}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const f=new WeakMap,p=t=>"function"==typeof t&&f.has(t),w={},v={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class m{constructor(t,e,s){this.t=[],this.template=t,this.processor=e,this.options=s}update(t){let e=0;for(const s of this.t)void 0!==s&&s.setValue(t[e]),e++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1);let o,r=0,c=0,a=n.nextNode();for(;r<i.length;)if(o=i[r],h(o)){for(;c<o.index;)c++,"TEMPLATE"===a.nodeName&&(s.push(a),n.currentNode=a.content),null===(a=n.nextNode())&&(n.currentNode=s.pop(),a=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(a,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=` ${s} `;class b{constructor(t,e,s,i){this.strings=t,this.values=e,this.type=s,this.processor=i}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const h=a.exec(t);e+=null===h?t+(n?y:i):t.substr(0,h.index)+h[1]+h[2]+"$lit$"+h[3]+s}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const M=t=>null===t||!("object"==typeof t||"function"==typeof t),g=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class _{constructor(t,e,s){this.dirty=!0,this.element=t,this.name=e,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1;let s="";for(let i=0;i<e;i++){s+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(M(t)||!g(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===w||M(t)&&t===this.value||(this.value=t,p(t)||(this.committer.dirty=!0))}commit(){for(;p(this.value);){const t=this.value;this.value=w,t(this)}this.value!==w&&this.committer.commit()}}class x{constructor(t){this.value=void 0,this.s=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.i(this.startNode=c()),t.i(this.endNode=c())}insertAfterPart(t){t.i(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.s=t}commit(){if(null===this.startNode.parentNode)return;for(;p(this.s);){const t=this.s;this.s=w,t(this)}const t=this.s;t!==w&&(M(t)?t!==this.value&&this.o(t):t instanceof b?this.h(t):t instanceof Node?this.u(t):g(t)?this.l(t):t===v?(this.value=v,this.clear()):this.o(t))}i(t){this.endNode.parentNode.insertBefore(t,this.endNode)}u(t){this.value!==t&&(this.clear(),this.i(t),this.value=t)}o(t){const e=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=s:this.u(document.createTextNode(s)),this.value=t}h(t){const e=this.options.templateFactory(t);if(this.value instanceof m&&this.value.template===e)this.value.update(t.values);else{const s=new m(e,t.processor,this.options),i=s._clone();s.update(t.values),this.u(i),this.value=s}}l(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let s,i=0;for(const n of t)s=e[i],void 0===s&&(s=new x(this.options),e.push(s),0===i?s.appendIntoPart(this):s.insertAfterPart(e[i-1])),s.setValue(n),s.commit(),i++;i<e.length&&(e.length=i,this.clear(s&&s.endNode))}clear(t=this.startNode){e(this.startNode.parentNode,t.nextSibling,this.endNode)}}class j{constructor(t,e,s){if(this.value=void 0,this.s=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=s}setValue(t){this.s=t}commit(){for(;p(this.s);){const t=this.s;this.s=w,t(this)}if(this.s===w)return;const t=!!this.s;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.s=w}}class O extends _{constructor(t,e,s){super(t,e,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends S{}let C=!1;(()=>{try{const t={get capture(){return C=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class ${constructor(t,e,s){this.value=void 0,this.s=void 0,this.element=t,this.eventName=e,this.eventContext=s,this.p=t=>this.handleEvent(t)}setValue(t){this.s=t}commit(){for(;p(this.s);){const t=this.s;this.s=w,t(this)}if(this.s===w)return;const t=this.s,e=this.value,s=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||s);s&&this.element.removeEventListener(this.eventName,this.p,this.v),i&&(this.v=k(t),this.element.addEventListener(this.eventName,this.p,this.v)),this.value=t,this.s=w}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const k=t=>t&&(C?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function P(t){let e=E.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},E.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(s);return i=e.keyString.get(n),void 0===i&&(i=new o(t,t.getTemplateElement()),e.keyString.set(n,i)),e.stringsArray.set(t.strings,i),i}const E=new Map,T=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const U=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,s,i){const n=e[0];if("."===n){return new O(t,e.slice(1),s).parts}return"@"===n?[new $(t,e.slice(1),i.eventContext)]:"?"===n?[new j(t,e.slice(1),s)]:new _(t,e,s).parts}handleTextExpression(t){return new x(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const N=(t,...e)=>new b(t,e,"html",U)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,V=(t,e)=>`${t}--${e}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const q=t=>e=>{const i=V(e.type,t);let n=E.get(i);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},E.set(i,n));let r=n.stringsArray.get(e.strings);if(void 0!==r)return r;const h=e.strings.join(s);if(r=n.keyString.get(h),void 0===r){const s=e.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(s,t),r=new o(e,s),n.keyString.set(h,r)}return n.stringsArray.set(e.strings,r),r},F=["html","svg"],R=new Set,z=(t,e,s)=>{R.add(t);const i=s?s.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(i,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{F.forEach(e=>{const s=E.get(V(e,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:e}}=t,s=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{s.add(t)}),u(t,s)})})})(t);const h=i.content;s?function(t,e,s=null){const{element:{content:i},parts:n}=t;if(null==s)return void i.appendChild(e);const o=document.createTreeWalker(i,133,null,!1);let r=d(n),h=0,c=-1;for(;o.nextNode();){for(c++,o.currentNode===s&&(h=l(e),s.parentNode.insertBefore(e,s));-1!==r&&n[r].index===c;){if(h>0){for(;-1!==r;)n[r].index+=h,r=d(n,r);return}r=d(n,r)}}}(s,r,h.firstChild):h.insertBefore(r,h.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t);const c=h.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild);else if(s){h.insertBefore(r,h.firstChild);const t=new Set;t.add(r),u(s,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const J={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),B={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:W};class D extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,s)=>{const i=this._attributeNameForProperty(s,e);void 0!==i&&(this._attributeToPropertyMap.set(i,s),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=B){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(s){const i=this[t];this[e]=s,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||B}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of e)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,s=W){return s(t,e)}static _propertyValueFromAttribute(t,e){const s=e.type,i=e.converter||J,n="function"==typeof i?i:i.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const s=e.type,i=e.converter;return(i&&i.toAttribute||J.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,s){e!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,e,s=B){const i=this.constructor,n=i._attributeNameForProperty(t,s);if(void 0!==n){const t=i._propertyValueToAttribute(e,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const s=this.constructor,i=s._attributeToPropertyMap.get(t);if(void 0!==i){const t=s.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=s._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let s=!0;if(void 0!==t){const i=this.constructor,n=i.getPropertyOptions(t);i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}D.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const H=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(s){s.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function L(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):H(t,e)}const X=(t,e,s)=>{Object.defineProperty(e,s,t)},Y=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t})
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/,G="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Q{constructor(t,e){if(e!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const Z={};class tt extends D{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?e(s,t):(t.add(s),t),s),s=e(t,new Set),i=[];s.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==Z&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return Z}}tt.finalized=!0,tt.render=(t,s,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const n=i.scopeName,o=T.has(s),r=I&&11===s.nodeType&&!!s.host,h=r&&!R.has(n),c=h?document.createDocumentFragment():s;if(((t,s,i)=>{let n=T.get(s);void 0===n&&(e(s,s.firstChild),T.set(s,n=new x(Object.assign({templateFactory:P},i))),n.appendInto(s)),n.setValue(t),n.commit()})(t,c,Object.assign({templateFactory:q(n)},i)),h){const t=T.get(c);T.delete(c);const i=t.value instanceof m?t.value.template:void 0;z(n,c,i),e(s,s.firstChild),s.appendChild(c),T.set(s,t)}!o&&r&&window.ShadyCSS.styleElement(s.host)};var et="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function st(t){return t&&t.m&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function it(t,e,s){return t(s={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&s.path)}},s.exports),s.exports}var nt=it((function(t,e){Object.defineProperty(e,"m",{value:!0});var s=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"];e.decode83=function(t){for(var e=0,i=0;i<t.length;i++){var n=t[i];e=83*e+s.indexOf(n)}return e},e.encode83=function(t,e){for(var i="",n=1;n<=e;n++){var o=Math.floor(t)/Math.pow(83,e-n)%83;i+=s[Math.floor(o)]}return i}})),ot=it((function(t,e){Object.defineProperty(e,"m",{value:!0}),e.sRGBToLinear=function(t){var e=t/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},e.linearTosRGB=function(t){var e=Math.max(0,Math.min(1,t));return e<=.0031308?Math.round(12.92*e*255+.5):Math.round(255*(1.055*Math.pow(e,1/2.4)-.055)+.5)},e.sign=function(t){return t<0?-1:1},e.signPow=function(t,s){return e.sign(t)*Math.pow(Math.abs(t),s)}})),rt=it((function(t,e){var s,i=et&&et.M||(s=function(t,e){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])})(t,e)},function(t,e){function i(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)});Object.defineProperty(e,"m",{value:!0});var n=function(t){function e(e){var s=t.call(this,e)||this;return s.name="ValidationError",s.message=e,s}return i(e,t),e}(Error);e.ValidationError=n})),ht=it((function(t,e){Object.defineProperty(e,"m",{value:!0});var s=function(t){if(!t||t.length<6)throw new rt.ValidationError("The blurhash string must be at least 6 characters");var e=nt.decode83(t[0]),s=Math.floor(e/9)+1,i=e%9+1;if(t.length!==4+2*i*s)throw new rt.ValidationError("blurhash length mismatch: length is "+t.length+" but it should be "+(4+2*i*s))};e.isBlurhashValid=function(t){try{s(t)}catch(t){return{result:!1,errorReason:t.message}}return{result:!0}};var i=function(t){var e=t>>16,s=t>>8&255,i=255&t;return[ot.sRGBToLinear(e),ot.sRGBToLinear(s),ot.sRGBToLinear(i)]},n=function(t,e){var s=Math.floor(t/361),i=Math.floor(t/19)%19,n=t%19;return[ot.signPow((s-9)/9,2)*e,ot.signPow((i-9)/9,2)*e,ot.signPow((n-9)/9,2)*e]};e.default=function(t,e,o,r){s(t),r|=1;for(var h=nt.decode83(t[0]),c=Math.floor(h/9)+1,a=h%9+1,u=(nt.decode83(t[1])+1)/166,l=new Array(a*c),d=0;d<l.length;d++)if(0===d){var f=nt.decode83(t.substring(2,6));l[d]=i(f)}else{f=nt.decode83(t.substring(4+2*d,6+2*d));l[d]=n(f,u*r)}for(var p=4*e,w=new Uint8ClampedArray(p*o),v=0;v<o;v++)for(var m=0;m<e;m++){for(var y=0,b=0,M=0,g=0;g<c;g++)for(d=0;d<a;d++){var _=Math.cos(Math.PI*m*d/e)*Math.cos(Math.PI*v*g/o),S=l[d+g*a];y+=S[0]*_,b+=S[1]*_,M+=S[2]*_}var x=ot.linearTosRGB(y),j=ot.linearTosRGB(b),O=ot.linearTosRGB(M);w[4*m+0+v*p]=x,w[4*m+1+v*p]=j,w[4*m+2+v*p]=O,w[4*m+3+v*p]=255}return w}})),ct=it((function(t,e){Object.defineProperty(e,"m",{value:!0});e.default=function(t,e,s,i,n){if(i<1||i>9||n<1||n>9)throw new rt.ValidationError("BlurHash must have between 1 and 9 components");if(e*s*4!==t.length)throw new rt.ValidationError("Width and height must match the pixels array");for(var o=[],r=function(n){for(var r=function(i){var r=0==i&&0==n?1:2,h=function(t,e,s,i){for(var n=0,o=0,r=0,h=4*e,c=0;c<e;c++)for(var a=0;a<s;a++){var u=i(c,a);n+=u*ot.sRGBToLinear(t[4*c+0+a*h]),o+=u*ot.sRGBToLinear(t[4*c+1+a*h]),r+=u*ot.sRGBToLinear(t[4*c+2+a*h])}var l=1/(e*s);return[n*l,o*l,r*l]}(t,e,s,(function(t,o){return r*Math.cos(Math.PI*i*t/e)*Math.cos(Math.PI*n*o/s)}));o.push(h)},h=0;h<i;h++)r(h)},h=0;h<n;h++)r(h);var c,a,u=o[0],l=o.slice(1),d="",f=i-1+9*(n-1);if(d+=nt.encode83(f,1),l.length>0){var p=Math.max.apply(Math,l.map((function(t){return Math.max.apply(Math,t)}))),w=Math.floor(Math.max(0,Math.min(82,Math.floor(166*p-.5))));c=(w+1)/166,d+=nt.encode83(w,1)}else c=1,d+=nt.encode83(0,1);return d+=nt.encode83((a=u,(ot.linearTosRGB(a[0])<<16)+(ot.linearTosRGB(a[1])<<8)+ot.linearTosRGB(a[2])),4),l.forEach((function(t){d+=nt.encode83(function(t,e){return 19*Math.floor(Math.max(0,Math.min(18,Math.floor(9*ot.signPow(t[0]/e,.5)+9.5))))*19+19*Math.floor(Math.max(0,Math.min(18,Math.floor(9*ot.signPow(t[1]/e,.5)+9.5))))+Math.floor(Math.max(0,Math.min(18,Math.floor(9*ot.signPow(t[2]/e,.5)+9.5))))}(t,c),2)})),d}})),at=st(it((function(t,e){Object.defineProperty(e,"m",{value:!0}),e.decode=ht.default,e.isBlurhashValid=ht.isBlurhashValid,e.encode=ct.default,function(t){for(var s in t)e.hasOwnProperty(s)||(e[s]=t[s])}(rt)}))),ut=function(t,e,s,i){for(var n,o=arguments.length,r=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i,h=t.length-1;h>=0;h--)(n=t[h])&&(r=(o<3?n(r):o>3?n(e,s,r):n(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r};let lt=class extends tt{constructor(){super(...arguments),this.resolutionX=32,this.resolutionY=32}g(){if(console.count("__updateCanvasImage"),this.hash)try{const t=at.decode(this.hash,this.resolutionX,this.resolutionY),e=new ImageData(t,this.resolutionX,this.resolutionY),s=this.canvas;if(s){const t=s.getContext("2d");t&&t.putImageData(e,0,0)}}catch(t){console.log(t)}}firstUpdated(){this.g()}updated(t){(t.get("hash")||t.get("resolutionX")||t.get("resolutionY"))&&this.g()}render(){return N`
      <div class="wrapper">
        <canvas
          id="canvas"
          width="${this.resolutionX}"
          height="${this.resolutionY}"
        ></canvas>
      </div>
    `}};var dt,ft;lt.styles=((t,...e)=>{const s=e.reduce((e,s,i)=>e+(t=>{if(t instanceof Q)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[i+1],t[0]);return new Q(s,K)})`
    :host {
      display: block;
    }

    .wrapper {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
    }

    #canvas {
      position: absolute;
      inset: 0px;
      width: 100%;
      height: 100%;
    }
  `,ut([L({type:String})],lt.prototype,"hash",void 0),ut([L({type:Number})],lt.prototype,"resolutionX",void 0),ut([L({type:Number})],lt.prototype,"resolutionY",void 0),ut([(dt="#canvas",(t,e)=>{const s={get(){return this.renderRoot.querySelector(dt)},enumerable:!0,configurable:!0};return void 0!==e?X(s,t,e):Y(s,t)})],lt.prototype,"canvas",void 0),lt=ut([(ft="blurhash-img",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(ft,t):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(ft,t))],lt);export{lt as BlurhashImg};
