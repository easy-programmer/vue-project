import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloGrid from '@/components/HelloGrid'
import SmGrid from '@/components/smGrid'
import Movie from '@/components/Movie'
import HelloBoard from '@/components/HelloBoard'
import VueGoodTablePlugin from 'vue-good-table'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(Router)
Vue.use(VueGoodTablePlugin)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/helloGrid',
      name: 'HelloGrid',
      component: HelloGrid
    },
    {
      path: '/smGrid',
      name: 'SmGrid',
      component: SmGrid
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/HelloBoard',
      name: 'HelloBoard',
      component: HelloBoard
    }
  ]
})
