import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import MyHome from '@/components/MyHome'
import MyCake from '@/components/MyCake'
import MyBread from '@/components/MyBread'
import MyGift from '@/components/MyGift'
import Myaha from '@/components/Myaha'
import Reg2 from '@/components/Reg2'
import Shouye from '@/components/Shouye'
import Contentcaigou from '@/components/Contentcaigou'
import Client from '@/components/Client'
import Weal from '@/components/Weal'
import Cooperate from '@/components/Cooperate'
import Food from '@/components/Food'
import Back from '@/components/Back'

export default new Router({
  routes: [
      {
        path:'/',
        name:'Shouye',
        component:Shouye,
          children:[
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
              path:'/aha',
              name:'Myaha',
              component:Myaha
            },
            {
              path:'/contentcaigou',
              name:'Contentcaigou',
              component:Contentcaigou
            },
            {
              path:'/client',
              name:'Client',
              component:Client,
           
            },
            {
              path:'/weal',
              name:'Weal',
              component:Weal,
           
            },
            {
              path:'/cooperate',
              name:'Cooperate',
              component:Cooperate,
            },
            {
              path:'/food',
              name:'Food',
              component:Food,
           
            },
            {
              path:'/company',
              name:'MyHome',
              component:MyHome,
           
            },
            {
              path:'/mynx',
              name:'MyHome',
              component:MyHome
            }
          ]
      },
      {
        path:'/reg2',
        name:'Reg2',
        component:Reg2
      },{
        path:'/back',
        name:'Back',
        component:Back
      },
  ]
})
