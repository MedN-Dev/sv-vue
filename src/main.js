import '@babel/polyfill'
import Vue from 'vue'
import './plugins/index'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/**
 * 设置cookie
 * @param {String} name 默认为 session
 * @param {String} value 从后端获取的 session 值
 * @param {Number} expiredays 过期时间
 */
Vue.prototype.setCookie = function(name, value, expiredays) {
  let exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

/**
 * 获取cookie
 * @param {String} name 默认为 session
 */
Vue.prototype.getCookie = function(name) {
  let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  let arr = document.cookie.match(reg); 
  if(arr){
    return (arr[2]);
  }else{
    return null;
  }
}
/**
 * 删除cookie
 * @param {String} name 默认为 session
 */
Vue.prototype.deleteCookie = function(name) {
  let exp = new Date();
  exp.setTime(exp.getTime() - 1);
  let cval = this.getCookie(name);
  if (cval != null)
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
}

let app = new Vue({
  router,
  store,
  render: h => h(App),
  watch:{
    "$route" : 'checkLogin'
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      //检查是否存在session,判断是否登录状态,
      if(!this.getCookie('session')){ // 如果取不到 cookie 值则跳转到登陆页
        this.$router.push('/login');
      }
    }
  }
});



app.$mount('#app');
