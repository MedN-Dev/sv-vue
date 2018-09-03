import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vue-event-calendar/dist/style.css'
import VueEventCalendar from 'vue-event-calendar'
import SVCookie from './cookie';
//引入覆盖样式的base
import '@/assets/base.css'
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

Vue.use(Vuetify, {
    theme: {
        sv_red: '#c7161e',
        sv_write: '#c9c9c9',
        sv_gray: '#999999',
        sv_purple: '#2c303b',
        sv_purple_light: '#676c8a',
        sv_purple_dark: '#1f212d',
        sv_chart_red: '#fe6c6e',
        sv_chart_green: '#2eba87',
        sv_chart_blue: '#5478e5',
        sv_chart_yellow: '#ffc000'
    },
    iconfont: 'md' // 'md' || 'mdi' || 'fa' || 'fa4'
})

Vue.use(VueEventCalendar, {
    locale: 'en'
})

Vue.use(SVCookie, {
    author: 'dengdeng'
})
