import { Collection } from '@/http/api'
import axios from '@/http/axios'

export default {
  state: {
    category: '100', // 当前选中tab
    colletion: [], // tab导航集合
  },
  getters: {
    colletion: state => state.colletion,
    category: state => state.category,
  },
  mutations: {
    PROJECTS_CATEGORY(state, colletion) {
      state.colletion = colletion;
    },
    ACTIVE_CATEGORY(state, category) {
      state.category = category;
    }
  },
  actions: {
    // 更新 tabs 导航
    updateCollection ({ commit }) {
      return new Promise((resolve) => {
        axios.get(Collection.List, {})
          .then((res)=>{
            commit('PROJECTS_CATEGORY', res.data);
            resolve(res.data);
          });
      })
    },
    // 更新当前 tabs 分类
    updateCategory ({ commit }, category) {
      commit('ACTIVE_CATEGORY', category);
    }
  }
}