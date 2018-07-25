<template>
  <v-app dark>
    <!-- 单项目 or 多项目 or 登录 -->
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'sv-app',
  data () {
    return {
      isLogin: false,
      userInfo: { //保存用户信息
        nick: null,
        ulevel: null,
        uid: null,
        portrait: null
      }
    }
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    //请求用户的一些信息
    getUserInfo(){
      //发送http请求获取，这里写死作演示
      this.userInfo = {
        nick: 'Doterlin',
        ulevel: 20,
        uid: '10000',
        portrait: 'images/profile.png'
      }
      //提交mutation到Store
      this.$store.commit('updateUserInfo', this.userInfo); 
    }
  }
}
</script>

<style>
.application{
  background: #1f212d !important;
}
</style>

