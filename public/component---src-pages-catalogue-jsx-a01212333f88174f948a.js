(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+46t":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("/HQ+"),i=n("iLSz"),o=n("QQXB"),u=function(t){var e=[],n=null,r=function(){for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];e=i,n||(n=requestAnimationFrame((function(){n=null,t.apply(void 0,e)})))};return r.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},r},c=n("kHuU"),a=n("faNo");function s(t){var e=Object(a.a)(),n=f(t,e);function i(){return n.disconnect()}return r.useEffect((function(){return i}),[n]),n}var f=Object(i.a)([WeakMap],(function(t,e){var n=u((function(n){for(var r=[],i=0;i<n.length;i++){var o=n[i],u=o.target.offsetHeight;if(u>0){var a=c.a.get(o.target);if(void 0!==a){var s=t.get(a);void 0!==s&&u!==s.height&&r.push(a,u)}}}r.length>0&&(t.update(r),e(r))})),r=new o.a(n),i=r.disconnect.bind(r);return r.disconnect=function(){i(),n.cancel()},r}))},"4mkK":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("9+do"),i=n("/HQ+"),o=n("CsGh");function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,n=i.useState({offset:0,width:0}),u=Object(r.a)(n,2),a=u[0],s=u[1];return Object(o.a)((function(){var e=t.current;if(null!==e){var n=0,r=e;do{n+=r.offsetTop||0,r=r.offsetParent}while(r);n===a.offset&&e.offsetWidth===a.width||s({offset:n,width:e.offsetWidth})}}),e),a}var c=[]},"6XO5":function(t,e,n){"use strict";var r=n("/HQ+");e.a=function(t){var e=r.useRef(t);return r.useEffect((function(){e.current=t})),e}},"9+do":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("M+Pw");function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(a){i=!0,o=a}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},CsGh:function(t,e,n){"use strict";var r=n("/HQ+"),i=n.n(r).a["undefined"!=typeof document&&void 0!==document.createElement?"useLayoutEffect":"useEffect"];e.a=i},FXEK:function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var a,s=[],f=!1,l=-1;function h(){f&&a&&(f=!1,a.length?s=a.concat(s):l=-1,s.length&&d())}function d(){if(!f){var t=c(h);f=!0;for(var e=s.length;e;){for(a=s,s=[];++l<e;)a&&a[l].run();l=-1,e=s.length}a=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function v(t,e){this.fun=t,this.array=e}function p(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new v(t,e)),1!==s.length||f||c(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},H145:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return f}));n("/HQ+");var r=n("W0KY"),i=(n("8faM"),n("L12J")),o=(n("10BB"),n("Wbzz")),u=n("Al62"),c=n("ma+M"),a=(n("VV2R"),n("KLqW"),n("JArO"));var s={name:"1wbll7q",styles:"text-decoration:underline"};function f(t){var e=t.data.allAirtable.edges.map((function(t){var e=t.node;return Object(u.b)(e)}));return Object(a.c)(i.a,{title:"Catalogue"},Object(a.c)(c.n,null),Object(a.c)(c.j,null,"Catalogue général de la compagnie"),Object(a.c)(c.n,null),Object(a.c)(o.a,{to:"/auteurs"},Object(a.c)(c.f,{color:"accent",textAlign:"right",css:s},"Voir nos auteur.e.s")),Object(a.c)(c.p,null),Object(a.c)(r.a,{items:e,render:l,columnCount:4,columnGutter:36}),e.map((function(t){return Object(a.c)("bc",{book:t})})),Object(a.c)(c.n,null))}var l=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e[0].data;return r?Object(a.c)(c.d,{book:r}):Object(a.c)("div",null)}},K4QX:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return a}));var r=n("/HQ+"),i=n("6XO5"),o="undefined"!=typeof performance?performance:Date,u=function(){return o.now()};function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=Object(i.a)(t),c=1e3/e,a=r.useRef(0),s=r.useRef(),f=function(){return s.current&&clearTimeout(s.current)},l=[e,n,o];function h(){a.current=0,f()}return r.useEffect((function(){return h}),l),r.useCallback((function(){var t=arguments,e=u(),r=function(){a.current=e,f(),o.current.apply(null,t)},i=a.current;if(n&&0===i)return r();if(e-i>c){if(i>0)return r();a.current=e}f(),s.current=setTimeout((function(){r(),a.current=0}),c)}),l)}function a(t,e,n){var i=r.useState(t);return[i[0],c(i[1],e,n)]}},KLqW:function(t,e,n){t.exports=n.p+"static/CartePostaleBureauOie-8af9addff64ceb2dedebe77726c71a37.png"},LqOp:function(t,e,n){"use strict";e.a=function t(){var e,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.set=void 0,this.get=void 0,this.get=function(t){return t===e?n:void 0},this.set=function(t,r){e=t,n=r}}},Mzwu:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n("9+do"),i=n("/HQ+"),o=n("6XO5"),u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=Object(o.a)(t),u=i.useRef(),c=[e,n,r];function a(){u.current&&clearTimeout(u.current),u.current=void 0}function s(){u.current=void 0}return i.useEffect((function(){return a}),c),i.useCallback((function(){var t=arguments,i=u.current;if(void 0===i&&n)return u.current=setTimeout(s,e),r.current.apply(null,t);i&&clearTimeout(i),u.current=setTimeout((function(){u.current=void 0,r.current.apply(null,t)}),e)}),c)},c=function(t,e,n){var r=i.useState(t);return[r[0],u(r[1],e,n)]},a=n("aDY2"),s={},f="undefined"==typeof window?null:window,l=function(){return[document.documentElement.clientWidth,document.documentElement.clientHeight]},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=t.wait,n=t.leading,i=t.initialWidth,o=void 0===i?0:i,u=t.initialHeight,h=void 0===u?0:u,d=c("undefined"==typeof document?[o,h]:l,e,n),v=Object(r.a)(d,2),p=v[0],m=v[1],g=function(){return m(l)};return Object(a.a)(f,"resize",g),Object(a.a)(f,"orientationchange",g),p}},QQXB:function(t,e,n){"use strict";(function(t){n("bIw+");var r=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,r){return t[0]===e&&(n=r,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];t.call(e,i[1],i[0])}},e}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==t&&t.Math===Math?t:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),u="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var c=["top","right","bottom","left","width","height","size","weight"],a="undefined"!=typeof MutationObserver,s=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,r=!1,i=0;function o(){n&&(n=!1,t()),r&&a()}function c(){u(o)}function a(){var t=Date.now();if(n){if(t-i<2)return;r=!0}else n=!0,r=!1,setTimeout(c,e);i=t}return a}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),a?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;c.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),f=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},l=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},h=b(0,0,0,0);function d(t){return parseFloat(t)||0}function v(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+d(t["border-"+n+"-width"])}),0)}function p(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return h;var r=l(t).getComputedStyle(t),i=function(t){for(var e={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=t["padding-"+i];e[i]=d(o)}return e}(r),o=i.left+i.right,u=i.top+i.bottom,c=d(r.width),a=d(r.height);if("border-box"===r.boxSizing&&(Math.round(c+o)!==e&&(c-=v(r,"left","right")+o),Math.round(a+u)!==n&&(a-=v(r,"top","bottom")+u)),!function(t){return t===l(t).document.documentElement}(t)){var s=Math.round(c+o)-e,f=Math.round(a+u)-n;1!==Math.abs(s)&&(c-=s),1!==Math.abs(f)&&(a-=f)}return b(i.left,i.top,c,a)}var m="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof l(t).SVGGraphicsElement}:function(t){return t instanceof l(t).SVGElement&&"function"==typeof t.getBBox};function g(t){return i?m(t)?function(t){var e=t.getBBox();return b(0,0,e.width,e.height)}(t):p(t):h}function b(t,e,n,r){return{x:t,y:e,width:n,height:r}}var y=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=b(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=g(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),w=function(t,e){var n,r,i,o,u,c,a,s=(r=(n=e).x,i=n.y,o=n.width,u=n.height,c="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(c.prototype),f(a,{x:r,y:i,width:o,height:u,top:i,right:r+o,bottom:u+i,left:r}),a);f(this,{target:t,contentRect:s})},O=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new y(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new w(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),_="undefined"!=typeof WeakMap?new WeakMap:new r,x=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=s.getInstance(),r=new O(e,n,this);_.set(this,r)};["observe","unobserve","disconnect"].forEach((function(t){x.prototype[t]=function(){var e;return(e=_.get(this))[t].apply(e,arguments)}}));var P=void 0!==o.ResizeObserver?o.ResizeObserver:x;e.a=P}).call(this,n("2Py2"))},VV2R:function(t,e,n){t.exports=n.p+"static/NousRejoindre-f47f9b4c40a6e010207c40562a7f55f1.png"},W0KY:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l}));var r=n("/HQ+"),i=n("Mzwu"),o=n("gub3"),u=n("4mkK"),c=n("+46t"),a=n("zBIH"),s=n("n4S9"),f=r.createElement;function l(t){var e=r.useRef(null),n=Object(i.a)({initialWidth:t.ssrWidth,initialHeight:t.ssrHeight}),l=Object(u.a)(e,n),h=Object.assign({offset:l.offset,width:l.width||n[0],height:n[1],containerRef:e},t);h.positioner=Object(a.a)(h),h.resizeObserver=Object(c.a)(h.positioner);var d=Object(s.a)(h.positioner,{height:h.height,offset:l.offset,align:"object"==typeof t.scrollToIndex?t.scrollToIndex.align:void 0}),v=t.scrollToIndex&&("number"==typeof t.scrollToIndex?t.scrollToIndex:t.scrollToIndex.index);return r.useEffect((function(){void 0!==v&&d(v)}),[v,d]),f(o.a,h)}}).call(this,n("FXEK"))},aDY2:function(t,e,n){"use strict";var r=n("/HQ+"),i=n("CsGh");e.a=function(t,e,n,o){var u=r.useRef(n),c=r.useRef(o);Object(i.a)((function(){u.current=n,c.current=o})),Object(i.a)((function(){var n=t&&"current"in t?t.current:t;if(n){var r=0;n.addEventListener(e,o);var i=c.current;return function(){r=1,n.removeEventListener(e,o),i&&i()}}function o(){if(!r){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];u.current.apply(this,e)}}}),[t,e])}},epCB:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r={low:0,max:0,high:0,C:2,P:void 0,R:void 0,L:void 0,list:void 0};function i(t){var e=t.high;t.L===r&&t.R===r?t.max=e:t.L===r?t.max=Math.max(t.R.max,e):t.R===r?t.max=Math.max(t.L.max,e):t.max=Math.max(Math.max(t.L.max,t.R.max),e)}function o(t){for(var e=t;e.P!==r;)i(e.P),e=e.P}function u(t,e){if(e.R!==r){var n=e.R;e.R=n.L,n.L!==r&&(n.L.P=e),n.P=e.P,e.P===r?t.root=n:e===e.P.L?e.P.L=n:e.P.R=n,n.L=e,e.P=n,i(e),i(n)}}function c(t,e){if(e.L!==r){var n=e.L;e.L=n.R,n.R!==r&&(n.R.P=e),n.P=e.P,e.P===r?t.root=n:e===e.P.R?e.P.R=n:e.P.L=n,n.R=e,e.P=n,i(e),i(n)}}function a(t,e,n){e.P===r?t.root=n:e===e.P.L?e.P.L=n:e.P.R=n,n.P=e.P}function s(){var t={root:r,size:0},e={};return{insert:function(n,a,s){for(var f=t.root,l=r;f!==r&&n!==(l=f).low;)f=n<f.low?f.L:f.R;if(n===l.low&&l!==r){if(!function(t,e,n){for(var r,i=t.list;i;){if(i.index===n)return!1;if(e>i.high)break;r=i,i=i.next}return r||(t.list={index:n,high:e,next:i}),r&&(r.next={index:n,high:e,next:r.next}),!0}(l,a,s))return;return l.high=Math.max(l.high,a),i(l),o(l),e[s]=l,void t.size++}var h={low:n,high:a,max:a,C:0,P:l,L:r,R:r,list:{index:s,high:a,next:null}};l===r?t.root=h:(h.low<l.low?l.L=h:l.R=h,o(h)),function(t,e){for(var n;0===e.P.C;)e.P===e.P.P.L?0===(n=e.P.P.R).C?(e.P.C=1,n.C=1,e.P.P.C=0,e=e.P.P):(e===e.P.R&&u(t,e=e.P),e.P.C=1,e.P.P.C=0,c(t,e.P.P)):0===(n=e.P.P.L).C?(e.P.C=1,n.C=1,e.P.P.C=0,e=e.P.P):(e===e.P.L&&c(t,e=e.P),e.P.C=1,e.P.P.C=0,u(t,e.P.P));t.root.C=1}(t,h),e[s]=h,t.size++},remove:function(n){var s=e[n];if(void 0!==s){delete e[n];var f=function(t,e){var n=t.list;if(n.index===e)return null===n.next?0:(t.list=n.next,1);var r=n;for(n=n.next;null!==n;){if(n.index===e)return r.next=n.next,1;r=n,n=n.next}}(s,n);if(void 0!==f){if(1===f)return s.high=s.list.high,i(s),o(s),void t.size--;var l,h=s,d=h.C;s.L===r?(l=s.R,a(t,s,s.R)):s.R===r?(l=s.L,a(t,s,s.L)):(d=(h=function(t){for(;t.L!==r;)t=t.L;return t}(s.R)).C,l=h.R,h.P===s?l.P=h:(a(t,h,h.R),h.R=s.R,h.R.P=h),a(t,s,h),h.L=s.L,h.L.P=h,h.C=s.C),i(l),o(l),1===d&&function(t,e){for(var n;e!==r&&1===e.C;)e===e.P.L?(0===(n=e.P.R).C&&(n.C=1,e.P.C=0,u(t,e.P),n=e.P.R),1===n.L.C&&1===n.R.C?(n.C=0,e=e.P):(1===n.R.C&&(n.L.C=1,n.C=0,c(t,n),n=e.P.R),n.C=e.P.C,e.P.C=1,n.R.C=1,u(t,e.P),e=t.root)):(0===(n=e.P.L).C&&(n.C=1,e.P.C=0,c(t,e.P),n=e.P.L),1===n.R.C&&1===n.L.C?(n.C=0,e=e.P):(1===n.L.C&&(n.R.C=1,n.C=0,u(t,n),n=e.P.L),n.C=e.P.C,e.P.C=1,n.L.C=1,c(t,e.P),e=t.root));e.C=1}(t,l),t.size--}}},search:function(e,n,i){for(var o=[t.root];0!==o.length;){var u=o.pop();if(!(u===r||e>u.max)&&(u.L!==r&&o.push(u.L),u.R!==r&&o.push(u.R),u.low<=n&&u.high>=e))for(var c=u.list;null!==c;)c.high>=e&&i(c.index,u.low),c=c.next}},get size(){return t.size}}}r.P=r,r.L=r,r.R=r},faNo:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("/HQ+");function i(){var t=r.useState(o)[1];return r.useRef((function(){return t({})})).current}var o={}},gub3:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return o}));var r=n("gxnO"),i=n("heFI");function o(t){var e=Object(r.a)(t.offset,t.scrollFps),n=e.scrollTop,o=e.isScrolling;return Object(i.a)({scrollTop:n,isScrolling:o,positioner:t.positioner,resizeObserver:t.resizeObserver,items:t.items,onRender:t.onRender,as:t.as,id:t.id,className:t.className,style:t.style,role:t.role,tabIndex:t.tabIndex,containerRef:t.containerRef,itemAs:t.itemAs,itemStyle:t.itemStyle,itemHeightEstimate:t.itemHeightEstimate,itemKey:t.itemKey,overscanBy:t.overscanBy,height:t.height,render:t.render})}}).call(this,n("FXEK"))},gxnO:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var r=n("9+do"),i=n("/HQ+"),o=n("K4QX"),u=n("aDY2"),c="undefined"==typeof window?null:window,a=function(){return void 0!==c.scrollY?c.scrollY:void 0===c.pageYOffset?0:c.pageYOffset},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,e=Object(o.a)("undefined"==typeof window?0:a,t,!0);return Object(u.a)(c,"scroll",(function(){return e[1](a())})),e[0]},f="undefined",l=typeof window!==f?window:{},h=typeof performance!==f?performance:Date,d=function(){return h.now()},v="AnimationFrame",p="cancel"+v,m="request"+v,g=l[m]&&l[m].bind(l),b=l[p]&&l[p].bind(l);if(!g||!b){var y=0;g=function(t){var e=d(),n=Math.max(y+1e3/60,e);return setTimeout((function(){t(y=n)}),n-e)},b=function(t){return clearTimeout(t)}}var w=function(t){b(t.v||-1)},O=function(t,e){var n=d(),r={};return r.v=g((function i(){d()-n>=e?t.call(null):r.v=g(i)})),r};function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n=s(e),o=i.useState(!1),u=Object(r.a)(o,2),c=u[0],a=u[1],f=i.useRef(0);function l(){a(!1)}return i.useEffect((function(){1===f.current&&a(!0);var t=O(l,40+1e3/e);return f.current=1,function(){return w(t)}}),[e,n]),{scrollTop:Math.max(0,n-t),isScrolling:c}}},heFI:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return l}));var r=n("/HQ+"),i=n("iLSz"),o=n("LqOp"),u=n("xKmd"),c=n("6XO5"),a=n("kHuU"),s=n("faNo"),f=r.createElement;function l(t){var e,n=t.positioner,i=t.resizeObserver,o=t.items,u=t.as,a=void 0===u?"div":u,l=t.id,p=t.className,w=t.style,O=t.role,_=void 0===O?"grid":O,x=t.tabIndex,P=void 0===x?0:x,R=t.containerRef,C=t.itemAs,E=void 0===C?"div":C,T=t.itemStyle,j=t.itemHeightEstimate,L=void 0===j?300:j,M=t.itemKey,z=void 0===M?g:M,A=t.overscanBy,H=void 0===A?2:A,k=t.scrollTop,S=t.isScrolling,W=t.height,I=t.render,Q=t.onRender,K=0,B=Object(s.a)(),D=y(n,i),F=o.length,X=n.columnWidth,q=n.columnCount,G=n.range,Y=n.estimateHeight,N=n.size,V=n.shortestColumn,J=N(),U=V(),Z=[],$="list"===_?"listitem":"grid"===_?"gridcell":void 0,tt=Object(c.a)(Q),et=k+(H*=W),nt=U<et&&J<F;if(G(Math.max(0,k-H/2),et,(function(t,n,r){var i=o[t],u=z(i,t),c={top:r,left:n,width:X,writingMode:"horizontal-tb",position:"absolute"};Z.push(f(E,{key:u,ref:D(t),role:$,style:"object"==typeof T&&null!==T?Object.assign({},c,T):c},d(I,t,i,X))),void 0===e?(K=t,e=t):(K=Math.min(K,t),e=Math.max(e,t))})),nt)for(var rt=Math.min(F-J,Math.ceil((k+H-U)/L*q)),it=J,ot=b(X);it<J+rt;it++){var ut=o[it],ct=z(ut,it);0,Z.push(f(E,{key:ct,ref:D(it),role:$,style:"object"==typeof T?Object.assign({},ot,T):ot},d(I,it,ut,X)))}r.useEffect((function(){"function"==typeof tt.current&&void 0!==e&&tt.current(K,e,o),h="1"}),[K,e,o,tt]),r.useEffect((function(){nt&&B()}),[nt]);var at=v(S,Y(F,L));return f(a,{ref:R,key:h,id:l,role:_,className:p,tabIndex:P,style:"object"==typeof w?m(at,w):at,children:Z})}var h="0",d=Object(i.a)([o.a,{},WeakMap,o.a],(function(t,e,n,r){return f(t,{index:e,data:n,width:r})})),v=Object(u.a)((function(t,e){return{position:"relative",width:"100%",maxWidth:"100%",height:Math.ceil(e),maxHeight:Math.ceil(e),willChange:t?"contents":void 0,pointerEvents:t?"none":void 0}})),p=function(t,e){return t[0]===e[0]&&t[1]===e[1]},m=Object(u.a)((function(t,e){return Object.assign({},t,e)}),p);function g(t,e){return e}var b=Object(u.a)((function(t){return{width:t,zIndex:-1e3,visibility:"hidden",position:"absolute",writingMode:"horizontal-tb"}}),(function(t,e){return t[0]===e[0]})),y=Object(u.a)((function(t,e){return function(n){return function(r){null!==r&&(e&&(e.observe(r),a.a.set(r,n)),void 0===t.get(n)&&t.set(n,r.offsetHeight))}}}),p)}).call(this,n("FXEK"))},iLSz:function(t,e,n){"use strict";var r=function(t){try{return new t}catch(n){var e={};return{set:function(t,n){e[t]=n},get:function(t){return e[t]}}}};e.a=function(t,e){var n,i,o,u,c,a,s,f,l,h=(s=(i=t).length,f=r(i[0]),l=1===s,s<3?{g:function(t){return void 0===(o=f.get(t[0]))||l?o:o.get(t[1])},s:function(t,e){return l?f.set(t[0],e):void 0===(o=f.get(t[0]))?((u=r(i[1])).set(t[1],e),f.set(t[0],u)):o.set(t[1],e),e}}:{g:function(t){for(a=f,c=0;c<s;c++)if(void 0===(a=a.get(t[c])))return;return a},s:function(t,e){for(a=f,c=0;c<s-1;c++)void 0===(u=a.get(t[c]))?(u=r(i[c+1]),a.set(t[c],u),a=u):a=u;return a.set(t[s-1],e),e}}),d=h.g,v=h.s;return function(){return void 0===(n=d(arguments))?v(arguments,e.apply(null,arguments)):n}}},kHuU:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new WeakMap},n4S9:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("9+do"),i=n("/HQ+"),o=n("6XO5"),u=n("aDY2"),c=n("K4QX");function a(t,e){var n,a=e.align,f=void 0===a?"top":a,l=e.element,h=void 0===l?"undefined"!=typeof window&&window:l,d=e.offset,v=void 0===d?0:d,p=e.height,m=void 0===p?"undefined"!=typeof window?window.innerHeight:0:p,g=Object(o.a)({positioner:t,element:h,align:f,offset:v,height:m}),b=i.useRef((function(){var t=g.current.element;return t&&"current"in t?t.current:t})).current,y=i.useReducer((function(t,e){var n,r={position:t.position,index:t.index,prevTop:t.prevTop};if("scrollToIndex"===e.type)return{position:g.current.positioner.get(null!==(n=e.value)&&void 0!==n?n:-1),index:e.value,prevTop:void 0};if("setPosition"===e.type)r.position=e.value;else if("setPrevTop"===e.type)r.prevTop=e.value;else if("reset"===e.type)return s;return r}),s),w=Object(r.a)(y,2),O=w[0],_=w[1],x=Object(c.b)(_,15);Object(u.a)(b(),"scroll",(function(){if(!O.position&&O.index){var t=g.current.positioner.get(O.index);t&&_({type:"setPosition",value:t})}}));var P=void 0!==O.index&&(null===(n=g.current.positioner.get(O.index))||void 0===n?void 0:n.top);return i.useEffect((function(){var t=b();if(t){var e=g.current,n=e.height,r=e.align,i=e.offset,o=e.positioner;if(O.position){var u=O.position.top;"bottom"===r?u=u-n+O.position.height:"center"===r&&(u-=(n-O.position.height)/2),t.scrollTo(0,Math.max(0,u+=i));var c=!1,a=setTimeout((function(){return!c&&_({type:"reset"})}),400);return function(){c=!0,clearTimeout(a)}}if(void 0!==O.index){var s=o.shortestColumn()/o.size()*O.index;O.prevTop&&(s=Math.max(s,O.prevTop+n)),t.scrollTo(0,s),x({type:"setPrevTop",value:s})}}}),[P,O,g,b,x]),i.useRef((function(t){_({type:"scrollToIndex",value:t})})).current}var s={index:void 0,position:void 0,prevTop:void 0}},xKmd:function(t,e,n){"use strict";e.a=function(t,e){var n,i,o=e||r;return function(){return n&&o(arguments,n)?i:i=t.apply(null,n=arguments)}};var r=function(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]}},zBIH:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return u}));var r=n("9+do"),i=n("/HQ+"),o=n("epCB");function u(t){var e=t.width,n=t.columnWidth,o=void 0===n?200:n,u=t.columnGutter,a=void 0===u?0:u,l=t.columnCount,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f,d=function(){var t=s(e,o,a,l),n=Object(r.a)(t,2),i=n[0],u=n[1];return c(u,i,a)},v=i.useRef();void 0===v.current&&(v.current=d());var p=i.useRef(h),m=[e,o,a,l],g=i.useRef(m),b=!m.every((function(t,e){return g.current[e]===t}));if(b||!h.every((function(t,e){return p.current[e]===t}))){var y=v.current,w=d();if(p.current=h,g.current=m,b)for(var O=y.size(),_=0;_<O;_++){var x=y.get(_);w.set(_,void 0!==x?x.height:0)}v.current=w}return v.current}var c=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=Object(o.a)(),i=new Array(t),u=[],c=new Array(t),s=0;s<t;s++)i[s]=0,c[s]=[];return{columnCount:t,columnWidth:e,set:function(t){for(var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=0,s=1;s<i.length;s++)i[s]<i[a]&&(a=s);var f=i[a]||0;i[a]=f+o+n,c[a].push(t),u[t]={left:a*(e+n),top:f,height:o,column:a},r.insert(f,f+o,t)},get:function(t){return u[t]},update:function(e){for(var o=new Array(t),s=0,f=0;s<e.length-1;s++){var l=e[s],h=u[l];h.height=e[++s],r.remove(l),r.insert(h.top,h.top+h.height,l),o[h.column]=void 0===o[h.column]?l:Math.min(l,o[h.column])}for(s=0;s<o.length;s++)if(void 0!==o[s]){var d=c[s],v=a(d,o[s]),p=c[s][v],m=u[p];for(i[s]=m.top+m.height+n,f=v+1;f<d.length;f++){var g=d[f],b=u[g];b.top=i[s],i[s]=b.top+b.height+n,r.remove(g),r.insert(b.top,b.top+b.height,g)}}},range:function(t,e,n){return r.search(t,e,(function(t,e){return n(t,u[t].left,e)}))},estimateHeight:function(e,n){var o=Math.max(0,Math.max.apply(null,i));return e===r.size?o:o+Math.ceil((e-r.size)/t)*n},shortestColumn:function(){return i.length>1?Math.min.apply(null,i):i[0]||0},size:function(){return r.size}}},a=function(t,e){for(var n=0,r=t.length-1;n<=r;){var i=n+r>>>1,o=t[i];if(o===e)return i;o<=e?n=i+1:r=i-1}return-1},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8,r=arguments.length>3?arguments[3]:void 0;r=r||Math.floor(t/(e+n))||1;var i=Math.floor((t-n*(r-1))/r);return[i,r]},f=[]}).call(this,n("FXEK"))}}]);
//# sourceMappingURL=component---src-pages-catalogue-jsx-a01212333f88174f948a.js.map