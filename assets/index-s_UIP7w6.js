var Eu=Object.defineProperty;var Au=(e,t,n)=>t in e?Eu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Zt=(e,t,n)=>(Au(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nn=globalThis,bi=Nn.ShadowRoot&&(Nn.ShadyCSS===void 0||Nn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vi=Symbol(),ys=new WeakMap;let $o=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Vi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(bi&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=ys.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ys.set(n,t))}return t}toString(){return this.cssText}};const Tu=e=>new $o(typeof e=="string"?e:e+"",void 0,Vi),on=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,s)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new $o(n,e,Vi)},wu=(e,t)=>{if(bi)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=Nn.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},vs=bi?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return Tu(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Iu,defineProperty:Ru,getOwnPropertyDescriptor:Pu,getOwnPropertyNames:Su,getOwnPropertySymbols:Cu,getPrototypeOf:bu}=Object,St=globalThis,Es=St.trustedTypes,Vu=Es?Es.emptyScript:"",kr=St.reactiveElementPolyfillSupport,De=(e,t)=>e,ei={toAttribute(e,t){switch(t){case Boolean:e=e?Vu:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Lo=(e,t)=>!Iu(e,t),As={attribute:!0,type:String,converter:ei,reflect:!1,hasChanged:Lo};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),St.litPropertyMetadata??(St.litPropertyMetadata=new WeakMap);let ee=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=As){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&Ru(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:s}=Pu(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){const l=i==null?void 0:i.call(this);s.call(this,o),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??As}static _$Ei(){if(this.hasOwnProperty(De("elementProperties")))return;const t=bu(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(De("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(De("properties"))){const n=this.properties,r=[...Su(n),...Cu(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(vs(i))}else t!==void 0&&n.push(vs(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$E_)==null||n.delete(t)}_$ES(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wu(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n){var s;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const o=(((s=r.converter)==null?void 0:s.toAttribute)!==void 0?r.converter:ei).toAttribute(n,r.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,n){var s;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=r.getPropertyOptions(i),l=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)==null?void 0:s.fromAttribute)!==void 0?o.converter:ei;this._$Em=i,this[i]=l.fromAttribute(n,o.type),this._$Em=null}}requestUpdate(t,n,r,i=!1,s){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Lo)(i?s:this[t],n))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.C(s,this[s],o)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$E_)==null||r.forEach(i=>{var s;return(s=i.hostUpdate)==null?void 0:s.call(i)}),this.update(n)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$E_)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(t){}firstUpdated(t){}};ee.elementStyles=[],ee.shadowRootOptions={mode:"open"},ee[De("elementProperties")]=new Map,ee[De("finalized")]=new Map,kr==null||kr({ReactiveElement:ee}),(St.reactiveElementVersions??(St.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=globalThis,Ln=Ne.trustedTypes,Ts=Ln?Ln.createPolicy("lit-html",{createHTML:e=>e}):void 0,Fo="$lit$",Rt=`lit$${(Math.random()+"").slice(9)}$`,Uo="?"+Rt,Du=`<${Uo}>`,zt=document,Fe=()=>zt.createComment(""),Ue=e=>e===null||typeof e!="object"&&typeof e!="function",Bo=Array.isArray,Nu=e=>Bo(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",xr=`[ 	
\f\r]`,Ie=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ws=/-->/g,Is=/>/g,xt=RegExp(`>|${xr}(?:([^\\s"'>=/]+)(${xr}*=${xr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rs=/'/g,Ps=/"/g,jo=/^(?:script|style|textarea|title)$/i,Ou=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),an=Ou(1),le=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Ss=new WeakMap,Lt=zt.createTreeWalker(zt,129);function Ho(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ts!==void 0?Ts.createHTML(t):t}const Mu=(e,t)=>{const n=e.length-1,r=[];let i,s=t===2?"<svg>":"",o=Ie;for(let l=0;l<n;l++){const a=e[l];let u,c,h=-1,d=0;for(;d<a.length&&(o.lastIndex=d,c=o.exec(a),c!==null);)d=o.lastIndex,o===Ie?c[1]==="!--"?o=ws:c[1]!==void 0?o=Is:c[2]!==void 0?(jo.test(c[2])&&(i=RegExp("</"+c[2],"g")),o=xt):c[3]!==void 0&&(o=xt):o===xt?c[0]===">"?(o=i??Ie,h=-1):c[1]===void 0?h=-2:(h=o.lastIndex-c[2].length,u=c[1],o=c[3]===void 0?xt:c[3]==='"'?Ps:Rs):o===Ps||o===Rs?o=xt:o===ws||o===Is?o=Ie:(o=xt,i=void 0);const p=o===xt&&e[l+1].startsWith("/>")?" ":"";s+=o===Ie?a+Du:h>=0?(r.push(u),a.slice(0,h)+Fo+a.slice(h)+Rt+p):a+Rt+(h===-2?l:p)}return[Ho(e,s+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};let ni=class qo{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let s=0,o=0;const l=t.length-1,a=this.parts,[u,c]=Mu(t,n);if(this.el=qo.createElement(u,r),Lt.currentNode=this.el.content,n===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Lt.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(Fo)){const d=c[o++],p=i.getAttribute(h).split(Rt),A=/([.?@])?(.*)/.exec(d);a.push({type:1,index:s,name:A[2],strings:p,ctor:A[1]==="."?xu:A[1]==="?"?$u:A[1]==="@"?Lu:ur}),i.removeAttribute(h)}else h.startsWith(Rt)&&(a.push({type:6,index:s}),i.removeAttribute(h));if(jo.test(i.tagName)){const h=i.textContent.split(Rt),d=h.length-1;if(d>0){i.textContent=Ln?Ln.emptyScript:"";for(let p=0;p<d;p++)i.append(h[p],Fe()),Lt.nextNode(),a.push({type:2,index:++s});i.append(h[d],Fe())}}}else if(i.nodeType===8)if(i.data===Uo)a.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(Rt,h+1))!==-1;)a.push({type:7,index:s}),h+=Rt.length-1}s++}}static createElement(t,n){const r=zt.createElement("template");return r.innerHTML=t,r}};function ue(e,t,n=e,r){var o,l;if(t===le)return t;let i=r!==void 0?(o=n._$Co)==null?void 0:o[r]:n._$Cl;const s=Ue(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==s&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),s===void 0?i=void 0:(i=new s(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(t=ue(e,i._$AS(e,t.values),i,r)),t}let ku=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??zt).importNode(n,!0);Lt.currentNode=i;let s=Lt.nextNode(),o=0,l=0,a=r[0];for(;a!==void 0;){if(o===a.index){let u;a.type===2?u=new Di(s,s.nextSibling,this,t):a.type===1?u=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(u=new Fu(s,this,t)),this._$AV.push(u),a=r[++l]}o!==(a==null?void 0:a.index)&&(s=Lt.nextNode(),o++)}return Lt.currentNode=zt,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}},Di=class zo{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=ue(this,t,n),Ue(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==le&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Nu(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==x&&Ue(this._$AH)?this._$AA.nextSibling.data=t:this.$(zt.createTextNode(t)),this._$AH=t}g(t){var s;const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=ni.createElement(Ho(r.h,r.h[0]),this.options)),r);if(((s=this._$AH)==null?void 0:s._$AD)===i)this._$AH.p(n);else{const o=new ku(i,this),l=o.u(this.options);o.p(n),this.$(l),this._$AH=o}}_$AC(t){let n=Ss.get(t.strings);return n===void 0&&Ss.set(t.strings,n=new ni(t)),n}T(t){Bo(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const s of t)i===n.length?n.push(r=new zo(this.k(Fe()),this.k(Fe()),this,this.options)):r=n[i],r._$AI(s),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},ur=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,s){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=x}_$AI(t,n=this,r,i){const s=this.strings;let o=!1;if(s===void 0)t=ue(this,t,n,0),o=!Ue(t)||t!==this._$AH&&t!==le,o&&(this._$AH=t);else{const l=t;let a,u;for(t=s[0],a=0;a<s.length-1;a++)u=ue(this,l[r+a],n,a),u===le&&(u=this._$AH[a]),o||(o=!Ue(u)||u!==this._$AH[a]),u===x?t=x:t!==x&&(t+=(u??"")+s[a+1]),this._$AH[a]=u}o&&!i&&this.O(t)}O(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},xu=class extends ur{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===x?void 0:t}},$u=class extends ur{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}},Lu=class extends ur{constructor(t,n,r,i,s){super(t,n,r,i,s),this.type=5}_$AI(t,n=this){if((t=ue(this,t,n,0)??x)===le)return;const r=this._$AH,i=t===x&&r!==x||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==x&&(r===x||i);i&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}};class Fu{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ue(this,t)}}const $r=Ne.litHtmlPolyfillSupport;$r==null||$r(ni,Di),(Ne.litHtmlVersions??(Ne.litHtmlVersions=[])).push("3.1.0");const Uu=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const s=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new Di(t.insertBefore(Fe(),s),s,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vt extends ee{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Uu(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return le}}var xo;vt._$litElement$=!0,vt.finalized=!0,(xo=globalThis.litElementHydrateSupport)==null||xo.call(globalThis,{LitElement:vt});const Lr=globalThis.litElementPolyfillSupport;Lr==null||Lr({LitElement:vt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");class Go extends vt{createRenderRoot(){return this}render(){const t="/records_gym";return an`
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
            <ul class="navbar-nav  ">
                <li class="nav-item active">
                <a class="nav-link" href="${t}/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item ">
                <a class="nav-link" href="${t}/exercises-page">Exercises</a>
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
    
    `}}Zt(Go,"styles",on``);customElements.define("menu-gym",Go);class Ko extends vt{createRenderRoot(){return this}render(){return an`
    <header class="header_section">
        <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
            <span>
                Neogym
            </span>
            </a>
            <menu-gym></menu-gym>
        </nav>
        </div>
  </header>
    `}}Zt(Ko,"styles",on`

  `);customElements.define("header-gym",Ko);class Wo extends vt{createRenderRoot(){return this}render(){return an`
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
    `}}Zt(Wo,"styles",on`
  `);customElements.define("home-page",Wo);var Cs={};/**
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
 */const Qo=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Bu=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],l=e[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Xo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,l=o?e[i+1]:0,a=i+2<e.length,u=a?e[i+2]:0,c=s>>2,h=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,p=u&63;a||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qo(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Bu(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||u==null||h==null)throw new ju;const d=s<<2|l>>4;if(r.push(d),u!==64){const p=l<<4&240|u>>2;if(r.push(p),h!==64){const A=u<<6&192|h;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ju extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hu=function(e){const t=Qo(e);return Xo.encodeByteArray(t,!0)},Fn=function(e){return Hu(e).replace(/\./g,"")},qu=function(e){try{return Xo.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function zu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gu=()=>zu().__FIREBASE_DEFAULTS__,Ku=()=>{if(typeof process>"u"||typeof Cs>"u")return;const e=Cs.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Wu=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&qu(e[1]);return t&&JSON.parse(t)},Yo=()=>{try{return Gu()||Ku()||Wu()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Qu=e=>{var t,n;return(n=(t=Yo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Xu=e=>{const t=Qu(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Jo=()=>{var e;return(e=Yo())===null||e===void 0?void 0:e.config};/**
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
 */class Yu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Ju(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[Fn(JSON.stringify(n)),Fn(JSON.stringify(o)),l].join(".")}function Zu(){try{return typeof indexedDB=="object"}catch{return!1}}function tc(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const ec="FirebaseError";class ge extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ec,Object.setPrototypeOf(this,ge.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?nc(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ge(i,l,r)}}function nc(e,t){return e.replace(rc,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const rc=/\{\$([^}]+)}/g;function ri(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(bs(s)&&bs(o)){if(!ri(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function bs(e){return e!==null&&typeof e=="object"}/**
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
 */function Be(e){return e&&e._delegate?e._delegate:e}class je{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const $t="[DEFAULT]";/**
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
 */class ic{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Yu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(oc(t))try{this.getOrInitializeService({instanceIdentifier:$t})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=$t){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=$t){return this.instances.has(t)}getOptions(t=$t){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sc(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=$t){return this.component?this.component.multipleInstances?t:$t:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sc(e){return e===$t?void 0:e}function oc(e){return e.instantiationMode==="EAGER"}/**
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
 */class ac{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ic(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var I;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(I||(I={}));const lc={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},uc=I.INFO,cc={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},hc=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=cc[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ta{constructor(t){this.name=t,this._logLevel=uc,this._logHandler=hc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in I))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?lc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...t),this._logHandler(this,I.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...t),this._logHandler(this,I.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,I.INFO,...t),this._logHandler(this,I.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,I.WARN,...t),this._logHandler(this,I.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...t),this._logHandler(this,I.ERROR,...t)}}const dc=(e,t)=>t.some(n=>e instanceof n);let Vs,Ds;function fc(){return Vs||(Vs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pc(){return Ds||(Ds=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ea=new WeakMap,ii=new WeakMap,na=new WeakMap,Fr=new WeakMap,Ni=new WeakMap;function mc(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Ct(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&ea.set(n,e)}).catch(()=>{}),Ni.set(t,e),t}function gc(e){if(ii.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});ii.set(e,t)}let si={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ii.get(e);if(t==="objectStoreNames")return e.objectStoreNames||na.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function _c(e){si=e(si)}function yc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ur(this),t,...n);return na.set(r,t.sort?t.sort():[t]),Ct(r)}:pc().includes(e)?function(...t){return e.apply(Ur(this),t),Ct(ea.get(this))}:function(...t){return Ct(e.apply(Ur(this),t))}}function vc(e){return typeof e=="function"?yc(e):(e instanceof IDBTransaction&&gc(e),dc(e,fc())?new Proxy(e,si):e)}function Ct(e){if(e instanceof IDBRequest)return mc(e);if(Fr.has(e))return Fr.get(e);const t=vc(e);return t!==e&&(Fr.set(e,t),Ni.set(t,e)),t}const Ur=e=>Ni.get(e);function Ec(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=Ct(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Ct(o.result),a.oldVersion,a.newVersion,Ct(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Ac=["get","getKey","getAll","getAllKeys","count"],Tc=["put","add","delete","clear"],Br=new Map;function Ns(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Br.get(t))return Br.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Tc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ac.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Br.set(t,s),s}_c(e=>({...e,get:(t,n,r)=>Ns(t,n)||e.get(t,n,r),has:(t,n)=>!!Ns(t,n)||e.has(t,n)}));/**
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
 */class wc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ic(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ic(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const oi="@firebase/app",Os="0.9.23";/**
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
 */const Gt=new ta("@firebase/app"),Rc="@firebase/app-compat",Pc="@firebase/analytics-compat",Sc="@firebase/analytics",Cc="@firebase/app-check-compat",bc="@firebase/app-check",Vc="@firebase/auth",Dc="@firebase/auth-compat",Nc="@firebase/database",Oc="@firebase/database-compat",Mc="@firebase/functions",kc="@firebase/functions-compat",xc="@firebase/installations",$c="@firebase/installations-compat",Lc="@firebase/messaging",Fc="@firebase/messaging-compat",Uc="@firebase/performance",Bc="@firebase/performance-compat",jc="@firebase/remote-config",Hc="@firebase/remote-config-compat",qc="@firebase/storage",zc="@firebase/storage-compat",Gc="@firebase/firestore",Kc="@firebase/firestore-compat",Wc="firebase",Qc="10.6.0";/**
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
 */const ai="[DEFAULT]",Xc={[oi]:"fire-core",[Rc]:"fire-core-compat",[Sc]:"fire-analytics",[Pc]:"fire-analytics-compat",[bc]:"fire-app-check",[Cc]:"fire-app-check-compat",[Vc]:"fire-auth",[Dc]:"fire-auth-compat",[Nc]:"fire-rtdb",[Oc]:"fire-rtdb-compat",[Mc]:"fire-fn",[kc]:"fire-fn-compat",[xc]:"fire-iid",[$c]:"fire-iid-compat",[Lc]:"fire-fcm",[Fc]:"fire-fcm-compat",[Uc]:"fire-perf",[Bc]:"fire-perf-compat",[jc]:"fire-rc",[Hc]:"fire-rc-compat",[qc]:"fire-gcs",[zc]:"fire-gcs-compat",[Gc]:"fire-fst",[Kc]:"fire-fst-compat","fire-js":"fire-js",[Wc]:"fire-js-all"};/**
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
 */const Un=new Map,li=new Map;function Yc(e,t){try{e.container.addComponent(t)}catch(n){Gt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Bn(e){const t=e.name;if(li.has(t))return Gt.debug(`There were multiple attempts to register component ${t}.`),!1;li.set(t,e);for(const n of Un.values())Yc(n,e);return!0}function Jc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Zc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bt=new Zo("app","Firebase",Zc);/**
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
 */class th{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new je("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
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
 */const eh=Qc;function ra(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ai,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw bt.create("bad-app-name",{appName:String(i)});if(n||(n=Jo()),!n)throw bt.create("no-options");const s=Un.get(i);if(s){if(ri(n,s.options)&&ri(r,s.config))return s;throw bt.create("duplicate-app",{appName:i})}const o=new ac(i);for(const a of li.values())o.addComponent(a);const l=new th(n,r,o);return Un.set(i,l),l}function nh(e=ai){const t=Un.get(e);if(!t&&e===ai&&Jo())return ra();if(!t)throw bt.create("no-app",{appName:e});return t}function se(e,t,n){var r;let i=(r=Xc[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Gt.warn(l.join(" "));return}Bn(new je(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const rh="firebase-heartbeat-database",ih=1,He="firebase-heartbeat-store";let jr=null;function ia(){return jr||(jr=Ec(rh,ih,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(He)}}}).catch(e=>{throw bt.create("idb-open",{originalErrorMessage:e.message})})),jr}async function sh(e){try{return await(await ia()).transaction(He).objectStore(He).get(sa(e))}catch(t){if(t instanceof ge)Gt.warn(t.message);else{const n=bt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Gt.warn(n.message)}}}async function Ms(e,t){try{const r=(await ia()).transaction(He,"readwrite");await r.objectStore(He).put(t,sa(e)),await r.done}catch(n){if(n instanceof ge)Gt.warn(n.message);else{const r=bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gt.warn(r.message)}}}function sa(e){return`${e.name}!${e.options.appId}`}/**
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
 */const oh=1024,ah=30*24*60*60*1e3;class lh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ch(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ks();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=ah}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ks(),{heartbeatsToSend:r,unsentEntries:i}=uh(this._heartbeatsCache.heartbeats),s=Fn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ks(){return new Date().toISOString().substring(0,10)}function uh(e,t=oh){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),xs(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xs(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ch{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zu()?tc().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ms(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ms(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function xs(e){return Fn(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function hh(e){Bn(new je("platform-logger",t=>new wc(t),"PRIVATE")),Bn(new je("heartbeat",t=>new lh(t),"PRIVATE")),se(oi,Os,e),se(oi,Os,"esm2017"),se("fire-js","")}hh("");var dh="firebase",fh="10.6.0";/**
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
 */se(dh,fh,"app");var ph=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,Oi=Oi||{},v=ph||self;function cr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function ln(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function mh(e){return Object.prototype.hasOwnProperty.call(e,Hr)&&e[Hr]||(e[Hr]=++gh)}var Hr="closure_uid_"+(1e9*Math.random()>>>0),gh=0;function _h(e,t,n){return e.call.apply(e.bind,arguments)}function yh(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function J(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?J=_h:J=yh,J.apply(null,arguments)}function Tn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function B(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),l=2;l<arguments.length;l++)o[l-2]=arguments[l];return t.prototype[i].apply(r,o)}}function Mt(){this.s=this.s,this.o=this.o}var vh=0;Mt.prototype.s=!1;Mt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),vh!=0)&&mh(this)};Mt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const oa=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Mi(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function $s(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(cr(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Z.prototype.h=function(){this.defaultPrevented=!0};var Eh=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{v.addEventListener("test",()=>{},t),v.removeEventListener("test",()=>{},t)}catch{}return e}();function qe(e){return/^[\s\xa0]*$/.test(e)}function hr(){var e=v.navigator;return e&&(e=e.userAgent)?e:""}function dt(e){return hr().indexOf(e)!=-1}function ki(e){return ki[" "](e),e}ki[" "]=function(){};function Ah(e,t){var n=fd;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Th=dt("Opera"),ce=dt("Trident")||dt("MSIE"),aa=dt("Edge"),ui=aa||ce,la=dt("Gecko")&&!(hr().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge"))&&!(dt("Trident")||dt("MSIE"))&&!dt("Edge"),wh=hr().toLowerCase().indexOf("webkit")!=-1&&!dt("Edge");function ua(){var e=v.document;return e?e.documentMode:void 0}var ci;t:{var qr="",zr=function(){var e=hr();if(la)return/rv:([^\);]+)(\)|;)/.exec(e);if(aa)return/Edge\/([\d\.]+)/.exec(e);if(ce)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(wh)return/WebKit\/(\S+)/.exec(e);if(Th)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(zr&&(qr=zr?zr[1]:""),ce){var Gr=ua();if(Gr!=null&&Gr>parseFloat(qr)){ci=String(Gr);break t}}ci=qr}var hi;if(v.document&&ce){var Ls=ua();hi=Ls||parseInt(ci,10)||void 0}else hi=void 0;var Ih=hi;function ze(e,t){if(Z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(la){t:{try{ki(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Rh[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ze.$.h.call(this)}}B(ze,Z);var Rh={2:"touch",3:"pen",4:"mouse"};ze.prototype.h=function(){ze.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var un="closure_listenable_"+(1e6*Math.random()|0),Ph=0;function Sh(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++Ph,this.fa=this.ia=!1}function dr(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function xi(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Ch(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function ca(e){const t={};for(const n in e)t[n]=e[n];return t}const Fs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ha(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<Fs.length;s++)n=Fs[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function fr(e){this.src=e,this.g={},this.h=0}fr.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=fi(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new Sh(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function di(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=oa(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(dr(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function fi(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var $i="closure_lm_"+(1e6*Math.random()|0),Kr={};function da(e,t,n,r,i){if(r&&r.once)return pa(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)da(e,t[s],n,r,i);return null}return n=Ui(n),e&&e[un]?e.O(t,n,ln(r)?!!r.capture:!!r,i):fa(e,t,n,!1,r,i)}function fa(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=ln(i)?!!i.capture:!!i,l=Fi(e);if(l||(e[$i]=l=new fr(e)),n=l.add(t,n,r,o,s),n.proxy)return n;if(r=bh(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Eh||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ga(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function bh(){function e(n){return t.call(e.src,e.listener,n)}const t=Vh;return e}function pa(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)pa(e,t[s],n,r,i);return null}return n=Ui(n),e&&e[un]?e.P(t,n,ln(r)?!!r.capture:!!r,i):fa(e,t,n,!0,r,i)}function ma(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)ma(e,t[s],n,r,i);else r=ln(r)?!!r.capture:!!r,n=Ui(n),e&&e[un]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=fi(s,n,r,i),-1<n&&(dr(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=Fi(e))&&(t=e.g[t.toString()],e=-1,t&&(e=fi(t,n,r,i)),(n=-1<e?t[e]:null)&&Li(n))}function Li(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[un])di(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ga(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Fi(t))?(di(n,e),n.h==0&&(n.src=null,t[$i]=null)):dr(e)}}}function ga(e){return e in Kr?Kr[e]:Kr[e]="on"+e}function Vh(e,t){if(e.fa)e=!0;else{t=new ze(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Li(e),e=n.call(r,t)}return e}function Fi(e){return e=e[$i],e instanceof fr?e:null}var Wr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ui(e){return typeof e=="function"?e:(e[Wr]||(e[Wr]=function(t){return e.handleEvent(t)}),e[Wr])}function F(){Mt.call(this),this.i=new fr(this),this.S=this,this.J=null}B(F,Mt);F.prototype[un]=!0;F.prototype.removeEventListener=function(e,t,n,r){ma(this,e,t,n,r)};function W(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Z(t,e);else if(t instanceof Z)t.target=t.target||e;else{var i=t;t=new Z(r,e),ha(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=wn(o,r,!0,t)&&i}if(o=t.g=e,i=wn(o,r,!0,t)&&i,i=wn(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=wn(o,r,!1,t)&&i}F.prototype.N=function(){if(F.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)dr(n[r]);delete e.g[t],e.h--}}this.J=null};F.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};F.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function wn(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var l=o.listener,a=o.la||o.src;o.ia&&di(e.i,o),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var Bi=v.JSON.stringify;class Dh{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Nh(){var e=ji;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Oh{constructor(){this.h=this.g=null}add(t,n){const r=_a.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var _a=new Dh(()=>new Mh,e=>e.reset());class Mh{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kh(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function xh(e){v.setTimeout(()=>{throw e},0)}let Ge,Ke=!1,ji=new Oh,ya=()=>{const e=v.Promise.resolve(void 0);Ge=()=>{e.then($h)}};var $h=()=>{for(var e;e=Nh();){try{e.h.call(e.g)}catch(n){xh(n)}var t=_a;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ke=!1};function pr(e,t){F.call(this),this.h=e||1,this.g=t||v,this.j=J(this.qb,this),this.l=Date.now()}B(pr,F);g=pr.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),W(this,"tick"),this.ga&&(Hi(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Hi(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}g.N=function(){pr.$.N.call(this),Hi(this),delete this.g};function qi(e,t,n){if(typeof e=="function")n&&(e=J(e,n));else if(e&&typeof e.handleEvent=="function")e=J(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(e,t||0)}function va(e){e.g=qi(()=>{e.g=null,e.i&&(e.i=!1,va(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Lh extends Mt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:va(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(e){Mt.call(this),this.h=e,this.g={}}B(We,Mt);var Us=[];function Ea(e,t,n,r){Array.isArray(n)||(n&&(Us[0]=n.toString()),n=Us);for(var i=0;i<n.length;i++){var s=da(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Aa(e){xi(e.g,function(t,n){this.g.hasOwnProperty(n)&&Li(t)},e),e.g={}}We.prototype.N=function(){We.$.N.call(this),Aa(this)};We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mr(){this.g=!0}mr.prototype.Ea=function(){this.g=!1};function Fh(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",l=s.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Uh(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function re(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+jh(e,n)+(r?" "+r:"")})}function Bh(e,t){e.info(function(){return"TIMEOUT: "+t})}mr.prototype.info=function(){};function jh(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Bi(n)}catch{return t}}var Yt={},Bs=null;function gr(){return Bs=Bs||new F}Yt.Ta="serverreachability";function Ta(e){Z.call(this,Yt.Ta,e)}B(Ta,Z);function Qe(e){const t=gr();W(t,new Ta(t))}Yt.STAT_EVENT="statevent";function wa(e,t){Z.call(this,Yt.STAT_EVENT,e),this.stat=t}B(wa,Z);function et(e){const t=gr();W(t,new wa(t,e))}Yt.Ua="timingevent";function Ia(e,t){Z.call(this,Yt.Ua,e),this.size=t}B(Ia,Z);function cn(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){e()},t)}var _r={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ra={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zi(){}zi.prototype.h=null;function js(e){return e.h||(e.h=e.i())}function Pa(){}var hn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Gi(){Z.call(this,"d")}B(Gi,Z);function Ki(){Z.call(this,"c")}B(Ki,Z);var pi;function yr(){}B(yr,zi);yr.prototype.g=function(){return new XMLHttpRequest};yr.prototype.i=function(){return{}};pi=new yr;function dn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new We(this),this.P=Hh,e=ui?125:void 0,this.V=new pr(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Sa}function Sa(){this.i=null,this.g="",this.h=!1}var Hh=45e3,mi={},jn={};g=dn.prototype;g.setTimeout=function(e){this.P=e};function gi(e,t,n){e.L=1,e.v=Er(Tt(t)),e.s=n,e.S=!0,Ca(e,null)}function Ca(e,t){e.G=Date.now(),fn(e),e.A=Tt(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),xa(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Sa,e.g=rl(e.l,n?t:null,!e.s),0<e.O&&(e.M=new Lh(J(e.Pa,e,e.g),e.O)),Ea(e.U,e.g,"readystatechange",e.nb),t=e.I?ca(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Qe(),Fh(e.j,e.u,e.A,e.m,e.W,e.s)}g.nb=function(e){e=e.target;const t=this.M;t&&ft(e)==3?t.l():this.Pa(e)};g.Pa=function(e){try{if(e==this.g)t:{const c=ft(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||ui||this.g&&(this.h.h||this.g.ja()||Gs(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?Qe(3):Qe(2)),vr(this);var n=this.g.da();this.ca=n;e:if(ba(this)){var r=Gs(this.g);e="";var i=r.length,s=ft(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ft(this),Oe(this);var o="";break e}this.h.i=new v.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Uh(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qe(l)){var u=l;break e}}u=null}if(n=u)re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_i(this,n);else{this.i=!1,this.o=3,et(12),Ft(this),Oe(this);break t}}this.S?(Va(this,c,o),ui&&this.i&&c==3&&(Ea(this.U,this.V,"tick",this.mb),this.V.start())):(re(this.j,this.m,o,null),_i(this,o)),c==4&&Ft(this),this.i&&!this.J&&(c==4?Za(this.l,this):(this.i=!1,fn(this)))}else cd(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,et(12)):(this.o=0,et(13)),Ft(this),Oe(this)}}}catch{}finally{}};function ba(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Va(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=qh(e,n),i==jn){t==4&&(e.o=4,et(14),r=!1),re(e.j,e.m,null,"[Incomplete Response]");break}else if(i==mi){e.o=4,et(15),re(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else re(e.j,e.m,i,null),_i(e,i);ba(e)&&i!=jn&&i!=mi&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,et(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zi(t),t.M=!0,et(11))):(re(e.j,e.m,n,"[Invalid Chunked Response]"),Ft(e),Oe(e))}g.mb=function(){if(this.g){var e=ft(this.g),t=this.g.ja();this.C<t.length&&(vr(this),Va(this,e,t),this.i&&e!=4&&fn(this))}};function qh(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?jn:(n=Number(t.substring(n,r)),isNaN(n)?mi:(r+=1,r+n>t.length?jn:(t=t.slice(r,r+n),e.C=r+n,t)))}g.cancel=function(){this.J=!0,Ft(this)};function fn(e){e.Y=Date.now()+e.P,Da(e,e.P)}function Da(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=cn(J(e.lb,e),t)}function vr(e){e.B&&(v.clearTimeout(e.B),e.B=null)}g.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(Bh(this.j,this.A),this.L!=2&&(Qe(),et(17)),Ft(this),this.o=2,Oe(this)):Da(this,this.Y-e)};function Oe(e){e.l.H==0||e.J||Za(e.l,e)}function Ft(e){vr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Hi(e.V),Aa(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function _i(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||yi(n.i,e))){if(!e.K&&yi(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)zn(n),wr(n);else break t;Ji(n),et(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=cn(J(n.ib,n),6e3));if(1>=Fa(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ut(n,11)}else if((e.K||n.g==e)&&zn(n),!qe(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=e.g;if(p){const A=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(A){var s=r.i;s.g||A.indexOf("spdy")==-1&&A.indexOf("quic")==-1&&A.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Wi(s,s.h),s.h=null))}if(r.F){const C=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(r.Da=C,b(r.I,r.F,C))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=nl(r,r.J?r.pa:null,r.Y),o.K){Ua(r.i,o);var l=o,a=r.L;a&&l.setTimeout(a),l.B&&(vr(l),fn(l)),r.g=o}else Ya(r);0<n.j.length&&Ir(n)}else u[0]!="stop"&&u[0]!="close"||Ut(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ut(n,7):Yi(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Qe(4)}catch{}}function zh(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(cr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Gh(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(cr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Na(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(cr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Gh(e),r=zh(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var Oa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kh(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function jt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof jt){this.h=e.h,Hn(this,e.j),this.s=e.s,this.g=e.g,qn(this,e.m),this.l=e.l;var t=e.i,n=new Xe;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Hs(this,n),this.o=e.o}else e&&(t=String(e).match(Oa))?(this.h=!1,Hn(this,t[1]||"",!0),this.s=be(t[2]||""),this.g=be(t[3]||"",!0),qn(this,t[4]),this.l=be(t[5]||"",!0),Hs(this,t[6]||"",!0),this.o=be(t[7]||"")):(this.h=!1,this.i=new Xe(null,this.h))}jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ve(t,qs,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Ve(t,qs,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Ve(n,n.charAt(0)=="/"?Xh:Qh,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Ve(n,Jh)),e.join("")};function Tt(e){return new jt(e)}function Hn(e,t,n){e.j=n?be(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function qn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Hs(e,t,n){t instanceof Xe?(e.i=t,Zh(e.i,e.h)):(n||(t=Ve(t,Yh)),e.i=new Xe(t,e.h))}function b(e,t,n){e.i.set(t,n)}function Er(e){return b(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function be(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ve(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Wh),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Wh(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var qs=/[#\/\?@]/g,Qh=/[#\?:]/g,Xh=/[#\?]/g,Yh=/[#\?@]/g,Jh=/#/g;function Xe(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function kt(e){e.g||(e.g=new Map,e.h=0,e.i&&Kh(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=Xe.prototype;g.add=function(e,t){kt(this),this.i=null,e=_e(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Ma(e,t){kt(e),t=_e(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ka(e,t){return kt(e),t=_e(e,t),e.g.has(t)}g.forEach=function(e,t){kt(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};g.ta=function(){kt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};g.Z=function(e){kt(this);let t=[];if(typeof e=="string")ka(this,e)&&(t=t.concat(this.g.get(_e(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return kt(this),this.i=null,e=_e(this,e),ka(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function xa(e,t,n){Ma(e,t),0<n.length&&(e.i=null,e.g.set(_e(e,t),Mi(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function _e(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Zh(e,t){t&&!e.j&&(kt(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Ma(this,r),xa(this,i,n))},e)),e.j=t}var td=class{constructor(e,t){this.g=e,this.map=t}};function $a(e){this.l=e||ed,v.PerformanceNavigationTiming?(e=v.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(v.g&&v.g.Ka&&v.g.Ka()&&v.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ed=10;function La(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Fa(e){return e.h?1:e.g?e.g.size:0}function yi(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Wi(e,t){e.g?e.g.add(t):e.h=t}function Ua(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}$a.prototype.cancel=function(){if(this.i=Ba(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ba(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Mi(e.i)}var nd=class{stringify(e){return v.JSON.stringify(e,void 0)}parse(e){return v.JSON.parse(e,void 0)}};function rd(){this.g=new nd}function id(e,t,n){const r=n||"";try{Na(e,function(i,s){let o=i;ln(i)&&(o=Bi(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function sd(e,t){const n=new mr;if(v.Image){const r=new Image;r.onload=Tn(In,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Tn(In,n,r,"TestLoadImage: error",!1,t),r.onabort=Tn(In,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Tn(In,n,r,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function In(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function pn(e){this.l=e.ec||null,this.j=e.ob||!1}B(pn,zi);pn.prototype.g=function(){return new Ar(this.l,this.j)};pn.prototype.i=function(e){return function(){return e}}({});function Ar(e,t){F.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Qi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}B(Ar,F);var Qi=0;g=Ar.prototype;g.open=function(e,t){if(this.readyState!=Qi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ye(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||v).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mn(this)),this.readyState=Qi};g.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ye(this)),this.g&&(this.readyState=3,Ye(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof v.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ja(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function ja(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}g.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?mn(this):Ye(this),this.readyState==3&&ja(this)}};g.Za=function(e){this.g&&(this.response=this.responseText=e,mn(this))};g.Ya=function(e){this.g&&(this.response=e,mn(this))};g.ka=function(){this.g&&mn(this)};function mn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ye(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ye(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ar.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var od=v.JSON.parse;function O(e){F.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ha,this.L=this.M=!1}B(O,F);var Ha="",ad=/^https?$/i,ld=["POST","PUT"];g=O.prototype;g.Oa=function(e){this.M=e};g.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():pi.g(),this.C=this.u?js(this.u):js(pi),this.g.onreadystatechange=J(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){zs(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=v.FormData&&e instanceof v.FormData,!(0<=oa(ld,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ga(this),0<this.B&&((this.L=ud(this.g))?(this.g.timeout=this.B,this.g.ontimeout=J(this.ua,this)):this.A=qi(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){zs(this,s)}};function ud(e){return ce&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.ua=function(){typeof Oi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,W(this,"timeout"),this.abort(8))};function zs(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,qa(e),Tr(e)}function qa(e){e.F||(e.F=!0,W(e,"complete"),W(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,W(this,"complete"),W(this,"abort"),Tr(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tr(this,!0)),O.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?za(this):this.kb())};g.kb=function(){za(this)};function za(e){if(e.h&&typeof Oi<"u"&&(!e.C[1]||ft(e)!=4||e.da()!=2)){if(e.v&&ft(e)==4)qi(e.La,0,e);else if(W(e,"readystatechange"),ft(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(Oa)[1]||null;!i&&v.self&&v.self.location&&(i=v.self.location.protocol.slice(0,-1)),r=!ad.test(i?i.toLowerCase():"")}n=r}if(n)W(e,"complete"),W(e,"success");else{e.m=6;try{var s=2<ft(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",qa(e)}}finally{Tr(e)}}}}function Tr(e,t){if(e.g){Ga(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||W(e,"ready");try{n.onreadystatechange=r}catch{}}}function Ga(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(v.clearTimeout(e.A),e.A=null)}g.isActive=function(){return!!this.g};function ft(e){return e.g?e.g.readyState:0}g.da=function(){try{return 2<ft(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),od(t)}};function Gs(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Ha:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function cd(e){const t={};e=(e.g&&2<=ft(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(qe(e[r]))continue;var n=kh(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}Ch(t,function(r){return r.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ka(e){let t="";return xi(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Xi(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Ka(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):b(e,t,n))}function Re(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Wa(e){this.Ga=0,this.j=[],this.l=new mr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Re("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Re("baseRetryDelayMs",5e3,e),this.hb=Re("retryDelaySeedMs",1e4,e),this.eb=Re("forwardChannelMaxRetries",2,e),this.xa=Re("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new $a(e&&e.concurrentRequestLimit),this.Ja=new rd,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=Wa.prototype;g.ra=8;g.H=1;function Yi(e){if(Qa(e),e.H==3){var t=e.W++,n=Tt(e.I);if(b(n,"SID",e.K),b(n,"RID",t),b(n,"TYPE","terminate"),gn(e,n),t=new dn(e,e.l,t),t.L=2,t.v=Er(Tt(n)),n=!1,v.navigator&&v.navigator.sendBeacon)try{n=v.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&v.Image&&(new Image().src=t.v,n=!0),n||(t.g=rl(t.l,null),t.g.ha(t.v)),t.G=Date.now(),fn(t)}el(e)}function wr(e){e.g&&(Zi(e),e.g.cancel(),e.g=null)}function Qa(e){wr(e),e.u&&(v.clearTimeout(e.u),e.u=null),zn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&v.clearTimeout(e.m),e.m=null)}function Ir(e){if(!La(e.i)&&!e.m){e.m=!0;var t=e.Na;Ge||ya(),Ke||(Ge(),Ke=!0),ji.add(t,e),e.C=0}}function hd(e,t){return Fa(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=cn(J(e.Na,e,t),tl(e,e.C)),e.C++,!0)}g.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new dn(this,this.l,e);let s=this.s;if(this.U&&(s?(s=ca(s),ha(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Xa(this,i,t),n=Tt(this.I),b(n,"RID",e),b(n,"CVER",22),this.F&&b(n,"X-HTTP-Session-Id",this.F),gn(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Ka(s)))+"&"+t:this.o&&Xi(n,this.o,s)),Wi(this.i,i),this.bb&&b(n,"TYPE","init"),this.P?(b(n,"$req",t),b(n,"SID","null"),i.aa=!0,gi(i,n,null)):gi(i,n,t),this.H=2}}else this.H==3&&(e?Ks(this,e):this.j.length==0||La(this.i)||Ks(this))};function Ks(e,t){var n;t?n=t.m:n=e.W++;const r=Tt(e.I);b(r,"SID",e.K),b(r,"RID",n),b(r,"AID",e.V),gn(e,r),e.o&&e.s&&Xi(r,e.o,e.s),n=new dn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Xa(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Wi(e.i,n),gi(n,r,t)}function gn(e,t){e.na&&xi(e.na,function(n,r){b(t,r,n)}),e.h&&Na({},function(n,r){b(t,r,n)})}function Xa(e,t,n){n=Math.min(e.j.length,n);var r=e.h?J(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let l=!0;for(let a=0;a<n;a++){let u=i[a].g;const c=i[a].map;if(u-=s,0>u)s=Math.max(0,i[a].g-100),l=!1;else try{id(c,o,"req"+u+"_")}catch{r&&r(c)}}if(l){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function Ya(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ge||ya(),Ke||(Ge(),Ke=!0),ji.add(t,e),e.A=0}}function Ji(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=cn(J(e.Ma,e),tl(e,e.A)),e.A++,!0)}g.Ma=function(){if(this.u=null,Ja(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=cn(J(this.jb,this),e)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,et(10),wr(this),Ja(this))};function Zi(e){e.B!=null&&(v.clearTimeout(e.B),e.B=null)}function Ja(e){e.g=new dn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Tt(e.wa);b(t,"RID","rpc"),b(t,"SID",e.K),b(t,"AID",e.V),b(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&b(t,"TO",e.qa),b(t,"TYPE","xmlhttp"),gn(e,t),e.o&&e.s&&Xi(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Er(Tt(t)),n.s=null,n.S=!0,Ca(n,e)}g.ib=function(){this.v!=null&&(this.v=null,wr(this),Ji(this),et(19))};function zn(e){e.v!=null&&(v.clearTimeout(e.v),e.v=null)}function Za(e,t){var n=null;if(e.g==t){zn(e),Zi(e),e.g=null;var r=2}else if(yi(e.i,t))n=t.F,Ua(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=gr(),W(r,new Ia(r,n)),Ir(e)}else Ya(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&hd(e,t)||r==2&&Ji(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Ut(e,5);break;case 4:Ut(e,10);break;case 3:Ut(e,6);break;default:Ut(e,2)}}}function tl(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Ut(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=J(e.pb,e);n||(n=new jt("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||Hn(n,"https"),Er(n)),sd(n.toString(),r)}else et(2);e.H=0,e.h&&e.h.za(t),el(e),Qa(e)}g.pb=function(e){e?(this.l.info("Successfully pinged google.com"),et(2)):(this.l.info("Failed to ping google.com"),et(1))};function el(e){if(e.H=0,e.ma=[],e.h){const t=Ba(e.i);(t.length!=0||e.j.length!=0)&&($s(e.ma,t),$s(e.ma,e.j),e.i.i.length=0,Mi(e.j),e.j.length=0),e.h.ya()}}function nl(e,t,n){var r=n instanceof jt?Tt(n):new jt(n);if(r.g!="")t&&(r.g=t+"."+r.g),qn(r,r.m);else{var i=v.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new jt(null);r&&Hn(s,r),t&&(s.g=t),i&&qn(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&b(r,n,t),b(r,"VER",e.ra),gn(e,r),r}function rl(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new O(new pn({ob:!0})):new O(e.va),t.Oa(e.J),t}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function il(){}g=il.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function Gn(){if(ce&&!(10<=Number(Ih)))throw Error("Environmental error: no available transport.")}Gn.prototype.g=function(e,t){return new rt(e,t)};function rt(e,t){F.call(this),this.g=new Wa(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!qe(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!qe(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new ye(this)}B(rt,F);rt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;et(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=nl(e,null,e.Y),Ir(e)};rt.prototype.close=function(){Yi(this.g)};rt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Bi(e),e=n);t.j.push(new td(t.fb++,e)),t.H==3&&Ir(t)};rt.prototype.N=function(){this.g.h=null,delete this.j,Yi(this.g),delete this.g,rt.$.N.call(this)};function sl(e){Gi.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}B(sl,Gi);function ol(){Ki.call(this),this.status=1}B(ol,Ki);function ye(e){this.g=e}B(ye,il);ye.prototype.Ba=function(){W(this.g,"a")};ye.prototype.Aa=function(e){W(this.g,new sl(e))};ye.prototype.za=function(e){W(this.g,new ol)};ye.prototype.ya=function(){W(this.g,"b")};function dd(){this.blockSize=-1}function mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}B(mt,dd);mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Qr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}mt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Qr(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Qr(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Qr(this,r),i=0;break}}this.h=i,this.i+=t};mt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function P(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var fd={};function ts(e){return-128<=e&&128>e?Ah(e,function(t){return new P([t|0],0>t?-1:0)}):new P([e|0],0>e?-1:0)}function pt(e){if(isNaN(e)||!isFinite(e))return oe;if(0>e)return G(pt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=vi;return new P(t,0)}function al(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return G(al(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=pt(Math.pow(t,8)),r=oe,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=pt(Math.pow(t,s)),r=r.R(s).add(pt(o))):(r=r.R(n),r=r.add(pt(o)))}return r}var vi=4294967296,oe=ts(0),Ei=ts(1),Ws=ts(16777216);g=P.prototype;g.ea=function(){if(st(this))return-G(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:vi+r)*t,t*=vi}return e};g.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(yt(this))return"0";if(st(this))return"-"+G(this).toString(e);for(var t=pt(Math.pow(e,6)),n=this,r="";;){var i=Wn(n,t).g;n=Kn(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,yt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};g.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function yt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function st(e){return e.h==-1}g.X=function(e){return e=Kn(this,e),st(e)?-1:yt(e)?0:1};function G(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new P(n,~e.h).add(Ei)}g.abs=function(){return st(this)?G(this):this};g.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new P(n,n[n.length-1]&-2147483648?-1:0)};function Kn(e,t){return e.add(G(t))}g.R=function(e){if(yt(this)||yt(e))return oe;if(st(this))return st(e)?G(this).R(G(e)):G(G(this).R(e));if(st(e))return G(this.R(G(e)));if(0>this.X(Ws)&&0>e.X(Ws))return pt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,l=e.D(i)>>>16,a=e.D(i)&65535;n[2*r+2*i]+=o*a,Rn(n,2*r+2*i),n[2*r+2*i+1]+=s*a,Rn(n,2*r+2*i+1),n[2*r+2*i+1]+=o*l,Rn(n,2*r+2*i+1),n[2*r+2*i+2]+=s*l,Rn(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new P(n,0)};function Rn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Pe(e,t){this.g=e,this.h=t}function Wn(e,t){if(yt(t))throw Error("division by zero");if(yt(e))return new Pe(oe,oe);if(st(e))return t=Wn(G(e),t),new Pe(G(t.g),G(t.h));if(st(t))return t=Wn(e,G(t)),new Pe(G(t.g),t.h);if(30<e.g.length){if(st(e)||st(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ei,r=t;0>=r.X(e);)n=Qs(n),r=Qs(r);var i=te(n,1),s=te(r,1);for(r=te(r,2),n=te(n,2);!yt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=te(r,1),n=te(n,1)}return t=Kn(e,i.R(t)),new Pe(i,t)}for(i=oe;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=pt(n),o=s.R(t);st(o)||0<o.X(e);)n-=r,s=pt(n),o=s.R(t);yt(s)&&(s=Ei),i=i.add(s),e=Kn(e,o)}return new Pe(i,e)}g.gb=function(e){return Wn(this,e).h};g.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new P(n,this.h&e.h)};g.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new P(n,this.h|e.h)};g.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new P(n,this.h^e.h)};function Qs(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new P(n,e.h)}function te(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new P(i,e.h)}Gn.prototype.createWebChannel=Gn.prototype.g;rt.prototype.send=rt.prototype.u;rt.prototype.open=rt.prototype.m;rt.prototype.close=rt.prototype.close;_r.NO_ERROR=0;_r.TIMEOUT=8;_r.HTTP_ERROR=6;Ra.COMPLETE="complete";Pa.EventType=hn;hn.OPEN="a";hn.CLOSE="b";hn.ERROR="c";hn.MESSAGE="d";F.prototype.listen=F.prototype.O;O.prototype.listenOnce=O.prototype.P;O.prototype.getLastError=O.prototype.Sa;O.prototype.getLastErrorCode=O.prototype.Ia;O.prototype.getStatus=O.prototype.da;O.prototype.getResponseJson=O.prototype.Wa;O.prototype.getResponseText=O.prototype.ja;O.prototype.send=O.prototype.ha;O.prototype.setWithCredentials=O.prototype.Oa;mt.prototype.digest=mt.prototype.l;mt.prototype.reset=mt.prototype.reset;mt.prototype.update=mt.prototype.j;P.prototype.add=P.prototype.add;P.prototype.multiply=P.prototype.R;P.prototype.modulo=P.prototype.gb;P.prototype.compare=P.prototype.X;P.prototype.toNumber=P.prototype.ea;P.prototype.toString=P.prototype.toString;P.prototype.getBits=P.prototype.D;P.fromNumber=pt;P.fromString=al;var pd=function(){return new Gn},md=function(){return gr()},Xr=_r,gd=Ra,_d=Yt,Xs={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},yd=pn,Pn=Pa,vd=O,Ed=P;const Ys="@firebase/firestore";/**
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
 */class X{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
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
 */let ve="10.5.2";/**
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
 */const Kt=new ta("@firebase/firestore");function Se(){return Kt.logLevel}function _(e,...t){if(Kt.logLevel<=I.DEBUG){const n=t.map(es);Kt.debug(`Firestore (${ve}): ${e}`,...n)}}function Wt(e,...t){if(Kt.logLevel<=I.ERROR){const n=t.map(es);Kt.error(`Firestore (${ve}): ${e}`,...n)}}function Qn(e,...t){if(Kt.logLevel<=I.WARN){const n=t.map(es);Kt.warn(`Firestore (${ve}): ${e}`,...n)}}function es(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function T(e="Unexpected state"){const t=`FIRESTORE (${ve}) INTERNAL ASSERTION FAILED: `+e;throw Wt(t),new Error(t)}function U(e,t){e||T()}function V(e,t){return e}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends ge{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ht{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class ll{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ad{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(X.UNAUTHENTICATED))}shutdown(){}}class Td{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wd{constructor(t){this.t=t,this.currentUser=X.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let s=new Ht;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ht,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const a=s;t.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ht)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(U(typeof r.accessToken=="string"),new ll(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return U(t===null||typeof t=="string"),new X(t)}}class Id{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=X.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Rd{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new Id(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Pd{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sd{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(U(typeof n.token=="string"),this.R=n.token,new Pd(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Cd(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ul{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Cd(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function S(e,t){return e<t?-1:e>t?1:0}function he(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class L{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new y(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return L.fromMillis(Date.now())}static fromDate(t){return L.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new L(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?S(this.nanoseconds,t.nanoseconds):S(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class D{constructor(t){this.timestamp=t}static fromTimestamp(t){return new D(t)}static min(){return new D(new L(0,0))}static max(){return new D(new L(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Je{constructor(t,n,r){n===void 0?n=0:n>t.length&&T(),r===void 0?r=t.length-n:r>t.length-n&&T(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Je.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Je?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class N extends Je{construct(t,n,r){return new N(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(m.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new N(n)}static emptyPath(){return new N([])}}const bd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class K extends Je{construct(t,n,r){return new K(t,n,r)}static isValidIdentifier(t){return bd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),K.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new K(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(m.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new y(m.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const a=t[i+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new y(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=a,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new y(m.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new K(n)}static emptyPath(){return new K([])}}/**
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
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(N.fromString(t))}static fromName(t){return new E(N.fromString(t).popFirst(5))}static empty(){return new E(N.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&N.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return N.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new N(t.slice()))}}function Vd(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=D.fromTimestamp(r===1e9?new L(n+1,0):new L(n,r));return new Dt(i,E.empty(),t)}function Dd(e){return new Dt(e.readTime,e.key,-1)}class Dt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Dt(D.min(),E.empty(),-1)}static max(){return new Dt(D.max(),E.empty(),-1)}}function Nd(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:S(e.largestBatchId,t.largestBatchId))}/**
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
 */const Od="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Md{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function cl(e){if(e.code!==m.FAILED_PRECONDITION||e.message!==Od)throw e;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,r)=>{n(t)})}static reject(t){return new f((n,r)=>{r(t)})}static waitFor(t){return new f((n,r)=>{let i=0,s=0,o=!1;t.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},a=>r(a))}),o=!0,s===i&&n()})}static or(t){let n=f.resolve(!1);for(const r of t)n=n.next(i=>i?f.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new f((r,i)=>{const s=t.length,o=new Array(s);let l=0;for(let a=0;a<s;a++){const u=a;n(t[u]).next(c=>{o[u]=c,++l,l===s&&r(o)},c=>i(c))}})}static doWhile(t,n){return new f((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function Rr(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class hl{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}hl._e=-1;function ns(e){return e==null}function Xn(e){return e===0&&1/e==-1/0}function kd(e){return typeof e=="number"&&Number.isInteger(e)&&!Xn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function Js(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function _n(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function dl(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class nt{constructor(t,n){this.comparator=t,this.root=n||q.EMPTY}insert(t,n){return new nt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,q.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,q.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Sn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Sn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Sn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Sn(this.root,t,this.comparator,!0)}}class Sn{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class q{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??q.RED,this.left=i??q.EMPTY,this.right=s??q.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new q(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return q.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return q.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,q.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,q.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const t=this.left.check();if(t!==this.right.check())throw T();return t+(this.isRed()?0:1)}}q.EMPTY=null,q.RED=!0,q.BLACK=!1;q.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,n,r,i,s){return this}insert(t,n,r){return new q(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(t){this.comparator=t,this.data=new nt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zs(this.data.getIterator())}getIteratorFrom(t){return new Zs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof tt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new tt(this.comparator);return n.data=t,n}}class Zs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ct{constructor(t){this.fields=t,t.sort(K.comparator)}static empty(){return new ct([])}unionWith(t){let n=new tt(K.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ct(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return he(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class xd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class wt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new xd("Invalid base64 string: "+s):s}}(t);return new wt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new wt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return S(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const $d=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(e){if(U(!!e),typeof e=="string"){let t=0;const n=$d.exec(e);if(U(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:z(e.seconds),nanos:z(e.nanos)}}function z(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ze(e){return typeof e=="string"?wt.fromBase64String(e):wt.fromUint8Array(e)}/**
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
 */function rs(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function fl(e){const t=e.mapValue.fields.__previous_value__;return rs(t)?fl(t):t}function Yn(e){const t=Qt(e.mapValue.fields.__local_write_time__.timestampValue);return new L(t.seconds,t.nanos)}/**
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
 */class Ld{constructor(t,n,r,i,s,o,l,a,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=u}}class Jn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Jn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Jn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Cn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function de(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?rs(e)?4:Fd(e)?9007199254740991:10:T()}function gt(e,t){if(e===t)return!0;const n=de(e);if(n!==de(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Yn(e).isEqual(Yn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Qt(i.timestampValue),l=Qt(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Ze(i.bytesValue).isEqual(Ze(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return z(i.geoPointValue.latitude)===z(s.geoPointValue.latitude)&&z(i.geoPointValue.longitude)===z(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return z(i.integerValue)===z(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=z(i.doubleValue),l=z(s.doubleValue);return o===l?Xn(o)===Xn(l):isNaN(o)&&isNaN(l)}return!1}(e,t);case 9:return he(e.arrayValue.values||[],t.arrayValue.values||[],gt);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Js(o)!==Js(l))return!1;for(const a in o)if(o.hasOwnProperty(a)&&(l[a]===void 0||!gt(o[a],l[a])))return!1;return!0}(e,t);default:return T()}}function tn(e,t){return(e.values||[]).find(n=>gt(n,t))!==void 0}function fe(e,t){if(e===t)return 0;const n=de(e),r=de(t);if(n!==r)return S(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return S(e.booleanValue,t.booleanValue);case 2:return function(s,o){const l=z(s.integerValue||s.doubleValue),a=z(o.integerValue||o.doubleValue);return l<a?-1:l>a?1:l===a?0:isNaN(l)?isNaN(a)?0:-1:1}(e,t);case 3:return to(e.timestampValue,t.timestampValue);case 4:return to(Yn(e),Yn(t));case 5:return S(e.stringValue,t.stringValue);case 6:return function(s,o){const l=Ze(s),a=Ze(o);return l.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const l=s.split("/"),a=o.split("/");for(let u=0;u<l.length&&u<a.length;u++){const c=S(l[u],a[u]);if(c!==0)return c}return S(l.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const l=S(z(s.latitude),z(o.latitude));return l!==0?l:S(z(s.longitude),z(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const l=s.values||[],a=o.values||[];for(let u=0;u<l.length&&u<a.length;++u){const c=fe(l[u],a[u]);if(c)return c}return S(l.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Cn.mapValue&&o===Cn.mapValue)return 0;if(s===Cn.mapValue)return 1;if(o===Cn.mapValue)return-1;const l=s.fields||{},a=Object.keys(l),u=o.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let h=0;h<a.length&&h<c.length;++h){const d=S(a[h],c[h]);if(d!==0)return d;const p=fe(l[a[h]],u[c[h]]);if(p!==0)return p}return S(a.length,c.length)}(e.mapValue,t.mapValue);default:throw T()}}function to(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return S(e,t);const n=Qt(e),r=Qt(t),i=S(n.seconds,r.seconds);return i!==0?i:S(n.nanos,r.nanos)}function pe(e){return Ai(e)}function Ai(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Qt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Ze(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return E.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Ai(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Ai(n.fields[o])}`;return i+"}"}(e.mapValue):T()}function Ti(e){return!!e&&"integerValue"in e}function is(e){return!!e&&"arrayValue"in e}function On(e){return!!e&&"mapValue"in e}function Me(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return _n(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Me(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Me(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Fd(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class lt{constructor(t){this.value=t}static empty(){return new lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!On(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Me(n)}setAll(t){let n=K.emptyPath(),r={},i=[];t.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const a=this.getFieldsMap(n);this.applyChanges(a,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Me(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());On(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return gt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];On(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){_n(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new lt(Me(this.value))}}function pl(e){const t=[];return _n(e.fields,(n,r)=>{const i=new K([n]);if(On(r)){const s=pl(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ct(t)}/**
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
 */class at{constructor(t,n,r,i,s,o,l){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(t){return new at(t,0,D.min(),D.min(),D.min(),lt.empty(),0)}static newFoundDocument(t,n,r,i){return new at(t,1,n,D.min(),r,i,0)}static newNoDocument(t,n){return new at(t,2,n,D.min(),D.min(),lt.empty(),0)}static newUnknownDocument(t,n){return new at(t,3,n,D.min(),D.min(),lt.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(D.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=D.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof at&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zn{constructor(t,n){this.position=t,this.inclusive=n}}function eo(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),n.key):r=fe(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function no(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!gt(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class tr{constructor(t,n="asc"){this.field=t,this.dir=n}}function Ud(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class ml{}class $ extends ml{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new jd(t,n,r):n==="array-contains"?new zd(t,r):n==="in"?new Gd(t,r):n==="not-in"?new Kd(t,r):n==="array-contains-any"?new Wd(t,r):new $(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Hd(t,r):new qd(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fe(n,this.value)):n!==null&&de(this.value)===de(n)&&this.matchesComparison(fe(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends ml{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Nt(t,n)}matches(t){return gl(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function gl(e){return e.op==="and"}function _l(e){return Bd(e)&&gl(e)}function Bd(e){for(const t of e.filters)if(t instanceof Nt)return!1;return!0}function wi(e){if(e instanceof $)return e.field.canonicalString()+e.op.toString()+pe(e.value);if(_l(e))return e.filters.map(t=>wi(t)).join(",");{const t=e.filters.map(n=>wi(n)).join(",");return`${e.op}(${t})`}}function yl(e,t){return e instanceof $?function(r,i){return i instanceof $&&r.op===i.op&&r.field.isEqual(i.field)&&gt(r.value,i.value)}(e,t):e instanceof Nt?function(r,i){return i instanceof Nt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&yl(o,i.filters[l]),!0):!1}(e,t):void T()}function vl(e){return e instanceof $?function(n){return`${n.field.canonicalString()} ${n.op} ${pe(n.value)}`}(e):e instanceof Nt?function(n){return n.op.toString()+" {"+n.getFilters().map(vl).join(" ,")+"}"}(e):"Filter"}class jd extends ${constructor(t,n,r){super(t,n,r),this.key=E.fromName(r.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class Hd extends ${constructor(t,n){super(t,"in",n),this.keys=El("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class qd extends ${constructor(t,n){super(t,"not-in",n),this.keys=El("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function El(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>E.fromName(r.referenceValue))}class zd extends ${constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return is(n)&&tn(n.arrayValue,this.value)}}class Gd extends ${constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&tn(this.value.arrayValue,n)}}class Kd extends ${constructor(t,n){super(t,"not-in",n)}matches(t){if(tn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!tn(this.value.arrayValue,n)}}class Wd extends ${constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!is(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>tn(this.value.arrayValue,r))}}/**
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
 */class Qd{constructor(t,n=null,r=[],i=[],s=null,o=null,l=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ce=null}}function ro(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Qd(e,t,n,r,i,s,o)}function ss(e){const t=V(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>wi(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ns(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>pe(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>pe(r)).join(",")),t.ce=n}return t.ce}function os(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Ud(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!yl(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!no(e.startAt,t.startAt)&&no(e.endAt,t.endAt)}/**
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
 */class Pr{constructor(t,n=null,r=[],i=[],s=null,o="F",l=null,a=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Xd(e,t,n,r,i,s,o,l){return new Pr(e,t,n,r,i,s,o,l)}function Yd(e){return new Pr(e)}function io(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Jd(e){return e.collectionGroup!==null}function ke(e){const t=V(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new tt(K.comparator);return o.filters.forEach(a=>{a.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new tr(s,r))}),n.has(K.keyField().canonicalString())||t.le.push(new tr(K.keyField(),r))}return t.le}function qt(e){const t=V(e);return t.he||(t.he=Zd(t,ke(e))),t.he}function Zd(e,t){if(e.limitType==="F")return ro(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new tr(i.field,s)});const n=e.endAt?new Zn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Zn(e.startAt.position,e.startAt.inclusive):null;return ro(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ii(e,t,n){return new Pr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Al(e,t){return os(qt(e),qt(t))&&e.limitType===t.limitType}function Tl(e){return`${ss(qt(e))}|lt:${e.limitType}`}function Ce(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>vl(i)).join(", ")}]`),ns(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>pe(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>pe(i)).join(",")),`Target(${r})`}(qt(e))}; limitType=${e.limitType})`}function as(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):E.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of ke(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,l,a){const u=eo(o,l,a);return o.inclusive?u<=0:u<0}(r.startAt,ke(r),i)||r.endAt&&!function(o,l,a){const u=eo(o,l,a);return o.inclusive?u>=0:u>0}(r.endAt,ke(r),i))}(e,t)}function tf(e){return(t,n)=>{let r=!1;for(const i of ke(e)){const s=ef(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ef(e,t,n){const r=e.field.isKeyField()?E.comparator(t.key,n.key):function(s,o,l){const a=o.data.field(s),u=l.data.field(s);return a!==null&&u!==null?fe(a,u):T()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return T()}}/**
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
 */class Ee{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){_n(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return dl(this.inner)}size(){return this.innerSize}}/**
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
 */const nf=new nt(E.comparator);function er(){return nf}const wl=new nt(E.comparator);function bn(...e){let t=wl;for(const n of e)t=t.insert(n.key,n);return t}function Il(e){let t=wl;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Bt(){return xe()}function Rl(){return xe()}function xe(){return new Ee(e=>e.toString(),(e,t)=>e.isEqual(t))}const rf=new nt(E.comparator),sf=new tt(E.comparator);function Y(...e){let t=sf;for(const n of e)t=t.add(n);return t}const of=new tt(S);function af(){return of}/**
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
 */function Pl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xn(t)?"-0":t}}function Sl(e){return{integerValue:""+e}}function lf(e,t){return kd(t)?Sl(t):Pl(e,t)}/**
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
 */class Sr{constructor(){this._=void 0}}function uf(e,t,n){return e instanceof nr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&rs(s)&&(s=fl(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof en?bl(e,t):e instanceof nn?Vl(e,t):function(i,s){const o=Cl(i,s),l=so(o)+so(i.Ie);return Ti(o)&&Ti(i.Ie)?Sl(l):Pl(i.serializer,l)}(e,t)}function cf(e,t,n){return e instanceof en?bl(e,t):e instanceof nn?Vl(e,t):n}function Cl(e,t){return e instanceof rr?function(r){return Ti(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class nr extends Sr{}class en extends Sr{constructor(t){super(),this.elements=t}}function bl(e,t){const n=Dl(t);for(const r of e.elements)n.some(i=>gt(i,r))||n.push(r);return{arrayValue:{values:n}}}class nn extends Sr{constructor(t){super(),this.elements=t}}function Vl(e,t){let n=Dl(t);for(const r of e.elements)n=n.filter(i=>!gt(i,r));return{arrayValue:{values:n}}}class rr extends Sr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function so(e){return z(e.integerValue||e.doubleValue)}function Dl(e){return is(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function hf(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof en&&i instanceof en||r instanceof nn&&i instanceof nn?he(r.elements,i.elements,gt):r instanceof rr&&i instanceof rr?gt(r.Ie,i.Ie):r instanceof nr&&i instanceof nr}(e.transform,t.transform)}class df{constructor(t,n){this.version=t,this.transformResults=n}}class Et{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Et}static exists(t){return new Et(void 0,t)}static updateTime(t){return new Et(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mn(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Cr{}function Nl(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Ml(e.key,Et.none()):new yn(e.key,e.data,Et.none());{const n=e.data,r=lt.empty();let i=new tt(K.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Jt(e.key,r,new ct(i.toArray()),Et.none())}}function ff(e,t,n){e instanceof yn?function(i,s,o){const l=i.value.clone(),a=ao(i.fieldTransforms,s,o.transformResults);l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):e instanceof Jt?function(i,s,o){if(!Mn(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=ao(i.fieldTransforms,s,o.transformResults),a=s.data;a.setAll(Ol(i)),a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function $e(e,t,n,r){return e instanceof yn?function(s,o,l,a){if(!Mn(s.precondition,o))return l;const u=s.value.clone(),c=lo(s.fieldTransforms,a,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Jt?function(s,o,l,a){if(!Mn(s.precondition,o))return l;const u=lo(s.fieldTransforms,a,o),c=o.data;return c.setAll(Ol(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,l){return Mn(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(e,t,n)}function pf(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Cl(r.transform,i||null);s!=null&&(n===null&&(n=lt.empty()),n.set(r.field,s))}return n||null}function oo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&he(r,i,(s,o)=>hf(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class yn extends Cr{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jt extends Cr{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ol(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ao(e,t,n){const r=new Map;U(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,l=t.data.field(s.field);r.set(s.field,cf(o,l,n[i]))}return r}function lo(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,uf(s,o,t))}return r}class Ml extends Cr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mf extends Cr{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gf{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&ff(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=$e(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=$e(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Rl();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const a=Nl(o,l);a!==null&&r.set(i.key,a),o.isValidDocument()||o.convertToNoDocument(D.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Y())}isEqual(t){return this.batchId===t.batchId&&he(this.mutations,t.mutations,(n,r)=>oo(n,r))&&he(this.baseMutations,t.baseMutations,(n,r)=>oo(n,r))}}class ls{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){U(t.mutations.length===r.length);let i=function(){return rf}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new ls(t,n,r,i)}}/**
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
 */class _f{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */var M,w;function yf(e){switch(e){default:return T();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function vf(e){if(e===void 0)return Wt("GRPC error has no .code"),m.UNKNOWN;switch(e){case M.OK:return m.OK;case M.CANCELLED:return m.CANCELLED;case M.UNKNOWN:return m.UNKNOWN;case M.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case M.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case M.INTERNAL:return m.INTERNAL;case M.UNAVAILABLE:return m.UNAVAILABLE;case M.UNAUTHENTICATED:return m.UNAUTHENTICATED;case M.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case M.NOT_FOUND:return m.NOT_FOUND;case M.ALREADY_EXISTS:return m.ALREADY_EXISTS;case M.PERMISSION_DENIED:return m.PERMISSION_DENIED;case M.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case M.ABORTED:return m.ABORTED;case M.OUT_OF_RANGE:return m.OUT_OF_RANGE;case M.UNIMPLEMENTED:return m.UNIMPLEMENTED;case M.DATA_LOSS:return m.DATA_LOSS;default:return T()}}(w=M||(M={}))[w.OK=0]="OK",w[w.CANCELLED=1]="CANCELLED",w[w.UNKNOWN=2]="UNKNOWN",w[w.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",w[w.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",w[w.NOT_FOUND=5]="NOT_FOUND",w[w.ALREADY_EXISTS=6]="ALREADY_EXISTS",w[w.PERMISSION_DENIED=7]="PERMISSION_DENIED",w[w.UNAUTHENTICATED=16]="UNAUTHENTICATED",w[w.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",w[w.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",w[w.ABORTED=10]="ABORTED",w[w.OUT_OF_RANGE=11]="OUT_OF_RANGE",w[w.UNIMPLEMENTED=12]="UNIMPLEMENTED",w[w.INTERNAL=13]="INTERNAL",w[w.UNAVAILABLE=14]="UNAVAILABLE",w[w.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Ed([4294967295,4294967295],0);class Ef{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ri(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Af(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Tf(e,t){return Ri(e,t.toTimestamp())}function ae(e){return U(!!e),D.fromTimestamp(function(n){const r=Qt(n);return new L(r.seconds,r.nanos)}(e))}function kl(e,t){return function(r){return new N(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function wf(e){const t=N.fromString(e);return U(Df(t)),t}function Pi(e,t){return kl(e.databaseId,t.path)}function If(e){const t=wf(e);return t.length===4?N.emptyPath():Pf(t)}function Rf(e){return new N(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Pf(e){return U(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function uo(e,t,n){return{name:Pi(e,t),fields:n.value.mapValue.fields}}function Sf(e,t){let n;if(t instanceof yn)n={update:uo(e,t.key,t.value)};else if(t instanceof Ml)n={delete:Pi(e,t.key)};else if(t instanceof Jt)n={update:uo(e,t.key,t.data),updateMask:Vf(t.fieldMask)};else{if(!(t instanceof mf))return T();n={verify:Pi(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof nr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof en)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof nn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof rr)return{fieldPath:o.field.canonicalString(),increment:l.Ie};throw T()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Tf(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:T()}(e,t.precondition)),n}function Cf(e,t){return e&&e.length>0?(U(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?ae(i.updateTime):ae(s);return o.isEqual(D.min())&&(o=ae(s)),new df(o,i.transformResults||[])}(n,t))):[]}function bf(e){let t=If(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){U(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=xl(h);return d instanceof Nt&&_l(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(A){return new tr(ne(A.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(d))}(n.orderBy));let l=null;n.limit&&(l=function(h){let d;return d=typeof h=="object"?h.value:h,ns(d)?null:d}(n.limit));let a=null;n.startAt&&(a=function(h){const d=!!h.before,p=h.values||[];return new Zn(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new Zn(p,d)}(n.endAt)),Xd(t,i,o,s,l,"F",a,u)}function xl(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ne(n.unaryFilter.field);return $.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ne(n.unaryFilter.field);return $.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ne(n.unaryFilter.field);return $.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ne(n.unaryFilter.field);return $.create(o,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(e):e.fieldFilter!==void 0?function(n){return $.create(ne(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Nt.create(n.compositeFilter.filters.map(r=>xl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return T()}}(n.compositeFilter.op))}(e):T()}function ne(e){return K.fromServerFormat(e.fieldPath)}function Vf(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Df(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Nf{constructor(t){this.ut=t}}function Of(e){const t=bf({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ii(t,t.limit,"L"):t}/**
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
 */class Mf{constructor(){this.on=new kf}addToCollectionParentIndex(t,n){return this.on.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}deleteAllFieldIndexes(t){return f.resolve()}createTargetIndexes(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(Dt.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(Dt.min())}updateCollectionGroup(t,n,r){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class kf{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new tt(N.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new tt(N.comparator)).toArray()}}/**
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
 */class me{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new me(0)}static Nn(){return new me(-1)}}/**
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
 */class xf{constructor(){this.changes=new Ee(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,at.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?f.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class $f{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Lf{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&$e(r.mutation,i,ct.empty(),L.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Y()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Y()){const i=Bt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=bn();return s.forEach((l,a)=>{o=o.insert(l,a.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Bt();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Y()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(t,n,r,i){let s=er();const o=xe(),l=function(){return xe()}();return n.forEach((a,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Jt)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),$e(c.mutation,u,c.mutation.getFieldMask(),L.now())):o.set(u.key,ct.empty())}),this.recalculateAndSaveOverlays(t,s).next(a=>(a.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return l.set(u,new $f(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),l))}recalculateAndSaveOverlays(t,n){const r=xe();let i=new nt((o,l)=>o-l),s=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const l of o)l.keys().forEach(a=>{const u=n.get(a);if(u===null)return;let c=r.get(a)||ct.empty();c=l.applyToLocalView(u,c),r.set(a,c);const h=(i.get(l.batchId)||Y()).add(a);i=i.insert(l.batchId,h)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const a=l.getNext(),u=a.key,c=a.value,h=Rl();c.forEach(d=>{if(!s.has(d)){const p=Nl(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return f.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Jd(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):f.resolve(Bt());let l=-1,a=s;return o.next(u=>f.forEach(u,(c,h)=>(l<h.largestBatchId&&(l=h.largestBatchId),s.get(c)?f.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{a=a.insert(c,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,a,u,Y())).next(c=>({batchId:l,changes:Il(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(r=>{let i=bn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=bn();return this.indexManager.getCollectionParents(t,s).next(l=>f.forEach(l,a=>{const u=function(h,d){return new Pr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((a,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,at.newInvalidDocument(c)))});let l=bn();return o.forEach((a,u)=>{const c=s.get(a);c!==void 0&&$e(c.mutation,u,ct.empty(),L.now()),as(n,u)&&(l=l.insert(a,u))}),l})}}/**
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
 */class Ff{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return f.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ae(i.createTime)}}(n)),f.resolve()}getNamedQuery(t,n){return f.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:Of(i.bundledQuery),readTime:ae(i.readTime)}}(n)),f.resolve()}}/**
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
 */class Uf{constructor(){this.overlays=new nt(E.comparator),this.lr=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Bt();return f.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.lt(t,n,s)}),f.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),f.resolve()}getOverlaysForCollection(t,n,r){const i=Bt(),s=n.length+1,o=new E(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const a=l.getNext().value,u=a.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&a.largestBatchId>r&&i.set(a.getKey(),a)}return f.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new nt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Bt(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const l=Bt(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((u,c)=>l.set(u,c)),!(l.size()>=i)););return f.resolve(l)}lt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new _f(n,r));let s=this.lr.get(n);s===void 0&&(s=Y(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class us{constructor(){this.hr=new tt(k.Pr),this.Ir=new tt(k.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new k(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new k(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new E(new N([])),r=new k(n,t),i=new k(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new E(new N([])),r=new k(n,t),i=new k(n,t+1);let s=Y();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new k(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class k{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return E.comparator(t.key,n.key)||S(t.gr,n.gr)}static Tr(t,n){return S(t.gr,n.gr)||E.comparator(t.key,n.key)}}/**
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
 */class Bf{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new tt(k.Pr)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gf(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.yr=this.yr.add(new k(l.key,s)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return f.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new k(n,0),i=new k(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const l=this.wr(o.gr);s.push(l)}),f.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new tt(S);return n.forEach(i=>{const s=new k(i,0),o=new k(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],l=>{r=r.add(l.gr)})}),f.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;E.isDocumentKey(s)||(s=s.child(""));const o=new k(new E(s),0);let l=new tt(S);return this.yr.forEachWhile(a=>{const u=a.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(a.gr)),!0)},o),f.resolve(this.br(l))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){U(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return f.forEach(n.mutations,i=>{const s=new k(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new k(n,0),i=this.yr.firstAfterOrEqual(r);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class jf{constructor(t){this.Cr=t,this.docs=function(){return new nt(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return f.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(t,n){let r=er();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():at.newInvalidDocument(i))}),f.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=er();const o=n.path,l=new E(o.child("")),a=this.docs.getIteratorFrom(l);for(;a.hasNext();){const{key:u,value:{document:c}}=a.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Nd(Dd(c),r)<=0||(i.has(c.key)||as(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return f.resolve(s)}getAllFromCollectionGroup(t,n,r,i){T()}vr(t,n){return f.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Hf(this)}getSize(t){return f.resolve(this.size)}}class Hf extends xf{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),f.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
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
 */class qf{constructor(t){this.persistence=t,this.Fr=new Ee(n=>ss(n),os),this.lastRemoteSnapshotVersion=D.min(),this.highestTargetId=0,this.Mr=0,this.Or=new us,this.targetCount=0,this.Nr=me.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),f.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new me(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.kn(n),f.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),f.waitFor(s).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return f.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),f.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),f.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return f.resolve(r)}containsKey(t,n){return f.resolve(this.Or.containsKey(n))}}/**
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
 */class zf{constructor(t,n){this.Br={},this.overlays={},this.Lr=new hl(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new qf(this),this.indexManager=new Mf,this.remoteDocumentCache=function(i){return new jf(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new Nf(n),this.Kr=new Ff(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Uf,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new Bf(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){_("MemoryPersistence","Starting transaction:",t);const i=new Gf(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return f.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class Gf extends Md{constructor(t){super(),this.currentSequenceNumber=t}}class cs{constructor(t){this.persistence=t,this.Gr=new us,this.zr=null}static jr(t){return new cs(t)}get Hr(){if(this.zr)return this.zr;throw T()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),f.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),f.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Hr,r=>{const i=E.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,D.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return f.or([()=>f.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
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
 */class hs{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=Y(),i=Y();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hs(t,n.fromCache,r,i)}}/**
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
 */class Kf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Wf{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.zi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Kf;return this.Hi(t,n,o).next(l=>{if(s.result=l,this.$i)return this.Ji(t,n,o,l.size)})}).next(()=>s.result)}Ji(t,n,r,i){return r.documentReadCount<this.Ui?(Se()<=I.DEBUG&&_("QueryEngine","SDK will not create cache indexes for query:",Ce(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),f.resolve()):(Se()<=I.DEBUG&&_("QueryEngine","Query:",Ce(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Se()<=I.DEBUG&&_("QueryEngine","The SDK decides to create cache indexes for query:",Ce(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,qt(n))):f.resolve())}zi(t,n){if(io(n))return f.resolve(null);let r=qt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ii(n,null,"F"),r=qt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=Y(...s);return this.Gi.getDocuments(t,o).next(l=>this.indexManager.getMinOffset(t,r).next(a=>{const u=this.Yi(n,l);return this.Zi(n,u,o,a.readTime)?this.zi(t,Ii(n,null,"F")):this.Xi(t,u,n,a)}))})))}ji(t,n,r,i){return io(n)||i.isEqual(D.min())?f.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?f.resolve(null):(Se()<=I.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ce(n)),this.Xi(t,o,n,Vd(i,-1)).next(l=>l))})}Yi(t,n){let r=new tt(tf(t));return n.forEach((i,s)=>{as(t,s)&&(r=r.add(s))}),r}Zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,n,r){return Se()<=I.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",Ce(n)),this.Gi.getDocumentsMatchingQuery(t,n,Dt.min(),r)}Xi(t,n,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class Qf{constructor(t,n,r,i){this.persistence=t,this.es=n,this.serializer=i,this.ts=new nt(S),this.ns=new Ee(s=>ss(s),os),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Lf(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function Xf(e,t,n,r){return new Qf(e,t,n,r)}async function $l(e,t){const n=V(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let a=Y();for(const u of i){o.push(u.batchId);for(const c of u.mutations)a=a.add(c.key)}for(const u of s){l.push(u.batchId);for(const c of u.mutations)a=a.add(c.key)}return n.localDocuments.getDocuments(r,a).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:l}))})})}function Yf(e,t){const n=V(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(l,a,u,c){const h=u.batch,d=h.keys();let p=f.resolve();return d.forEach(A=>{p=p.next(()=>c.getEntry(a,A)).next(C=>{const R=u.docVersions.get(A);U(R!==null),C.version.compareTo(R)<0&&(h.applyToRemoteDocument(C,u),C.isValidDocument()&&(C.setReadTime(u.commitVersion),c.addEntry(C)))})}),p.next(()=>l.mutationQueue.removeMutationBatch(a,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let a=Y();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(a=a.add(l.batch.mutations[u].key));return a}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function Jf(e){const t=V(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function Zf(e,t){const n=V(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}class co{constructor(){this.activeTargetIds=af()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class tp{constructor(){this.eo=new co,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new co,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ep{ro(t){}shutdown(){}}/**
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
 */class ho{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Vn=null;function Yr(){return Vn===null?Vn=function(){return 268435456+Math.round(2147483648*Math.random())}():Vn++,"0x"+Vn.toString(16)}/**
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
 */const np={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class rp{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
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
 */const Q="WebChannelConnection";class ip extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const l=Yr(),a=this.So(n,r);_("RestConnection",`Sending RPC '${n}' ${l}:`,a,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,a,u,i).then(c=>(_("RestConnection",`Received RPC '${n}' ${l}: `,c),c),c=>{throw Qn("RestConnection",`RPC '${n}' ${l} failed with error: `,c,"url: ",a,"request:",i),c})}Co(n,r,i,s,o,l){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ve}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=np[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,i){const s=Yr();return new Promise((o,l)=>{const a=new vd;a.setWithCredentials(!0),a.listenOnce(gd.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Xr.NO_ERROR:const c=a.getResponseJson();_(Q,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case Xr.TIMEOUT:_(Q,`RPC '${t}' ${s} timed out`),l(new y(m.DEADLINE_EXCEEDED,"Request time out"));break;case Xr.HTTP_ERROR:const h=a.getStatus();if(_(Q,`RPC '${t}' ${s} failed with status:`,h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const A=function(R){const j=R.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(j)>=0?j:m.UNKNOWN}(p.status);l(new y(A,p.message))}else l(new y(m.UNKNOWN,"Server responded with status "+a.getStatus()))}else l(new y(m.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{_(Q,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);_(Q,`RPC '${t}' ${s} sending request:`,i),a.send(n,"POST",u,r,15)})}vo(t,n,r){const i=Yr(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=pd(),l=md(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.xmlHttpFactory=new yd({})),this.bo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=s.join("");_(Q,`Creating RPC '${t}' stream ${i}: ${c}`,a);const h=o.createWebChannel(c,a);let d=!1,p=!1;const A=new rp({co:R=>{p?_(Q,`Not sending because RPC '${t}' stream ${i} is closed:`,R):(d||(_(Q,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),_(Q,`RPC '${t}' stream ${i} sending:`,R),h.send(R))},lo:()=>h.close()}),C=(R,j,H)=>{R.listen(j,it=>{try{H(it)}catch(_t){setTimeout(()=>{throw _t},0)}})};return C(h,Pn.EventType.OPEN,()=>{p||_(Q,`RPC '${t}' stream ${i} transport opened.`)}),C(h,Pn.EventType.CLOSE,()=>{p||(p=!0,_(Q,`RPC '${t}' stream ${i} transport closed`),A.Ro())}),C(h,Pn.EventType.ERROR,R=>{p||(p=!0,Qn(Q,`RPC '${t}' stream ${i} transport errored:`,R),A.Ro(new y(m.UNAVAILABLE,"The operation could not be completed")))}),C(h,Pn.EventType.MESSAGE,R=>{var j;if(!p){const H=R.data[0];U(!!H);const it=H,_t=it.error||((j=it[0])===null||j===void 0?void 0:j.error);if(_t){_(Q,`RPC '${t}' stream ${i} received error:`,_t);const An=_t.status;let Te=function(vu){const _s=M[vu];if(_s!==void 0)return vf(_s)}(An),we=_t.message;Te===void 0&&(Te=m.INTERNAL,we="Unknown error status: "+An+" with message "+_t.message),p=!0,A.Ro(new y(Te,we)),h.close()}else _(Q,`RPC '${t}' stream ${i} received:`,H),A.Vo(H)}}),C(l,_d.STAT_EVENT,R=>{R.stat===Xs.PROXY?_(Q,`RPC '${t}' stream ${i} detected buffering proxy`):R.stat===Xs.NOPROXY&&_(Q,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.Ao()},0),A}}function Jr(){return typeof document<"u"?document:null}/**
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
 */function br(e){return new Ef(e,!0)}/**
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
 */class Ll{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class sp{constructor(t,n,r,i,s,o,l,a){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=a,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Ll(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===m.RESOURCE_EXHAUSTED?(Wt(n.toString()),Wt("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{t(()=>{const i=new y(m.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class op extends sp{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(U(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=Cf(t.writeResults,t.commitTime),r=ae(t.commitTime);return this.listener.I_(r,n)}return U(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Rf(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>Sf(this.serializer,r))};this.e_(n)}}/**
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
 */class ap extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new y(m.UNKNOWN,i.toString())})}Co(t,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(m.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class lp{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Wt(n),this.f_=!1):_("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class up{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{En(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=V(a);u.C_.add(4),await vn(u),u.M_.set("Unknown"),u.C_.delete(4),await Vr(u)}(this))})}),this.M_=new lp(r,i)}}async function Vr(e){if(En(e))for(const t of e.v_)await t(!0)}async function vn(e){for(const t of e.v_)await t(!1)}function En(e){return V(e).C_.size===0}async function Fl(e,t,n){if(!Rr(t))throw t;e.C_.add(1),await vn(e),e.M_.set("Offline"),n||(n=()=>Jf(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await Vr(e)})}function Ul(e,t){return t().catch(n=>Fl(e,n,t))}async function Dr(e){const t=V(e),n=Ot(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;cp(t);)try{const i=await Zf(t.localStore,r);if(i===null){t.b_.length===0&&n.Zo();break}r=i.batchId,hp(t,i)}catch(i){await Fl(t,i)}Bl(t)&&jl(t)}function cp(e){return En(e)&&e.b_.length<10}function hp(e,t){e.b_.push(t);const n=Ot(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function Bl(e){return En(e)&&!Ot(e).jo()&&e.b_.length>0}function jl(e){Ot(e).start()}async function dp(e){Ot(e).E_()}async function fp(e){const t=Ot(e);for(const n of e.b_)t.P_(n.mutations)}async function pp(e,t,n){const r=e.b_.shift(),i=ls.from(r,t,n);await Ul(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Dr(e)}async function mp(e,t){t&&Ot(e).h_&&await async function(r,i){if(function(o){return yf(o)&&o!==m.ABORTED}(i.code)){const s=r.b_.shift();Ot(r).Yo(),await Ul(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Dr(r)}}(e,t),Bl(e)&&jl(e)}async function fo(e,t){const n=V(e);n.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=En(n);n.C_.add(3),await vn(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await Vr(n)}async function gp(e,t){const n=V(e);t?(n.C_.delete(2),await Vr(n)):t||(n.C_.add(2),await vn(n),n.M_.set("Unknown"))}function Ot(e){return e.N_||(e.N_=function(n,r,i){const s=V(n);return s.A_(),new op(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:dp.bind(null,e),Io:mp.bind(null,e),T_:fp.bind(null,e),I_:pp.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await Dr(e)):(await e.N_.stop(),e.b_.length>0&&(_("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
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
 */class ds{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ht,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,l=new ds(t,n,o,i,s);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(m.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hl(e,t){if(Wt("AsyncQueue",`${t}: ${e}`),Rr(e))return new y(m.UNAVAILABLE,`${t}: ${e}`);throw e}class _p{constructor(){this.queries=new Ee(t=>Tl(t),Al),this.onlineState="Unknown",this.q_=new Set}}function yp(e){e.q_.forEach(t=>{t.next()})}class vp{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Ee(l=>Tl(l),Al),this.fa=new Map,this.ga=new Set,this.pa=new nt(E.comparator),this.ya=new Map,this.wa=new us,this.Sa={},this.ba=new Map,this.Da=me.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function Ep(e,t,n){const r=Ip(e);try{const i=await function(o,l){const a=V(o),u=L.now(),c=l.reduce((p,A)=>p.add(A.key),Y());let h,d;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let A=er(),C=Y();return a.ss.getEntries(p,c).next(R=>{A=R,A.forEach((j,H)=>{H.isValidDocument()||(C=C.add(j))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,A)).next(R=>{h=R;const j=[];for(const H of l){const it=pf(H,h.get(H.key).overlayedDocument);it!=null&&j.push(new Jt(H.key,it,pl(it.value.mapValue),Et.exists(!0)))}return a.mutationQueue.addMutationBatch(p,u,j,l)}).next(R=>{d=R;const j=R.applyToLocalDocumentSet(h,C);return a.documentOverlayCache.saveOverlays(p,R.batchId,j)})}).then(()=>({batchId:d.batchId,changes:Il(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,a){let u=o.Sa[o.currentUser.toKey()];u||(u=new nt(S)),u=u.insert(l,a),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Nr(r,i.changes),await Dr(r.remoteStore)}catch(i){const s=Hl(i,"Failed to persist write");n.reject(s)}}function po(e,t,n){const r=V(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const l=o.view.Q_(t);l.snapshot&&i.push(l.snapshot)}),function(o,l){const a=V(o);a.onlineState=l;let u=!1;a.queries.forEach((c,h)=>{for(const d of h.listeners)d.Q_(l)&&(u=!0)}),u&&yp(a)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ap(e,t){const n=V(e),r=t.batch.batchId;try{const i=await Yf(n.localStore,t);zl(n,r,null),ql(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Nr(n,i)}catch(i){await cl(i)}}async function Tp(e,t,n){const r=V(e);try{const i=await function(o,l){const a=V(o);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,l).next(h=>(U(h!==null),c=h.keys(),a.mutationQueue.removeMutationBatch(u,h))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,l)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(r.localStore,t);zl(r,t,n),ql(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Nr(r,i)}catch(i){await cl(i)}}function ql(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function zl(e,t,n){const r=V(e);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}async function Nr(e,t,n){const r=V(e),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((l,a)=>{o.push(r.va(a,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=hs.Qi(a.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(a,u){const c=V(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(u,d=>f.forEach(d.ki,p=>c.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>f.forEach(d.qi,p=>c.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Rr(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=c.ts.get(d),A=p.snapshotVersion,C=p.withLastLimboFreeSnapshotVersion(A);c.ts=c.ts.insert(d,C)}}}(r.localStore,s))}async function wp(e,t){const n=V(e);if(!n.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await $l(n.localStore,t);n.currentUser=t,function(s,o){s.ba.forEach(l=>{l.forEach(a=>{a.reject(new y(m.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Nr(n,r._s)}}function Ip(e){const t=V(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ap.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Tp.bind(null,t),t}class mo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=br(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Xf(this.persistence,new Wf,t.initialUser,this.serializer)}createPersistence(t){return new zf(cs.jr,this.serializer)}createSharedClientState(t){return new tp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Rp{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>po(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=wp.bind(null,this.syncEngine),await gp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new _p}()}createDatastore(t){const n=br(t.databaseInfo.databaseId),r=function(s){return new ip(s)}(t.databaseInfo);return function(s,o,l,a){return new ap(s,o,l,a)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,l){return new up(r,i,s,o,l)}(this.localStore,this.datastore,t.asyncQueue,n=>po(this.syncEngine,n,0),function(){return ho.D()?new ho:new ep}())}createSyncEngine(t,n){return function(i,s,o,l,a,u,c){const h=new vp(i,s,o,l,a,u);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=V(n);_("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await vn(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Pp{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=X.UNAUTHENTICATED,this.clientId=ul.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ht;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Hl(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Zr(e,t){e.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $l(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function go(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Cp(e);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>fo(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>fo(t.remoteStore,s)),e._onlineComponents=t}function Sp(e){return e.name==="FirebaseError"?e.code===m.FAILED_PRECONDITION||e.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Cp(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Sp(n))throw n;Qn("Error using user provided cache. Falling back to memory cache: "+n),await Zr(e,new mo)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Zr(e,new mo);return e._offlineComponents}async function bp(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await go(e,e._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await go(e,new Rp))),e._onlineComponents}function Vp(e){return bp(e).then(t=>t.syncEngine)}/**
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
 */function Gl(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const _o=new Map;/**
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
 */function Kl(e,t,n){if(!n)throw new y(m.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Dp(e,t,n,r){if(t===!0&&r===!0)throw new y(m.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function yo(e){if(!E.isDocumentKey(e))throw new y(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function vo(e){if(E.isDocumentKey(e))throw new y(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function fs(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":T()}function Wl(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new y(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=fs(e);throw new y(m.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Eo{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Dp("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new y(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new y(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new y(m.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Or{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Eo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Eo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ad;switch(r.type){case"firstParty":return new Rd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_o.get(n);r&&(_("ComponentProvider","Removing Datastore"),_o.delete(n),r.terminate())}(this),Promise.resolve()}}function Np(e,t,n,r={}){var i;const s=(e=Wl(e,Or))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Qn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,a;if(typeof r.mockUserToken=="string")l=r.mockUserToken,a=X.MOCK_USER;else{l=Ju(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new y(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new X(u)}e._authCredentials=new Td(new ll(l,a))}}/**
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
 */class ps{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ps(this.firestore,t,this._query)}}class At{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new At(this.firestore,t,this._key)}}class Vt extends ps{constructor(t,n,r){super(t,n,Yd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new At(this.firestore,null,new E(t))}withConverter(t){return new Vt(this.firestore,t,this._path)}}function Op(e,t,...n){if(e=Be(e),Kl("collection","path",t),e instanceof Or){const r=N.fromString(t,...n);return vo(r),new Vt(e,null,r)}{if(!(e instanceof At||e instanceof Vt))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(N.fromString(t,...n));return vo(r),new Vt(e.firestore,null,r)}}function Mp(e,t,...n){if(e=Be(e),arguments.length===1&&(t=ul.newId()),Kl("doc","path",t),e instanceof Or){const r=N.fromString(t,...n);return yo(r),new At(e,null,new E(r))}{if(!(e instanceof At||e instanceof Vt))throw new y(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(N.fromString(t,...n));return yo(r),new At(e.firestore,e instanceof Vt?e.converter:null,new E(r))}}/**
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
 */class kp{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Ll(this,"async_queue_retry"),this.iu=()=>{const n=Jr();n&&_("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=Jr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=Jr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new Ht;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Rr(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Wt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=ds.createAndSchedule(this,t,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&T()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}class Ql extends Or{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new kp}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Xl(this),this._firestoreClient.terminate()}}function xp(e,t){const n=typeof e=="object"?e:nh(),r=typeof e=="string"?e:t||"(default)",i=Jc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Xu("firestore");s&&Np(i,...s)}return i}function $p(e){return e._firestoreClient||Xl(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Xl(e){var t,n,r;const i=e._freezeSettings(),s=function(l,a,u,c){return new Ld(l,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,Gl(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Pp(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class rn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new rn(wt.fromBase64String(t))}catch(n){throw new y(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new rn(wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Yl{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new y(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new K(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Jl{constructor(t){this._methodName=t}}/**
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
 */class Zl{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new y(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new y(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return S(this._lat,t._lat)||S(this._long,t._long)}}/**
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
 */const Lp=/^__.*__$/;class Fp{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Jt(t,this.data,this.fieldMask,n,this.fieldTransforms):new yn(t,this.data,n,this.fieldTransforms)}}function tu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class ms{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new ms(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return ir(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(tu(this.Iu)&&Lp.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Up{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||br(t)}pu(t,n,r,i=!1){return new ms({Iu:t,methodName:n,gu:r,path:K.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Bp(e){const t=e._freezeSettings(),n=br(e._databaseId);return new Up(e._databaseId,!!t.ignoreUndefinedProperties,n)}function jp(e,t,n,r,i,s={}){const o=e.pu(s.merge||s.mergeFields?2:0,t,n,i);iu("Data must be an object, but it was:",o,r);const l=nu(r,o);let a,u;if(s.merge)a=new ct(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Hp(t,h,n);if(!o.contains(d))throw new y(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Gp(c,d)||c.push(d)}a=new ct(c),u=o.fieldTransforms.filter(h=>a.covers(h.field))}else a=null,u=o.fieldTransforms;return new Fp(new lt(l),a,u)}function eu(e,t){if(ru(e=Be(e)))return iu("Unsupported field value:",t,e),nu(e,t);if(e instanceof Jl)return function(r,i){if(!tu(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let a=eu(l,i.Vu(o));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lf(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=L.fromDate(r);return{timestampValue:Ri(i.serializer,s)}}if(r instanceof L){const s=new L(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ri(i.serializer,s)}}if(r instanceof Zl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof rn)return{bytesValue:Af(i.serializer,r._byteString)};if(r instanceof At){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:kl(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${fs(r)}`)}(e,t)}function nu(e,t){const n={};return dl(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):_n(e,(r,i)=>{const s=eu(i,t.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ru(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof L||e instanceof Zl||e instanceof rn||e instanceof At||e instanceof Jl)}function iu(e,t,n){if(!ru(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=fs(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function Hp(e,t,n){if((t=Be(t))instanceof Yl)return t._internalPath;if(typeof t=="string")return zp(e,t);throw ir("Field path arguments must be of type string or ",e,!1,void 0,n)}const qp=new RegExp("[~\\*/\\[\\]]");function zp(e,t,n){if(t.search(qp)>=0)throw ir(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Yl(...t.split("."))._internalPath}catch{throw ir(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ir(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${t}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let a="";return(s||o)&&(a+=" (found",s&&(a+=` in field ${r}`),o&&(a+=` in document ${i}`),a+=")"),new y(m.INVALID_ARGUMENT,l+e+a)}function Gp(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */function Kp(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}function Wp(e,t){const n=Wl(e.firestore,Ql),r=Mp(e),i=Kp(e.converter,t);return Qp(n,[jp(Bp(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,Et.exists(!1))]).then(()=>r)}function Qp(e,t){return function(r,i){const s=new Ht;return r.asyncQueue.enqueueAndForget(async()=>Ep(await Vp(r),i,s)),s.promise}($p(e),t)}(function(t,n=!0){(function(i){ve=i})(eh),Bn(new je("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Ql(new wd(r.getProvider("auth-internal")),new Sd(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new y(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jn(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),se(Ys,"4.3.2",t),se(Ys,"4.3.2","esm2017")})();const Xp={apiKey:"AIzaSyA3Sky6JC3wvwMOtBZVq0kriDn-yahQGPI",authDomain:"records-gym.firebaseapp.com",projectId:"records-gym",storageBucket:"records-gym.appspot.com",messagingSenderId:"475219948832",appId:"1:475219948832:web:2cca9778dc243291951345",measurementId:"G-90TH94RHLY"},Yp=ra(Xp),Jp=xp(Yp);class su extends vt{createRenderRoot(){return this}handleSubmit(t){t.preventDefault(),console.log("entra");const n={name:this.querySelector("#exerciseName").value,description:this.querySelector("#description").value,type:this.querySelector("#type").value,muscleGroup:this.querySelector("#muscleGroup").value};this.addExerciseToFirebase(n)}async addExerciseToFirebase(t){try{console.log(t);const n=await Wp(Op(Jp,"exercises"),t);console.log("Document written with ID: ",n.id)}catch(n){console.error("Error adding document: ",n)}}render(){return an`
    <form @submit="${this.handleSubmit}">
      <label for="exerciseName">Exercise name:</label>
        <input type="text" id="exerciseName" name="exerciseName">
      
        <label for="description">Description:</label>
        <textarea id="description" name="description"></textarea>
      
        <label for="type">Exercise type:</label>
        <select id="type" name="type">
          <option value="cardiovascular">Cardiovascular</option>
          <option value="strength">Fuerza</option>
          <!-- Otras opciones... -->
        </select>
        <label for="muscleGroup">Muscle Group:</label>
        <select id="muscleGroup" name="muscleGroup">
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

        <button type="submit">Add exercise</button>
  </form>
    `}}Zt(su,"styles",on`

  `);customElements.define("exercise-element",su);class ou extends vt{createRenderRoot(){return this}render(){return an`
      <header-gym></header-gym>
      <div class="col-lg-5 col-md-6">
        <div class="form_container pr-0 pr-lg-5 mr-0 mr-lg-2">
          <div class="heading_container">
            <h2>
              Add Exercise
            </h2>
          </div>
          <exercise-element></exercise-element>
        </div>
    </div>
    `}}Zt(ou,"styles",on`
  `);customElements.define("exercises-page",ou);function sr(e){return e=e||[],Array.isArray(e)?e:[e]}function ht(e){return`[Vaadin.Router] ${e}`}function Zp(e){if(typeof e!="object")return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return t==="Object"||t==="Array"?`${t} ${JSON.stringify(e)}`:t}const or="module",ar="nomodule",Si=[or,ar];function Ao(e){if(!e.match(/.+\.[m]?js$/))throw new Error(ht(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function au(e){if(!e||!ut(e.path))throw new Error(ht('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!Xt(e.action)&&!Array.isArray(e.children)&&!Xt(e.children)&&!lr(t)&&!n.some(r=>ut(e[r])))throw new Error(ht(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(ut(t))Ao(t);else if(Si.some(r=>r in t))Si.forEach(r=>r in t&&Ao(t[r]));else throw new Error(ht('Expected route bundle to include either "'+ar+'" or "'+or+'" keys, or both'));e.redirect&&["bundle","component"].forEach(r=>{r in e&&console.warn(ht(`Route config "${e.path}" has both "redirect" and "${r}" properties, and "redirect" will always override the latter. Did you mean to only use "${r}"?`))})}function To(e){sr(e).forEach(t=>au(t))}function wo(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),t===or?n.setAttribute("type",or):t===ar&&n.setAttribute(ar,""),n.async=!0),new Promise((r,i)=>{n.onreadystatechange=n.onload=s=>{n.__dynamicImportLoaded=!0,r(s)},n.onerror=s=>{n.parentNode&&n.parentNode.removeChild(n),i(s)},n.parentNode===null?document.head.appendChild(n):n.__dynamicImportLoaded&&r()})}function tm(e){return ut(e)?wo(e):Promise.race(Si.filter(t=>t in e).map(t=>wo(e[t],t)))}function Le(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:e==="go",detail:t}))}function lr(e){return typeof e=="object"&&!!e}function Xt(e){return typeof e=="function"}function ut(e){return typeof e=="string"}function lu(e){const t=new Error(ht(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const ie=new class{};function em(e){const t=e.port,n=e.protocol,s=n==="http:"&&t==="80"||n==="https:"&&t==="443"?e.hostname:e.host;return`${n}//${s}`}function Io(e){if(e.defaultPrevented||e.button!==0||e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let l=0;l<n.length;l++){const a=n[l];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){t=a;break}}for(;t&&t.nodeName.toLowerCase()!=="a";)t=t.parentNode;if(!t||t.nodeName.toLowerCase()!=="a"||t.target&&t.target.toLowerCase()!=="_self"||t.hasAttribute("download")||t.hasAttribute("router-ignore")||t.pathname===window.location.pathname&&t.hash!==""||(t.origin||em(t))!==window.location.origin)return;const{pathname:i,search:s,hash:o}=t;Le("go",{pathname:i,search:s,hash:o})&&(e.preventDefault(),e&&e.type==="click"&&window.scrollTo(0,0))}const nm={activate(){window.document.addEventListener("click",Io)},inactivate(){window.document.removeEventListener("click",Io)}},rm=/Trident/.test(navigator.userAgent);rm&&!Xt(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,!!t.bubbles,!!t.cancelable),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);function Ro(e){if(e.state==="vaadin-router-ignore")return;const{pathname:t,search:n,hash:r}=window.location;Le("go",{pathname:t,search:n,hash:r})}const im={activate(){window.addEventListener("popstate",Ro)},inactivate(){window.removeEventListener("popstate",Ro)}};var Ae=pu,sm=gs,om=cm,am=hu,lm=fu,uu="/",cu="./",um=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function gs(e,t){for(var n=[],r=0,i=0,s="",o=t&&t.delimiter||uu,l=t&&t.delimiters||cu,a=!1,u;(u=um.exec(e))!==null;){var c=u[0],h=u[1],d=u.index;if(s+=e.slice(i,d),i=d+c.length,h){s+=h[1],a=!0;continue}var p="",A=e[i],C=u[2],R=u[3],j=u[4],H=u[5];if(!a&&s.length){var it=s.length-1;l.indexOf(s[it])>-1&&(p=s[it],s=s.slice(0,it))}s&&(n.push(s),s="",a=!1);var _t=p!==""&&A!==void 0&&A!==p,An=H==="+"||H==="*",Te=H==="?"||H==="*",we=p||o,Mr=R||j;n.push({name:C||r++,prefix:p,delimiter:we,optional:Te,repeat:An,partial:_t,pattern:Mr?hm(Mr):"[^"+It(we)+"]+?"})}return(s||i<e.length)&&n.push(s+e.substr(i)),n}function cm(e,t){return hu(gs(e,t))}function hu(e){for(var t=new Array(e.length),n=0;n<e.length;n++)typeof e[n]=="object"&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(r,i){for(var s="",o=i&&i.encode||encodeURIComponent,l=0;l<e.length;l++){var a=e[l];if(typeof a=="string"){s+=a;continue}var u=r?r[a.name]:void 0,c;if(Array.isArray(u)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(u.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var h=0;h<u.length;h++){if(c=o(u[h],a),!t[l].test(c))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(h===0?a.prefix:a.delimiter)+c}continue}if(typeof u=="string"||typeof u=="number"||typeof u=="boolean"){if(c=o(String(u),a),!t[l].test(c))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+c+'"');s+=a.prefix+c;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function It(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function hm(e){return e.replace(/([=!:$/()])/g,"\\$1")}function du(e){return e&&e.sensitive?"":"i"}function dm(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function fm(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(pu(e[i],t,n).source);return new RegExp("(?:"+r.join("|")+")",du(n))}function pm(e,t,n){return fu(gs(e,n),t,n)}function fu(e,t,n){n=n||{};for(var r=n.strict,i=n.start!==!1,s=n.end!==!1,o=It(n.delimiter||uu),l=n.delimiters||cu,a=[].concat(n.endsWith||[]).map(It).concat("$").join("|"),u=i?"^":"",c=e.length===0,h=0;h<e.length;h++){var d=e[h];if(typeof d=="string")u+=It(d),c=h===e.length-1&&l.indexOf(d[d.length-1])>-1;else{var p=d.repeat?"(?:"+d.pattern+")(?:"+It(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;t&&t.push(d),d.optional?d.partial?u+=It(d.prefix)+"("+p+")?":u+="(?:"+It(d.prefix)+"("+p+"))?":u+=It(d.prefix)+"("+p+")"}}return s?(r||(u+="(?:"+o+")?"),u+=a==="$"?"$":"(?="+a+")"):(r||(u+="(?:"+o+"(?="+a+"))?"),c||(u+="(?="+o+"|"+a+")")),new RegExp(u,du(n))}function pu(e,t,n){return e instanceof RegExp?dm(e,t):Array.isArray(e)?fm(e,t,n):pm(e,t,n)}Ae.parse=sm;Ae.compile=om;Ae.tokensToFunction=am;Ae.tokensToRegExp=lm;const{hasOwnProperty:mm}=Object.prototype,Ci=new Map;Ci.set("|false",{keys:[],pattern:/(?:)/});function Po(e){try{return decodeURIComponent(e)}catch{return e}}function gm(e,t,n,r,i){n=!!n;const s=`${e}|${n}`;let o=Ci.get(s);if(!o){const u=[];o={keys:u,pattern:Ae(e,u,{end:n,strict:e===""})},Ci.set(s,o)}const l=o.pattern.exec(t);if(!l)return null;const a=Object.assign({},i);for(let u=1;u<l.length;u++){const c=o.keys[u-1],h=c.name,d=l[u];(d!==void 0||!mm.call(a,h))&&(c.repeat?a[h]=d?d.split(c.delimiter).map(Po):[]:a[h]=d&&Po(d))}return{path:l[0],keys:(r||[]).concat(o.keys),params:a}}function mu(e,t,n,r,i){let s,o,l=0,a=e.path||"";return a.charAt(0)==="/"&&(n&&(a=a.substr(1)),n=!0),{next(u){if(e===u)return{done:!0};const c=e.__children=e.__children||e.children;if(!s&&(s=gm(a,t,!c,r,i),s))return{done:!1,value:{route:e,keys:s.keys,params:s.params,path:s.path}};if(s&&c)for(;l<c.length;){if(!o){const d=c[l];d.parent=e;let p=s.path.length;p>0&&t.charAt(p)==="/"&&(p+=1),o=mu(d,t.substr(p),n,s.keys,s.params)}const h=o.next(u);if(!h.done)return{done:!1,value:h.value};o=null,l++}return{done:!0}}}}function _m(e){if(Xt(e.route.action))return e.route.action(e)}function ym(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}function vm(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}function Em(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const i={path:r,route:n};if(!e.chain)e.chain=[];else if(n.parent){let s=e.chain.length;for(;s--&&e.chain[s].route&&e.chain[s].route!==n.parent;)e.chain.pop()}e.chain.push(i)}}class sn{constructor(t,n={}){if(Object(t)!==t)throw new TypeError("Invalid routes");this.baseUrl=n.baseUrl||"",this.errorHandler=n.errorHandler,this.resolveRoute=n.resolveRoute||_m,this.context=Object.assign({resolver:this},n.context),this.root=Array.isArray(t)?{path:"",__children:t,parent:null,__synthetic:!0}:t,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(t){To(t);const n=[...sr(t)];this.root.__children=n}addRoutes(t){return To(t),this.root.__children.push(...sr(t)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(t){const n=Object.assign({},this.context,ut(t)?{pathname:t}:t),r=mu(this.root,this.__normalizePathname(n.pathname),this.baseUrl),i=this.resolveRoute;let s=null,o=null,l=n;function a(u,c=s.value.route,h){const d=h===null&&s.value.route;return s=o||r.next(d),o=null,!u&&(s.done||!ym(c,s.value.route))?(o=s,Promise.resolve(ie)):s.done?Promise.reject(lu(n)):(l=Object.assign(l?{chain:l.chain?l.chain.slice(0):[]}:{},n,s.value),Em(l,s.value),Promise.resolve(i(l)).then(p=>p!=null&&p!==ie?(l.result=p.result||p,l):a(u,c,p)))}return n.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(u=>{const c=vm(l);if(u?console.warn(c):u=new Error(c),u.context=u.context||l,u instanceof DOMException||(u.code=u.code||500),this.errorHandler)return l.result=this.errorHandler(u),l;throw u})}static __createUrl(t,n){return new URL(t,n)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(t){if(!this.baseUrl)return t;const n=this.__effectiveBaseUrl,r=this.constructor.__createUrl(t,n).href;if(r.slice(0,n.length)===n)return r.slice(n.length)}}sn.pathToRegexp=Ae;const{pathToRegexp:So}=sn,Co=new Map;function gu(e,t,n){const r=t.name||t.component;if(r&&(e.has(r)?e.get(r).push(t):e.set(r,[t])),Array.isArray(n))for(let i=0;i<n.length;i++){const s=n[i];s.parent=t,gu(e,s,s.__children||s.children)}}function bo(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function Vo(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,t!==void 0?t:""}function Am(e,t={}){if(!(e instanceof sn))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,i)=>{let s=bo(n,r);if(!s&&(n.clear(),gu(n,e.root,e.root.__children),s=bo(n,r),!s))throw new Error(`Route "${r}" not found`);let o=Co.get(s.fullPath);if(!o){let a=Vo(s),u=s.parent;for(;u;){const p=Vo(u);p&&(a=p.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),u=u.parent}const c=So.parse(a),h=So.tokensToFunction(c),d=Object.create(null);for(let p=0;p<c.length;p++)ut(c[p])||(d[c[p].name]=!0);o={toPath:h,keys:d},Co.set(a,o),s.fullPath=a}let l=o.toPath(i,t)||"/";if(t.stringifyQueryParams&&i){const a={},u=Object.keys(i);for(let h=0;h<u.length;h++){const d=u[h];o.keys[d]||(a[d]=i[d])}const c=t.stringifyQueryParams(a);c&&(l+=c.charAt(0)==="?"?c:`?${c}`)}return l}}let Do=[];function Tm(e){Do.forEach(t=>t.inactivate()),e.forEach(t=>t.activate()),Do=e}const wm=e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&t!=="none"},Im=(e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)};function No(e,t){return e.classList.add(t),new Promise(n=>{if(wm(e)){const r=e.getBoundingClientRect(),i=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${i}`),Im(e,()=>{e.classList.remove(t),e.removeAttribute("style"),n()})}else e.classList.remove(t),n()})}const Rm=256;function ti(e){return e!=null}function Pm(e){const t=Object.assign({},e);return delete t.next,t}function ot({pathname:e="",search:t="",hash:n="",chain:r=[],params:i={},redirectFrom:s,resolver:o},l){const a=r.map(u=>u.route);return{baseUrl:o&&o.baseUrl||"",pathname:e,search:t,hash:n,routes:a,route:l||a.length&&a[a.length-1]||null,params:i,redirectFrom:s,getUrl:(u={})=>xn(Pt.pathToRegexp.compile(_u(a))(Object.assign({},i,u)),o)}}function Oo(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function Sm(e,t){t.location=ot(e);const n=e.chain.map(r=>r.route).indexOf(e.route);return e.chain[n].element=t,t}function kn(e,t,n){if(Xt(e))return e.apply(n,t)}function Mo(e,t,n){return r=>{if(r&&(r.cancel||r.redirect))return r;if(n)return kn(n[e],t,n)}}function Cm(e,t){if(!Array.isArray(e)&&!lr(e))throw new Error(ht(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=sr(e);for(let r=0;r<n.length;r++)au(n[r]),t.__children.push(n[r])}function Dn(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function xn(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function _u(e){return e.map(t=>t.path).reduce((t,n)=>n.length?t.replace(/\/$/,"")+"/"+n.replace(/^\//,""):t,"")}class Pt extends sn{constructor(t,n){const r=document.head.querySelector("base"),i=r&&r.getAttribute("href");super([],Object.assign({baseUrl:i&&sn.__createUrl(i,document.URL).pathname.replace(/[^\/]*$/,"")},n)),this.resolveRoute=o=>this.__resolveRoute(o);const s=Pt.NavigationTrigger;Pt.setTriggers.apply(Pt,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(t),this.location,this.location=ot({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(t),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(t){const n=t.route;let r=Promise.resolve();Xt(n.children)&&(r=r.then(()=>n.children(Pm(t))).then(s=>{!ti(s)&&!Xt(n.children)&&(s=n.children),Cm(s,n)}));const i={redirect:s=>Oo(t,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return r.then(()=>{if(this.__isLatestRender(t))return kn(n.action,[t,i],n)}).then(s=>{if(ti(s)&&(s instanceof HTMLElement||s.redirect||s===ie))return s;if(ut(n.redirect))return i.redirect(n.redirect);if(n.bundle)return tm(n.bundle).then(()=>{},()=>{throw new Error(ht(`Bundle not found: ${n.bundle}. Check if the file name is correct`))})}).then(s=>{if(ti(s))return s;if(ut(n.component))return i.component(n.component)})}setOutlet(t){t&&this.__ensureOutlet(t),this.__outlet=t}getOutlet(){return this.__outlet}setRoutes(t,n=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(t),n||this.__onNavigationEvent(),this.ready}render(t,n){const r=++this.__lastStartedRenderId,i=Object.assign({search:"",hash:""},ut(t)?{pathname:t}:t,{__renderId:r});return this.ready=this.resolve(i).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=ot(s),n&&this.__updateBrowserHistory(s,r===1),Le("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const l=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),l.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(r===this.__lastStartedRenderId)throw n&&this.__updateBrowserHistory(i),Dn(this.__outlet&&this.__outlet.children),this.location=ot(Object.assign(i,{resolver:this})),Le("error",Object.assign({router:this,error:s},i)),s}),this.ready}__fullyResolveChain(t,n=t){return this.__findComponentContextAfterAllRedirects(n).then(r=>{const s=r!==n?r:t,l=xn(_u(r.chain),r.resolver)===r.pathname,a=(u,c=u.route,h)=>u.next(void 0,c,h).then(d=>d===null||d===ie?l?u:c.parent!==null?a(u,c.parent,d):d:d);return a(r).then(u=>{if(u===null||u===ie)throw lu(s);return u&&u!==ie&&u!==r?this.__fullyResolveChain(s,u):this.__amendWithOnBeforeCallbacks(r)})})}__findComponentContextAfterAllRedirects(t){const n=t.result;return n instanceof HTMLElement?(Sm(t,n),Promise.resolve(t)):n.redirect?this.__redirect(n.redirect,t.__redirectCount,t.__renderId).then(r=>this.__findComponentContextAfterAllRedirects(r)):n instanceof Error?Promise.reject(n):Promise.reject(new Error(ht(`Invalid route resolution result for path "${t.pathname}". Expected redirect object or HTML element, but got: "${Zp(n)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(t){return this.__runOnBeforeCallbacks(t).then(n=>n===this.__previousContext||n===t?n:this.__fullyResolveChain(n))}__runOnBeforeCallbacks(t){const n=this.__previousContext||{},r=n.chain||[],i=t.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),l=a=>Oo(t,a);if(t.__divergedChainIndex=0,t.__skipAttach=!1,r.length){for(let a=0;a<Math.min(r.length,i.length)&&!(r[a].route!==i[a].route||r[a].path!==i[a].path&&r[a].element!==i[a].element||!this.__isReusableElement(r[a].element,i[a].element));a=++t.__divergedChainIndex);if(t.__skipAttach=i.length===r.length&&t.__divergedChainIndex==i.length&&this.__isReusableElement(t.result,n.result),t.__skipAttach){for(let a=i.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,t,{prevent:o},r[a]);for(let a=0;a<i.length;a++)s=this.__runOnBeforeEnterCallbacks(s,t,{prevent:o,redirect:l},i[a]),r[a].element.location=ot(t,r[a].route)}else for(let a=r.length-1;a>=t.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,t,{prevent:o},r[a])}if(!t.__skipAttach)for(let a=0;a<i.length;a++)a<t.__divergedChainIndex?a<r.length&&r[a].element&&(r[a].element.location=ot(t,r[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,t,{prevent:o,redirect:l},i[a]),i[a].element&&(i[a].element.location=ot(t,i[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=t.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,t.__redirectCount,t.__renderId)}return t})}__runOnBeforeLeaveCallbacks(t,n,r,i){const s=ot(n);return t.then(o=>{if(this.__isLatestRender(n))return Mo("onBeforeLeave",[s,r,this],i.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(t,n,r,i){const s=ot(n,i.route);return t.then(o=>{if(this.__isLatestRender(n))return Mo("onBeforeEnter",[s,r,this],i.element)(o)})}__isReusableElement(t,n){return t&&n?this.__createdByRouter.get(t)&&this.__createdByRouter.get(n)?t.localName===n.localName:t===n:!1}__isLatestRender(t){return t.__renderId===this.__lastStartedRenderId}__redirect(t,n,r){if(n>Rm)throw new Error(ht(`Too many redirects when rendering ${t.from}`));return this.resolve({pathname:this.urlForPath(t.pathname,t.params),redirectFrom:t.from,__redirectCount:(n||0)+1,__renderId:r})}__ensureOutlet(t=this.__outlet){if(!(t instanceof Node))throw new TypeError(ht(`Expected router outlet to be a valid DOM Node (but got ${t})`))}__updateBrowserHistory({pathname:t,search:n="",hash:r=""},i){if(window.location.pathname!==t||window.location.search!==n||window.location.hash!==r){const s=i?"replaceState":"pushState";window.history[s](null,document.title,t+n+r),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(t,n){let r=this.__outlet;for(let i=0;i<t.__divergedChainIndex;i++){const s=n&&n.chain[i].element;if(s)if(s.parentNode===r)t.chain[i].element=s,r=s;else break}return r}__addAppearingContent(t,n){this.__ensureOutlet(),this.__removeAppearingContent();const r=this.__copyUnchangedElements(t,n);this.__appearingContent=[],this.__disappearingContent=Array.from(r.children).filter(s=>this.__addedByRouter.get(s)&&s!==t.result);let i=r;for(let s=t.__divergedChainIndex;s<t.chain.length;s++){const o=t.chain[s].element;o&&(i.appendChild(o),this.__addedByRouter.set(o,!0),i===r&&this.__appearingContent.push(o),i=o)}}__removeDisappearingContent(){this.__disappearingContent&&Dn(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(Dn(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(t,n){if(n)for(let r=n.chain.length-1;r>=t.__divergedChainIndex&&this.__isLatestRender(t);r--){const i=n.chain[r].element;if(i)try{const s=ot(t);kn(i.onAfterLeave,[s,{},n.resolver],i)}finally{this.__disappearingContent.indexOf(i)>-1&&Dn(i.children)}}}__runOnAfterEnterCallbacks(t){for(let n=t.__divergedChainIndex;n<t.chain.length&&this.__isLatestRender(t);n++){const r=t.chain[n].element||{},i=ot(t,t.chain[n].route);kn(r.onAfterEnter,[i,{},t.resolver],r)}}__animateIfNeeded(t){const n=(this.__disappearingContent||[])[0],r=(this.__appearingContent||[])[0],i=[],s=t.chain;let o;for(let l=s.length;l>0;l--)if(s[l-1].route.animate){o=s[l-1].route.animate;break}if(n&&r&&o){const l=lr(o)&&o.leave||"leaving",a=lr(o)&&o.enter||"entering";i.push(No(n,l)),i.push(No(r,a))}return Promise.all(i).then(()=>t)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(t){const{pathname:n,search:r,hash:i}=t?t.detail:window.location;ut(this.__normalizePathname(n))&&(t&&t.preventDefault&&t.preventDefault(),this.render({pathname:n,search:r,hash:i},!0))}static setTriggers(...t){Tm(t)}urlForName(t,n){return this.__urlForName||(this.__urlForName=Am(this)),xn(this.__urlForName(t,n),this)}urlForPath(t,n){return xn(Pt.pathToRegexp.compile(t)(n),this)}static go(t){const{pathname:n,search:r,hash:i}=ut(t)?this.__createUrl(t,"http://a"):t;return Le("go",{pathname:n,search:r,hash:i})}}const bm=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,$n=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function Vm(){function e(){return!0}return yu(e)}function Dm(){try{return Nm()?!0:Om()?$n?!Mm():!Vm():!1}catch{return!1}}function Nm(){return localStorage.getItem("vaadin.developmentmode.force")}function Om(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Mm(){return!!($n&&Object.keys($n).map(t=>$n[t]).filter(t=>t.productionMode).length>0)}function yu(e,t){if(typeof e!="function")return;const n=bm.exec(e.toString());if(n)try{e=new Function(n[1])}catch(r){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",r)}return e(t)}window.Vaadin=window.Vaadin||{};const ko=function(e,t){if(window.Vaadin.developmentMode)return yu(e,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Dm());function km(){}const xm=function(){if(typeof ko=="function")return ko(km)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});xm();Pt.NavigationTrigger={POPSTATE:im,CLICK:nm};window.addEventListener("load",()=>{new Pt(document.querySelector("main"),{baseUrl:"/records_gym/"}).setRoutes([{path:"/",component:"home-page"},{path:"/exercises-page",component:"exercises-page"},{path:"/trainers",component:"my-trainers"}])});
