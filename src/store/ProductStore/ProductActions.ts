import { ActionTree } from "vuex";
import { ProductDataType } from "./ProductDataType";
import axios from "axios";
import { state } from "./ProductState";
import { RootState } from "../type";
type ProductActions = ActionTree<ProductDataType, RootState>;

export const actions: ProductActions = {
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
};
