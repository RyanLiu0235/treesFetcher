<script>
	export default {
	}
</script>

<template>
	<div class="side_menu">
		<div class="repo_name">stop2stare/cnode-vue</div>
		<ul class="commit_record">
			<li>
				<a v-link="{ path: '/stop2stare/cnode-vue/tree/784358094953f4c58c08cb0a389a781c961d8867'}">删除首页无用的代码</a>
			</li>
			<li>
				<a v-link="{ path: '/stop2stare/cnode-vue/tree/5993714b2b29c3883b753e6cfc336dad95fe5d46'}">每5分钟检查一次未读消息</a>
			</li>
			<li>
				<a v-link="{ path: '/stop2stare/cnode-vue/tree/a09dc52f78d73a10006f8f0222428aab4d79fe54'}">webpack增加模块</a>
			</li>
		</ul>
	</div>
</template>

<style lang="less" scoped>
	.side_menu {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 260px;
    height: 100%;
    padding-top: 40px;
    background-color: #eee;
    border-right: 1px #e0e0e0 solid;
    box-sizing: border-box;
    .repo_name {
    	position: absolute;
    	top: 0;
    	left: 0;
    	height: 40px;
    	line-height: 40px;
    	padding: 0 10px;
    	font-size: 14px;
    	color: #333;
    	overflow: hidden;
    	white-space: nowrap;
    	text-overflow: ellipsis;
    }
    .commit_record {
    	height: 100%;
			overflow-y: scroll;
			background-color: #f5f5f5;
			li {
				a {
					display: block;
					line-height: 30px;
					padding: 0 10px;
					color: #06c;
				}
			}
    }
	}
</style>