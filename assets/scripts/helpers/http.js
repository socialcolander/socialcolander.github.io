'use strict'

const networkError = msg => console.log('Networ Error', msg)
const checkStatus = response => {
	if (response.status >= 200 && response.status < 400) {
		return response
	} else {
		var error = new Error(response.statusText)
		error.response = response
		throw error
	}
}

export default function() {
	return fetch.apply(null, arguments)
		.then(checkStatus, networkError)
		.then(r => r.json())
}
