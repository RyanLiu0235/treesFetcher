import * as types from './mutations';
import Vue from 'vue';

/**
 * 搜索仓库
 */
export const searchRepos = ({ dispatch }, query) => {
	return Vue.http.get(`http://localhost:4000/search/repositories/?q=${query.repo}`)
		.then(res => {
			dispatch(types.SEARCH_REPOS, res.data);
		})
		.catch(res => {
			console.error(res);
		});
}