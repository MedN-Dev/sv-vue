<template>
  <v-app dark>
    <!-- 顶部菜单 -->
    <sv-top-nav></sv-top-nav>
    <!-- 单项目 or 多项目 -->
    <router-view/>
  </v-app>
</template>

<script>
import SVTopNav from './layout/TopNav.vue';

export default {
  name: 'sv-app',
  data () {
    return {

    }
  },
  components: {
    'sv-top-nav': SVTopNav,
  }
}
</script>

<style>

</style>

