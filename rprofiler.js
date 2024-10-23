
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************************************!*\
  !*** ./src/rprofiler/rprofiler.ts + 30 modules ***!
  \*************************************************/
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ rprofiler; }
});

;// CONCATENATED MODULE: ./node_modules/web-vitals/dist/web-vitals.attribution.js
var t,e,n,r=function(){var t=self.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0];if(t&&t.responseStart>0&&t.responseStart<performance.now())return t},i=function(t){if("loading"===document.readyState)return"loading";var e=r();if(e){if(t<e.domInteractive)return"loading";if(0===e.domContentLoadedEventStart||t<e.domContentLoadedEventStart)return"dom-interactive";if(0===e.domComplete||t<e.domComplete)return"dom-content-loaded"}return"complete"},a=function(t){var e=t.nodeName;return 1===t.nodeType?e.toLowerCase():e.toUpperCase().replace(/^#/,"")},o=function(t,e){var n="";try{for(;t&&9!==t.nodeType;){var r=t,i=r.id?"#"+r.id:a(r)+(r.classList&&r.classList.value&&r.classList.value.trim()&&r.classList.value.trim().length?"."+r.classList.value.trim().replace(/\s+/g,"."):"");if(n.length+i.length>(e||100)-1)return n||i;if(n=n?i+">"+n:i,r.id)break;t=r.parentNode}}catch(t){}return n},c=-1,u=function(){return c},s=function(t){addEventListener("pageshow",(function(e){e.persisted&&(c=e.timeStamp,t(e))}),!0)},f=function(){var t=r();return t&&t.activationStart||0},d=function(t,e){var n=r(),i="navigate";u()>=0?i="back-forward-cache":n&&(document.prerendering||f()>0?i="prerender":document.wasDiscarded?i="restore":n.type&&(i=n.type.replace(/_/g,"-")));return{name:t,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v4-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},l=function(t,e,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var r=new PerformanceObserver((function(t){Promise.resolve().then((function(){e(t.getEntries())}))}));return r.observe(Object.assign({type:t,buffered:!0},n||{})),r}}catch(t){}},m=function(t,e,n,r){var i,a;return function(o){e.value>=0&&(o||r)&&((a=e.value-(i||0))||void 0===i)&&(i=e.value,e.delta=a,e.rating=function(t,e){return t>e[1]?"poor":t>e[0]?"needs-improvement":"good"}(e.value,n),t(e))}},p=function(t){requestAnimationFrame((function(){return requestAnimationFrame((function(){return t()}))}))},v=function(t){document.addEventListener("visibilitychange",(function(){"hidden"===document.visibilityState&&t()}))},g=function(t){var e=!1;return function(){e||(t(),e=!0)}},h=-1,T=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},y=function(t){"hidden"===document.visibilityState&&h>-1&&(h="visibilitychange"===t.type?t.timeStamp:0,S())},E=function(){addEventListener("visibilitychange",y,!0),addEventListener("prerenderingchange",y,!0)},S=function(){removeEventListener("visibilitychange",y,!0),removeEventListener("prerenderingchange",y,!0)},b=function(){return h<0&&(h=T(),E(),s((function(){setTimeout((function(){h=T(),E()}),0)}))),{get firstHiddenTime(){return h}}},L=function(t){document.prerendering?addEventListener("prerenderingchange",(function(){return t()}),!0):t()},C=[1800,3e3],M=function(t,e){e=e||{},L((function(){var n,r=b(),i=d("FCP"),a=l("paint",(function(t){t.forEach((function(t){"first-contentful-paint"===t.name&&(a.disconnect(),t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-f(),0),i.entries.push(t),n(!0)))}))}));a&&(n=m(t,i,C,e.reportAllChanges),s((function(r){i=d("FCP"),n=m(t,i,C,e.reportAllChanges),p((function(){i.value=performance.now()-r.timeStamp,n(!0)}))})))}))},w=[.1,.25],D=function(t,e){!function(t,e){e=e||{},M(g((function(){var n,r=d("CLS",0),i=0,a=[],o=function(t){t.forEach((function(t){if(!t.hadRecentInput){var e=a[0],n=a[a.length-1];i&&t.startTime-n.startTime<1e3&&t.startTime-e.startTime<5e3?(i+=t.value,a.push(t)):(i=t.value,a=[t])}})),i>r.value&&(r.value=i,r.entries=a,n())},c=l("layout-shift",o);c&&(n=m(t,r,w,e.reportAllChanges),v((function(){o(c.takeRecords()),n(!0)})),s((function(){i=0,r=d("CLS",0),n=m(t,r,w,e.reportAllChanges),p((function(){return n()}))})),setTimeout(n,0))})))}((function(e){var n=function(t){var e,n={};if(t.entries.length){var r=t.entries.reduce((function(t,e){return t&&t.value>e.value?t:e}));if(r&&r.sources&&r.sources.length){var a=(e=r.sources).find((function(t){return t.node&&1===t.node.nodeType}))||e[0];a&&(n={largestShiftTarget:o(a.node),largestShiftTime:r.startTime,largestShiftValue:r.value,largestShiftSource:a,largestShiftEntry:r,loadState:i(r.startTime)})}}return Object.assign(t,{attribution:n})}(e);t(n)}),e)},x=function(t,e){M((function(e){var n=function(t){var e={timeToFirstByte:0,firstByteToFCP:t.value,loadState:i(u())};if(t.entries.length){var n=r(),a=t.entries[t.entries.length-1];if(n){var o=n.activationStart||0,c=Math.max(0,n.responseStart-o);e={timeToFirstByte:c,firstByteToFCP:t.value-c,loadState:i(t.entries[0].startTime),navigationEntry:n,fcpEntry:a}}}return Object.assign(t,{attribution:e})}(e);t(n)}),e)},I=0,k=1/0,A=0,F=function(t){t.forEach((function(t){t.interactionId&&(k=Math.min(k,t.interactionId),A=Math.max(A,t.interactionId),I=A?(A-k)/7+1:0)}))},P=function(){"interactionCount"in performance||t||(t=l("event",F,{type:"event",buffered:!0,durationThreshold:0}))},B=[],O=new Map,R=0,j=function(){return(t?I:performance.interactionCount||0)-R},q=[],H=function(t){if(q.forEach((function(e){return e(t)})),t.interactionId||"first-input"===t.entryType){var e=B[B.length-1],n=O.get(t.interactionId);if(n||B.length<10||t.duration>e.latency){if(n)t.duration>n.latency?(n.entries=[t],n.latency=t.duration):t.duration===n.latency&&t.startTime===n.entries[0].startTime&&n.entries.push(t);else{var r={id:t.interactionId,latency:t.duration,entries:[t]};O.set(r.id,r),B.push(r)}B.sort((function(t,e){return e.latency-t.latency})),B.length>10&&B.splice(10).forEach((function(t){return O.delete(t.id)}))}}},N=function(t){var e=self.requestIdleCallback||self.setTimeout,n=-1;return t=g(t),"hidden"===document.visibilityState?t():(n=e(t),v(t)),n},W=[200,500],z=function(t,e){"PerformanceEventTiming"in self&&"interactionId"in PerformanceEventTiming.prototype&&(e=e||{},L((function(){var n;P();var r,i=d("INP"),a=function(t){N((function(){t.forEach(H);var e,n=(e=Math.min(B.length-1,Math.floor(j()/50)),B[e]);n&&n.latency!==i.value&&(i.value=n.latency,i.entries=n.entries,r())}))},o=l("event",a,{durationThreshold:null!==(n=e.durationThreshold)&&void 0!==n?n:40});r=m(t,i,W,e.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),v((function(){a(o.takeRecords()),r(!0)})),s((function(){R=0,B.length=0,O.clear(),i=d("INP"),r=m(t,i,W,e.reportAllChanges)})))})))},U=[],V=new Map,_=[],G=new WeakMap,J=new Map,K=-1,Q=function(t){U=U.concat(t),X()},X=function(){K<0&&(K=N(Y))},Y=function(){J.size>10&&J.forEach((function(t,e){O.has(e)||J.delete(e)})),_=_.slice(-50);var t=new Set(_.concat(B.map((function(t){return G.get(t.entries[0])}))));V.forEach((function(e,n){t.has(n)||V.delete(n)}));var e=new Set;V.forEach((function(t){nt(t.startTime,t.processingEnd).forEach((function(t){e.add(t)}))}));for(var r=0;r<50;r++){var i=U[U.length-1-r];if(!i||i.startTime<n)break;e.add(i)}U=Array.from(e),K=-1};q.push((function(t){t.interactionId&&t.target&&!J.has(t.interactionId)&&J.set(t.interactionId,t.target)}),(function(t){var e,r=t.startTime+t.duration;n=Math.max(n,t.processingEnd);for(var i=_.length-1;i>=0;i--)if(e=_[i],Math.abs(r-e)<=8){var a=V.get(e);a.startTime=Math.min(t.startTime,a.startTime),a.processingStart=Math.min(t.processingStart,a.processingStart),a.processingEnd=Math.max(t.processingEnd,a.processingEnd),a.entries.push(t),r=e;break}r!==e&&(_.push(r),V.set(r,{startTime:t.startTime,processingStart:t.processingStart,processingEnd:t.processingEnd,entries:[t]})),(t.interactionId||"first-input"===t.entryType)&&G.set(t,r),X()}));var Z,$,tt,et,nt=function(t,e){for(var n,r=[],i=0;n=U[i];i++)if(!(n.startTime+n.duration<t)){if(n.startTime>e)break;r.push(n)}return r},rt=function(t,n){e||(e=l("long-animation-frame",Q)),z((function(e){var n=function(t){var e=t.entries[0],n=G.get(e),r=V.get(n),a=e.processingStart,c=r.processingEnd,u=r.entries.sort((function(t,e){return t.processingStart-e.processingStart})),s=nt(e.startTime,c),f=t.entries.find((function(t){return t.target})),d=f&&f.target||J.get(e.interactionId),l=[e.startTime+e.duration,c].concat(s.map((function(t){return t.startTime+t.duration}))),m=Math.max.apply(Math,l),p={interactionTarget:o(d),interactionTargetElement:d,interactionType:e.name.startsWith("key")?"keyboard":"pointer",interactionTime:e.startTime,nextPaintTime:m,processedEventEntries:u,longAnimationFrameEntries:s,inputDelay:a-e.startTime,processingDuration:c-a,presentationDelay:Math.max(m-c,0),loadState:i(e.startTime)};return Object.assign(t,{attribution:p})}(e);t(n)}),n)},it=[2500,4e3],at={},ot=function(t,e){!function(t,e){e=e||{},L((function(){var n,r=b(),i=d("LCP"),a=function(t){e.reportAllChanges||(t=t.slice(-1)),t.forEach((function(t){t.startTime<r.firstHiddenTime&&(i.value=Math.max(t.startTime-f(),0),i.entries=[t],n())}))},o=l("largest-contentful-paint",a);if(o){n=m(t,i,it,e.reportAllChanges);var c=g((function(){at[i.id]||(a(o.takeRecords()),o.disconnect(),at[i.id]=!0,n(!0))}));["keydown","click"].forEach((function(t){addEventListener(t,(function(){return N(c)}),!0)})),v(c),s((function(r){i=d("LCP"),n=m(t,i,it,e.reportAllChanges),p((function(){i.value=performance.now()-r.timeStamp,at[i.id]=!0,n(!0)}))}))}}))}((function(e){var n=function(t){var e={timeToFirstByte:0,resourceLoadDelay:0,resourceLoadDuration:0,elementRenderDelay:t.value};if(t.entries.length){var n=r();if(n){var i=n.activationStart||0,a=t.entries[t.entries.length-1],c=a.url&&performance.getEntriesByType("resource").filter((function(t){return t.name===a.url}))[0],u=Math.max(0,n.responseStart-i),s=Math.max(u,c?(c.requestStart||c.startTime)-i:0),f=Math.max(s,c?c.responseEnd-i:0),d=Math.max(f,a.startTime-i);e={element:o(a.element),timeToFirstByte:u,resourceLoadDelay:s-u,resourceLoadDuration:f-s,elementRenderDelay:d-f,navigationEntry:n,lcpEntry:a},a.url&&(e.url=a.url),c&&(e.lcpResourceEntry=c)}}return Object.assign(t,{attribution:e})}(e);t(n)}),e)},ct=[800,1800],ut=function t(e){document.prerendering?L((function(){return t(e)})):"complete"!==document.readyState?addEventListener("load",(function(){return t(e)}),!0):setTimeout(e,0)},st=function(t,e){e=e||{};var n=d("TTFB"),i=m(t,n,ct,e.reportAllChanges);ut((function(){var a=r();a&&(n.value=Math.max(a.responseStart-f(),0),n.entries=[a],i(!0),s((function(){n=d("TTFB",0),(i=m(t,n,ct,e.reportAllChanges))(!0)})))}))},ft=function(t,e){st((function(e){var n=function(t){var e={waitingDuration:0,cacheDuration:0,dnsDuration:0,connectionDuration:0,requestDuration:0};if(t.entries.length){var n=t.entries[0],r=n.activationStart||0,i=Math.max((n.workerStart||n.fetchStart)-r,0),a=Math.max(n.domainLookupStart-r,0),o=Math.max(n.connectStart-r,0),c=Math.max(n.connectEnd-r,0);e={waitingDuration:i,cacheDuration:a-i,dnsDuration:o-a,connectionDuration:c-o,requestDuration:t.value-c,navigationEntry:n}}return Object.assign(t,{attribution:e})}(e);t(n)}),e)},dt={passive:!0,capture:!0},lt=new Date,mt=function(t,e){Z||(Z=e,$=t,tt=new Date,gt(removeEventListener),pt())},pt=function(){if($>=0&&$<tt-lt){var t={entryType:"first-input",name:Z.type,target:Z.target,cancelable:Z.cancelable,startTime:Z.timeStamp,processingStart:Z.timeStamp+$};et.forEach((function(e){e(t)})),et=[]}},vt=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){mt(t,e),i()},r=function(){i()},i=function(){removeEventListener("pointerup",n,dt),removeEventListener("pointercancel",r,dt)};addEventListener("pointerup",n,dt),addEventListener("pointercancel",r,dt)}(e,t):mt(e,t)}},gt=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,vt,dt)}))},ht=[100,300],Tt=function(t,e){e=e||{},L((function(){var n,r=b(),i=d("FID"),a=function(t){t.startTime<r.firstHiddenTime&&(i.value=t.processingStart-t.startTime,i.entries.push(t),n(!0))},o=function(t){t.forEach(a)},c=l("first-input",o);n=m(t,i,ht,e.reportAllChanges),c&&(v(g((function(){o(c.takeRecords()),c.disconnect()}))),s((function(){var r;i=d("FID"),n=m(t,i,ht,e.reportAllChanges),et=[],$=-1,Z=null,gt(addEventListener),r=a,et.push(r),pt()})))}))},yt=function(t,e){Tt((function(e){var n=function(t){var e=t.entries[0],n={eventTarget:o(e.target),eventType:e.name,eventTime:e.startTime,eventEntry:e,loadState:i(e.startTime)};return Object.assign(t,{attribution:n})}(e);t(n)}),e)};

;// CONCATENATED MODULE: ./src/types.ts
var WindowEvent;
(function (WindowEvent) {
    WindowEvent["Load"] = "load";
    WindowEvent["BeforeUnload"] = "beforeunload";
    WindowEvent["Abort"] = "abort";
    WindowEvent["Error"] = "error";
    WindowEvent["Unload"] = "unload";
})(WindowEvent || (WindowEvent = {}));
var LoadStateEnum;
(function (LoadStateEnum) {
    LoadStateEnum[LoadStateEnum["None"] = 0] = "None";
    LoadStateEnum[LoadStateEnum["Loading"] = 1] = "Loading";
    LoadStateEnum[LoadStateEnum["Complete"] = 2] = "Complete";
    LoadStateEnum[LoadStateEnum["DomInteractive"] = 3] = "DomInteractive";
    LoadStateEnum[LoadStateEnum["DomContentLoaded"] = 4] = "DomContentLoaded";
})(LoadStateEnum || (LoadStateEnum = {}));
var VisibilityType;
(function (VisibilityType) {
    VisibilityType[VisibilityType["Focus"] = 0] = "Focus";
    VisibilityType[VisibilityType["Blur"] = 1] = "Blur";
})(VisibilityType || (VisibilityType = {}));
// enum definition matches core enum
var PostType;
(function (PostType) {
    PostType[PostType["OnLoad"] = 0] = "OnLoad";
    PostType[PostType["OnBeforeUnload"] = 1] = "OnBeforeUnload";
    PostType[PostType["OnAbort"] = 2] = "OnAbort";
    PostType[PostType["Flush"] = 3] = "Flush";
})(PostType || (PostType = {}));
var Metrics;
(function (Metrics) {
    Metrics[Metrics["DNS"] = 0] = "DNS";
    Metrics[Metrics["Connect"] = 1] = "Connect";
    Metrics[Metrics["Load"] = 2] = "Load";
    Metrics[Metrics["Wait"] = 3] = "Wait";
    Metrics[Metrics["Start"] = 4] = "Start";
    Metrics[Metrics["Redirect"] = 5] = "Redirect";
    Metrics[Metrics["Duration"] = 6] = "Duration";
    Metrics[Metrics["SSL"] = 7] = "SSL";
    Metrics[Metrics["TransferSize"] = 8] = "TransferSize";
})(Metrics || (Metrics = {}));
var CookieIdentifier;
(function (CookieIdentifier) {
    CookieIdentifier["UserId"] = "u";
    CookieIdentifier["SessionId"] = "s";
    CookieIdentifier["SessionTime"] = "t";
    CookieIdentifier["PageViewCount"] = "c";
    CookieIdentifier["UrlCheckSum"] = "k";
    CookieIdentifier["PostFlag"] = "f";
})(CookieIdentifier || (CookieIdentifier = {}));
// defined in CP.Common.Interfaces
var WinHttpMethod;
(function (WinHttpMethod) {
    WinHttpMethod[WinHttpMethod["GET"] = 0] = "GET";
    WinHttpMethod[WinHttpMethod["POST"] = 1] = "POST";
    WinHttpMethod[WinHttpMethod["HEAD"] = 2] = "HEAD";
    WinHttpMethod[WinHttpMethod["DELETE"] = 3] = "DELETE";
    WinHttpMethod[WinHttpMethod["OPTIONS"] = 4] = "OPTIONS";
    WinHttpMethod[WinHttpMethod["PUT"] = 5] = "PUT";
    WinHttpMethod[WinHttpMethod["TRACE"] = 6] = "TRACE";
    WinHttpMethod[WinHttpMethod["CONNECT"] = 7] = "CONNECT";
})(WinHttpMethod || (WinHttpMethod = {}));

;// CONCATENATED MODULE: ./src/rprofiler/AjaxTiming.ts
var AjaxTiming = /** @class */ (function () {
    function AjaxTiming(url, method, isAsync, open) {
        var _this = this;
        this.getPerformanceTimings = function (entry) {
            // If a call is being made on same url multiple time, take the first one so that we capture dns and ssl time
            _this.connect = entry.connectEnd - entry.connectStart;
            _this.dns = entry.domainLookupEnd - entry.domainLookupStart;
            _this.duration = entry.duration;
            _this.load = entry.responseEnd - entry.responseStart;
            _this.wait = entry.responseStart - entry.requestStart;
            _this.start = entry.startTime;
            _this.redirect = entry.redirectEnd - entry.redirectStart;
            if (entry['secureConnectionStart']) {
                _this.ssl = entry.connectEnd - entry['secureConnectionStart'];
            }
        };
        this.url = url;
        this.method = method;
        this.isAsync = isAsync;
        this.open = open;
    }
    return AjaxTiming;
}());
/* harmony default export */ var rprofiler_AjaxTiming = (AjaxTiming);

;// CONCATENATED MODULE: ./src/rprofiler/AjaxRequestsHandler.ts

var AjaxRequestsHandler = /** @class */ (function () {
    function AjaxRequestsHandler() {
        var _this = this;
        this.fetchRequests = [];
        this.fetchEntriesIndices = {};
        this.compareEntriesDelay = 100;
        this.hasPerformance = typeof window.performance === 'object' &&
            typeof window.performance.now === 'function' &&
            typeof window.performance.getEntriesByType === 'function';
        this.captureFetchRequests = function () {
            var tempArray = [];
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var ajaxHandler = _this;
            var onRequestError = function (error) {
                return error;
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var onResponseError = function (error) {
                return Promise.reject(error);
            };
            if (!window.fetch) {
                return;
            }
            /*TODO: Adding ignore to resolve the error
            Need to relook on ts error. After adding latest vesion in tsconfig lib, It's unable to get the fetch type.*/
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            window.fetch = (function (fetch) {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var fetchRequestIndex = 0;
                    /*TODO: Adding ignore to resolve the error
                    Need to relook on ts error. After adding latest vesion in tsconfig lib, It's unable to get the promise type.*/
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    var promise = Promise.resolve(args);
                    promise = promise.then(function (args) {
                        var firstArg;
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var config = {};
                        if (args.length && args.length >= 1) {
                            firstArg = args[0];
                            if (args.length > 1) {
                                config = args[1];
                            }
                        }
                        else {
                            return [];
                        }
                        var method = 'GET';
                        if (config.method) {
                            method = config.method;
                        }
                        fetchRequestIndex = tempArray.length;
                        var fetchUrl = '';
                        //The first argument can be either a url or Request object
                        if (typeof firstArg === 'object' && !!firstArg) {
                            if (Array.isArray(firstArg) && firstArg.length > 0) {
                                fetchUrl = firstArg[0];
                            }
                            else {
                                fetchUrl = firstArg.url;
                            }
                        }
                        else {
                            fetchUrl = firstArg;
                        }
                        if (fetchUrl) {
                            tempArray.push(new rprofiler_AjaxTiming(fetchUrl, method, true, ajaxHandler.now()));
                        }
                        return [firstArg, config];
                    }, onRequestError);
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    promise = promise.then(function (args) { return fetch.apply(void 0, args); });
                    promise = promise.then(function (response) {
                        var fetchRequest = tempArray[fetchRequestIndex];
                        var requestArray = ajaxHandler.fetchRequests;
                        ajaxHandler.processPerformanceEntries(fetchRequest, requestArray);
                        return response;
                    }, onResponseError);
                    return promise;
                };
            })(window.fetch);
        };
        this.captureFetchRequests();
        AjaxRequestsHandler.startAjaxCapture(this);
    }
    AjaxRequestsHandler.prototype.getAjaxRequests = function () {
        return this.fetchRequests;
    };
    AjaxRequestsHandler.prototype.clear = function () {
        this.fetchRequests = [];
    };
    AjaxRequestsHandler.prototype.now = function () {
        if (this.hasPerformance) {
            return window.performance.now();
        }
        return new Date().getTime();
    };
    AjaxRequestsHandler.prototype.processPerformanceEntries = function (fetchRequest, requestArray) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var ajaxHandler = this;
        setTimeout(function () {
            if (!ajaxHandler.hasPerformance) {
                return;
            }
            var url = fetchRequest.url;
            var matches = [];
            var entries = performance.getEntriesByType('resource');
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var entry = entries_1[_i];
                if (entry.name === url) {
                    matches.push(entry);
                }
            }
            requestArray.push(fetchRequest);
            if (matches.length === 0) {
                return;
            }
            if (!ajaxHandler.fetchEntriesIndices[url]) {
                ajaxHandler.fetchEntriesIndices[url] = [];
            }
            if (matches.length === 1) {
                fetchRequest.getPerformanceTimings(matches[0]);
                ajaxHandler.fetchEntriesIndices[url].push(0);
                return;
            }
            var u = ajaxHandler.fetchEntriesIndices[url];
            for (var index in matches) {
                if (u.indexOf(index) !== -1) {
                    continue;
                }
                fetchRequest.getPerformanceTimings(matches[index]);
                u.push(index);
                return;
            }
            fetchRequest.getPerformanceTimings(matches[0]); // if we can't find it, just use the first entry
        }, ajaxHandler.compareEntriesDelay);
    };
    AjaxRequestsHandler.startAjaxCapture = function (ajaxHandler) {
        var xhr = XMLHttpRequest.prototype;
        var open = xhr.open;
        var send = xhr.send;
        var tempArray = [];
        if (ajaxHandler.hasPerformance && typeof window.performance.setResourceTimingBufferSize === 'function') {
            window.performance.setResourceTimingBufferSize(300);
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        xhr.open = function (method, url, async, user, password) {
            this.rpIndex = tempArray.length;
            tempArray.push(new rprofiler_AjaxTiming(url, method, async, ajaxHandler.now()));
            open.call(this, method, url, async === false ? false : true, user, password);
        };
        xhr.send = function (data) {
            var _this = this;
            var changeFunc = this.onreadystatechange;
            this.onreadystatechange = function (arg) {
                var request = tempArray[_this.rpIndex];
                if (!request) {
                    return;
                }
                var state = _this.readyState;
                var hasResponse = !!(_this.response && _this.response !== null && _this.response !== undefined);
                switch (state) {
                    case 0:
                        break;
                    case 1:
                        request.connectionEstablished = ajaxHandler.now();
                        break;
                    case 2:
                        request.requestReceived = ajaxHandler.now();
                        break;
                    case 3:
                        request.processingTime = ajaxHandler.now();
                        break;
                    case 4:
                        request.complete = ajaxHandler.now();
                        switch (_this.responseType) {
                            case 'text':
                            case '':
                                if (typeof _this.responseText === 'string') {
                                    request.responseSize = _this.responseText.length;
                                }
                                break;
                            case 'json':
                                if (hasResponse && typeof _this.response.toString === 'function') {
                                    request.responseSize = _this.response.toString().length;
                                }
                                break;
                            case 'arraybuffer':
                                if (hasResponse && typeof _this.response.byteLength === 'number') {
                                    request.responseSize = _this.response.byteLength;
                                }
                                break;
                            case 'blob':
                                if (hasResponse && typeof _this.response.size === 'number') {
                                    request.responseSize = _this.response.size;
                                }
                                break;
                            case 'document':
                                break;
                        }
                        ajaxHandler.processPerformanceEntries(request, ajaxHandler.fetchRequests);
                        break;
                }
                if (typeof changeFunc === 'function') {
                    changeFunc.call(_this, arg);
                }
            };
            var request = tempArray[this.rpIndex];
            if (!request) {
                return;
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (data && !isNaN(data.length)) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                request.sendSize = data.length;
            }
            request.send = ajaxHandler.now();
            send.call(this, data);
        };
    };
    return AjaxRequestsHandler;
}());
/* harmony default export */ var rprofiler_AjaxRequestsHandler = (AjaxRequestsHandler);

;// CONCATENATED MODULE: ./src/rprofiler/ProfilerEventManager.ts
var ProfilerEventManager = /** @class */ (function () {
    function ProfilerEventManager() {
        this.events = [];
        this.hasAttachEvent = !!window['attachEvent'];
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ProfilerEventManager.prototype.add = function (type, target, func) {
        this.events.push({ type: type, target: target, func: func });
        if (this.hasAttachEvent) {
            target.attachEvent('on' + type, func);
        }
        else {
            target.addEventListener(type, func, false);
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ProfilerEventManager.prototype.remove = function (type, target, func) {
        if (this.hasAttachEvent) {
            target.detachEvent(type, func);
        }
        else {
            target.removeEventListener(type, func, false);
        }
        var index = this.events.indexOf({ type: type, target: target, func: func });
        if (index !== 1) {
            this.events.splice(index, 1);
        }
    };
    ProfilerEventManager.prototype.clear = function () {
        var events = this.events;
        for (var i = 0; i < events.length; i++) {
            var ev = events[i];
            this.remove(ev.type, ev.target, ev.func);
        }
        this.events = [];
    };
    return ProfilerEventManager;
}());
/* harmony default export */ var rprofiler_ProfilerEventManager = (ProfilerEventManager);

;// CONCATENATED MODULE: ./src/rprofiler/EventsTimingHandler.ts


var EventsTimingHandler = /** @class */ (function () {
    function EventsTimingHandler() {
        var _this = this;
        //Capture window Focus (Used for Page On Time)
        this.hiddenStrings = ['hidden', 'msHidden', 'webkitHidden', 'mozHidden'];
        this.visibilityStrings = [
            'visibilitychange',
            'msvisibilitychange',
            'webkitvisibilitychange',
            'mozvisibilitychange'
        ];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.captureSoftNavigation = false;
        this.hidden = 'hidden';
        this.visibilityChange = 'visibilitychange';
        this.visibilityEvents = [];
        // Capture scroll, focus, resize, mouse and keyEvents
        this.eventManager = new rprofiler_ProfilerEventManager();
        this.engagementTimeIntervalMs = 1000;
        this.engagementTime = 0;
        this.firstEngagementTime = 0;
        this.lastEventTimeStamp = 0;
        this.timeoutId = undefined;
        this.startTime = new Date().getTime();
        this.now = function () {
            return new Date().getTime();
        };
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.startVisibilityCapture = function () {
            _this.initializeVisibilityProperties();
            document.addEventListener(_this.visibilityChange, _this.captureFocusEvent, false);
        };
        this.initializeVisibilityProperties = function () {
            var values = _this.hiddenStrings;
            var propertyIndex = 0;
            for (var i = 0; i < values.length; i++) {
                if (typeof document[values[i]] !== 'undefined') {
                    propertyIndex = i;
                }
            }
            _this.visibilityChange = _this.visibilityStrings[propertyIndex];
            _this.hidden = _this.hiddenStrings[propertyIndex];
        };
        this.captureFocusEvent = function () {
            _this.updateVisibilityChangeTime();
            if (!document[_this.hidden]) {
                _this.captureEngagementTime();
            }
        };
        this.updateVisibilityChangeTime = function () {
            if (document[_this.hidden]) {
                _this.captureVisibilityEvent(VisibilityType.Blur);
            }
            else {
                _this.captureVisibilityEvent(VisibilityType.Focus);
            }
        };
        this.onBlur = function () {
            _this.captureVisibilityEvent(VisibilityType.Blur);
        };
        this.onFocus = function () {
            _this.captureVisibilityEvent(VisibilityType.Focus);
        };
        this.captureVisibilityEvent = function (type) {
            _this.visibilityEvents.push({
                type: type,
                time: _this.now()
            });
        };
        this.captureEngagementTime = function (isFirstEngagement) {
            if (isFirstEngagement === void 0) { isFirstEngagement = true; }
            // 1000 ms for default focus
            if (!_this.lastEventTimeStamp) {
                _this.engagementTime = _this.engagementTimeIntervalMs;
                _this.lastEventTimeStamp = _this.now();
                return;
            }
            var timeBetweenEvents = _this.now() - _this.lastEventTimeStamp;
            _this.lastEventTimeStamp = _this.now();
            if (isFirstEngagement && _this.firstEngagementTime === 0) {
                _this.firstEngagementTime = _this.now();
            }
            if (timeBetweenEvents > 0 && timeBetweenEvents < _this.engagementTimeIntervalMs) {
                clearTimeout(_this.timeoutId);
                _this.engagementTime += timeBetweenEvents;
                return;
            }
            _this.startTimer();
        };
        //Do not include mousemove for first engagement, as it doesn't really indicate engagement if use just moved mouse to close the page
        this.captureMouseMove = function () {
            _this.captureEngagementTime(false);
        };
        this.startTimer = function () {
            _this.timeoutId = window.setTimeout(function () {
                _this.engagementTime += _this.engagementTimeIntervalMs;
            }, _this.engagementTimeIntervalMs);
        };
        this.getFocusAwayTime = function () {
            var events = _this.visibilityEvents;
            var resetIndex = -1;
            if (events.length === 0) {
                return 0;
            }
            var currentBlurIndex = resetIndex;
            var index = 0;
            var currentFocusIndex = resetIndex;
            var hiddenTimeLapsed = 0;
            while (index < events.length) {
                if (events[index].type === VisibilityType.Blur && currentBlurIndex === resetIndex) {
                    currentBlurIndex = index;
                }
                var isNewFocusEvent = currentFocusIndex === resetIndex && currentBlurIndex !== resetIndex;
                if (events[index].type === VisibilityType.Focus && isNewFocusEvent) {
                    currentFocusIndex = index;
                }
                var validFocusChange = currentBlurIndex !== resetIndex && currentFocusIndex !== resetIndex;
                if (validFocusChange) {
                    var diff = events[currentFocusIndex].time - events[currentBlurIndex].time;
                    if (diff > 0) {
                        hiddenTimeLapsed += diff;
                    }
                    currentBlurIndex = resetIndex;
                    currentFocusIndex = resetIndex;
                }
                index = index + 1;
            }
            if (currentBlurIndex === events.length - 1) {
                hiddenTimeLapsed += _this.now() - events[currentBlurIndex].time;
            }
            return hiddenTimeLapsed;
        };
        this.getEngagementTime = function () {
            return _this.engagementTime;
        };
        this.getStartTime = function () {
            return _this.startTime;
        };
        this.getFirstEngagementTime = function () {
            return _this.firstEngagementTime;
        };
        this.startSoftNavigationCapture = function () {
            _this.captureSoftNavigation = true;
        };
        this.resetSoftNavigationCapture = function () {
            _this.resetEngagementMetrics();
            _this.visibilityEvents = [];
        };
        this.resetEngagementMetrics = function () {
            _this.engagementTime = 0;
            _this.lastEventTimeStamp = _this.now();
            _this.firstEngagementTime = 0;
        };
        this.clear = function () {
            _this.eventManager.clear();
        };
        this.captureEngagementTime(false);
        this.eventManager.add('scroll', document, this.captureEngagementTime);
        this.eventManager.add('resize', window, this.captureEngagementTime);
        this.eventManager.add('mouseup', document, this.captureEngagementTime);
        this.eventManager.add('keyup', document, this.captureEngagementTime);
        this.eventManager.add('mousemove', document, this.captureMouseMove);
        this.eventManager.add('focus', window, this.onFocus);
        this.eventManager.add('blur', window, this.onBlur);
        this.eventManager.add('focus', document, this.onFocus);
        this.eventManager.add('blur', document, this.onBlur);
    }
    return EventsTimingHandler;
}());
/* harmony default export */ var rprofiler_EventsTimingHandler = (EventsTimingHandler);

;// CONCATENATED MODULE: ./src/rprofiler/ProfilerJsError.ts
var ProfilerJsError = /** @class */ (function () {
    function ProfilerJsError(message, url, lineNumber) {
        this.count = 0;
        this.message = message;
        this.url = url;
        this.lineNumber = lineNumber;
    }
    ProfilerJsError.createText = function (msg, url, num) {
        return [msg, url, num].join(':');
    };
    ProfilerJsError.prototype.getText = function () {
        return ProfilerJsError.createText(this.message, this.url, this.lineNumber);
    };
    return ProfilerJsError;
}());
/* harmony default export */ var rprofiler_ProfilerJsError = (ProfilerJsError);

;// CONCATENATED MODULE: ./src/main/config.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var MainConfig = /** @class */ (function () {
    function MainConfig() {
    }
    MainConfig.now = function () {
        return new Date().getTime();
    };
    MainConfig.setWindowEvent = function () {
        _f.windowEvent = this.pageWindow['WindowEvent'];
    };
    MainConfig.setRProfiler = function () {
        _f.profiler = this.pageWindow['RProfiler'];
    };
    MainConfig.setWindowEventDef = function () {
        var _a, _b, _c, _d, _e;
        _f.windowEventDef = {
            Load: (_a = _f.windowEvent) === null || _a === void 0 ? void 0 : _a.Load,
            BeforeUnload: (_b = _f.windowEvent) === null || _b === void 0 ? void 0 : _b.BeforeUnload,
            Unload: (_c = _f.windowEvent) === null || _c === void 0 ? void 0 : _c.Unload,
            Abort: (_d = _f.windowEvent) === null || _d === void 0 ? void 0 : _d.Abort,
            Error: (_e = _f.windowEvent) === null || _e === void 0 ? void 0 : _e.Error
        };
    };
    MainConfig.setAppConfig = function (config) {
        _f.config = __assign(__assign({}, _f.config), config);
    };
    MainConfig.initValues = function () {
        _f.setWindowEvent();
        _f.setRProfiler();
        _f.setWindowEventDef();
    };
    var _a, _b, _c, _d, _e;
    var _f;
    _f = MainConfig;
    MainConfig.pageWindow = parent.window;
    MainConfig.location = _f.pageWindow.location;
    MainConfig.profiler = _f.pageWindow['RProfiler'];
    MainConfig.windowEvent = _f.pageWindow['WindowEvent'];
    MainConfig.protocol = _f.location.protocol + '//';
    MainConfig.windowEventDef = {
        Load: (_a = _f.windowEvent) === null || _a === void 0 ? void 0 : _a.Load,
        BeforeUnload: (_b = _f.windowEvent) === null || _b === void 0 ? void 0 : _b.BeforeUnload,
        Unload: (_c = _f.windowEvent) === null || _c === void 0 ? void 0 : _c.Unload,
        Abort: (_d = _f.windowEvent) === null || _d === void 0 ? void 0 : _d.Abort,
        Error: (_e = _f.windowEvent) === null || _e === void 0 ? void 0 : _e.Error
    };
    MainConfig.hasPerformanceApi = !!_f.pageWindow.performance && typeof _f.pageWindow.performance === 'object';
    MainConfig.hasGetEntriesApi = _f.hasPerformanceApi && typeof _f.pageWindow.performance.getEntriesByType === 'function';
    MainConfig.testUserId = "test";
    MainConfig.version = 'v4.0.3';
    MainConfig.config = {
        sampleRate: -999, // range [0 - 100]
        waterfallSampleRate: -888, // range [0 - 100]
        postUrl: _f.protocol + 'lst01a.3genlabs.net/hawklogserver/r.p',
        siteId: 91649,
        debugParameter: 'GlimpseDebug',
        debugUrl: 'portalstage.catchpoint.com/jp/v4.0.3/D',
        waterfallParameter: 'GlimpseWaterfall',
        sendOnLoad: false, // default is send onunload
        clearResources: true, // clear performance entries when we send data to core. using performance.clearResourceTimings()
        ajaxDomains: ''
    };
    return MainConfig;
}());

/* harmony default export */ var config = (MainConfig);

;// CONCATENATED MODULE: ./src/main/DataWrapper.ts
var DataWrapper = /** @class */ (function () {
    function DataWrapper() {
        // insight
        this.hasErrors = false;
        this._appErrors = null;
        this.hasIndicators = false;
        this._indicators = null;
        this.hasTracepoints = false;
        this._tracepoints = null;
    }
    DataWrapper.prototype.addError = function (key, value) {
        if (!this.hasErrors) {
            this._appErrors = new Object();
            this.hasErrors = true;
        }
        this._appErrors[key] = value;
    };
    DataWrapper.prototype.getErrors = function () {
        return this._appErrors;
    };
    DataWrapper.prototype.addIndicator = function (obj) {
        if (!this.hasIndicators) {
            this._indicators = {};
            this.hasIndicators = true;
        }
        for (var key in obj) {
            this._indicators[key] = obj[key];
        }
    };
    DataWrapper.prototype.getIndicators = function () {
        return this._indicators;
    };
    DataWrapper.prototype.addTracepoint = function (obj) {
        if (!this.hasTracepoints) {
            this._tracepoints = {};
            this.hasTracepoints = true;
        }
        for (var key in obj) {
            this._tracepoints[key] = obj[key];
        }
    };
    DataWrapper.prototype.getTracepoints = function () {
        return this._tracepoints;
    };
    return DataWrapper;
}());
/* harmony default export */ var main_DataWrapper = (DataWrapper);

;// CONCATENATED MODULE: ./src/main/Util.ts


var Util = /** @class */ (function () {
    function Util() {
    }
    Util.getValue = function (resource, metric) {
        var allowOrigin = resource.responseStart !== 0;
        switch (metric) {
            case Metrics.DNS:
                return Util.getMetricValue(resource.domainLookupEnd, resource.domainLookupStart, allowOrigin);
            case Metrics.Connect:
                return Util.getMetricValue(resource.connectEnd, resource.connectStart, allowOrigin);
            case Metrics.Load:
                return Util.getMetricValue(resource.responseEnd, resource.responseStart, allowOrigin);
            case Metrics.Wait:
                return Util.getMetricValue(resource.responseStart, resource.requestStart, allowOrigin);
            case Metrics.Start:
                return resource.startTime;
            case Metrics.Redirect:
                return Util.getMetricValue(resource.redirectEnd, resource.redirectStart);
            case Metrics.Duration:
                return resource.duration;
            case Metrics.SSL:
                if (resource['secureConnectionStart']) {
                    return allowOrigin ? resource.connectEnd - resource['secureConnectionStart'] : null;
                }
                break;
            case Metrics.TransferSize:
                return resource.transferSize;
        }
        return 0;
    };
    Util.getMetricValue = function (end, start, allowOrigin) {
        if (allowOrigin === void 0) { allowOrigin = true; }
        if (!allowOrigin) {
            return null;
        }
        else if (end >= 0 && end >= start && start >= 0) {
            var value = end - start;
            return Math.round(value);
        }
    };
    Util.getRoundedValue = function (value) {
        return value ? Math.round(value) : value;
    };
    Util.getQueryStringValue = function (val) {
        var query = location.search.substring(1);
        var values = query.split('&');
        var arr;
        for (var i = 0; i < values.length; i++) {
            arr = values[i].split('=');
            if (arr[0] == val) {
                return arr[1];
            }
        }
        return '';
    };
    Util.stopEvents = function () {
        if (!config.profiler) {
            return;
        }
        config.profiler.eventManager.clear();
        config.profiler.getEventTimingHandler().clear();
    };
    Util.getLoadStateEnum = function (state) {
        switch (state) {
            case 'loading':
                return LoadStateEnum.Loading;
            case "dom-content-loaded":
                return LoadStateEnum.DomContentLoaded;
            case 'dom-interactive':
                return LoadStateEnum.DomInteractive;
            case 'complete':
                return LoadStateEnum.Complete;
            default:
                return LoadStateEnum.None;
        }
    };
    Util.getNavigationTime = function () {
        var timing = null;
        var navigationTime = config.hasGetEntriesApi && config.pageWindow.performance.getEntriesByType('navigation');
        if (navigationTime && navigationTime.length !== 0) {
            timing = navigationTime[0];
        }
        return timing;
    };
    Util.getNavigationStart = function (timing) {
        var navigationtiming = timing;
        return navigationtiming.startTime;
    };
    return Util;
}());
/* harmony default export */ var main_Util = (Util);

;// CONCATENATED MODULE: ./src/main/WaterfallItem.ts


var WaterfallItem = /** @class */ (function () {
    function WaterfallItem(resource) {
        this.dns = null;
        this.connect = null;
        this.load = null;
        this.wait = null;
        this.start = 0;
        this.duration = 0;
        this.redirect = 0;
        this.ssl = null;
        this.url = resource.name;
        var func = main_Util.getValue;
        this.dns = func(resource, Metrics.DNS);
        this.connect = func(resource, Metrics.Connect);
        this.wait = func(resource, Metrics.Wait);
        this.load = func(resource, Metrics.Load);
        this.start = func(resource, Metrics.Start);
        this.duration = func(resource, Metrics.Duration);
        this.redirect = func(resource, Metrics.Redirect);
        this.ssl = func(resource, Metrics.SSL);
        this.transferSize = func(resource, Metrics.TransferSize);
    }
    Object.defineProperty(WaterfallItem.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (u) {
            if (u.indexOf('http://') !== -1) {
                this.protocol = 0;
            }
            else if (u.indexOf('https://') !== -1) {
                this.protocol = 1;
            }
            var host = u.split('/').slice(1, 3).join('');
            var index = host.indexOf(':');
            if (index != -1) {
                var p = host.substr(index + 1);
                var num = parseInt(p);
                if (!isNaN(num)) {
                    this.port = num;
                }
            }
            u = u.substr(u.indexOf(host) + host.length);
            index = u.indexOf('?');
            if (index != -1) {
                u = u.substr(0, index);
            }
            index = u.indexOf('#');
            if (index != -1) {
                u = u.substr(0, index);
            }
            u = u.substr(0, 64);
            this._url = u;
        },
        enumerable: false,
        configurable: true
    });
    WaterfallItem.prototype.translateForPost = function () {
        var roundedValue = main_Util.getRoundedValue;
        var obj = {
            u: this.url,
            pr: this.protocol
        };
        var setIfNumber = function (key, num) {
            if (typeof num == 'number' && !isNaN(num)) {
                obj[key] = num;
            }
        };
        setIfNumber('pt', this.port);
        setIfNumber('dn', roundedValue(this.dns));
        setIfNumber('fc', roundedValue(this.connect));
        setIfNumber('ld', roundedValue(this.load));
        setIfNumber('wt', roundedValue(this.wait));
        setIfNumber('st', roundedValue(this.start));
        setIfNumber('rd', roundedValue(this.redirect));
        setIfNumber('dr', roundedValue(this.duration));
        setIfNumber('ssl', roundedValue(this.ssl));
        setIfNumber('ts', this.transferSize);
        return obj;
    };
    return WaterfallItem;
}());
/* harmony default export */ var main_WaterfallItem = (WaterfallItem);

;// CONCATENATED MODULE: ./src/main/AjaxItem.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var AjaxItem = /** @class */ (function (_super) {
    __extends(AjaxItem, _super);
    function AjaxItem(timing, resource, isSummary) {
        var _this = _super.call(this, resource) || this;
        _this.responseTime = 0; // calculated from readyState changes
        _this.sendSize = 0;
        _this.responseSize = 0;
        _this.method = WinHttpMethod[timing.method.toUpperCase()];
        if (timing.complete && timing.connectionEstablished) {
            _this.responseTime = timing.complete - timing.connectionEstablished;
        }
        _this.isSummary = isSummary;
        if (isSummary) {
            _this.start = undefined; // summary items should not have start time
            _this.count = 1;
        }
        else {
            _this.isAsync = timing.isAsync;
        }
        _this.sendSize = timing.sendSize || 0;
        _this.responseSize = timing.responseSize || 0;
        return _this;
    }
    AjaxItem.prototype.update = function (timing, resource) {
        var func = main_Util.getValue;
        if (resource.responseStart) {
            this.dns += func(resource, Metrics.DNS);
            this.connect += func(resource, Metrics.Connect);
            this.wait += func(resource, Metrics.Wait);
            this.load += func(resource, Metrics.Load);
            this.ssl += func(resource, Metrics.SSL);
        }
        this.duration += func(resource, Metrics.Duration);
        this.redirect += func(resource, Metrics.Redirect);
        this.sendSize += timing.sendSize || 0;
        this.responseSize += timing.responseSize || 0;
        this.count++;
    };
    AjaxItem.prototype.translateForPost = function () {
        var obj = _super.prototype.translateForPost.call(this);
        if (this.isSummary) {
            obj['n'] = this.count;
        }
        else {
            obj['ia'] = this.isAsync ? 1 : 0;
        }
        obj['md'] = this.method;
        obj['rp'] = Math.round(this.responseTime);
        obj['ss'] = this.sendSize;
        obj['rs'] = this.responseSize;
        return obj;
    };
    return AjaxItem;
}(main_WaterfallItem));
/* harmony default export */ var main_AjaxItem = (AjaxItem);

