'use strict'

import 'services/helpers'
import loadFont from 'services/font_loader'
import fieldsSync from 'services/saveInStorage.service'

class App {
	constructor() {
		this.init()
	}

	init() {
		this.initRoutes()

		loadFont('pt_serif_and_sans', '/assets/fonts/webfont');
		fieldsSync()
	}

	initRoutes() {
		const path = location.pathname.slice(1, -1) || "home"
		this.loadPage(path)
	}

	loadPage(page) {
		System.import(`pages/${page}/index.js`)
			.then((comp) => new comp.default)
			.catch(e => console.info(e))
	}
}

export default new App
