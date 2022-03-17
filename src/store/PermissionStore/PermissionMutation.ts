import { MutationTree } from "vuex";
import { PermissionDataType } from "./PermissionDataType";
import axios from "axios";

type PermissionMutation = MutationTree<PermissionDataType>;

export const mutations: PermissionMutation = {
  //Permission Manager
  SAVE_PERMISSION(state, { event, switchVar }) {
    if (switchVar === "editProduct") {
      state.editProductSwitch = event;
    }
    if (switchVar === "size") {
      state.productSize = event;
    }
    if (switchVar === "color") {
      state.productColor = event;
    }
    if (switchVar === "gender") {
      state.gender = event;
    }
    if (switchVar === "productName") {
      state.productName = event;
    }
    if (switchVar === "price") {
      state.productPrice = event;
    }
    if (switchVar === "percentage") {
      state.productPercentage = event;
    }
    if (switchVar === "editPrice") {
      state.editPriceSwitch = event;
    }

    if (switchVar === "productsList") {
      state.productsList = event;
    }
    if (switchVar === "editProductList") {
      state.editProductList = event;
    }
    if (switchVar === "removeProductList") {
      state.removeProductList = event;
    }
    if (switchVar === "productDetailsList") {
      state.productDetailsList = event;
    }
    if (switchVar === "priceList") {
      state.priceList = event;
    }
  },
  //permission manager
};
