import { Collection } from '@/http/api'
import axios from '@/http/axios'

export default {
  state: {
    category: '100',
    colletion: []
  },
  getters: {
    colletion: state => state.colletion,
    category: state => state.category
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
    updateCollection ({ commit }) {
      return new Promise((resolve) => {
        axios.get(Collection.List, {})
          .then((res)=>{
            commit('PROJECTS_CATEGORY', res.data);
            resolve(res.data);
          });
      })
    },
    updateCategory ({ commit }, category) {
      commit('ACTIVE_CATEGORY', category)
    }
  }
}