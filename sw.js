if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const d=e=>n(e,o),l={module:{uri:o},exports:c,require:d};s[o]=Promise.all(i.map((e=>l[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/bootstrap.css",revision:null},{url:"assets/css/normalize.css",revision:null},{url:"assets/css/responsive.css",revision:null},{url:"assets/css/style.css",revision:null},{url:"assets/index-usIlJ279.js",revision:null},{url:"assets/js/bootstrap.js",revision:null},{url:"assets/js/jquery-3.4.1.min.js",revision:null},{url:"components/exercise-element/add/add.js",revision:"6e0246e95ef779810cea321820030123"},{url:"components/exercise-element/delete/delete.js",revision:"0d6b4c88c62ab5d3635b870c1b3402c9"},{url:"components/exercise-element/exercise-element.js",revision:"dd41f95b47bd68dd7875adf477f86740"},{url:"components/exercise-element/modify/modify.js",revision:"0979dd36527f46388a85ee9fbadf4420"},{url:"components/header/header.js",revision:"fd669362f25fec2399d7bf04c5a2e6d9"},{url:"components/menu/menu.js",revision:"d4934319a67d1de7e9e31aecb3124a05"},{url:"components/modal/modal.js",revision:"a3c6016e2e0128379c8c52419c219655"},{url:"components/spinner/spinner.js",revision:"f87202c0034c1d73489a6839fef7780b"},{url:"home.css",revision:"8dbb29d5c652e556cac34a088a7f76a0"},{url:"index.html",revision:"154e6d8fee864deb2319b49d22e36841"},{url:"pages/exercises-page/exercises-page.js",revision:"8bc62a84da4f2f227d67f27f34863d28"},{url:"pages/home/home.js",revision:"f497cf12cefddc4ac1467255b68af6f3"},{url:"registerSW.js",revision:"23449167af5f3c019d7dd1cc497b725d"},{url:"manifest.webmanifest",revision:"095d89bd5dc1b9a5a645f05cfea53f5d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