;// CONCATENATED MODULE: ./src/main/HostSummary.ts



var HostSummary = /** @class */ (function () {
    function HostSummary() {
        this.count = 0;
        this.dns = null;
        this.connect = null;
        this.load = null;
        this.wait = null;
        this.duration = 0;
        this.redirect = 0;
        this.ssl = null;
    }
    HostSummary.prototype.addAjaxItem = function (timing, resource) {
        this.update(resource);
        var ajax = new main_AjaxItem(timing, resource, true);
        if (typeof this._ajax == 'undefined') {
            this._ajax = [];
            this._ajax.push(ajax);
            return;
        }
        for (var _i = 0, _a = this._ajax; _i < _a.length; _i++) {
            var a = _a[_i];
            if (a.url == ajax.url) {
                a.update(timing, resource);
                return;
            }
        }
        if (this._ajax.length < 10) {
            this._ajax.push(ajax);
        }
    };
    HostSummary.prototype.update = function (resource) {
        var func = main_Util.getValue;
        if (resource.responseStart) {
            this.dns += func(resource, Metrics.DNS);
            this.connect += func(resource, Metrics.Connect);
            this.wait += func(resource, Metrics.Wait);
            this.load += func(resource, Metrics.Load);
            this.ssl += func(resource, Metrics.SSL);
        }
        this.duration += func(resource, Metrics.Duration);
        this.redirect += func(resource, Metrics.Redirect);
        this.count++;
    };
    HostSummary.prototype.translateForPost = function () {
        var roundedValue = main_Util.getRoundedValue;
        var obj = {
            n: this.count,
            dn: roundedValue(this.dns),
            fc: roundedValue(this.connect),
            ld: roundedValue(this.load),
            wt: roundedValue(this.wait),
            dr: roundedValue(this.duration),
            rd: roundedValue(this.redirect),
            ssl: roundedValue(this.ssl)
        };
        if (this._ajax) {
            var ajax = [];
            for (var _i = 0, _a = this._ajax; _i < _a.length; _i++) {
                var a = _a[_i];
                ajax.push(a.translateForPost());
            }
            obj['ax'] = ajax;
        }
        return obj;
    };
    return HostSummary;
}());
/* harmony default export */ var main_HostSummary = (HostSummary);

