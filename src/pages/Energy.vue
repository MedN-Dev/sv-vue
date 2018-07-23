<template>
  <div class="sv-page-energy">
    <h3>页面：Energy page </h3>
    <h3>类别: {{category}}</h3>
    <sv-skeletonScreen></sv-skeletonScreen>
  </div>
</template>
<script>
  import SVSkeletonScreen from '../components/common/SkeletonScreen.vue'
  export default {
    props: ['category'],
    components: {
      'sv-skeletonScreen': SVSkeletonScreen
    }
  }
</script>
<style>

</style>