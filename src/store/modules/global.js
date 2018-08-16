export default {
  state: {
    error: false,
    msg: ''
  },
  getters: {
    error: state => state.error,
    msg: state => state.msg,
  },
  mutations: {
    setErrorMsg(state, msg) {
      state.msg = msg;
    },
    setError(state, val) {
      state.error = val;
    }
  },
  actions: {
    CLOSE_ERROR ({ commit }, msg) {
      commit('setError', false);
      commit('setErrorMsg', msg);
    },
    OPPEN_ERROR ({ commit }, msg) {
      commit('setError', true);
      commit('setErrorMsg', msg);
    },
  }
}