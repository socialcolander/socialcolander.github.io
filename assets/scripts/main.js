import './polyfills.js'
import './slider.js'

"use strict";

class App {
	constructor() {
		'ngInject';

		this.$body = document.querySelector('body');
		this.init();
	}

	init() {
		this.loadingBodyClass()
	}

	loadingBodyClass() {
		this.$body.classList.add('is-loading');
		window.addEventListener('load', () => {
			window.setTimeout(() => {
				this.$body.classList.remove('is-loading');
			}, 100);
		});
	}
}

new App();

// Vars.
var $body = document.querySelector('body');


// Signup Form.
(function() {

	// Vars.

	var $form = document.querySelector('#signup-form'),
		$select = $form.querySelector('select'),
		$email = $form.querySelector('input[type="email"]'),
		$submit = $form.querySelector('button'),
		$spinner = $form.querySelector('.spinner'),
		$token = $form.querySelector('input[name="oauth_token"]'),
		page = location.pathname == '/' ? 'index' : location.pathname.slice(1, -5),
		$message;

	if (page != 'index' && page != 'step2') return;

	// Bail if addEventListener isn't supported.
	if (!('addEventListener' in $form))
		return;

	if (page == 'index') indexPage();
	if (page == 'step2') stepPage();

	function indexPage() {
		$form.addEventListener('submit', sumbitForm, false);

		function sumbitForm(event) {
			event.preventDefault();

			$submit.disabled = true;
			$spinner.classList.add('visible');

			request('GET', 'https://go2mike.ru/api/v1/login', null, function(err, data) {
				console.log('err', err);
				console.log('data', data);

				localStorage.token = data.token;
				$token.value = data.redirect_url.slice(data.redirect_url.indexOf('=') + 1);

				if (!$token.value) sumbitForm(event);
				else $form.submit();
			});
		}
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
			history.pushState({}, '', 'https://socialcolander.net/step2.html');

		$form.addEventListener('submit', sumbitForm, false);

		function sumbitForm(event) {
			event.preventDefault();
			toggleFields(true);

			var data = {
				token: localStorage.token,
				oauth_token: oauthToken,
				oauth_verifier: verifier,
				email: $email.value,
				time: timeCount($select.value)
			};

			function timeCount(time) {
				var hours = +time.split(':')[0];
				var minutes = +time.split(':')[1];
				var localTime = hours * 60 + minutes;
				var utcTime = localTime + +(new Date()).getTimezoneOffset();

				return utcTime / 60 + '-' + ((utcTime % 60 == 0) ? '00' : utcTime % 60);
			}

			request('POST', 'https://go2mike.ru/api/v1/sign_in', data, function(err, data) {
				if (err) toggleFields(false);
				else location.href = 'success.html';
			});
		}

		function toggleFields(state) {
			if ($submit) $submit.disabled = state;
			if ($select) $select.disabled = state;
			if ($email) $email.disabled = state;
			if ($spinner) $spinner.classList[state ? 'add' : 'remove']('visible');
		}
	}

})();
