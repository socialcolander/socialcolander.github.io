'use strict'

import './_services/helpers'
import loadFont from './_services/font_loader'
import fieldsSync from './_services/saveInStorage.service'

import Home from './_root/home'
import Settings from './settings/settings'
import Activate from './activate/activate'

class App {
	constructor() {
		this.init()
	}

	redirectFromRu() {
		if (location.pathname.includes('/ru/')) {
			location.pathname.replace('/ru/', '/')
		}
	}

	init() {
		this.redirectFromRu()
		this.initRoutes()

		loadFont('pt_serif_and_sans', '/assets/fonts/webfont');
		fieldsSync()
	}

	initRoutes() {
		const path = location.pathname

		if (path == '/') new Home()
		if (path == '/settings/') new Settings()
		if (path.indexOf('/activate/') !== -1) new Activate()
	}
}

export default new App
