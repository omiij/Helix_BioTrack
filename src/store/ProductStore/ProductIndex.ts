import { Module } from "vuex";
import { actions } from "./ProductActions";
import { getters } from "./ProductGetters";
import { mutations } from "./ProductMutation";
import { state } from "./ProductState";
import { ProductDataType } from "./ProductDataType";
const namespaced = true as boolean;

export const ProductModule: Module<ProductDataType, any> = {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
