import { Module } from "vuex";
import { actions } from "./CustomerAction";
import { getters } from "./CustomerGetters";
import { mutations } from "./CustomerMuttation";
import { state } from "./CustomerState";
import { CustomerDataType } from "./CustomerDataType";

export const CustomerModule: Module<CustomerDataType, any> = {
  state,
  actions,
  getters,
  mutations,
};
