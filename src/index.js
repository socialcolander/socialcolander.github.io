'use strict'

import './_services/helpers.js'
import './_services/lang.service.js'
import './_components/registration/reg.js'

class App {
	constructor() {
		this.init()
	}

	async init() {
		require.ensure([], require => {
			const contacts = require('./contacts').default
		})

		// const resp = await fetch('http://localhost:2000/')
	}
}

export default new App
