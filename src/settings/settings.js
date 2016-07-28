'use strict'

const debug = window.debug('📄 settings')

// history.pushState({}, '', '/settings/');
//
// $form.addEventListener('submit', sumbitForm, false);
// function sumbitForm (event) {
// 	event.preventDefault();
// 	toggleFields(true);
//
// 	var data = {
// 		token: localStorage.token,
// 		oauth_token: oauthToken,
// 		oauth_verifier: verifier,
// 		email: $email.value,
// 		time: timeCount($select.value)
// 	};
//
// 	function timeCount(time) {
// 		var hours = +time.split(':')[0];
// 		var minutes = +time.split(':')[1];
// 		var localTime = hours * 60 + minutes;
// 		var utcTime = localTime + +(new Date()).getTimezoneOffset();
//
// 		return utcTime/60 + '-' + ((utcTime%60 == 0) ? '00' : utcTime%60);
// 	}
//
// 	request('POST', 'https://go2mike.ru/api/v1/sign_in', data, function (err, data) {
// 		if (err) toggleFields(false);
// 		else location.href = 'success.html';
// 	});
// }
//
// function toggleFields(state) {
// 	if ($submit)  $submit.disabled = state;
// 	if ($select)  $select.disabled = state;
// 	if ($email)   $email.disabled = state;
// 	if ($spinner) $spinner.classList[state ? 'add' : 'remove']('visible');
// }

export default class Settings {
	constructor() {
		debug('init')
		this.init()
	}

	init() {
		const session_id = location.hash
		if (!session_id && !location.host.includes('localhost')) {
			alert('Вы должны войти, чтобы получить доступ к настройкам')
			location.href = "/"
		}
	}
}
