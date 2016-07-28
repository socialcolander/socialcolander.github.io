'use strict'

import http from './http.js'

const debug = window.debug('🌏 api')
const path = 'https://api.socialcolander.net/api/v1/'

class Api {
	constructor() {}

	updateUser(data) {
		debug('login')
		return http(`${path}user`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
	}
}

export default new Api
