'use strict'

class App {
	constructor() {
		console.log('New App 123');

		this.init()
	}

	async init() {
		require.ensure([], require => {
			const contacts = require('./contacts').default
			console.log('# contacts', contacts);
		})

		const resp = await fetch('http://localhost:2000/')
		console.log(`# resp`, resp)
	}
}

export default new App
