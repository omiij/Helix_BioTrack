import { ActionTree } from "vuex";
import { CustomerDataType } from "./AllDataType";
import axios from "axios";
import { state } from "./AllState";
type CustomerActions = ActionTree<CustomerDataType, any>;

export const actions: CustomerActions = {
  // async addCustomerData({ commit }) {
  //   const response = await axios.get("http://localhost:3000/customerData");
  //   commit("ADD_CUSTOMER_DATA", response.data);
  // },
  // editCustomerData({ commit }, item) {
  //   commit("EDIT_CUSTOMER_DATA", item);
  // },

  //Product-Form and Product-List
  async addData({ commit }) {
    const response = await axios.get("http://localhost:3000/Products");
    commit("ADD_DATA", response.data);
  },
  async deleteData({ commit }, alldata) {
    commit("DELETE_DATA", alldata);
  },
  editData({ commit }, item) {
    commit("EDIT_DATA", item);
  },
  async changeData({ commit }) {
    await axios.put(`http://localhost:3000/Products/${state.id}/`, {
      product: "Hello",
      size: state.sizeInput,
      gender: state.genderInput,
      color: state.colorInput,
      price: state.priceInput,
      percentage: state.percentageInput,
    });
    console.log("Updated action");

    commit("changeData");
  },
  //Product-Form and Product-List

  //Cart-products
  async addToCart({ commit }, payload) {
    commit("ADD_TO_CART", payload);
    console.log(payload.item);
  },

  //Permission Manager
  savePermissions({ commit }, { event, switchVar }) {
    commit("SAVE_PERMISSION", { event, switchVar });
  },
  deleteDataCart({ commit }) {
    commit("DELETE_DATA_CART");
  },
  //Customer profile manager
  async addCustomerData({ commit }) {
    const response = await axios.get("http://localhost:3000/customerData");
    commit("ADD_CUSTOMER_DATA", response.data);
  },
  editCustomerData({ commit }, item) {
    commit("EDIT_CUSTOMER_DATA", item);
  },
  //Customer profile manager
};
