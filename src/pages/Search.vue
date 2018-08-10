<template>
  <div class="sv-search">
    <v-container class="sv-login-container" grid-list-md text-xs-center>
        <v-layout row wrap>
            <v-flex xs12>
              <v-form v-model="valid">
                <v-text-field
                    v-model="search"
                    :rules="searchRules"
                    clearable
                    required
                    @click="alert=false"
                    @focus="clearSearch()"
                ></v-text-field>
              </v-form>
              <h3>{{search}}</h3>
            </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'sv-search',
    data() {
      return {
        valid: false,
        search: '金尺一关市',
        searchRules: [
        // v => !!v || 'search is required',
        // v => /.+@.+/.test(v) || 'search must be valid',
        ],
      }
    },
    methods: {
      closeSearch() {
        this.$router.go(-1);
      },
      clearSearch() {
        this.search = '';
      }
    },
    mounted() {
      this.search = this.$route.query.name;
    }
  }
</script>
