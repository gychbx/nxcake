import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import MyHome from '@/components/MyHome'
import MyCake from '@/components/MyCake'
import MyBread from '@/components/MyBread'
import MyGift from '@/components/MyGift'
export default new Router({
  routes: [
      {
        path:'/',
        name:'MyHome',
        component:MyHome
      },
      {
        path:'/home',
        name:'MyHome',
        component:MyHome
      },
      {
        path:'/cake',
        name:'MyCake',
        component:MyCake
      },
      {
        path:'/bread',
        name:'MyBread',
        component:MyBread
      },
      {
        path:'/gift',
        name:'MyGift',
        component:MyGift
      },
      {
        path:'/company',
        name:'MyHome',
        component:MyHome,
        chlidren:[
          {
            path: '/',
            name: 'Contentcaigou',
            component: Contentcaigou
          },
          {
            path: '/client',
            name: 'Client',
            component: Client
          },
          {
            path: '/weal',
            name: 'Weal',
            component: Weal
          },
          {
            path: '/cooperate',
            name: 'Cooperate',
            component: Cooperate
          },
          {
            path: '/food',
            name: 'Food',
            component: Food
          }
        ]
      },
      {
        path:'/mynx',
        name:'MyHome',
        component:MyHome
      }
  ]
})