;// CONCATENATED MODULE: ./src/main/HostWaterfall.ts


var HostWaterfall = /** @class */ (function () {
    function HostWaterfall() {
        this._resources = [];
    }
    HostWaterfall.prototype.translateForPost = function () {
        var a = [];
        for (var _i = 0, _a = this._resources; _i < _a.length; _i++) {
            var res = _a[_i];
            a.push(res.translateForPost());
        }
        return a;
    };
    HostWaterfall.prototype.addItem = function (resource) {
        var item = new main_WaterfallItem(resource);
        this._resources.push(item);
    };
    HostWaterfall.prototype.addAjaxItem = function (timing, resource) {
        var ajax = new main_AjaxItem(timing, resource, false);
        this._resources.push(ajax);
    };
    return HostWaterfall;
}());
/* harmony default export */ var main_HostWaterfall = (HostWaterfall);

;// CONCATENATED MODULE: ./src/main/TreeNode.ts
var TreeNode = /** @class */ (function () {
    function TreeNode(char) {
        this.char = char;
        this.children = [];
    }
    return TreeNode;
}());
/* harmony default export */ var main_TreeNode = (TreeNode);

;// CONCATENATED MODULE: ./src/main/Tree.ts

var Tree = /** @class */ (function () {
    function Tree() {
        this.root = new main_TreeNode('');
        this.isReversed = true;
    }
    Tree.prototype.add = function (parent, char) {
        if (parent === void 0) { parent = this.root; }
        var children = parent.children;
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            if (child.char == char) {
                return child;
            }
        }
        var node = new main_TreeNode(char);
        children.push(node);
        node.parent = parent;
        return node;
    };
    Tree.prototype.toObject = function () {
        var obj = {};
        var isSuffix = this.isReversed;
        (function recurse(curr, obj) {
            var isRoot = curr.char == '';
            var arg;
            if (isRoot) {
                arg = obj;
            }
            else {
                var key = curr.char;
                if (curr.children.length == 1) {
                    while (curr.children.length == 1) {
                        curr = curr.children[0];
                        key = isSuffix ? curr.char + key : key + curr.char;
                        if (curr.data) {
                            obj[key] = curr.data;
                        }
                    }
                }
                obj[key] = curr.data || {};
                arg = obj[key];
            }
            for (var i = 0; i < curr.children.length; i++) {
                recurse(curr.children[i], arg);
            }
        })(this.root, obj);
        return obj;
    };
    return Tree;
}());
/* harmony default export */ var main_Tree = (Tree);

