import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import ProductList from "../components/Products/productList";
import ProductForm from "../components/Products/ProductForm";
import Permission from "../components/Permission/Permission";
import Sales from "../components/Sale/Sales";
import ReportTool from "../components/Report/Report";
import CustomerProfile from "../components/Customer/CustomerProfile";
import CustomerDetails from "../components/Customer/CustomerDetails";
import StyleManager from "../components/Style/StyleManager";
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
