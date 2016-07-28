'use strict'

import './_services/helpers'
import './_services/lang.service'

import Home from './_root/home'
import Settings from './settings/settings'

class App {
	constructor() {
		this.init()
	}

	init() {
		const path = location.pathname.replace('/ru/', '/')

		if (path == '/') new Home()
		if (path == '/settings/') new Settings()
	}
}

export default new App
