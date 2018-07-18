<template>
    <!-- 单项目 -->
    <div class="sv-project-single">
      <!-- 内容区域 -->
      <v-content>
        <router-view/>
      </v-content>
      <!-- 底部路由菜单 -->
      <sv-bottom-nav-single :id="id"></sv-bottom-nav-single>
    </div>
</template>

<script>
import SVBottomNavSingle from '../layout/BottomNavSingle.vue'; // 底部导航路由菜单

export default {
    name: 'sv-single-project',
    props: ['id'],
    data() {
        return {

        }
    },
    components: {
        'sv-bottom-nav-single': SVBottomNavSingle
    }
}
</script>