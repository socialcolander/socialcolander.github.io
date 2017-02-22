'use strict'

import http from './http.js'

const debug = window.debug('🌏 api')
const path = 'https://api.socialcolander.net/api/v1/'
const httpHeaders = {
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
}

class Api {
	constructor() {}

	updateUser(data) {
		debug('updateUser', data)

		return http(`${path}user`, {
			method: 'POST',
			body: JSON.stringify(data),
			...httpHeaders
		})
	}

	activateUser(data) {
		debug('activateUser', data)

		return http(`${path}user/subscription/${data.token}`, {
			method: 'POST',
			...httpHeaders
		})
	}
}

export default new Api
