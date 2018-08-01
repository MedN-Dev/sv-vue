import Vue from 'vue'
import Router from 'vue-router'
import SVMultiProject from '../components/multi/MultiProject.vue'
import SVSingleProject from '../components/single/SingleProject.vue'

import SVLogin from '../pages/Login.vue'
// import SVError from '../pages/404.vue'
import SVSummary from '../pages/Summary.vue'
import SVEnergy from '../pages/Energy.vue'
import SVEvent from '../pages/Event.vue'
import SVPortfolio from '../pages/Portfolio.vue'

// 单项目
import SVSummarySingle from '../pages/SummarySingle.vue'
import SVEnergySingle from '../pages/EnergySingle.vue'
import SVEventSingle from '../pages/EventSingle.vue'
import SVDetail from '../pages/Detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'login',
      component: SVMultiProject,
      name: 'projectMulti',
      children: [
        {
          path: 'summary/:category',
          name: 'summary',
          component: SVSummary,
          props: true
        },
        {
          path: 'energy/:category',
          name: 'energy',
          component: SVEnergy,
          props: true
        },
        {
          path: 'event/:category',
          name: 'event',
          component: SVEvent,
          props: true
        },
        {
          path: 'portfolio/:category',
          name: 'portfolio',
          component: SVPortfolio,
          props: true
        },
      ]
    },
    {
      path: '/project/:id?',
      component: SVSingleProject,
      name: 'projectSingle',
      props: true,
      children: [
        {
          path: 'summary',
          name: 'summarySingle',
          component: SVSummarySingle,
          props: true
        },
        {
          path: 'energy',
          name: 'energySingle',
          component: SVEnergySingle,
          props: true
        },
        {
          path: 'event',
          name: 'eventSingle',
          component: SVEventSingle,
          props: true
        },
        {
          path: 'detail',
          name: 'detail',
          component: SVDetail,
          props: true
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: SVLogin
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
