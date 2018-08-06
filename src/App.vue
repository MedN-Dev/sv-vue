<template>
  <v-app dark>
    <!-- 单项目 or 多项目 or 登录 -->
    <router-view/>
  </v-app>
</template>

<script>
import { Collection } from '@/http/api'
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
    // this.getCollection();
  },
  methods: {
    //请求用户的一些信息
    async getUserInfo(){
      //发送http请求获取，这里写死作演示
      this.userInfo = {
        nick: 'Doterlin',
        ulevel: 20,
        uid: '10000',
        portrait: 'images/profile.png'
      }
      //提交mutation到Store
      this.$store.commit('updateUserInfo', this.userInfo); 
    },
    async getCollection() {
      const res = await this.$axios.get(Collection.List, {});
      this.$store.commit('updateCollection', res.data); 
    }
  }
}
</script>

<style>
.application{
  background: #1f212d !important;
}
</style>

