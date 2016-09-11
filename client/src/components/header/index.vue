<script>
	import { searchRepos } from '../../vuex/actions';
	import { getAvatarUrl } from '../../vuex/getters';
	import loginDialog from './loginDialog';

	export default {
		data() {
			return {
				search: '',
				dialog: false
			}
		},
		methods: {
			showDialog() {
				this.dialog = true;
			},

			doSearch() {
				this.searchRepos({repo: this.search});
			}
		},
		components: {
			loginDialog
		},
		vuex: {
			actions: {
				searchRepos
			},
			getters: {
				avatar_url: getAvatarUrl
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
					<input
						v-model="search" 
						@keyup.enter="doSearch"
						type="search" 
						name="search" 
						placeholder="输入仓库名字"
					>
				</div>
			</div>
			<div v-if="!avatar_url" class="h_login">
				<span class="login_button" @click="showDialog">登录</span>
			</div>
			<div v-if="avatar_url" class="h_avatar">
				<img :src="avatar_url">
			</div>
		</div>
		<login-dialog v-if="dialog" :dialog.sync="dialog"></login-dialog>
	</div>
</template>

<style lang="less" scoped>
	.header {
		height: 50px;
		background-color: #f1f1f1;
		border-bottom: 1px #e0e0e0 solid;
		.container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		.h_title {
			line-height: 50px;
			margin-right: 10px;
			font-size: 16px;
		}
		.h_search {
			flex: 1;
			margin-right: 10px;
			input {
				width: 300px;
				height: 30px;
				line-height: 30px;
				padding: 0 3px;
				font-size: 14px;
				border: 1px #e0e0e0 solid;
				border-radius: 3px;
				outline: none;
			}
		}
		.login_button {
			cursor: pointer;
		}
		.h_avatar {
	    display: block;
	    width: 40px;
	    height: 40px;
	    border-radius: 20px;
	    overflow: hidden;
	    cursor: pointer;
		}
	}
</style>