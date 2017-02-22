'use strict'

const logger = debug('🗑 save_in_storage')

function somethingToString(something = '') {
	return (something + '').replace(/\W/g, '_')
}

function elementToString(el) {
	const path = somethingToString(location.pathname)
	const cls = somethingToString(el.getAttribute('class'))
	const type = somethingToString(el.getAttribute('type'))
	const name = somethingToString(el.getAttribute('name'))

	return path + '+' + cls + '+' + type + '+' + name
}

function saveOrGetFromLS(name, value) {
	if (value === undefined) {
		logger('get', name, localStorage[name])
		return localStorage[name]
	}

	logger('set', name, value)
	localStorage[name] = value
}

function onChange() {
	const elPathName = elementToString(this)
	logger('onChange', elPathName, this.value)
	saveOrGetFromLS(elPathName, this.value)
}

export default function init() {
	const fields = document.querySelectorAll('input, select, textarea')

	fields.forEach(el => {
		const elSavedValue = saveOrGetFromLS(elementToString(el))
		if (elSavedValue) el.value = elSavedValue
		el.addEventListener('change', onChange, false)
	})
}
