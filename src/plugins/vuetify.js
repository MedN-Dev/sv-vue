import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {
    theme: {
        sv_red: '#c7161e',
        sv_write: '#c9c9c9',
        sv_purple: '#2c303b',
        sv_purple_light: '#676c8a',
        sv_purple_dark: '#1f212d',
    },
    iconfont: 'md' // 'md' || 'mdi' || 'fa' || 'fa4'
})
