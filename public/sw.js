if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),u={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>u[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Q1q9uQ7QR0EDgxRe8Znm-/_buildManifest.js",revision:"a201ef1765af435ececb25db5c72c9a5"},{url:"/_next/static/Q1q9uQ7QR0EDgxRe8Znm-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/173-7be02dd55462ff0c.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.d8ec56f1948566fd.js",revision:"d8ec56f1948566fd"},{url:"/_next/static/chunks/455-ab7fd86b9ed14b66.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/4bd1b696-9924fae48e609361.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/659-90777ffd408f5e9a.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/8e1d74a4-5de86211f900fc6f.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/_not-found/page-fd940225a6d2b5f0.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/auth/confirm/route-519ef2a6d17c6aec.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/booking/%5BitemId%5D/page-02dc8dcf1eeff0af.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/categories/%5Bcategory%5D/items/page-bd8384d68aa7c5df.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/categories/page-7a12c20888ab3faa.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/error/page-97916fe89293aba4.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/home/page-3929815f671a3618.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/items/%5BitemId%5D/page-c2baa2430bc3cda6.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/layout-91d403ed135069a8.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/login/page-eb93f2dc0917e1e5.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/page-c6926b32e265f31b.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/profile/history/page-40cd2cd16ccd3bea.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/profile/my-items/add-item/page-9937eb1338832f63.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/profile/my-items/page-f4d293f7a33189a7.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/profile/page-7a8b9b0002063077.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/profile/personal-details/page-1dc5fb12a2638dd6.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/app/register/page-f8a5787853afd0da.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/c916193b-80ba9fc4d9c96a6d.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/framework-d29117d969504448.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/main-7cb6f69c08b10d5b.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/main-app-201d3300f82cdc5b.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/pages/_app-212dac839c3d84e1.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/pages/_error-dd539ddcc11d9755.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-cf1b53ff7134aa94.js",revision:"Q1q9uQ7QR0EDgxRe8Znm-"},{url:"/_next/static/css/40e1f293d8f8239e.css",revision:"40e1f293d8f8239e"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/manifest.ts",revision:"9bb58c568ad5b262f9cd19f60f0c5b32"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"a0adc3a392b9f6f56e6a4cd0ce847fff"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:function(e){return _ref.apply(this,arguments)}}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.sameOrigin,n=e.url.pathname;return!(!s||n.startsWith("/api/auth/callback")||!n.startsWith("/api/"))}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.request,n=e.url.pathname,a=e.sameOrigin;return"1"===s.headers.get("RSC")&&"1"===s.headers.get("Next-Router-Prefetch")&&a&&!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.request,n=e.url.pathname,a=e.sameOrigin;return"1"===s.headers.get("RSC")&&a&&!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){var s=e.url.pathname;return e.sameOrigin&&!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((function(e){return!e.sameOrigin}),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
