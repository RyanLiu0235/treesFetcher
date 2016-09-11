<script>
	import { login } from '../../vuex/actions';
	export default {
		props: ['dialog'],
		data() {
			return {
				accessToken: '',
				remember: false
			}
		},
		methods: {
			doLogin() {
				if (!this.accessToken) return;
				this.login(this.accessToken, this.remember)
					.then(res => {
						this.dialog = false;
					});
			},
			cancelLogin() {
				this.dialog = false;
			}
		},
		vuex: {
			actions: {
				login
			}
		}
	}
</script>

<template>
	<div class="dialog login">
		<div class="dialog_content">
			<div class="dialog_title">登录</div>
			<div class="dialog_main">
				<div class="form_label">请输入您github的access_token</div>
				<div class="form_control">
					<input v-model="accessToken" type="text" placeholder="access_token" />
				</div>
				<div class="form_control">
					<label>
						记住我：<input v-model="remember" type="checkbox" name="" />
					</label>
				</div>
				<div class="tip"><a href="https://help.github.com/articles/creating-an-access-token-for-command-line-use/" target="_blank">如何获取自己的access_token?</a></div>
				<div class="button_container">
					<span class="button btn_primary" @click="doLogin">确认</span>
					<span class="button btn_warning" @click="cancelLogin">取消</span>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.dialog {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 110;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		.dialog_content {
			position: fixed;
			top: 30%;
			left: 50%;
			z-index: 111;
			width: 360px;
			background-color: #fff;
			border: 1px #e0e0e0 solid;
			border-radius: 10px;
			transform: translate(-50%, -50%);
			.dialog_title {
				height: 40px;
				line-height: 40px;
				padding: 0 40px;
				font-size: 16px;
				color: #111;
				border-bottom: 1px #e0e0e0 solid;
			}
			.dialog_main {
				padding: 0 40px 20px;
				.form_label {
					margin-top: 20px;
					font-size: 14px;
					color: #333;
				}
				.form_control {
					margin-top: 10px;
					input[type="text"] {
						height: 30px;
				    width: 100%;
				    padding: 0 5px;
				    outline: none;
				    border: 1px #e0e0e0 solid;
				    border-radius: 4px;
					}
					input[type="checkbox"] {
						vertical-align: middle;
					}
				}
				.tip {
				  margin-top: 5px;
				  a {
				  	line-height: 18px;
				    font-size: 12px;
				    color: #06c;
				  }
				}
			}
		}
		.button_container {
			margin-top: 20px;
			font-size: 0;
			text-align: center;
			.button {
				display: inline-block;
				width: 80px;
				height: 30px;
				line-height: 30px;
				margin-right: 5px;
				text-align: center;
				font-size: 14px;
				cursor: pointer;
				transition: background-color .4s ease;
				&:last-of-type {
					margin-right: 0;
				}
				&.btn_primary {
					color: #fff;
					background-color: #5c5cf7;
					&:active {
						background-color: lighten(#5c5cf7, 10%);
					}
				}
				&.btn_warning {
					color: #fff;
					background-color: orange;
					&:active {
						background-color: lighten(orange, 10%);
					}
				}
			}
		}
	}
</style>