import { GetterTree } from "vuex";
import { PermissionDataType } from "./PermissionDataType";
import { state } from "./PermissionState";
import { RootState } from "../type";
type PermissionGetters = GetterTree<PermissionDataType, RootState>;

export const getters: PermissionGetters = {
  //Permission Manager
  editProductSwitch(state) {
    return state.editProductSwitch;
  },
  editPriceSwitch(state) {
    return state.editPriceSwitch;
  },
  productsList(state) {
    return state.productsList;
  },
  productName(state) {
    return state.productName;
  },
  productSize(state) {
    return state.productSize;
  },
  productColor(state) {
    return state.productColor;
  },
  gender(state) {
    return state.gender;
  },
  productPrice(state) {
    return state.productPrice;
  },
  productPercentage(state) {
    return state.productPercentage;
  },
  editProductList(state) {
    return state.editProductList;
  },
  removeProductList(state) {
    return state.removeProductList;
  },

  productDetailsList(state) {
    return state.productDetailsList;
  },
  priceList(state) {
    return state.priceList;
  },

  //Permission Manager
};
