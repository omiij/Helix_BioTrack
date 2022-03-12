import { Module } from "vuex";
import { actions } from "./AllAction";
import { getters } from "./AllGetters";
import { mutations } from "./AllMuttation";
import { state } from "./AllState";
import { CustomerDataType } from "./AllDataType";

export const CustomerModule: Module<CustomerDataType, any> = {
  state,
  actions,
  getters,
  mutations,
};
