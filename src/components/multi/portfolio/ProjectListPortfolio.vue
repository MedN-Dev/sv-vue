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

        <v-list-tile-content v-if="index == 0" @click="sortHead('name')" class="sv-projectList-title">
          <v-list-tile-title v-text="item.title" :class="`sv-projectList-${item.className}`"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-content v-else class="sv-projectList-title">
          <v-list-tile-title v-text="item.title" :class="`sv-projectList-${item.className}`"></v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-content v-if="index == 0" @click="sortHead('capacity')" class="sv-projectList-col1">
          <v-list-tile-title v-text="item.col1" :class="`sv-projectList-${item.className}`"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-content v-else class="sv-projectList-col1">
          <v-list-tile-title v-text="item.col1" :class="`sv-projectList-${item.className}`"></v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-content v-if="index == 0" @click="sortHead('fit')" class="sv-projectList-col2">
          <v-list-tile-title v-text="item.col2" :class="`sv-projectList-${item.className}`"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-content v-else class="sv-projectList-col2">
          <v-list-tile-title v-text="item.col2" :class="`sv-projectList-${item.className}`"></v-list-tile-title>
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
  import { Portfolio, Project } from '@/http/api'
  export default {
    name: 'sv-projectList-portfolio',
    components: {
      'vue-infinite-loading': VueInfiniteLoading,
    },
    props: ['category', 'region', 'fit', 'codYears', 'maker'],
    data () {
      return {
        pageSize: 10,
        totalCount: 100,
        list: [{favor: 0, title: '項目', col1: 'パネル出力MW', col2: 'FIT 円',}],
        key: '',
        reverse: 0,
        sortStart: false,
        sortStorage: [{
          key:'name',
          reverse:0
        },{
          key:'capacity',
          reverse:0
        },{
          key:'fit',
          reverse:0
        }]
      }
    },
    watch: {
      category() { this.resetList(); },
      region() { this.resetList(); },
      fit() { this.resetList(); },
      codYears() { this.resetList(); },
      maker() { this.resetList(); },
    },
    computed: {
      page() {
        return this.sortStart? 1 : Math.ceil((this.list.length-1) / 10) + 1;
      },
      finished() {
        return this.list.length >= this.totalCount + 1;
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
      //排序规则
      sortRule(_reverse, _currents){
          if(_reverse == 0){
            _currents.reverse = 1;
          }else if(_reverse == 1){
            _currents.reverse = 2;
          }else if(_reverse == 2){
            _currents.reverse = 0;
          }
      },
      //排序渲染规则
      sortChangeTitle(_reverse, _titleObj, title, _titleName){
        if(_reverse == 0){
          _titleObj[title]=`${_titleName}▼`;
        }else if(_reverse == 1){
          _titleObj[title]=`${_titleName}▲`;
        }else if(_reverse == 2){
          _titleObj[title]= _titleName;
        }
      },
      //点击表头排序功能
      sortHead(key){
        //获取当前排序状态对象
        let _currents = this.sortStorage.find(item=>item.key == key);
        //获取当前排序状态
        let _reverse = _currents.reverse;
        //设置排序开始状态，page初始为1
        this.sortStart = true;
        let callback;
        //执行排序规则
        this.sortRule(_reverse, _currents);
        if(key == 'name'){
          //渲染完毕的回调，用于改变表头ui
          callback = function(tar, listObj){
            //title数据对象
            tar.sortChangeTitle(_reverse, listObj, 'title', '項目');
            //初始化其他列
            tar.sortStorage[1].reverse = 0;
            listObj.col1="パネル出力MW";
            tar.sortStorage[2].reverse = 0;
            listObj.col2="FIT 円";
          }
        }else if(key == 'capacity'){
          //渲染完毕的回调，用于改变表头ui
          callback = function (tar, listObj){
            tar.sortChangeTitle(_reverse, listObj, 'col1', 'パネル出力MW');
            //初始化其他列
            tar.sortStorage[0].reverse = 0;
            listObj.title="項目";
            tar.sortStorage[2].reverse = 0;
            listObj.col2="FIT 円";
          }
        }else if(key == 'fit'){
          //渲染完毕的回调，用于改变表头ui
          callback = function (tar, listObj){
            tar.sortChangeTitle(_reverse, listObj, 'col2', 'FIT 円');
            //初始化其他列
            tar.sortStorage[0].reverse = 0;
            listObj.title="項目";
            tar.sortStorage[1].reverse = 0;
            listObj.col1="パネル出力MW";
          }
        }
        this.reverse = _currents.reverse;
        if(_reverse == 2){
          this.key = '';          
        }else{
          this.key = key;
        }
        this.reloadSortList(callback, _reverse);
      },
      reloadSortList(callback, reverse){
        this.$axios.get(Portfolio.Projects, { id: this.category, region: this.region, fit: this.fit, codYears: this.codYears,maker: this.maker, page: this.page, pageSize: this.pageSize, key: this.key, reverse: this.reverse })
        .then((res)=>{
          if(res.code === 0){
            if (res.data.items.length) {
              this.list = [{favor: 0, title: '項目', col1: 'パネル出力MW', col2: 'FIT 円',}];
              this.list = this.list.concat(this.filterlist(res.data.items));
              this.totalCount = res.data.totalCount;
              callback(this, this.list[0]);
              this.sortStart = false;
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
            }
          }
        })
      },
      infiniteHandler($state) {
        this.$axios.get(Portfolio.Projects, { id: this.category, region: this.region, fit: this.fit, codYears: this.codYears,maker: this.maker, page: this.page, pageSize: this.pageSize })
        .then((res)=>{
          if (res.data.items.length) {
            this.list = this.list.concat(this.filterlist(res.data.items));
            this.totalCount = res.data.totalCount;
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
          return { id: item.id, className: item.className, favor: item.hasFavorite, title: item.name, col1: item.items[0], col2: item.items[1], link: `/project/${item.id}/summary?name=${item.name}` }
        })
      },
      favoriteHandle(projectId) {
        this.$axios.post(`${Project.Favorite}?pid=${projectId}`)
          .then((res)=>{
            if(res.code == 0){
              this.updateListById(projectId, 1);
            }
          });
      },
      unfavoriteHandle(projectId) {
        this.$axios.post(`${Project.UnFavorite}?pid=${projectId}`)
          .then((res)=>{
            if(res.code == 0){
              this.updateListById(projectId, 0);
            }
          });
      },
      updateListById(projectId, favor) {
        this.list = this.list.map((item)=>{
          if(item.id === projectId) {
            return { ...item, favor }; // 析构表达式-优雅
          }else{
            return item
          }
        })
      },
      resetList() {
        // this.list = [{ favor: 0, title: '項目', col1: 'パネル出力MW', col2: 'FIT 円',}];
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
.v-btn-toggle--selected button{
  text-transform: none;
}
.sv-projectList-star{ width: 10%; min-width: 0}
.sv-projectList-title{width: 25%;}
.sv-projectList-col1{ width: 35%; }
.sv-projectList-link{min-width: 0; width: 10%;}
.sv-projectList-col2{ width: 20%; }
.sv-projectList-col1 div, .sv-projectList-col2 div,.sv-projectList-title div{ text-align: center; }
.sv-projectList-list > div:first-child .sv-projectList-star i{
  display: none;
}
.sv-projectList-list > div:first-child {
  color: #999999;
}
</style>


