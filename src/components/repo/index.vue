<script>
	import { searchRepos } from '../../vuex/actions';
	import { getReposList, getReposTotalCount, getAccessToken } from '../../vuex/getters';
	export default {
		data() {
			return {
				curPage: 1,
				query: ''
			}
		},
		vuex: {
			actions: {
				searchRepos
			},
			getters: {
				repos_count: getReposTotalCount,
				repos: getReposList,
				access_token: getAccessToken
			}
		},
		route: {
			data(transition) {
				this.curPage = Number(transition.to.query.p);
				this.query = transition.to.query.q;
				this.searchRepos(this.access_token, {repo: this.query, page: this.curPage});
				window.scrollTo(0, 0);
				transition.next();
			}
		}
	}
</script>

<template>
	<div class="repo_result">
		<div class="container">
			<div v-if="repos" class="repo_search_result">
				<div class="page_tip">当前第{{ curPage }}页</div>
				<div class="repo_search_title">搜索到的仓库，总共{{ repos_count }}个</div>
				<ul class="repo_list">
					<li class="repo_item" v-for="repo in repos">
						<div class="repo_stats">
							<span class="repo_lang">{{ repo.language }}</span>
							<span>star-{{ repo.stargazers_count }}</span>
							<span>fork-{{ repo.forks_count }}</span>
						</div>
						<a class="repo_name" v-link="{ path: '/repos/' + repo.owner.login + '/' + repo.name + '/branches' }">{{ repo.full_name}}</a>
						<div class="repo_description">{{ repo.description || '这个家伙没写介绍' }}</div>
						<!-- <div class="repo_meta">更新于3天前</div> -->
					</li>
				</ul>
				<ul class="pagination">
					<li v-if="curPage > 1">
						<a class="page_item" v-link="{ path: `/search/repositories?q=${this.query}&p=1` }">首页</a>
					</li>
					<li v-if="curPage > 1">
						<a class="page_item" v-link="{ path: `/search/repositories?q=${this.query}&p=${this.curPage - 1}` }">上一页</a>
					</li>
					<li v-if="curPage < parseInt(repos_count/30) + 1">
						<a class="page_item" v-link="{ path: `/search/repositories?q=${this.query}&p=${this.curPage + 1}` }">下一页</a>
					</li>
					<li v-if="curPage < parseInt(repos_count/30) + 1">
						<a class="page_item" v-link="{ path: `/search/repositories?q=${this.query}&p=${parseInt(this.repos_count/30) + 1}` }">第{{ parseInt(repos_count/30) + 1 }}页</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
	.repo_result {
		margin-top: 15px;
		.page_tip {
	    float: right;
    	line-height: 40px;
		}
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
    		color: #06c;
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
		.pagination {
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    margin: 20px 0;
	    .page_item {
	    	display: block;
	    	width: 50px;
	    	height: 30px;
	    	line-height: 30px;
	    	text-align: center;
	    	font-size: 14px;
	    	color: #333;
	    }
		}
	}
</style>