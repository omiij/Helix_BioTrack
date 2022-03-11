import { MutationTree } from "vuex";
import { CustomerDataType } from "./CustomerDataType";

type CustomerMutation = MutationTree<CustomerDataType>;

export const mutations: CustomerMutation = {
  ADD_CUSTOMER_DATA(state: CustomerDataType, cutomerData) {
    state.cutomerDetails = cutomerData;
  },
  EDIT_CUSTOMER_DATA(state: CustomerDataType, item) {
    state.CutomerToggle = false;
    state.csId = item.id;
    state.customerFirstName = item.firstName;
    state.customerLastName = item.lastName;
    state.customerNumber = item.number;
    state.customerGender = item.gender;
    state.cutomerAge = item.age;
    state.customerLocality = item.locality;

    state.customerCity = item.city;
    state.customerState = item.state;
    state.customerCountry = item.country;
    state.customerPin = item.pin;
  },
};
