<template>
  <div class="sv-search">
    <v-toolbar
      app
      color="sv_red"
      dark
      dense
      height="0"
      tabs
      >
      <!-- 返回上層 -->
      <v-tabs color="sv_purple" slot="extension" class="sv-top-nav-back">
        <router-link to="/summary/1">
          <v-icon>arrow_back</v-icon>
        </router-link>
      </v-tabs>
    </v-toolbar>
    <v-content>
      <v-container class="sv-search-container" grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs12>
            <v-form v-model="valid">
              <v-text-field
                  v-model="search"
                  :rules="searchRules"
                  clearable
                  required
                  @click="alert=false;"
                  placeholder="キーワードを入力してください"
              ></v-text-field>
            </v-form>
          </v-flex>
          <v-flex xs12>
            <v-list two-line subheader class="sv-search-list">
                <v-list-tile avatar v-for="item in searchResult" :key="item.id" v-ripple :to="item.link.toString()">
                  <v-list-tile-content>
                    <v-list-tile-title>{{item.name}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{item.descript}}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile avatar v-ripple v-if="noSearchData">
                  <v-list-tile-content>
                    <v-list-tile-title>データはありません</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </div>
</template>

<script>
  import { Search } from '@/http/api.js'
  export default {
    name: 'sv-search',
    data() {
      return {
        valid: false,
        search: '',
        searchRules: [
        // v => !!v || 'search is required',
        // v => /.+@.+/.test(v) || 'search must be valid',
        ],
        searchResult: [],
        alert: '',
        noSearchData: false,
        loading: null
      }
    },
    watch: {
      search() {
        if(this.search == null){
          this.noSearchData = false;
        }else{
          this.debouncedSearch();
        }
      }
    },
    mounted() {
      this.debouncedSearch = this.$_.debounce(this.fetchSearchResult, 500);
    },
    methods: {
      fetchSearchResult() {
        this.searchResult = [];
        this.$axios.get(`${Search.Projects}?keyword=${this.search}`)
          .then((res) => {
            //this.searchResult = this.$_.capitalize(res.data);
            if(res.code === 0) {
              this.searchResult = this.filterSearchResult(res.data);
              if(res.data && res.data.length == 0 && this.search != ""){
                this.noSearchData = true;
              }else{
                this.noSearchData = false;
              }
            }
          })
      },
      filterSearchResult(items) {
        return items.map((item) => {
          return {
            id: item.id,
            name: item.name,
            descript: item.descript,
            link: `/project/${item.id}/summary?name=${item.name}`
          }
        })
      },  
      closeSearch() {
        this.$router.go(-1);
      }
    },
  }
</script>

<style>
.sv-search .sv-search-list{ background: transparent; }
.sv-search .sv-search-goBack{ line-height: 60px; }
</style>

