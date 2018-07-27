import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    domain:'http://test.example.com', // 保存后台请求的地址，修改时方便（比方说从测试服改成正式服域名）
    token: '9o22g_8TFh8uqsWa5C6W3Na3', // 数据接口安全监测
    userInfo: { // 保存用户信息
      nick: null,
      ulevel: null,
      uid: null,
      portrait: null
    }
}

export default new Vuex.Store({
    state: state,
    mutations: {
        //更新用户信息
        updateUserInfo(state, newUserInfo) {
            state.userInfo = newUserInfo;
        }
    },
    actions: {
    },
    getters: {

    },
})