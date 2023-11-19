var Bu=Object.defineProperty;var qu=(n,t,e)=>t in n?Bu(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var yt=(n,t,e)=>(qu(n,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qn=globalThis,as=Qn.ShadowRoot&&(Qn.ShadyCSS===void 0||Qn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ls=Symbol(),lo=new WeakMap;let $a=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==ls)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(as&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=lo.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&lo.set(e,t))}return t}toString(){return this.cssText}};const ju=n=>new $a(typeof n=="string"?n:n+"",void 0,ls),Dt=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[s+1],n[0]);return new $a(e,n,ls)},Hu=(n,t)=>{if(as)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),i=Qn.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,n.appendChild(r)}},co=as?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return ju(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:zu,defineProperty:Gu,getOwnPropertyDescriptor:Ku,getOwnPropertyNames:Wu,getOwnPropertySymbols:Qu,getPrototypeOf:Xu}=Object,Ot=globalThis,uo=Ot.trustedTypes,Yu=uo?uo.emptyScript:"",oi=Ot.reactiveElementPolyfillSupport,Xe=(n,t)=>n,Pi={toAttribute(n,t){switch(t){case Boolean:n=n?Yu:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},La=(n,t)=>!zu(n,t),ho={attribute:!0,type:String,converter:Pi,reflect:!1,hasChanged:La};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ot.litPropertyMetadata??(Ot.litPropertyMetadata=new WeakMap);let fe=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ho){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&Gu(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:s}=Ku(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const l=i==null?void 0:i.call(this);s.call(this,o),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ho}static _$Ei(){if(this.hasOwnProperty(Xe("elementProperties")))return;const t=Xu(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Xe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xe("properties"))){const e=this.properties,r=[...Wu(e),...Qu(e)];for(const i of r)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)e.unshift(co(i))}else t!==void 0&&e.push(co(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Hu(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){var s;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:Pi).toAttribute(e,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var s;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:Pi;this._$Em=i,this[i]=l.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,r,i=!1,s){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??La)(i?s:this[t],e))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$E_)==null||r.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(e)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}};fe.elementStyles=[],fe.shadowRootOptions={mode:"open"},fe[Xe("elementProperties")]=new Map,fe[Xe("finalized")]=new Map,oi==null||oi({ReactiveElement:fe}),(Ot.reactiveElementVersions??(Ot.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye=globalThis,rr=Ye.trustedTypes,fo=rr?rr.createPolicy("lit-html",{createHTML:n=>n}):void 0,Fa="$lit$",Nt=`lit$${(Math.random()+"").slice(9)}$`,Ua="?"+Nt,Ju=`<${Ua}>`,re=document,sn=()=>re.createComment(""),on=n=>n===null||typeof n!="object"&&typeof n!="function",Ba=Array.isArray,Zu=n=>Ba(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ai=`[ 	
\f\r]`,qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,po=/-->/g,mo=/>/g,Xt=RegExp(`>|${ai}(?:([^\\s"'>=/]+)(${ai}*=${ai}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),go=/'/g,_o=/"/g,qa=/^(?:script|style|textarea|title)$/i,th=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),B=th(1),Ae=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),yo=new WeakMap,Jt=re.createTreeWalker(re,129);function ja(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return fo!==void 0?fo.createHTML(t):t}const eh=(n,t)=>{const e=n.length-1,r=[];let i,s=t===2?"<svg>":"",o=qe;for(let l=0;l<e;l++){const a=n[l];let c,u,h=-1,d=0;for(;d<a.length&&(o.lastIndex=d,u=o.exec(a),u!==null);)d=o.lastIndex,o===qe?u[1]==="!--"?o=po:u[1]!==void 0?o=mo:u[2]!==void 0?(qa.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=Xt):u[3]!==void 0&&(o=Xt):o===Xt?u[0]===">"?(o=i??qe,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?Xt:u[3]==='"'?_o:go):o===_o||o===go?o=Xt:o===po||o===mo?o=qe:(o=Xt,i=void 0);const f=o===Xt&&n[l+1].startsWith("/>")?" ":"";s+=o===qe?a+Ju:h>=0?(r.push(c),a.slice(0,h)+Fa+a.slice(h)+Nt+f):a+Nt+(h===-2?l:f)}return[ja(n,s+(n[e]||"<?>")+(t===2?"</svg>":"")),r]};let Ci=class Ha{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let s=0,o=0;const l=t.length-1,a=this.parts,[c,u]=eh(t,e);if(this.el=Ha.createElement(c,r),Jt.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Jt.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(Fa)){const d=u[o++],f=i.getAttribute(h).split(Nt),E=/([.?@])?(.*)/.exec(d);a.push({type:1,index:s,name:E[2],strings:f,ctor:E[1]==="."?rh:E[1]==="?"?ih:E[1]==="@"?sh:Pr}),i.removeAttribute(h)}else h.startsWith(Nt)&&(a.push({type:6,index:s}),i.removeAttribute(h));if(qa.test(i.tagName)){const h=i.textContent.split(Nt),d=h.length-1;if(d>0){i.textContent=rr?rr.emptyScript:"";for(let f=0;f<d;f++)i.append(h[f],sn()),Jt.nextNode(),a.push({type:2,index:++s});i.append(h[d],sn())}}}else if(i.nodeType===8)if(i.data===Ua)a.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(Nt,h+1))!==-1;)a.push({type:7,index:s}),h+=Nt.length-1}s++}}static createElement(t,e){const r=re.createElement("template");return r.innerHTML=t,r}};function Ie(n,t,e=n,r){var o,l;if(t===Ae)return t;let i=r!==void 0?(o=e._$Co)==null?void 0:o[r]:e._$Cl;const s=on(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),s===void 0?i=void 0:(i=new s(n),i._$AT(n,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=i:e._$Cl=i),i!==void 0&&(t=Ie(n,i._$AS(n,t.values),i,r)),t}let nh=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??re).importNode(e,!0);Jt.currentNode=i;let s=Jt.nextNode(),o=0,l=0,a=r[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new cs(s,s.nextSibling,this,t):a.type===1?c=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(c=new oh(s,this,t)),this._$AV.push(c),a=r[++l]}o!==(a==null?void 0:a.index)&&(s=Jt.nextNode(),o++)}return Jt.currentNode=re,i}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},cs=class za{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ie(this,t,e),on(t)?t===z||t==null||t===""?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==Ae&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Zu(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&on(this._$AH)?this._$AA.nextSibling.data=t:this.$(re.createTextNode(t)),this._$AH=t}g(t){var s;const{values:e,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ci.createElement(ja(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(e);else{const o=new nh(i,this),l=o.u(this.options);o.p(e),this.$(l),this._$AH=o}}_$AC(t){let e=yo.get(t.strings);return e===void 0&&yo.set(t.strings,e=new Ci(t)),e}T(t){Ba(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const s of t)i===e.length?e.push(r=new za(this.k(sn()),this.k(sn()),this,this.options)):r=e[i],r._$AI(s),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},Pr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,s){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=z}_$AI(t,e=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=Ie(this,t,e,0),o=!on(t)||t!==this._$AH&&t!==Ae,o&&(this._$AH=t);else{const l=t;let a,c;for(t=s[0],a=0;a<s.length-1;a++)c=Ie(this,l[r+a],e,a),c===Ae&&(c=this._$AH[a]),o||(o=!on(c)||c!==this._$AH[a]),c===z?t=z:t!==z&&(t+=(c??"")+s[a+1]),this._$AH[a]=c}o&&!i&&this.O(t)}O(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},rh=class extends Pr{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===z?void 0:t}},ih=class extends Pr{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==z)}},sh=class extends Pr{constructor(t,e,r,i,s){super(t,e,r,i,s),this.type=5}_$AI(t,e=this){if((t=Ie(this,t,e,0)??z)===Ae)return;const r=this._$AH,i=t===z&&r!==z||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==z&&(r===z||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}};class oh{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Ie(this,t)}}const li=Ye.litHtmlPolyfillSupport;li==null||li(Ci,cs),(Ye.litHtmlVersions??(Ye.litHtmlVersions=[])).push("3.1.0");const ah=(n,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const s=(e==null?void 0:e.renderBefore)??null;r._$litPart$=i=new cs(t.insertBefore(sn(),s),s,void 0,e??{})}return i._$AI(n),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ct extends fe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ah(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Ae}}var Oa;ct._$litElement$=!0,ct.finalized=!0,(Oa=globalThis.litElementHydrateSupport)==null||Oa.call(globalThis,{LitElement:ct});const ci=globalThis.litElementPolyfillSupport;ci==null||ci({LitElement:ct});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");class Ga extends ct{createRenderRoot(){return this}render(){const t="/records_gym";return B`
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
            <ul class="navbar-nav  ">
                <li class="nav-item active">
                <a class="nav-link" href="${t}/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Exercises
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="${t}/exercises-page/add">Add</a>
                    <a class="dropdown-item" href="${t}/exercises-page/modify">Modify</a>
                    <a class="dropdown-item" href="${t}/exercises-page/delete">Delete</a>
                  </div>
                </li>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="${t}/trainers"> trainers</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="contact.html"> Contact Us</a>
                </li>
            </ul>
            <div class="user_option">
                <form class="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
                </form>
            </div>
            </div>
        </div>
    
    `}}yt(Ga,"styles",Dt`
  .dropdown:hover .dropdown-menu {
    display: block;
  }
  
  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown-menu a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-menu a:hover {
    background-color: #f1f1f1;
  }
  
  `);customElements.define("menu-gym",Ga);class Ka extends ct{createRenderRoot(){return this}render(){return B`
    <header class="header_section">
        <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
            <span>
                Recordgym
            </span>
            </a>
            <menu-gym></menu-gym>
        </nav>
        </div>
  </header>
    `}}yt(Ka,"styles",Dt`

  `);customElements.define("header-gym",Ka);class Wa extends ct{createRenderRoot(){return this}render(){return B`
      <header-gym></header-gym>
      <section class=" slider_section position-relative">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="col-lg-10 col-md-11 mx-auto">
                <div class="detail-box">
                  <div>
                    <h3>
                      Fitness
                    </h3>
                    <h2>
                      Training
                    </h2>
                    <h1>
                      Neogym
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                    </p>
                    <div class="">
                      <a href="">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="col-lg-10 col-md-11 mx-auto">
                <div class="detail-box">
                  <div>
                    <h3>
                      Fitness
                    </h3>
                    <h2>
                      Training
                    </h2>
                    <h1>
                      Neogym
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                    </p>
                    <div class="">
                      <a href="">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="col-lg-10 col-md-11 mx-auto">
                <div class="detail-box">
                  <div>
                    <h3>
                      Fitness
                    </h3>
                    <h2>
                      Training
                    </h2>
                    <h1>
                      Neogym
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                    </p>
                    <div class="">
                      <a href="">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="col-lg-10 col-md-11 mx-auto">
                <div class="detail-box">
                  <div>
                    <h3>
                      Fitness
                    </h3>
                    <h2>
                      Training
                    </h2>
                    <h1>
                      Neogym
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                    </p>
                    <div class="">
                      <a href="">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container">
              <div class="col-lg-10 col-md-11 mx-auto">
                <div class="detail-box">
                  <div>
                    <h3>
                      Fitness
                    </h3>
                    <h2>
                      Training
                    </h2>
                    <h1>
                      Neogym
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse .
                    </p>
                    <div class="">
                      <a href="">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
      </div>
  </section>
    `}}yt(Wa,"styles",Dt`
  `);customElements.define("home-page",Wa);var vo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},lh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],l=n[e++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Xa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,l=o?n[i+1]:0,a=i+2<n.length,c=a?n[i+2]:0,u=s>>2,h=(s&3)<<4|l>>4;let d=(l&15)<<2|c>>6,f=c&63;a||(f=64,o||(d=64)),r.push(e[u],e[h],e[d],e[f])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Qa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):lh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const c=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||l==null||c==null||h==null)throw new ch;const d=s<<2|l>>4;if(r.push(d),c!==64){const f=l<<4&240|c>>2;if(r.push(f),h!==64){const E=c<<6&192|h;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class ch extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uh=function(n){const t=Qa(n);return Xa.encodeByteArray(t,!0)},ir=function(n){return uh(n).replace(/\./g,"")},hh=function(n){try{return Xa.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh=()=>dh().__FIREBASE_DEFAULTS__,ph=()=>{if(typeof process>"u"||typeof vo>"u")return;const n=vo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},mh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&hh(n[1]);return t&&JSON.parse(t)},Ya=()=>{try{return fh()||ph()||mh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gh=n=>{var t,e;return(e=(t=Ya())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},_h=n=>{const t=gh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ja=()=>{var n;return(n=Ya())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),l="";return[ir(JSON.stringify(e)),ir(JSON.stringify(o)),l].join(".")}function Eh(){try{return typeof indexedDB=="object"}catch{return!1}}function Th(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="FirebaseError";class ke extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=wh,Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Za.prototype.create)}}class Za{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Ah(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ke(i,l,r)}}function Ah(n,t){return n.replace(Ih,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Ih=/\{\$([^}]+)}/g;function bi(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(Eo(s)&&Eo(o)){if(!bi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Eo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(n){return n&&n._delegate?n._delegate:n}class an{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new yh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ph(t))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Yt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yt){return this.instances.has(t)}getOptions(t=Yt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yt){return this.component?this.component.multipleInstances?t:Yt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sh(n){return n===Yt?void 0:n}function Ph(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Rh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(b||(b={}));const bh={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},Vh=b.INFO,Dh={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},xh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Dh[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class tl{constructor(t){this.name=t,this._logLevel=Vh,this._logHandler=xh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?bh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}const Nh=(n,t)=>t.some(e=>n instanceof e);let To,wo;function kh(){return To||(To=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Mh(){return wo||(wo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const el=new WeakMap,Vi=new WeakMap,nl=new WeakMap,ui=new WeakMap,us=new WeakMap;function Oh(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e($t(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&el.set(e,n)}).catch(()=>{}),us.set(t,n),t}function $h(n){if(Vi.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Vi.set(n,t)}let Di={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Vi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||nl.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return $t(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Lh(n){Di=n(Di)}function Fh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(hi(this),t,...e);return nl.set(r,t.sort?t.sort():[t]),$t(r)}:Mh().includes(n)?function(...t){return n.apply(hi(this),t),$t(el.get(this))}:function(...t){return $t(n.apply(hi(this),t))}}function Uh(n){return typeof n=="function"?Fh(n):(n instanceof IDBTransaction&&$h(n),Nh(n,kh())?new Proxy(n,Di):n)}function $t(n){if(n instanceof IDBRequest)return Oh(n);if(ui.has(n))return ui.get(n);const t=Uh(n);return t!==n&&(ui.set(n,t),us.set(t,n)),t}const hi=n=>us.get(n);function Bh(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),l=$t(o);return r&&o.addEventListener("upgradeneeded",a=>{r($t(o.result),a.oldVersion,a.newVersion,$t(o.transaction),a)}),e&&o.addEventListener("blocked",a=>e(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const qh=["get","getKey","getAll","getAllKeys","count"],jh=["put","add","delete","clear"],di=new Map;function Ao(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(di.get(t))return di.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=jh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qh.includes(e)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[e](...l),i&&a.done]))[0]};return di.set(t,s),s}Lh(n=>({...n,get:(t,e,r)=>Ao(t,e)||n.get(t,e,r),has:(t,e)=>!!Ao(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(zh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function zh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const xi="@firebase/app",Io="0.9.23";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new tl("@firebase/app"),Gh="@firebase/app-compat",Kh="@firebase/analytics-compat",Wh="@firebase/analytics",Qh="@firebase/app-check-compat",Xh="@firebase/app-check",Yh="@firebase/auth",Jh="@firebase/auth-compat",Zh="@firebase/database",td="@firebase/database-compat",ed="@firebase/functions",nd="@firebase/functions-compat",rd="@firebase/installations",id="@firebase/installations-compat",sd="@firebase/messaging",od="@firebase/messaging-compat",ad="@firebase/performance",ld="@firebase/performance-compat",cd="@firebase/remote-config",ud="@firebase/remote-config-compat",hd="@firebase/storage",dd="@firebase/storage-compat",fd="@firebase/firestore",pd="@firebase/firestore-compat",md="firebase",gd="10.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="[DEFAULT]",_d={[xi]:"fire-core",[Gh]:"fire-core-compat",[Wh]:"fire-analytics",[Kh]:"fire-analytics-compat",[Xh]:"fire-app-check",[Qh]:"fire-app-check-compat",[Yh]:"fire-auth",[Jh]:"fire-auth-compat",[Zh]:"fire-rtdb",[td]:"fire-rtdb-compat",[ed]:"fire-fn",[nd]:"fire-fn-compat",[rd]:"fire-iid",[id]:"fire-iid-compat",[sd]:"fire-fcm",[od]:"fire-fcm-compat",[ad]:"fire-perf",[ld]:"fire-perf-compat",[cd]:"fire-rc",[ud]:"fire-rc-compat",[hd]:"fire-gcs",[dd]:"fire-gcs-compat",[fd]:"fire-fst",[pd]:"fire-fst-compat","fire-js":"fire-js",[md]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=new Map,ki=new Map;function yd(n,t){try{n.container.addComponent(t)}catch(e){ie.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function or(n){const t=n.name;if(ki.has(t))return ie.debug(`There were multiple attempts to register component ${t}.`),!1;ki.set(t,n);for(const e of sr.values())yd(e,n);return!0}function vd(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new Za("app","Firebase",Ed);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=gd;function rl(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ni,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Lt.create("bad-app-name",{appName:String(i)});if(e||(e=Ja()),!e)throw Lt.create("no-options");const s=sr.get(i);if(s){if(bi(e,s.options)&&bi(r,s.config))return s;throw Lt.create("duplicate-app",{appName:i})}const o=new Ch(i);for(const a of ki.values())o.addComponent(a);const l=new Td(e,r,o);return sr.set(i,l),l}function Ad(n=Ni){const t=sr.get(n);if(!t&&n===Ni&&Ja())return rl();if(!t)throw Lt.create("no-app",{appName:n});return t}function ve(n,t,e){var r;let i=(r=_d[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ie.warn(l.join(" "));return}or(new an(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="firebase-heartbeat-database",Rd=1,ln="firebase-heartbeat-store";let fi=null;function il(){return fi||(fi=Bh(Id,Rd,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(ln)}}}).catch(n=>{throw Lt.create("idb-open",{originalErrorMessage:n.message})})),fi}async function Sd(n){try{return await(await il()).transaction(ln).objectStore(ln).get(sl(n))}catch(t){if(t instanceof ke)ie.warn(t.message);else{const e=Lt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ie.warn(e.message)}}}async function Ro(n,t){try{const r=(await il()).transaction(ln,"readwrite");await r.objectStore(ln).put(t,sl(n)),await r.done}catch(e){if(e instanceof ke)ie.warn(e.message);else{const r=Lt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ie.warn(r.message)}}}function sl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=1024,Cd=30*24*60*60*1e3;class bd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=So();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=Cd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=So(),{heartbeatsToSend:r,unsentEntries:i}=Vd(this._heartbeatsCache.heartbeats),s=ir(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function So(){return new Date().toISOString().substring(0,10)}function Vd(n,t=Pd){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Po(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Po(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Dd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eh()?Th().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Sd(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ro(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ro(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Po(n){return ir(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n){or(new an("platform-logger",t=>new Hh(t),"PRIVATE")),or(new an("heartbeat",t=>new bd(t),"PRIVATE")),ve(xi,Io,n),ve(xi,Io,"esm2017"),ve("fire-js","")}xd("");var Nd="firebase",kd="10.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ve(Nd,kd,"app");var Md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,hs=hs||{},A=Md||self;function Cr(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function In(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Od(n){return Object.prototype.hasOwnProperty.call(n,pi)&&n[pi]||(n[pi]=++$d)}var pi="closure_uid_"+(1e9*Math.random()>>>0),$d=0;function Ld(n,t,e){return n.call.apply(n.bind,arguments)}function Fd(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function rt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=Ld:rt=Fd,rt.apply(null,arguments)}function Fn(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function K(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return t.prototype[i].apply(r,o)}}function zt(){this.s=this.s,this.o=this.o}var Ud=0;zt.prototype.s=!1;zt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Ud!=0)&&Od(this)};zt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ol=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function ds(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Co(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Cr(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function it(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var Bd=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{A.addEventListener("test",()=>{},t),A.removeEventListener("test",()=>{},t)}catch{}return n}();function cn(n){return/^[\s\xa0]*$/.test(n)}function br(){var n=A.navigator;return n&&(n=n.userAgent)?n:""}function vt(n){return br().indexOf(n)!=-1}function fs(n){return fs[" "](n),n}fs[" "]=function(){};function qd(n,t){var e=Mf;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var jd=vt("Opera"),Re=vt("Trident")||vt("MSIE"),al=vt("Edge"),Mi=al||Re,ll=vt("Gecko")&&!(br().toLowerCase().indexOf("webkit")!=-1&&!vt("Edge"))&&!(vt("Trident")||vt("MSIE"))&&!vt("Edge"),Hd=br().toLowerCase().indexOf("webkit")!=-1&&!vt("Edge");function cl(){var n=A.document;return n?n.documentMode:void 0}var Oi;t:{var mi="",gi=function(){var n=br();if(ll)return/rv:([^\);]+)(\)|;)/.exec(n);if(al)return/Edge\/([\d\.]+)/.exec(n);if(Re)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Hd)return/WebKit\/(\S+)/.exec(n);if(jd)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(gi&&(mi=gi?gi[1]:""),Re){var _i=cl();if(_i!=null&&_i>parseFloat(mi)){Oi=String(_i);break t}}Oi=mi}var $i;if(A.document&&Re){var bo=cl();$i=bo||parseInt(Oi,10)||void 0}else $i=void 0;var zd=$i;function un(n,t){if(it.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(ll){t:{try{fs(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Gd[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&un.$.h.call(this)}}K(un,it);var Gd={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Rn="closure_listenable_"+(1e6*Math.random()|0),Kd=0;function Wd(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++Kd,this.fa=this.ia=!1}function Vr(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function ps(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function Qd(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function ul(n){const t={};for(const e in n)t[e]=n[e];return t}const Vo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hl(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<Vo.length;s++)e=Vo[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Dr(n){this.src=n,this.g={},this.h=0}Dr.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Fi(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Wd(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function Li(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=ol(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Vr(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Fi(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var ms="closure_lm_"+(1e6*Math.random()|0),yi={};function dl(n,t,e,r,i){if(r&&r.once)return pl(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)dl(n,t[s],e,r,i);return null}return e=ys(e),n&&n[Rn]?n.O(t,e,In(r)?!!r.capture:!!r,i):fl(n,t,e,!1,r,i)}function fl(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=In(i)?!!i.capture:!!i,l=_s(n);if(l||(n[ms]=l=new Dr(n)),e=l.add(t,e,r,o,s),e.proxy)return e;if(r=Xd(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)Bd||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(gl(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Xd(){function n(e){return t.call(n.src,n.listener,e)}const t=Yd;return n}function pl(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)pl(n,t[s],e,r,i);return null}return e=ys(e),n&&n[Rn]?n.P(t,e,In(r)?!!r.capture:!!r,i):fl(n,t,e,!0,r,i)}function ml(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ml(n,t[s],e,r,i);else r=In(r)?!!r.capture:!!r,e=ys(e),n&&n[Rn]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Fi(s,e,r,i),-1<e&&(Vr(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=_s(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Fi(t,e,r,i)),(e=-1<n?t[n]:null)&&gs(e))}function gs(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[Rn])Li(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(gl(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=_s(t))?(Li(e,n),e.h==0&&(e.src=null,t[ms]=null)):Vr(n)}}}function gl(n){return n in yi?yi[n]:yi[n]="on"+n}function Yd(n,t){if(n.fa)n=!0;else{t=new un(t,this);var e=n.listener,r=n.la||n.src;n.ia&&gs(n),n=e.call(r,t)}return n}function _s(n){return n=n[ms],n instanceof Dr?n:null}var vi="__closure_events_fn_"+(1e9*Math.random()>>>0);function ys(n){return typeof n=="function"?n:(n[vi]||(n[vi]=function(t){return n.handleEvent(t)}),n[vi])}function G(){zt.call(this),this.i=new Dr(this),this.S=this,this.J=null}K(G,zt);G.prototype[Rn]=!0;G.prototype.removeEventListener=function(n,t,e,r){ml(this,n,t,e,r)};function J(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new it(t,n);else if(t instanceof it)t.target=t.target||n;else{var i=t;t=new it(r,n),hl(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=Un(o,r,!0,t)&&i}if(o=t.g=n,i=Un(o,r,!0,t)&&i,i=Un(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=Un(o,r,!1,t)&&i}G.prototype.N=function(){if(G.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Vr(e[r]);delete n.g[t],n.h--}}this.J=null};G.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};G.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Un(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var l=o.listener,a=o.la||o.src;o.ia&&Li(n.i,o),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var vs=A.JSON.stringify;class Jd{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Zd(){var n=Es;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class tf{constructor(){this.h=this.g=null}add(t,e){const r=_l.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var _l=new Jd(()=>new ef,n=>n.reset());class ef{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function nf(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function rf(n){A.setTimeout(()=>{throw n},0)}let hn,dn=!1,Es=new tf,yl=()=>{const n=A.Promise.resolve(void 0);hn=()=>{n.then(sf)}};var sf=()=>{for(var n;n=Zd();){try{n.h.call(n.g)}catch(e){rf(e)}var t=_l;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}dn=!1};function xr(n,t){G.call(this),this.h=n||1,this.g=t||A,this.j=rt(this.qb,this),this.l=Date.now()}K(xr,G);g=xr.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),J(this,"tick"),this.ga&&(Ts(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ts(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}g.N=function(){xr.$.N.call(this),Ts(this),delete this.g};function ws(n,t,e){if(typeof n=="function")e&&(n=rt(n,e));else if(n&&typeof n.handleEvent=="function")n=rt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:A.setTimeout(n,t||0)}function vl(n){n.g=ws(()=>{n.g=null,n.i&&(n.i=!1,vl(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class of extends zt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:vl(this)}N(){super.N(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fn(n){zt.call(this),this.h=n,this.g={}}K(fn,zt);var Do=[];function El(n,t,e,r){Array.isArray(e)||(e&&(Do[0]=e.toString()),e=Do);for(var i=0;i<e.length;i++){var s=dl(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Tl(n){ps(n.g,function(t,e){this.g.hasOwnProperty(e)&&gs(t)},n),n.g={}}fn.prototype.N=function(){fn.$.N.call(this),Tl(this)};fn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Nr(){this.g=!0}Nr.prototype.Ea=function(){this.g=!1};function af(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",l=s.split("&"),a=0;a<l.length;a++){var c=l[a].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function lf(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function _e(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+uf(n,e)+(r?" "+r:"")})}function cf(n,t){n.info(function(){return"TIMEOUT: "+t})}Nr.prototype.info=function(){};function uf(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return vs(e)}catch{return t}}var ce={},xo=null;function kr(){return xo=xo||new G}ce.Ta="serverreachability";function wl(n){it.call(this,ce.Ta,n)}K(wl,it);function pn(n){const t=kr();J(t,new wl(t))}ce.STAT_EVENT="statevent";function Al(n,t){it.call(this,ce.STAT_EVENT,n),this.stat=t}K(Al,it);function ot(n){const t=kr();J(t,new Al(t,n))}ce.Ua="timingevent";function Il(n,t){it.call(this,ce.Ua,n),this.size=t}K(Il,it);function Sn(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){n()},t)}var Mr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Rl={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function As(){}As.prototype.h=null;function No(n){return n.h||(n.h=n.i())}function Sl(){}var Pn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Is(){it.call(this,"d")}K(Is,it);function Rs(){it.call(this,"c")}K(Rs,it);var Ui;function Or(){}K(Or,As);Or.prototype.g=function(){return new XMLHttpRequest};Or.prototype.i=function(){return{}};Ui=new Or;function Cn(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new fn(this),this.P=hf,n=Mi?125:void 0,this.V=new xr(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Pl}function Pl(){this.i=null,this.g="",this.h=!1}var hf=45e3,Bi={},ar={};g=Cn.prototype;g.setTimeout=function(n){this.P=n};function qi(n,t,e){n.L=1,n.v=Lr(Ct(t)),n.s=e,n.S=!0,Cl(n,null)}function Cl(n,t){n.G=Date.now(),bn(n),n.A=Ct(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),Ol(e.i,"t",r),n.C=0,e=n.l.J,n.h=new Pl,n.g=rc(n.l,e?t:null,!n.s),0<n.O&&(n.M=new of(rt(n.Pa,n,n.g),n.O)),El(n.U,n.g,"readystatechange",n.nb),t=n.I?ul(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),pn(),af(n.j,n.u,n.A,n.m,n.W,n.s)}g.nb=function(n){n=n.target;const t=this.M;t&&Et(n)==3?t.l():this.Pa(n)};g.Pa=function(n){try{if(n==this.g)t:{const u=Et(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Mi||this.g&&(this.h.h||this.g.ja()||$o(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?pn(3):pn(2)),$r(this);var e=this.g.da();this.ca=e;e:if(bl(this)){var r=$o(this.g);n="";var i=r.length,s=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zt(this),Je(this);var o="";break e}this.h.i=new A.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,lf(this.j,this.u,this.A,this.m,this.W,u,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cn(l)){var c=l;break e}}c=null}if(e=c)_e(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ji(this,e);else{this.i=!1,this.o=3,ot(12),Zt(this),Je(this);break t}}this.S?(Vl(this,u,o),Mi&&this.i&&u==3&&(El(this.U,this.V,"tick",this.mb),this.V.start())):(_e(this.j,this.m,o,null),ji(this,o)),u==4&&Zt(this),this.i&&!this.J&&(u==4?Zl(this.l,this):(this.i=!1,bn(this)))}else xf(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),Zt(this),Je(this)}}}catch{}finally{}};function bl(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Vl(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=df(n,e),i==ar){t==4&&(n.o=4,ot(14),r=!1),_e(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Bi){n.o=4,ot(15),_e(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else _e(n.j,n.m,i,null),ji(n,i);bl(n)&&i!=ar&&i!=Bi&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,ot(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Ds(t),t.M=!0,ot(11))):(_e(n.j,n.m,e,"[Invalid Chunked Response]"),Zt(n),Je(n))}g.mb=function(){if(this.g){var n=Et(this.g),t=this.g.ja();this.C<t.length&&($r(this),Vl(this,n,t),this.i&&n!=4&&bn(this))}};function df(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?ar:(e=Number(t.substring(e,r)),isNaN(e)?Bi:(r+=1,r+e>t.length?ar:(t=t.slice(r,r+e),n.C=r+e,t)))}g.cancel=function(){this.J=!0,Zt(this)};function bn(n){n.Y=Date.now()+n.P,Dl(n,n.P)}function Dl(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Sn(rt(n.lb,n),t)}function $r(n){n.B&&(A.clearTimeout(n.B),n.B=null)}g.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(cf(this.j,this.A),this.L!=2&&(pn(),ot(17)),Zt(this),this.o=2,Je(this)):Dl(this,this.Y-n)};function Je(n){n.l.H==0||n.J||Zl(n.l,n)}function Zt(n){$r(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Ts(n.V),Tl(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function ji(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||Hi(e.i,n))){if(!n.K&&Hi(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)ur(e),Br(e);else break t;Vs(e),ot(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=Sn(rt(e.ib,e),6e3));if(1>=Fl(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else te(e,11)}else if((n.K||e.g==n)&&ur(e),!cn(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(e.V=c[0],c=c[1],e.H==2)if(c[0]=="c"){e.K=c[1],e.pa=c[2];const u=c[3];u!=null&&(e.ra=u,e.l.info("VER="+e.ra));const h=c[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const E=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ss(s,s.h),s.h=null))}if(r.F){const S=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,x(r.I,r.F,S))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=nc(r,r.J?r.pa:null,r.Y),o.K){Ul(r.i,o);var l=o,a=r.L;a&&l.setTimeout(a),l.B&&($r(l),bn(l)),r.g=o}else Yl(r);0<e.j.length&&qr(e)}else c[0]!="stop"&&c[0]!="close"||te(e,7);else e.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?te(e,7):bs(e):c[0]!="noop"&&e.h&&e.h.Aa(c),e.A=0)}}pn(4)}catch{}}function ff(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Cr(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function pf(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Cr(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function xl(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Cr(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=pf(n),r=ff(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var Nl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mf(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ne(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof ne){this.h=n.h,lr(this,n.j),this.s=n.s,this.g=n.g,cr(this,n.m),this.l=n.l;var t=n.i,e=new mn;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),ko(this,e),this.o=n.o}else n&&(t=String(n).match(Nl))?(this.h=!1,lr(this,t[1]||"",!0),this.s=Ge(t[2]||""),this.g=Ge(t[3]||"",!0),cr(this,t[4]),this.l=Ge(t[5]||"",!0),ko(this,t[6]||"",!0),this.o=Ge(t[7]||"")):(this.h=!1,this.i=new mn(null,this.h))}ne.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Ke(t,Mo,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Ke(t,Mo,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Ke(e,e.charAt(0)=="/"?yf:_f,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Ke(e,Ef)),n.join("")};function Ct(n){return new ne(n)}function lr(n,t,e){n.j=e?Ge(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function cr(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function ko(n,t,e){t instanceof mn?(n.i=t,Tf(n.i,n.h)):(e||(t=Ke(t,vf)),n.i=new mn(t,n.h))}function x(n,t,e){n.i.set(t,e)}function Lr(n){return x(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Ge(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Ke(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,gf),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function gf(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Mo=/[#\/\?@]/g,_f=/[#\?:]/g,yf=/[#\?]/g,vf=/[#\?@]/g,Ef=/#/g;function mn(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Gt(n){n.g||(n.g=new Map,n.h=0,n.i&&mf(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}g=mn.prototype;g.add=function(n,t){Gt(this),this.i=null,n=Me(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function kl(n,t){Gt(n),t=Me(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Ml(n,t){return Gt(n),t=Me(n,t),n.g.has(t)}g.forEach=function(n,t){Gt(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};g.ta=function(){Gt(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};g.Z=function(n){Gt(this);let t=[];if(typeof n=="string")Ml(this,n)&&(t=t.concat(this.g.get(Me(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};g.set=function(n,t){return Gt(this),this.i=null,n=Me(this,n),Ml(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};g.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Ol(n,t,e){kl(n,t),0<e.length&&(n.i=null,n.g.set(Me(n,t),ds(e)),n.h+=e.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Me(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Tf(n,t){t&&!n.j&&(Gt(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(kl(this,r),Ol(this,i,e))},n)),n.j=t}var wf=class{constructor(n,t){this.g=n,this.map=t}};function $l(n){this.l=n||Af,A.PerformanceNavigationTiming?(n=A.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(A.g&&A.g.Ka&&A.g.Ka()&&A.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Af=10;function Ll(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Fl(n){return n.h?1:n.g?n.g.size:0}function Hi(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Ss(n,t){n.g?n.g.add(t):n.h=t}function Ul(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}$l.prototype.cancel=function(){if(this.i=Bl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Bl(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return ds(n.i)}var If=class{stringify(n){return A.JSON.stringify(n,void 0)}parse(n){return A.JSON.parse(n,void 0)}};function Rf(){this.g=new If}function Sf(n,t,e){const r=e||"";try{xl(n,function(i,s){let o=i;In(i)&&(o=vs(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Pf(n,t){const e=new Nr;if(A.Image){const r=new Image;r.onload=Fn(Bn,e,r,"TestLoadImage: loaded",!0,t),r.onerror=Fn(Bn,e,r,"TestLoadImage: error",!1,t),r.onabort=Fn(Bn,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=Fn(Bn,e,r,"TestLoadImage: timeout",!1,t),A.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Bn(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Vn(n){this.l=n.ec||null,this.j=n.ob||!1}K(Vn,As);Vn.prototype.g=function(){return new Fr(this.l,this.j)};Vn.prototype.i=function(n){return function(){return n}}({});function Fr(n,t){G.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=Ps,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}K(Fr,G);var Ps=0;g=Fr.prototype;g.open=function(n,t){if(this.readyState!=Ps)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,gn(this)};g.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||A).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Dn(this)),this.readyState=Ps};g.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,gn(this)),this.g&&(this.readyState=3,gn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ql(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function ql(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}g.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Dn(this):gn(this),this.readyState==3&&ql(this)}};g.Za=function(n){this.g&&(this.response=this.responseText=n,Dn(this))};g.Ya=function(n){this.g&&(this.response=n,Dn(this))};g.ka=function(){this.g&&Dn(this)};function Dn(n){n.readyState=4,n.l=null,n.j=null,n.A=null,gn(n)}g.setRequestHeader=function(n,t){this.v.append(n,t)};g.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function gn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Fr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Cf=A.JSON.parse;function $(n){G.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=jl,this.L=this.M=!1}K($,G);var jl="",bf=/^https?$/i,Vf=["POST","PUT"];g=$.prototype;g.Oa=function(n){this.M=n};g.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ui.g(),this.C=this.u?No(this.u):No(Ui),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){Oo(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=A.FormData&&n instanceof A.FormData,!(0<=ol(Vf,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Gl(this),0<this.B&&((this.L=Df(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=ws(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Oo(this,s)}};function Df(n){return Re&&typeof n.timeout=="number"&&n.ontimeout!==void 0}g.ua=function(){typeof hs<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,J(this,"timeout"),this.abort(8))};function Oo(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Hl(n),Ur(n)}function Hl(n){n.F||(n.F=!0,J(n,"complete"),J(n,"error"))}g.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,J(this,"complete"),J(this,"abort"),Ur(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ur(this,!0)),$.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?zl(this):this.kb())};g.kb=function(){zl(this)};function zl(n){if(n.h&&typeof hs<"u"&&(!n.C[1]||Et(n)!=4||n.da()!=2)){if(n.v&&Et(n)==4)ws(n.La,0,n);else if(J(n,"readystatechange"),Et(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(Nl)[1]||null;!i&&A.self&&A.self.location&&(i=A.self.location.protocol.slice(0,-1)),r=!bf.test(i?i.toLowerCase():"")}e=r}if(e)J(n,"complete"),J(n,"success");else{n.m=6;try{var s=2<Et(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Hl(n)}}finally{Ur(n)}}}}function Ur(n,t){if(n.g){Gl(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||J(n,"ready");try{e.onreadystatechange=r}catch{}}}function Gl(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(A.clearTimeout(n.A),n.A=null)}g.isActive=function(){return!!this.g};function Et(n){return n.g?n.g.readyState:0}g.da=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Cf(t)}};function $o(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case jl:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function xf(n){const t={};n=(n.g&&2<=Et(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(cn(n[r]))continue;var e=nf(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}Qd(t,function(r){return r.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Kl(n){let t="";return ps(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function Cs(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Kl(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):x(n,t,e))}function je(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Wl(n){this.Ga=0,this.j=[],this.l=new Nr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=je("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=je("baseRetryDelayMs",5e3,n),this.hb=je("retryDelaySeedMs",1e4,n),this.eb=je("forwardChannelMaxRetries",2,n),this.xa=je("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new $l(n&&n.concurrentRequestLimit),this.Ja=new Rf,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=Wl.prototype;g.ra=8;g.H=1;function bs(n){if(Ql(n),n.H==3){var t=n.W++,e=Ct(n.I);if(x(e,"SID",n.K),x(e,"RID",t),x(e,"TYPE","terminate"),xn(n,e),t=new Cn(n,n.l,t),t.L=2,t.v=Lr(Ct(e)),e=!1,A.navigator&&A.navigator.sendBeacon)try{e=A.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&A.Image&&(new Image().src=t.v,e=!0),e||(t.g=rc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),bn(t)}ec(n)}function Br(n){n.g&&(Ds(n),n.g.cancel(),n.g=null)}function Ql(n){Br(n),n.u&&(A.clearTimeout(n.u),n.u=null),ur(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&A.clearTimeout(n.m),n.m=null)}function qr(n){if(!Ll(n.i)&&!n.m){n.m=!0;var t=n.Na;hn||yl(),dn||(hn(),dn=!0),Es.add(t,n),n.C=0}}function Nf(n,t){return Fl(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Sn(rt(n.Na,n,t),tc(n,n.C)),n.C++,!0)}g.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Cn(this,this.l,n);let s=this.s;if(this.U&&(s?(s=ul(s),hl(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Xl(this,i,t),e=Ct(this.I),x(e,"RID",n),x(e,"CVER",22),this.F&&x(e,"X-HTTP-Session-Id",this.F),xn(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(Kl(s)))+"&"+t:this.o&&Cs(e,this.o,s)),Ss(this.i,i),this.bb&&x(e,"TYPE","init"),this.P?(x(e,"$req",t),x(e,"SID","null"),i.aa=!0,qi(i,e,null)):qi(i,e,t),this.H=2}}else this.H==3&&(n?Lo(this,n):this.j.length==0||Ll(this.i)||Lo(this))};function Lo(n,t){var e;t?e=t.m:e=n.W++;const r=Ct(n.I);x(r,"SID",n.K),x(r,"RID",e),x(r,"AID",n.V),xn(n,r),n.o&&n.s&&Cs(r,n.o,n.s),e=new Cn(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Xl(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Ss(n.i,e),qi(e,r,t)}function xn(n,t){n.na&&ps(n.na,function(e,r){x(t,r,e)}),n.h&&xl({},function(e,r){x(t,r,e)})}function Xl(n,t,e){e=Math.min(n.j.length,e);var r=n.h?rt(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let l=!0;for(let a=0;a<e;a++){let c=i[a].g;const u=i[a].map;if(c-=s,0>c)s=Math.max(0,i[a].g-100),l=!1;else try{Sf(u,o,"req"+c+"_")}catch{r&&r(u)}}if(l){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Yl(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;hn||yl(),dn||(hn(),dn=!0),Es.add(t,n),n.A=0}}function Vs(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Sn(rt(n.Ma,n),tc(n,n.A)),n.A++,!0)}g.Ma=function(){if(this.u=null,Jl(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Sn(rt(this.jb,this),n)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ot(10),Br(this),Jl(this))};function Ds(n){n.B!=null&&(A.clearTimeout(n.B),n.B=null)}function Jl(n){n.g=new Cn(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Ct(n.wa);x(t,"RID","rpc"),x(t,"SID",n.K),x(t,"AID",n.V),x(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&x(t,"TO",n.qa),x(t,"TYPE","xmlhttp"),xn(n,t),n.o&&n.s&&Cs(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=Lr(Ct(t)),e.s=null,e.S=!0,Cl(e,n)}g.ib=function(){this.v!=null&&(this.v=null,Br(this),Vs(this),ot(19))};function ur(n){n.v!=null&&(A.clearTimeout(n.v),n.v=null)}function Zl(n,t){var e=null;if(n.g==t){ur(n),Ds(n),n.g=null;var r=2}else if(Hi(n.i,t))e=t.F,Ul(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=kr(),J(r,new Il(r,e)),qr(n)}else Yl(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&Nf(n,t)||r==2&&Vs(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:te(n,5);break;case 4:te(n,10);break;case 3:te(n,6);break;default:te(n,2)}}}function tc(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function te(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=rt(n.pb,n);e||(e=new ne("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||lr(e,"https"),Lr(e)),Pf(e.toString(),r)}else ot(2);n.H=0,n.h&&n.h.za(t),ec(n),Ql(n)}g.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ot(2)):(this.l.info("Failed to ping google.com"),ot(1))};function ec(n){if(n.H=0,n.ma=[],n.h){const t=Bl(n.i);(t.length!=0||n.j.length!=0)&&(Co(n.ma,t),Co(n.ma,n.j),n.i.i.length=0,ds(n.j),n.j.length=0),n.h.ya()}}function nc(n,t,e){var r=e instanceof ne?Ct(e):new ne(e);if(r.g!="")t&&(r.g=t+"."+r.g),cr(r,r.m);else{var i=A.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new ne(null);r&&lr(s,r),t&&(s.g=t),i&&cr(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&x(r,e,t),x(r,"VER",n.ra),xn(n,r),r}function rc(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new $(new Vn({ob:!0})):new $(n.va),t.Oa(n.J),t}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function ic(){}g=ic.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function hr(){if(Re&&!(10<=Number(zd)))throw Error("Environmental error: no available transport.")}hr.prototype.g=function(n,t){return new ut(n,t)};function ut(n,t){G.call(this),this.g=new Wl(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!cn(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!cn(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new Oe(this)}K(ut,G);ut.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;ot(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=nc(n,null,n.Y),qr(n)};ut.prototype.close=function(){bs(this.g)};ut.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=vs(n),n=e);t.j.push(new wf(t.fb++,n)),t.H==3&&qr(t)};ut.prototype.N=function(){this.g.h=null,delete this.j,bs(this.g),delete this.g,ut.$.N.call(this)};function sc(n){Is.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}K(sc,Is);function oc(){Rs.call(this),this.status=1}K(oc,Rs);function Oe(n){this.g=n}K(Oe,ic);Oe.prototype.Ba=function(){J(this.g,"a")};Oe.prototype.Aa=function(n){J(this.g,new sc(n))};Oe.prototype.za=function(n){J(this.g,new oc)};Oe.prototype.ya=function(){J(this.g,"b")};function kf(){this.blockSize=-1}function _t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}K(_t,kf);_t.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ei(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}_t.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)Ei(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Ei(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){Ei(this,r),i=0;break}}this.h=i,this.i+=t};_t.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function D(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var Mf={};function xs(n){return-128<=n&&128>n?qd(n,function(t){return new D([t|0],0>t?-1:0)}):new D([n|0],0>n?-1:0)}function Tt(n){if(isNaN(n)||!isFinite(n))return Ee;if(0>n)return X(Tt(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=zi;return new D(t,0)}function ac(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return X(ac(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=Tt(Math.pow(t,8)),r=Ee,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=Tt(Math.pow(t,s)),r=r.R(s).add(Tt(o))):(r=r.R(e),r=r.add(Tt(o)))}return r}var zi=4294967296,Ee=xs(0),Gi=xs(1),Fo=xs(16777216);g=D.prototype;g.ea=function(){if(ht(this))return-X(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:zi+r)*t,t*=zi}return n};g.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Pt(this))return"0";if(ht(this))return"-"+X(this).toString(n);for(var t=Tt(Math.pow(n,6)),e=this,r="";;){var i=fr(e,t).g;e=dr(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,Pt(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};g.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Pt(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function ht(n){return n.h==-1}g.X=function(n){return n=dr(this,n),ht(n)?-1:Pt(n)?0:1};function X(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new D(e,~n.h).add(Gi)}g.abs=function(){return ht(this)?X(this):this};g.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new D(e,e[e.length-1]&-2147483648?-1:0)};function dr(n,t){return n.add(X(t))}g.R=function(n){if(Pt(this)||Pt(n))return Ee;if(ht(this))return ht(n)?X(this).R(X(n)):X(X(this).R(n));if(ht(n))return X(this.R(X(n)));if(0>this.X(Fo)&&0>n.X(Fo))return Tt(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,l=n.D(i)>>>16,a=n.D(i)&65535;e[2*r+2*i]+=o*a,qn(e,2*r+2*i),e[2*r+2*i+1]+=s*a,qn(e,2*r+2*i+1),e[2*r+2*i+1]+=o*l,qn(e,2*r+2*i+1),e[2*r+2*i+2]+=s*l,qn(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new D(e,0)};function qn(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function He(n,t){this.g=n,this.h=t}function fr(n,t){if(Pt(t))throw Error("division by zero");if(Pt(n))return new He(Ee,Ee);if(ht(n))return t=fr(X(n),t),new He(X(t.g),X(t.h));if(ht(t))return t=fr(n,X(t)),new He(X(t.g),t.h);if(30<n.g.length){if(ht(n)||ht(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Gi,r=t;0>=r.X(n);)e=Uo(e),r=Uo(r);var i=de(e,1),s=de(r,1);for(r=de(r,2),e=de(e,2);!Pt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=de(r,1),e=de(e,1)}return t=dr(n,i.R(t)),new He(i,t)}for(i=Ee;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Tt(e),o=s.R(t);ht(o)||0<o.X(n);)e-=r,s=Tt(e),o=s.R(t);Pt(s)&&(s=Gi),i=i.add(s),n=dr(n,o)}return new He(i,n)}g.gb=function(n){return fr(this,n).h};g.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new D(e,this.h&n.h)};g.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new D(e,this.h|n.h)};g.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new D(e,this.h^n.h)};function Uo(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new D(e,n.h)}function de(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new D(i,n.h)}hr.prototype.createWebChannel=hr.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Mr.NO_ERROR=0;Mr.TIMEOUT=8;Mr.HTTP_ERROR=6;Rl.COMPLETE="complete";Sl.EventType=Pn;Pn.OPEN="a";Pn.CLOSE="b";Pn.ERROR="c";Pn.MESSAGE="d";G.prototype.listen=G.prototype.O;$.prototype.listenOnce=$.prototype.P;$.prototype.getLastError=$.prototype.Sa;$.prototype.getLastErrorCode=$.prototype.Ia;$.prototype.getStatus=$.prototype.da;$.prototype.getResponseJson=$.prototype.Wa;$.prototype.getResponseText=$.prototype.ja;$.prototype.send=$.prototype.ha;$.prototype.setWithCredentials=$.prototype.Oa;_t.prototype.digest=_t.prototype.l;_t.prototype.reset=_t.prototype.reset;_t.prototype.update=_t.prototype.j;D.prototype.add=D.prototype.add;D.prototype.multiply=D.prototype.R;D.prototype.modulo=D.prototype.gb;D.prototype.compare=D.prototype.X;D.prototype.toNumber=D.prototype.ea;D.prototype.toString=D.prototype.toString;D.prototype.getBits=D.prototype.D;D.fromNumber=Tt;D.fromString=ac;var Of=function(){return new hr},$f=function(){return kr()},Ti=Mr,Lf=Rl,Ff=ce,Bo={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Uf=Vn,jn=Sl,Bf=$,qf=_t,Te=D;const qo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $e="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=new tl("@firebase/firestore");function ze(){return se.logLevel}function _(n,...t){if(se.logLevel<=b.DEBUG){const e=t.map(Ns);se.debug(`Firestore (${$e}): ${n}`,...e)}}function bt(n,...t){if(se.logLevel<=b.ERROR){const e=t.map(Ns);se.error(`Firestore (${$e}): ${n}`,...e)}}function Se(n,...t){if(se.logLevel<=b.WARN){const e=t.map(Ns);se.warn(`Firestore (${$e}): ${n}`,...e)}}function Ns(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(n="Unexpected state"){const t=`FIRESTORE (${$e}) INTERNAL ASSERTION FAILED: `+n;throw bt(t),new Error(t)}function N(n,t){n||w()}function R(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends ke{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class jf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(et.UNAUTHENTICATED))}shutdown(){}}class Hf{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class zf{constructor(t){this.t=t,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=a=>this.i!==r?(r=this.i,e(a)):Promise.resolve();let s=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ft,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;t.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ft)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(N(typeof r.accessToken=="string"),new lc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return N(t===null||typeof t=="string"),new et(t)}}class Gf{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Kf{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Gf(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wf{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qf{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(N(typeof e.token=="string"),this.R=e.token,new Wf(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Xf(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function V(n,t){return n<t?-1:n>t?1:0}function Pe(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new y(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return j.fromMillis(Date.now())}static fromDate(t){return j.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new j(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?V(this.nanoseconds,t.nanoseconds):V(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(t){this.timestamp=t}static fromTimestamp(t){return new I(t)}static min(){return new I(new j(0,0))}static max(){return new I(new j(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,e,r){e===void 0?e=0:e>t.length&&w(),r===void 0?r=t.length-e:r>t.length-e&&w(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return _n.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof _n?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class k extends _n{construct(t,e,r){return new k(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new k(e)}static emptyPath(){return new k([])}}const Yf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Y extends _n{construct(t,e,r){return new Y(t,e,r)}static isValidIdentifier(t){return Yf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Y.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Y(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new y(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const a=t[i+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new y(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=a,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new y(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Y(e)}static emptyPath(){return new Y([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(k.fromString(t))}static fromName(t){return new v(k.fromString(t).popFirst(5))}static empty(){return new v(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&k.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return k.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new k(t.slice()))}}function Jf(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=I.fromTimestamp(r===1e9?new j(e+1,0):new j(e,r));return new qt(i,v.empty(),t)}function Zf(n){return new qt(n.readTime,n.key,-1)}class qt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new qt(I.min(),v.empty(),-1)}static max(){return new qt(I.max(),v.empty(),-1)}}function tp(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=v.comparator(n.documentKey,t.documentKey),e!==0?e:V(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class np{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==ep)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new m((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof m?e:m.resolve(e)}catch(e){return m.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):m.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):m.reject(e)}static resolve(t){return new m((e,r)=>{e(t)})}static reject(t){return new m((e,r)=>{r(t)})}static waitFor(t){return new m((e,r)=>{let i=0,s=0,o=!1;t.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&e()},a=>r(a))}),o=!0,s===i&&e()})}static or(t){let e=m.resolve(!1);for(const r of t)e=e.next(i=>i?m.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new m((r,i)=>{const s=t.length,o=new Array(s);let l=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next(u=>{o[c]=u,++l,l===s&&r(o)},u=>i(u))}})}static doWhile(t,e){return new m((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function kn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}ks._e=-1;function jr(n){return n==null}function pr(n){return n===0&&1/n==-1/0}function rp(n){return typeof n=="number"&&Number.isInteger(n)&&!pr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ue(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function uc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.comparator=t,this.root=e||Q.EMPTY}insert(t,e){return new O(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Q.BLACK,null,null))}remove(t){return new O(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Q.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Hn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Hn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Hn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Hn(this.root,t,this.comparator,!0)}}class Hn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Q{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??Q.RED,this.left=i??Q.EMPTY,this.right=s??Q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new Q(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Q.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();const t=this.left.check();if(t!==this.right.check())throw w();return t+(this.isRed()?0:1)}}Q.EMPTY=null,Q.RED=!0,Q.BLACK=!1;Q.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(t,e,r,i,s){return this}insert(t,e,r){return new Q(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.comparator=t,this.data=new O(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ho(this.data.getIterator())}getIteratorFrom(t){return new Ho(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Z)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Z(this.comparator);return e.data=t,e}}class Ho{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.fields=t,t.sort(Y.comparator)}static empty(){return new lt([])}unionWith(t){let e=new Z(Y.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new lt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Pe(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new hc("Invalid base64 string: "+s):s}}(t);return new st(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new st(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return V(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}st.EMPTY_BYTE_STRING=new st("");const ip=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(n){if(N(!!n),typeof n=="string"){let t=0;const e=ip.exec(n);if(N(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:U(n.seconds),nanos:U(n.nanos)}}function U(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function oe(n){return typeof n=="string"?st.fromBase64String(n):st.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Os(n){const t=n.mapValue.fields.__previous_value__;return Ms(t)?Os(t):t}function yn(n){const t=jt(n.mapValue.fields.__local_write_time__.timestampValue);return new j(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(t,e,r,i,s,o,l,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=c}}class vn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new vn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof vn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ae(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ms(n)?4:op(n)?9007199254740991:10:w()}function Rt(n,t){if(n===t)return!0;const e=ae(n);if(e!==ae(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return yn(n).isEqual(yn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=jt(i.timestampValue),l=jt(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return oe(i.bytesValue).isEqual(oe(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return U(i.geoPointValue.latitude)===U(s.geoPointValue.latitude)&&U(i.geoPointValue.longitude)===U(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return U(i.integerValue)===U(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=U(i.doubleValue),l=U(s.doubleValue);return o===l?pr(o)===pr(l):isNaN(o)&&isNaN(l)}return!1}(n,t);case 9:return Pe(n.arrayValue.values||[],t.arrayValue.values||[],Rt);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(jo(o)!==jo(l))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(l[a]===void 0||!Rt(o[a],l[a])))return!1;return!0}(n,t);default:return w()}}function En(n,t){return(n.values||[]).find(e=>Rt(e,t))!==void 0}function Ce(n,t){if(n===t)return 0;const e=ae(n),r=ae(t);if(e!==r)return V(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return V(n.booleanValue,t.booleanValue);case 2:return function(s,o){const l=U(s.integerValue||s.doubleValue),a=U(o.integerValue||o.doubleValue);return l<a?-1:l>a?1:l===a?0:isNaN(l)?isNaN(a)?0:-1:1}(n,t);case 3:return zo(n.timestampValue,t.timestampValue);case 4:return zo(yn(n),yn(t));case 5:return V(n.stringValue,t.stringValue);case 6:return function(s,o){const l=oe(s),a=oe(o);return l.compareTo(a)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const l=s.split("/"),a=o.split("/");for(let c=0;c<l.length&&c<a.length;c++){const u=V(l[c],a[c]);if(u!==0)return u}return V(l.length,a.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const l=V(U(s.latitude),U(o.latitude));return l!==0?l:V(U(s.longitude),U(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const l=s.values||[],a=o.values||[];for(let c=0;c<l.length&&c<a.length;++c){const u=Ce(l[c],a[c]);if(u)return u}return V(l.length,a.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===zn.mapValue&&o===zn.mapValue)return 0;if(s===zn.mapValue)return 1;if(o===zn.mapValue)return-1;const l=s.fields||{},a=Object.keys(l),c=o.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const d=V(a[h],u[h]);if(d!==0)return d;const f=Ce(l[a[h]],c[u[h]]);if(f!==0)return f}return V(a.length,u.length)}(n.mapValue,t.mapValue);default:throw w()}}function zo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return V(n,t);const e=jt(n),r=jt(t),i=V(e.seconds,r.seconds);return i!==0?i:V(e.nanos,r.nanos)}function be(n){return Ki(n)}function Ki(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=jt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return oe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return v.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=Ki(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ki(e.fields[o])}`;return i+"}"}(n.mapValue):w()}function Wi(n){return!!n&&"integerValue"in n}function $s(n){return!!n&&"arrayValue"in n}function Go(n){return!!n&&"nullValue"in n}function Ko(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Xn(n){return!!n&&"mapValue"in n}function Ze(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ue(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ze(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ze(n.arrayValue.values[e]);return t}return Object.assign({},n)}function op(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.value=t}static empty(){return new at({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Xn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ze(e)}setAll(t){let e=Y.emptyPath(),r={},i=[];t.forEach((o,l)=>{if(!e.isImmediateParentOf(l)){const a=this.getFieldsMap(e);this.applyChanges(a,r,i),r={},i=[],e=l.popLast()}o?r[l.lastSegment()]=Ze(o):i.push(l.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());Xn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Rt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Xn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){ue(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new at(Ze(this.value))}}function dc(n){const t=[];return ue(n.fields,(e,r)=>{const i=new Y([e]);if(Xn(r)){const s=dc(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new lt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t,e,r,i,s,o,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(t){return new nt(t,0,I.min(),I.min(),I.min(),at.empty(),0)}static newFoundDocument(t,e,r,i){return new nt(t,1,e,I.min(),r,i,0)}static newNoDocument(t,e){return new nt(t,2,e,I.min(),I.min(),at.empty(),0)}static newUnknownDocument(t,e){return new nt(t,3,e,I.min(),I.min(),at.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(I.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=at.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=at.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=I.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof nt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e){this.position=t,this.inclusive=e}}function Wo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=v.comparator(v.fromName(o.referenceValue),e.key):r=Ce(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Rt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t,e="asc"){this.field=t,this.dir=e}}function ap(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{}class q extends fc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new cp(t,e,r):e==="array-contains"?new dp(t,r):e==="in"?new fp(t,r):e==="not-in"?new pp(t,r):e==="array-contains-any"?new mp(t,r):new q(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new up(t,r):new hp(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Ce(e,this.value)):e!==null&&ae(this.value)===ae(e)&&this.matchesComparison(Ce(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends fc{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new St(t,e)}matches(t){return pc(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function pc(n){return n.op==="and"}function mc(n){return lp(n)&&pc(n)}function lp(n){for(const t of n.filters)if(t instanceof St)return!1;return!0}function Qi(n){if(n instanceof q)return n.field.canonicalString()+n.op.toString()+be(n.value);if(mc(n))return n.filters.map(t=>Qi(t)).join(",");{const t=n.filters.map(e=>Qi(e)).join(",");return`${n.op}(${t})`}}function gc(n,t){return n instanceof q?function(r,i){return i instanceof q&&r.op===i.op&&r.field.isEqual(i.field)&&Rt(r.value,i.value)}(n,t):n instanceof St?function(r,i){return i instanceof St&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&gc(o,i.filters[l]),!0):!1}(n,t):void w()}function _c(n){return n instanceof q?function(e){return`${e.field.canonicalString()} ${e.op} ${be(e.value)}`}(n):n instanceof St?function(e){return e.op.toString()+" {"+e.getFilters().map(_c).join(" ,")+"}"}(n):"Filter"}class cp extends q{constructor(t,e,r){super(t,e,r),this.key=v.fromName(r.referenceValue)}matches(t){const e=v.comparator(t.key,this.key);return this.matchesComparison(e)}}class up extends q{constructor(t,e){super(t,"in",e),this.keys=yc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class hp extends q{constructor(t,e){super(t,"not-in",e),this.keys=yc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function yc(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>v.fromName(r.referenceValue))}class dp extends q{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return $s(e)&&En(e.arrayValue,this.value)}}class fp extends q{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&En(this.value.arrayValue,e)}}class pp extends q{constructor(t,e){super(t,"not-in",e)}matches(t){if(En(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!En(this.value.arrayValue,e)}}class mp extends q{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!$s(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>En(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(t,e=null,r=[],i=[],s=null,o=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ce=null}}function Xo(n,t=null,e=[],r=[],i=null,s=null,o=null){return new gp(n,t,e,r,i,s,o)}function Ls(n){const t=R(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Qi(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),jr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>be(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>be(r)).join(",")),t.ce=e}return t.ce}function Fs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ap(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!gc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Qo(n.startAt,t.startAt)&&Qo(n.endAt,t.endAt)}function Xi(n){return v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(t,e=null,r=[],i=[],s=null,o="F",l=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function _p(n,t,e,r,i,s,o,l){return new Hr(n,t,e,r,i,s,o,l)}function vc(n){return new Hr(n)}function Yo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function yp(n){return n.collectionGroup!==null}function tn(n){const t=R(n);if(t.le===null){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Z(Y.comparator);return o.filters.forEach(a=>{a.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new gr(s,r))}),e.has(Y.keyField().canonicalString())||t.le.push(new gr(Y.keyField(),r))}return t.le}function wt(n){const t=R(n);return t.he||(t.he=vp(t,tn(n))),t.he}function vp(n,t){if(n.limitType==="F")return Xo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new gr(i.field,s)});const e=n.endAt?new mr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new mr(n.startAt.position,n.startAt.inclusive):null;return Xo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Yi(n,t,e){return new Hr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function zr(n,t){return Fs(wt(n),wt(t))&&n.limitType===t.limitType}function Ec(n){return`${Ls(wt(n))}|lt:${n.limitType}`}function pe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>_c(i)).join(", ")}]`),jr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>be(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>be(i)).join(",")),`Target(${r})`}(wt(n))}; limitType=${n.limitType})`}function Gr(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):v.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of tn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,l,a){const c=Wo(o,l,a);return o.inclusive?c<=0:c<0}(r.startAt,tn(r),i)||r.endAt&&!function(o,l,a){const c=Wo(o,l,a);return o.inclusive?c>=0:c>0}(r.endAt,tn(r),i))}(n,t)}function Ep(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Tc(n){return(t,e)=>{let r=!1;for(const i of tn(n)){const s=Tp(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Tp(n,t,e){const r=n.field.isKeyField()?v.comparator(t.key,e.key):function(s,o,l){const a=o.data.field(s),c=l.data.field(s);return a!==null&&c!==null?Ce(a,c):w()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return w()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ue(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return uc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=new O(v.comparator);function Vt(){return wp}const wc=new O(v.comparator);function We(...n){let t=wc;for(const e of n)t=t.insert(e.key,e);return t}function Ac(n){let t=wc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ee(){return en()}function Ic(){return en()}function en(){return new Le(n=>n.toString(),(n,t)=>n.isEqual(t))}const Ap=new O(v.comparator),Ip=new Z(v.comparator);function P(...n){let t=Ip;for(const e of n)t=t.add(e);return t}const Rp=new Z(V);function Sp(){return Rp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pr(t)?"-0":t}}function Sc(n){return{integerValue:""+n}}function Pp(n,t){return rp(t)?Sc(t):Rc(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(){this._=void 0}}function Cp(n,t,e){return n instanceof _r?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ms(s)&&(s=Os(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof Tn?Cc(n,t):n instanceof wn?bc(n,t):function(i,s){const o=Pc(i,s),l=Jo(o)+Jo(i.Ie);return Wi(o)&&Wi(i.Ie)?Sc(l):Rc(i.serializer,l)}(n,t)}function bp(n,t,e){return n instanceof Tn?Cc(n,t):n instanceof wn?bc(n,t):e}function Pc(n,t){return n instanceof yr?function(r){return Wi(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class _r extends Kr{}class Tn extends Kr{constructor(t){super(),this.elements=t}}function Cc(n,t){const e=Vc(t);for(const r of n.elements)e.some(i=>Rt(i,r))||e.push(r);return{arrayValue:{values:e}}}class wn extends Kr{constructor(t){super(),this.elements=t}}function bc(n,t){let e=Vc(t);for(const r of n.elements)e=e.filter(i=>!Rt(i,r));return{arrayValue:{values:e}}}class yr extends Kr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Jo(n){return U(n.integerValue||n.doubleValue)}function Vc(n){return $s(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Vp(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Tn&&i instanceof Tn||r instanceof wn&&i instanceof wn?Pe(r.elements,i.elements,Rt):r instanceof yr&&i instanceof yr?Rt(r.Ie,i.Ie):r instanceof _r&&i instanceof _r}(n.transform,t.transform)}class Dp{constructor(t,e){this.version=t,this.transformResults=e}}class At{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new At}static exists(t){return new At(void 0,t)}static updateTime(t){return new At(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Yn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Wr{}function Dc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Nc(n.key,At.none()):new Mn(n.key,n.data,At.none());{const e=n.data,r=at.empty();let i=new Z(Y.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Kt(n.key,r,new lt(i.toArray()),At.none())}}function xp(n,t,e){n instanceof Mn?function(i,s,o){const l=i.value.clone(),a=ta(i.fieldTransforms,s,o.transformResults);l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,t,e):n instanceof Kt?function(i,s,o){if(!Yn(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=ta(i.fieldTransforms,s,o.transformResults),a=s.data;a.setAll(xc(i)),a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function nn(n,t,e,r){return n instanceof Mn?function(s,o,l,a){if(!Yn(s.precondition,o))return l;const c=s.value.clone(),u=ea(s.fieldTransforms,a,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(n,t,e,r):n instanceof Kt?function(s,o,l,a){if(!Yn(s.precondition,o))return l;const c=ea(s.fieldTransforms,a,o),u=o.data;return u.setAll(xc(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,l){return Yn(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,t,e)}function Np(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=Pc(r.transform,i||null);s!=null&&(e===null&&(e=at.empty()),e.set(r.field,s))}return e||null}function Zo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Pe(r,i,(s,o)=>Vp(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Mn extends Wr{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Kt extends Wr{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ta(n,t,e){const r=new Map;N(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,l=t.data.field(s.field);r.set(s.field,bp(o,l,e[i]))}return r}function ea(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,Cp(s,o,t))}return r}class Nc extends Wr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kp extends Wr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&xp(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=nn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=nn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ic();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=e.has(i.key)?null:l;const a=Dc(o,l);a!==null&&r.set(i.key,a),o.isValidDocument()||o.convertToNoDocument(I.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),P())}isEqual(t){return this.batchId===t.batchId&&Pe(this.mutations,t.mutations,(e,r)=>Zo(e,r))&&Pe(this.baseMutations,t.baseMutations,(e,r)=>Zo(e,r))}}class Us{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){N(t.mutations.length===r.length);let i=function(){return Ap}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Us(t,e,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F,C;function Lp(n){switch(n){default:return w();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function kc(n){if(n===void 0)return bt("GRPC error has no .code"),p.UNKNOWN;switch(n){case F.OK:return p.OK;case F.CANCELLED:return p.CANCELLED;case F.UNKNOWN:return p.UNKNOWN;case F.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case F.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case F.INTERNAL:return p.INTERNAL;case F.UNAVAILABLE:return p.UNAVAILABLE;case F.UNAUTHENTICATED:return p.UNAUTHENTICATED;case F.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case F.NOT_FOUND:return p.NOT_FOUND;case F.ALREADY_EXISTS:return p.ALREADY_EXISTS;case F.PERMISSION_DENIED:return p.PERMISSION_DENIED;case F.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case F.ABORTED:return p.ABORTED;case F.OUT_OF_RANGE:return p.OUT_OF_RANGE;case F.UNIMPLEMENTED:return p.UNIMPLEMENTED;case F.DATA_LOSS:return p.DATA_LOSS;default:return w()}}(C=F||(F={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=new Te([4294967295,4294967295],0);function na(n){const t=Fp().encode(n),e=new qf;return e.update(t),new Uint8Array(e.digest())}function ra(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Te([e,r],0),new Te([i,s],0)]}class Bs{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Qe(`Invalid padding: ${e}`);if(r<0)throw new Qe(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Qe(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Qe(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Te.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(Te.fromNumber(r)));return i.compare(Up)===1&&(i=new Te([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=na(t),[r,i]=ra(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Bs(s,i,e);return r.forEach(l=>o.insert(l)),o}insert(t){if(this.Te===0)return;const e=na(t),[r,i]=ra(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Qe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,On.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Qr(I.min(),i,new O(V),Vt(),P())}}class On{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new On(r,e,P(),P(),P())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,e,r,i){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=i}}class Mc{constructor(t,e){this.targetId=t,this.fe=e}}class Oc{constructor(t,e,r=st.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class ia{constructor(){this.ge=0,this.pe=oa(),this.ye=st.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=P(),e=P(),r=P();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:w()}}),new On(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=oa()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class Bp{constructor(t){this.Le=t,this.ke=new Map,this.qe=Vt(),this.Qe=sa(),this.Ke=new O(V)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:w()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.fe.count,i=this.Ye(e);if(i){const s=i.target;if(Xi(s))if(r===0){const o=new v(s.path);this.We(e,o,nt.newNoDocument(o,I.min()))}else N(r===1);else{const o=this.Ze(e);if(o!==r){const l=this.Xe(t),a=l?this.et(l,t,o):1;if(a!==0){this.He(e);const c=a===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,c)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,l;try{o=oe(r).toUint8Array()}catch(a){if(a instanceof hc)return Se("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{l=new Bs(o,i,s)}catch(a){return Se(a instanceof Qe?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return l.Te===0?null:l}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(l)||(this.We(e,s,null),i++)}),i}it(t){const e=new Map;this.ke.forEach((s,o)=>{const l=this.Ye(o);if(l){if(s.current&&Xi(l.target)){const a=new v(l.target.path);this.qe.get(a)!==null||this.st(o,a)||this.We(o,a,nt.newNoDocument(a,t))}s.De&&(e.set(o,s.ve()),s.Fe())}});let r=P();this.Qe.forEach((s,o)=>{let l=!0;o.forEachWhile(a=>{const c=this.Ye(a);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new Qr(t,e,this.Ke,this.qe,r);return this.qe=Vt(),this.Qe=sa(),this.Ke=new O(V),i}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new ia,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new Z(V),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||_("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new ia),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function sa(){return new O(v.comparator)}function oa(){return new O(v.comparator)}const qp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),jp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Hp=(()=>({and:"AND",or:"OR"}))();class zp{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Ji(n,t){return n.useProto3Json||jr(t)?t:{value:t}}function vr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $c(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Gp(n,t){return vr(n,t.toTimestamp())}function It(n){return N(!!n),I.fromTimestamp(function(e){const r=jt(e);return new j(r.seconds,r.nanos)}(n))}function qs(n,t){return function(r){return new k(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function Lc(n){const t=k.fromString(n);return N(qc(t)),t}function Zi(n,t){return qs(n.databaseId,t.path)}function wi(n,t){const e=Lc(t);if(e.get(1)!==n.databaseId.projectId)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new y(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new v(Fc(e))}function ts(n,t){return qs(n.databaseId,t)}function Kp(n){const t=Lc(n);return t.length===4?k.emptyPath():Fc(t)}function es(n){return new k(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fc(n){return N(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function aa(n,t,e){return{name:Zi(n,t),fields:e.value.mapValue.fields}}function Wp(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:w()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(N(u===void 0||typeof u=="string"),st.fromBase64String(u||"")):(N(u===void 0||u instanceof Uint8Array),st.fromUint8Array(u||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(c){const u=c.code===void 0?p.UNKNOWN:kc(c.code);return new y(u,c.message||"")}(o);e=new Oc(r,i,s,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=wi(n,r.document.name),s=It(r.document.updateTime),o=r.document.createTime?It(r.document.createTime):I.min(),l=new at({mapValue:{fields:r.document.fields}}),a=nt.newFoundDocument(i,s,o,l),c=r.targetIds||[],u=r.removedTargetIds||[];e=new Jn(c,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=wi(n,r.document),s=r.readTime?It(r.readTime):I.min(),o=nt.newNoDocument(i,s),l=r.removedTargetIds||[];e=new Jn([],l,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=wi(n,r.document),s=r.removedTargetIds||[];e=new Jn([],s,i,null)}else{if(!("filter"in t))return w();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new $p(i,s),l=r.targetId;e=new Mc(l,o)}}return e}function Qp(n,t){let e;if(t instanceof Mn)e={update:aa(n,t.key,t.value)};else if(t instanceof Nc)e={delete:Zi(n,t.key)};else if(t instanceof Kt)e={update:aa(n,t.key,t.data),updateMask:im(t.fieldMask)};else{if(!(t instanceof kp))return w();e={verify:Zi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof _r)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Tn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof wn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof yr)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw w()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Gp(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:w()}(n,t.precondition)),e}function Xp(n,t){return n&&n.length>0?(N(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?It(i.updateTime):It(s);return o.isEqual(I.min())&&(o=It(s)),new Dp(o,i.transformResults||[])}(e,t))):[]}function Yp(n,t){return{documents:[ts(n,t.path)]}}function Jp(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=ts(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=ts(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length!==0)return Bc(St.create(a,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(c=>function(h){return{field:me(h.field),direction:em(h.dir)}}(c))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=Ji(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(a){return{before:a.inclusive,values:a.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(a){return{before:!a.inclusive,values:a.position}}(t.endAt)),e}function Zp(n){let t=Kp(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){N(r===1);const u=e.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];e.where&&(s=function(h){const d=Uc(h);return d instanceof St&&mc(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(E){return new gr(ge(E.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(e.orderBy));let l=null;e.limit&&(l=function(h){let d;return d=typeof h=="object"?h.value:h,jr(d)?null:d}(e.limit));let a=null;e.startAt&&(a=function(h){const d=!!h.before,f=h.values||[];return new mr(f,d)}(e.startAt));let c=null;return e.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new mr(f,d)}(e.endAt)),_p(t,i,o,s,l,"F",a,c)}function tm(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return w()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Uc(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ge(e.unaryFilter.field);return q.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ge(e.unaryFilter.field);return q.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ge(e.unaryFilter.field);return q.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ge(e.unaryFilter.field);return q.create(o,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(n):n.fieldFilter!==void 0?function(e){return q.create(ge(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return St.create(e.compositeFilter.filters.map(r=>Uc(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return w()}}(e.compositeFilter.op))}(n):w()}function em(n){return qp[n]}function nm(n){return jp[n]}function rm(n){return Hp[n]}function me(n){return{fieldPath:n.canonicalString()}}function ge(n){return Y.fromServerFormat(n.fieldPath)}function Bc(n){return n instanceof q?function(e){if(e.op==="=="){if(Ko(e.value))return{unaryFilter:{field:me(e.field),op:"IS_NAN"}};if(Go(e.value))return{unaryFilter:{field:me(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ko(e.value))return{unaryFilter:{field:me(e.field),op:"IS_NOT_NAN"}};if(Go(e.value))return{unaryFilter:{field:me(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:me(e.field),op:nm(e.op),value:e.value}}}(n):n instanceof St?function(e){const r=e.getFilters().map(i=>Bc(i));return r.length===1?r[0]:{compositeFilter:{op:rm(e.op),filters:r}}}(n):w()}function im(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function qc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e,r,i,s=I.min(),o=I.min(),l=st.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=a}withSequenceNumber(t){return new kt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t){this.ut=t}}function om(n){const t=Zp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Yi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.on=new lm}addToCollectionParentIndex(t,e){return this.on.add(e),m.resolve()}getCollectionParents(t,e){return m.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return m.resolve()}deleteFieldIndex(t,e){return m.resolve()}deleteAllFieldIndexes(t){return m.resolve()}createTargetIndexes(t,e){return m.resolve()}getDocumentsMatchingTarget(t,e){return m.resolve(null)}getIndexType(t,e){return m.resolve(0)}getFieldIndexes(t,e){return m.resolve([])}getNextCollectionGroupToUpdate(t){return m.resolve(null)}getMinOffset(t,e){return m.resolve(qt.min())}getMinOffsetFromCollectionGroup(t,e){return m.resolve(qt.min())}updateCollectionGroup(t,e,r){return m.resolve()}updateIndexEntries(t,e){return m.resolve()}}class lm{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Z(k.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Z(k.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Ve(0)}static Nn(){return new Ve(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(){this.changes=new Le(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,nt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?m.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&nn(r.mutation,i,lt.empty(),j.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,P()).next(()=>r))}getLocalViewOfDocuments(t,e,r=P()){const i=ee();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=We();return s.forEach((l,a)=>{o=o.insert(l,a.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=ee();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,P()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,l)=>{e.set(o,l)})})}computeViews(t,e,r,i){let s=Vt();const o=en(),l=function(){return en()}();return e.forEach((a,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Kt)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),nn(u.mutation,c,u.mutation.getFieldMask(),j.now())):o.set(c.key,lt.empty())}),this.recalculateAndSaveOverlays(t,s).next(a=>(a.forEach((c,u)=>o.set(c,u)),e.forEach((c,u)=>{var h;return l.set(c,new um(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),l))}recalculateAndSaveOverlays(t,e){const r=en();let i=new O((o,l)=>o-l),s=P();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const l of o)l.keys().forEach(a=>{const c=e.get(a);if(c===null)return;let u=r.get(a)||lt.empty();u=l.applyToLocalView(c,u),r.set(a,u);const h=(i.get(l.batchId)||P()).add(a);i=i.insert(l.batchId,h)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const a=l.getNext(),c=a.key,u=a.value,h=Ic();u.forEach(d=>{if(!s.has(d)){const f=Dc(e.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return m.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return v.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):yp(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):m.resolve(ee());let l=-1,a=s;return o.next(c=>m.forEach(c,(u,h)=>(l<h.largestBatchId&&(l=h.largestBatchId),s.get(u)?m.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{a=a.insert(u,d)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,a,c,P())).next(u=>({batchId:l,changes:Ac(u)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new v(e)).next(r=>{let i=We();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=We();return this.indexManager.getCollectionParents(t,s).next(l=>m.forEach(l,a=>{const c=function(h,d){return new Hr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,r,i).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((a,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,nt.newInvalidDocument(u)))});let l=We();return o.forEach((a,c)=>{const u=s.get(a);u!==void 0&&nn(u.mutation,c,lt.empty(),j.now()),Gr(e,c)&&(l=l.insert(a,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return m.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(i){return{id:i.id,version:i.version,createTime:It(i.createTime)}}(e)),m.resolve()}getNamedQuery(t,e){return m.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(i){return{name:i.name,query:om(i.bundledQuery),readTime:It(i.readTime)}}(e)),m.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.overlays=new O(v.comparator),this.lr=new Map}getOverlay(t,e){return m.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ee();return m.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.lt(t,e,s)}),m.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),m.resolve()}getOverlaysForCollection(t,e,r){const i=ee(),s=e.length+1,o=new v(e.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const a=l.getNext().value,c=a.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===s&&a.largestBatchId>r&&i.set(a.getKey(),a)}return m.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new O((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=ee(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const l=ee(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((c,u)=>l.set(c,u)),!(l.size()>=i)););return m.resolve(l)}lt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Op(e,r));let s=this.lr.get(e);s===void 0&&(s=P(),this.lr.set(e,s)),this.lr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(){this.hr=new Z(H.Pr),this.Ir=new Z(H.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const r=new H(t,e);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.dr(new H(t,e))}Ar(t,e){t.forEach(r=>this.removeReference(r,e))}Rr(t){const e=new v(new k([])),r=new H(e,t),i=new H(e,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new v(new k([])),r=new H(e,t),i=new H(e,t+1);let s=P();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new H(t,0),r=this.hr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class H{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return v.comparator(t.key,e.key)||V(t.gr,e.gr)}static Tr(t,e){return V(t.gr,e.gr)||v.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new Z(H.Pr)}checkEmpty(t){return m.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Mp(s,e,r,i);this.mutationQueue.push(o);for(const l of i)this.yr=this.yr.add(new H(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return m.resolve(o)}lookupMutationBatch(t,e){return m.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Sr(r),s=i<0?0:i;return m.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return m.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return m.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new H(e,0),i=new H(e,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const l=this.wr(o.gr);s.push(l)}),m.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Z(V);return e.forEach(i=>{const s=new H(i,0),o=new H(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],l=>{r=r.add(l.gr)})}),m.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;v.isDocumentKey(s)||(s=s.child(""));const o=new H(new v(s),0);let l=new Z(V);return this.yr.forEachWhile(a=>{const c=a.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(a.gr)),!0)},o),m.resolve(this.br(l))}br(t){const e=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){N(this.Dr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return m.forEach(e.mutations,i=>{const s=new H(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,e){const r=new H(e,0),i=this.yr.firstAfterOrEqual(r);return m.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,m.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(t){this.Cr=t,this.docs=function(){return new O(v.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return m.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(e))}getEntries(t,e){let r=Vt();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),m.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Vt();const o=e.path,l=new v(o.child("")),a=this.docs.getIteratorFrom(l);for(;a.hasNext();){const{key:c,value:{document:u}}=a.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||tp(Zf(u),r)<=0||(i.has(u.key)||Gr(e,u))&&(s=s.insert(u.key,u.mutableCopy()))}return m.resolve(s)}getAllFromCollectionGroup(t,e,r,i){w()}vr(t,e){return m.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new gm(this)}getSize(t){return m.resolve(this.size)}}class gm extends cm{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),m.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t){this.persistence=t,this.Fr=new Le(e=>Ls(e),Fs),this.lastRemoteSnapshotVersion=I.min(),this.highestTargetId=0,this.Mr=0,this.Or=new js,this.targetCount=0,this.Nr=Ve.On()}forEachTarget(t,e){return this.Fr.forEach((r,i)=>e(i)),m.resolve()}getLastRemoteSnapshotVersion(t){return m.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return m.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),m.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Mr&&(this.Mr=e),m.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new Ve(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,m.resolve()}updateTargetData(t,e){return this.kn(e),m.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,m.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Fr.forEach((o,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),m.waitFor(s).next(()=>i)}getTargetCount(t){return m.resolve(this.targetCount)}getTargetData(t,e){const r=this.Fr.get(e)||null;return m.resolve(r)}addMatchingKeys(t,e,r){return this.Or.Er(e,r),m.resolve()}removeMatchingKeys(t,e,r){this.Or.Ar(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),m.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),m.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Or.mr(e);return m.resolve(r)}containsKey(t,e){return m.resolve(this.Or.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(t,e){this.Br={},this.overlays={},this.Lr=new ks(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new _m(this),this.indexManager=new am,this.remoteDocumentCache=function(i){return new mm(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new sm(e),this.Kr=new dm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new fm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new pm(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,r){_("MemoryPersistence","Starting transaction:",t);const i=new vm(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,e){return m.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class vm extends np{constructor(t){super(),this.currentSequenceNumber=t}}class Hs{constructor(t){this.persistence=t,this.Gr=new js,this.zr=null}static jr(t){return new Hs(t)}get Hr(){if(this.zr)return this.zr;throw w()}addReference(t,e,r){return this.Gr.addReference(r,e),this.Hr.delete(r.toString()),m.resolve()}removeReference(t,e,r){return this.Gr.removeReference(r,e),this.Hr.add(r.toString()),m.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),m.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return m.forEach(this.Hr,r=>{const i=v.fromPath(r);return this.Jr(t,i).next(s=>{s||e.removeEntry(i,I.min())})}).next(()=>(this.zr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Jr(t,e).next(r=>{r?this.Hr.delete(e.toString()):this.Hr.add(e.toString())})}Qr(t){return 0}Jr(t,e){return m.or([()=>m.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.ki=r,this.qi=i}static Qi(t,e){let r=P(),i=P();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new zs(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.zi(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Em;return this.Hi(t,e,o).next(l=>{if(s.result=l,this.$i)return this.Ji(t,e,o,l.size)})}).next(()=>s.result)}Ji(t,e,r,i){return r.documentReadCount<this.Ui?(ze()<=b.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),m.resolve()):(ze()<=b.DEBUG&&_("QueryEngine","Query:",pe(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(ze()<=b.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,wt(e))):m.resolve())}zi(t,e){if(Yo(e))return m.resolve(null);let r=wt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Yi(e,null,"F"),r=wt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=P(...s);return this.Gi.getDocuments(t,o).next(l=>this.indexManager.getMinOffset(t,r).next(a=>{const c=this.Yi(e,l);return this.Zi(e,c,o,a.readTime)?this.zi(t,Yi(e,null,"F")):this.Xi(t,c,e,a)}))})))}ji(t,e,r,i){return Yo(e)||i.isEqual(I.min())?m.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(e,s);return this.Zi(e,o,r,i)?m.resolve(null):(ze()<=b.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pe(e)),this.Xi(t,o,e,Jf(i,-1)).next(l=>l))})}Yi(t,e){let r=new Z(Tc(t));return e.forEach((i,s)=>{Gr(t,s)&&(r=r.add(s))}),r}Zi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,e,r){return ze()<=b.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",pe(e)),this.Gi.getDocumentsMatchingQuery(t,e,qt.min(),r)}Xi(t,e,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(t,e,r,i){this.persistence=t,this.es=e,this.serializer=i,this.ts=new O(V),this.ns=new Le(s=>Ls(s),Fs),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new hm(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ts))}}function Am(n,t,e,r){return new wm(n,t,e,r)}async function jc(n,t){const e=R(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.os(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let a=P();for(const c of i){o.push(c.batchId);for(const u of c.mutations)a=a.add(u.key)}for(const c of s){l.push(c.batchId);for(const u of c.mutations)a=a.add(u.key)}return e.localDocuments.getDocuments(r,a).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:l}))})})}function Im(n,t){const e=R(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.ss.newChangeBuffer({trackRemovals:!0});return function(l,a,c,u){const h=c.batch,d=h.keys();let f=m.resolve();return d.forEach(E=>{f=f.next(()=>u.getEntry(a,E)).next(S=>{const T=c.docVersions.get(E);N(T!==null),S.version.compareTo(T)<0&&(h.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),u.addEntry(S)))})}),f.next(()=>l.mutationQueue.removeMutationBatch(a,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let a=P();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(a=a.add(l.batch.mutations[c].key));return a}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Hc(n){const t=R(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.qr.getLastRemoteSnapshotVersion(e))}function Rm(n,t){const e=R(n),r=t.snapshotVersion;let i=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.ss.newChangeBuffer({trackRemovals:!0});i=e.ts;const l=[];t.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;l.push(e.qr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>e.qr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(st.EMPTY_BYTE_STRING,I.min()).withLastLimboFreeSnapshotVersion(I.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(S,T,M){return S.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(d,f,u)&&l.push(e.qr.updateTargetData(s,f))});let a=Vt(),c=P();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(s,u))}),l.push(Sm(s,o,t.documentUpdates).next(u=>{a=u.us,c=u.cs})),!r.isEqual(I.min())){const u=e.qr.getLastRemoteSnapshotVersion(s).next(h=>e.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(u)}return m.waitFor(l).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,a,c)).next(()=>a)}).then(s=>(e.ts=i,s))}function Sm(n,t,e){let r=P(),i=P();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Vt();return e.forEach((l,a)=>{const c=s.get(l);a.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),a.isNoDocument()&&a.version.isEqual(I.min())?(t.removeEntry(l,a.readTime),o=o.insert(l,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(a),o=o.insert(l,a)):_("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",a.version)}),{us:o,cs:i}})}function Pm(n,t){const e=R(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Cm(n,t){const e=R(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.qr.getTargetData(r,t).next(s=>s?(i=s,m.resolve(i)):e.qr.allocateTargetId(r).next(o=>(i=new kt(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ts=e.ts.insert(r.targetId,r),e.ns.set(t,r.targetId)),r})}async function ns(n,t,e){const r=R(n),i=r.ts.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!kn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function la(n,t,e){const r=R(n);let i=I.min(),s=P();return r.persistence.runTransaction("Execute query","readwrite",o=>function(a,c,u){const h=R(a),d=h.ns.get(u);return d!==void 0?m.resolve(h.ts.get(d)):h.qr.getTargetData(c,u)}(r,o,wt(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,l.targetId).next(a=>{s=a})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,e?i:I.min(),e?s:P())).next(l=>(bm(r,Ep(t),l),{documents:l,ls:s})))}function bm(n,t,e){let r=n.rs.get(t)||I.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.rs.set(t,r)}class ca{constructor(){this.activeTargetIds=Sp()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Vm{constructor(){this.eo=new ca,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,r){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new ca,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gn=null;function Ai(){return Gn===null?Gn=function(){return 268435456+Math.round(2147483648*Math.random())}():Gn++,"0x"+Gn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="WebChannelConnection";class km extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+e.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(e,r,i,s,o){const l=Ai(),a=this.So(e,r);_("RestConnection",`Sending RPC '${e}' ${l}:`,a,i);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,s,o),this.Do(e,a,c,i).then(u=>(_("RestConnection",`Received RPC '${e}' ${l}: `,u),u),u=>{throw Se("RestConnection",`RPC '${e}' ${l} failed with error: `,u,"url: ",a,"request:",i),u})}Co(e,r,i,s,o,l){return this.wo(e,r,i,s,o)}bo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+$e}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}So(e,r){const i=xm[e];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,r,i){const s=Ai();return new Promise((o,l)=>{const a=new Bf;a.setWithCredentials(!0),a.listenOnce(Lf.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ti.NO_ERROR:const u=a.getResponseJson();_(tt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case Ti.TIMEOUT:_(tt,`RPC '${t}' ${s} timed out`),l(new y(p.DEADLINE_EXCEEDED,"Request time out"));break;case Ti.HTTP_ERROR:const h=a.getStatus();if(_(tt,`RPC '${t}' ${s} failed with status:`,h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const E=function(T){const M=T.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(M)>=0?M:p.UNKNOWN}(f.status);l(new y(E,f.message))}else l(new y(p.UNKNOWN,"Server responded with status "+a.getStatus()))}else l(new y(p.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{_(tt,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(i);_(tt,`RPC '${t}' ${s} sending request:`,i),a.send(e,"POST",c,r,15)})}vo(t,e,r){const i=Ai(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Of(),l=$f(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Uf({})),this.bo(a.initMessageHeaders,e,r),a.encodeInitMessageHeaders=!0;const u=s.join("");_(tt,`Creating RPC '${t}' stream ${i}: ${u}`,a);const h=o.createWebChannel(u,a);let d=!1,f=!1;const E=new Nm({co:T=>{f?_(tt,`Not sending because RPC '${t}' stream ${i} is closed:`,T):(d||(_(tt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),_(tt,`RPC '${t}' stream ${i} sending:`,T),h.send(T))},lo:()=>h.close()}),S=(T,M,L)=>{T.listen(M,W=>{try{L(W)}catch(ft){setTimeout(()=>{throw ft},0)}})};return S(h,jn.EventType.OPEN,()=>{f||_(tt,`RPC '${t}' stream ${i} transport opened.`)}),S(h,jn.EventType.CLOSE,()=>{f||(f=!0,_(tt,`RPC '${t}' stream ${i} transport closed`),E.Ro())}),S(h,jn.EventType.ERROR,T=>{f||(f=!0,Se(tt,`RPC '${t}' stream ${i} transport errored:`,T),E.Ro(new y(p.UNAVAILABLE,"The operation could not be completed")))}),S(h,jn.EventType.MESSAGE,T=>{var M;if(!f){const L=T.data[0];N(!!L);const W=L,ft=W.error||((M=W[0])===null||M===void 0?void 0:M.error);if(ft){_(tt,`RPC '${t}' stream ${i} received error:`,ft);const Wt=ft.status;let Qt=function(Uu){const ao=F[Uu];if(ao!==void 0)return kc(ao)}(Wt),Be=ft.message;Qt===void 0&&(Qt=p.INTERNAL,Be="Unknown error status: "+Wt+" with message "+ft.message),f=!0,E.Ro(new y(Qt,Be)),h.close()}else _(tt,`RPC '${t}' stream ${i} received:`,L),E.Vo(L)}}),S(l,Ff.STAT_EVENT,T=>{T.stat===Bo.PROXY?_(tt,`RPC '${t}' stream ${i} detected buffering proxy`):T.stat===Bo.NOPROXY&&_(tt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.Ao()},0),E}}function Ii(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(n){return new zp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,e,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=e,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,e-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e,r,i,s,o,l,a){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=a,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new zc(t,e)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():e&&e.code===p.RESOURCE_EXHAUSTED?(bt(e.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===e&&this.s_(r,i)},r=>{t(()=>{const i=new y(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,e){const r=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget(()=>this.Uo===t?e():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Mm extends Gc{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=Wp(this.serializer,t),r=function(s){if(!("targetChange"in s))return I.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?I.min():o.readTime?It(o.readTime):I.min()}(t);return this.listener.a_(e,r)}u_(t){const e={};e.database=es(this.serializer),e.addTarget=function(s,o){let l;const a=o.target;if(l=Xi(a)?{documents:Yp(s,a)}:{query:Jp(s,a)},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=$c(s,o.resumeToken);const c=Ji(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(I.min())>0){l.readTime=vr(s,o.snapshotVersion.toTimestamp());const c=Ji(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,t);const r=tm(this.serializer,t);r&&(e.labels=r),this.e_(e)}c_(t){const e={};e.database=es(this.serializer),e.removeTarget=t,this.e_(e)}}class Om extends Gc{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(N(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=Xp(t.writeResults,t.commitTime),r=It(t.commitTime);return this.listener.I_(r,e)}return N(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=es(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Qp(this.serializer,r))};this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(p.UNKNOWN,i.toString())})}Co(t,e,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(p.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class Lm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(bt(e),this.f_=!1):_("OnlineStateTracker",e)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{he(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=R(a);c.C_.add(4),await $n(c),c.M_.set("Unknown"),c.C_.delete(4),await Yr(c)}(this))})}),this.M_=new Lm(r,i)}}async function Yr(n){if(he(n))for(const t of n.v_)await t(!0)}async function $n(n){for(const t of n.v_)await t(!1)}function Kc(n,t){const e=R(n);e.D_.has(t.targetId)||(e.D_.set(t.targetId,t),Ws(e)?Ks(e):Fe(e).Ho()&&Gs(e,t))}function Wc(n,t){const e=R(n),r=Fe(e);e.D_.delete(t),r.Ho()&&Qc(e,t),e.D_.size===0&&(r.Ho()?r.Zo():he(e)&&e.M_.set("Unknown"))}function Gs(n,t){if(n.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(I.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Fe(n).u_(t)}function Qc(n,t){n.x_.Oe(t),Fe(n).c_(t)}function Ks(n){n.x_=new Bp({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.D_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),Fe(n).start(),n.M_.g_()}function Ws(n){return he(n)&&!Fe(n).jo()&&n.D_.size>0}function he(n){return R(n).C_.size===0}function Xc(n){n.x_=void 0}async function Um(n){n.D_.forEach((t,e)=>{Gs(n,t)})}async function Bm(n,t){Xc(n),Ws(n)?(n.M_.w_(t),Ks(n)):n.M_.set("Unknown")}async function qm(n,t,e){if(n.M_.set("Online"),t instanceof Oc&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.D_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.D_.delete(l),i.x_.removeTarget(l))}(n,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Er(n,r)}else if(t instanceof Jn?n.x_.$e(t):t instanceof Mc?n.x_.Je(t):n.x_.Ge(t),!e.isEqual(I.min()))try{const r=await Hc(n.localStore);e.compareTo(r)>=0&&await function(s,o){const l=s.x_.it(o);return l.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.D_.get(c);u&&s.D_.set(c,u.withResumeToken(a.resumeToken,o))}}),l.targetMismatches.forEach((a,c)=>{const u=s.D_.get(a);if(!u)return;s.D_.set(a,u.withResumeToken(st.EMPTY_BYTE_STRING,u.snapshotVersion)),Qc(s,a);const h=new kt(u.target,a,c,u.sequenceNumber);Gs(s,h)}),s.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Er(n,r)}}async function Er(n,t,e){if(!kn(t))throw t;n.C_.add(1),await $n(n),n.M_.set("Offline"),e||(e=()=>Hc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await e(),n.C_.delete(1),await Yr(n)})}function Yc(n,t){return t().catch(e=>Er(n,e,t))}async function Jr(n){const t=R(n),e=Ht(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;jm(t);)try{const i=await Pm(t.localStore,r);if(i===null){t.b_.length===0&&e.Zo();break}r=i.batchId,Hm(t,i)}catch(i){await Er(t,i)}Jc(t)&&Zc(t)}function jm(n){return he(n)&&n.b_.length<10}function Hm(n,t){n.b_.push(t);const e=Ht(n);e.Ho()&&e.h_&&e.P_(t.mutations)}function Jc(n){return he(n)&&!Ht(n).jo()&&n.b_.length>0}function Zc(n){Ht(n).start()}async function zm(n){Ht(n).E_()}async function Gm(n){const t=Ht(n);for(const e of n.b_)t.P_(e.mutations)}async function Km(n,t,e){const r=n.b_.shift(),i=Us.from(r,t,e);await Yc(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Jr(n)}async function Wm(n,t){t&&Ht(n).h_&&await async function(r,i){if(function(o){return Lp(o)&&o!==p.ABORTED}(i.code)){const s=r.b_.shift();Ht(r).Yo(),await Yc(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Jr(r)}}(n,t),Jc(n)&&Zc(n)}async function ha(n,t){const e=R(n);e.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=he(e);e.C_.add(3),await $n(e),r&&e.M_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.C_.delete(3),await Yr(e)}async function Qm(n,t){const e=R(n);t?(e.C_.delete(2),await Yr(e)):t||(e.C_.add(2),await $n(e),e.M_.set("Unknown"))}function Fe(n){return n.O_||(n.O_=function(e,r,i){const s=R(e);return s.A_(),new Mm(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:Um.bind(null,n),Io:Bm.bind(null,n),a_:qm.bind(null,n)}),n.v_.push(async t=>{t?(n.O_.Yo(),Ws(n)?Ks(n):n.M_.set("Unknown")):(await n.O_.stop(),Xc(n))})),n.O_}function Ht(n){return n.N_||(n.N_=function(e,r,i){const s=R(e);return s.A_(),new Om(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:zm.bind(null,n),Io:Wm.bind(null,n),T_:Gm.bind(null,n),I_:Km.bind(null,n)}),n.v_.push(async t=>{t?(n.N_.Yo(),await Jr(n)):(await n.N_.stop(),n.b_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,l=new Qs(t,e,o,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xs(n,t){if(bt("AsyncQueue",`${t}: ${n}`),kn(n))return new y(p.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(t){this.comparator=t?(e,r)=>t(e,r)||v.comparator(e.key,r.key):(e,r)=>v.comparator(e.key,r.key),this.keyedMap=We(),this.sortedSet=new O(this.comparator)}static emptySet(t){return new we(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof we)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new we;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this.B_=new O(v.comparator)}track(t){const e=t.doc.key,r=this.B_.get(e);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(e,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(e):t.type===1&&r.type===2?this.B_=this.B_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):w():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal((e,r)=>{t.push(r)}),t}}class De{constructor(t,e,r,i,s,o,l,a,c){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(l=>{o.push({type:0,doc:l})}),new De(t,e,we.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){this.k_=void 0,this.listeners=[]}}class Ym{constructor(){this.queries=new Le(t=>Ec(t),zr),this.onlineState="Unknown",this.q_=new Set}}async function Jm(n,t){const e=R(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new Xm),i)try{s.k_=await e.onListen(r)}catch(o){const l=Xs(o,`Initialization of query '${pe(t.query)}' failed`);return void t.onError(l)}e.queries.set(r,s),s.listeners.push(t),t.Q_(e.onlineState),s.k_&&t.K_(s.k_)&&Ys(e)}async function Zm(n,t){const e=R(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function tg(n,t){const e=R(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const l of o.listeners)l.K_(i)&&(r=!0);o.k_=i}}r&&Ys(e)}function eg(n,t,e){const r=R(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function Ys(n){n.q_.forEach(t=>{t.next()})}class ng{constructor(t,e,r){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new De(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}H_(t){t=De.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(t){this.key=t}}class eu{constructor(t){this.key=t}}class rg{constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=P(),this.mutatedKeys=P(),this._a=Tc(t),this.aa=new we(this._a)}get ua(){return this.ia}ca(t,e){const r=e?e.la:new da,i=e?e.aa:this.aa;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,l=!1;const a=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,h)=>{const d=i.get(u),f=Gr(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),S=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let T=!1;d&&f?d.data.isEqual(f.data)?E!==S&&(r.track({type:3,doc:f}),T=!0):this.ha(d,f)||(r.track({type:2,doc:f}),T=!0,(a&&this._a(f,a)>0||c&&this._a(f,c)<0)&&(l=!0)):!d&&f?(r.track({type:0,doc:f}),T=!0):d&&!f&&(r.track({type:1,doc:d}),T=!0,(a||c)&&(l=!0)),T&&(f?(o=o.add(f),s=S?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:l,mutatedKeys:s}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort((c,u)=>function(d,f){const E=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return E(d)-E(f)}(c.type,u.type)||this._a(c.doc,u.doc)),this.Pa(r);const o=e?this.Ia():[],l=this.oa.size===0&&this.current?1:0,a=l!==this.sa;return this.sa=l,s.length!==0||a?{snapshot:new De(this.query,t.aa,i,s,t.mutatedKeys,l===0,a,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new da,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(e=>this.ia=this.ia.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.ia=this.ia.delete(e)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=P(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const e=[];return t.forEach(r=>{this.oa.has(r)||e.push(new eu(r))}),this.oa.forEach(r=>{t.has(r)||e.push(new tu(r))}),e}da(t){this.ia=t.ls,this.oa=P();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return De.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class ig{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class sg{constructor(t){this.key=t,this.Ra=!1}}class og{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Le(l=>Ec(l),zr),this.fa=new Map,this.ga=new Set,this.pa=new O(v.comparator),this.ya=new Map,this.wa=new js,this.Sa={},this.ba=new Map,this.Da=Ve.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function ag(n,t){const e=_g(n);let r,i;const s=e.ma.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await Cm(e.localStore,wt(t)),l=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await lg(e,t,r,l==="current",o.resumeToken),e.isPrimaryClient&&Kc(e.remoteStore,o)}return i}async function lg(n,t,e,r,i){n.va=(h,d,f)=>async function(S,T,M,L){let W=T.view.ca(M);W.Zi&&(W=await la(S.localStore,T.query,!1).then(({documents:Qt})=>T.view.ca(Qt,W)));const ft=L&&L.targetChanges.get(T.targetId),Wt=T.view.applyChanges(W,S.isPrimaryClient,ft);return pa(S,T.targetId,Wt.Ta),Wt.snapshot}(n,h,d,f);const s=await la(n.localStore,t,!0),o=new rg(t,s.ls),l=o.ca(s.documents),a=On.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),c=o.applyChanges(l,n.isPrimaryClient,a);pa(n,e,c.Ta);const u=new ig(t,e,o);return n.ma.set(t,u),n.fa.has(e)?n.fa.get(e).push(t):n.fa.set(e,[t]),c.snapshot}async function cg(n,t){const e=R(n),r=e.ma.get(t),i=e.fa.get(r.targetId);if(i.length>1)return e.fa.set(r.targetId,i.filter(s=>!zr(s,t))),void e.ma.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await ns(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),Wc(e.remoteStore,r.targetId),rs(e,r.targetId)}).catch(Nn)):(rs(e,r.targetId),await ns(e.localStore,r.targetId,!0))}async function ug(n,t,e){const r=yg(n);try{const i=await function(o,l){const a=R(o),c=j.now(),u=l.reduce((f,E)=>f.add(E.key),P());let h,d;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let E=Vt(),S=P();return a.ss.getEntries(f,u).next(T=>{E=T,E.forEach((M,L)=>{L.isValidDocument()||(S=S.add(M))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,E)).next(T=>{h=T;const M=[];for(const L of l){const W=Np(L,h.get(L.key).overlayedDocument);W!=null&&M.push(new Kt(L.key,W,dc(W.value.mapValue),At.exists(!0)))}return a.mutationQueue.addMutationBatch(f,c,M,l)}).next(T=>{d=T;const M=T.applyToLocalDocumentSet(h,S);return a.documentOverlayCache.saveOverlays(f,T.batchId,M)})}).then(()=>({batchId:d.batchId,changes:Ac(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,a){let c=o.Sa[o.currentUser.toKey()];c||(c=new O(V)),c=c.insert(l,a),o.Sa[o.currentUser.toKey()]=c}(r,i.batchId,e),await Ln(r,i.changes),await Jr(r.remoteStore)}catch(i){const s=Xs(i,"Failed to persist write");e.reject(s)}}async function nu(n,t){const e=R(n);try{const r=await Rm(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.ya.get(s);o&&(N(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?N(o.Ra):i.removedDocuments.size>0&&(N(o.Ra),o.Ra=!1))}),await Ln(e,r,t)}catch(r){await Nn(r)}}function fa(n,t,e){const r=R(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ma.forEach((s,o)=>{const l=o.view.Q_(t);l.snapshot&&i.push(l.snapshot)}),function(o,l){const a=R(o);a.onlineState=l;let c=!1;a.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(l)&&(c=!0)}),c&&Ys(a)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function hg(n,t,e){const r=R(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.ya.get(t),s=i&&i.key;if(s){let o=new O(v.comparator);o=o.insert(s,nt.newNoDocument(s,I.min()));const l=P().add(s),a=new Qr(I.min(),new Map,new O(V),o,l);await nu(r,a),r.pa=r.pa.remove(s),r.ya.delete(t),Js(r)}else await ns(r.localStore,t,!1).then(()=>rs(r,t,e)).catch(Nn)}async function dg(n,t){const e=R(n),r=t.batch.batchId;try{const i=await Im(e.localStore,t);iu(e,r,null),ru(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Ln(e,i)}catch(i){await Nn(i)}}async function fg(n,t,e){const r=R(n);try{const i=await function(o,l){const a=R(o);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,l).next(h=>(N(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,l)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,t);iu(r,t,e),ru(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Ln(r,i)}catch(i){await Nn(i)}}function ru(n,t){(n.ba.get(t)||[]).forEach(e=>{e.resolve()}),n.ba.delete(t)}function iu(n,t,e){const r=R(n);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function rs(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.fa.get(t))n.ma.delete(r),e&&n.Va.Fa(r,e);n.fa.delete(t),n.isPrimaryClient&&n.wa.Rr(t).forEach(r=>{n.wa.containsKey(r)||su(n,r)})}function su(n,t){n.ga.delete(t.path.canonicalString());const e=n.pa.get(t);e!==null&&(Wc(n.remoteStore,e),n.pa=n.pa.remove(t),n.ya.delete(e),Js(n))}function pa(n,t,e){for(const r of e)r instanceof tu?(n.wa.addReference(r.key,t),pg(n,r)):r instanceof eu?(_("SyncEngine","Document no longer in limbo: "+r.key),n.wa.removeReference(r.key,t),n.wa.containsKey(r.key)||su(n,r.key)):w()}function pg(n,t){const e=t.key,r=e.path.canonicalString();n.pa.get(e)||n.ga.has(r)||(_("SyncEngine","New document in limbo: "+e),n.ga.add(r),Js(n))}function Js(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const t=n.ga.values().next().value;n.ga.delete(t);const e=new v(k.fromString(t)),r=n.Da.next();n.ya.set(r,new sg(e)),n.pa=n.pa.insert(e,r),Kc(n.remoteStore,new kt(wt(vc(e.path)),r,"TargetPurposeLimboResolution",ks._e))}}async function Ln(n,t,e){const r=R(n),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((l,a)=>{o.push(r.va(a,t,e).then(c=>{if((c||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=zs.Qi(a.targetId,c);s.push(u)}}))}),await Promise.all(o),r.Va.a_(i),await async function(a,c){const u=R(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>m.forEach(c,d=>m.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>m.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!kn(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),E=f.snapshotVersion,S=f.withLastLimboFreeSnapshotVersion(E);u.ts=u.ts.insert(d,S)}}}(r.localStore,s))}async function mg(n,t){const e=R(n);if(!e.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await jc(e.localStore,t);e.currentUser=t,function(s,o){s.ba.forEach(l=>{l.forEach(a=>{a.reject(new y(p.CANCELLED,o))})}),s.ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ln(e,r._s)}}function gg(n,t){const e=R(n),r=e.ya.get(t);if(r&&r.Ra)return P().add(r.key);{let i=P();const s=e.fa.get(t);if(!s)return i;for(const o of s){const l=e.ma.get(o);i=i.unionWith(l.view.ua)}return i}}function _g(n){const t=R(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=nu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=gg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hg.bind(null,t),t.Va.a_=tg.bind(null,t.eventManager),t.Va.Fa=eg.bind(null,t.eventManager),t}function yg(n){const t=R(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=dg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=fg.bind(null,t),t}class ma{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Xr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Am(this.persistence,new Tm,t.initialUser,this.serializer)}createPersistence(t){return new ym(Hs.jr,this.serializer)}createSharedClientState(t){return new Vm}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vg{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=mg.bind(null,this.syncEngine),await Qm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Ym}()}createDatastore(t){const e=Xr(t.databaseInfo.databaseId),r=function(s){return new km(s)}(t.databaseInfo);return function(s,o,l,a){return new $m(s,o,l,a)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,l){return new Fm(r,i,s,o,l)}(this.localStore,this.datastore,t.asyncQueue,e=>fa(this.syncEngine,e,0),function(){return ua.D()?new ua:new Dm}())}createSyncEngine(t,e){return function(i,s,o,l,a,c,u){const h=new og(i,s,o,l,a,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=R(e);_("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await $n(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):bt("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=cc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Xs(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ri(n,t){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await jc(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function ga(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Ag(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(i=>ha(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>ha(t.remoteStore,s)),n._onlineComponents=t}function wg(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Ag(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ri(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!wg(e))throw e;Se("Error using user provided cache. Falling back to memory cache: "+e),await Ri(n,new ma)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Ri(n,new ma);return n._offlineComponents}async function ou(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await ga(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await ga(n,new vg))),n._onlineComponents}function Ig(n){return ou(n).then(t=>t.syncEngine)}async function Rg(n){const t=await ou(n),e=t.eventManager;return e.onListen=ag.bind(null,t.syncEngine),e.onUnlisten=cg.bind(null,t.syncEngine),e}function Sg(n,t,e={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,l,a,c){const u=new Eg({next:d=>{o.enqueueAndForget(()=>Zm(s,h)),d.fromCache&&a.source==="server"?c.reject(new y(p.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new ng(l,u,{includeMetadataChanges:!0,J_:!0});return Jm(s,h)}(await Rg(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n,t,e){if(!e)throw new y(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Pg(n,t,e,r){if(t===!0&&r===!0)throw new y(p.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function ya(n){if(!v.isDocumentKey(n))throw new y(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function va(n){if(v.isDocumentKey(n))throw new y(p.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":w()}function xe(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new y(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Zs(n);throw new y(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Pg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=au((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new y(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new y(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new y(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Zr{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ea({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ea(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new jf;switch(r.type){case"firstParty":return new Kf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=_a.get(e);r&&(_("ComponentProvider","Removing Datastore"),_a.delete(e),r.terminate())}(this),Promise.resolve()}}function Cg(n,t,e,r={}){var i;const s=(n=xe(n,Zr))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Se("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,a;if(typeof r.mockUserToken=="string")l=r.mockUserToken,a=et.MOCK_USER;else{l=vh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new et(c)}n._authCredentials=new Hf(new lc(l,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ti(this.firestore,t,this._query)}}class dt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new dt(this.firestore,t,this._key)}}class Ut extends ti{constructor(t,e,r){super(t,e,vc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new dt(this.firestore,null,new v(t))}withConverter(t){return new Ut(this.firestore,t,this._path)}}function to(n,t,...e){if(n=Bt(n),lu("collection","path",t),n instanceof Zr){const r=k.fromString(t,...e);return va(r),new Ut(n,null,r)}{if(!(n instanceof dt||n instanceof Ut))throw new y(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(k.fromString(t,...e));return va(r),new Ut(n.firestore,null,r)}}function cu(n,t,...e){if(n=Bt(n),arguments.length===1&&(t=cc.newId()),lu("doc","path",t),n instanceof Zr){const r=k.fromString(t,...e);return ya(r),new dt(n,null,new v(r))}{if(!(n instanceof dt||n instanceof Ut))throw new y(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(k.fromString(t,...e));return ya(r),new dt(n.firestore,n instanceof Ut?n.converter:null,new v(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new zc(this,"async_queue_retry"),this.iu=()=>{const e=Ii();e&&_("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};const t=Ii();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=Ii();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const e=new Ft;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!kn(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const e=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw bt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=e,e}enqueueAfterDelay(t,e,r){this.su(),this.ru.indexOf(t)>-1&&(e=0);const i=Qs.createAndSchedule(this,t,e,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&w()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Xa)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}class ei extends Zr{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new bg}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hu(this),this._firestoreClient.terminate()}}function Vg(n,t){const e=typeof n=="object"?n:Ad(),r=typeof n=="string"?n:t||"(default)",i=vd(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_h("firestore");s&&Cg(i,...s)}return i}function uu(n){return n._firestoreClient||hu(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function hu(n){var t,e,r;const i=n._freezeSettings(),s=function(l,a,c,u){return new sp(l,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,au(u.experimentalLongPollingOptions),u.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Tg(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ne(st.fromBase64String(t))}catch(e){throw new y(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Ne(st.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new y(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Y(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new y(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new y(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return V(this._lat,t._lat)||V(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=/^__.*__$/;class xg{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Kt(t,this.data,this.fieldMask,e,this.fieldTransforms):new Mn(t,this.data,e,this.fieldTransforms)}}class du{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Kt(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function fu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw w()}}class ro{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new ro(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Tr(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(fu(this.Iu)&&Dg.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Ng{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Xr(t)}pu(t,e,r,i=!1){return new ro({Iu:t,methodName:e,gu:r,path:Y.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pu(n){const t=n._freezeSettings(),e=Xr(n._databaseId);return new Ng(n._databaseId,!!t.ignoreUndefinedProperties,e)}function kg(n,t,e,r,i,s={}){const o=n.pu(s.merge||s.mergeFields?2:0,t,e,i);io("Data must be an object, but it was:",o,r);const l=mu(r,o);let a,c;if(s.merge)a=new lt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=is(t,h,e);if(!o.contains(d))throw new y(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);_u(u,d)||u.push(d)}a=new lt(u),c=o.fieldTransforms.filter(h=>a.covers(h.field))}else a=null,c=o.fieldTransforms;return new xg(new at(l),a,c)}class ri extends eo{_toFieldTransform(t){if(t.Iu!==2)throw t.Iu===1?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ri}}function Mg(n,t,e,r){const i=n.pu(1,t,e);io("Data must be an object, but it was:",i,r);const s=[],o=at.empty();ue(r,(a,c)=>{const u=so(t,a,e);c=Bt(c);const h=i.Ru(u);if(c instanceof ri)s.push(u);else{const d=ii(c,h);d!=null&&(s.push(u),o.set(u,d))}});const l=new lt(s);return new du(o,l,i.fieldTransforms)}function Og(n,t,e,r,i,s){const o=n.pu(1,t,e),l=[is(t,r,e)],a=[i];if(s.length%2!=0)throw new y(p.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)l.push(is(t,s[d])),a.push(s[d+1]);const c=[],u=at.empty();for(let d=l.length-1;d>=0;--d)if(!_u(c,l[d])){const f=l[d];let E=a[d];E=Bt(E);const S=o.Ru(f);if(E instanceof ri)c.push(f);else{const T=ii(E,S);T!=null&&(c.push(f),u.set(f,T))}}const h=new lt(c);return new du(u,h,o.fieldTransforms)}function ii(n,t){if(gu(n=Bt(n)))return io("Unsupported field value:",t,n),mu(n,t);if(n instanceof eo)return function(r,i){if(!fu(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let a=ii(l,i.Vu(o));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=Bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Pp(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=j.fromDate(r);return{timestampValue:vr(i.serializer,s)}}if(r instanceof j){const s=new j(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vr(i.serializer,s)}}if(r instanceof no)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ne)return{bytesValue:$c(i.serializer,r._byteString)};if(r instanceof dt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:qs(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Zs(r)}`)}(n,t)}function mu(n,t){const e={};return uc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ue(n,(r,i)=>{const s=ii(i,t.Eu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function gu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof j||n instanceof no||n instanceof Ne||n instanceof dt||n instanceof eo)}function io(n,t,e){if(!gu(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Zs(e);throw r==="an object"?t.mu(n+" a custom object"):t.mu(n+" "+r)}}function is(n,t,e){if((t=Bt(t))instanceof ni)return t._internalPath;if(typeof t=="string")return so(n,t);throw Tr("Field path arguments must be of type string or ",n,!1,void 0,e)}const $g=new RegExp("[~\\*/\\[\\]]");function so(n,t,e){if(t.search($g)>=0)throw Tr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new ni(...t.split("."))._internalPath}catch{throw Tr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Tr(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${t}() called with invalid data`;e&&(l+=" (via `toFirestore()`)"),l+=". ";let a="";return(s||o)&&(a+=" (found",s&&(a+=` in field ${r}`),o&&(a+=` in document ${i}`),a+=")"),new y(p.INVALID_ARGUMENT,l+n+a)}function _u(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Lg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(vu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Lg extends yu{data(){return super.data()}}function vu(n,t){return typeof t=="string"?so(n,t):t instanceof ni?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(p.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ug{convertValue(t,e="none"){switch(ae(t)){case 0:return null;case 1:return t.booleanValue;case 2:return U(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(oe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw w()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ue(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new no(U(t.latitude),U(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Os(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(yn(t));default:return null}}convertTimestamp(t){const e=jt(t);return new j(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=k.fromString(t);N(qc(r));const i=new vn(r.get(1),r.get(3)),s=new v(r.popFirst(5));return i.isEqual(e)||bt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class qg extends yu{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Zn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(vu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Zn extends qg{data(t={}){return super.data(t)}}class jg{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Kn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Zn(this._firestore,this._userDataWriter,r.key,r,new Kn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new y(p.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const a=new Zn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Kn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:a,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const a=new Zn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Kn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),u=o.indexOf(l.doc.key)),{type:Hg(l.type),doc:a,oldIndex:c,newIndex:u}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Hg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}class zg extends Ug{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ne(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new dt(this.firestore,null,e)}}function Gg(n){n=xe(n,ti);const t=xe(n.firestore,ei),e=uu(t),r=new zg(t);return Fg(n._query),Sg(e,n._query).then(i=>new jg(t,r,n,i))}function Kg(n,t,e,...r){n=xe(n,dt);const i=xe(n.firestore,ei),s=pu(i);let o;return o=typeof(t=Bt(t))=="string"||t instanceof ni?Og(s,"updateDoc",n._key,t,e,r):Mg(s,"updateDoc",n._key,t),Tu(i,[o.toMutation(n._key,At.exists(!0))])}function Eu(n,t){const e=xe(n.firestore,ei),r=cu(n),i=Bg(n.converter,t);return Tu(e,[kg(pu(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,At.exists(!1))]).then(()=>r)}function Tu(n,t){return function(r,i){const s=new Ft;return r.asyncQueue.enqueueAndForget(async()=>ug(await Ig(r),i,s)),s.promise}(uu(n),t)}(function(t,e=!0){(function(i){$e=i})(wd),or(new an("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ei(new zf(r.getProvider("auth-internal")),new Qf(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new y(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vn(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ve(qo,"4.3.2",t),ve(qo,"4.3.2","esm2017")})();const Wg={apiKey:"AIzaSyA3Sky6JC3wvwMOtBZVq0kriDn-yahQGPI",authDomain:"records-gym.firebaseapp.com",projectId:"records-gym",storageBucket:"records-gym.appspot.com",messagingSenderId:"475219948832",appId:"1:475219948832:web:2cca9778dc243291951345",measurementId:"G-90TH94RHLY"},Qg=rl(Wg),wr=Vg(Qg);class wu extends ct{render(){return B`
    <div class="spinner-backdrop">
      <div class="spinner"></div>
    </div>`}}yt(wu,"styles",Dt`
    .spinner-backdrop {
      position: fixed; /* Posición fija en toda la pantalla */
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
      display: flex;
      justify-content: center; /* Centrado horizontal */
      align-items: center; /* Centrado vertical */
      z-index: 1000; /* Asegura que esté sobre otros elementos */
    }

    .spinner {
      border: 5px solid rgba(255, 255, 255, 0.3); /* Color del borde exterior */
      border-top: 5px solid #555; /* Color del borde superior */
      border-radius: 50%; /* Hace que sea circular */
      width: 50px; /* Tamaño del spinner */
      height: 50px;
      animation: spin 1s linear infinite; /* Animación de giro */
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `);customElements.define("gym-spinner",wu);class Au extends ct{static get properties(){return{title:{type:String},message:{type:String},onClose:{type:Function}}}render(){return B`
    <div class="modal-backdrop">
        <div class="modal">
        <div class="modal-header">
            <span class="close-button" @click="${this.onClose}">&times;</span>
            <h2>${this.title}</h2>
        </div>
        <div class="modal-body">
            <p>${this.message}</p>
        </div>
        <div class="modal-footer d-flex">
            <button @click="${this.onClose}">Close</button>
        </div>
        </div>
    </div>
  
    `}}yt(Au,"styles",Dt`
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Fondo semi-transparente */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Asegúrate de que sea mayor que otros elementos en la página */
  }
  
  .modal {
    background-color: white;
    color: black;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1001;
    max-width: 500px;
    width: 90%;
    box-sizing: border-box;
  }
  
  .modal-header {
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  
  .modal-body {
    padding-bottom: 20px;
  }
  
  .modal-footer {
    text-align: center;
  }
  .modal-footer button{
    padding: 10px 65px;
    outline: none;
    border: none;
    color: #ffffff;
    background: #ff2953;
    margin: 45px 0 0 auto;
    text-transform: uppercase;
  }
  .close-button {
    cursor: pointer;
    border: none;
    background: none;
    font-size: 2.5em;
  }
  
  `);customElements.define("gym-modal",Au);class Iu extends ct{static get properties(){return{loading:{type:Boolean},showModal:{type:Boolean},modalMessage:{type:String}}}constructor(){super(),this.loading=!1,this.showModal=!1,this.modalMessage=""}createRenderRoot(){return this}handleSubmit(t){t.preventDefault(),this.loading=!0;const e={name:this.querySelector("#exerciseName").value,description:this.querySelector("#description").value,type:this.querySelector("#type").value,muscleGroup:this.querySelector("#muscleGroup").value};console.log(e),this.addExerciseToFirebase(e)}async addExerciseToFirebase(t){try{const e=await Eu(to(wr,"exercises"),t);this.modalMessage="Exercise added successfully!",this.showModal=!0}catch(e){this.modalMessage=`Error adding exercise: ${e.message}`,this.showModal=!0}finally{this.loading=!1}}render(){return B`
    ${this.loading?B`<gym-spinner></gym-spinner>`:""}
    ${this.showModal?B`<gym-modal title="Sport Exercise" .message=${this.modalMessage} .onClose=${()=>this.showModal=!1}></gym-modal>`:""}
    <form @submit="${this.handleSubmit}">
        <div>
          <input type="text" id="exerciseName" name="exerciseName" placeHolder="Exercise name">
        </div>
        <div>
          <input type="text" id="description" name="description" placeHolder="Description" class="message-box">
        </div>
        <div>
          <select id="type" name="type" class="select-type">
            <option value="cardiovascular">Cardiovascular</option>
            <option value="strength">Fuerza</option>
          </select>
        </div>
        <div>
          <select id="muscleGroup" name="muscleGroup" class="select-type">
            <option value="core">Núcleo/Core</option>
            <option value="arms">Brazos</option>
            <option value="back">Espalda</option>
            <option value="chest">Pecho</option>
            <option value="biceps">Biceps</option>
            <option value="triceps">triceps</option>
            <option value="shoulders">Hombros</option>
            <option value="legs">Piernas</option>
            <option value="glutes">Glúteos</option>
            <option value="calves">Pantorrillas</option>
            <option value="abs">Abdominales</option>
          </select>
        </div>
        <div class="d-flex">
          <button type="submit">Add exercise</button>
        </div>
  </form>
    `}}yt(Iu,"styles",Dt`
      .select-type{
        width: 100%;
        border: none;
        background-color: $white;
        outline: none;
        color: $black;
        margin-top: 25px;
        padding: 12px;
      }
  `);customElements.define("exercise-add",Iu);class Ru extends ct{static get properties(){return{loading:{type:Boolean},showModal:{type:Boolean},modalMessage:{type:String}}}constructor(){super(),this.loading=!1,this.showModal=!1,this.modalMessage="",this.exercises=[],this.exerciseIdSelected=""}connectedCallback(){super.connectedCallback(),this.loadExercises()}createRenderRoot(){return this}async loadExercises(){this.loading=!0;try{const t=await Gg(to(wr,"exercises"));this.exercises=t.docs.map(e=>({id:e.id,...e.data()}))}catch(t){console.error("Error loading exercises: ",t),this.modalMessage=`Error loading exercises: ${t.message}`,this.showModal=!0}finally{this.loading=!1}}handleExerciseSelection(t){console.log(t);const e=t.target.value,r=this.exercises.find(i=>i.id===e);r&&(this.exerciseIdSelected=e,this.querySelector("#exerciseName").value=r.name,this.querySelector("#description").value=r.description,this.querySelector("#type").value=r.type,this.querySelector("#muscleGroup").value=r.muscleGroup)}handleSubmit(t){t.preventDefault(),this.loading=!0;const e={name:this.querySelector("#exerciseName").value,description:this.querySelector("#description").value,type:this.querySelector("#type").value,muscleGroup:this.querySelector("#muscleGroup").value};this.updateExerciseInFirebase(e)}async updateExerciseInFirebase(t){try{const e=cu(wr,"exercises",this.exerciseIdSelected);await Kg(e,t),this.modalMessage="Exercise updated successfully!",this.showModal=!0}catch(e){this.modalMessage=`Error updating exercise: ${e.message}`,this.showModal=!0}finally{this.loading=!1}}render(){return B`
    ${this.loading?B`<gym-spinner></gym-spinner>`:""}
    ${this.showModal?B`<gym-modal title="Sport Exercise" .message=${this.modalMessage} .onClose=${()=>this.showModal=!1}></gym-modal>`:""}
    <select @change="${this.handleExerciseSelection}">
        <option value="" selected>Sport exercise</option>
      ${this.exercises.map(t=>B`<option value="${t.id}">${t.name}</option>`)}
    </select>
    <form @submit="${this.handleSubmit}">
        <div>
          <input type="text" id="exerciseName" name="exerciseName" placeHolder="Exercise name">
        </div>
        <div>
          <input type="text" id="description" name="description" placeHolder="Description" class="message-box">
        </div>
        <div>
          <select id="type" name="type" class="select-type">
            <option value="cardiovascular">Cardiovascular</option>
            <option value="strength">Fuerza</option>
          </select>
        </div>
        <div>
          <select id="muscleGroup" name="muscleGroup" class="select-type">
            <option value="core">Núcleo/Core</option>
            <option value="arms">Brazos</option>
            <option value="back">Espalda</option>
            <option value="chest">Pecho</option>
            <option value="biceps">Biceps</option>
            <option value="triceps">triceps</option>
            <option value="shoulders">Hombros</option>
            <option value="legs">Piernas</option>
            <option value="glutes">Glúteos</option>
            <option value="calves">Pantorrillas</option>
            <option value="abs">Abdominales</option>
          </select>
        </div>
        <div class="d-flex">
          <button type="submit">Update exercise</button>
        </div>
  </form>
    `}}yt(Ru,"styles",Dt`
      .select-type{
        width: 100%;
        border: none;
        background-color: $white;
        outline: none;
        color: $black;
        margin-top: 25px;
        padding: 12px;
      }
  `);customElements.define("exercise-modify",Ru);class Su extends ct{static get properties(){return{loading:{type:Boolean},showModal:{type:Boolean},modalMessage:{type:String}}}constructor(){super(),this.loading=!1,this.showModal=!1,this.modalMessage=""}createRenderRoot(){return this}handleSubmit(t){t.preventDefault(),this.loading=!0,console.log("entra");const e={name:this.querySelector("#exerciseName").value,description:this.querySelector("#description").value,type:this.querySelector("#type").value,muscleGroup:this.querySelector("#muscleGroup").value};this.addExerciseToFirebase(e)}async addExerciseToFirebase(t){try{const e=await Eu(to(wr,"exercises"),t);this.modalMessage="Exercise added successfully!",this.showModal=!0}catch(e){this.modalMessage=`Error adding exercise: ${e.message}`,this.showModal=!0}finally{this.loading=!1}}render(){return B`
    ${this.loading?B`<gym-spinner></gym-spinner>`:""}
    ${this.showModal?B`<gym-modal title="Sport Exercise" .message=${this.modalMessage} .onClose=${()=>this.showModal=!1}></gym-modal>`:""}
    <form @submit="${this.handleSubmit}">
        <div>
          <input type="text" id="exerciseName" name="exerciseName" placeHolder="Exercise name">
        </div>
        <div>
          <input type="text" id="description" name="description" placeHolder="Description" class="message-box">
        </div>
        <div>
          <select id="type" name="type" class="select-type">
            <option value="cardiovascular">Cardiovascular</option>
            <option value="strength">Fuerza</option>
          </select>
        </div>
        <div>
          <select id="muscleGroup" name="muscleGroup" class="select-type">
            <option value="core">Núcleo/Core</option>
            <option value="arms">Brazos</option>
            <option value="back">Espalda</option>
            <option value="chest">Pecho</option>
            <option value="biceps">Biceps</option>
            <option value="triceps">triceps</option>
            <option value="shoulders">Hombros</option>
            <option value="legs">Piernas</option>
            <option value="glutes">Glúteos</option>
            <option value="calves">Pantorrillas</option>
            <option value="abs">Abdominales</option>
          </select>
        </div>
        <div class="d-flex">
          <button type="submit">Add exercise</button>
        </div>
  </form>
    `}}yt(Su,"styles",Dt`
      .select-type{
        width: 100%;
        border: none;
        background-color: $white;
        outline: none;
        color: $black;
        margin-top: 25px;
        padding: 12px;
      }
  `);customElements.define("exercise-delete",Su);class Pu extends ct{static get properties(){return{currentState:{type:String}}}constructor(){super(),this.currentState="add"}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.updateStateBasedOnUrl()}updateStateBasedOnUrl(){const t=window.location.pathname.split("/");this.currentState=t[3]}getRender(){let t;switch(console.log(this.currentState),this.currentState){case"add":t=B`<exercise-add></exercise-add>`;break;case"modify":t=B`<exercise-modify></exercise-modify>`;break;case"delete":t=B`<exercise-delete></exercise-delete>`;break;default:t=B`<p>Invalid action</p>`}return t}render(){return B`
    <header-gym></header-gym>
    <section class="contact_section">
      <div class="container-fluid">   
        <div class="row">
          <div class="col-lg-5 col-md-6">
              <div class="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
              <div class="heading_container">
               <h2>${this.currentState.charAt(0).toUpperCase()+this.currentState.slice(1)} Exercise</h2>
              </div>
             ${this.getRender()}
              </div>
            </div> 
        </div>
      </div>
    </section>
    `}}yt(Pu,"styles",Dt`
  `);customElements.define("exercises-page",Pu);function Ar(n){return n=n||[],Array.isArray(n)?n:[n]}function gt(n){return`[Vaadin.Router] ${n}`}function Xg(n){if(typeof n!="object")return String(n);const t=Object.prototype.toString.call(n).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(n)}`:t}const Ir="module",Rr="nomodule",ss=[Ir,Rr];function Ta(n){if(!n.match(/.+\.[m]?js$/))throw new Error(gt(`Unsupported type for bundle "${n}": .js or .mjs expected.`))}function Cu(n){if(!n||!mt(n.path))throw new Error(gt('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=n.bundle,e=["component","redirect","bundle"];if(!le(n.action)&&!Array.isArray(n.children)&&!le(n.children)&&!Sr(t)&&!e.some(r=>mt(n[r])))throw new Error(gt(`Expected route config "${n.path}" to include either "${e.join('", "')}" or "action" function but none found.`));if(t)if(mt(t))Ta(t);else if(ss.some(r=>r in t))ss.forEach(r=>r in t&&Ta(t[r]));else throw new Error(gt('Expected route bundle to include either "'+Rr+'" or "'+Ir+'" keys, or both'));n.redirect&&["bundle","component"].forEach(r=>{r in n&&console.warn(gt(`Route config "${n.path}" has both "redirect" and "${r}" properties, and "redirect" will always override the latter. Did you mean to only use "${r}"?`))})}function wa(n){Ar(n).forEach(t=>Cu(t))}function Aa(n,t){let e=document.head.querySelector('script[src="'+n+'"][async]');return e||(e=document.createElement("script"),e.setAttribute("src",n),t===Ir?e.setAttribute("type",Ir):t===Rr&&e.setAttribute(Rr,""),e.async=!0),new Promise((r,i)=>{e.onreadystatechange=e.onload=s=>{e.__dynamicImportLoaded=!0,r(s)},e.onerror=s=>{e.parentNode&&e.parentNode.removeChild(e),i(s)},e.parentNode===null?document.head.appendChild(e):e.__dynamicImportLoaded&&r()})}function Yg(n){return mt(n)?Aa(n):Promise.race(ss.filter(t=>t in n).map(t=>Aa(n[t],t)))}function rn(n,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${n}`,{cancelable:n==="go",detail:t}))}function Sr(n){return typeof n=="object"&&!!n}function le(n){return typeof n=="function"}function mt(n){return typeof n=="string"}function bu(n){const t=new Error(gt(`Page not found (${n.pathname})`));return t.context=n,t.code=404,t}const ye=new class{};function Jg(n){const t=n.port,e=n.protocol,s=e==="http:"&&t==="80"||e==="https:"&&t==="443"?n.hostname:n.host;return`${e}//${s}`}function Ia(n){if(n.defaultPrevented||n.button!==0||n.shiftKey||n.ctrlKey||n.altKey||n.metaKey)return;let t=n.target;const e=n.composedPath?n.composedPath():n.path||[];for(let l=0;l<e.length;l++){const a=e[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||Jg(t))!==window.location.origin)return;const{pathname:i,search:s,hash:o}=t;rn("go",{pathname:i,search:s,hash:o})&&(n.preventDefault(),n&&n.type==="click"&&window.scrollTo(0,0))}const Zg={activate(){window.document.addEventListener("click",Ia)},inactivate(){window.document.removeEventListener("click",Ia)}},t_=/Trident/.test(navigator.userAgent);t_&&!le(window.PopStateEvent)&&(window.PopStateEvent=function(n,t){t=t||{};var e=document.createEvent("Event");return e.initEvent(n,!!t.bubbles,!!t.cancelable),e.state=t.state||null,e},window.PopStateEvent.prototype=window.Event.prototype);function Ra(n){if(n.state==="vaadin-router-ignore")return;const{pathname:t,search:e,hash:r}=window.location;rn("go",{pathname:t,search:e,hash:r})}const e_={activate(){window.addEventListener("popstate",Ra)},inactivate(){window.removeEventListener("popstate",Ra)}};var Ue=Mu,n_=oo,r_=a_,i_=xu,s_=ku,Vu="/",Du="./",o_=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function oo(n,t){for(var e=[],r=0,i=0,s="",o=t&&t.delimiter||Vu,l=t&&t.delimiters||Du,a=!1,c;(c=o_.exec(n))!==null;){var u=c[0],h=c[1],d=c.index;if(s+=n.slice(i,d),i=d+u.length,h){s+=h[1],a=!0;continue}var f="",E=n[i],S=c[2],T=c[3],M=c[4],L=c[5];if(!a&&s.length){var W=s.length-1;l.indexOf(s[W])>-1&&(f=s[W],s=s.slice(0,W))}s&&(e.push(s),s="",a=!1);var ft=f!==""&&E!==void 0&&E!==f,Wt=L==="+"||L==="*",Qt=L==="?"||L==="*",Be=f||o,si=T||M;e.push({name:S||r++,prefix:f,delimiter:Be,optional:Qt,repeat:Wt,partial:ft,pattern:si?l_(si):"[^"+xt(Be)+"]+?"})}return(s||i<n.length)&&e.push(s+n.substr(i)),e}function a_(n,t){return xu(oo(n,t))}function xu(n){for(var t=new Array(n.length),e=0;e<n.length;e++)typeof n[e]=="object"&&(t[e]=new RegExp("^(?:"+n[e].pattern+")$"));return function(r,i){for(var s="",o=i&&i.encode||encodeURIComponent,l=0;l<n.length;l++){var a=n[l];if(typeof a=="string"){s+=a;continue}var c=r?r[a.name]:void 0,u;if(Array.isArray(c)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(c.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<c.length;h++){if(u=o(c[h],a),!t[l].test(u))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(h===0?a.prefix:a.delimiter)+u}continue}if(typeof c=="string"||typeof c=="number"||typeof c=="boolean"){if(u=o(String(c),a),!t[l].test(u))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+u+'"');s+=a.prefix+u;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function xt(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function l_(n){return n.replace(/([=!:$/()])/g,"\\$1")}function Nu(n){return n&&n.sensitive?"":"i"}function c_(n,t){if(!t)return n;var e=n.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return n}function u_(n,t,e){for(var r=[],i=0;i<n.length;i++)r.push(Mu(n[i],t,e).source);return new RegExp("(?:"+r.join("|")+")",Nu(e))}function h_(n,t,e){return ku(oo(n,e),t,e)}function ku(n,t,e){e=e||{};for(var r=e.strict,i=e.start!==!1,s=e.end!==!1,o=xt(e.delimiter||Vu),l=e.delimiters||Du,a=[].concat(e.endsWith||[]).map(xt).concat("$").join("|"),c=i?"^":"",u=n.length===0,h=0;h<n.length;h++){var d=n[h];if(typeof d=="string")c+=xt(d),u=h===n.length-1&&l.indexOf(d[d.length-1])>-1;else{var f=d.repeat?"(?:"+d.pattern+")(?:"+xt(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;t&&t.push(d),d.optional?d.partial?c+=xt(d.prefix)+"("+f+")?":c+="(?:"+xt(d.prefix)+"("+f+"))?":c+=xt(d.prefix)+"("+f+")"}}return s?(r||(c+="(?:"+o+")?"),c+=a==="$"?"$":"(?="+a+")"):(r||(c+="(?:"+o+"(?="+a+"))?"),u||(c+="(?="+o+"|"+a+")")),new RegExp(c,Nu(e))}function Mu(n,t,e){return n instanceof RegExp?c_(n,t):Array.isArray(n)?u_(n,t,e):h_(n,t,e)}Ue.parse=n_;Ue.compile=r_;Ue.tokensToFunction=i_;Ue.tokensToRegExp=s_;const{hasOwnProperty:d_}=Object.prototype,os=new Map;os.set("|false",{keys:[],pattern:/(?:)/});function Sa(n){try{return decodeURIComponent(n)}catch{return n}}function f_(n,t,e,r,i){e=!!e;const s=`${n}|${e}`;let o=os.get(s);if(!o){const c=[];o={keys:c,pattern:Ue(n,c,{end:e,strict:n===""})},os.set(s,o)}const l=o.pattern.exec(t);if(!l)return null;const a=Object.assign({},i);for(let c=1;c<l.length;c++){const u=o.keys[c-1],h=u.name,d=l[c];(d!==void 0||!d_.call(a,h))&&(u.repeat?a[h]=d?d.split(u.delimiter).map(Sa):[]:a[h]=d&&Sa(d))}return{path:l[0],keys:(r||[]).concat(o.keys),params:a}}function Ou(n,t,e,r,i){let s,o,l=0,a=n.path||"";return a.charAt(0)==="/"&&(e&&(a=a.substr(1)),e=!0),{next(c){if(n===c)return{done:!0};const u=n.__children=n.__children||n.children;if(!s&&(s=f_(a,t,!u,r,i),s))return{done:!1,value:{route:n,keys:s.keys,params:s.params,path:s.path}};if(s&&u)for(;l<u.length;){if(!o){const d=u[l];d.parent=n;let f=s.path.length;f>0&&t.charAt(f)==="/"&&(f+=1),o=Ou(d,t.substr(f),e,s.keys,s.params)}const h=o.next(c);if(!h.done)return{done:!1,value:h.value};o=null,l++}return{done:!0}}}}function p_(n){if(le(n.route.action))return n.route.action(n)}function m_(n,t){let e=t;for(;e;)if(e=e.parent,e===n)return!0;return!1}function g_(n){let t=`Path '${n.pathname}' is not properly resolved due to an error.`;const e=(n.route||{}).path;return e&&(t+=` Resolution had failed on route: '${e}'`),t}function __(n,t){const{route:e,path:r}=t;if(e&&!e.__synthetic){const i={path:r,route:e};if(!n.chain)n.chain=[];else if(e.parent){let s=n.chain.length;for(;s--&&n.chain[s].route&&n.chain[s].route!==e.parent;)n.chain.pop()}n.chain.push(i)}}class An{constructor(t,e={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=e.baseUrl||"",this.errorHandler=e.errorHandler,this.resolveRoute=e.resolveRoute||p_,this.context=Object.assign({resolver:this},e.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){wa(t);const e=[...Ar(t)];this.root.__children=e}addRoutes(t){return wa(t),this.root.__children.push(...Ar(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const e=Object.assign({},this.context,mt(t)?{pathname:t}:t),r=Ou(this.root,this.__normalizePathname(e.pathname),this.baseUrl),i=this.resolveRoute;let s=null,o=null,l=e;function a(c,u=s.value.route,h){const d=h===null&&s.value.route;return s=o||r.next(d),o=null,!c&&(s.done||!m_(u,s.value.route))?(o=s,Promise.resolve(ye)):s.done?Promise.reject(bu(e)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},e,s.value),__(l,s.value),Promise.resolve(i(l)).then(f=>f!=null&&f!==ye?(l.result=f.result||f,l):a(c,u,f)))}return e.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(c=>{const u=g_(l);if(c?console.warn(u):c=new Error(u),c.context=c.context||l,c instanceof DOMException||(c.code=c.code||500),this.errorHandler)return l.result=this.errorHandler(c),l;throw c})}static __createUrl(t,e){return new URL(t,e)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const e=this.__effectiveBaseUrl,r=this.constructor.__createUrl(t,e).href;if(r.slice(0,e.length)===e)return r.slice(e.length)}}An.pathToRegexp=Ue;const{pathToRegexp:Pa}=An,Ca=new Map;function $u(n,t,e){const r=t.name||t.component;if(r&&(n.has(r)?n.get(r).push(t):n.set(r,[t])),Array.isArray(e))for(let i=0;i<e.length;i++){const s=e[i];s.parent=t,$u(n,s,s.__children||s.children)}}function ba(n,t){const e=n.get(t);if(e&&e.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return e&&e[0]}function Va(n){let t=n.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function y_(n,t={}){if(!(n instanceof An))throw new TypeError("An instance of Resolver is expected");const e=new Map;return(r,i)=>{let s=ba(e,r);if(!s&&(e.clear(),$u(e,n.root,n.root.__children),s=ba(e,r),!s))throw new Error(`Route "${r}" not found`);let o=Ca.get(s.fullPath);if(!o){let a=Va(s),c=s.parent;for(;c;){const f=Va(c);f&&(a=f.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),c=c.parent}const u=Pa.parse(a),h=Pa.tokensToFunction(u),d=Object.create(null);for(let f=0;f<u.length;f++)mt(u[f])||(d[u[f].name]=!0);o={toPath:h,keys:d},Ca.set(a,o),s.fullPath=a}let l=o.toPath(i,t)||"/";if(t.stringifyQueryParams&&i){const a={},c=Object.keys(i);for(let h=0;h<c.length;h++){const d=c[h];o.keys[d]||(a[d]=i[d])}const u=t.stringifyQueryParams(a);u&&(l+=u.charAt(0)==="?"?u:`?${u}`)}return l}}let Da=[];function v_(n){Da.forEach(t=>t.inactivate()),n.forEach(t=>t.activate()),Da=n}const E_=n=>{const t=getComputedStyle(n).getPropertyValue("animation-name");return t&&t!=="none"},T_=(n,t)=>{const e=()=>{n.removeEventListener("animationend",e),t()};n.addEventListener("animationend",e)};function xa(n,t){return n.classList.add(t),new Promise(e=>{if(E_(n)){const r=n.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;n.setAttribute("style",`position: absolute; ${i}`),T_(n,()=>{n.classList.remove(t),n.removeAttribute("style"),e()})}else n.classList.remove(t),e()})}const w_=256;function Si(n){return n!=null}function A_(n){const t=Object.assign({},n);return delete t.next,t}function pt({pathname:n="",search:t="",hash:e="",chain:r=[],params:i={},redirectFrom:s,resolver:o},l){const a=r.map(c=>c.route);return{baseUrl:o&&o.baseUrl||"",pathname:n,search:t,hash:e,routes:a,route:l||a.length&&a[a.length-1]||null,params:i,redirectFrom:s,getUrl:(c={})=>er(Mt.pathToRegexp.compile(Lu(a))(Object.assign({},i,c)),o)}}function Na(n,t){const e=Object.assign({},n.params);return{redirect:{pathname:t,from:n.pathname,params:e}}}function I_(n,t){t.location=pt(n);const e=n.chain.map(r=>r.route).indexOf(n.route);return n.chain[e].element=t,t}function tr(n,t,e){if(le(n))return n.apply(e,t)}function ka(n,t,e){return r=>{if(r&&(r.cancel||r.redirect))return r;if(e)return tr(e[n],t,e)}}function R_(n,t){if(!Array.isArray(n)&&!Sr(n))throw new Error(gt(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${n}`));t.__children=[];const e=Ar(n);for(let r=0;r<e.length;r++)Cu(e[r]),t.__children.push(e[r])}function Wn(n){if(n&&n.length){const t=n[0].parentNode;for(let e=0;e<n.length;e++)t.removeChild(n[e])}}function er(n,t){const e=t.__effectiveBaseUrl;return e?t.constructor.__createUrl(n.replace(/^\//,""),e).pathname:n}function Lu(n){return n.map(t=>t.path).reduce((t,e)=>e.length?t.replace(/\/$/,"")+"/"+e.replace(/^\//,""):t,"")}class Mt extends An{constructor(t,e){const r=document.head.querySelector("base"),i=r&&r.getAttribute("href");super([],Object.assign({baseUrl:i&&An.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},e)),this.resolveRoute=o=>this.__resolveRoute(o);const s=Mt.NavigationTrigger;Mt.setTriggers.apply(Mt,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=pt({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const e=t.route;let r=Promise.resolve();le(e.children)&&(r=r.then(()=>e.children(A_(t))).then(s=>{!Si(s)&&!le(e.children)&&(s=e.children),R_(s,e)}));const i={redirect:s=>Na(t,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return r.then(()=>{if(this.__isLatestRender(t))return tr(e.action,[t,i],e)}).then(s=>{if(Si(s)&&(s instanceof HTMLElement||s.redirect||s===ye))return s;if(mt(e.redirect))return i.redirect(e.redirect);if(e.bundle)return Yg(e.bundle).then(()=>{},()=>{throw new Error(gt(`Bundle not found: ${e.bundle}. Check if the file name is correct`))})}).then(s=>{if(Si(s))return s;if(mt(e.component))return i.component(e.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,e=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),e||this.__onNavigationEvent(),this.ready}render(t,e){const r=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},mt(t)?{pathname:t}:t,{__renderId:r});return this.ready=this.resolve(i).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=pt(s),e&&this.__updateBrowserHistory(s,r===1),rn("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const l=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),l.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(r===this.__lastStartedRenderId)throw e&&this.__updateBrowserHistory(i),Wn(this.__outlet&&this.__outlet.children),this.location=pt(Object.assign(i,{resolver:this})),rn("error",Object.assign({router:this,error:s},i)),s}),this.ready}__fullyResolveChain(t,e=t){return this.__findComponentContextAfterAllRedirects(e).then(r=>{const s=r!==e?r:t,l=er(Lu(r.chain),r.resolver)===r.pathname,a=(c,u=c.route,h)=>c.next(void 0,u,h).then(d=>d===null||d===ye?l?c:u.parent!==null?a(c,u.parent,d):d:d);return a(r).then(c=>{if(c===null||c===ye)throw bu(s);return c&&c!==ye&&c!==r?this.__fullyResolveChain(s,c):this.__amendWithOnBeforeCallbacks(r)})})}__findComponentContextAfterAllRedirects(t){const e=t.result;return e instanceof HTMLElement?(I_(t,e),Promise.resolve(t)):e.redirect?this.__redirect(e.redirect,t.__redirectCount,t.__renderId).then(r=>this.__findComponentContextAfterAllRedirects(r)):e instanceof Error?Promise.reject(e):Promise.reject(new Error(gt(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${Xg(e)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(e=>e===this.__previousContext||e===t?e:this.__fullyResolveChain(e))}__runOnBeforeCallbacks(t){const e=this.__previousContext||{},r=e.chain||[],i=t.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),l=a=>Na(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,r.length){for(let a=0;a<Math.min(r.length,i.length)&&!(r[a].route!==i[a].route||r[a].path!==i[a].path&&r[a].element!==i[a].element||!this.__isReusableElement(r[a].element,i[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=i.length===r.length&&t.__divergedChainIndex==i.length&&this.__isReusableElement(t.result,e.result),t.__skipAttach){for(let a=i.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,t,{prevent:o},r[a]);for(let a=0;a<i.length;a++)s=this.__runOnBeforeEnterCallbacks(s,t,{prevent:o,redirect:l},i[a]),r[a].element.location=pt(t,r[a].route)}else for(let a=r.length-1;a>=t.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,t,{prevent:o},r[a])}if(!t.__skipAttach)for(let a=0;a<i.length;a++)a<t.__divergedChainIndex?a<r.length&&r[a].element&&(r[a].element.location=pt(t,r[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,t,{prevent:o,redirect:l},i[a]),i[a].element&&(i[a].element.location=pt(t,i[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,e,r,i){const s=pt(e);return t.then(o=>{if(this.__isLatestRender(e))return ka("onBeforeLeave",[s,r,this],i.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(t,e,r,i){const s=pt(e,i.route);return t.then(o=>{if(this.__isLatestRender(e))return ka("onBeforeEnter",[s,r,this],i.element)(o)})}__isReusableElement(t,e){return t&&e?this.__createdByRouter.get(t)&&this.__createdByRouter.get(e)?t.localName===e.localName:t===e:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,e,r){if(e>w_)throw new Error(gt(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(e||0)+1,__renderId:r})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(gt(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:e="",hash:r=""},i){if(window.location.pathname!==t||window.location.search!==e||window.location.hash!==r){const s=i?"replaceState":"pushState";window.history[s](null,document.title,t+e+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,e){let r=this.__outlet;for(let i=0;i<t.__divergedChainIndex;i++){const s=e&&e.chain[i].element;if(s)if(s.parentNode===r)t.chain[i].element=s,r=s;else break}return r}__addAppearingContent(t,e){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(t,e);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter(s=>this.__addedByRouter.get(s)&&s!==t.result);let i=r;for(let s=t.__divergedChainIndex;s<t.chain.length;s++){const o=t.chain[s].element;o&&(i.appendChild(o),this.__addedByRouter.set(o,!0),i===r&&this.__appearingContent.push(o),i=o)}}__removeDisappearingContent(){this.__disappearingContent&&Wn(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Wn(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,e){if(e)for(let r=e.chain.length-1;r>=t.__divergedChainIndex&&this.__isLatestRender(t);r--){const i=e.chain[r].element;if(i)try{const s=pt(t);tr(i.onAfterLeave,[s,{},e.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&Wn(i.children)}}}__runOnAfterEnterCallbacks(t){for(let e=t.__divergedChainIndex;e<t.chain.length&&this.__isLatestRender(t);e++){const r=t.chain[e].element||{},i=pt(t,t.chain[e].route);tr(r.onAfterEnter,[i,{},t.resolver],r)}}__animateIfNeeded(t){const e=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],i=[],s=t.chain;let o;for(let l=s.length;l>0;l--)if(s[l-1].route.animate){o=s[l-1].route.animate;break}if(e&&r&&o){const l=Sr(o)&&o.leave||"leaving",a=Sr(o)&&o.enter||"entering";i.push(xa(e,l)),i.push(xa(r,a))}return Promise.all(i).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:e,search:r,hash:i}=t?t.detail:window.location;mt(this.__normalizePathname(e))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:e,search:r,hash:i},!0))}static setTriggers(...t){v_(t)}urlForName(t,e){return this.__urlForName||(this.__urlForName=y_(this)),er(this.__urlForName(t,e),this)}urlForPath(t,e){return er(Mt.pathToRegexp.compile(t)(e),this)}static go(t){const{pathname:e,search:r,hash:i}=mt(t)?this.__createUrl(t,"http://a"):t;return rn("go",{pathname:e,search:r,hash:i})}}const S_=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,nr=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function P_(){function n(){return!0}return Fu(n)}function C_(){try{return b_()?!0:V_()?nr?!D_():!P_():!1}catch{return!1}}function b_(){return localStorage.getItem("vaadin.developmentmode.force")}function V_(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function D_(){return!!(nr&&Object.keys(nr).map(t=>nr[t]).filter(t=>t.productionMode).length>0)}function Fu(n,t){if(typeof n!="function")return;const e=S_.exec(n.toString());if(e)try{n=new Function(e[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return n(t)}window.Vaadin=window.Vaadin||{};const Ma=function(n,t){if(window.Vaadin.developmentMode)return Fu(n,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=C_());function x_(){}const N_=function(){if(typeof Ma=="function")return Ma(x_)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});N_();Mt.NavigationTrigger={POPSTATE:e_,CLICK:Zg};window.addEventListener("load",()=>{new Mt(document.querySelector("main"),{baseUrl:"/records_gym/"}).setRoutes([{path:"/",component:"home-page"},{path:"/exercises-page",component:"exercises-page"},{path:"/exercises-page/add",component:"exercises-page"},{path:"/exercises-page/modify",component:"exercises-page"},{path:"/exercises-page/delete",component:"exercises-page"},{path:"/trainers",component:"my-trainers"}])});
