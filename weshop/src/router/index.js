import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '../pages/index/index'
import Shop from '../pages/shop/shop'
import News from '../pages/news/news'
import Company from '../pages/company/company'
import detail from '../pages/detail/detail'
import join from '../pages/join/join'
import search from '../pages/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/company',
      name: 'company',
      component: Company
    },
    {
      path: '/index/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/index/join',
      name: 'join',
      component: join
    },
    {
      path: '/shop/search',
      name: 'search',
      component: search
    }
  ]
})
