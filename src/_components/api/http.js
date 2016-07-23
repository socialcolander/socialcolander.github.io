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
	alert(msg)
}

function parseJSON(response) {
	return response.json()
}

export default function() {
	debug('fetch', arguments)

	return fetch.apply(null, arguments)
		.then(checkStatus, networkError)
		.then(parseJSON)
}
