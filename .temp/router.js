import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import Index from '@/components/Index'
import ChangePwd from '@/page/mine/changePwd'
import Help from '@/page/mine/help'
import HelpDetails from '@/page/mine/helpDetails'
import WorkloadAccount from '@/page/mine/workloadAccount'
import WorkloadDetails from '@/page/mine/workloadDetails'
Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/page/mine/changePwd',
      name: 'ChangePwd',
      component: ChangePwd
    },
    {
      path: '/page/mine/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/page/mine/helpDetails',
      name: 'HelpDetails',
      component: HelpDetails
    },
    {
      path: '/page/mine/workloadAccount',
      name: 'WorkloadAccount',
      component: WorkloadAccount
    },
    {
      path: '/page/mine/workloadDetails',
      name: 'WorkloadDetails',
      component: WorkloadDetails
    }
  ]
})
