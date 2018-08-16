<template>
  <div class="sv-erro-alert">
    <v-dialog
      v-model="error"
      width="500"
    >
      <v-card>
        <v-card-title class="headline">Error</v-card-title>
        <v-card-text>{{msg}}</v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'sv-error-alert',
    data() {
      return {

      }
    },
    computed: {
      error: {
        set(val) {
          if(val === false){
            this.$store.dispatch('CLOSE_ERROR', '');
          }
        },
        get() {
          return this.$store.getters.error;
        }
      },
      msg() {
        return this.$store.getters.msg;
      }
    }
  }
</script>
