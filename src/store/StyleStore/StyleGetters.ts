import { GetterTree } from "vuex";
import { StyleDataType } from "./StyleDataType";
import { state } from "./StyleState";
import { RootState } from "../type";

type StyleGetters = GetterTree<StyleDataType, RootState>;

export const getters: StyleGetters = {
  //ProductList
  productcolor(state) {
    return state.productPageColor;
  },
  productFontSize(state) {
    return state.productFontSize;
  },
  productBorder(state) {
    return state.productBorder;
  },
  //salePage
  saleBorder(state) {
    return state.saleBorder;
  },
  salePageColor(state) {
    return state.salePageColor;
  },
  saleFontSize(state) {
    return state.saleFontSize;
  },
  saleButtonColor(state) {
    return state.saleButtonColor;
  },

  //salePage
  //style Manager
  styleColors(state) {
    return state.styleColors;
  },
  styleSize(state) {
    return state.styleSize;
  },
  styleButtonColor(state) {
    return state.styleButtonColor;
  },
  styleBorder(state) {
    return state.styleBorder;
  },
  reportBorder(state) {
    return state.reportBorder;
  },
  reportPageColor(state) {
    return state.reportPageColor;
  },
  reportFontSize(state) {
    return state.reportFontSize;
  },
  //style Manager
  //CustomerDetails

  //CustomerDetails
  //Customer Form

  //Customer Form
};
