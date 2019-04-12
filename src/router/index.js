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
import Caigou from '@/components/Caigou'
import Kehu from '@/components/Kehu'
import Fuli from '@/components/Fuli'
import Hezuo from '@/components/Hezuo'
import Smallfood from '@/components/Smallfood'
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
      }, {

        path:'/caigou',
        name:'Caigou',
        component:Caigou
      },{
        path:'/kehu',
        name:'Kehu',
        component:Kehu
      },{
        path:'/fuli',
        name:'Fuli',
        component:Fuli
      },{
        path:'/hezuo',
        name:'Hezuo',
        component:Hezuo
      },{
        path:'/smallfood',
        name:'Smallfood',
        component:Smallfood
      },{
        path:'/back',
        name:'Back',
        component:Back
      },
  ]
})
