export const getScrollTopPos = () => {
	return window.pageYOffset || document.documentElement.scrollTop;
}

export const getDocHeight = () => {
	return Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight)
}

export const getPercentScroll = () => {
	return getScrollTopPos()/(getDocHeight() - window.innerHeight)
}
