'use strict'

const debug = window.debug('📄 activate')
import Api from '../_components/api/api.js'

export default class Settings {
	constructor() {
		this.token = location.search.slice(7)
		this.message_success = document.querySelector('.js-success')
		this.message_error = document.querySelector('.js-error')

		this.init()
	}

	init() {
		debug('init', this.token)

		if (!this.token) {
			if (window.messages.activate.redirect)
				alert(window.messages.activate.redirect)

			if (!location.host.includes('localhost'))
				location.href = "/"
		} else {
			this.requestUserActivate()
		}
	}

	requestUserActivate() {
		Api.activateUser({ token: this.token })
		.then(({ success }) => {
			if (success) this.message_success.removeAttribute('hidden')
		})
		.catch(() => {
			this.message_error.removeAttribute('hidden')
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
