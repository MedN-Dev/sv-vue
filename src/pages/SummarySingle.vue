<template>
  <div class="sv-page-summarySingle">
    <h3>SummarySingle page</h3>
    <p>项目id：{{id}}</p>
    <sv-newsList></sv-newsList>
    <sv-newsList></sv-newsList>
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



