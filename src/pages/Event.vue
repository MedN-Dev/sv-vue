<template>
  <!-- <sv-skeleton/> -->
  <v-container grid-list-md text-xs-center>
    <!-- Radio Button -->
    <v-layout row wrap>
       <v-flex xs12 sm6 class="py-2">
          <v-btn-toggle v-model="trigger" mandatory>
            <v-btn flat value=0>
              予定事象
            </v-btn>
            <v-btn flat value=1>
              発生事象
            </v-btn>
          </v-btn-toggle>
        </v-flex>
    </v-layout>
    <!-- Table list -->
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-list>
          <template v-for="(item, index) in eventsList">
            <v-list-tile
              :key="index"
              avatar
              ripple
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.date }} {{ item.time_start }} ~ {{item.time_end}}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>
                {{ item.location }} 
                </v-list-tile-action-text>
                <v-icon size=16>location_on</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
    <!-- lazy-loading component -->
    <vue-infinite-loading @infinite="infiniteHandler" ref="infiniteLoading"></vue-infinite-loading>
  </v-container>
</template>
<script>
  import VueInfiniteLoading from 'vue-infinite-loading'
  import { Events } from '@/http/api'
  export default {
    name: 'sv-page-event',
    props: ['category'],
    data() {
      return {
        pageSize: 10,
        trigger: 0,
        eventsList: []
      }
    },
    components: {
      'vue-infinite-loading': VueInfiniteLoading,
    },
    watch: {
      category(val, newVal) {
        if(val != newVal){ this.resetList() };
      },
      trigger(val, newVal) {
        if(val != newVal){ this.resetList() };
      }
    },
    computed: {
      page() {
        return Math.ceil((this.eventsList.length-1) / 10) + 1;
      },
      finished() {
        return (this.eventsList.length-1) / 10 === 10
      },
    },
    methods: {
      infiniteHandler($state) {
         this.$axios.get(Events.Data, { pid: '', begin: '', end: '', cid: this.category, type: this.trigger, page: this.page, pageSize: this.pageSize })
          .then(res => {
            if (res.data.items.length) {
              this.eventsList = this.eventsList.concat(this.filterEventsList(res.data.items));
              $state.loaded();
              if (this.finished) { // 总共加载100条
                $state.complete();
              }
            }else{
              $state.complete();
            }
          })
      },
      filterEventsList(items) {
        return items.map(item => {
          return { 
            name: item.title,
            location: item.projectName,
            date: item.start.split(' ')[0],
            time_start: item.start.split(' ')[1],
            time_end: item.end.split(' ')[1],
          }
        });
      },
      resetList() {
        this.eventsList = [];
        this.$nextTick(() => {
          // 设置组件引用，调用子组件内部的重置方法
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        });
      }
    },
    mounted() {
      //this.fetchEventsList();
    }
  }
</script>
<style scoped>
.theme--dark .v-list{
  background: transparent;
}
</style>