;// CONCATENATED MODULE: ./src/main/PostData.ts
var PostData_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var PostData = /** @class */ (function (_super) {
    PostData_extends(PostData, _super);
    function PostData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxJsErrors = 10;
        _this.charCodes = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\',
            '&': '%26'
        };
        // eslint-disable-next-line no-control-regex
        _this.strRegex = /["&\\\x00-\x1f\x7f-\x9f]/g;
        return _this;
    }
    PostData.prototype.toString = function (type, includeWaterfall) {
        var obj = this.translateForPost(type, includeWaterfall);
        if (typeof JSON == 'undefined') {
            return this.jsonStringify(obj);
        }
        return JSON.stringify(obj);
    };
    PostData.prototype.strEscape = function (value) {
        var char = this.charCodes[value];
        if (char) {
            return char;
        }
        var index = value.charCodeAt(0);
        return '\\u00' + Math.floor(index / 16).toString(16) + (index % 16).toString(16);
    };
    PostData.prototype.jsonStringify = function (value) {
        var arr = new Array();
        switch (typeof value) {
            case 'string':
                return this.strRegex.test(value)
                    ? '"' + value.replace(this.strRegex, this.strEscape) + '"'
                    : '"' + value + '"';
            case 'number':
                return isFinite(value) ? String(value) : 'null';
            case 'boolean':
                return String(value);
            case 'object':
                if (!value) {
                    return 'null';
                }
                if (value.constructor === Date) {
                    /* empty */
                }
                // eslint-disable-next-line no-prototype-builtins
                if (typeof value.length == 'number' && !value.propertyIsEnumerable('length')) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    for (var _i = 0, _a = value; _i < _a.length; _i++) {
                        var a = _a[_i];
                        arr.push(this.jsonStringify(a));
                    }
                    return '[' + arr.join(',') + ']';
                }
                for (var key in value) {
                    if (typeof key == 'string') {
                        var str = this.jsonStringify(value[key]);
                        if (!!str) {
                            arr.push(this.jsonStringify(key) + ':' + str);
                        }
                    }
                }
                return '{' + arr.join(',') + '}';
        }
        return '';
    };
    PostData.prototype.translateForPost = function (type, includeWaterfall) {
        var isSoftNavigation = this.viewCount > 1;
        var obj = new Object();
        obj['v'] = config.version;
        obj['pt'] = this.postType;
        obj['ui'] = this.userId;
        obj['si'] = this.sessionId;
        obj['di'] = this.siteId;
        obj['pi'] = this.pageViewId;
        obj['jsc'] = this.jsErrorCount || 0;
        obj['rf'] = this.referrer;
        obj['pc'] = this.pageViewCount;
        obj['vc'] = this.viewCount;
        obj['rc'] = this.redirectCount || 0;
        if (this.jsErrors && this.jsErrors.length > 0) {
            var arr = [];
            for (var i = 0; i < Math.min(this.jsErrors.length, this.maxJsErrors); i++) {
                arr.push(this.translateErrorForPost(this.jsErrors[i]));
            }
            obj['jse'] = arr;
        }
        if (this.hasErrors) {
            obj['ae'] = this.getErrors();
        }
        if (this.pageGroup) {
            obj['pg'] = this.pageGroup;
        }
        if (this.variation) {
            obj['ab'] = this.variation;
        }
        if (this.resources || this.ajaxRequests) {
            var r = this.translateResources(this.resources, this.ajaxRequests);
            obj['res'] = r.summary;
            if (includeWaterfall) {
                obj['wf'] = r.waterfall;
            }
        }
        if (typeof this.isNewView == 'boolean') {
            obj['nv'] = this.isNewView ? 1 : 0;
        }
        if (this.hasIndicators) {
            obj['ind'] = this.getIndicators();
        }
        if (this.hasTracepoints) {
            obj['tra'] = this.getTracepoints();
        }
        if (this.isConversion) {
            obj['cv'] = this.isConversion ? 1 : 0;
            if (this.revenue) {
                obj['rv'] = this.revenue;
            }
            if (this.revenueItems) {
                obj['ri'] = this.revenueItems;
            }
        }
        obj['np'] = this.isNewPageView ? 1 : 0;
        if (type === PostType.OnLoad || type === PostType.OnAbort) {
            obj['dh'] = this.screenHeight;
            obj['dw'] = this.screenWidth;
            if (this.isNewPageView) {
                obj['dn'] = Math.round(this.dns);
                obj['fc'] = Math.round(this.fullConnect);
                obj['wt'] = Math.round(this.wait);
                obj['ld'] = Math.round(this.load);
                obj['de'] = this.domInteractive;
                obj['dl'] = this.domLoaded;
                obj['dc'] = this.docComplete;
                obj['rp'] = this.response;
                obj['cl'] = this.contentLoad;
                obj['rd'] = this.redirect;
                obj['rc'] = this.redirectCount || 0;
                obj['cls'] = this.cls;
                obj['lcp'] = this.lcp;
                obj['inp'] = this.inp;
                obj['frc'] = this.frc;
                obj['fec'] = this.fec;
                obj['fdc'] = this.fdc;
                obj['ftc'] = this.ftc;
                if (this.secureConnect) {
                    obj['sc'] = this.secureConnect;
                }
                if (this.exitToEntry) {
                    obj['xe'] = this.exitToEntry;
                }
                if (this.entryToOnLoad) {
                    obj['el'] = this.entryToOnLoad;
                }
                if (this.prerender) {
                    obj['pr'] = this.prerender;
                }
            }
        }
        if (type === PostType.OnBeforeUnload) {
            obj['maf'] = this.markAboveTheFold;
            obj['mfl'] = this.markFullyLoaded;
            obj['mfv'] = this.markFullyVisible;
            obj['mtu'] = this.markTimeToUserAction;
            obj['tp'] = this.timeOnPage;
            obj['tti'] = this.timeToInteract;
            obj['et'] = this.engagementTime;
            obj['fet'] = this.firstEngagementTime;
            obj['vct'] = this.visComplete;
            if (!isSoftNavigation) {
                obj['fp'] = this.firstPaint;
                obj['fcp'] = this.firstContentPaint;
                obj['cls'] = this.cls;
                obj['lcp'] = this.lcp;
                obj['inp'] = this.inp;
                obj['frc'] = this.frc;
                obj['fec'] = this.fec;
                obj['fdc'] = this.fdc;
                obj['ftc'] = this.ftc;
                obj['inpDe'] = this.inpDe;
            }
        }
        if (type === PostType.OnBeforeUnload || type === PostType.OnAbort) {
            obj['rqc'] = this.rqc;
        }
        return obj;
    };
    PostData.prototype.translateErrorForPost = function (error) {
        var obj = {};
        obj['m'] = error.message;
        obj['n'] = error.lineNumber;
        obj['c'] = error.count + 1; // starts at 0
        var url = error.url;
        if (url) {
            var qStrIndex = url.indexOf('?');
            if (qStrIndex != -1) {
                url = url.substr(0, qStrIndex);
            }
        }
        obj['u'] = url;
        return obj;
    };
    PostData.prototype.translateResources = function (resources, ajaxResources) {
        var _this = this;
        var hasResources = !!resources;
        var hasAjaxResources = !!ajaxResources;
        if (!hasResources && !hasAjaxResources) {
            return null;
        }
        var getAjaxTiming = function (resource) {
            if (!hasResources || !hasAjaxResources) {
                return null;
            }
            var filteredAjaxResources = _this.filterAjaxResources(ajaxResources);
            for (var _i = 0, filteredAjaxResources_1 = filteredAjaxResources; _i < filteredAjaxResources_1.length; _i++) {
                var a = filteredAjaxResources_1[_i];
                var url = a.url;
                var targetUrl = '';
                if (url && url.indexOf('http') != 0) {
                    var charCount = 0;
                    var mainUrl = location.href;
                    for (var i = 0; i < mainUrl.length; i++) {
                        if (mainUrl[i] === '/') {
                            charCount += 1;
                        }
                        if (charCount === 3) {
                            targetUrl = mainUrl.slice(0, i);
                            targetUrl = targetUrl + url;
                            break;
                        }
                    }
                    if (targetUrl === resource.name) {
                        return a;
                    }
                }
                if (url === resource.name) {
                    return a;
                }
            }
            return null;
        };
        var hostObj = {};
        if (resources) {
            for (var _i = 0, resources_1 = resources; _i < resources_1.length; _i++) {
                var res = resources_1[_i];
                if (!res) {
                    continue;
                }
                var host = res.name.split('/').slice(1, 3).join('');
                if (!host || host.length == 0) {
                    continue;
                }
                var portIndex = host.indexOf(':');
                if (portIndex != -1) {
                    host = host.substr(0, portIndex);
                }
                // eslint-disable-next-line no-prototype-builtins
                if (!hostObj.hasOwnProperty(host)) {
                    hostObj[host] = {
                        summary: new main_HostSummary(),
                        waterfall: new main_HostWaterfall()
                    };
                }
                var h = hostObj[host];
                var ajax = getAjaxTiming(res);
                if (ajax) {
                    h.summary.addAjaxItem(ajax, res);
                    h.waterfall.addAjaxItem(ajax, res);
                }
                else {
                    h.summary.update(res);
                    h.waterfall.addItem(res);
                }
            }
        }
        var tree1 = new main_Tree();
        for (var name_1 in hostObj) {
            var node = undefined;
            for (var i = name_1.length - 1; i >= 0; i--) {
                var char = name_1[i];
                node = tree1.add(node, char);
            }
            node.data = hostObj[name_1].summary.translateForPost();
        }
        var tree2 = new main_Tree();
        for (var name_2 in hostObj) {
            var node = undefined;
            for (var i = name_2.length - 1; i >= 0; i--) {
                var char = name_2[i];
                node = tree2.add(node, char);
            }
            node.data = hostObj[name_2].waterfall.translateForPost();
        }
        var container = {
            summary: tree1.toObject(),
            waterfall: tree2.toObject()
        };
        return container;
    };
    PostData.prototype.filterAjaxResources = function (ajaxResources) {
        if (config.config.ajaxDomains === '' || config.config.ajaxDomains === undefined) {
            return ajaxResources;
        }
        // Returns the host with subdomain from the url
        var getHostNameWithSubdomain = function (url) {
            // eslint-disable-next-line no-useless-escape
            var regex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/?\n]+)/;
            var output = regex.exec(url);
            if (output !== null) {
                return output[1];
            }
        };
        // Returns the host without subdomain from the url
        var getHostNameWithoutSubdomain = function (url) {
            // eslint-disable-next-line no-useless-escape
            var regex = /([a-z\-0-9]{2,63})\.([a-z\.]{2,5})$/;
            var urlParts = regex.exec(url);
            return urlParts && urlParts[0];
        };
        // Returns the url with protocal
        var getFullUrl = function (url) {
            var regex = /(http|https)?:\/\/(\S+)/g;
            var hasSchema = regex.test(url);
            return hasSchema ? url : "https://".concat(url);
        };
        var filterAjaxDomainsList = config.config.ajaxDomains.split(',');
        var filteredAjaxResources = ajaxResources.filter(function (resource) {
            var resourceWithSubdomain = getHostNameWithSubdomain(resource.url);
            var resourceUrl = getFullUrl(resource.url);
            var resourceHostName = new URL(resourceUrl).host;
            var resourceWithoutSubdomain = getHostNameWithoutSubdomain(resourceHostName);
            var result = filterAjaxDomainsList.some(function (domain) {
                var domainUrl = getFullUrl(domain);
                var filterHostName = new URL(domainUrl).host;
                var filterDomainWithSubdomain = filterHostName.replace('www.', '');
                var filterDomainWithoutSubdomain = getHostNameWithoutSubdomain(filterHostName);
                var hasFilterSubdomain = filterDomainWithSubdomain !== filterDomainWithoutSubdomain;
                if (hasFilterSubdomain) {
                    return filterDomainWithSubdomain === resourceWithSubdomain;
                }
                else {
                    return resourceWithoutSubdomain === filterDomainWithoutSubdomain;
                }
            });
            return result;
        });
        return filteredAjaxResources;
    };
    return PostData;
}(main_DataWrapper));
/* harmony default export */ var main_PostData = (PostData);

;// CONCATENATED MODULE: ./src/main/Storage.ts

