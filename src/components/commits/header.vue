<script>
	export default {
		data() {
			return {
				select: false
			}
		},
		methods: {
			stretch() {
				this.select = !this.select;
			}
		}
	}
</script>

<template>
	<div class="c_header">
		<div class="branch_button">
			<div class="branch_select" @click="stretch">
				<div>branch:</div>
				<div class="branch_current">
					<span>master</span>
					<i class="iconfont" :class="select ? 'icon-drop_up' : 'icon-drop_down'"></i>
				</div>
			</div>
			<div class="branch_list" v-show="select">
				<div class="branch_title">
					<span>选择branch</span>
					<i class="iconfont icon-close" @click="stretch"></i>
				</div>
				<ul>
					<li>
						<a v-link="{ path: '/repos/vuejs/vue/commits?sha'}">branch 00</a>
					</li>
					<li>
						<a v-link="{ path: '/repos/vuejs/vue/commits?sha'}">branch 01</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.c_header {
		margin-top: 20px;
		.branch_button {
			position: relative;
		}
		.branch_select {
			display: inline-flex;
			align-items: center;
    	justify-content: space-between;
			maxwidth: 200px;
			height: 30px;
			line-height: 30px;
			padding: 0 5px;
			font-size: 14px;
			color: #333;
			border: 1px #000 solid;
			border-radius: 2px;
			background-color: #efefef;
			cursor: pointer;
			.branch_current {
				height: 30px;
				margin-left: 4px;
			}
		}
		.branch_list {
			position: absolute;
			top: 35px;
			left: 0;
			width: 180px;
			border: 1px #e1e1e1 solid;
			border-radius: 2px;
			.branch_title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				line-height: 30px;
				padding: 0 5px;
				span {
					display: block;
					flex: 1;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
				}
				i {
					display: block;
					width: 30px;
					height: 30px;
					text-align: center;
					cursor: pointer;
				}
			}
			ul {
				li {
					line-height: 32px;
					padding: 0 5px;
					font-size: 13px;
					color: #666;
					border-bottom: 1px #efefef solid;
					background-color: #f9f9f9;
					&:last-of-type {
						border-bottom: none;
					}
					&:hover {
						background-color: darken(#f9f9f9, 5%);
					}
					a {
						display: block;
					}
				}
			}
		}
	}
</style>