'use strict'

import http from './http.js'

const debug = window.debug('🌏 api')
const path = 'https://go2mike.ru/api/v1/'

class Api {
	constructor() {}


	login() {
		debug('login')

		http(`${path}login`).then(json => {
			console.log('# json', json)
		})

	}

	formSubmit(e) {
		const $form = e.target
	}
}

export default new Api
