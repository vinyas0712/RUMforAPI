var generateUniqueID = function () {
    return "v2-" + Date.now() + "-" + (Math.floor(Math.random() * (9e12 - 1)) + 1e12);
};
var firstHiddenTime = -1;
var initHiddenTime = function () {
    return document.visibilityState === 'hidden' ? 0 : Infinity;
};
var trackChanges = function () {
    onHidden(function (_a) {
        var timeStamp = _a.timeStamp;
        firstHiddenTime = timeStamp;
    }, true);
};
var getVisibilityWatcher = function () {
    if (firstHiddenTime < 0) {
        if (window.__WEB_VITALS_POLYFILL__) {
            firstHiddenTime = window.webVitals.firstHiddenTime;
            if (firstHiddenTime === Infinity) {
                trackChanges();
            }
        }
        else {
            firstHiddenTime = initHiddenTime();
            trackChanges();
        }
        onBFCacheRestore(function () {
            setTimeout(function () {
                firstHiddenTime = initHiddenTime();
                trackChanges();
            }, 0);
        });
    }
    return {
        get firstHiddenTime() {
            return firstHiddenTime;
        }
    };
};
var onBFCacheRestore = function (cb) {
    addEventListener('pageshow', function (event) {
        if (event.persisted) {
            cb(event);
        }
    }, true);
};
var bindReporter = function (callback, metric, reportAllChanges) {
    var prevValue;
    return function (forceReport) {
        if (metric.value >= 0) {
            if (forceReport || reportAllChanges) {
                metric.delta = metric.value - (prevValue || 0);
                if (metric.delta || prevValue === undefined) {
                    prevValue = metric.value;
                    callback(metric);
                }
            }
        }
    };
};
var onHidden = function (cb, once) {
    var onHiddenOrPageHide = function (event) {
        if (event.type === 'pagehide' || document.visibilityState === 'hidden') {
            cb(event);
            if (once) {
                removeEventListener('visibilitychange', onHiddenOrPageHide, true);
                removeEventListener('pagehide', onHiddenOrPageHide, true);
            }
        }
    };
    addEventListener('visibilitychange', onHiddenOrPageHide, true);
    addEventListener('pagehide', onHiddenOrPageHide, true);
};
var observe = function (type, callback) {
    try {
        if (PerformanceObserver.supportedEntryTypes.indexOf(type) > -1) {
            if (type === 'first-input' && !('PerformanceEventTiming' in self)) {
                return;
            }
            var po = new PerformanceObserver(function (l) { return l.getEntries().map(callback); });
            po.observe({ type: type, buffered: true });
            return po;
        }
    }
    catch (e) {
    }
    return;
};
var getFCP = function (onReport, reportAllChanges) {
    var visibilityWatcher = getVisibilityWatcher();
    var metric = initMetric('FCP');
    var report;
    var entryHandler = function (entry) {
        if (entry.name === 'first-contentful-paint') {
            if (po) {
                po.disconnect();
            }
            if (entry.startTime < visibilityWatcher.firstHiddenTime) {
                metric.value = entry.startTime;
                metric.entries.push(entry);
                report(true);
            }
        }
    };
    var fcpEntry = window.performance && performance.getEntriesByName &&
        performance.getEntriesByName('first-contentful-paint')[0];
    var po = fcpEntry ? null : observe('paint', entryHandler);
    if (fcpEntry || po) {
        report = bindReporter(onReport, metric, reportAllChanges);
        if (fcpEntry) {
            entryHandler(fcpEntry);
        }
        onBFCacheRestore(function (event) {
            metric = initMetric('FCP');
            report = bindReporter(onReport, metric, reportAllChanges);
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    metric.value = performance.now() - event.timeStamp;
                    report(true);
                });
            });
        });
    }
};
var initMetric = function (name, value) {
    return {
        name: name,
        value: typeof value === 'undefined' ? -1 : value,
        delta: 0,
        entries: [],
        id: generateUniqueID()
    };
};
var isMonitoringFCP = false;
var fcpValue = -1;
var reportedMetricIDs = {};
var getLCP = function (onReport, reportAllChanges) {
    var visibilityWatcher = getVisibilityWatcher();
    var metric = initMetric('LCP');
    var report;
    var entryHandler = function (entry) {
        var value = entry.startTime;
        if (value < visibilityWatcher.firstHiddenTime) {
            metric.value = value;
            metric.entries.push(entry);
            report(false);
        }
    };
    var po = observe('largest-contentful-paint', entryHandler);
    if (po) {
        report = bindReporter(onReport, metric, reportAllChanges);
        var stopListening_1 = function () {
            if (!reportedMetricIDs[metric.id]) {
                po.takeRecords().map(entryHandler);
                po.disconnect();
                reportedMetricIDs[metric.id] = true;
                report(true);
            }
        };
        ['keydown', 'click'].forEach(function (type) {
            addEventListener(type, stopListening_1, { once: true, capture: true });
        });
        onHidden(stopListening_1, true);
        onBFCacheRestore(function (event) {
            metric = initMetric('LCP');
            report = bindReporter(onReport, metric, reportAllChanges);
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    metric.value = performance.now() - event.timeStamp;
                    reportedMetricIDs[metric.id] = true;
                    report(true);
                });
            });
        });
    }
};
var getCLS = function (onReport, reportAllChanges) {
    if (!isMonitoringFCP) {
        getFCP(function (metric) {
            fcpValue = metric.value;
        });
        isMonitoringFCP = true;
    }
    var onReportWrapped = function (arg) {
        if (fcpValue > -1) {
            onReport(arg);
        }
    };
    var metric = initMetric('CLS', 0);
    var report;
    var sessionValue = 0;
    var sessionEntries = [];
    var entryHandler = function (entry) {
        if (!entry.hadRecentInput) {
            var firstSessionEntry = sessionEntries[0];
            var lastSessionEntry = sessionEntries[sessionEntries.length - 1];
            if (sessionValue &&
                entry.startTime - lastSessionEntry.startTime < 1000 &&
                entry.startTime - firstSessionEntry.startTime < 5000) {
                sessionValue += entry.value;
                sessionEntries.push(entry);
            }
            else {
                sessionValue = entry.value;
                sessionEntries = [entry];
            }
            if (sessionValue > metric.value) {
                metric.value = sessionValue;
                metric.entries = sessionEntries;
                report(true);
            }
        }
    };
    var po = observe('layout-shift', entryHandler);
    if (po) {
        report = bindReporter(onReportWrapped, metric, reportAllChanges);
        onHidden(function () {
            po.takeRecords().map(entryHandler);
            report(true);
        });
        onBFCacheRestore(function () {
            sessionValue = 0;
            fcpValue = -1;
            metric = initMetric('CLS', 0);
            report = bindReporter(onReportWrapped, metric, reportAllChanges);
        });
    }
};
var windowCurrent = parent.window || window;
var WindowEvent;
(function (WindowEvent) {
    WindowEvent["Load"] = "load";
    WindowEvent["BeforeUnload"] = "beforeunload";
    WindowEvent["Abort"] = "abort";
    WindowEvent["Error"] = "error";
    WindowEvent["Unload"] = "unload";
})(WindowEvent || (WindowEvent = {}));
var VisibilityType;
(function (VisibilityType) {
    VisibilityType[VisibilityType["Focus"] = 0] = "Focus";
    VisibilityType[VisibilityType["Blur"] = 1] = "Blur";
})(VisibilityType || (VisibilityType = {}));
;
var AjaxTiming = (function () {
    function AjaxTiming(url, method, isAsync, open) {
        var _this = this;
        this.getPerformanceTimings = function (entry) {
            _this.connect = entry.connectEnd - entry.connectStart;
            _this.dns = entry.domainLookupEnd - entry.domainLookupStart;
            _this.duration = entry.duration;
            _this.load = entry.responseEnd - entry.responseStart;
            _this.wait = entry.responseStart - entry.requestStart;
            _this.start = entry.startTime;
            _this.redirect = entry.redirectEnd - entry.redirectStart;
            if (entry["secureConnectionStart"]) {
                _this.ssl = entry.connectEnd - entry["secureConnectionStart"];
            }
        };
        this.url = url;
        this.method = method;
        this.isAsync = isAsync;
        this.open = open;
    }
    return AjaxTiming;
}());
var ProfilerJsError = (function () {
    function ProfilerJsError(message, url, lineNumber) {
        this.count = 0;
        this.message = message;
        this.url = url;
        this.lineNumber = lineNumber;
    }
    ProfilerJsError.createText = function (msg, url, num) {
        return [msg, url, num].join(":");
    };
    ProfilerJsError.prototype.getText = function () {
        return ProfilerJsError.createText(this.message, this.url, this.lineNumber);
    };
    return ProfilerJsError;
}());
var ProfilerEventManager = (function () {
    function ProfilerEventManager() {
        this.events = [];
        this.hasAttachEvent = !!window.attachEvent;
    }
    ProfilerEventManager.prototype.add = function (type, target, func) {
        this.events.push({ type: type, target: target, func: func });
        if (this.hasAttachEvent) {
            target.attachEvent("on" + type, func);
        }
        else {
            target.addEventListener(type, func, false);
        }
    };
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
var AjaxRequestsHandler = (function () {
    function AjaxRequestsHandler() {
        var _this = this;
        this.fetchRequests = [];
        this.fetchEntriesIndices = {};
        this.compareEntriesDelay = 100;
        this.hasPerformance = typeof window.performance === "object" && typeof window.performance.now === "function" && typeof window.performance.getEntriesByType === "function";
        this.captureFetchRequests = function () {
            var tempArray = [];
            var ajaxHandler = _this;
            var onRequestError = function (error) {
                return error;
            };
            var onResponseError = function (error) {
                return Promise.reject(error);
            };
            if (!window.fetch) {
                return;
            }
            window.fetch = (function (fetch) {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var fetchRequestIndex = 0;
                    var promise = Promise.resolve(args);
                    promise = promise.then(function (args) {
                        var firstArg;
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
                        if (typeof (firstArg) === 'object' && !!firstArg) {
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
                            tempArray.push(new AjaxTiming(fetchUrl, method, true, ajaxHandler.now()));
                        }
                        return [firstArg, config];
                    }, onRequestError);
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
        return (new Date()).getTime();
    };
    AjaxRequestsHandler.prototype.processPerformanceEntries = function (fetchRequest, requestArray) {
        var ajaxHandler = this;
        setTimeout(function () {
            if (!ajaxHandler.hasPerformance) {
                return;
            }
            var url = fetchRequest.url;
            var matches = [];
            var entries = performance.getEntriesByType("resource");
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
            fetchRequest.getPerformanceTimings(matches[0]);
        }, ajaxHandler.compareEntriesDelay);
    };
    AjaxRequestsHandler.startAjaxCapture = function (ajaxHandler) {
        var xhr = XMLHttpRequest.prototype;
        var open = xhr.open;
        var send = xhr.send;
        var tempArray = [];
        if (ajaxHandler.hasPerformance && typeof window.performance.setResourceTimingBufferSize === "function") {
            window.performance.setResourceTimingBufferSize(300);
        }
        xhr.open = function (method, url, async, user, password) {
            this.rpIndex = tempArray.length;
            tempArray.push(new AjaxTiming(url, method, async, ajaxHandler.now()));
            open.call(this, method, url, (async === false) ? false : true, user, password);
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
                            case "text":
                            case "":
                                if (typeof _this.responseText === "string") {
                                    request.responseSize = _this.responseText.length;
                                }
                                break;
                            case "json":
                                if (hasResponse && typeof _this.response.toString === "function") {
                                    request.responseSize = _this.response.toString().length;
                                }
                                break;
                            case "arraybuffer":
                                if (hasResponse && typeof _this.response.byteLength === "number") {
                                    request.responseSize = _this.response.byteLength;
                                }
                                break;
                            case "blob":
                                if (hasResponse && typeof _this.response.size === "number") {
                                    request.responseSize = _this.response.size;
                                }
                                break;
                            case "document":
                                break;
                        }
                        ajaxHandler.processPerformanceEntries(request, ajaxHandler.fetchRequests);
                        break;
                }
                if (typeof changeFunc === "function") {
                    changeFunc.call(_this, arg);
                }
            };
            var request = tempArray[this.rpIndex];
            if (!request) {
                return;
            }
            if (data && !isNaN(data.length)) {
                request.sendSize = data.length;
            }
            request.send = ajaxHandler.now();
            send.call(this, data);
        };
    };
    return AjaxRequestsHandler;
}());
var RProfiler = (function () {
    function RProfiler() {
        var _this = this;
        this.restUrl = "portalstage.catchpoint.com/jp/91957/v3.3.6/M";
        this.startTime = (new Date()).getTime();
        this.eventsTimingHandler = new EventsTimingHandler();
        this.inputDelay = new InputDelayHandler();
        this.version = "v3.3.6";
        this.info = {};
        this.hasInsight = false;
        this.data = {
            start: this.startTime,
            jsCount: 0,
            jsErrors: [],
            loadTime: -1,
            loadFired: window.document.readyState == "complete",
        };
        this.eventManager = new ProfilerEventManager();
        this.setCLS = function (_a) {
            var metricName = _a.name, metricValue = _a.delta;
            var CLS = metricName === 'CLS' ? metricValue : undefined;
            _this.cls = CLS;
        };
        this.setLCP = function (_a) {
            var metricName = _a.name, metricValue = _a.delta;
            var LCP = metricName === 'LCP' ? metricValue : undefined;
            _this.lcp = LCP;
        };
        this.recordPageLoad = function () {
            _this.data.loadTime = (new Date()).getTime();
            _this.data.loadFired = true;
        };
        this.addError = function (msg, url, lineNum) {
            _this.data.jsCount++;
            var currError = ProfilerJsError.createText(msg, url, lineNum);
            var errorArr = _this.data.jsErrors;
            for (var _i = 0, errorArr_1 = errorArr; _i < errorArr_1.length; _i++) {
                var err = errorArr_1[_i];
                if (err.getText() == currError) {
                    err.count++;
                    return;
                }
            }
            errorArr.push(new ProfilerJsError(msg, url, lineNum));
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
        this.getInputDelay = function () {
            return _this.inputDelay;
        };
        this.getCPWebVitals = function () {
            getCLS(_this.setCLS, false);
            getLCP(_this.setLCP, false);
            return {
                cls: _this.cls,
                lcp: _this.lcp
            };
        };
        this.eventManager.add(WindowEvent.Load, window, this.recordPageLoad);
        var errorFunc = this.addError;
        this.ajaxHandler = new AjaxRequestsHandler();
        getCLS(this.setCLS, false);
        getLCP(this.setLCP, false);
        function recordJsError(e) {
            var ev = e.target || e.srcElement;
            if (ev.nodeType == 3) {
                ev = ev.parentNode;
            }
            errorFunc("N/A", ev.src || ev.URL, -1);
            return false;
        }
        if (!!window["opera"]) {
            this.eventManager.add(WindowEvent.Error, document, recordJsError);
        }
        else if ("onerror" in window) {
            var origOnError = window.onerror;
            window.onerror = function (msg, url, lineNum) {
                errorFunc(msg, url, lineNum);
                if (!!origOnError) {
                    return origOnError(msg, url, lineNum);
                }
                return false;
            };
        }
        if (!!window["__cpCdnPath"]) {
            this.restUrl = window["__cpCdnPath"].trim();
        }
        var protocol = window.location.protocol;
        var iframe = document.createElement("iframe");
        iframe.src = "about:blank";
        var style = iframe.style;
        style.position = "absolute";
        style.top = "-10000px";
        style.left = "-1000px";
        iframe.addEventListener('load', function (event) {
            var frame = event.currentTarget;
            if (frame && frame.contentDocument) {
                var iframeDocument = frame.contentDocument;
                var rumScript = iframeDocument.createElement('script');
                rumScript.type = 'text/javascript';
                rumScript.src = protocol + '//' + _this.restUrl;
                iframeDocument.body.appendChild(rumScript);
            }
        });
        var topScript = document.getElementsByTagName("script")[0];
        topScript.parentNode.insertBefore(iframe, topScript);
    }
    RProfiler.prototype.isNullOrEmpty = function (val) {
        if (val === undefined || val === null) {
            return true;
        }
        if (typeof val == "string") {
            var str = val;
            return str.trim().length == 0;
        }
        return false;
    };
    RProfiler.prototype.dispatchCustomEvent = function (event) {
        (function (w) {
            if (typeof w.CustomEvent === "function") {
                return false;
            }
            function CustomEvent(event, params) {
                params = params || { bubbles: false, cancelable: false, detail: undefined };
                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            }
            CustomEvent.prototype = Event.prototype;
            w.CustomEvent = CustomEvent;
        })(window);
        var e = new CustomEvent(event);
        window.dispatchEvent(e);
    };
    return RProfiler;
}());
var InputDelayHandler = (function () {
    function InputDelayHandler() {
        var _this = this;
        this.firstInputDelay = 0;
        this.firstInputTimeStamp = 0;
        this.startTime = 0;
        this.delay = 0;
        this.profileManager = new ProfilerEventManager();
        this.eventTypes = [
            'click',
            'mousedown',
            'keydown',
            'touchstart',
            'pointerdown',
        ];
        this.addEventListeners = function () {
            _this.eventTypes.forEach(function (event) {
                _this.profileManager.add(event, document, _this.onInput);
            });
        };
        this.now = function () {
            return (new Date()).getTime();
        };
        this.removeEventListeners = function () {
            _this.eventTypes.forEach(function (event) {
                _this.profileManager.remove(event, document, _this.onInput);
            });
        };
        this.onInput = function (evt) {
            if (!evt.cancelable) {
                return;
            }
            var isEpochTime = evt.timeStamp > 1e12;
            _this.firstInputTimeStamp = _this.now();
            var useFirstInputTime = isEpochTime || !window['performance'];
            var now = useFirstInputTime ? _this.firstInputTimeStamp : window['performance'].now();
            _this.delay = now - evt.timeStamp;
            if (evt.type == 'pointerdown') {
                _this.onPointerDown();
            }
            else {
                _this.removeEventListeners();
                _this.updateFirstInputDelay();
            }
        };
        this.onPointerUp = function () {
            _this.removeEventListeners();
            _this.updateFirstInputDelay();
        };
        this.onPointerCancel = function () {
            _this.removePointerEventListeners();
        };
        this.removePointerEventListeners = function () {
            _this.profileManager.remove('pointerup', document, _this.onPointerUp);
            _this.profileManager.remove('pointercancel', document, _this.onPointerCancel);
        };
        this.updateFirstInputDelay = function () {
            if (_this.delay >= 0 && _this.delay < (_this.firstInputTimeStamp - _this.startTime)) {
                _this.firstInputDelay = Math.round(_this.delay);
            }
        };
        this.startSoftNavigationCapture = function () {
            _this.resetSoftNavigationCapture();
        };
        this.resetSoftNavigationCapture = function () {
            _this.resetFirstInputDelay();
            _this.addEventListeners();
        };
        this.resetFirstInputDelay = function () {
            _this.delay = 0;
            _this.firstInputDelay = 0;
            _this.startTime = 0;
            _this.firstInputTimeStamp = 0;
        };
        this.startTime = this.now();
        this.addEventListeners();
    }
    InputDelayHandler.prototype.onPointerDown = function () {
        this.profileManager.add('pointerup', document, this.onPointerUp);
        this.profileManager.add('pointercancel', document, this.onPointerCancel);
    };
    InputDelayHandler.prototype.getFirstInputDelay = function () {
        return this.firstInputDelay;
    };
    return InputDelayHandler;
}());
var EventsTimingHandler = (function () {
    function EventsTimingHandler() {
        var _this = this;
        this.hiddenStrings = ['hidden', 'msHidden', 'webkitHidden', 'mozHidden'];
        this.visibilityStrings = [
            'visibilitychange',
            'msvisibilitychange',
            'webkitvisibilitychange',
            'mozvisibilitychange'
        ];
        this.captureSoftNavigation = false;
        this.hidden = 'hidden';
        this.visibilityChange = 'visibilitychange';
        this.visibilityEvents = [];
        this.eventManager = new ProfilerEventManager();
        this.engagementTimeIntervalMs = 1000;
        this.engagementTime = 0;
        this.firstEngagementTime = 0;
        this.lastEventTimeStamp = 0;
        this.timeoutId = undefined;
        this.startTime = new Date().getTime();
        this.now = function () {
            return (new Date()).getTime();
        };
        this.startVisibilityCapture = function () {
            _this.initializeVisibilityProperties();
            document.addEventListener(_this.visibilityChange, _this.captureFocusEvent, false);
        };
        this.initializeVisibilityProperties = function () {
            var values = _this.hiddenStrings;
            var propertyIndex = 0;
            for (var i = 0; i < values.length; i++) {
                if (typeof (document[values[i]]) !== 'undefined') {
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
        this.captureMouseMove = function () {
            _this.captureEngagementTime(false);
        };
        this.startTimer = function () {
            _this.timeoutId = setTimeout(function () {
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
                if (events[index].type === VisibilityType.Blur &&
                    currentBlurIndex === resetIndex) {
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
            if (currentBlurIndex === (events.length - 1)) {
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
var profiler = new RProfiler();
window["RProfiler"] = profiler;
window["WindowEvent"] = WindowEvent;
profiler.dispatchCustomEvent("GlimpseLoaded");

