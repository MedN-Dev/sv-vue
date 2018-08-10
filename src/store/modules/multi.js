import { Collection } from '@/http/api'
import axios from '@/http/axios'

export default {
  state: {
    category: '', // 当前选中tab
    topBar:[], // 顶部菜单
  },
  getters: {
    category: state => state.category,
  },
  mutations: {
    updateTopBar(state, topBar) {
      state.topBar = topBar.map((item) => {
        return { id: item.sequence, name: item.id, text: item.name };
      });
    },
    setCategory(state, category) {
      state.category = category;
    }
  },
  actions: {
    // 发起请求获取顶部菜单
    FETCH_TOPBAR ({ commit }) {
      axios.get(Collection.List, {})
        .then((res)=>{
          if(res.code === 0){
            commit('updateTopBar', res.data);
          }
        });
    },
    // 更新当前 tabs 分类
    UPDATE_CATEGORY ({ commit }, category) {
      commit('setCategory', category);
    }
  }
}