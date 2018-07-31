<template>
  <div class="sv-projectList">
    <v-list class="sv-projectList-list" dense>
      <v-list-tile
        v-for="(item, index) in items"
        :key="index"
        subTitle
      >
        <v-list-tile-action class="sv-projectList-star">
          <v-icon
            v-if="selected.indexOf(index) < 0"
            color="grey lighten-1"
            @click="toggle(index)"
          >
            star_border
          </v-icon>
          <v-icon
            v-else
            color="yellow darken-2"
            @click="toggle(index)"
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
          <router-link :to="item.link">
            <v-icon v-if="item.icon" color="sv_gray">keyboard_arrow_right</v-icon>
          </router-link>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selected: [2, 3],
        items: [
          { icon: false, title: '项目', col1: 'パネル出力', col2: '当月発電比較', link: '/project/wj871287/summary' },
          { icon: true, title: '金尺', col1: '454,132', col2: 110, link: '/project/wj871287/summary' },
          { icon: true, title: '北斗', col1: '454,132', col2: 94, link: '/project/wj871287/summary' },
          { icon: true, title: '山神', col1: '454,132', col2: 45, link: '/project/wj871287/summary' },
          { icon: true, title: '北海', col1: '454,132', col2: 25, link: '/project/wj871287/summary' },
          { icon: true, title: '北海道', col1: '454,172', col2: 62, link: '/project/wj871287/summary' }
        ]
      }
    },
    methods: {
      toggle (index) {
        const i = this.selected.indexOf(index)
        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
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


