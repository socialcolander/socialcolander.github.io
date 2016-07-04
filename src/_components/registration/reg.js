'use strict'

const debug = window.debug('registration')

class regForm {
	constructor() {
		debug('constructor')
		this.forms = $$('.js-signup-form')
		this.loginBtns = $$('.js-signup-button')

		this.init()
	}

	init() {
		debug('init', this)

		this.loginBtns.forEach(btn => {
			btn.addEventListener('click', () => {
				btn.setAttribute('disabled', '')
				btn.parentElement
					.find('.js-loader')
					.removeAttribute('hidden')
			}, false)
		})
	}
}

export default new regForm
