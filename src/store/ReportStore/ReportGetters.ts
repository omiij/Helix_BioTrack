import { GetterTree } from "vuex";
import { ReportDataType } from "./ReportDataType";
import { state } from "./ReportState";
import { RootState } from "../type";

type ReportGetters = GetterTree<ReportDataType, RootState>;

export const getters: ReportGetters = {
  //CustomerDetails
  CutomerToggle(state) {
    return state.CutomerToggle;
  },
  //CustomerDetails
};
