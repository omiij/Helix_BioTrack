import { GetterTree } from "vuex";
import { SaleDataType } from "./SaleDataType";
import { state } from "./SaleState";
import { RootState } from "../type";
type SaleGetters = GetterTree<SaleDataType, RootState>;

export const getters: SaleGetters = {
  totalAmount(state) {
    return state.totalAmount;
  },
  cartTotal(state) {
    return state.cartProducts;
  },
  cartProducts(state) {
    return state.cartProducts;
  },
};
