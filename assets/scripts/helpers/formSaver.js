'use strict'

const save = form => {
	const fields = Array.from(form.querySelectorAll('input'))
	fields.forEach(input => {
		localStorage[input.name] = input.value
	})
}

const restore = form => {
	const fields = Array.from(form.querySelectorAll('input'))
	fields.forEach(input => {
		const val = localStorage[input.name]
		if (val == undefined) return
		input.value = val
	})
}

export default { save, restore }
