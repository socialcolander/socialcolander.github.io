module.exports = {
	server: "dist",
	port: "2000",
	files: [
		"./dist/**/*.css",
		"./dist/**/*.js",
		"./dist/**/*.html"
	],
	reloadDelay: 0,
	snippetOptions: {
		async: true
	}
}
