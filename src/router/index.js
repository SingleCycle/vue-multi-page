import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: '/dist/',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: resolve => require(['@/components/Hello.vue'], resolve), //懒加载
    }
  ],
})
