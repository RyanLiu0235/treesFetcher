<script>
	import { fetchBranches } from '../../vuex/actions';
	import { getAccessToken, getBranches } from '../../vuex/getters';

	export default {
		data() {
			return {
				select: false,
				owner: '',
				repo: '',
				curBranch: 'master'
			}
		},
		methods: {
			stretch() {
				this.select = !this.select;
			},
			changeBranch(e) {
				this.curBranch = e.target.attributes['data-name'].value;
			}
		},
		vuex: {
			actions: {
				fetchBranches
			},
			getters: {
				access_token: getAccessToken,
				branches: getBranches
			}
		},
		created() {
			this.owner = this.$route.params.owner;
			this.repo = this.$route.params.repo;

			this.fetchBranches(this.access_token, {
				owner: this.owner,
				repo: this.repo
			});
		}
	}
</script>

<template>
	<div class="c_header">
		<div class="branch_button">
			<div class="branch_select" @click="stretch">
				<div>branch:</div>
				<div class="branch_current">
					<span>{{ curBranch }}</span>
					<i class="iconfont" :class="select ? 'icon-drop_up' : 'icon-drop_down'"></i>
				</div>
			</div>
			<div class="branch_list" v-show="select">
				<div class="branch_title">
					<span>选择branch</span>
					<i class="iconfont icon-close" @click="stretch"></i>
				</div>
				<ul>
					<li v-for="branch in branches">
						<a 
							v-link="{ path: '/repos/' + owner + '/' + repo + '/commits?sha=' + branch.commit.sha}"
							@click="changeBranch"
							:data-name="branch.name"
						>{{ branch.name }}</a>
						<i class="iconfont icon-right" v-if="branch.name == curBranch"></i>
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
			max-width: 200px;
			height: 30px;
			line-height: 30px;
			padding: 0 5px;
			font-size: 14px;
			color: #666;
			border: 1px #000 solid;
			border-radius: 2px;
			background-color: #efefef;
			cursor: pointer;
			.branch_current {
				height: 30px;
				margin-left: 7px;
				color: #333;
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
					display: flex;
					line-height: 32px;
					padding: 0 5px;
					font-size: 13px;
					color: #666;
					border-top: 1px #e0e0e0 solid;
					background-color: #f9f9f9;
					&:hover {
						background-color: darken(#f9f9f9, 5%);
					}
					a {
						display: block;
						flex: 1;
					}
					i {
						display: block;
					}
				}
			}
		}
	}
</style>