import '@babel/polyfill'
import Vue from 'vue'
import './plugins'
import router from './router'
import store from './store'
import App from './App.vue'
import axios from '@/http/axios'

Vue.prototype.$axios = axios;
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
      this.$store.dispatch('UPDATE_CATEGORY', this.$route.params.category);
      this.checkLogin();
    },
    checkLogin() {
      //检查是否存在session,判断是否登录状态,
      if(!this.$getCookie('.AspNet.ApplicationCookie')){ // 如果取不到 cookie 值则跳转到登陆页
        this.$router.push('/login');
      }
    }
  }
});

app.$mount('#app');