var Storage = /** @class */ (function () {
    function Storage() {
    }
    Storage.save = function (value) {
        if (Storage.canUseLocalStorage()) {
            config.pageWindow.localStorage.setItem(Storage.storeKey, value);
            return;
        }
        Storage.setCookie(value);
    };
    Storage.read = function () {
        if (Storage.canUseLocalStorage()) {
            var store = config.pageWindow.localStorage.getItem(Storage.storeKey);
            if (store) {
                return store;
            }
        }
        return this.readCookie();
    };
    Storage.canUseLocalStorage = function () {
        var canUse = true;
        try {
            var key = Storage.storeKey + 'delete';
            var value = key + 0;
            config.pageWindow.localStorage.setItem(key, value);
            var valueFromStorage = config.pageWindow.localStorage.getItem(key);
            canUse = value === valueFromStorage;
            if (canUse) {
                config.pageWindow.localStorage.removeItem(key);
            }
        }
        catch (ex) {
            canUse = false;
        }
        return canUse;
    };
    Storage.setCookie = function (value) {
        var date = new Date();
        date.setTime(date.getTime() + Storage.cookieExpireDays * 24 * 60 * 60 * 1000);
        var expires = '; expires=' + date.toUTCString();
        var split = config.pageWindow.document.domain.split('.');
        var length = split.length;
        var domain = split[length - 2] + '.' + split[length - 1];
        document.cookie =
            Storage.storeKey +
                '=' +
                encodeURIComponent(value) +
                expires +
                '; path=/; domain=' +
                domain +
                '; SameSite=Lax;';
    };
    Storage.readCookie = function () {
        var split = config.pageWindow.document.cookie.split(';');
        var regex = Storage.storeRegex;
        for (var _i = 0, split_1 = split; _i < split_1.length; _i++) {
            var c = split_1[_i];
            if (regex.test(c)) {
                return decodeURIComponent(c.substring(c.indexOf('=') + 1, c.length));
            }
        }
        return '';
    };
    Storage.cookieExpireDays = 365;
    Storage.storeKey = '__CG';
    Storage.storeRegex = new RegExp('^(\\s)*' + Storage.storeKey + '=', 'i');
    return Storage;
}());
/* harmony default export */ var main_Storage = (Storage);

;// CONCATENATED MODULE: ./src/main/VisitorStorage.ts


var VisitorStorage = /** @class */ (function () {
    function VisitorStorage() {
        this.userId = -1;
        this.sessionId = 0;
        this.sessionTime = 0;
        this.pageViewCount = 0;
        this.viewCount = 0;
        this.pageViewId = 0;
        this.postFlag = -1;
        this.sendWaterfall = false;
        this.exitToEntry = 0;
    }
    VisitorStorage.prototype.resetViewCount = function () {
        this.viewCount = 1;
    };
    VisitorStorage.prototype.save = function () {
        var text = this.getText();
        main_Storage.save(text);
    };
    VisitorStorage.prototype.load = function () {
        var storeValue = main_Storage.read();
        if (!storeValue) {
            return false;
        }
        var split = storeValue.split(',');
        for (var _i = 0, split_1 = split; _i < split_1.length; _i++) {
            var visitorVal = split_1[_i];
            var array = visitorVal.split(':');
            if (array.length !== 2) {
                continue;
            }
            var key = array[0];
            if (typeof key === 'string') {
                key = key.trim();
            }
            var value = array[1];
            if (key === CookieIdentifier.UrlCheckSum) {
                this.urlCheckSum = value;
                continue;
            }
            var num = parseInt(array[1], 10);
            if (isNaN(num)) {
                continue;
            }
            switch (key) {
                case CookieIdentifier.UserId:
                    this.userId = num;
                    break;
                case CookieIdentifier.SessionId:
                    this.sessionId = num;
                    break;
                case CookieIdentifier.SessionTime:
                    this.sessionTime = num;
                    break;
                case CookieIdentifier.PageViewCount:
                    this.pageViewCount = num;
                    break;
                case CookieIdentifier.PostFlag:
                    this.postFlag = num;
                    break;
            }
        }
        return true;
    };
    VisitorStorage.prototype.getText = function () {
        var text = CookieIdentifier.UserId + ':' + this.userId + ',';
        text += CookieIdentifier.SessionId + ':' + this.sessionId + ',';
        text += CookieIdentifier.SessionTime + ':' + this.sessionTime + ',';
        text += CookieIdentifier.PageViewCount + ':' + this.pageViewCount + ',';
        text += CookieIdentifier.UrlCheckSum + ':' + this.urlCheckSum + ',';
        text += CookieIdentifier.PostFlag + ':' + this.postFlag;
        return text;
    };
    return VisitorStorage;
}());
/* harmony default export */ var main_VisitorStorage = (VisitorStorage);

;// CONCATENATED MODULE: ./src/main/Visitor.ts


var Visitor = /** @class */ (function () {
    function Visitor() {
        this.sessionExpire = 30 * 60 * 1000;
        this.store = new main_VisitorStorage();
    }
    Visitor.prototype.updateSessionTime = function () {
        if (!this.store) {
            return;
        }
        var time = new Date().getTime();
        if (time - this.store.sessionTime > this.sessionExpire) {
            this.store.sessionId = 0;
        }
        this.store.sessionTime = time;
        this.updateStore();
    };
    Visitor.prototype.updateStore = function () {
        if (!this.store) {
            return;
        }
        this.store.save();
    };
    Visitor.prototype.initStore = function () {
        var hasStoredValue = this.store.load();
        if (!hasStoredValue) {
            return;
        }
    };
    Visitor.prototype.checkAndResetPostFlags = function () {
        this.store.postFlag = 0;
        if (config.config.sampleRate < 0) {
            this.store.postFlag = -1;
            return;
        }
        var rate = this.getUserId(config.config.sampleRate / 100);
        if (this.store.userId <= rate) {
            this.store.postFlag = 1;
            var waterfallRate = rate / (100 / config.config.waterfallSampleRate);
            this.store.sendWaterfall = this.store.userId <= waterfallRate;
        }
    };
    Visitor.prototype.getReferrer = function (url) {
        var host = this.getHostName(url).replace(':', '-');
        var index = url.indexOf('?');
        var n = 0;
        for (var i = host.length; i < url.length; i++) {
            n += url.charCodeAt(i) % i;
        }
        return host + '/' + (index < 0 ? url.length : index) + '/' + url.length + '/' + n;
    };
    Visitor.prototype.getHostName = function (url) {
        var start = url.indexOf('//') + 2;
        var end = url.indexOf('/', start);
        if (start < 2 && end == -1) {
            return url;
        }
        if (end == -1) {
            end = url.length;
        }
        return url.substring(start, end);
    };
    Visitor.prototype.init = function () {
        var start = config.profiler.data.start;
        this.initStore();
        if (this.store.userId == -1 || this.store.userId == config.testUserId) {
            this.store.userId = this.getUserId();
        }
        this.checkAndResetPostFlags();
        if (this.store.sessionId == 0 || start - this.store.sessionTime > this.sessionExpire) {
            this.store.sessionId = Math.floor(1 + Math.random() * ((Math.pow(2, 32) - 2) / 2));
            this.store.pageViewCount = 1;
        }
        else {
            if (this.store.pageViewCount < 65535) {
                this.store.pageViewCount++;
            }
            if (this.getReferrer(config.pageWindow.document.referrer) == this.store.urlCheckSum &&
                this.store.sessionTime > 0) {
                this.store.exitToEntry = start - this.store.sessionTime;
            }
        }
        this.store.sessionTime = new Date().getTime();
        this.store.pageViewId = Math.floor(1 + Math.random() * ((Math.pow(2, 16) - 2) / 2));
        this.store.urlCheckSum = this.getReferrer(config.pageWindow.location.href);
        this.store.resetViewCount();
        this.updateStore();
        var hasVisitorData = this.store.load();
        return hasVisitorData;
    };
    //This method is used for 2 purpose
    // 1. When the userId is -1 (no id assigned for user), user id is created randomly. So method is called without a param
    // 2. A seed is used when we sample the user and sample rate is passed as param in that case.
    // This logic for sampling is happening in Core as well. Any changes in this method should be approved by Core as well.
    Visitor.prototype.getUserId = function (seed) {
        if (seed === void 0) { seed = Math.random(); }
        var userId = Math.floor(1 + seed * ((Math.pow(2, 64) - 2) / 2));
        return userId;
    };
    Visitor.prototype.shouldPost = function () {
        return this.store.postFlag == 1;
    };
    return Visitor;
}());
/* harmony default export */ var main_Visitor = (Visitor);

;// CONCATENATED MODULE: ./src/main/PerformanceObserver.ts


