<script>
	import vHeader from './header';

	export default {
		data() {
			return {
				default_branch: ''
			}
		}.
		components: {
			vHeader
		},
		route: {
			data(transition) {
				this.default_branch = transition.to.params.default_branch;
			}
		}
	}
</script>

<template>
	<div class="container">
		<v-header :default-branch="default_branch"></v-header>
		<div></div>
	</div>
</template>

<style lang="less" scoped>
	
</style>