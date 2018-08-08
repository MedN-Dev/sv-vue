<template>
    <!-- 多项目 -->
    <div class="sv-project-multi">
      <!-- 顶部菜单 -->
      <sv-top-nav></sv-top-nav>
      <!-- 多项目内容区域 -->
      <v-content color="sv_purple_dark">
        <router-view/>
      </v-content>
      <!-- 底部路由菜单 -->
      <sv-bottom-nav></sv-bottom-nav>
    </div>
</template>

<script>
import SVTopNav from './TopNav.vue';
import SVBottomNav from './BottomNav.vue'; // 底部导航路由菜单

/**
 * 动态路由决策-根据底部和上部拼接路由url
 */
export default {
    name: 'sv-multi-project',
    data() {
        return {
            
        }
    },
    components: {
        'sv-bottom-nav': SVBottomNav,
        'sv-top-nav': SVTopNav,
    },
    mounted() {
        //获取顶部菜单
        this.$store.dispatch('FETCH_TOPBAR');
    }
}
</script>