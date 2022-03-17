import { ActionTree } from "vuex";
import { SaleDataType } from "./SaleDataType";
import axios from "axios";
import { state } from "./SaleState";
import { RootState } from "../type";
type SaleActions = ActionTree<SaleDataType, RootState>;

export const actions: SaleActions = {
  //Cart-products
  async addToCart({ commit }, payload): Promise<void> {
    commit("ADD_TO_CART", payload);
    console.log(payload.item);
  },
  deleteDataCart({ commit }) {
    commit("DELETE_DATA_CART");
  },
  //cart-product
};
