//导入路由
import VueRouter from "vue-router";
import Vue from 'vue'
//路由懒加载
const Home     = () => import("../views/home/Home") ;
const Catagroy = () => import("../views/catagroy/Catagroy") ;
const Cart     = () => import("../views/cart/Cart") ;
const Profile  = () => import("../views/profile/Profile") ;


//注册这个路由对象
Vue.use(VueRouter)
const route = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/catagroy',
    component: Catagroy
  },
  {
    path:'/cart',
    component: Cart
  },
  {
    //一定要注意component是不能加s的
    path: '/profile',
    component: Profile
  }
]
//创建路由对象
const router = new VueRouter({
  routes: route,
  mode: 'history'
})
export default router
