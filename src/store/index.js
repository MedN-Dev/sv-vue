import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import multi from './modules/multi'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    multi
  }
})