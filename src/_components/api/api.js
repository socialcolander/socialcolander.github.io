'use strict'

import http from './http.js'

const debug = window.debug('🌏 api')
const path = 'https://api.socialcolander.net/api/v1/'

class Api {
	constructor() {}


	login() {
		debug('login')
		return http(`${path}user/login`)
	}

	formSubmit(e) {
		const $form = e.target
	}
}

export default new Api
