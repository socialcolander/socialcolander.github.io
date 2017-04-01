'use strict'

import API from './helpers/api'
import formSaver from './helpers/formSaver'

class SettingsPage {
	constructor() {
		this.vars()
		this.init()
	}

	vars() {
		// this.token = location.hash.slice(1) || localStorage.token
		this.token = location.hash.slice(1)
		this.$form = document.querySelector('.js-settings-form')
		this.$email = this.$form.querySelector('[type=email]')
		this.$time = this.$form.querySelector('[type=time]')

		this.$activeSuccess = document.querySelector('.js-active-success')
		this.$inactiveSuccess = document.querySelector('.js-inactive-success')
		this.$error = document.querySelector('.js-error')
	}

	init() {
		this.checkTokenExist()
		this.hideToken()
		formSaver.restore(this.$form)

		if (ENV == 'dev') this.setDefaultTime()
		this.$form.addEventListener('submit', this.onFormSubmit.bind(this), false)
	}

	onFormSubmit(e) {
		e.preventDefault()

		formSaver.save(this.$form)

		const obj = {
			"token": this.token,
			"user": {
				"time": this.getTime(),
				"email": this.$email.value
			}
		}

		API(`user`, `post`, obj)
			.then(this.onUserSaved.bind(this))
			.catch(e => this.$error.removeAttribute('hidden'))
	}

	onUserSaved({ user }) {
		if (user.active) {
			this.$activeSuccess.removeAttribute('hidden')

			setTimeout(() => {
				this.$activeSuccess.setAttribute('hidden', 'hidden')
			}, 3000)
		} else {
			this.$inactiveSuccess.removeAttribute('hidden')

			setTimeout(() => {
				this.$inactiveSuccess.setAttribute('hidden', 'hidden')
			}, 3000)
		}
	}

	getTime() {
		const [hour, min] = this.$time.value.split(':')
		const offset = (new Date()).getTimezoneOffset()/60

		let newHour = +hour + offset
		if (newHour < 0) newHour = 24 + newHour
		if (newHour > 24) newHour = 24 - newHour

		return `${newHour}-${min}`
	}

	checkTokenExist() {
		if (!this.token) return location.href = '/'
		else localStorage.token = this.token
	}

	setDefaultTime() {
		const fiveMinute = 1000*60*2
		const newDate = new Date(Date.now() + fiveMinute)
		const h = this.addLeadingZero(newDate.getHours())
		const m = this.addLeadingZero(newDate.getMinutes())
		const formatted = h + ':' + m
		console.log(`# formatted`, formatted)
		this.$time.value = formatted
	}

	addLeadingZero(num) {
		return num < 10 ? '0' + num : num
	}

	hideToken() {
		history.pushState({}, '', location.pathname)
	}
}

new SettingsPage
