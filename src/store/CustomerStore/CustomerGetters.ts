import { GetterTree } from "vuex";
import { CustomerDataType } from "./CustomerDataType";
import { state } from "./CustomerState";
import { RootState } from "../type";

type CustomerGetters = GetterTree<CustomerDataType, RootState>;

export const getters: CustomerGetters = {
  //CustomerDetails
  // CutomerToggle(state) {
  //   return state.CutomerToggle;
  // },
  //CustomerDetails
};
