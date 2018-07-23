<template>
  <div class="sv-page-summary">
    <!-- 项目分类tabs -->
    <!-- <sv-projectTabs></sv-projectTabs> -->
    <h3>Awesome Summary</h3>
    <sv-highCharts></sv-highCharts>
    <h3>Awesome Summary</h3>
    <sv-newsList></sv-newsList>
  </div>
</template>

<script>
import SVNewsList from '../components/NewsList.vue'
import SVHighCharts from '../components/common/HighCharts.vue'

export default {
  components: {
    'sv-newsList': SVNewsList,
    'sv-highCharts': SVHighCharts
  }
}
</script>

<style>
.sv-page-summary{
  display: inline;
  text-align: center;
}
</style>