var PerformanceObserver_PerformanceObserver = /** @class */ (function () {
    function PerformanceObserver(isSoftnav) {
        var _this = this;
        this.longTaskEndTime = 0;
        this.waitTime = 5000;
        this.performanceObserverApi = config.pageWindow['PerformanceObserver'];
        this.performanceLongTaskTiming = config.pageWindow['PerformanceLongTaskTiming'];
        this.nowTime = 0;
        this.isSoftnav = false;
        this.getDomContentLoad = function () {
            var timing = main_Util.getNavigationTime();
            if (timing) {
                var navStart = main_Util.getNavigationStart(timing);
                var domContentLoad = main_Util.getMetricValue(timing.domContentLoadedEventEnd, navStart);
                return domContentLoad;
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.observeLongTask = function (entries) {
            for (var i = 0; i < entries.length; i++) {
                var currEntry = entries[i];
                var startTime = _this.isSoftnav ? currEntry.startTime - _this.nowTime : currEntry.startTime;
                var idleTimeBetweenLongTasks = startTime - _this.longTaskEndTime;
                if (idleTimeBetweenLongTasks >= _this.waitTime) {
                    _this.performanceObserver.disconnect();
                }
                else {
                    _this.setLongTaskTime(currEntry);
                }
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.setLongTaskTime = function (entry) {
            var newLongTaskTime = Math.round(entry.startTime + entry.duration);
            _this.longTaskEndTime = newLongTaskTime;
        };
        this.getLongTaskTime = function () {
            return _this.longTaskEndTime;
        };
        if (this.performanceLongTaskTiming) {
            // setting default TTI as domContentLoad on Load (not soft navigation).
            this.isSoftnav = isSoftnav;
            this.nowTime = config.pageWindow.performance.now();
            var domContentLoad = this.getDomContentLoad();
            if (!isSoftnav) {
                this.longTaskEndTime = domContentLoad;
            }
            this.observe(['longtask'], this.observeLongTask);
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    PerformanceObserver.prototype.observe = function (entryTypes, callBack) {
        if (this.performanceObserverApi) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            this.performanceObserver = new this.performanceObserverApi(function (list, _obj) {
                var entries = list.getEntries();
                callBack(entries);
            });
            this.performanceObserver.observe({ entryTypes: entryTypes });
        }
    };
    return PerformanceObserver;
}());
/* harmony default export */ var main_PerformanceObserver = (PerformanceObserver_PerformanceObserver);

;// CONCATENATED MODULE: ./src/main/DataProvider.ts






var performanceObserver = new main_PerformanceObserver(false);
var DataProvider = /** @class */ (function () {
    function DataProvider() {
        var _this = this;
        this.visitor = new main_Visitor();
        this.postUrl = config.config.postUrl;
        this.didSendInitial = false;
        this.isDebugging = false;
        this.countResourcesSent = 0;
        this.didSoftNavigation = false;
        this.currentUrl = '';
        this.softNavigationStart = 0;
        // limit to protect us from processing very large numbers of performance marks that the client
        // may have added to their page.
        this.MaxNumberOfPerformanceMarks = 1000;
        this.updatePerformanceMetrics = function (postObj) {
            var timing = main_Util.getNavigationTime();
            if (!timing) {
                return;
            }
            var navigationtiming = timing;
            var navStart = main_Util.getNavigationStart(timing);
            var domLoading = navigationtiming.loadEventEnd;
            var allowOrigin = timing.responseStart;
            postObj.dns = allowOrigin ? timing.domainLookupEnd - timing.domainLookupStart : null;
            postObj.fullConnect = allowOrigin ? timing.connectEnd - timing.connectStart : null;
            postObj.wait = allowOrigin ? timing.responseStart - timing.requestStart : null;
            postObj.load = allowOrigin ? timing.responseEnd - timing.responseStart : null;
            postObj.domInteractive = main_Util.getMetricValue(timing.domInteractive, navStart);
            postObj.domLoaded = main_Util.getMetricValue(timing.domContentLoadedEventStart, navStart);
            postObj.docComplete = main_Util.getMetricValue(timing.domComplete, navStart);
            postObj.response = main_Util.getMetricValue(timing.responseEnd, navStart);
            postObj.contentLoad = main_Util.getMetricValue(timing.loadEventStart, domLoading);
            postObj.redirect = timing.redirectEnd - timing.redirectStart;
            if (timing['secureConnectionStart']) {
                postObj.secureConnect = timing.connectEnd - timing['secureConnectionStart'];
            }
        };
        this.updateResources = function (ev, postObj) {
            if (config.hasPerformanceApi) {
                var arr = [];
                if (config.hasGetEntriesApi) {
                    arr = config.pageWindow.performance.getEntriesByType('resource');
                }
                if (ev != PostType.OnLoad) {
                    _this.setClearResources();
                    if (config.config.clearResources && config.pageWindow.performance.clearResourceTimings) {
                        postObj.resources = arr;
                        postObj.rqc = arr.length;
                        config.pageWindow.performance.clearResourceTimings();
                    }
                    else {
                        postObj.resources = arr.slice(_this.countResourcesSent);
                        _this.countResourcesSent = arr.length;
                    }
                }
            }
        };
        this.getTimeOnPage = function (isSoftNavigation) {
            var focusAwayTime = _this.getFocusAwayTime();
            var navigationStart = _this.getNavigationStart(isSoftNavigation);
            var timeOnPage = config.now() - navigationStart - focusAwayTime;
            return timeOnPage;
        };
        this.getVisuallyComplete = function (isSoftNavigation) {
            if (config.pageWindow['CPVisuallyComplete']) {
                var val = config.pageWindow['CPVisuallyComplete'].getValue(isSoftNavigation);
                if (typeof val == 'number' && val >= 0) {
                    return val;
                }
            }
        };
        this.updateEngagementMetrics = function (postObj, isSoftNavigation) {
            if (config.hasGetEntriesApi) {
                var paintTimings = config.pageWindow.performance.getEntriesByType('paint');
                if (paintTimings && paintTimings.length > 0) {
                    postObj.firstPaint = _this.getPaintTimings(paintTimings, 'first-paint');
                    postObj.firstContentPaint = _this.getPaintTimings(paintTimings, 'first-contentful-paint');
                }
            }
            var timing = main_Util.getNavigationTime();
            if (timing) {
                var navStart = main_Util.getNavigationStart(timing);
                var contentLoadEnd = main_Util.getMetricValue(timing.domContentLoadedEventEnd, navStart);
                var timeToInteract = performanceObserver.getLongTaskTime();
                if (isSoftNavigation) {
                    // For soft navigation when there are no long tasks captured, post visually complate as TTI.
                    postObj.timeToInteract = timeToInteract || _this.getVisuallyComplete(isSoftNavigation);
                }
                else {
                    postObj.timeToInteract =
                        contentLoadEnd && contentLoadEnd < timeToInteract ? timeToInteract : contentLoadEnd;
                }
            }
            if (config.profiler.getEventTimingHandler) {
                postObj.engagementTime = config.profiler.getEventTimingHandler().getEngagementTime();
                postObj.timeOnPage = _this.getTimeOnPage(isSoftNavigation);
                postObj.firstEngagementTime = _this.getFirstEngagementTime(isSoftNavigation);
            }
        };
        this.getFirstEngagementTime = function (isSoftNavigation) {
            var navigationStart = _this.getNavigationStart(isSoftNavigation);
            var engagementStartTime = config.profiler.getEventTimingHandler().getFirstEngagementTime();
            if (engagementStartTime && navigationStart) {
                var firstEngagementTime = engagementStartTime - navigationStart;
                return firstEngagementTime;
            }
            return 0;
        };
        this.getNavigationStart = function (isSoftNavigation) {
            var navigationStart = config.profiler.getEventTimingHandler &&
                typeof config.profiler.getEventTimingHandler === 'function' &&
                config.profiler.getEventTimingHandler().getStartTime &&
                typeof config.profiler.getEventTimingHandler().getStartTime === 'function'
                ? config.profiler.getEventTimingHandler().getStartTime()
                : 0;
            return isSoftNavigation ? _this.softNavigationStart : navigationStart;
        };
        this.getElapsedTimeSinceLatestNavStart = function () {
            var navStart = config.profiler.data.start;
            if (_this.didSoftNavigation && navStart) {
                return _this.softNavigationStart - navStart;
            }
            else {
                return 0;
            }
        };
        this.getFocusAwayTime = function () {
            return config.profiler.getEventTimingHandler().getFocusAwayTime() || 0;
        };
        this.updateDebugData = function () {
            var postObj = _this.createInitPostObject(PostType.OnBeforeUnload, false);
            var sendWaterfall = _this.visitor.store.sendWaterfall || !!main_Util.getQueryStringValue(config.config.waterfallParameter);
            var dataStr = postObj.toString(PostType.OnLoad, sendWaterfall);
            config.profiler['debugData'] = postObj;
            config.profiler['unloadDebugData'] = dataStr;
        };
        this.onPageLoad = function () {
            if (_this.isDebugging) {
                config.profiler['debugData'] = _this.createInitPostObject(PostType.OnLoad, false);
                config.profiler['updateDebugData'] = _this.updateDebugData;
                config.profiler['sendData'] = function () {
                    _this.doPost(PostType.OnBeforeUnload, false);
                };
                main_Util.stopEvents();
                return;
            }
            _this.visitor.updateSessionTime();
            _this.doPost(PostType.OnLoad, false);
        };
        this.captureSoftNavigations = function () {
            config.profiler.eventManager.add('hashchange', config.pageWindow, _this.onSoftNavigation);
            var history = config.pageWindow.history;
            if (!history) {
                return;
            }
            var functionStr = 'function';
            if (typeof history.go === functionStr) {
                var origGo_1 = history.go;
                history.go = function (delta) {
                    _this.onSoftNavigation();
                    origGo_1.call(history, delta);
                };
            }
            if (typeof history.back === functionStr) {
                var origBack_1 = history.back;
                history.back = function () {
                    _this.onSoftNavigation();
                    origBack_1.call(history);
                };
            }
            if (typeof history.forward === functionStr) {
                var origForward_1 = history.forward;
                history.forward = function () {
                    _this.onSoftNavigation();
                    origForward_1.call(history);
                };
            }
            if (typeof history.pushState === functionStr) {
                var origPush_1 = history.pushState;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                history.pushState = function (data, title, url) {
                    _this.onSoftNavigation();
                    origPush_1.call(history, data, title, url);
                };
            }
            if (typeof history.replaceState === functionStr) {
                var origReplace_1 = history.replaceState;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                history.replaceState = function (data, title, url) {
                    _this.onSoftNavigation();
                    origReplace_1.call(history, data, title, url);
                };
            }
        };
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        this.onViewVisuallyComplete = function (_val) {
            if (_this.didSoftNavigation) {
                _this.doPost(PostType.OnLoad, true);
            }
        };
        this.onSoftNavigation = function () {
            // do not consider softnavigation when load is not fired yet .....
            if (!config.profiler.data.loadFired) {
                return;
            }
            var vc;
            if (performanceObserver) {
                performanceObserver = new main_PerformanceObserver(true);
            }
            if (config.pageWindow['CPVisuallyComplete']) {
                vc = config.pageWindow['CPVisuallyComplete'];
                vc.onComplete(_this.onViewVisuallyComplete);
            }
            _this.doPost(PostType.OnBeforeUnload, _this.didSoftNavigation);
            _this.visitor.store.viewCount++;
            if (vc) {
                config.pageWindow.setTimeout(function () {
                    vc.reset();
                }, 0);
            }
            //Capture navigation start for each soft navigation
            config.pageWindow.setTimeout(function () {
                _this.softNavigationStart = config.now();
                if (config.profiler.getEventTimingHandler) {
                    var handler = config.profiler.getEventTimingHandler();
                    handler.startSoftNavigationCapture();
                    handler.resetSoftNavigationCapture();
                }
            }, 0);
            _this.didSoftNavigation = true;
        };
        this.doPost = function (type, isSoftNavigation) {
            if (!_this.visitor.shouldPost()) {
                return;
            }
            if (type == PostType.OnBeforeUnload && !config.profiler.data.loadFired) {
                type = PostType.OnAbort;
            }
            var postObj;
            if (_this.didSendInitial) {
                postObj = _this.createDiffPostObject(type, isSoftNavigation);
            }
            else {
                postObj = _this.createInitPostObject(type, isSoftNavigation);
                _this.didSendInitial = true;
            }
            var canSendWaterfall = _this.visitor.store.sendWaterfall || !!main_Util.getQueryStringValue(config.config.waterfallParameter);
            var isWaterfallPost = type == PostType.OnBeforeUnload || type == PostType.OnAbort;
            var sendWaterfall = canSendWaterfall && isWaterfallPost;
            _this.makeRequest(type, postObj, sendWaterfall);
        };
        if (!config.profiler || !config.profiler.data) {
            return;
        }
        var didInitVisitor = this.visitor.init();
        this.isDebugging = !!main_Util.getQueryStringValue(config.config.debugParameter);
        if (!this.isDebugging && !didInitVisitor) {
            main_Util.stopEvents();
            return;
        }
        this.captureSoftNavigations();
        // page load event capture
        var didLoadPost = false;
        var loadPost = function () {
            if (didLoadPost) {
                return;
            }
            config.profiler.data.loadFired = true;
            didLoadPost = true;
            _this.onPageLoad();
        };
        if (!config.profiler.data.loadFired && !!config.pageWindow.document) {
            config.profiler.data.loadFired = config.pageWindow.document.readyState === 'complete';
        }
        if (config.profiler.data.loadFired) {
            loadPost();
        }
        else {
            config.profiler.eventManager.add(config.windowEventDef.Load, parent.window, loadPost);
        }
        // need on both "beforeunload" and "unload" for cross-browser compatibility
        var didUnloadPost = false;
        var unloadPost = function () {
            if (didUnloadPost) {
                return;
            }
            didUnloadPost = true;
            _this.doPost(PostType.OnBeforeUnload, false);
        };
        config.profiler.eventManager.add(config.windowEventDef.BeforeUnload, config.pageWindow, unloadPost);
        config.profiler.eventManager.add(config.windowEventDef.Unload, config.pageWindow, unloadPost);
    }
    DataProvider.prototype.createInitPostObject = function (ev, isSoftNavigation) {
        var postObj = this.createBasePostObj(ev, true, isSoftNavigation);
        this.updatePerformanceMetrics(postObj);
        var info = this.visitor.store;
        if (info.exitToEntry > 0) {
            postObj.exitToEntry = info.exitToEntry;
        }
        var entryToLoad = config.profiler.data.loadTime - config.profiler.data.start;
        if (entryToLoad > 0) {
            postObj.entryToOnLoad = entryToLoad;
        }
        if (document['webkitVisibilityState'] === 'prerender') {
            postObj.prerender = 1;
        }
        if (config.hasPerformanceApi) {
            var arr = void 0;
            if (config.hasGetEntriesApi) {
                // This is less than optimal but that's down to the API we're working with:
                // https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByType .
                // We have to tell the TS compiler that we "know" the returned objects are in
                // fact PerformanceResourceTiming's.
                arr = config.pageWindow.performance.getEntriesByType('resource');
                postObj.resources = arr;
            }
            if (ev != PostType.OnLoad) {
                this.setClearResources();
                if (config.config.clearResources && config.pageWindow.performance.clearResourceTimings) {
                    config.pageWindow.performance.clearResourceTimings();
                }
                else {
                    this.countResourcesSent = arr.length;
                }
            }
        }
        return postObj;
    };
    DataProvider.prototype.createDiffPostObject = function (ev, isSoftNavigation) {
        var _a, _b, _c, _d;
        var postObj = this.createBasePostObj(ev, false, isSoftNavigation);
        this.updateResources(ev, postObj);
        this.updateEngagementMetrics(postObj, isSoftNavigation);
        this.addPerformanceMarksToPostData(config.pageWindow.performance, postObj);
        var visComplete = this.getVisuallyComplete(isSoftNavigation);
        if (visComplete) {
            postObj.visComplete = visComplete;
        }
        if ((_a = config === null || config === void 0 ? void 0 : config.profiler) === null || _a === void 0 ? void 0 : _a.getCPWebVitals) {
            var cpWebVitals = config.profiler.getCPWebVitals();
            if (cpWebVitals.cls) {
                postObj.cls = cpWebVitals.cls;
            }
            if (cpWebVitals.lcp) {
                postObj.lcp = cpWebVitals.lcp;
            }
            if (cpWebVitals.inp) {
                postObj.inp = cpWebVitals.inp;
            }
            if (cpWebVitals.inpDe && cpWebVitals.inpDe.length > 0) {
                postObj.inpDe = cpWebVitals.inpDe;
            }
        }
        if (((_c = (_b = config === null || config === void 0 ? void 0 : config.profiler) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.jsCount) > 0) {
            postObj.jsErrorCount = config.profiler.data.jsCount;
            postObj.jsErrors = config.profiler.data.jsErrors;
            config.profiler.clearErrors();
        }
        if ((_d = config === null || config === void 0 ? void 0 : config.profiler) === null || _d === void 0 ? void 0 : _d.getAjaxRequests) {
            var ajaxRequests = config.profiler.getAjaxRequests();
            if (ajaxRequests) {
                postObj.ajaxRequests = ajaxRequests.slice();
                config.profiler.clearAjaxRequests();
            }
        }
        if (config === null || config === void 0 ? void 0 : config.profiler.getFrustrationMetrics) {
            var cpFrustrationMetrics = config.profiler.getFrustrationMetrics();
            if (cpFrustrationMetrics) {
                postObj.frc = cpFrustrationMetrics.frc;
                postObj.fec = cpFrustrationMetrics.fec;
                postObj.fdc = cpFrustrationMetrics.fdc;
                postObj.ftc = cpFrustrationMetrics.ftc;
            }
        }
        return postObj;
    };
    DataProvider.prototype.createBasePostObj = function (ev, isNewPageView, isSoftNavigation) {
        var postObj = new main_PostData();
        postObj.postType = ev;
        postObj.isNewPageView = isNewPageView;
        postObj.siteId = config.config.siteId;
        // We need to decode first because if the url is already encoded, it is getting double encoded
        // Eg: if url is google.com/test%20me then encodeURI is converting to google.com/test%2520me
        postObj.referrer = encodeURI(decodeURI(config.pageWindow.location.href));
        postObj.sampleRate = config.config.sampleRate;
        postObj.waterfallSampleRate = config.config.waterfallSampleRate;
        var info = this.visitor.store;
        postObj.userId = info.userId;
        postObj.sessionId = info.sessionId;
        postObj.pageViewId = info.pageViewId;
        postObj.pageViewCount = info.pageViewCount;
        postObj.viewCount = info.viewCount;
        postObj.screenHeight = screen.height;
        postObj.screenWidth = screen.width;
        this.currentUrl = postObj.referrer;
        if (ev === PostType.OnBeforeUnload || ev === PostType.OnAbort) {
            postObj.referrer = this.currentUrl || encodeURI(decodeURI(config.pageWindow.location.href));
        }
        else {
            postObj.referrer = encodeURI(decodeURI(config.pageWindow.location.href));
        }
        if (isSoftNavigation) {
            postObj.isNewView = ev == PostType.OnLoad;
        }
        if (config.profiler.hasInsight) {
            this.addInsightForPost(postObj);
            config.profiler.clearInfo();
        }
        return postObj;
    };
    /**
     * Iterate (if any) the "mark"'s (see https://www.w3.org/TR/user-timing/#extensions-performance-interface)
     * that have been added to the page's Performance object. For each one, check if its one of the four standard
     * ones that we capture. If it is, add it to the matching property in PostData. If there has been a soft
     * navigation only capture marks that were set after it occurred.
     * @param performance the w3.org Performance API object.
     * @param postObj the DTO Post object we use to populate our POST to the Logger.
     * @param isSoftNavigation true if this method is being invoked as part of a soft nav, false otherwise.
     */
    DataProvider.prototype.addPerformanceMarksToPostData = function (performance, postObj) {
        if (config.hasPerformanceApi && performance.getEntriesByType) {
            var marks = performance.getEntriesByType('mark');
            if (marks && marks.length > 0 && marks.length < this.MaxNumberOfPerformanceMarks) {
                var elapsedNavStartTime_1 = this.getElapsedTimeSinceLatestNavStart();
                var validMarks = marks.filter(function (x) {
                    return x.startTime != null && x.startTime >= elapsedNavStartTime_1;
                });
                for (var _i = 0, validMarks_1 = validMarks; _i < validMarks_1.length; _i++) {
                    var mark = validMarks_1[_i];
                    this.addMarkToPostData(mark, postObj);
                }
            }
        }
    };
    /**
     * Given a performance mark (see https://www.w3.org/TR/user-timing/#extensions-performance-interface),
     * see if it's a standard one that we're interested in. If it is, set the matching PostData property.
     * @param mark the performance mark set on the clients' page that we're interrogating
     * @param postObj the DTO object into which we put the mark value
     */
    DataProvider.prototype.addMarkToPostData = function (mark, postObj) {
        var markTime = main_Util.getRoundedValue(mark.startTime + mark.duration);
        switch (mark.name) {
            case 'mark_fully_loaded':
                postObj.markFullyLoaded = markTime;
                break;
            case 'mark_fully_visible':
                postObj.markFullyVisible = markTime;
                break;
            case 'mark_above_the_fold':
                postObj.markAboveTheFold = markTime;
                break;
            case 'mark_time_to_user_action':
                postObj.markTimeToUserAction = markTime;
                break;
            default:
                break; // arriving here means it's a nonstandard mark that we don't care about
        }
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
    DataProvider.prototype.getPaintTimings = function (paintTimings, type) {
        var paintType = paintTimings.filter(function (x) { return x.name === type; });
        if (paintType && paintType.length > 0 && paintType[0].startTime) {
            return paintType[0].startTime;
        }
    };
    DataProvider.prototype.setClearResources = function () {
        if (config.pageWindow['__cpPreventResourceClear']) {
            config.config.clearResources = config.pageWindow['__cpPreventResourceClear'] === false;
        }
    };
    DataProvider.prototype.addInsightForPost = function (postObj) {
        var insight = config.profiler.info;
        for (var name_1 in insight) {
            switch (name_1) {
                case 'appError': {
                    var n = insight[name_1];
                    if (n && typeof n == 'object') {
                        var num = void 0;
                        for (var key in n) {
                            num = Number(key);
                            if (isNaN(num)) {
                                continue;
                            }
                            var tmp = n[key];
                            if (tmp && typeof tmp == 'string') {
                                var str = tmp;
                                if (str.length > 32) {
                                    str = str.substring(0, 32);
                                }
                                postObj.addError(key, str);
                            }
                        }
                    }
                    break;
                }
                case 'conversion': {
                    var n = insight[name_1];
                    postObj.isConversion = true;
                    if (n) {
                        if (typeof n == 'object') {
                            var num = void 0;
                            for (var key in n) {
                                num = Number(key);
                                if (isNaN(num)) {
                                    continue;
                                }
                                var tmp = n[key];
                                if (tmp && typeof tmp == 'number') {
                                    postObj.revenue = num;
                                    postObj.revenueItems = tmp;
                                }
                            }
                        }
                    }
                    break;
                }
                case 'indicator': {
                    var ind = this.buildInsight(insight[name_1], 0);
                    if (ind[0]) {
                        postObj.addIndicator(ind[1]);
                    }
                    break;
                }
                case 'tracepoint': {
                    var tra = this.buildInsight(insight[name_1], '');
                    if (tra[0]) {
                        postObj.addTracepoint(tra[1]);
                    }
                    break;
                }
                case 'pageGroup': {
                    var n = insight[name_1];
                    if (n !== undefined && typeof n == 'string') {
                        postObj.pageGroup = n;
                    }
                    break;
                }
                case 'variation': {
                    var n = insight[name_1];
                    if (n !== undefined && typeof n == 'string') {
                        postObj.variation = n;
                    }
                    break;
                }
            }
        }
    };
    DataProvider.prototype.buildInsight = function (insight, expected) {
        var obj = {};
        var ret = false;
        if (insight && typeof insight == 'object') {
            for (var key in insight) {
                if (key) {
                    var n = insight[key];
                    if (n != null && typeof n == typeof expected) {
                        obj[key] = n;
                        ret = true;
                    }
                }
            }
        }
        if (!ret) {
            return [ret, obj];
        }
        return [ret, obj];
    };
    DataProvider.prototype.makeRequest = function (type, postObj, sendWaterfall) {
        var dataStr = postObj.toString(type, sendWaterfall);
        if (config.pageWindow.navigator && typeof config.pageWindow.navigator['sendBeacon'] == 'function') {
            config.pageWindow.navigator['sendBeacon'](this.postUrl, dataStr);
        }
        else {
            var request = new XMLHttpRequest();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (window.XDomainRequest) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                request = new window.XDomainRequest();
                //Set all the fields so that the request can be made succesfully
                request.timeout = 0;
                request.onload = function () {
                    // do nothing
                };
                request.onerror = function () {
                    // do nothing
                };
                request.ontimeout = function () {
                    // do nothing
                };
                request.onprogress = function () {
                    // do nothing
                };
            }
            request.open('POST', this.postUrl, false);
            request.setRequestHeader
                ? request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
                : null;
            request.send(dataStr);
            request = null;
        }
    };
    return DataProvider;
}());
/* harmony default export */ var main_DataProvider = (DataProvider);

;// CONCATENATED MODULE: ./src/main/main.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var mainScript = function () { return __awaiter(void 0, void 0, void 0, function () {
    var getAppDetails, appDetails, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!document.getElementById || !(window['attachEvent'] || window.addEventListener)) {
                    return [2 /*return*/];
                }
                if (!config.windowEvent || !config.profiler) {
                    return [2 /*return*/];
                }
                if (!!config.pageWindow['__cpPostUrl']) {
                    config.config.postUrl = config.pageWindow['__cpPostUrl'].trim();
                }
                if (!!config.pageWindow['__cpSendOnLoad']) {
                    config.config.sendOnLoad = config.pageWindow['__cpSendOnLoad'] === true;
                }
                getAppDetails = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var response, data;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, fetch('https://portalstage.catchpoint.com/jp/91649/v4.0.3/AC')];
                            case 1:
                                response = _a.sent();
                                return [4 /*yield*/, response.json()];
                            case 2:
                                data = _a.sent();
                                return [2 /*return*/, data];
                        }
                    });
                }); };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, getAppDetails()];
            case 2:
                appDetails = _a.sent();
                config.setAppConfig({
                    sampleRate: appDetails.SampleRate,
                    ajaxDomains: appDetails.AjaxDomains,
                    waterfallSampleRate: appDetails.WaterfallSampleRate
                });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error('CP RUM Error', error_1);
                return [3 /*break*/, 4];
            case 4:
                new main_DataProvider();
                return [2 /*return*/];
        }
    });
}); };
/* harmony default export */ var main = (mainScript);

