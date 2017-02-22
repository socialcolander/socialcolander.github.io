'use strict'

const logger = window.debug('⬇️ scoll down')

import './index.styl'
import html from './index.html'

class Arrow {
	constructor(el) {
		this.$el = document.querySelector(el)
		this.mount()
	}

	mount() {
		logger('mount')
		this.$el.innerHTML = html
		this.$svg = this.$el.querySelector('svg')
		this.listeners()
	}

	listeners() {
		logger('listeners')
		window.addEventListener('scroll', this.onScroll.bind(this), false)
	}

	onScroll() {
		this.$el.style.opacity = 0
	}
}


export default Arrow
