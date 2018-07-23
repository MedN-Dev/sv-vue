import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    topNavIndex:  0,
    bottomNavIndex: 0,
    topNavRouter: [
        { id: 0, name: 'all', text: 'All', link: '/summary/all' },
        { id: 1, name: 'rj', text: 'RJ', link: '/summary/rj' },
        { id: 2, name: 'infra', text: 'Infra', link: '/summary/infra' },
        { id: 3, name: 'djb', text: '東急不', link: '/summary/djb' },
        { id: 4, name: 'favorite', text: 'Favorite', link: '/summary/favorite' },
    ],
    bottomNavRouter: [
        { id: 0, name: 'summary', text: 'summary', icon: 'home', link: '/summary/all' },
        { id: 1, name: 'energy', text: 'energy', icon: 'equalizer', link: '/energy/all' },
        { id: 2, name: 'event', text: 'event', icon: 'date_range', link: '/event/all' },
        { id: 3, name: 'portfolio', text: 'portfolio', icon: 'book', link: '/portfolio/all' },
    ],
}

export default new Vuex.Store({
    state: state,
    mutations: {
        updateTopNavIndex(state, index) {
            state.topNavIndex = index;
        },
        updateBottomNavIndex(state, index) {
            state.bottomNavIndex = index;
        },
        updateTopNavRouter(state, index) {
            var page = state.bottomNavRouter[index].name;
            state.topNavRouter = state.topNavRouter.map((item) => {
                return { id: item.id, name: item.name, text: item.text, link: `/${page}/${item.name}` };
            });
        },
        updateBottomNavRouter(state, index) {
            var category = state.topNavRouter[index].name;
            state.bottomNavRouter = state.bottomNavRouter.map((item) => {
                return { id: item.id, name: item.name, text: item.text, icon: item.icon, link: `/${item.name}/${category}` };
            });
        },
    },
    actions: {
        selectTopNav ({commit}, index) {
            commit('updateTopNavIndex', index);
            commit('updateBottomNavRouter', index); // 改变底部路由
        },
        selectBottomNav ({commit}, index) {
            commit('updateBottomNavIndex', index);
            commit('updateTopNavRouter', index); // 改变顶部路由
        },
    },
    getters: {

    },
})