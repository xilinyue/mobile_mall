import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {path: '/',redirect: '/home'},
  {path: '/home',name: 'Home',meta: {index: 0},component: () => import('../views/Home')},
  {path: '/category',name: 'Category',meta: {index: 1},component: () => import('../views/Category')},
  {path: '/market',name: 'Market',meta: {index: 2},component: () => import('../views/Market')},
  {path: '/profile',name: 'Profile',meta: {index: 3},component: () => import('../views/Profile')}
];

const router = new VueRouter({
  routes
});

export default router
