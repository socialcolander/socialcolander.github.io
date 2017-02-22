'use strict'

const logger = window.debug('⬇️ scoll down')

import './index.styl'
import html from './index.html'
import { getPercentScroll } from 'services/scroll_helpers'

class Arrow {
	constructor(el) {
		this.$el = document.querySelector(el)
		this.mount()
		this.listeners()
	}

	mount() {
		logger('mount')
		this.$el.innerHTML = html
		this.$svg = this.$el.querySelector('svg')
	}

	listeners() {
		logger('listeners')

		this.onScroll()
		window.addEventListener('scroll', this.onScroll.bind(this), false)
	}

	onScroll() {
		if (this.isInvisible()) return
		this.$el.style.opacity = 1 - getPercentScroll()
	}

	isInvisible() {
		return window.getComputedStyle(this.$svg, null).getPropertyValue('display') === 'none'
	}
}


export default Arrow
