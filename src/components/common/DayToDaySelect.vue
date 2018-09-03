<template>
  <div class="sv-monthSelect">
    <v-dialog
      ref="dialog"
      v-model="modalStart"
      :return-value.sync="date"
      lazy
      full-width
      width="290px"
    >
      <v-chip 
        slot="activator"
        color="sv_purple_dark"
        text-color="sv_write">
        <v-avatar color="sv_purple" text-color="sv_write">開始</v-avatar>
        {{start}}
      </v-chip>
      <v-date-picker ref="picker" :allowed-dates="allowedEndDates" locale="jp" v-model="start" type="date" scrollable no-title @input="modalStart=false"></v-date-picker>
    </v-dialog>
    <v-dialog
      ref="dialog"
      v-model="modalEnd"
      :return-value.sync="date"
      lazy
      full-width
      width="290px"
    >
      <v-chip 
        slot="activator"
        color="sv_purple_dark"
        text-color="sv_write">
        <v-avatar class="sv_purple">締切</v-avatar>
        {{end}}
      </v-chip>
      <v-date-picker ref="picker" :allowed-dates="allowedDates" locale="jp" v-model="end" type="date" scrollable no-title @input="modalEnd=false"></v-date-picker>
    </v-dialog>
  </div>
</template>

<script>
  import SVDate from '@/utils/date'
  export default {
    name: 'sv-dayToDaySelect',
    props: ['default'],
    data() {
      return {
        date: '',
        modalStart: false,
        modalEnd: false,
        start: '',
        end: '',
      }
    },
    watch: {
      // 设置日期默认是以月开始
      modalStart(val){
        val && this.$nextTick(() => (this.$refs.picker.activePicker = 'MONTH'));
      },
      modalEnd(val){
        val && this.$nextTick(() => (this.$refs.picker.activePicker = 'MONTH'));
      },
      start(val, newVal){
        if(val != newVal){
          val && this.$refs.picker && this.$nextTick(() => (this.$refs.picker.activePicker = 'MONTH'));
          this.$emit('listenStart', this.start);
        }
      },
      end(val, newVal){
        if(val != newVal){
          val && this.$refs.picker && this.$nextTick(() => (this.$refs.picker.activePicker = 'MONTH'));
          this.$emit('listenEnd', this.end);
        }
      }
    },
    mounted(){
      this.setDefaultDate();
      this.popDateState();
    },
    methods: {
      // 计算开始时间
      getStartDate(date) {
        return SVDate.parseMonthDay(date);
      },
      // 根据开始时间推算结束时间
      getEndDate(date) {
        if (!date) return null;
        return SVDate.getNextMonthDay(date);
      },
      // 往父组件传递状态
      popDateState() {
        this.start = this.getStartDate(this.date);
        this.end = this.getEndDate(this.date);
        this.$emit('listenStart', this.start);
        this.$emit('listenEnd', this.end);
      },
      // 设置控件默认日期
      setDefaultDate() {
        let [year, month] = this.default.split('-');
        this.date = `${year}-${month}`;
      },
      //禁止用户点击起始日期前
      allowedDates: function(val) {
        return SVDate.dateCompare(val, this.start);
      },
      //禁止用户点击截止日期后
      allowedEndDates: function(val) {
        return !SVDate.dateCompare(val, this.end);
      }
    }
  }
</script>

<style>
.sv-monthSelect{ height: 100%;text-align: right; padding-right: 10px }
.sv-monthSelect .v-dialog__container{ display: inline-block !important;line-height: 53px; text-align: right; }
.sv-monthSelect-field input{ text-align: right }
</style>
