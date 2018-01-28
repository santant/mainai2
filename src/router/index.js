import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'

// 首页
import Home from '@/components/home/home'
import goodsInfo from '@/components/goods/goodsInfo.vue'


Vue.use(VueRouter)

let router = new VueRouter({
  // mode: 'history',
  routes: [{
    // 首页
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/goods/goodsInfo',
    name: 'goodsInfo',
    component: goodsInfo
  },{
    path: '*',
    // 可以直接到404自己定义的组件
    // component: noFound
    // 路由重定向的姿势 redirect ,可以写一个已经存在的路由
    redirect: '/'
  }]
})

export default router

