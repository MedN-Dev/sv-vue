<template>
  <div class="sv-dateSelect">
    <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
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
        <v-date-picker v-model="date" scrollable no-title @input="modal=false"></v-date-picker>
      </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'sv-dateSelect',
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
        if(val != newVal){
          this.$refs.dialog.save(this.date);
          this.popDateState();
        }
      }
    },
    mounted(){
      this.date = this.default;
      this.popDateState();
    },
    methods: {
      // 根据开始时间推算结束时间
      getEndDate(date) {
        if (!date) return null;
        let [year, month, day] = date.split('-');
        if(month != '12'){
          return `${year}-${parseInt(month, 10)+1}-${day}`;
        }else{
          return `${parseInt(year, 10)+1}-01-${day}`;
        }
      },
      // 往父组件传递状态
      popDateState() {
        this.start = this.date;
        this.end = this.getEndDate(this.date);
        this.$emit('listenStart', this.start);
        this.$emit('listenEnd', this.end);
      }
    }
  }
</script>

<style>
.sv-dateSelect{ height: 100%; }
.sv-dateSelect .v-dialog__container{ line-height: 53px; text-align: right; }
.sv-dateSelect-field input{ text-align: right }
</style>
