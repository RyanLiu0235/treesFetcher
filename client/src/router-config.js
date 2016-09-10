export function routerConfig(router) {
	router.map({
		'/:owner/:repo/tree/:sha': {
			component: (resolve) => require(['./components/tree'], resolve)
		}
	})
}