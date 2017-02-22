'use strict'

const debug = window.debug('🌏 http')

function checkStatus(response) {
	// debugger
	if (response.status >= 200 && response.status < 400) {
		return response
	} else {
		var error = new Error(response.statusText)
		error.response = response

		throw error
	}
}

function networkError(msg) {
	debug('Error', msg)
}

function parseJSON(response) {
	debug('response', response)
	const promise = response.json()
	promise.then(data => debug('responseJSON', data, JSON.stringify(data)))
	return promise
}

export default function() {
	debug('request', arguments)

	return fetch.apply(null, arguments)
		.then(checkStatus, networkError)
		.then(parseJSON)
}
