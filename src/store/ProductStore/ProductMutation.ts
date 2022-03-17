import { MutationTree } from "vuex";
import { ProductDataType } from "./ProductDataType";
import axios from "axios";

type ProductMutation = MutationTree<ProductDataType>;

export const mutations: ProductMutation = {
  //Product-Form and Product-List
  ADD_DATA(state, allInputs) {
    state.products = allInputs;
  },
  DELETE_DATA(state, alldata) {
    state.products = alldata;
  },
  EDIT_DATA(state, item) {
    state.toggle = false;
    state.id = item.id;
    state.productInput = item.product;
    state.sizeInput = item.size;
    state.colorInput = item.color;
    state.genderInput = item.gender;
    state.priceInput = item.price;
    state.percentageInput = item.percentage;
  },
  async changeData(state) {
    console.log(state.productInput);
    state.productInput = "";
    state.sizeInput = "";
    state.colorInput = "";
    state.genderInput = "";
    state.priceInput = 0;
    state.percentageInput = 0;
    state.toggle = true;
  },
  //Product-Form and Product-List
};
