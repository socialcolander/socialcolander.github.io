'use strict'

import api from './api'

const getTimeoutTime = (now, oldTime, delay) => {
	const diff = delay - (now - oldTime)
	return diff < 0 ? 0 : diff
}

const callApi = ({ url, method, data, delay = 500 }) => {
	const oldTime = Date.now()
	const resp = api(url, method, data)

	return new Promise((res, rej) => {
		resp
			.then((...args) => {
				const time = getTimeoutTime(Date.now(), oldTime, delay)
				console.log(`# args`, args)
				setTimeout(() => res(args), time)
			})
			.catch((...args) => {
				const time = getTimeoutTime(Date.now(), oldTime, delay)
				console.log(`# args`, args)
				setTimeout(() => rej(args), time)
			})
	})
}

export default callApi
