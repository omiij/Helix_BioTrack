import { GetterTree } from "vuex";
import { ProductDataType } from "./ProductDataType";
import { state } from "./ProductState";
import { RootState } from "../type";

type ProductGetters = GetterTree<ProductDataType, RootState>;

export const getters: ProductGetters = {
  products(state) {
    return state.products;
  },
  //ProductList
  //   productcolor(state) {
  //     return state.productPageColor;
  //   },
  //   productFontSize(state) {
  //     return state.productFontSize;
  //   },
  //   productBorder(state) {
  //     return state.productBorder;
  //   },
  //   productsList(state) {
  //     return state.productsList;
  //   },
  //   productDetailsList(state) {
  //     return state.productDetailsList;
  //   },
  //   editProductList(state) {
  //     return state.editProductList;
  //   },
  //   removeProductList(state) {
  //     return state.removeProductList;
  //   },
  // productInputs: (state) => state.productInput,

  // sizeInputs(state) {
  //   return state.sizeInput;
  // },
  // genderInputs(state) {
  //   return state.genderInput;
  // },
  //ProductList

  //Product Form
  // productName(state) {
  //   return state.productName;
  // },
  // productSize(state) {
  //   return state.productSize;
  // },
  // gender(state) {
  //   return state.gender;
  // },
  // productColor(state) {
  //   return state.productColor;
  // },
  // productPrice(state) {
  //   return state.productPrice;
  // },
  // productPercentage(state) {
  //   return state.productPercentage;
  // },
  ID(state) {
    return state.id;
  },
  color(state) {
    return state.color;
  },
  sizes(state) {
    return state.sizes;
  },
  //Product Form
};
