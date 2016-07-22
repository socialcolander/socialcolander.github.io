'use strict'

const debug = window.debug('🔐 sign-stuff')
import api from '../api/api.js'

class regForm {
	constructor() {
		debug('constructor')
		this.$forms = document.querySelectorAll('.js-signup-form')

		this.init()
	}

	init() {
		debug('init', this)

		this.$forms.forEach($form => {
			$form.addEventListener('submit', this.formSubmit.bind(this), false)
		})
	}

	async formSubmit(e) {
		e.preventDefault()

		const $form = e.target
		const $token = $form.querySelector('[name=oauth_token]')

		const { token, redirect_url } = await api.login()
		localStorage.token = token
		$token.value = redirect_url.slice(redirect_url.indexOf('=') + 1);

		if ($token.value) $form.submit()
	}
}

export default new regForm
