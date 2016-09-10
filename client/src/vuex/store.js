import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

import * as types from './mutations';

Vue.use(Vuex);
Vue.use(VueResource);

const state = {
	reposList: [],
	total_count: 0
}

const mutations = {
	[types.SEARCH_REPOS](state, data) {
		state.reposList = data.items;
		state.total_count = data.total_count;
	}
}

export default new Vuex.Store({
	state, mutations
});