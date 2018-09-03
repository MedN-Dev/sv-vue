
import { Account } from '@/http/api.js'
import axios from '@/http/axios'

export default {
  state: {
    userInfo: {
      nick: null,
      userName: null,
      companyName: null,
    }
  },
  getters: {
    nick: state => state.userInfo.nick,
    userName: state => state.userInfo.userName,
    companyName: state => state.userInfo.companyName,
  },
  mutations: {
    updateUserInfo(state, { userName, nickName, companyName }) {
      state.userInfo.nick = nickName;
      state.userInfo.userName = userName;
      state.userInfo.companyName = companyName;
    }
  },
  actions: {
    FETCH_USERINFO({ commit }) {
      axios.get(`${Account.UserInfo}`)
      .then((res) => {
          if(res.code === 0){
            commit('updateUserInfo', res.data);
          }else{
            this.passError = res.Message;
            this.alert = true;
          }
      });
    }
  }
}