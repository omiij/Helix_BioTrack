import { GetterTree } from "vuex";
import { CustomerDataType } from "./AllDataType";
import { state } from "./AllState";

type CustomerGetters = GetterTree<CustomerDataType, any>;

export const getters: CustomerGetters = {
  // CutomerToggle(state) {
  //   return state.CutomerToggle;
  // },
  // customerFirstNames: (state) => state.customerFirstName,
  // customerLastName: (state) => state.customerLastName,
  // customerGender: (state) => state.customerGender,
  // customerNumber: (state) => state.customerNumber,
  // cutomerAge: (state) => state.cutomerAge,

  // customerLocality: (state) => state.customerLocality,
  // customerCity: (state) => state.customerCity,
  // customerState: (state) => state.customerState,
  // customerCountry: (state) => state.customerCountry,
  // customerPin: (state) => state.customerPin,

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
  productsList(state) {
    return state.productsList;
  },
  productDetailsList(state) {
    return state.productDetailsList;
  },
  editProductList(state) {
    return state.editProductList;
  },
  removeProductList(state) {
    return state.removeProductList;
  },
  productInputs: (state) => state.productInput,

  sizeInputs(state) {
    return state.sizeInput;
  },
  genderInputs(state) {
    return state.genderInput;
  },
  //ProductList

  //Product Form
  productName(state) {
    return state.productName;
  },
  productSize(state) {
    return state.productSize;
  },
  gender(state) {
    return state.gender;
  },
  productColor(state) {
    return state.productColor;
  },
  productPrice(state) {
    return state.productPrice;
  },
  productPercentage(state) {
    return state.productPercentage;
  },

  ID(state) {
    return state.id;
  },
  color(state) {
    return state.color;
  },
  sizes(state) {
    return state.sizes;
  },
  //Product Form
  //Permission Manager
  editProductSwitch(state) {
    return state.editProductSwitch;
  },
  editPriceSwitch(state) {
    return state.editPriceSwitch;
  },
  //Permission Manager
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
  totalAmount(state) {
    return state.totalAmount;
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
  CutomerToggle(state) {
    return state.CutomerToggle;
  },
  //CustomerDetails
  //Customer Form

  //Customer Form
};
