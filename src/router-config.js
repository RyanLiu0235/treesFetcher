export function routerConfig(router) {
	router.map({
		'/': {
			component: (resolve) => require(['./components/welcome'], resolve)
		},
		'/search/repositories': {
			component: (resolve) => require(['./components/search'], resolve)
		},
		'/:owner/:repo': {
			component: (resolve) => require(['./components/repo'], resolve)
		}
	});
}