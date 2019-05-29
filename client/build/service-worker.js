"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","ee06304d17bbd4c3edaeecf2c89900f4"],["/static/css/main.9950ec72.css","5daeddbdb02124e089b51603b314d737"],["/static/js/main.e2eeaec0.js","d2853524300bd7fd7a52534bb1343af3"],["/static/media/clojureTesting.eeaa8e81.png","eeaa8e814ba044aa91cc384a44c79692"],["/static/media/cypressTesting.6371b72e.png","6371b72e4b3eec5bce0daddc91fc6f9c"],["/static/media/databaseImage.9eaa52d4.png","9eaa52d4037ab9f2ae6eb15fa8249ed9"],["/static/media/giphyImage.cdea938a.png","cdea938add7980fdec8bd56e7a81bc11"],["/static/media/liriImage.66d5f8bb.png","66d5f8bbe4f15a259a509221d11a82f0"],["/static/media/moodsicImage.089a1909.png","089a19090c54bb910b59f483062cdd4d"],["/static/media/nytimes.001fe746.png","001fe746f35296534846059c111e1a0b"],["/static/media/pigmaticImage.2d8ad448.jpg","2d8ad44895ac359c3aaa13e887497e07"],["/static/media/publicArtImage.e1858016.png","e185801618bb981e679662b4191a9508"],["/static/media/qaDemos.e24bda5e.png","e24bda5e170b97503914492576c7f622"],["/static/media/rubyTesting.8277389d.png","8277389db64d8cbc79801c5a3a3630bd"],["/static/media/scraper.31e04284.png","31e0428428dff2ec19caf2c4bd7e8239"],["/static/media/seleniumDemos.6ef02d80.png","6ef02d80d39f974e56eb7e2d4643b349"],["/static/media/selfimage.54fff098.png","54fff098694e91af59350ea8d55a2328"],["/static/media/trainSchedImage.b2c482dc.png","b2c482dc16b628f34530e2f9bb725603"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});