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

    }
  },
}
</script>

<style>
.application{
  background: #1f212d !important;
}
</style>

