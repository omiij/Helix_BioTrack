import { MutationTree } from "vuex";
import { ReportDataType } from "./ReportDataType";
import axios from "axios";

type CustomerMutation = MutationTree<ReportDataType>;

export const mutations: CustomerMutation = {
  //customer profile manager
  ADD_CUSTOMER_DATA(state, cutomerData) {
    state.cutomerDetails = cutomerData;
  },
  EDIT_CUSTOMER_DATA(state, item) {
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
  //customer profile manager
};
