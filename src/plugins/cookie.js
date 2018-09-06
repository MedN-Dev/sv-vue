let SVCookie = new Object();

SVCookie.install = function (Vue) {
    /**
     * 设置cookie
     * @param {String} name 默认为 session
     * @param {String} value 从后端获取的 session 值
     * @param {Number} expiredays 过期时间
     */
    Vue.prototype.$setCookie = function(name, value, expiredays) {
        let exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    }
    
    /**
     * 获取cookie
     * @param {String} name 默认为 session
     */
    Vue.prototype.$getCookie = function(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') c = c.substring(1);
          if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
      }
      return "";
    }
    /**
     * 删除cookie
     * @param {String} name 默认为 session
     */
    Vue.prototype.$deleteCookie = function(name) {
      var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval= this.$getCookie(name);
        if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }
}

export default SVCookie;