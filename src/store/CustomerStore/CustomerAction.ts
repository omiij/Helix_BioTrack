import { ActionTree } from "vuex";
import { CustomerDataType } from "./CustomerDataType";
import axios from "axios";
type CustomerActions = ActionTree<CustomerDataType, any>;

export const actions: CustomerActions = {
  async addCustomerData({ commit }) {
    const response = await axios.get("http://localhost:3000/customerData");
    commit("ADD_CUSTOMER_DATA", response.data);
  },
  editCustomerData({ commit }, item) {
    commit("EDIT_CUSTOMER_DATA", item);
  },
};
