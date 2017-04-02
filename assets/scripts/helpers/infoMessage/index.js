'use strict'

import './index.css'

const SHOWING = `showing`
const SHOWED  = `showed`
const HIDING  = `hiding`

const animationOneTime = (el, fn) => {
	const onEnd = () => {
		el.removeEventListener("animationend", onEnd, false)
		fn()
	}
	el.addEventListener("animationend", onEnd, false)
}

const hide = el => {
	el.classList.remove(SHOWED)
	el.classList.add(HIDING)

	animationOneTime(el, () => {
		el.classList.remove(HIDING)
	})
}

const getElem = name => {
	const el = document.querySelector(`[info-message="${name}"]`)
	if (!el) throw new Error(`No element with name: «${name}»`)
	return el
}

const show = ({ name, time = 4000, hideAfter = true }) => {
	const el = getElem(name)

	el.classList.add(SHOWING)

	animationOneTime(el, () => {
		el.classList.remove(SHOWING)
		el.classList.add(SHOWED)

		if (hideAfter == false) return
		setTimeout(() => hide(el), time)
	})
}

export default show