;// CONCATENATED MODULE: ./src/utils.ts
var extractImageUrl = function (backgroundImage) {
    if (backgroundImage && backgroundImage.startsWith('url')) {
        var match = backgroundImage.match(/url\(["']?([^"']*)["']?\)/);
        var url = match && match.length > 1 && match[1];
        if (url && !url.startsWith('data')) {
            return url;
        }
    }
    return null;
};
var getSelectorFromTarget = function (target) {
    var className = target.className !== '' ? ".".concat(target.className) : '';
    var targetId = target.id !== '' ? "#".concat(target.id) : '';
    return [target.nodeName, className, targetId].join(' ');
};

;// CONCATENATED MODULE: ./src/visComplete.ts

/**
 * Visually completed is calculated using Mutation observer, when elements added to the page we are tracking the time stamp.
 * After page load VisComplete listen to mutations for 5sec and will disconnect mutation observer.
 * If the difference between previous mutation and the current mutation is greater than 1000ms mutation observer will be disconnected.
 * VisComplete also listen to all the resources being loaded on the page (till 2s after page load) and take the end time of the last resource.
 * Max value of the Mutation and the last resource to get the response will be considered as Visually complete
 * VisComplete listen to scroll and click events to avoid miscalculation of VCT and will stop calculating if one of the events fired.
 * */
