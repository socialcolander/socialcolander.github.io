/*
	Eventually by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function() {

	"use strict";

	// Methods/polyfills.

		// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
			!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

		// canUse
			window.canUse=function(p){if(!window._canUse)window._canUse=document.createElement("div");var e=window._canUse.style,up=p.charAt(0).toUpperCase()+p.slice(1);return p in e||"Moz"+up in e||"Webkit"+up in e||"O"+up in e||"ms"+up in e};

		// window.addEventListener
			(function(){if("addEventListener"in window)return;window.addEventListener=function(type,f){window.attachEvent("on"+type,f)}})();

	// Vars.
		var	$body = document.querySelector('body');

	// Disable animations/transitions until everything's loaded.
		$body.classList.add('is-loading');

		window.addEventListener('load', function() {
			window.setTimeout(function() {
				$body.classList.remove('is-loading');
			}, 100);
		});

	// Slideshow Background.
		(function() {

			// Settings.
				var settings = {

					// Images (in the format of 'url': 'alignment').
						images: {
							'images/2.jpeg': 'center',
							'images/4.jpeg': 'center',
							'images/1.jpeg': 'center',
							'images/3.jpeg': 'center',
						},

					// Delay.
						delay: 20000

				};

			// Vars.
				var	pos = 0, lastPos = 0,
					$wrapper, $bgs = [], $bg,
					k, v;

			// Create BG wrapper, BGs.
				$wrapper = document.createElement('div');
					$wrapper.id = 'bg';
					$body.appendChild($wrapper);

				for (k in settings.images) {

					// Create BG.
						$bg = document.createElement('div');
							$bg.style.backgroundImage = 'url("' + k + '")';
							$bg.style.backgroundPosition = settings.images[k];
							$wrapper.appendChild($bg);

					// Add it to array.
						$bgs.push($bg);

				}

			// Main loop.
				$bgs[pos].classList.add('visible');
				$bgs[pos].classList.add('top');

				// Bail if we only have a single BG or the client doesn't support transitions.
					if ($bgs.length == 1
					||	!canUse('transition'))
						return;

				window.setInterval(function() {

					lastPos = pos;
					pos++;

					// Wrap to beginning if necessary.
						if (pos >= $bgs.length)
							pos = 0;

					// Swap top images.
						$bgs[lastPos].classList.remove('top');
						$bgs[pos].classList.add('visible');
						$bgs[pos].classList.add('top');

					// Hide last image after a short delay.
						window.setTimeout(function() {
							$bgs[lastPos].classList.remove('visible');
						}, settings.delay / 2);

				}, settings.delay);

		})();

	// Signup Form.
		(function() {

			// Vars.
				var $form = document.querySelector('#signup-form'),
					$select = $form.querySelector('select'),
					$email = $form.querySelector('input[type="email"]'),
					$submit = $form.querySelector('input[type="submit"]'),
					$spinner = $form.querySelector('.spinner'),
					$token = $form.querySelector('input[name="oauth_token"]'),
					page = location.pathname == '/' ? 'index' : location.pathname.slice(1, -5),
					$message;

			// Bail if addEventListener isn't supported.
				if (!('addEventListener' in $form))
					return;

				if (page == 'index') indexPage();
				if (page == 'step2') stepPage();

				function indexPage() {
					$form.addEventListener('submit', function(event) {
						$submit.disabled = true;
						$spinner.classList.add('visible');

						var request = new XMLHttpRequest();
						request.open('GET', 'http://sc.go2mike.ru/api/v1/login', true);

						request.onload = function() {
						  if (request.status >= 200 && request.status < 400) {
						    var data = JSON.parse(request.responseText);
							var _token = data.redirect_url.slice(data.redirect_url.indexOf('=') + 1);

							localStorage.token = data.token;
							$token.value = _token;
							$form.submit();
						  } else {
							  console.error('ERROR')
						  }
						};

						request.onerror = function() {
							console.error('ERROR')
						};

						request.send();
					});
				}

				function stepPage() {
					try {
						var urlToken = (location.href.split('?')[1]).split('&');
						var oauthToken = urlToken[0].split('=')[1];
						var verifier = urlToken[1].split('=')[1];
					} catch (e) {
						if (location.hostname == 'socialcolander.net')
							location.href = "/";
					}

					if (location.hostname == 'socialcolander.net')
						history.pushState({}, '', 'http://socialcolander.net/step2.html');

					$form.addEventListener('submit', function(event) {
						event.preventDefault();

						toggleFields(true);

						var request = new XMLHttpRequest();
						var data = {
							token: localStorage.token,
							oauth_token: oauthToken,
							oauth_verifier: verifier,
							email: $email.value,
							time: $select.value
						};
						request.open('POST', 'http://sc.go2mike.ru/api/v1/sign_in', true);
						request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

						request.onload = function() {
						  if (request.status >= 200 && request.status < 400) {
							location.href = 'success.html';
						  } else {
							toggleFields(false);
						  }
						};

						request.onerror = function() {
							toggleFields(false);
						};
						request.send(JSON.stringify(data));
					});

					function toggleFields(state) {
						$submit.disabled = state;
						$select.disabled = state;
						$email.disabled = state;
						$spinner.classList[state ? 'add' : 'remove']('visible');
					}
				}

		})();

})();
