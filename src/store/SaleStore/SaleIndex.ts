import { Module } from "vuex";
import { actions } from "./SaleActions";
import { getters } from "./SaleGetters";
import { mutations } from "./SaleMutation";
import { state } from "./SaleState";
import { SaleDataType } from "./SaleDataType";

const namespaced = true as boolean;

export const SaleModule: Module<SaleDataType, any> = {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
