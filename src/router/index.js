import Vue from "vue"
import VueRouter from "vue-router"

const Home = () => import("../views/home/Home")
const Sort = () => import("../views/sort/Sort")
const Cart = () => import("../views/cart/Cart")
const Profile = () => import("../views/profile/Profile")

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
// 2.创建路由对象 并导出
const routes = [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/sort",
      component: Sort
    },
    {
      path: "/cart",
      component: Cart
    },
    {
      path: "/profile",
      component: Profile
    }
]


const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
