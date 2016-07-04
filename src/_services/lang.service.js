'use strict'

class LangRedirect {
	constructor() {
		this.lang = (window.navigator.userLanguage || window.navigator.language).slice(0, 2)
		this.isRuPage = location.pathname.includes('/ru/')

		this.redirect()
	}

	redirect() {
		// only first time
		if (sessionStorage.getItem('sc:arleady_was_here') == 'true') return
		if (!this.lang) return
		sessionStorage.setItem('sc:arleady_was_here', true)

		// redirect to ru url
		if (this.lang.includes('ru') || this.lang.includes('uk')) {
			if (this.isRuPage) return
			location.pathname = '/ru' + location.pathname
		} else {
			if (!this.isRuPage) return
			location.pathname = location.pathname.replace('/ru/', '/')
		}
	}
}

export default new LangRedirect
