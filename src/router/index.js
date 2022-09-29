import Vue from 'vue'
import Router from 'vue-router'
import Naslovna from '@/components/Naslovna'
import Proizvodi from '@/components/Proizvodi'
import Info from '@/components/Info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Naslovna',
      component: Naslovna
    },
    {
      path: '/proizvodi',
      name: 'Proizvodi',
      component: Proizvodi
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ]
})