var windowItem = parent.window || window;
var visComplete = function () {
    windowItem['CPVisuallyComplete'] = (function () {
        var VisComplete = /** @class */ (function () {
            function VisComplete() {
                var _this = this;
                this.targetWindow = windowItem;
                this.mutationObserver = undefined;
                this.start = 0;
                this.waitMs = 2000; //The time to wait after onload, before we start running our vis complete logic
                this.maxResourceTiming = 0;
                this.mutationObserverVal = 0;
                this.scroll = 'scroll';
                this.click = 'click';
                this.maxDiffBetweenMutation = 1000;
                this.sinceLastXHR = 500;
                this.disconnectObserverTimeout = 5000;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                this.hasPerformance = typeof this.targetWindow.performance === 'object' &&
                    typeof this.targetWindow.performance.getEntriesByType === 'function';
                this.removeListeners = function () {
                    document.removeEventListener(_this.scroll, _this.clear);
                    document.removeEventListener(_this.click, _this.clear);
                };
                this.addListeners = function () {
                    document.addEventListener(_this.scroll, _this.clear);
                    document.addEventListener(_this.click, _this.clear);
                };
                this.imageListener = function (event) {
                    var requests = _this.targetWindow.performance.getEntriesByType('resource');
                    var request = undefined;
                    for (var i = 0; i < requests.length; i++) {
                        if (requests[i].name === event.target.currentSrc) {
                            request = requests[i];
                            break;
                        }
                    }
                    if (request) {
                        _this.maxResourceTiming = Math.max(_this.maxResourceTiming, Math.round(request.responseEnd));
                    }
                    event.currentTarget.removeEventListener('load', _this.imageListener);
                };
                this.videoListener = function (event) {
                    _this.maxResourceTiming = Math.max(_this.maxResourceTiming, Math.round(_this.getPerformanceTime()));
                    event.currentTarget.removeEventListener('canplay', _this.videoListener);
                };
                this.addListenersForDynamicContent = function (element) {
                    var images = element.querySelectorAll('img');
                    for (var i = 0; i < images.length; i += 1) {
                        var image = images[i];
                        if (_this.isVisible(image)) {
                            image.addEventListener('load', _this.imageListener);
                        }
                    }
                    var videos = element.querySelectorAll('video');
                    for (var i = 0; i < videos.length; i += 1) {
                        var video = videos[i];
                        if (_this.isVisible(video)) {
                            video.addEventListener('canplay', _this.videoListener);
                        }
                    }
                };
                this.clear = function () {
                    clearTimeout(_this.timeout);
                    _this.removeListeners();
                    _this.trigger();
                };
                this.onLoad = function () {
                    _this.timeout = window.setTimeout(function () {
                        _this.removeListeners();
                        _this.calculate();
                    }, _this.waitMs);
                };
                this.getBackgroundImagesTiming = function () {
                    var imagesToCheck = [];
                    for (var i = 0; i < document.styleSheets.length; i += 1) {
                        var styleSheet = document.styleSheets[i];
                        try {
                            for (var j = 0; j < styleSheet.cssRules.length; j += 1) {
                                var cssRule = styleSheet.cssRules[j];
                                var selector = cssRule.selectorText;
                                var style = cssRule.style;
                                if (style) {
                                    for (var k = 0; k < style.length; k += 1) {
                                        var propertyName = style[k];
                                        if (propertyName === 'background-image') {
                                            var propertyValue = style[propertyName];
                                            var url = extractImageUrl(propertyValue);
                                            if (url) {
                                                var element = _this.targetWindow.document.querySelector(selector);
                                                if (_this.isVisible(element)) {
                                                    imagesToCheck.push(url);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            // eslint-disable-next-line no-empty
                        }
                        catch (e) { }
                    }
                    var elements = _this.targetWindow.document.querySelectorAll('[style*="background"]');
                    for (var i = 0; i < elements.length; i++) {
                        if (_this.isVisible(elements[i])) {
                            var styles = _this.targetWindow.getComputedStyle(elements[i]);
                            var backgroundImage = styles.getPropertyValue('background-image');
                            var url = extractImageUrl(backgroundImage);
                            if (url) {
                                imagesToCheck.push(url);
                            }
                        }
                    }
                    for (var _i = 0, imagesToCheck_1 = imagesToCheck; _i < imagesToCheck_1.length; _i++) {
                        var url = imagesToCheck_1[_i];
                        var requests = _this.targetWindow.performance.getEntriesByType('resource');
                        var request = undefined;
                        for (var i = 0; i < requests.length; i++) {
                            if (requests[i].name === new URL(url, _this.targetWindow.location.href).href) {
                                request = requests[i];
                                break;
                            }
                        }
                        if (request) {
                            _this.maxResourceTiming = Math.max(_this.maxResourceTiming, Math.round(request.responseEnd));
                        }
                    }
                };
                this.calculate = function () {
                    if (!_this.targetWindow.performance) {
                        _this.trigger();
                        return;
                    }
                    _this.getBackgroundImagesTiming();
                    _this.trigger();
                };
                this.getPerformanceTime = function () {
                    return _this.targetWindow['performance'].now();
                };
                this.resetValueOnSoftNav = function () {
                    _this.mutationObserverVal = 0;
                    _this.maxResourceTiming = 0;
                    _this.isSoftNav = false;
                };
                this.isVisible = function (node) {
                    var rect = typeof node.getBoundingClientRect === 'function' && node.getBoundingClientRect();
                    // if the added element is Visible in the view port
                    var isNodeInViewport = rect &&
                        rect.width * rect.height >= 8 &&
                        rect.right >= 0 &&
                        rect.bottom >= 0 &&
                        rect.left <= _this.targetWindow.innerWidth &&
                        rect.top <= _this.targetWindow.innerHeight &&
                        !node.hidden &&
                        node.type !== 'hidden';
                    if (isNodeInViewport) {
                        var style = window.getComputedStyle(node);
                        return (style.display !== 'none' &&
                            style.visibility !== 'hidden' &&
                            style.visibility !== 'collapse' &&
                            +style.opacity > 0);
                    }
                    return false;
                };
                this.mutationCallback = function (mutationsList) {
                    mutationsList.forEach(function (mutation) {
                        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            var addedNode = mutation.addedNodes[0];
                            if (_this.isVisible(addedNode)) {
                                if (addedNode.nodeName.toLowerCase() === 'img') {
                                    addedNode.addEventListener('load', _this.imageListener);
                                }
                                if (addedNode.nodeName.toLowerCase() === 'video') {
                                    addedNode.addEventListener('canplay', _this.videoListener);
                                }
                                var perfTime = _this.getPerformanceTime();
                                if (_this.isSoftNav) {
                                    _this.resetValueOnSoftNav();
                                }
                                var requests = _this.targetWindow.performance.getEntriesByType('resource');
                                var lastXHR = undefined;
                                for (var i = 0; i < requests.length; i++) {
                                    if (requests[i].initiatorType === 'xmlhttprequest') {
                                        lastXHR = requests[i];
                                        break;
                                    }
                                }
                                if (_this.mutationObserverVal === 0 ||
                                    (lastXHR && perfTime - lastXHR.responseEnd < _this.sinceLastXHR) ||
                                    perfTime - _this.mutationObserverVal <= _this.maxDiffBetweenMutation) {
                                    _this.mutationObserverVal = Math.round(perfTime);
                                }
                            }
                        }
                        else if (mutation.type === 'attributes') {
                            if (mutation.target.nodeName.toLowerCase() === 'img' && mutation.attributeName === 'src') {
                                if (_this.isVisible(mutation.target)) {
                                    mutation.target.addEventListener('load', _this.imageListener);
                                }
                            }
                        }
                    });
                };
                this.initMutationObserver = function () {
                    var browserMutationObserver = _this.targetWindow['MutationObserver'] ||
                        _this.targetWindow['WebKitMutationObserver'] ||
                        _this.targetWindow['MozMutationObserver'];
                    if (browserMutationObserver && _this.targetWindow['performance']) {
                        _this.mutationObserver = new browserMutationObserver(_this.mutationCallback);
                        _this.observe();
                    }
                };
                this.trigger = function () {
                    if (_this.callback) {
                        var visCompTime = _this.getValue(false);
                        _this.callback(visCompTime);
                    }
                };
                this.observe = function () {
                    _this.mutationObserver.observe(_this.targetWindow.document, {
                        childList: true,
                        attributes: true,
                        characterData: true,
                        subtree: true
                    });
                    setTimeout(function () {
                        _this.mutationObserver.disconnect();
                    }, _this.disconnectObserverTimeout);
                };
                this.getValue = function (isSoftNavigation) {
                    //If isSoftNavigation is not set, look for isSoftNav value captured by CPVisuallyComplete
                    var isSoftNav = isSoftNavigation || _this.isSoftNav;
                    if (_this.maxResourceTiming || _this.mutationObserverVal) {
                        var visCompTime = 0;
                        if (_this.maxResourceTiming && _this.mutationObserverVal) {
                            visCompTime = Math.max(_this.maxResourceTiming, _this.mutationObserverVal);
                        }
                        else if (_this.maxResourceTiming) {
                            visCompTime = _this.maxResourceTiming;
                        }
                        else if (_this.mutationObserverVal) {
                            visCompTime = _this.mutationObserverVal;
                        }
                        if (!isSoftNav) {
                            return Math.round(Math.max(visCompTime - _this.start, _this.getFirstPaintTime()));
                        }
                        return Math.round(visCompTime - _this.start);
                    }
                    return undefined;
                };
                this.onComplete = function (callback) {
                    _this.callback = callback;
                };
                this.reset = function () {
                    _this.isSoftNav = true;
                    if (_this.targetWindow['performance']) {
                        _this.start = _this.getPerformanceTime();
                        _this.mutationObserver.disconnect();
                        _this.observe();
                        _this.onLoad();
                    }
                };
                this.captureSoftNavigations = function () {
                    if (!_this.targetWindow['HashChangeEvent'] || _this.targetWindow['RProfiler']) {
                        return;
                    }
                    _this.addEvent('hashchange', _this.targetWindow, _this.reset);
                    var history = _this.targetWindow.history;
                    if (!history) {
                        return;
                    }
                    var functionStr = 'function';
                    if (typeof history.go === functionStr) {
                        var origGo_1 = history.go;
                        history.go = function (delta) {
                            _this.reset();
                            origGo_1.call(history, delta);
                        };
                    }
                    if (typeof history.back === functionStr) {
                        var origBack_1 = history.back;
                        history.back = function () {
                            _this.reset();
                            origBack_1.call(history);
                        };
                    }
                    if (typeof history.forward === functionStr) {
                        var origForward_1 = history.forward;
                        history.forward = function () {
                            _this.reset();
                            origForward_1.call(history);
                        };
                    }
                    if (typeof history.pushState === functionStr) {
                        var origPush_1 = history.pushState;
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        history.pushState = function (data, title, url) {
                            _this.reset();
                            origPush_1.call(history, data, title, url);
                        };
                    }
                    if (typeof history.replaceState === functionStr) {
                        var origReplace_1 = history.replaceState;
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        history.replaceState = function (data, title, url) {
                            _this.reset();
                            origReplace_1.call(history, data, title, url);
                        };
                    }
                };
                this.initMutationObserver();
                this.captureSoftNavigations();
                this.init();
            }
            VisComplete.prototype.init = function () {
                var _this = this;
                var document = this.targetWindow.document;
                if (document.readyState === 'complete') {
                    this.onLoad();
                }
                else {
                    this.targetWindow.addEventListener('load', this.onLoad);
                }
                if (document.readyState === 'interactive') {
                    this.addListenersForDynamicContent(document);
                }
                else {
                    this.targetWindow.addEventListener('DOMContentLoaded', function () {
                        _this.addListenersForDynamicContent(document);
                    });
                }
                this.removeListeners();
                this.addListeners();
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            VisComplete.prototype.addEvent = function (type, target, func) {
                if (this.targetWindow['attachEvent']) {
                    target.attachEvent('on' + type, func);
                }
                else {
                    target.addEventListener(type, func, false);
                }
            };
            VisComplete.prototype.getFirstPaintTime = function () {
                var paintTime = 0;
                try {
                    var paintTimings = this.targetWindow.performance.getEntriesByType('paint');
                    if (paintTimings && paintTimings.length > 0) {
                        var firstPaint = paintTimings.filter(function (x) { return x.name === 'first-paint'; });
                        if (firstPaint && firstPaint.length > 0 && firstPaint[0].startTime) {
                            paintTime = Math.round(firstPaint[0].startTime);
                        }
                        var firstContentfulPaint = paintTimings.filter(function (x) { return x.name === 'first-contentful-paint'; });
                        if (firstContentfulPaint &&
                            firstContentfulPaint.length > 0 &&
                            firstContentfulPaint[0].startTime) {
                            paintTime = Math.round(firstContentfulPaint[0].startTime);
                        }
                    }
                }
                catch (_a) {
                    // do nothing
                }
                return paintTime;
            };
            return VisComplete;
        }());
        var visComplete = new VisComplete();
        return {
            getValue: visComplete.getValue,
            onComplete: visComplete.onComplete,
            reset: visComplete.reset
        };
    })();
};
/* harmony default export */ var src_visComplete = (visComplete);

;// CONCATENATED MODULE: ./src/frustrationMetrics/RageClick.ts
/**
 * Detect rage clicks
 *
 * Rage clicks are like punching your mouse or touchpad because it doesn’t do what you want.
 * They are triggered when a visitor clicks an element on your website multiple times, rapidly.
 * In most cases, rage clicks signal that your website didn’t react the way your visitor expected,
 * so you may want to take a closer look at it.
 */
var RageClick = /** @class */ (function () {
    function RageClick() {
        this.clickCount = 0;
        this.rageClickLimit = 3;
        this.timeoutDuration = 1000; // milliseconds
        this.rageClickValue = null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    RageClick.prototype.startListening = function (_event) {
        this.clicklistener();
    };
    RageClick.prototype.getRageClick = function () {
        return this.rageClickValue;
    };
    RageClick.prototype.clicklistener = function () {
        var _this = this;
        this.clickCount++;
        var clickInterval = setInterval(function () {
            _this.clickCount = 0;
            clearInterval(clickInterval);
        }, this.timeoutDuration);
        if (this.clickCount >= this.rageClickLimit) {
            this.rageClickValue = 1;
            clearInterval(clickInterval);
        }
    };
    return RageClick;
}());
var rageClick = new RageClick();

;// CONCATENATED MODULE: ./src/frustrationMetrics/ErrorClick.ts
/**
 * Detects error clicks
 *
 * Error clicks are clicks that result in JavaScript errors.
 * The visitor doesn’t have to click on something many times in a row.
 * Just one click is enough to spot an error.
 * Often the visitor doesn’t notice that something is broken, but for you,
 * it’s a signal that a particular JavaScript element is not working.
 */
var ErrorClick = /** @class */ (function () {
    function ErrorClick() {
        this.error = '';
        this.errorClickValue = null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ErrorClick.prototype.startListening = function (_event) {
        var _this = this;
        window.onerror = function (msg) {
            _this.error = msg;
        };
        this.clicklistener();
    };
    ErrorClick.prototype.getErrorClick = function () {
        return this.errorClickValue;
    };
    ErrorClick.prototype.clicklistener = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.error) {
                _this.errorClickValue = 1;
            }
        }, 0);
    };
    return ErrorClick;
}());
var errorClick = new ErrorClick();

;// CONCATENATED MODULE: ./src/frustrationMetrics/DeadClick.ts

/**
 * Detects dead clicks
 *
 * Dead clicks are clicks that have no effect on the page.
 * The visitor clicks on the image to zoom it in, but nothing happens.
 * He expects a text string to be a link, but it isn’t. Or he clicks on a button,
 * but to no avail. In such situations, the visitor will end up clicking twice, quickly.
 * Looking for dead clicks will help you find these main points of frustration and improve visitors` experience as soon as possible.
 */
var DeadClick = /** @class */ (function () {
    function DeadClick() {
        this.clickCounts = {};
        this.deadClickLimit = 2;
        this.deadClickValue = null;
        this.timeoutDuration = 1000; // milliseconds
    }
    DeadClick.prototype.getDeadClick = function () {
        return this.deadClickValue;
    };
    DeadClick.prototype.clickListener = function (event) {
        var _this = this;
        var clickCountClear = setInterval(function () {
            _this.clickCounts = {};
            clearInterval(clickCountClear);
        }, this.timeoutDuration);
        var selector = getSelectorFromTarget(event.target);
        this.clickCounts[selector] = this.clickCounts[selector] ? this.clickCounts[selector] + 1 : 1;
        if (this.clickCounts[selector] === this.deadClickLimit) {
            this.deadClickValue = 1;
            clearInterval(clickCountClear);
        }
    };
    DeadClick.prototype.startListening = function (event) {
        this.clickListener(event);
    };
    return DeadClick;
}());
var deadClick = new DeadClick();

;// CONCATENATED MODULE: ./src/frustrationMetrics/ThrashedCursor.ts
/**
 * Detect mouse shake
 *
 * Mouse shaking is when users erratically move their cursor back and forth.
 * Rapidly moving the cursor over a page can indicate
 * the user is getting exasperated with some aspect of their experience.
 * Perhaps the site performance is slow or they are struggling to figure something out.
 *
 */
var ThrashedCursor = /** @class */ (function () {
    function ThrashedCursor() {
        var _this = this;
        this.mouseMoveListener = function (event) {
            var nextDirection = Math.sign(event.movementX);
            _this.distance += Math.abs(event.movementX) + Math.abs(event.movementY);
            if (nextDirection !== _this.direction) {
                _this.direction = nextDirection;
                _this.directionChangeCount++;
            }
        };
        this.directionChangeCount = 0;
        this.distance = 0;
        this.interval = 350;
        this.threshold = 0.01;
        this.thrashedCursorValue = false;
        var intervalClear = setInterval(function () {
            var nextVelocity = _this.distance / _this.interval;
            if (!_this.velocity) {
                _this.velocity = nextVelocity;
                return;
            }
            var acceleration = (nextVelocity - _this.velocity) / _this.interval;
            if (_this.directionChangeCount && acceleration > _this.threshold) {
                // clearing the interval after detecting thrashed cursor
                clearInterval(intervalClear);
                _this.thrashedCursorValue = true;
            }
            _this.distance = 0;
            _this.directionChangeCount = 0;
            _this.velocity = nextVelocity;
        }, this.interval);
    }
    ThrashedCursor.prototype.getThrashedCursor = function () {
        return this.thrashedCursorValue;
    };
    ThrashedCursor.prototype.startListening = function (event) {
        this.mouseMoveListener(event);
    };
    return ThrashedCursor;
}());
var thrashedCursor = new ThrashedCursor();

;// CONCATENATED MODULE: ./src/frustrationMetrics/FrustrationMetrics.ts




var FrustrationMetrics = /** @class */ (function () {
    function FrustrationMetrics() {
    }
    FrustrationMetrics.prototype.listenClickEvent = function (event) {
        rageClick.startListening(event);
        errorClick.startListening(event);
        deadClick.startListening(event);
    };
    FrustrationMetrics.prototype.listenMouseMove = function (event) {
        thrashedCursor.startListening(event);
    };
    FrustrationMetrics.prototype.startListeningClickEvent = function () {
        window.addEventListener('click', this.listenClickEvent.bind(this));
    };
    FrustrationMetrics.prototype.stopListeningClickEvent = function () {
        window.removeEventListener('click', this.listenClickEvent.bind(this));
    };
    FrustrationMetrics.prototype.startListeningMouseMove = function () {
        window.addEventListener('mousemove', this.listenMouseMove.bind(this));
    };
    FrustrationMetrics.prototype.stopListeningMouseMove = function () {
        window.removeEventListener('mousemove', this.listenMouseMove.bind(this));
    };
    return FrustrationMetrics;
}());
var frustrationMetrics = new FrustrationMetrics();

;// CONCATENATED MODULE: ./src/rprofiler/rprofiler.ts
var rprofiler_assign = (undefined && undefined.__assign) || function () {
    rprofiler_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return rprofiler_assign.apply(this, arguments);
};















var RProfiler = /** @class */ (function () {
    function RProfiler() {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.restUrl = 'portalstage.catchpoint.com/jp/91649/v4.0.3/M';
        this.startTime = new Date().getTime();
        this.eventsTimingHandler = new rprofiler_EventsTimingHandler();
        this.inpDe = [];
        this.version = 'v4.0.3'; //version number of inline script
        this.info = {};
        this.hasInsight = false;
        this.data = {
            start: this.startTime,
            jsCount: 0,
            jsErrors: [],
            loadTime: -1,
            loadFired: window.document.readyState == 'complete'
        };
        this.eventManager = new rprofiler_ProfilerEventManager();
        this.setCLS = function (_a) {
            var metricName = _a.name, metricValue = _a.delta;
            var CLS = metricName === 'CLS' ? metricValue : undefined;
            _this.cls = CLS;
        };
        this.setLCP = function (_a) {
            var metricName = _a.name, metricValue = _a.value, metricDelta = _a.delta;
            var LCP = metricName === 'LCP' ? metricValue : undefined;
            // Logic skip if the delta value is negative and metric value is 0.
            if (metricDelta >= 0 && metricValue > 0) {
                _this.lcp = LCP;
            }
        };
        // Value being used instead delta as metricValue, Delta provide single value and value is for overall value.
        this.setINP = function (_a) {
            var metricName = _a.name, metricValue = _a.value, attribution = _a.attribution;
            var goodInpValue = 200;
            if (metricName === 'INP') {
                _this.inp = metricValue;
                // we want to capture only the INP values greater than 200ms as 200-500 is needs improvement and 500+ is poor.
                if (metricValue > goodInpValue) {
                    var eventParams = {
                        t: attribution.interactionTarget,
                        eTy: attribution.interactionType,
                        sTi: main_Util.getRoundedValue(attribution.interactionTime),
                        indl: main_Util.getRoundedValue(attribution.inputDelay),
                        psdu: main_Util.getRoundedValue(attribution.processingDuration),
                        prdl: main_Util.getRoundedValue(attribution.presentationDelay),
                        val: main_Util.getRoundedValue(metricValue),
                        ls: main_Util.getLoadStateEnum(attribution.loadState)
                    };
                    _this.inpDe.push(rprofiler_assign({}, eventParams));
                    _this.inpDe.sort(function (a, b) { return b.val - a.val; });
                    // we want to send top 10 elements with INP values greater than 200ms
                    if (_this.inpDe.length === 10) {
                        _this.inpDe.pop();
                    }
                }
            }
        };
        this.recordPageLoad = function () {
            _this.data.loadTime = new Date().getTime();
            _this.data.loadFired = true;
        };
        this.addError = function (msg, url, lineNum) {
            _this.data.jsCount++;
            var currError = rprofiler_ProfilerJsError.createText(msg, url, lineNum);
            var errorArr = _this.data.jsErrors;
            for (var _i = 0, errorArr_1 = errorArr; _i < errorArr_1.length; _i++) {
                var err = errorArr_1[_i];
                if (err.getText() == currError) {
                    err.count++;
                    return;
                }
            }
            errorArr.push(new rprofiler_ProfilerJsError(msg, url, lineNum));
        };
        this.getAjaxRequests = function () {
            return _this.ajaxHandler.getAjaxRequests();
        };
        this.clearAjaxRequests = function () {
            _this.ajaxHandler.clear();
        };
        this.addInfo = function (infoType, key, value) {
            if (_this.isNullOrEmpty(infoType)) {
                return;
            }
            if (_this.isNullOrEmpty(value)) {
                _this.info[infoType] = key;
            }
            else {
                if (_this.isNullOrEmpty(key)) {
                    return;
                }
                if (_this.isNullOrEmpty(_this.info[infoType])) {
                    _this.info[infoType] = {};
                }
                _this.info[infoType][key] = value;
            }
            _this.hasInsight = true;
        };
        this.clearInfo = function () {
            _this.info = {};
            _this.hasInsight = false;
        };
        this.clearErrors = function () {
            _this.data.jsCount = 0;
            _this.data.jsErrors = [];
        };
        this.getInfo = function () {
            if (!_this.hasInsight) {
                return null;
            }
            return _this.info;
        };
        this.getEventTimingHandler = function () {
            return _this.eventsTimingHandler;
        };
        this.getCPWebVitals = function () {
            D(_this.setCLS);
            ot(_this.setLCP);
            rt(_this.setINP);
            return {
                cls: _this.cls,
                lcp: _this.lcp,
                inp: _this.inp,
                inpDe: _this.inpDe
            };
        };
        this.getFrustrationMetrics = function () {
            return {
                frc: rageClick.getRageClick(),
                fec: errorClick.getErrorClick(),
                fdc: deadClick.getDeadClick(),
                ftc: thrashedCursor.getThrashedCursor()
            };
        };
        this.eventManager.add(WindowEvent.Load, window, this.recordPageLoad);
        var errorFunc = this.addError;
        this.ajaxHandler = new rprofiler_AjaxRequestsHandler();
        D(this.setCLS);
        ot(this.setLCP, { reportAllChanges: true });
        rt(this.setINP, { reportAllChanges: true });
        // Frustration event
        frustrationMetrics.startListeningClickEvent();
        frustrationMetrics.startListeningMouseMove();
        function recordJsError(e) {
            var ev = e.target || e.srcElement;
            if (ev.nodeType == 3) {
                ev = ev.parentNode;
            }
            errorFunc('N/A', ev.src || ev.URL, -1);
            return false;
        }
        if (!!window['opera']) {
            this.eventManager.add(WindowEvent.Error, document, recordJsError);
        }
        else if ('onerror' in window) {
            var origOnError_1 = window.onerror;
            window.onerror = function (msg, url, lineNum) {
                errorFunc(msg, url !== null && url !== void 0 ? url : '', lineNum !== null && lineNum !== void 0 ? lineNum : 0);
                if (!!origOnError_1) {
                    return origOnError_1(msg, url, lineNum);
                }
                return false;
            };
        }
        // Event to capture the errors in promise rejection
        if ('onunhandledrejection' in window) {
            window.onunhandledrejection = function (errorEvent) {
                var _a, _b, _c;
                var fullMessage = (_a = errorEvent.reason.stack) !== null && _a !== void 0 ? _a : '';
                var errorMsg = fullMessage !== '' ? fullMessage.split('at') : [];
                var fileUrl = errorMsg[1] ? errorMsg[1].replace(/:\d+/g, '') : '';
                var errorLineNumbers = errorMsg[1] ? errorMsg[1].match(/:\d+/g) : [];
                var lineNum = errorLineNumbers[0] ? errorLineNumbers[0].replace(':', '') : 0;
                errorFunc((_c = (_b = errorMsg[0]) === null || _b === void 0 ? void 0 : _b.trim()) !== null && _c !== void 0 ? _c : 'N/A', fileUrl.trim(), lineNum);
            };
        }
        if (!!window['__cpCdnPath']) {
            this.restUrl = window['__cpCdnPath'].trim();
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    RProfiler.prototype.isNullOrEmpty = function (val) {
        if (val === undefined || val === null) {
            return true;
        }
        if (typeof val == 'string') {
            var str = val;
            return str.trim().length == 0;
        }
        return false;
    };
    RProfiler.prototype.dispatchCustomEvent = function (event) {
        (function (w) {
            if (typeof w.CustomEvent === 'function') {
                return false;
            }
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function CustomEvent(event, params) {
                params = params || { bubbles: false, cancelable: false, detail: undefined };
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            }
            CustomEvent.prototype = Event.prototype;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            w.CustomEvent = CustomEvent;
        })(window); //for the browsers don't support CustomEvent
        var e = new CustomEvent(event);
        window.dispatchEvent(e);
    };
    return RProfiler;
}());
/* harmony default export */ var rprofiler = (RProfiler);
var profiler = new RProfiler();
window['RProfiler'] = profiler;
window['WindowEvent'] = WindowEvent;
// if the document state is already complete by the time script is injected - can happen in the case of tag managers like GTM
if (document.readyState === 'complete') {
    config.initValues();
    main();
    src_visComplete();
}
else {
    document.onreadystatechange = function () {
        if (document.readyState === 'complete') {
            config.initValues();
            main();
            src_visComplete();
        }
    };
}
profiler.dispatchCustomEvent('GlimpseLoaded');

/******/ })()
;