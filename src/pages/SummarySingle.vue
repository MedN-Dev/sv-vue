<template>
  <div class="sv-page-summarySingle">
    <h3>SummarySingle page</h3>
    <a href="#/">返回</a>
    <p>项目id：{{id}}</p>
  </div>
</template>

<script>
import SVNewsList from '../components/NewsList.vue'

export default {
  props: ['id'],
  components: {
    'sv-newsList': SVNewsList
  }
}
</script>

<style>
.sv-page-summarySingle{
  display: inline;
  text-align: center;
}
</style>



