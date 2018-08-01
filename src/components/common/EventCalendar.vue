<template>
  <div class="sv-eventCalendar">
      <vue-event-calendar :events="demoEvents" @dayChanged="handleDayChange"></vue-event-calendar>  
  </div>
</template>

<script>
  export default {
    data () {
      return {
        demoEvents: [{
          date: '2018/08/01',
          title: '学生见学',
          desc: '10:00 ~ 12:00',
          customClass: 'disabled highlight' // 自定义日历单元格的Class，会加到对应的日历单元格上
        }, {
          date: '2018/08/16',
          title: '除草作业',
          desc: '12:00 ~ 16:00',
          customClass: 'disabled highlight' // 自定义日历单元格的Class，会加到对应的日历单元格上
        }, {
          date: '2018/09/14',
          title: '学生见学',
          desc: '12:00 ~ 16:00',
          customClass: 'disabled highlight' // 自定义日历单元格的Class，会加到对应的日历单元格上
        }]
      }
    },
    methods: {
      monthChange (month) {
        window.alert(month);
      },
      dayChange (day) {
        window.alert(day);
      },
      handleDayChange() {

      }
    }
  }
</script>

<style>
  .__vev_calendar-wrapper .cal-wrapper .cal-header{ background-color: transparent; }
  .sv-eventCalendar .events-wrapper{ background-color: #676c8a !important; }
  .__vev_calendar-wrapper .arrow-left.icon{ color: #676c8a; }
  .__vev_calendar-wrapper .arrow-right.icon{ color: #676c8a; }
</style>

