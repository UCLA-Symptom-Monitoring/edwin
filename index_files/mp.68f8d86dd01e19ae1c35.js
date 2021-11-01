webpackJsonp([23],{213:function(e,t,s){var n,a;n=[s(0),s(4),s(9),s(444),s(1),s(445)],void 0!==(a=function(e,t,s,n,a,o){"use strict";return e.Class.declare({$name:"MessageProcessor",_page:null,_canScreenCaptureResolve:null,_canScreenCapturePromise:null,_postReplyTimeout:200,_onSaveScreenCaptureCallbacks:{},initialize:function(e){this._page=e,this.getCanScreenCapture(),this.listenForEscapePress()},listenForEscapePress:function(){a(document).on("keydown",function(e){e&&e.keyCode&&27===e.keyCode&&this.postMessage({event:"EscapeKeyPress",to:"SI",from:"JFE"})}.$bind(this))},postMessage:function(e){s.top.postMessage&&(e.time=o.now(),s.top.postMessage(JSON.stringify(e),"*"))},processSetEmbeddedData:function(e){this._page.setED(e.key,e.value)},processScreenCapture:function(e){void 0!==e&&(e.clearKey?this._page.setSM("ScreenCaptureId",""):e.key&&this._page.setSM("ScreenCaptureId",e.key))},_parseMessage:function(e){var t,s;if(null!=e&&null!=e.data){var n="";if("string"==typeof e.data)try{n=JSON.parse(e.data)}catch(e){return}else n=e.data;if("object"==typeof n)return void 0!==n.clearKey?(t="screenCapture",s=n):"string"==typeof n.type&&void 0!==n.payload?(t=n.type,s=n.payload):"string"==typeof n.event&&"string"==typeof n.to&&"string"==typeof n.from&&(t=n.event,s=n),{message:t,data:s}}},sendInitialMessage:function(){this.postMessage({event:"JFELoaded",to:"SI",from:"JFE"});var e=window.getComputedStyle(document.getElementsByClassName("Skin")[0]).height;this.postMessage({event:"sendingSurveyHeight",to:"SI",from:"JFE",value:e})},ack:function(e){this.postMessage({event:"ack",to:"SI",from:"JFE",received:e})},startScreenCapture:function(e,t){this._page.getSessionId()&&e&&this.postMessage({event:"startScreenCapture",to:"SI",from:"JFE",questionId:e,sessionId:this._page.getSessionId(),translations:t})},editScreenCapture:function(e){this._page.getSessionId()&&e&&this.postMessage({event:"editScreenCapture",to:"SI",from:"JFE",questionId:e,sessionId:this._page.getSessionId()})},removeScreenCapture:function(e){this._page.getSessionId()&&e&&this.postMessage({event:"removeScreenCapture",to:"SI",from:"JFE",questionId:e,sessionId:this._page.getSessionId()})},sessionFinished:function(){this._page.getSessionId()&&this.postMessage({event:"sessionFinished",to:"SI",from:"JFE",sessionId:this._page.getSessionId()})},_saveScreenCapture:function(e){e.sessionId&&e.sessionId===this._page.getSessionId()&&"function"==typeof this._onSaveScreenCaptureCallbacks[e.questionId]&&this._onSaveScreenCaptureCallbacks[e.questionId](e.imageData)},onSaveScreenCapture:function(e,t){this._onSaveScreenCaptureCallbacks[e]=t},getCanScreenCapture:function(){return this._canScreenCapturePromise||(this.postMessage({event:"canScreenCapture",to:"SI",from:"JFE"}),this._canScreenCapturePromise=this._page.getED("Q_CanScreenCapture")?t.resolve(!0):new t(function(e){this._canScreenCaptureResolve=e}.$bind(this)).timeout(this._postReplyTimeout).catch(function(){return!1})),this._canScreenCapturePromise},_resolveCanScreenCapture:function(e){this._canScreenCaptureResolve&&e&&"SI"==e.from&&"JFE"==e.to&&(this._canScreenCaptureResolve(!!e.canScreenCapture),this._canScreenCaptureResolve=null)},__addIOSSIWorkaround:function(){a("html").addClass("iOSSIFix"),a("body").addClass("iOSSIFix"),n(),a(s).off("iOSKeyboardShelve").on("iOSKeyboardShelve",function(){this.postMessage({event:"iOSKeyboardShelve",to:"SI",from:"JFE"})}.$bind(this))},_handleSaveProgress:function(){this._page.triggerSaveProgress()},receiveMessage:function(e){if(e=this._parseMessage(e))switch(e.message){case"setEmbeddedData":this.ack(e.message),this.processSetEmbeddedData(e.data);break;case"screenCapture":this.ack(e.message),this.processScreenCapture(e.data);break;case"canScreenCapture":this.ack(e.message),this._resolveCanScreenCapture(e.data);break;case"saveScreenCapture":this.ack(e.message),this._saveScreenCapture(e.data);break;case"addIOSSIWorkaround":this.ack(e.message),this.__addIOSSIWorkaround();break;case"saveProgress":this._handleSaveProgress()}}})}.apply(t,n))&&(e.exports=a)},444:function(e,t,s){var n;void 0!==(n=function(){"use strict";var e,t=["text","url","number","date","email","password","search","time","week"],s=function(e){var s=e.tagName.toUpperCase();if("TEXTAREA"===s)return!0;if("INPUT"===s){var n=e.type;return~t.indexOf(n)}};"function"!=typeof window.CustomEvent?(e=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var s=document.createEvent("CustomEvent");return s.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),s},e.prototype=window.Event.prototype):e=window.CustomEvent;var n=new e("iOSKeyboardShelve"),a=function(){window.dispatchEvent(n)},o=function(){var e;return function(t){s(t.target)&&("focusout"===t.type?e=setTimeout(a,10):"focusin"===t.type&&clearTimeout(e))}}();return function(){document.addEventListener("focusout",o),document.addEventListener("focusin",o)}}.call(t,s,t,e))&&(e.exports=n)},445:function(e,t,s){var n;void 0!==(n=function(){"use strict";if("undefined"!=typeof Date)return Date}.call(t,s,t,e))&&(e.exports=n)}});