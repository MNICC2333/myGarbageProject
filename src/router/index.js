import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      title:'首页-学子商城'
    }//元数据，用于存储自定义数据
  },
  {
    path: '/products/:kw?',
    name: 'products',
    props:true,
    component: () => import('../views/ProductView.vue'),
    meta:{
      title:'商品列表'
    }
  },
  {
    path: '/pdetails',
    name: 'pdetails',
    props:true,
    component: () => import('../views/PDetailsView.vue'),
    meta:{
      title:'商品详情'
    }
  },
  {
    path: '/register',
    name: 'register',
    props:true,
    component: () => import('../views/RegisterView.vue'),
    meta:{
      title:'注册',
      hideH:true
    }
  },
  {
    path: '/login',
    name: 'login',
    props:true,
    component: () => import('../views/LoginView.vue'),
    meta:{
      title:'登录',
      hideH:true
    }
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 在router初始化后：全局路由守卫：所有的路由操作都需要守卫允许
router.beforeEach((to,from,next) => {
// to：去 from：来 next：是否放行
  document.title = to.meta.title
  next()
})
export default router
