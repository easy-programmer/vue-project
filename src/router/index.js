import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloGrid from '@/components/HelloGrid'
import SmGrid from '@/components/smGrid'

Vue.use(Router)

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
    }
  ]
})
