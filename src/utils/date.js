export default {
  /**
   * 方法-获取当月首日日期 2018-08-01
   */
  getThisMonthDay() {
    let date = `${new Date().getFullYear()}-${new Date().getMonth()+1}-01`;
    let [year, month] = date.split('-');
    let monthNum = parseInt(month, 10);
    if(monthNum < 10){
      return `${year}-0${monthNum}-01`;
    }else{
      return `${year}-${monthNum}-01`;
    }
  },
  /**
   * 方法-格式化指定月份下个月首日 2018-9 => 2018-10-01
   */
  getNextMonthDay(date) {
    let [year, month] = date.split('-');
    let monthNum = parseInt(month, 10);
    if(month != '12'){
      if(monthNum+1<10){
        return `${year}-0${monthNum+1}-01`;
      }else{
        return `${year}-${monthNum+1}-01`;
      }
    }else{
      return `${parseInt(year, 10)+1}-01-01`;
    }
  },
  /**
   * 方法-格式化指定月份首日 2018-9 => 2018-09-01
   */
  parseMonthDay(date) {
    let [year, month] = date.split('-');
    let monthNum = parseInt(month, 10);
    if(monthNum<10){
      return `${year}-0${monthNum}-01`;
    }else{
      return `${year}-${monthNum}-01`;
    }
  },
};
