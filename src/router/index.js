import Vue from 'vue'
import Router from 'vue-router'
import Reg from '@/components/Reg'
import MyFoot from '@/components/MyFoot'
import Myaha from '@/components/Myaha'
import Back from '@/components/Back'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/back',
      name: 'Back',
      component: Back
    }
  ]
})
