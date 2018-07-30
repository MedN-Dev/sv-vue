<template>
  <div class="sv-page-summary">
    <!-- 项目分类tabs -->
    <sv-dashboard></sv-dashboard>
    <sv-panel title="発電実績">
      <sv-highCharts></sv-highCharts>
    </sv-panel>
    <sv-panel title="Portfolio">
      <sv-newsList></sv-newsList>
    </sv-panel>
  </div>
</template>

<script>
import SVPanel from '@/components/common/Panel.vue'
import SVDashboard from '@/components/common/Dashboard.vue'
import SVNewsList from '@/components/NewsList.vue'
import SVHighCharts from '@/components/common/HighCharts.vue'

export default {
  components: {
    'sv-dashboard': SVDashboard,
    'sv-newsList': SVNewsList,
    'sv-highCharts': SVHighCharts,
    'sv-panel': SVPanel
  }
}
</script>

<style>
.sv-page-summary{
  display: inline;
  text-align: center;
}
</style>