<script>
	export default {
		data() {
			return {
				search: ''
			}
		},
		methods: {
			login() {

			}
		}
	}
</script>

<template>
	<div class="header">
		<div class="container">
			<div class="h_title">treesFetcher</div>
			<div class="h_search">
				<div class="input">
					<input v-model="search" type="search" name="search" placeholder="输入仓库名字">
				</div>
				<div class="hint">
					
				</div>
			</div>
			<div class="h_login">
				<span class="login_button" @:click="login">登录</span>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.header {
		width: 100%;
		height: 50px;
		background-color: #f1f1f1;
		.container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.h_title {
			flex: 1;
			line-height: 50px;
		}
	}
</style>