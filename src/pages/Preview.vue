<template>
  <div class="sv-preview" @click="goback()">
    <img :src="previewImg">
  </div>
</template>

<script>
  import SVIMG from '@/assets/sv-banner-1.png'
  export default {
    data() {
      return {
        previewImg: SVIMG
      }
    },
    mounted() {
      //this.previewImg = this.$route.query.src;
    },
    methods: {
      goback() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  .sv-preview{ height: 100%; padding-top: 60%; }
  .sv-preview img{ width: 100% }
</style>
