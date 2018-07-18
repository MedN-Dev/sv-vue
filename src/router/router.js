import Vue from 'vue'
import Router from 'vue-router'
import SVMultiProject from '../views/MultiProject.vue'
import SVSingleProject from '../views/SingleProject.vue'
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
  routes: [
    {
      path: '/',
      component: SVMultiProject,
      children: [
        {
          path: '',
          name: 'summary',
          component: SVSummary
        },
        {
          path: 'energy',
          name: 'energy',
          component: SVEnergy
        },
        {
          path: 'event',
          name: 'event',
          component: SVEvent
        },
        {
          path: 'portfolio',
          name: 'portfolio',
          component: SVPortfolio
        },
      ]
    },
    {
      path: '/project/:id',
      component: SVSingleProject,
      props: true,
      children: [
        {
          path: '',
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
          name: 'summarySingle',
          component: SVDetail,
          props: true
        },
      ]
    }
  ]
})
