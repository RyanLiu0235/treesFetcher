export function routerConfig(router) {
	router.map({
		'/': {
			component: (resolve) => require(['./components/repo'], resolve)
		}
	}, {
		'/:owner/:repo/tree/:sha': {
			component: (resolve) => require(['./components/tree'], resolve)
		}
	})
}