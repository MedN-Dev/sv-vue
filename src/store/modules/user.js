export default {
  state: {
    userInfo: {
      nick: null,
      ulevel: null,
      uid: null,
      portrait: null
    }
  },
  getters: {
    nick: state => state.userInfo.nick,
    ulevel: state => state.userInfo.ulevel,
    uid: state => state.userInfo.uid,
    portrait: state => state.userInfo.portrait,
  },
  mutations: {
    updateUserInfo(state, { nick, ulevel, uid, portrait }) {
      state.userInfo.nick = nick;
      state.userInfo.ulevel = ulevel;
      state.userInfo.uid = uid;
      state.userInfo.portrait = portrait;
    }
  },
  actions: {
    FETCH_USERINFO ({ commit }, userInfo) {
      setTimeout(() => {
        commit('updateUserInfo', userInfo);
      }, 1000);
    }
  }
}