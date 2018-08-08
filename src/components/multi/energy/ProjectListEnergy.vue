<template>
  <div class="sv-projectList">
    <v-list class="sv-projectList-list" dense>
      <v-list-tile
        v-for="(item, index) in list"
        :key="index"
        subTitle
      >
        <v-list-tile-action class="sv-projectList-star">
          <v-icon
            v-if="item.favor != 1"
            color="grey lighten-1"
            @click="favoriteHandle(item.id)"
          >
            star_border
          </v-icon>
          <v-icon
            v-else
            color="yellow darken-2"
            @click="unfavoriteHandle(item.id)"
          >
            star
          </v-icon>
        </v-list-tile-action>

        <v-list-tile-content class="sv-projectList-title">
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-content class="sv-projectList-col1">
          <v-list-tile-title v-text="item.col1"></v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-content class="sv-projectList-col2">
          <v-list-tile-title v-text="item.col2"></v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-action class="sv-projectList-link">
          <router-link v-if="index != 0" :to="item.link">
            <v-icon color="sv_gray">keyboard_arrow_right</v-icon>
          </router-link>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <!-- lazy-loading component -->
    <vue-infinite-loading @infinite="infiniteHandler" ref="infiniteLoading"></vue-infinite-loading>
  </div>
</template>

<script>
  import VueInfiniteLoading from 'vue-infinite-loading'
  import { Energy, Project } from '@/http/api'
  export default {
    name: 'sv-projectList-energy',
    components: {
      'vue-infinite-loading': VueInfiniteLoading,
    },
    props: ['category', 'start', 'end', 'source'],
    data () {
      return {
        pageSize: 10,
        list: [{favor: 0, title: '项目', col1: 'パネル出力', col2: '当月発電比較',}]
      }
    },
    watch: {
      category() {
        this.resetList();
      },
      source() {
        this.resetList();
      }
    },
    computed: {
      page() {
        return (this.list.length-1) / 10 + 1;
      },
      finished() {
        return (this.list.length-1) / 10 === 10
      },
      selected() {
        let arr = [];
        this.list.forEach((element, index) => {
          if(element.favor === 1) arr.push(index)
        })
        return arr;
      }
    },
    methods: {
      infiniteHandler($state) {
        this.$axios.get(Energy.Projects, { id: this.category, start: this.start, end: this.end, source: this.source, page: this.page, pageSize: this.pageSize })
        .then((res)=>{
          if (res.data.items.length) {
            this.list = this.list.concat(this.filterlist(res.data.items));
            $state.loaded();
            if (this.finished) { // 总共加载100条
              $state.complete();
            }
          } else {
            $state.complete();
          }
        })
      },
      filterlist(items) {
        return items.map((item)=>{
          return { id: item.id, favor: item.hasFavorite, title: item.name, col1: item.items[0], col2: item.items[1], link: `/project/${item.id}/summary` }
        })
      },
      favoriteHandle(projectId) {
        this.$axios.post(Project.Favorite, { pid: projectId})
          .then((res)=>{
            if(res.code == 1){
              this.updateListById(projectId, 1);
            }
          });
      },
      unfavoriteHandle(projectId) {
        this.$axios.post(Project.UnFavorite, { pid: projectId})
          .then((res)=>{
            if(res.code == 1){
              this.updateListById(projectId, 0);
            }
          });
      },
      updateListById(projectId, favor) {
        this.list = this.list.map((item)=>{
          if(item.id === projectId) {
            return { id: item.id, favor: favor, title: item.title, col1: item.col1, col2: item.col2, link: item.link };
          }else{
            return { id: item.id, favor: item.favor, title: item.title, col1: item.col1, col2: item.col2, link: item.link };
          }
        })
      },
      resetList() {
        this.list = [{ favor: 0, title: '项目', col1: 'パネル出力', col2: '当月発電比較',}];
        this.$nextTick(() => {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        });
      }
    }
  }
</script>

<style>
.sv-projectList > .sv-projectList-list{
  background: transparent;
}
.sv-projectList-title, .sv-projectList-star, .sv-projectList-link{
  width: 10%;
}
.sv-projectList-col1, .sv-projectList-col2{
  width: 20%;
}
.sv-projectList-col1 div, .sv-projectList-col2 div{
  text-align: right;
}
.sv-projectList-list > div:first-child .sv-projectList-star i{
  display: none;
}
.sv-projectList-list > div:first-child {
  color: #999999;
}
</style>


