!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){t.exports=n(43)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(31)("wks"),o=n(33),i=n(4).Symbol,u="function"==typeof i,c=t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))};c.store=r},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(48),i=r(o);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i["default"])(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports=!n(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(11),o=n(29);t.exports=n(6)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports={}},function(t,e,n){var r=n(16);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(9),o=n(60),i=n(75),u=Object.defineProperty;e.f=n(6)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),i=r(o),u=n(49),c=r(u),s=n(3),a=r(s),f=n(5),l=r(f),d=n(36),p=r(d),v=window.debug("🌏 api"),h="https://api.socialcolander.net/api/v1/",y={headers:{Accept:"application/json","Content-Type":"application/json"}},m=function(){function t(){(0,a["default"])(this,t)}return(0,l["default"])(t,[{key:"updateUser",value:function(t){return v("updateUser",t),(0,p["default"])(h+"user",(0,c["default"])({method:"POST",body:(0,i["default"])(t)},y))}},{key:"activateUser",value:function(t){return v("activateUser",t),(0,p["default"])(h+"user/subscription/"+t.token,(0,c["default"])({method:"POST"},y))}}]),t}();e["default"]=new m},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(4),o=n(1),i=n(58),u=n(7),c="prototype",s=function(t,e,n){var a,f,l,d=t&s.F,p=t&s.G,v=t&s.S,h=t&s.P,y=t&s.B,m=t&s.W,g=p?o:o[e]||(o[e]={}),_=g[c],b=p?r:v?r[e]:(r[e]||{})[c];p&&(n=e);for(a in n)f=!d&&b&&void 0!==b[a],f&&a in g||(l=f?b[a]:n[a],g[a]=p&&"function"!=typeof b[a]?n[a]:y&&f?i(l,r):m&&b[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(l):h&&"function"==typeof l?i(Function.call,l):l,h&&((g.virtual||(g.virtual={}))[a]=l,t&s.R&&_&&!_[a]&&u(_,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(31)("keys"),o=n(33);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(26),o=n(13);t.exports=function(t){return r(o(t))}},function(t,e,n){t.exports={"default":n(52),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(46),i=r(o),u=n(45),c=r(u);e["default"]=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,s=(0,c["default"])(t);!(r=(u=s.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(a){o=!0,i=a}finally{try{!r&&s["return"]&&s["return"]()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,i["default"])(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){var r=n(23),o=n(2)("toStringTag"),i="Arguments"==r(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(16),o=n(4).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(63),o=n(14),i=n(71),u=n(7),c=n(10),s=n(8),a=n(61),f=n(30),l=n(68),d=n(2)("iterator"),p=!([].keys&&"next"in[].keys()),v="@@iterator",h="keys",y="values",m=function(){return this};t.exports=function(t,e,n,g,_,b,w){a(n,e,g);var x,O,j,S=function(t){if(!p&&t in E)return E[t];switch(t){case h:return function(){return new n(this,t)};case y:return function(){return new n(this,t)}}return function(){return new n(this,t)}},M=e+" Iterator",k=_==y,A=!1,E=t.prototype,P=E[d]||E[v]||_&&E[_],C=P||S(_),T=_?k?S("entries"):C:void 0,F="Array"==e?E.entries||P:P;if(F&&(j=l(F.call(new t)),j!==Object.prototype&&(f(j,M,!0),r||c(j,d)||u(j,d,m))),k&&P&&P.name!==y&&(A=!0,C=function(){return P.call(this)}),r&&!w||!p&&!A&&E[d]||u(E,d,C),s[e]=C,s[M]=m,_)if(x={values:k?C:S(y),keys:b?C:S(h),entries:T},w)for(O in x)O in E||i(E,O,x[O]);else o(o.P+o.F*(p||A),e,x);return x}},function(t,e,n){var r=n(69),o=n(25);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(11).f,o=n(10),i=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(4),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){"use strict";var r=n(72)(!0);n(27)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(79);for(var r=n(4),o=n(7),i=n(8),u=n(2)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],s=0;s<5;s++){var a=c[s],f=r[a],l=f&&f.prototype;l&&!l[u]&&o(l,u,a),i[a]=i.Array}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t){if(t.status>=200&&t.status<400)return t;var e=new Error(t.statusText);throw e.response=t,e}function i(t){a("Error",t)}function u(t){a("response",t);var e=t.json();return e.then(function(t){return a("responseJSON",t,(0,s["default"])(t))}),e}Object.defineProperty(e,"__esModule",{value:!0});var c=n(20),s=r(c);e["default"]=function(){return a("request",arguments),fetch.apply(null,arguments).then(o,i).then(u)};var a=window.debug("🌏 http")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=r(o),u=n(5),c=r(u),s=n(12),a=(r(s),window.debug("🔐 sign-stuff")),f=function(){function t(){(0,i["default"])(this,t),a("constructor")}return(0,c["default"])(t,[{key:"init",value:function(){}}]),t}();e["default"]=new f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=r(o);n(37);var u=window.debug("📄 home"),c=function s(){(0,i["default"])(this,s),u("init")};e["default"]=c},function(t,e){"use strict";function n(t,e){function n(){if(!window.FontFace)return!1;var t=new FontFace("t",'url("data:application/font-woff2,") format("woff2")',{});return t.load(),"loading"===t.status}var r=navigator.userAgent;if(window.addEventListener&&(!r.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/)||r.match(/Chrome/))){var o={};try{o=localStorage||{}}catch(i){}var r="font-"+t,u=r+"url",c=r+"css",r=o[u],s=o[c],a=document.createElement("style");if(a.rel="stylesheet",document.head.appendChild(a),s&&r===e)a.textContent=s;else{var r=e+".woff"+(n()?"2":"")+".css",f=new XMLHttpRequest;f.open("GET",r),f.onload=function(){200<=f.status&&400>f.status&&(o[u]=e,o[c]=a.textContent=f.responseText)},f.send()}}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=n},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(82),i=r(o);window.debug=function(t){return(0,i["default"])("_"+t)},localStorage.debug="_*",["forEach","map","filter","reduce","reduceRight","every","some"].forEach(function(t){return NodeList.prototype[t]=HTMLCollection.prototype[t]=Array.prototype[t]})},function(t,e){"use strict";function n(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return(t+"").replace(/\W/g,"_")}function r(t){var e=n(location.pathname),r=n(t.getAttribute("class")),o=n(t.getAttribute("type")),i=n(t.getAttribute("name"));return e+"+"+r+"+"+o+"+"+i}function o(t,e){return void 0===e?(c("get",t,localStorage[t]),localStorage[t]):(c("set",t,e),void(localStorage[t]=e))}function i(){var t=r(this);c("onChange",t,this.value),o(t,this.value)}function u(){var t=document.querySelectorAll("input, select, textarea");t.forEach(function(t){var e=o(r(t));e&&(t.value=e),t.addEventListener("change",i,!1)})}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=u;var c=debug("🗑 save_in_storage")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(21),i=r(o),u=n(3),c=r(u),s=n(5),a=r(s),f=n(12),l=r(f),d=window.debug("📄 activate"),p=function(){function t(){(0,c["default"])(this,t),this.token=location.search.slice(7),this.message_success=document.querySelector(".js-success"),this.message_error=document.querySelector(".js-error"),this.init()}return(0,a["default"])(t,[{key:"init",value:function(){d("init",this.token),this.token?this.requestUserActivate():(window.messages.activate.redirect&&alert(window.messages.activate.redirect),location.host.includes("localhost")||(location.href="/"))}},{key:"requestUserActivate",value:function(){var t=this;l["default"].activateUser({token:this.token}).then(function(e){var n=e.success;n&&t.message_success.removeAttribute("hidden")})["catch"](function(){t.message_error.removeAttribute("hidden")})}},{key:"timeCount",value:function(){var t=+this.$timeSelect.value,e=+this.$timeZoneSelect.value,n=t-e+"",r=n.split("."),o=(0,i["default"])(r,2),u=o[0],c=o[1];return"5"==c?u+"-30":u+"-00"}}]),t}();e["default"]=p},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),i=r(o),u=n(5),c=r(u);n(40);var s=n(39),a=r(s),f=n(41),l=r(f),d=n(38),p=r(d),v=n(44),h=r(v),y=n(42),m=r(y),g=function(){function t(){(0,i["default"])(this,t),this.init()}return(0,c["default"])(t,[{key:"redirectFromRu",value:function(){location.pathname.includes("/ru/")&&location.pathname.replace("/ru/","/")}},{key:"init",value:function(){this.redirectFromRu(),this.initRoutes(),(0,a["default"])("pt_serif_and_sans","/assets/fonts/webfont"),(0,l["default"])()}},{key:"initRoutes",value:function(){var t=location.pathname;"/"==t&&new p["default"],"/settings/"==t&&new h["default"],t.indexOf("/activate/")!==-1&&new m["default"]}}]),t}();e["default"]=new g},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(21),i=r(o),u=n(3),c=r(u),s=n(5),a=r(s),f=n(12),l=r(f),d=window.debug("📄 settings"),p=function(){function t(){(0,c["default"])(this,t),this.session_id=location.hash.slice(1),this.$form=document.querySelector(".js-settings-form"),this.$email=this.$form.querySelector("[name=email]"),this.$timeSelect=this.$form.querySelector(".js-time"),this.$timeZoneSelect=this.$form.querySelector(".js-zone"),this.init()}return(0,a["default"])(t,[{key:"init",value:function(){return d("init"),history.pushState({},"","/settings/"),this.session_id||location.host.includes("localhost")?void this.$form.addEventListener("submit",this.formPrepare.bind(this),!1):(alert(window.messages.settings.redirect),location.href="/")}},{key:"formPrepare",value:function(t){t.preventDefault();var e={token:this.session_id,user:{time:this.timeCount(),email:this.$email.value}};l["default"].updateUser(e).then(function(t){var e=t.user;e.active?(alert(window.messages.settings.success),location.href="/"):location.pathname="/confirm/"})}},{key:"timeCount",value:function(){var t=+this.$timeSelect.value,e=+this.$timeZoneSelect.value,n=t-e+"",r=n.split("."),o=(0,i["default"])(r,2),u=o[0],c=o[1];return"5"==c?u+"-30":u+"-00"}}]),t}();e["default"]=p},function(t,e,n){t.exports={"default":n(50),__esModule:!0}},function(t,e,n){t.exports={"default":n(51),__esModule:!0}},function(t,e,n){t.exports={"default":n(53),__esModule:!0}},function(t,e,n){t.exports={"default":n(54),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(47),i=r(o);e["default"]=i["default"]||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){n(35),n(34),t.exports=n(77)},function(t,e,n){n(35),n(34),t.exports=n(78)},function(t,e,n){var r=n(1),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){n(80),t.exports=n(1).Object.assign},function(t,e,n){n(81);var r=n(1).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(19),o=n(74),i=n(73);t.exports=function(t){return function(e,n,u){var c,s=r(e),a=o(s.length),f=i(u,a);if(t&&n!=n){for(;a>f;)if(c=s[f++],c!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(55);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){t.exports=n(4).document&&document.documentElement},function(t,e,n){t.exports=!n(6)&&!n(15)(function(){return 7!=Object.defineProperty(n(24)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(65),o=n(29),i=n(30),u={};n(7)(u,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports=!0},function(t,e,n){"use strict";var r=n(28),o=n(67),i=n(70),u=n(32),c=n(26),s=Object.assign;t.exports=!s||n(15)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r})?function(t,e){for(var n=u(t),s=arguments.length,a=1,f=o.f,l=i.f;s>a;)for(var d,p=c(arguments[a++]),v=f?r(p).concat(f(p)):r(p),h=v.length,y=0;h>y;)l.call(p,d=v[y++])&&(n[d]=p[d]);return n}:s},function(t,e,n){var r=n(9),o=n(66),i=n(25),u=n(17)("IE_PROTO"),c=function(){},s="prototype",a=function(){var t,e=n(24)("iframe"),r=i.length,o=">";for(e.style.display="none",n(59).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),a=t.F;r--;)delete a[s][i[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[s]=r(t),n=new c,c[s]=null,n[u]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(11),o=n(9),i=n(28);t.exports=n(6)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),c=u.length,s=0;c>s;)r.f(t,n=u[s++],e[n]);return t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(10),o=n(32),i=n(17)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(10),o=n(19),i=n(57)(!1),u=n(17)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),s=0,a=[];for(n in c)n!=u&&r(c,n)&&a.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~i(a,n)||a.push(n));return a}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){t.exports=n(7)},function(t,e,n){var r=n(18),o=n(13);t.exports=function(t){return function(e,n){var i,u,c=String(o(e)),s=r(n),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s),i<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):(i-55296<<10)+(u-56320)+65536)}}},function(t,e,n){var r=n(18),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(18),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(16);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(22),o=n(2)("iterator"),i=n(8);t.exports=n(1).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e,n){var r=n(9),o=n(76);t.exports=n(1).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){var r=n(22),o=n(2)("iterator"),i=n(8);t.exports=n(1).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||i.hasOwnProperty(r(e))}},function(t,e,n){"use strict";var r=n(56),o=n(62),i=n(8),u=n(19);t.exports=n(27)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(14);r(r.S+r.F,"Object",{assign:n(64)})},function(t,e,n){var r=n(14);r(r.S+r.F*!n(6),"Object",{defineProperty:n(11).f})},function(t,e,n){function r(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function o(){var t=arguments,n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),!n)return t;var r="color: "+this.color;t=[t[0],r,"color: inherit"].concat(Array.prototype.slice.call(t,1));var o=0,i=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(i=o))}),t.splice(i,0,r),t}function i(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function u(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}}function c(){var t;try{t=e.storage.debug}catch(n){}return t}function s(){try{return window.localStorage}catch(t){}}e=t.exports=n(83),e.log=i,e.formatArgs=o,e.save=u,e.load=c,e.useColors=r,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:s(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){return JSON.stringify(t)},e.enable(c())},function(t,e,n){function r(){return e.colors[f++%e.colors.length]}function o(t){function n(){}function o(){var t=o,n=+new Date,i=n-(a||n);t.diff=i,t.prev=a,t.curr=n,a=n,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=r());var u=Array.prototype.slice.call(arguments);u[0]=e.coerce(u[0]),"string"!=typeof u[0]&&(u=["%o"].concat(u));var c=0;u[0]=u[0].replace(/%([a-z%])/g,function(n,r){if("%%"===n)return n;c++;var o=e.formatters[r];if("function"==typeof o){var i=u[c];n=o.call(t,i),u.splice(c,1),c--}return n}),"function"==typeof e.formatArgs&&(u=e.formatArgs.apply(t,u));var s=o.log||e.log||console.log.bind(console);s.apply(t,u)}n.enabled=!1,o.enabled=!0;var i=e.enabled(t)?o:n;return i.namespace=t,i}function i(t){e.save(t);for(var n=(t||"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&(t=n[o].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function u(){e.enable("")}function c(t){var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}function s(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o,e.coerce=s,e.disable=u,e.enable=i,e.enabled=c,e.humanize=n(84),e.names=[],e.skips=[],e.formatters={};var a,f=0},function(t,e){function n(t){if(t=""+t,!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*f;case"days":case"day":case"d":return n*a;case"hours":case"hour":case"hrs":case"hr":case"h":return n*s;case"minutes":case"minute":case"mins":case"min":case"m":return n*c;case"seconds":case"second":case"secs":case"sec":case"s":return n*u;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n}}}}function r(t){return t>=a?Math.round(t/a)+"d":t>=s?Math.round(t/s)+"h":t>=c?Math.round(t/c)+"m":t>=u?Math.round(t/u)+"s":t+"ms"}function o(t){return i(t,a,"day")||i(t,s,"hour")||i(t,c,"minute")||i(t,u,"second")||t+" ms"}function i(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var u=1e3,c=60*u,s=60*c,a=24*s,f=365.25*a;t.exports=function(t,e){return e=e||{},"string"==typeof t?n(t):e["long"]?o(t):r(t)}}]);
//# sourceMappingURL=index.js.map