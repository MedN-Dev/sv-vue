import '@babel/polyfill'
import Vue from 'vue'
import './plugins/index'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let app = new Vue({
  router,
  store,
  render: h => h(App),
  // watch:{
  //   "$route" : 'checkLogin'
  // },
  created() {
    // this.checkLogin();
  },
  methods: {
    checkLogin() {
      //检查是否存在session,判断是否登录状态,
      if(!this.$getCookie('sv_login_session')){ // 如果取不到 cookie 值则跳转到登陆页
        this.$router.push('/login');
      }
    }
  }
});

app.$mount('#app');
