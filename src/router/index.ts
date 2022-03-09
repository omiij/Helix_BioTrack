import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ProductList from "../components/ProductsList.vue";
import ProductForm from "../components/ProductForm.vue";
import Permission from "../components/Permission.vue";
import Sales from "../components/Sales.vue";
import ReportTool from "../components/ReportTool.vue";
import CustomerProfile from "../components/Customer/CustomerProfile.vue";
import CustomerDetails from "../components/Customer/CustomerDetails.vue";
import StyleManager from "../components/Style/StyleManager.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/product-form",
    name: "ProductForm",
    component: ProductForm,
  },
  {
    path: "/",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/permission",
    name: "permission",
    component: Permission,
  },
  {
    path: "/sale",
    name: "sale",
    component: Sales,
  },
  {
    path: "/report",
    name: "Report",
    component: ReportTool,
  },
  {
    path: "/CustomerProfile",
    name: "CustomerProfile",
    component: CustomerProfile,
  },
  {
    path: "/CustomerDetails",
    name: "CustomerDetails",
    component: CustomerDetails,
  },
  {
    path: "/stylemanager",
    name: "StyleManager",
    component: StyleManager,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
