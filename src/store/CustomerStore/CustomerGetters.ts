import { GetterTree } from "vuex";
import { CustomerDataType } from "./CustomerDataType";
import { state } from "./CustomerState";

type CustomerGetters = GetterTree<CustomerDataType, any>;

export const getters: CustomerGetters = {
  CutomerToggle(state) {
    return state.CutomerToggle;
  },
  customerFirstNames: (state) => state.customerFirstName,
  customerLastName: (state) => state.customerLastName,
  customerGender: (state) => state.customerGender,
  customerNumber: (state) => state.customerNumber,
  cutomerAge: (state) => state.cutomerAge,

  customerLocality: (state) => state.customerLocality,
  customerCity: (state) => state.customerCity,
  customerState: (state) => state.customerState,
  customerCountry: (state) => state.customerCountry,
  customerPin: (state) => state.customerPin,
};
