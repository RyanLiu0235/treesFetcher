<script>
	import { getReposList, getReposTotalCount } from '../../vuex/getters';
	export default {
		vuex: {
			getters: {
				repos_count: getReposTotalCount,
				repos: getReposList
			}
		}
	}
</script>

<template>
	<div class="repo_result">
		<div class="container">
			<div v-if="repos" class="repo_search_result">
				<div class="repo_search_title">搜索到的仓库，总共{{ repos_count }}个</div>
				<ul class="repo_list" v-for="repo in repos">
					<li class="repo_item">
						<div class="repo_stats">
							<span class="repo_lang">{{ repo.language }}</span>
							<span>star-{{ repo.stargazers_count }}</span>
							<span>fork-{{ repo.forks_count }}</span>
						</div>
						<a class="repo_name" v-link="{ path: '/repos/' + repo.owner.login + '/' + repo.name + '/branches' }">{{ repo.full_name}}</a>
						<div class="repo_description">{{ repo.description }}</div>
						<!-- <div class="repo_meta">更新于3天前</div> -->
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.repo_result {
		margin-top: 15px;
		.repo_search_title {
			line-height: 40px;
			font-size: 16px;
			color: #333;
			border-bottom: 1px #e0e0e0 solid;
		}
		.repo_item {
			padding: 20px 0;
			border-bottom: 1px #e0e0e0 solid;
			.repo_stats {
		    float: right;
		    line-height: 20px;
		    font-size: 14px;
		    .repo_lang {
		    	font-weight: bold;
		    }
			}
			.repo_name {
    		line-height: 20px;
    		font-size: 18px;
			}	
			.repo_description {
		    line-height: 20px;
		    margin: 10px 200px 0 0 ;
		    color: #666;
			}
			.repo_meta {
				line-height: 18px;
				margin-top: 10px;
				font-size: 12px;
				color: #888;
			}
		}
	}
</style>