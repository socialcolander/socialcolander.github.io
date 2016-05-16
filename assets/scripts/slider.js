(function() {

	"use strict";

	// Vars.
		var	$body = document.querySelector('body');

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

		function request(type, url, data, cb) {
			type = type || 'GET';
			cb = cb || function () {};
			url = url || '';

			if (!url.length) return;

			var request = new XMLHttpRequest();
			request.open(type, url, true);

			if (type == 'POST')
				request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

			request.onerror = cb;
			request.onload = function(e) {
			  if (request.status >= 200 && request.status < 400) cb(null, JSON.parse(request.responseText));
			  else cb(e);
			};

			if (data) request.send(JSON.stringify(data));
			else request.send();
		}

})();
