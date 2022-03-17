import { ActionContext, ActionTree } from "vuex";
import { CustomerDataType } from "./CustomerDataType";
import axios from "axios";
import { state } from "./CustomerState";
import { RootState } from "../type";
type CustomerActions = ActionTree<CustomerDataType, RootState>;
type context = ActionContext<CustomerDataType, RootState>;
export const actions: CustomerActions = {
  //Customer profile manager
  async addCustomerData(context: context): Promise<void> {
    const response = await axios.get("http://localhost:3000/customerData");
    context.commit("ADD_CUSTOMER_DATA", response.data);
  },
  editCustomerData({ commit }, item) {
    commit("EDIT_CUSTOMER_DATA", item);
  },
  //Customer profile manager
};
