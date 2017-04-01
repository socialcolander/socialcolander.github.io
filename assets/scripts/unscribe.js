'use strict'

import API from './helpers/api'

const TOKEN = location.search.slice(7)

if (!TOKEN) {
	location.href = "/"
	throw `You have no token in url`
}

const messageSuccessEl = document.querySelector('.js-success')
const messageErrorEl = document.querySelector('.js-error')
const messageLoadingEl = document.querySelector('.js-loading-msg')

API(`user/subscription/${TOKEN}`, `delete`)
	.then(() => messageSuccessEl.removeAttribute('hidden'))
	.catch(() => messageErrorEl.removeAttribute('hidden'))
	.then(() => messageLoadingEl.style.display = 'none')
