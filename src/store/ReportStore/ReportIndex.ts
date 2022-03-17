import { Module } from "vuex";
// import { actions } from "./ReportActions";
import { getters } from "./ReportGetters";
// import { mutations } from "./ProductMutation";
import { state } from "./ReportState";
import { ReportDataType } from "./ReportDataType";
const namespaced = true as boolean;

export const ReportModule: Module<ReportDataType, any> = {
  state,
  namespaced,
  getters,
};
