'use strict'

import './_services/helpers'
import './_services/lang.service'
import fieldsSync from './_services/saveInStorage.service'

import Home from './_root/home'
import Settings from './settings/settings'
import Activate from './activate/activate'

class App {
	constructor() {
		this.init()
	}

	init() {
		const path = location.pathname.replace('/ru/', '/')

		if (path == '/') new Home()
		if (path == '/settings/') new Settings()
		if (path.indexOf('/activate/') !== -1) new Activate()

		console.log(`# fieldsSync`, fieldsSync)
		fieldsSync()
	}
}

export default new App
