/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var e,i,t,a;const s=globalThis.trustedTypes,n=s?s.createPolicy("lit-html",{createHTML:e=>e}):void 0,o=`lit$${(Math.random()+"").slice(9)}$`,l="?"+o,r=`<${l}>`,h=document,c=(e="")=>h.createComment(e),m=e=>null===e||"object"!=typeof e&&"function"!=typeof e,g=Array.isArray,d=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,p=/-->/g,u=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,v=/'/g,S=/"/g,_=/^(?:script|style|textarea)$/i,R=(e=>(i,...t)=>({_$litType$:e,strings:i,values:t}))(1),L=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),b=new WeakMap,w=h.createTreeWalker(h,129,null,!1),y=(e,i)=>{const t=e.length-1,a=[];let s,l=2===i?"<svg>":"",h=d;for(let i=0;i<t;i++){const t=e[i];let n,c,m=-1,g=0;for(;g<t.length&&(h.lastIndex=g,c=h.exec(t),null!==c);)g=h.lastIndex,h===d?"!--"===c[1]?h=p:void 0!==c[1]?h=u:void 0!==c[2]?(_.test(c[2])&&(s=RegExp("</"+c[2],"g")),h=f):void 0!==c[3]&&(h=f):h===f?">"===c[0]?(h=null!=s?s:d,m=-1):void 0===c[1]?m=-2:(m=h.lastIndex-c[2].length,n=c[1],h=void 0===c[3]?f:'"'===c[3]?S:v):h===S||h===v?h=f:h===p||h===u?h=d:(h=f,s=void 0);const R=h===f&&e[i+1].startsWith("/>")?" ":"";l+=h===d?t+r:m>=0?(a.push(n),t.slice(0,m)+"$lit$"+t.slice(m)+o+R):t+o+(-2===m?(a.push(void 0),i):R)}const c=l+(e[t]||"<?>")+(2===i?"</svg>":"");return[void 0!==n?n.createHTML(c):c,a]};class ${constructor({strings:e,_$litType$:i},t){let a;this.parts=[];let n=0,r=0;const h=e.length-1,m=this.parts,[g,d]=y(e,i);if(this.el=$.createElement(g,t),w.currentNode=this.el.content,2===i){const e=this.el.content,i=e.firstChild;i.remove(),e.append(...i.childNodes)}for(;null!==(a=w.nextNode())&&m.length<h;){if(1===a.nodeType){if(a.hasAttributes()){const e=[];for(const i of a.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(o)){const t=d[r++];if(e.push(i),void 0!==t){const e=a.getAttribute(t.toLowerCase()+"$lit$").split(o),i=/([.?@])?(.*)/.exec(t);m.push({type:1,index:n,name:i[2],strings:e,ctor:"."===i[1]?x:"?"===i[1]?z:"@"===i[1]?B:P})}else m.push({type:6,index:n})}for(const i of e)a.removeAttribute(i)}if(_.test(a.tagName)){const e=a.textContent.split(o),i=e.length-1;if(i>0){a.textContent=s?s.emptyScript:"";for(let t=0;t<i;t++)a.append(e[t],c()),w.nextNode(),m.push({type:2,index:++n});a.append(e[i],c())}}}else if(8===a.nodeType)if(a.data===l)m.push({type:2,index:n});else{let e=-1;for(;-1!==(e=a.data.indexOf(o,e+1));)m.push({type:7,index:n}),e+=o.length-1}n++}}static createElement(e,i){const t=h.createElement("template");return t.innerHTML=e,t}}function k(e,i,t=e,a){var s,n,o,l;if(i===L)return i;let r=void 0!==a?null===(s=t.Σi)||void 0===s?void 0:s[a]:t.Σo;const h=m(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==h&&(null===(n=null==r?void 0:r.O)||void 0===n||n.call(r,!1),void 0===h?r=void 0:(r=new h(e),r.T(e,t,a)),void 0!==a?(null!==(o=(l=t).Σi)&&void 0!==o?o:l.Σi=[])[a]=r:t.Σo=r),void 0!==r&&(i=k(e,r.S(e,i.values),r,a)),i}class C{constructor(e,i){this.l=[],this.N=void 0,this.D=e,this.M=i}u(e){var i;const{el:{content:t},parts:a}=this.D,s=(null!==(i=null==e?void 0:e.creationScope)&&void 0!==i?i:h).importNode(t,!0);w.currentNode=s;let n=w.nextNode(),o=0,l=0,r=a[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new T(n,n.nextSibling,this,e):1===r.type?i=new r.ctor(n,r.name,r.strings,this,e):6===r.type&&(i=new U(n,this,e)),this.l.push(i),r=a[++l]}o!==(null==r?void 0:r.index)&&(n=w.nextNode(),o++)}return s}v(e){let i=0;for(const t of this.l)void 0!==t&&(void 0!==t.strings?(t.I(e,t,i),i+=t.strings.length-2):t.I(e[i])),i++}}class T{constructor(e,i,t,a){this.type=2,this.N=void 0,this.A=e,this.B=i,this.M=t,this.options=a}setConnected(e){var i;null===(i=this.P)||void 0===i||i.call(this,e)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(e,i=this){e=k(this,e,i),m(e)?e===N||null==e||""===e?(this.H!==N&&this.R(),this.H=N):e!==this.H&&e!==L&&this.m(e):void 0!==e._$litType$?this._(e):void 0!==e.nodeType?this.$(e):(e=>{var i;return g(e)||"function"==typeof(null===(i=e)||void 0===i?void 0:i[Symbol.iterator])})(e)?this.g(e):this.m(e)}k(e,i=this.B){return this.A.parentNode.insertBefore(e,i)}$(e){this.H!==e&&(this.R(),this.H=this.k(e))}m(e){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=e:this.$(h.createTextNode(e)),this.H=e}_(e){var i;const{values:t,_$litType$:a}=e,s="number"==typeof a?this.C(e):(void 0===a.el&&(a.el=$.createElement(a.h,this.options)),a);if((null===(i=this.H)||void 0===i?void 0:i.D)===s)this.H.v(t);else{const e=new C(s,this),i=e.u(this.options);e.v(t),this.$(i),this.H=e}}C(e){let i=b.get(e.strings);return void 0===i&&b.set(e.strings,i=new $(e)),i}g(e){g(this.H)||(this.H=[],this.R());const i=this.H;let t,a=0;for(const s of e)a===i.length?i.push(t=new T(this.k(c()),this.k(c()),this,this.options)):t=i[a],t.I(s),a++;a<i.length&&(this.R(t&&t.B.nextSibling,a),i.length=a)}R(e=this.A.nextSibling,i){var t;for(null===(t=this.P)||void 0===t||t.call(this,!1,!0,i);e&&e!==this.B;){const i=e.nextSibling;e.remove(),e=i}}}class P{constructor(e,i,t,a,s){this.type=1,this.H=N,this.N=void 0,this.V=void 0,this.element=e,this.name=i,this.M=a,this.options=s,t.length>2||""!==t[0]||""!==t[1]?(this.H=Array(t.length-1).fill(N),this.strings=t):this.H=N}get tagName(){return this.element.tagName}I(e,i=this,t,a){const s=this.strings;let n=!1;if(void 0===s)e=k(this,e,i,0),n=!m(e)||e!==this.H&&e!==L,n&&(this.H=e);else{const a=e;let o,l;for(e=s[0],o=0;o<s.length-1;o++)l=k(this,a[t+o],i,o),l===L&&(l=this.H[o]),n||(n=!m(l)||l!==this.H[o]),l===N?e=N:e!==N&&(e+=(null!=l?l:"")+s[o+1]),this.H[o]=l}n&&!a&&this.W(e)}W(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class x extends P{constructor(){super(...arguments),this.type=3}W(e){this.element[this.name]=e===N?void 0:e}}class z extends P{constructor(){super(...arguments),this.type=4}W(e){e&&e!==N?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class B extends P{constructor(){super(...arguments),this.type=5}I(e,i=this){var t;if((e=null!==(t=k(this,e,i,0))&&void 0!==t?t:N)===L)return;const a=this.H,s=e===N&&a!==N||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,n=e!==N&&(a===N||s);s&&this.element.removeEventListener(this.name,this,a),n&&this.element.addEventListener(this.name,this,e),this.H=e}handleEvent(e){var i,t;"function"==typeof this.H?this.H.call(null!==(t=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==t?t:this.element,e):this.H.handleEvent(e)}}class U{constructor(e,i,t){this.element=e,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=t}I(e){k(this,e)}}null===(i=(e=globalThis).litHtmlPlatformSupport)||void 0===i||i.call(e,$,T),(null!==(t=(a=globalThis).litHtmlVersions)&&void 0!==t?t:a.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,I=Symbol();class M{constructor(e,i){if(i!==I)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return E&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const A=new Map,j=(e,...i)=>{const t=i.reduce(((i,t,a)=>i+(e=>{if(e instanceof M)return e.cssText;if("number"==typeof e)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(t)+e[a+1]),e[0]);let a=A.get(t);return void 0===a&&A.set(t,a=new M(t,I)),a},F=E?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let i="";for(const t of e.cssRules)i+=t.cssText;return(e=>new M(e+"",I))(i)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var H,O,D,G;const W={toAttribute(e,i){switch(i){case Boolean:e=e?"":null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,i){let t=e;switch(i){case Boolean:t=null!==e;break;case Number:t=null===e?null:Number(e);break;case Object:case Array:try{t=JSON.parse(e)}catch(e){t=null}}return t}},J=(e,i)=>i!==e&&(i==i||e==e),K={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:J};class V extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(e){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((i,t)=>{const a=this.Πp(t,i);void 0!==a&&(this.Πm.set(a,t),e.push(a))})),e}static createProperty(e,i=K){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(e,i),!i.noAccessor&&!this.prototype.hasOwnProperty(e)){const t="symbol"==typeof e?Symbol():"__"+e,a=this.getPropertyDescriptor(e,t,i);void 0!==a&&Object.defineProperty(this.prototype,e,a)}}static getPropertyDescriptor(e,i,t){return{get(){return this[i]},set(a){const s=this[e];this[i]=a,this.requestUpdate(e,s,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||K}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const t of i)this.createProperty(t,e[t])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const i=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const e of t)i.unshift(F(e))}else void 0!==e&&i.push(F(e));return i}static Πp(e,i){const t=i.attribute;return!1===t?void 0:"string"==typeof t?t:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this.Πg=new Promise((e=>this.enableUpdating=e)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(e=this.constructor.v)||void 0===e||e.forEach((e=>e(this)))}addController(e){var i,t;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(t=e.hostConnected)||void 0===t||t.call(e))}removeController(e){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(e)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((e,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{E?e.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((i=>{const t=document.createElement("style");t.textContent=i.cssText,e.appendChild(t)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this.ΠU)||void 0===e||e.forEach((e=>{var i;return null===(i=e.hostConnected)||void 0===i?void 0:i.call(e)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this.ΠU)||void 0===e||e.forEach((e=>{var i;return null===(i=e.hostDisconnected)||void 0===i?void 0:i.call(e)})),this.Πo=new Promise((e=>this.Πl=e))}attributeChangedCallback(e,i,t){this.K(e,t)}Πj(e,i,t=K){var a,s;const n=this.constructor.Πp(e,t);if(void 0!==n&&!0===t.reflect){const o=(null!==(s=null===(a=t.converter)||void 0===a?void 0:a.toAttribute)&&void 0!==s?s:W.toAttribute)(i,t.type);this.Πh=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this.Πh=null}}K(e,i){var t,a,s;const n=this.constructor,o=n.Πm.get(e);if(void 0!==o&&this.Πh!==o){const e=n.getPropertyOptions(o),l=e.converter,r=null!==(s=null!==(a=null===(t=l)||void 0===t?void 0:t.fromAttribute)&&void 0!==a?a:"function"==typeof l?l:null)&&void 0!==s?s:W.fromAttribute;this.Πh=o,this[o]=r(i,e.type),this.Πh=null}}requestUpdate(e,i,t){let a=!0;void 0!==e&&(((t=t||this.constructor.getPropertyOptions(e)).hasChanged||J)(this[e],i)?(this.L.has(e)||this.L.set(e,i),!0===t.reflect&&this.Πh!==e&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(e,t))):a=!1),!this.isUpdatePending&&a&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(e){Promise.reject(e)}const e=this.performUpdate();return null!=e&&await e,!this.isUpdatePending}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((e,i)=>this[i]=e)),this.Πi=void 0);let i=!1;const t=this.L;try{i=this.shouldUpdate(t),i?(this.willUpdate(t),null===(e=this.ΠU)||void 0===e||e.forEach((e=>{var i;return null===(i=e.hostUpdate)||void 0===i?void 0:i.call(e)})),this.update(t)):this.Π$()}catch(e){throw i=!1,this.Π$(),e}i&&this.E(t)}willUpdate(e){}E(e){var i;null===(i=this.ΠU)||void 0===i||i.forEach((e=>{var i;return null===(i=e.hostUpdated)||void 0===i?void 0:i.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(e){return!0}update(e){void 0!==this.Πk&&(this.Πk.forEach(((e,i)=>this.Πj(i,this[i],e))),this.Πk=void 0),this.Π$()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var q,Z,Q,X,Y,ee;V.finalized=!0,V.shadowRootOptions={mode:"open"},null===(O=(H=globalThis).reactiveElementPlatformSupport)||void 0===O||O.call(H,{ReactiveElement:V}),(null!==(D=(G=globalThis).reactiveElementVersions)&&void 0!==D?D:G.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(q=(ee=globalThis).litElementVersions)&&void 0!==q?q:ee.litElementVersions=[]).push("3.0.0-rc.1");class ie extends V{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var e,i;const t=super.createRenderRoot();return null!==(e=(i=this.renderOptions).renderBefore)&&void 0!==e||(i.renderBefore=t.firstChild),t}update(e){const i=this.render();super.update(e),this.Φt=((e,i,t)=>{var a,s;const n=null!==(a=null==t?void 0:t.renderBefore)&&void 0!==a?a:i;let o=n._$litPart$;if(void 0===o){const e=null!==(s=null==t?void 0:t.renderBefore)&&void 0!==s?s:null;n._$litPart$=o=new T(i.insertBefore(c(),e),e,void 0,t)}return o.I(e),o})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this.Φt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.Φt)||void 0===e||e.setConnected(!1)}render(){return L}}ie.finalized=!0,ie._$litElement$=!0,null===(Q=(Z=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(Z,{LitElement:ie}),null===(Y=(X=globalThis).litElementPlatformSupport)||void 0===Y||Y.call(X,{LitElement:ie});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te=(e,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(t){t.createProperty(i.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(t){t.createProperty(i.key,e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ae(e){return(i,t)=>void 0!==t?((e,i,t)=>{i.constructor.createProperty(t,e)})(e,i,t):te(e,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function se(e){return ae({...e,state:!0,attribute:!1})}var ne,oe=function(e,i,t,a){for(var s,n=arguments.length,o=n<3?i:null===a?a=Object.getOwnPropertyDescriptor(i,t):a,l=e.length-1;l>=0;l--)(s=e[l])&&(o=(n<3?s(o):n>3?s(i,t,o):s(i,t))||o);return n>3&&o&&Object.defineProperty(i,t,o),o};const le=j`8px`,re=j`${52}px;`,he=j`${104}px`,ce="https://getbadgecdn.azureedge.net/images";let me=ne=class extends ie{constructor(){super(),this.productId="",this.language="",this.size="large",this.languageDetails=ne.englishLanguage,this.iframeLocation="https://get.microsoft.com/iframe.html",this.miniPDPcompatible=!1}get imageUrl(){return"large"===this.size?`${ce}/${this.languageDetails.imageLarge.fileName}`:`${ce}/${this.languageDetails.imageSmall.fileName}`}get hrefValue(){return this.miniPDPcompatible?`ms-windows-store://pdp/?ProductId=${this.productId}`:`https://www.microsoft.com/store/apps/${this.productId}?cid=storebadge&ocid=badge`}firstUpdated(){this._checkLanguage(),this._checkPlatform()}updated(){this._checkLanguage(),this._checkPlatform()}_checkPlatform(){-1!==navigator.userAgent.indexOf("Windows NT 1")&&(this.miniPDPcompatible=!0)}_checkLanguage(){if(""===this.language){const e=ne.getSupportedLanguageFromUserAgent();this.language=e.code,this.languageDetails=e}else{const e=ne.supportedLanguages.find((e=>e.code===this.language.toLowerCase()));e?(this.language=e.code,this.languageDetails=e):(this.language=ne.englishLanguage.code,this.languageDetails=ne.englishLanguage)}}static getSupportedLanguageFromUserAgent(){const e=ne.supportedLanguages.find((e=>e.name===navigator.language));if(e)return e;if(navigator.languages){var i=navigator.languages.map((e=>ne.supportedLanguages.find((i=>i.code===e)))).find((e=>!!e));if(i)return i}const t=navigator.language.indexOf("-");if(t>0){const e=navigator.language.substring(0,t),i=ne.supportedLanguages.find((i=>i.name===e));if(i)return i}return ne.englishLanguage}render(){const e="large"===this.size?104:52,i=Math.round(e*("large"===this.size?this.languageDetails.imageLarge.aspectRatio:this.languageDetails.imageSmall.aspectRatio));return this.miniPDPcompatible?this.renderIFrame(i,e):this.renderImage(i,e)}renderIFrame(e,i){return R`
      <div class="iframe-container ${this.size}">
        <iframe width="${e}" height="${i}" frameborder="0" scrolling="no"
          src='${this.iframeLocation}?productId=${this.productId}&amp;language=${this.language}&amp;size=${this.size}&amp;imgUrl=${this.imageUrl}&amp;targetUrl=${this.hrefValue}'>
        </iframe>
      </div>`}renderImage(e,i){return R`<a href="${this.hrefValue}" target="_blank">
  <img width="${e}" height="${i}" src="${this.imageUrl}" alt="Microsoft Store badge logo" />
