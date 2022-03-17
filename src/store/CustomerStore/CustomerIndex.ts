import { Module } from "vuex";
import { actions } from "./CustomerAction";
import { getters } from "./CustomerGetters";
import { mutations } from "./CustomerMutation";
import { state } from "./CustomerState";
import { CustomerDataType } from "./CustomerDataType";
const namespaced = true as boolean;

export const CustomerModule: Module<CustomerDataType, any> = {
  namespaced,
  state,
  actions,
  getters,
  mutations,
};
