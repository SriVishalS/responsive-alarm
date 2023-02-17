module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,html,js,json,wav,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};