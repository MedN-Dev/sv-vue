<template>
  <!-- 单項目 -->
  <div class="sv-project-single">
    <!-- 顶部菜单 -->
    <sv-top-nav-single></sv-top-nav-single>
    <!-- 内容区域 -->
    <v-content>
      <router-view/>
    </v-content>
    <!-- 底部路由菜单 -->
    <sv-bottom-nav-single></sv-bottom-nav-single>
  </div>
</template>

<script>
import SVTopNavSingle from './TopNavSingle.vue'
import SVBottomNavSingle from './BottomNavSingle.vue'
export default {
  name: 'sv-single-project',
  components: {
    'sv-bottom-nav-single': SVBottomNavSingle,
    'sv-top-nav-single': SVTopNavSingle,
  },
  data() {
    return {

    }
  }
}
</script>