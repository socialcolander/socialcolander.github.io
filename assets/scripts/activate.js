'use strict'

import API from './helpers/api'
import infoMessage from './helpers/infoMessage'

const TOKEN = location.search.slice(7)

if (!TOKEN) {
	location.href = "/"
	throw `You have no token in url`
}

const messageLoadingEl = document.querySelector('.js-loading-msg')

API(`user/subscription/${TOKEN}`, `get`)
	.then(() => infoMessage({ name: 'success', hideAfter: false }))
	.catch(() => infoMessage({ name: 'error', hideAfter: false }))
	.then(() => messageLoadingEl.style.display = 'none')
