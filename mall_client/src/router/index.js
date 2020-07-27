import Vue from "vue";
import VueRouter from "vue-router";

// 安装插件
Vue.use(VueRouter);

// 定义路由数组
const routes = [
    {path: '',redirect: '/home'},
    {path: '/home',name: 'Home', component: () => import("views/home/Home.vue")},
    {path: '/category',name: 'Category', component: () => import("views/category/Category.vue")},
    {path: '/cart',name: 'Cart', component: () => import("views/cart/Cart.vue")},
    {path: '/profile',name: 'Profile', component: () => import("views/profile/Profile.vue")},
];
// 定义路由对象
const router = new VueRouter({
   routes,
   mode: 'history'
});

//导出路由
export default router;