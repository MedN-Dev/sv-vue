<template>
  <div class="sv-monthSelect">
    <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        lazy
        full-width
        width="290px"
      >
        <v-chip 
          slot="activator"
          color="sv_purple_dark"
          text-color="sv_write">
          {{date}}
        </v-chip>
        <v-date-picker locale="jp" v-model="date" type="month" scrollable no-title @input="modal=false"></v-date-picker>
      </v-dialog>
  </div>
</template>

<script>
  import SVDate from '@/utils/date'
  export default {
    name: 'sv-monthSelect',
    props: ['default'],
    data() {
      return {
        date: '',
        modal: false,
        start: '',
        end: '',
      }
    },
    watch: {
      date (val, newVal) {
      debugger
        if(val != newVal){
          this.$refs.dialog.save(this.date);
          this.popDateState();
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
      }
    }
  }
</script>

<style>
.sv-monthSelect{ height: 100%; }
.sv-monthSelect .v-dialog__container{ line-height: 53px; text-align: right; }
.sv-monthSelect-field input{ text-align: right }
</style>
