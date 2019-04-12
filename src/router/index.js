import Vue from 'vue'
import Router from 'vue-router'
import Reg2 from '@/components/Reg2'
import MyFoot from '@/components/MyFoot'
import Myaha from '@/components/Myaha'
import Back from '@/components/Back'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Reg2',
      component: Reg2
    },
    {
      path: '/back',
      name: 'Back',
      component: Back
    }
  ]
})
