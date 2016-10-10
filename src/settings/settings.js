'use strict'

const debug = window.debug('📄 settings')
import Api from '../_components/api/api.js'

export default class Settings {
	constructor() {
		this.session_id = location.hash.slice(1)
		this.$form = document.querySelector('.js-settings-form')
		this.$email = this.$form.querySelector('[name=email]')

		this.$timeSelect = this.$form.querySelector('.js-time')
		this.$timeZoneSelect = this.$form.querySelector('.js-zone')

		this.init()
	}

	init() {
		debug('init')
		history.pushState({}, '', '/settings/');

		if (!this.session_id && !location.host.includes('localhost')) {
			alert(window.messages.settings.redirect)
			return location.href = "/"
		}

		this.$form.addEventListener('submit', this.formPrepare.bind(this), false)
	}

	formPrepare(e) {
		e.preventDefault()

		const requestObj = {
			"token": this.session_id,
			"user": {
				"time": this.timeCount(),
				"email": this.$email.value
			}
		}

		Api.updateUser(requestObj).then(({ user }) => {
			if (user.active) {
				alert(window.messages.settings.sucess)
				location.pathname = '/'
			} else location.pathname = '/confirm/'
		})
	}

	timeCount() {
		const time = +this.$timeSelect.value
		const zone = +this.$timeZoneSelect.value

		const finalTime = time - zone + ''
		const [hours, mins] = finalTime.split('.')

		if (mins == '5') return hours + '-' + 30
		return hours + '-' + '00'
	}
}
