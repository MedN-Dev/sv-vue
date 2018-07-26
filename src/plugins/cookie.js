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
    Vue.prototype.$getCookie = function(name) {
        let reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        let arr = document.cookie.match(reg); 
        if(arr){
            return (arr[2]);
        }else{
            return null;
        }
    }
    /**
     * 删除cookie
     * @param {String} name 默认为 session
     */
    Vue.prototype.$deleteCookie = function(name) {
        let exp = new Date();
        exp.setTime(exp.getTime() - 1);
        let cval = this.$getCookie(name);
        if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    }
}

export default SVCookie;