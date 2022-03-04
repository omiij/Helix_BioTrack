import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import ProductList from "../components/ProductsList.vue"
import ProductForm from "../components/ProductForm.vue"
import Permission from "../components/Permission.vue"
import Sales from "../components/Sales.vue"
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/product-form',
    name: 'ProductForm',
    component: ProductForm
  },
  {
    path: '/',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/permission',
    name: 'permission',
    component: Permission
  }
  ,
  {
    path: '/sale',
    name: 'sale',
    component: Sales

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

