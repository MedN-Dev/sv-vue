<template>
  <div class="sv-eventCalendar">
      <vue-event-calendar :events="events" @day-changed="handleDayChange" @month-changed="handleMonthChange">
        <template scope="props">
          <div v-for="(event, index) in props.showEvents" :key="index" class="event-item">
            <h3>{{event.title}}</h3>
            <p>{{event.date}} {{event.datetime}}</p>
          </div>
        </template>
      </vue-event-calendar>  
  </div>
</template>

<script>
  export default {
    data () {
      return {
        events: [{
          date: '2018/07/01',
          title: '学生见学',
          datetime: '10:00 ~ 12:00'
        }, {
          date: '2018/07/20',
          title: '除草作业',
          datetime: '12:00 ~ 16:00'
        }, {
          date: '2018/08/04',
          title: '恭喜发财',
          datetime: '12:00 ~ 16:00'
        }, {
          date: '2018/08/16',
          title: '步步高升',
          datetime: '12:00 ~ 16:00'
        }, {
          date: '2018/09/14',
          title: '平步青云',
          datetime: '12:00 ~ 16:00'
        }],
        month: '08/2018',
        day: {
          date: "2018/08/01",
          events: [
            {
              date: '2018/08/01',
              title: '学生见学',
              datetime: '10:00 ~ 12:00',
              customClass: 'disabled highlight' // 自定义日历单元格的Class，会加到对应的日历单元格上
            }
          ]
        }
      }
    },
    methods: {
      handleMonthChange (month) {
        this.month = month;
      },
      handleDayChange(day) {
        this.day = day;
      }
    },
    mounted() {
      // 默认加载到所有时间
      this.$EventCalendar.toDate('all');
    }
  }
</script>

<style>
  .__vev_calendar-wrapper .cal-wrapper .cal-header{ background-color: transparent; }
  .__vev_calendar-wrapper .cal-wrapper { padding: 0; }
  .sv-eventCalendar .events-wrapper{ background-color: transparent !important; }
  .__vev_calendar-wrapper .arrow-left.icon{ color: #676c8a; }
  .__vev_calendar-wrapper .arrow-right.icon{ color: #676c8a; }
  .__vev_calendar-wrapper .events-wrapper{ padding: 0; }
  .__vev_calendar-wrapper .date{ display: none;}
  .__vev_calendar-wrapper .events-wrapper .event-item { margin-top: 5px; }
  .v-toolbar--fixed{ z-index: 4; }
</style>

