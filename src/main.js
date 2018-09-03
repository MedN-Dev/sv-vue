import '@babel/polyfill'
import Vue from 'vue'
import './plugins'
import router from './router'
import store from './store'
import App from './App.vue'
import axios from '@/http/axios'
import _ from 'lodash'

Vue.prototype.$axios = axios;
Vue.prototype.$_ = _;
Vue.config.productionTip = false;

var app = new Vue({
  router,
  store,
  render: h => h(App),
  watch:{
    "$route" : 'updateRouter'
  },
  created() {
    this.updateRouter();
  },
  methods: {
    updateRouter() {
      //监听catagory改变并存入vuex
      this.$store.dispatch('UPDATE_CATEGORY', this.$route.params.category);
    },
  }
});

app.$mount('#app');
