<template>
    <!-- 多项目 -->
    <div class="sv-project-multi">
      <!-- 内容区域 -->
      <v-content>
        <router-view/>
      </v-content>
      <!-- 底部路由菜单 -->
      <sv-bottom-nav></sv-bottom-nav>
    </div>
</template>

<script>
import SVBottomNav from '../layout/BottomNav.vue'; // 底部导航路由菜单

export default {
    name: 'sv-multi-project',
    data() {
        return {

        }
    },
    components: {
        'sv-bottom-nav': SVBottomNav
    }
}
</script>