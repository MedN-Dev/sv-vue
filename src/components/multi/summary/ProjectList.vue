<template>
  <div class="sv-projectList">
    <v-list class="sv-projectList-list" dense>
      <v-list-tile v-for="(item, index) in list" :key="index" subTitle>
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

        <v-list-tile-content v-if="index == 0"  @click="sortHead('capacity')" class="sv-projectList-col1">
          <v-list-tile-title v-text="item.col1" :class="`sv-projectList-${item.className}`"></v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-content v-else class="sv-projectList-col1">
          <v-list-tile-title v-text="item.col1" :class="`sv-projectList-${item.className}`"></v-list-tile-title>
        </v-list-tile-content>

        <v-list-tile-content class="sv-projectList-col2">
          <v-badge v-if="item.col2 =='達成率'" right color="sv_gray" >
            <span  @click="showTooltip" slot="badge" color="sv_purple_dark">?</span>
            <v-tooltip lazy top v-model="showTooltipStat">
              <v-list-tile-title slot="activator" v-text="item.col2" :class="`sv-projectList-${item.className}`">
              </v-list-tile-title>
              <span>達成率 = 前日までの当月発電量実績/前日までの当月発電量予測</span>
            </v-tooltip>
          </v-badge>
          <v-list-tile-title v-else v-text="item.col2" :class="`sv-projectList-${item.className}`"></v-list-tile-title>        
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
  import { Collection, Project } from '@/http/api'
  export default {
    name: 'sv-projectList',
    components: {
      'vue-infinite-loading': VueInfiniteLoading,
    },
    props: {
      category: {
        type: String,
        default: '1'
      }
    },
    data () {
      return {
        pageSize: 10,
        totalCount: 100,
        showTooltipStat: false,
        list: [{favor: 0, title: "項目", col1: "パネル出力", col2: '達成率',}],
        key: '',
        reverse: 0,
        sortStart: false,
        sortStorage: [{
          key:'name',
          reverse:0
        },{
          key:'capacity',
          reverse:0
        }]
      }
    },
    watch: {
      category() {
        this.resetList();
      }
    },
    computed: {
      page() {
        return this.sortStart? 1 :Math.ceil((this.list.length-1) / 10) + 1;
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
      },
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
        //获取当前title数据数组
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
            listObj.col1="パネル出力";
          }
        }else if(key == 'capacity'){
          //渲染完毕的回调，用于改变表头ui
          callback = function (tar, listObj){
            tar.sortChangeTitle(_reverse, listObj, 'col1', 'パネル出力');
            //初始化其他列
            tar.sortStorage[0].reverse = 0;
            listObj.title="項目";
          }
        }
        this.reverse = _currents.reverse;
        if(_reverse == 2){
          this.key = '';          
        }else{
          this.key = key;
        }
        this.reloadSortList(callback);
      },
      reloadSortList(callback){
        this.$axios.get(Collection.Projects, { id: this.category, page: this.page, pageSize: this.pageSize, key: this.key, reverse: this.reverse })
        .then((res)=>{
          if(res.code === 0){
            if (res.data.items.length) {
              this.list = [{favor: 0, title: "項目", col1: "パネル出力", col2: '達成率',}];
              this.list = this.list.concat(this.filterlist(res.data.items));
              this.totalCount = res.data.totalCount;
              callback(this, this.list[0]);
              this.sortStart = false;
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
            }
          }
        })
      },
      showTooltip(){
        this.showTooltipStat = true;
        setTimeout(()=>{
          this.showTooltipStat = false;
        },5000);
      },
      infiniteHandler($state) {
        this.$axios.get(Collection.Projects, { id: this.category, page: this.page, pageSize: this.pageSize, key: this.key, reverse: this.reverse })
        .then((res)=>{
          if(res.code === 0){
            if (res.data.items.length) {
              this.list = this.list.concat(this.filterlist(res.data.items));
              this.totalCount = res.data.totalCount;
              $state.loaded();
              if (this.finished) {
                $state.complete();
              }
            } else {
              $state.complete();
            }
          }
        })
      },
      filterlist(items) {
        return items.map((item)=>{
          return { 
            id: item.id, 
            className: item.className, 
            favor: item.hasFavorite, 
            title: item.name, 
            col1: item.items[0], 
            col2: item.items[1], 
            link: `/project/${item.id}/summary?name=${item.name}` 
            }
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
            return item;
          }
        })
      },
      resetList() {
        // this.list = [{ favor: 0, title: '項目', col1: 'パネル出力', col2: '達成率',}];
        this.$nextTick(() => {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        });
      }
    }
  }
</script>

<style scoped>
.v-btn-toggle--selected button{
  text-transform: none;
}
.sv-projectList > .sv-projectList-list{ background: transparent; }
.sv-projectList-star{ width: 10%; min-width: 0}
.sv-projectList-title{width: 25%;}
.sv-projectList-col1{ width: 35%; }
.sv-projectList-link{min-width: 0; width: 10%;}
.sv-projectList-col2{ width: 20%; }
.sv-projectList-col1 div, .sv-projectList-col2 div,.sv-projectList-title div{ text-align: center; }
.sv-projectList-list > div:first-child .sv-projectList-star i{ display: none; }
.sv-projectList-list > div:first-child { color: #999999; }
.sv-projectList-Level1 { color: #5478e5 }
.sv-projectList-Level2 { color: #2eba87 }
.sv-projectList-Level3 { color: #ffc000 }
.sv-projectList-Level4 { color: rgb(243, 135, 56) }
.sv-projectList-Level5 { color: #fe6c6e }
</style>
<style>
  .sv-projectList .v-badge__badge{
    width: 15px !important;
    height: 15px !important;
    top: 0px !important;
    right: -17px !important;
    background-color: #999999 !important;
    border-color: #999999 !important;
  }
</style>



