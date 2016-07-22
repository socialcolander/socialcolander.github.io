'use strict'

const userLang = (navigator.language || navigator.userLanguage).slice(0, 2).toLowerCase()
const isRu = userLang == 'ru'

if (!localStorage.userWasHere) {
	localStorage.userWasHere = true

	if (isRu) location.pathname = '/ru' + location.pathname
	else location.pathname.replace('/ru/', '/')
}
