'use strict'

import 'components/registration'
import ScrollArrow from 'components/scroll_down_arrow'

const debug = window.debug('📄 home')

export default class Home {
	constructor() {
		debug('init')

		new ScrollArrow('.js-scroll-arrow')
	}
}
