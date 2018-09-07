<template>
  <div class="sv-page-eventSingle sv-eventCalendar">
      <vue-event-calendar :events="events" @day-changed="handleDayChange" @month-changed="handleMonthChange">
        <template scope="props">
          <div v-for="(event, index) in props.showEvents" :key="index" class="event-item">
            <h3>{{event.title}}</h3>
            <p>{{event.datetime_start}} ~ {{event.datetime_end}}</p>
          </div>
        </template>
      </vue-event-calendar>  
  </div>
</template>

<script>
  import { Events } from '@/http/api'
  import SVDate from '@/utils/date'
  export default {
    name: 'sv-page-eventSingle',
    props: ['id'],
    data () {
      return {
        events: [],
        month: '09/2018',
      }
    },
    computed: {
      start() {
        let [m, y] = this.month.split('/'); 
        return `${y}-${m}-01`;
      },
      end() {
        return SVDate.getNextMonthDay(this.start);
      }
    },
    watch: {
      month(val, newVal) {
        if(val != newVal) this.fetchEventsList();
      }
    },
    methods: {
      handleMonthChange (month) {
        this.month = month;
      },
      handleDayChange(day) {
        this.day = day;
      },
      fetchEventsList() {
        this.$axios.get(Events.Data, { pid: this.id, begin: this.start, end: this.end, cid: 100, type: 0, page: 1, pageSize: 10 })
          .then(res => {
            if(res.code === 0) this.events = this.filterEventsList(res.data.items);
          })
      },
      filterEventsList(items) {
        return items.map(item => {
          return { 
            date: this.toDate(item.start), 
            title: item.title, 
            datetime_start: item.start.split(' ')[1], 
            datetime_end: item.end.split(' ')[1] }
        });
      },
      toDate(date) {
        let [y, m, d] = date.split(' ')[0].split('-');
        return `${y}/${m}/${d}`;
      }
    },
    mounted() {
      // 默认加载到所有时间
      this.$EventCalendar.toDate('all');
      // 发起请求加载时间
      this.fetchEventsList();
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

