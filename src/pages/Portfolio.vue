<template>
  <div class="sv-page-profolio">
    <h3>Profolio page</h3>
    <router-link to="/project/wj871287/summary">项目ID:wj871287</router-link>
    <!-- <v-btn color="primary" :click="logout">Logout</v-btn> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      logout() {
        this.$deleteCookie('sv_login_session');
      }
    }
  }
</script>

