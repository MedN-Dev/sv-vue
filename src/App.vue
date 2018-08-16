<template>
  <v-app dark>
    <!-- 单项目 or 多项目 or 登录 -->
    <router-view/>
    <!-- 异常统一处理 -->
    <sv-error-alert></sv-error-alert>
  </v-app>
</template>

<script>
import SVErrorAlert from '@/components/common/ErrorAlert'
export default {
  name: 'sv-app',
  components: {
    'sv-error-alert': SVErrorAlert
  },
  data () {
    return {

    }
  },
  mounted() {
    this.setUserInfo();
  },
  methods: {
    // 存储用户信息
    setUserInfo(){
      this.$store.dispatch('FETCH_USERINFO', {
        nick: 'Turkyden',
        ulevel: 26,
        uid: '10000',
        portrait: 'images/profile.png'
      });
    }
  }
}
</script>

<style>
.application{
  background: #1f212d !important;
}
</style>

