export default {
  //剔除数组中某个字符
  stripAll(s, d) {
    var str = "";
    var arr = new Array();
    for (var i = 0; i < s.length; i++) {
      if (s[i] !== d) {
        arr.push(i);
      }
    }
    for (var j = 0; j < arr.length; j++) {
      str = str + s[arr[j]];
    }
    return str;
  },
  //数字千位化
  toThousands(num) {
    if(!num)return '0';
    var info = parseFloat(num).toFixed(0).toString().split('.');
    num=info[0];
    var result = '';
    while (num.length > 3) {
      result = ',' + num.slice(-3) + result;
      num = num.slice(0, num.length - 3);
    }
    if (num) { result = num + result; }
    info[0] = result;
    return info.join('.');
  }
};
