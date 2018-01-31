import Vue from 'vue'
// 引入路由
import VueRouter from 'vue-router'

// 首页
import Home from '@/components/home/home'
import goodsInfo from '@/components/goods/goodsInfo.vue'
// 用户
import User from '@/components/user/user'
// 注册
import SignIn from '@/components/user/signIn.vue'

//地址列表
import AddressList from '@/components/Addaddress/addresslist.vue'

//新增地址
import Address from '@/components/Addaddress/address.vue'

// 订单List
import OrderList from '@/components/order/orderList.vue'

//确认订单
import ConfirmOrder from '@/components/order/confirmOrder.vue'

// 我的优惠劵
import Coupon from '@/components/coupon/coupon.vue'

// 领取优惠劵
import obtainCoupon from '@/components/coupon/obtainCoupon.vue'

Vue.use(VueRouter)
let router = new VueRouter({
  // mode: 'history',
  routes: [{
    // 首页
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '主页'
    }
  }, {
    path: '/goods/goodsInfo',
    name: 'goodsInfo',
    component: goodsInfo,
    meta: {
      title: '商品详情'
    }
  }, {
    path: '/goods/user',
    name: 'User',
    component: User,
    meta: {
      title: '用户中心'
    }
  }, {
    path: '/goods/signin',
    name: 'signin',
    component: SignIn,
    meta: {
      title: '登录注册'
    }
  }, {
    path: '/goods/addresslist',
    name: 'addresslist',
    component: AddressList,
    meta: {
      title: '我的收货地址'
    }
  }, {
    path: '/goods/address',
    name: 'Address',
    component: Address,
    meta: {
      title: '新增地址'
    }
  }, {
    path: '/goods/orderList',
    name: 'orderList',
    component: OrderList,
    meta: {
      title: '我的订单'
    }
  }, {
    path: '/goods/coupon',
    name: 'coupon',
    component: Coupon,
    meta: {
      title: '我的优惠劵'
    }
  }, {
    path: '/goods/obtainCoupon',
    name: 'obtaincoupon',
    component: obtainCoupon,
    meta: {
      title: '领劵中心'
    }
  }, {
    path: '/goods/confirmOrder',
    name: 'confirmOrder',
    component: ConfirmOrder,
    meta: {
      title: '确认订单'
    }
  }, {
    path: '*',
    // 可以直接到404自己定义的组件
    // component: noFound
    // 路由重定向的姿势 redirect ,可以写一个已经存在的路由
    redirect: '/'
  }]
})

export default router

router.afterEach((to, from, next) => {
  if (to.meta.title) {
    window.document.title = to.meta.title
  }
})
