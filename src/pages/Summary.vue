<template>
  <div class="sv-page-summary">
    <!-- 项目分类tabs -->
    <!-- <sv-projectTabs></sv-projectTabs> -->
    <h3>Awesome Summary</h3>
    <sv-newsList></sv-newsList>
    <h3>Awesome Summary</h3>
    <sv-newsList></sv-newsList>
  </div>
</template>

<script>
import SVNewsList from '../components/NewsList.vue'

export default {
  components: {
    'sv-newsList': SVNewsList,
  }
}
</script>

<style>
.sv-page-summary{
  display: inline;
  text-align: center;
}
</style>



