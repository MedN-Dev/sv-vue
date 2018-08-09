<template>
    <!-- 单项目 -->
    <div class="sv-project-single">
      <!-- 顶部菜单 -->
      <sv-top-nav-single :text="projectName"></sv-top-nav-single>
      <!-- 内容区域 -->
      <v-content>
        <router-view/>
      </v-content>
      <!-- 底部路由菜单 -->
      <sv-bottom-nav-single></sv-bottom-nav-single>
    </div>
</template>

<script>
import SVTopNavSingle from './TopNavSingle.vue' // 頂部菜單
import SVBottomNavSingle from './BottomNavSingle.vue' // 底部导航路由菜单

export default {
    name: 'sv-single-project',
    data() {
        return {
            projectName: ''
        }
    },
    mounted() {
        this.projectName = this.$route.query.name;
    },
    components: {
        'sv-bottom-nav-single': SVBottomNavSingle,
        'sv-top-nav-single': SVTopNavSingle,
    }
}
</script>