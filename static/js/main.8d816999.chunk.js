(this["webpackJsonporie-pwa"]=this["webpackJsonporie-pwa"]||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var o=t(1),i=t.n(o),a=t(3),r=t.n(a),c=(t(9),t(0)),s=function(){return Object(c.jsx)("div",{id:"header-row",children:"Orie"})},l=t(4),u=function(e,n){var t,o;switch(n){case"alpha":o=255-180*(t=255/180),e>180&&(e=180);break;case"beta":o=255-90*(t=255/180),e>90?e=90:e<-90&&(e=-90);break;default:o=255-45*(t=255/90),e>45?e=45:e<-45&&(e=-45)}return t*e+o},d=function(e){var n=e.orientation,t=Object(o.useRef)(null);return Object(o.useEffect)((function(){var e,o=null===(e=t.current)||void 0===e?void 0:e.getContext("2d");o&&(o.clearRect(0,0,o.canvas.width,o.canvas.height),n&&(o.fillStyle=function(e){var n=e.alpha,t=e.beta,o=e.gamma;return"rgba(".concat(u(n||0,"alpha"),",").concat(u(t||0,"beta"),",").concat(u(o||0,"gamma"),",1)")}(n),o.fillRect(0,0,o.canvas.width,o.canvas.height)))}),[n]),Object(c.jsx)("canvas",{ref:t})},f=function(){var e=Object(o.useState)(null),n=Object(l.a)(e,2),t=n[0],i=n[1],a=function(e){i({absolute:e.absolute,alpha:e.alpha,beta:e.beta,gamma:e.gamma})};return Object(o.useEffect)((function(){return window.addEventListener("deviceorientation",a),function(){window.removeEventListener("deviceorientation",a)}}),[]),Object(c.jsx)("div",{id:"visualiser-div",children:Object(c.jsx)(d,{orientation:t})})},v=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(s,{}),Object(c.jsx)(f,{})]})},h=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,a=n.getLCP,r=n.getTTFB;t(e),o(e),i(e),a(e),r(e)}))};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/orie-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/orie-pwa","/service-worker.js");h?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):w(n,e)}))}}(),g()},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.8d816999.chunk.js.map