/**
 * 函数-获取当月1号日期
 * return 2018-07-01
 */

export default {
  getThisMonthDay() {
    let date = new Date().toLocaleDateString().split('/').join('-');
    let [year, month] = date.split('-');
    let monthNum = parseInt(month, 10);
    if(monthNum < 10){
      return `${year}-0${monthNum}-01`;
    }else{
      return `${year}-${monthNum}-01`;
    }
  },
  parseMonthDay(date) {
    let [year, month] = date.split('-');
    let monthNum = parseInt(month, 10);
    if(monthNum<10){
      return `${year}-0${monthNum}-01`;
    }else{
      return `${year}-${monthNum}-01`;
    }
  },
  getNextMonth(date) {
    let [year, month] = date.split('-');
    let monthNum = parseInt(month, 10);
    if(month != '12'){
      if(parseInt(month, 10)+1<10){
        return `${year}-0${monthNum+1}-01`;
      }else{
        return `${year}-${monthNum+1}-01`;
      }
    }else{
      return `${parseInt(year, 10)+1}-01-01`;
    }
  },
};
