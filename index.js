!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){t.exports=n(43)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(31)("wks"),o=n(33),u=n(4).Symbol,i="function"==typeof u,c=t.exports=function(t){return r[t]||(r[t]=i&&u[t]||(i?u:o)("Symbol."+t))};c.store=r},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(48),u=r(o);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,u["default"])(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports=!n(15)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(11),o=n(29);t.exports=n(6)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports={}},function(t,e,n){var r=n(16);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(9),o=n(60),u=n(75),i=Object.defineProperty;e.f=n(6)?Object.defineProperty:function(t,e,n){if(r(t),e=u(e,!0),r(n),o)try{return i(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(20),u=r(o),i=n(49),c=r(i),s=n(3),a=r(s),f=n(5),l=r(f),d=n(36),p=r(d),v=window.debug("🌏 api"),h="https://api.socialcolander.net/api/v1/",y={headers:{Accept:"application/json","Content-Type":"application/json"}},g=function(){function t(){(0,a["default"])(this,t)}return(0,l["default"])(t,[{key:"updateUser",value:function(t){return v("updateUser",t),(0,p["default"])(h+"user",(0,c["default"])({method:"POST",body:(0,u["default"])(t)},y))}},{key:"activateUser",value:function(t){return v("activateUser",t),(0,p["default"])(h+"user/subscription/"+t.token,(0,c["default"])({method:"POST"},y))}}]),t}();e["default"]=new g},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(4),o=n(1),u=n(58),i=n(7),c="prototype",s=function(t,e,n){var a,f,l,d=t&s.F,p=t&s.G,v=t&s.S,h=t&s.P,y=t&s.B,g=t&s.W,m=p?o:o[e]||(o[e]={}),b=m[c],_=p?r:v?r[e]:(r[e]||{})[c];p&&(n=e);for(a in n)f=!d&&_&&void 0!==_[a],f&&a in m||(l=f?_[a]:n[a],m[a]=p&&"function"!=typeof _[a]?n[a]:y&&f?u(l,r):g&&_[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(l):h&&"function"==typeof l?u(Function.call,l):l,h&&((m.virtual||(m.virtual={}))[a]=l,t&s.R&&b&&!b[a]&&i(b,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(31)("keys"),o=n(33);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(26),o=n(13);t.exports=function(t){return r(o(t))}},function(t,e,n){t.exports={"default":n(52),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(46),u=r(o),i=n(45),c=r(i);e["default"]=function(){function t(t,e){var n=[],r=!0,o=!1,u=void 0;try{for(var i,s=(0,c["default"])(t);!(r=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(a){o=!0,u=a}finally{try{!r&&s["return"]&&s["return"]()}finally{if(o)throw u}}return n}return function(e,n){if(Array.isArray(e))return e;if((0,u["default"])(Object(e)))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(t,e,n){var r=n(23),o=n(2)("toStringTag"),u="Arguments"==r(function(){return arguments}()),i=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=i(e=Object(t),o))?n:u?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(16),o=n(4).document,u=r(o)&&r(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(23);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(63),o=n(14),u=n(71),i=n(7),c=n(10),s=n(8),a=n(61),f=n(30),l=n(68),d=n(2)("iterator"),p=!([].keys&&"next"in[].keys()),v="@@iterator",h="keys",y="values",g=function(){return this};t.exports=function(t,e,n,m,b,_,x){a(n,e,m);var w,O,S,j=function(t){if(!p&&t in A)return A[t];switch(t){case h:return function(){return new n(this,t)};case y:return function(){return new n(this,t)}}return function(){return new n(this,t)}},M=e+" Iterator",k=b==y,P=!1,A=t.prototype,E=A[d]||A[v]||b&&A[b],C=E||j(b),T=b?k?j("entries"):C:void 0,$="Array"==e?A.entries||E:E;if($&&(S=l($.call(new t)),S!==Object.prototype&&(f(S,M,!0),r||c(S,d)||i(S,d,g))),k&&E&&E.name!==y&&(P=!0,C=function(){return E.call(this)}),r&&!x||!p&&!P&&A[d]||i(A,d,C),s[e]=C,s[M]=g,b)if(w={values:k?C:j(y),keys:_?C:j(h),entries:T},x)for(O in w)O in A||u(A,O,w[O]);else o(o.P+o.F*(p||P),e,w);return w}},function(t,e,n){var r=n(69),o=n(25);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(11).f,o=n(10),u=n(2)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,u)&&r(t,u,{configurable:!0,value:e})}},function(t,e,n){var r=n(4),o="__core-js_shared__",u=r[o]||(r[o]={});t.exports=function(t){return u[t]||(u[t]={})}},function(t,e,n){var r=n(13);t.exports=function(t){return Object(r(t))}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){"use strict";var r=n(72)(!0);n(27)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){n(79);for(var r=n(4),o=n(7),u=n(8),i=n(2)("toStringTag"),c=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],s=0;s<5;s++){var a=c[s],f=r[a],l=f&&f.prototype;l&&!l[i]&&o(l,i,a),u[a]=u.Array}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t){if(t.status>=200&&t.status<400)return t;var e=new Error(t.statusText);throw e.response=t,e}function u(t){a("Error",t)}function i(t){a("response",t);var e=t.json();return e.then(function(t){return a("responseJSON",t,(0,s["default"])(t))}),e}Object.defineProperty(e,"__esModule",{value:!0});var c=n(20),s=r(c);e["default"]=function(){return a("request",arguments),fetch.apply(null,arguments).then(o,u).then(i)};var a=window.debug("🌏 http")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),u=r(o),i=n(5),c=r(i),s=n(12),a=(r(s),window.debug("🔐 sign-stuff")),f=function(){function t(){(0,u["default"])(this,t),a("constructor")}return(0,c["default"])(t,[{key:"init",value:function(){}}]),t}();e["default"]=new f},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),u=r(o);n(37);var i=window.debug("📄 home"),c=function s(){(0,u["default"])(this,s),i("init")};e["default"]=c},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(82),u=r(o);window.debug=function(t){return(0,u["default"])("_"+t)},localStorage.debug="_*",["forEach","map","filter","reduce","reduceRight","every","some"].forEach(function(t){return NodeList.prototype[t]=HTMLCollection.prototype[t]=Array.prototype[t]})},function(t,e){"use strict";var n=(navigator.language||navigator.userLanguage).slice(0,2).toLowerCase(),r="ru"==n;localStorage.userWasHere||(localStorage.userWasHere=!0,r?location.pathname="/ru"+location.pathname:location.pathname.replace("/ru/","/"))},function(t,e){"use strict";function n(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return(t+"").replace(/\W/g,"_")}function r(t){var e=n(location.pathname),r=n(t.getAttribute("class")),o=n(t.getAttribute("type")),u=n(t.getAttribute("name"));return e+"+"+r+"+"+o+"+"+u}function o(t,e){return void 0===e?(c("get",t,localStorage[t]),localStorage[t]):(c("set",t,e),void(localStorage[t]=e))}function u(){var t=r(this);c("onChange",t,this.value),o(t,this.value)}function i(){var t=document.querySelectorAll("input, select, textarea");t.forEach(function(t){var e=o(r(t));e&&(t.value=e),t.addEventListener("change",u,!1)})}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=i;var c=debug("🗑 save_in_storage")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(21),u=r(o),i=n(3),c=r(i),s=n(5),a=r(s),f=n(12),l=r(f),d=window.debug("📄 activate"),p=function(){function t(){(0,c["default"])(this,t),this.token=location.search.slice(7),this.message_success=document.querySelector(".js-success"),this.message_error=document.querySelector(".js-error"),this.init()}return(0,a["default"])(t,[{key:"init",value:function(){d("init",this.token),this.token?this.requestUserActivate():(alert(window.messages.activate.redirect),location.host.includes("localhost")||(location.href="/"))}},{key:"requestUserActivate",value:function(){var t=this;l["default"].activateUser({token:this.token}).then(function(e){var n=e.success;n&&t.message_success.removeAttribute("hidden")})["catch"](function(){t.message_error.removeAttribute("hidden")})}},{key:"timeCount",value:function(){var t=+this.$timeSelect.value,e=+this.$timeZoneSelect.value,n=t-e+"",r=n.split("."),o=(0,u["default"])(r,2),i=o[0],c=o[1];return"5"==c?i+"-30":i+"-00"}}]),t}();e["default"]=p},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),u=r(o),i=n(5),c=r(i);n(39),n(40);var s=n(41),a=r(s),f=n(38),l=r(f),d=n(44),p=r(d),v=n(42),h=r(v),y=function(){function t(){(0,u["default"])(this,t),this.init()}return(0,c["default"])(t,[{key:"init",value:function(){var t=location.pathname.replace("/ru/","/");"/"==t&&new l["default"],"/settings/"==t&&new p["default"],t.indexOf("/activate/")!==-1&&new h["default"],console.log("# fieldsSync",a["default"]),(0,a["default"])()}}]),t}();e["default"]=new y},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(21),u=r(o),i=n(3),c=r(i),s=n(5),a=r(s),f=n(12),l=r(f),d=window.debug("📄 settings"),p=function(){function t(){(0,c["default"])(this,t),this.session_id=location.hash.slice(1),this.$form=document.querySelector(".js-settings-form"),this.$email=this.$form.querySelector("[name=email]"),this.$timeSelect=this.$form.querySelector(".js-time"),this.$timeZoneSelect=this.$form.querySelector(".js-zone"),this.init()}return(0,a["default"])(t,[{key:"init",value:function(){return d("init"),history.pushState({},"","/settings/"),this.session_id||location.host.includes("localhost")?void this.$form.addEventListener("submit",this.formPrepare.bind(this),!1):(alert(window.messages.settings.redirect),location.href="/")}},{key:"formPrepare",value:function(t){t.preventDefault();var e={token:this.session_id,user:{time:this.timeCount(),email:this.$email.value}};l["default"].updateUser(e).then(function(t){var e=t.user;e.active?(alert(window.messages.settings.sucess),location.pathname="/"):location.pathname="/confirm/"})}},{key:"timeCount",value:function(){var t=+this.$timeSelect.value,e=+this.$timeZoneSelect.value,n=t-e+"",r=n.split("."),o=(0,u["default"])(r,2),i=o[0],c=o[1];return"5"==c?i+"-30":i+"-00"}}]),t}();e["default"]=p},function(t,e,n){t.exports={"default":n(50),__esModule:!0}},function(t,e,n){t.exports={"default":n(51),__esModule:!0}},function(t,e,n){t.exports={"default":n(53),__esModule:!0}},function(t,e,n){t.exports={"default":n(54),__esModule:!0}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(47),u=r(o);e["default"]=u["default"]||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){n(35),n(34),t.exports=n(77)},function(t,e,n){n(35),n(34),t.exports=n(78)},function(t,e,n){var r=n(1),o=r.JSON||(r.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},function(t,e,n){n(80),t.exports=n(1).Object.assign},function(t,e,n){n(81);var r=n(1).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(19),o=n(74),u=n(73);t.exports=function(t){return function(e,n,i){var c,s=r(e),a=o(s.length),f=u(i,a);if(t&&n!=n){for(;a>f;)if(c=s[f++],c!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(55);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){t.exports=n(4).document&&document.documentElement},function(t,e,n){t.exports=!n(6)&&!n(15)(function(){return 7!=Object.defineProperty(n(24)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var r=n(65),o=n(29),u=n(30),i={};n(7)(i,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(i,{next:o(1,n)}),u(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e){t.exports=!0},function(t,e,n){"use strict";var r=n(28),o=n(67),u=n(70),i=n(32),c=n(26),s=Object.assign;t.exports=!s||n(15)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r})?function(t,e){for(var n=i(t),s=arguments.length,a=1,f=o.f,l=u.f;s>a;)for(var d,p=c(arguments[a++]),v=f?r(p).concat(f(p)):r(p),h=v.length,y=0;h>y;)l.call(p,d=v[y++])&&(n[d]=p[d]);return n}:s},function(t,e,n){var r=n(9),o=n(66),u=n(25),i=n(17)("IE_PROTO"),c=function(){},s="prototype",a=function(){var t,e=n(24)("iframe"),r=u.length,o=">";for(e.style.display="none",n(59).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write("<script>document.F=Object</script"+o),t.close(),a=t.F;r--;)delete a[s][u[r]];return a()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[s]=r(t),n=new c,c[s]=null,n[i]=t):n=a(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(11),o=n(9),u=n(28);t.exports=n(6)?Object.defineProperties:function(t,e){o(t);for(var n,i=u(e),c=i.length,s=0;c>s;)r.f(t,n=i[s++],e[n]);return t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(10),o=n(32),u=n(17)("IE_PROTO"),i=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?i:null}},function(t,e,n){var r=n(10),o=n(19),u=n(57)(!1),i=n(17)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),s=0,a=[];for(n in c)n!=i&&r(c,n)&&a.push(n);for(;e.length>s;)r(c,n=e[s++])&&(~u(a,n)||a.push(n));return a}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){t.exports=n(7)},function(t,e,n){var r=n(18),o=n(13);t.exports=function(t){return function(e,n){var u,i,c=String(o(e)),s=r(n),a=c.length;return s<0||s>=a?t?"":void 0:(u=c.charCodeAt(s),u<55296||u>56319||s+1===a||(i=c.charCodeAt(s+1))<56320||i>57343?t?c.charAt(s):u:t?c.slice(s,s+2):(u-55296<<10)+(i-56320)+65536)}}},function(t,e,n){var r=n(18),o=Math.max,u=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):u(t,e)}},function(t,e,n){var r=n(18),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(16);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(22),o=n(2)("iterator"),u=n(8);t.exports=n(1).getIteratorMethod=function(t){if(void 0!=t)return t[o]||t["@@iterator"]||u[r(t)]}},function(t,e,n){var r=n(9),o=n(76);t.exports=n(1).getIterator=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},function(t,e,n){var r=n(22),o=n(2)("iterator"),u=n(8);t.exports=n(1).isIterable=function(t){var e=Object(t);return void 0!==e[o]||"@@iterator"in e||u.hasOwnProperty(r(e))}},function(t,e,n){"use strict";var r=n(56),o=n(62),u=n(8),i=n(19);t.exports=n(27)(Array,"Array",function(t,e){this._t=i(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),u.Arguments=u.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(14);r(r.S+r.F,"Object",{assign:n(64)})},function(t,e,n){var r=n(14);r(r.S+r.F*!n(6),"Object",{defineProperty:n(11).f})},function(t,e,n){function r(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function o(){var t=arguments,n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),!n)return t;var r="color: "+this.color;t=[t[0],r,"color: inherit"].concat(Array.prototype.slice.call(t,1));var o=0,u=0;return t[0].replace(/%[a-z%]/g,function(t){"%%"!==t&&(o++,"%c"===t&&(u=o))}),t.splice(u,0,r),t}function u(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function i(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(n){}}function c(){var t;try{t=e.storage.debug}catch(n){}return t}function s(){try{return window.localStorage}catch(t){}}e=t.exports=n(83),e.log=u,e.formatArgs=o,e.save=i,e.load=c,e.useColors=r,e.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:s(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){return JSON.stringify(t)},e.enable(c())},function(t,e,n){function r(){return e.colors[f++%e.colors.length]}function o(t){function n(){}function o(){var t=o,n=+new Date,u=n-(a||n);t.diff=u,t.prev=a,t.curr=n,a=n,null==t.useColors&&(t.useColors=e.useColors()),null==t.color&&t.useColors&&(t.color=r());var i=Array.prototype.slice.call(arguments);i[0]=e.coerce(i[0]),"string"!=typeof i[0]&&(i=["%o"].concat(i));var c=0;i[0]=i[0].replace(/%([a-z%])/g,function(n,r){if("%%"===n)return n;c++;var o=e.formatters[r];if("function"==typeof o){var u=i[c];n=o.call(t,u),i.splice(c,1),c--}return n}),"function"==typeof e.formatArgs&&(i=e.formatArgs.apply(t,i));var s=o.log||e.log||console.log.bind(console);s.apply(t,i)}n.enabled=!1,o.enabled=!0;var u=e.enabled(t)?o:n;return u.namespace=t,u}function u(t){e.save(t);for(var n=(t||"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&(t=n[o].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function i(){e.enable("")}function c(t){var n,r;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1}function s(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=o,e.coerce=s,e.disable=i,e.enable=u,e.enabled=c,e.humanize=n(84),e.names=[],e.skips=[],e.formatters={};var a,f=0},function(t,e){function n(t){if(t=""+t,!(t.length>1e4)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]),r=(e[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*f;case"days":case"day":case"d":return n*a;case"hours":case"hour":case"hrs":case"hr":case"h":return n*s;case"minutes":case"minute":case"mins":case"min":case"m":return n*c;case"seconds":case"second":case"secs":case"sec":case"s":return n*i;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n}}}}function r(t){return t>=a?Math.round(t/a)+"d":t>=s?Math.round(t/s)+"h":t>=c?Math.round(t/c)+"m":t>=i?Math.round(t/i)+"s":t+"ms"}function o(t){return u(t,a,"day")||u(t,s,"hour")||u(t,c,"minute")||u(t,i,"second")||t+" ms"}function u(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var i=1e3,c=60*i,s=60*c,a=24*s,f=365.25*a;t.exports=function(t,e){return e=e||{},"string"==typeof t?n(t):e["long"]?o(t):r(t)}}]);
//# sourceMappingURL=index.js.map