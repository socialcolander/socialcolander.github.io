'use strict'

import http from './http'

const API_PATH = '/api/v1/'

const callApi = (url, method, data) => {
	return http(`${SERVER_URL}${API_PATH}${url}`, {
		method,
		body: JSON.stringify(data),
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
}

export default callApi