</a>`}};me.styles=j`
    :host {
      display: block;
      padding: 0;
      margin: 0;
    }

    iframe {
      border: none;
    }

    img {
      /* When rendering the image, rather than the iframe, add a border radius.  */
      border-radius: ${le};
    }

    .iframe-container {
      /* To simulate our iframe having a border radius, we use this technique: https://stackoverflow.com/a/36110063/536 */
      border-radius: ${le};
      transform: translateZ(0px);
      display: inline-block;
      overflow: hidden;
    }

      .iframe-container.small {
        height: ${re};
      }

      .iframe-container.large {
        height: ${he}
      }
  `,me.englishLanguage={name:"English",code:"en",imageSmall:{fileName:"English_S.png",aspectRatio:2.5},imageLarge:{fileName:"English_L.png",aspectRatio:2.769}},me.supportedLanguages=[{name:"Arabic",code:"ar",imageSmall:{fileName:"Arabic_S.png",aspectRatio:3.458},imageLarge:{fileName:"Arabic_L.png",aspectRatio:2.769}},{name:"Bosnian",code:"be",imageSmall:{fileName:"Bosnian_S.png",aspectRatio:4.369},imageLarge:{fileName:"Bosnian_L.png",aspectRatio:2.769}},{name:"Bengali",code:"bn",imageSmall:{fileName:"Bengali_S.png",aspectRatio:2.5},imageLarge:{fileName:"Bengali_L.png",aspectRatio:2.769}},{name:"Bosnian",code:"bs",imageSmall:{fileName:"Bosnian_S.png",aspectRatio:4.369},imageLarge:{fileName:"Bosnian_L.png",aspectRatio:2.769}},{name:"Bulgarian",code:"bg",imageSmall:{fileName:"Bulgarian_S.png",aspectRatio:5.38},imageLarge:{fileName:"Bulgarian_L.png",aspectRatio:2.769}},{name:"Chinese (Simplified)",code:"zh-cn",imageSmall:{fileName:"Chinese_Simplified_S.png",aspectRatio:2.744},imageLarge:{fileName:"Chinese_Simplified_L.png",aspectRatio:2.769}},{name:"Chinese (Traditional)",code:"zh-tw",imageSmall:{fileName:"Chinese_Traditional_S.png",aspectRatio:2.776},imageLarge:{fileName:"Chinese_Traditional_L.png",aspectRatio:2.769}},{name:"Croatian",code:"hr",imageSmall:{fileName:"Croatian_S.png",aspectRatio:4.406},imageLarge:{fileName:"Croatian_L.png",aspectRatio:2.769}},{name:"Czech",code:"cs",imageSmall:{fileName:"Czech_S.png",aspectRatio:3.197},imageLarge:{fileName:"Czech_L.png",aspectRatio:2.769}},{name:"Danish",code:"da",imageSmall:{fileName:"Danish_S.png",aspectRatio:3.239},imageLarge:{fileName:"Danish_L.png",aspectRatio:2.769}},{name:"Dutch",code:"nl",imageSmall:{fileName:"Dutch_S.png",aspectRatio:3.859},imageLarge:{fileName:"Dutch_L.png",aspectRatio:2.769}},ne.englishLanguage,{name:"Estonian",code:"et",imageSmall:{fileName:"Estonian_S.png",aspectRatio:3.161},imageLarge:{fileName:"Estonian_L.png",aspectRatio:2.769}},{name:"Filipino",code:"fil",imageSmall:{fileName:"Filipino_S.png",aspectRatio:3.119},imageLarge:{fileName:"Filipino_L.png",aspectRatio:2.769}},{name:"Finnish",code:"fi",imageSmall:{fileName:"Finnish_S.png",aspectRatio:3.119},imageLarge:{fileName:"Finnish_L.png",aspectRatio:2.769}},{name:"French",code:"fr",imageSmall:{fileName:"French_S.png",aspectRatio:3.718},imageLarge:{fileName:"French_L.png",aspectRatio:2.769}},{name:"German",code:"de",imageSmall:{fileName:"German_S.png",aspectRatio:2.609},imageLarge:{fileName:"German_L.png",aspectRatio:2.769}},{name:"Greek",code:"el",imageSmall:{fileName:"Greek_S.png",aspectRatio:4.546},imageLarge:{fileName:"Greek_L.png",aspectRatio:2.769}},{name:"Hebrew",code:"he",imageSmall:{fileName:"Hebrew_S.png",aspectRatio:3.666},imageLarge:{fileName:"Hebrew_L.png",aspectRatio:2.769}},{name:"Hindi",code:"hi",imageSmall:{fileName:"Hindi_S.png",aspectRatio:4.25},imageLarge:{fileName:"Hindi_L.png",aspectRatio:2.769}},{name:"Hungarian",code:"hu",imageSmall:{fileName:"Hungarian_S.png",aspectRatio:3.416},imageLarge:{fileName:"Hungarian_L.png",aspectRatio:2.769}},{name:"Indonesian",code:"id",imageSmall:{fileName:"Indonesian_S.png",aspectRatio:2.666},imageLarge:{fileName:"Indonesian_L.png",aspectRatio:2.769}},{name:"Italian",code:"it",imageSmall:{fileName:"Italian_S.png",aspectRatio:3.401},imageLarge:{fileName:"Italian_L.png",aspectRatio:2.769}},{name:"Japanese",code:"ja",imageSmall:{fileName:"Japanese_S.png",aspectRatio:2.609},imageLarge:{fileName:"Japanese_L.png",aspectRatio:2.769}},{name:"Korean",code:"ko",imageSmall:{fileName:"Korean_S.png",aspectRatio:2.312},imageLarge:{fileName:"Korean_L.png",aspectRatio:2.769}},{name:"Latvian",code:"lv",imageSmall:{fileName:"Latvian_S.png",aspectRatio:2.942},imageLarge:{fileName:"Latvian_L.png",aspectRatio:2.769}},{name:"Lithuanian",code:"lt",imageSmall:{fileName:"Lithuanian_S.png",aspectRatio:3.578},imageLarge:{fileName:"Lithuanian_L.png",aspectRatio:2.769}},{name:"Malay",code:"ms",imageSmall:{fileName:"Malay_S.png",aspectRatio:4.171},imageLarge:{fileName:"Malay_L.png",aspectRatio:2.769}},{name:"Norwegian",code:"no",imageSmall:{fileName:"Norwegian_S.png",aspectRatio:3.213},imageLarge:{fileName:"Norwegian_L.png",aspectRatio:2.769}},{name:"Polish",code:"pl",imageSmall:{fileName:"Polish_S.png",aspectRatio:3.593},imageLarge:{fileName:"Polish_L.png",aspectRatio:2.769}},{name:"Portuguese (Brazil)",code:"pt-br",imageSmall:{fileName:"Portuguese_Brazil_S.png",aspectRatio:2.963},imageLarge:{fileName:"Portuguese_Brazil_L.png",aspectRatio:2.769}},{name:"Portuguese (Portugal)",code:"pt",imageSmall:{fileName:"Portuguese_Portugal_S.png",aspectRatio:3.171},imageLarge:{fileName:"Portuguese_Portugal_L.png",aspectRatio:2.769}},{name:"Romanian",code:"ro",imageSmall:{fileName:"Romanian_S.png",aspectRatio:4.312},imageLarge:{fileName:"Romanian_L.png",aspectRatio:2.769}},{name:"Russian",code:"ru",imageSmall:{fileName:"Russian_S.png",aspectRatio:3.895},imageLarge:{fileName:"Russian_L.png",aspectRatio:2.769}},{name:"Serbian",code:"sr",imageSmall:{fileName:"Serbian_S.png",aspectRatio:4.395},imageLarge:{fileName:"Serbian_L.png",aspectRatio:2.769}},{name:"Slovak",code:"sk",imageSmall:{fileName:"Slovak_S.png",aspectRatio:3.067},imageLarge:{fileName:"Slovak_L.png",aspectRatio:2.769}},{name:"Slovenian",code:"sl",imageSmall:{fileName:"Slovenian_S.png",aspectRatio:3.375},imageLarge:{fileName:"Slovenian_L.png",aspectRatio:2.769}},{name:"Spanish",code:"es",imageSmall:{fileName:"Spanish_S.png",aspectRatio:4.692},imageLarge:{fileName:"Spanish_L.png",aspectRatio:2.769}},{name:"Swahili",code:"sw",imageSmall:{fileName:"Swahili_S.png",aspectRatio:2.666},imageLarge:{fileName:"Swahili_L.png",aspectRatio:2.769}},{name:"Swedish",code:"sv",imageSmall:{fileName:"Swedish_S.png",aspectRatio:3.208},imageLarge:{fileName:"Swedish_L.png",aspectRatio:2.769}},{name:"Thai",code:"th",imageSmall:{fileName:"Thai_S.png",aspectRatio:3.135},imageLarge:{fileName:"Thai_L.png",aspectRatio:2.769}},{name:"Turkish",code:"tr",imageSmall:{fileName:"Turkish_S.png",aspectRatio:2.708},imageLarge:{fileName:"Turkish_L.png",aspectRatio:2.769}},{name:"Ukranian",code:"uk",imageSmall:{fileName:"Ukranian_S.png",aspectRatio:4.468},imageLarge:{fileName:"Ukranian_L.png",aspectRatio:2.769}},{name:"Vietnamese",code:"vi",imageSmall:{fileName:"Vietnamese_S.png",aspectRatio:2.192},imageLarge:{fileName:"Vietnamese_L.png",aspectRatio:2.769}}],oe([ae({type:String})],me.prototype,"productId",void 0),oe([ae({type:String})],me.prototype,"language",void 0),oe([ae({type:String})],me.prototype,"size",void 0),oe([se()],me.prototype,"languageDetails",void 0),oe([se()],me.prototype,"iframeLocation",void 0),oe([se()],me.prototype,"miniPDPcompatible",void 0),me=ne=oe([(e=>i=>"function"==typeof i?((e,i)=>(window.customElements.define(e,i),i))(e,i):((e,i)=>{const{kind:t,elements:a}=i;return{kind:t,elements:a,finisher(i){window.customElements.define(e,i)}}})(e,i))("ms-store-badge")],me);export{me as MSStoreBadge};
