import { CustomerDataType } from "./AllDataType";

export const state: CustomerDataType = {
  //Product-Form and Product-List
  products: [],

  sizes: [
    "XS" as string,
    "S" as string,
    "M" as string,
    "L" as string,
    "XL" as string,
    "XXL" as string,
    "XXXL" as string,
  ],
  color: [
    "Red" as string,
    "Orange" as string,
    "Yellow" as string,
    "Green" as string,
    "Blue" as string,
    "Pink" as string,
    "Purple" as string,
    "Brown" as string,
  ],
  id: 0 as number,
  productInput: "" as string,
  sizeInput: "" as string,
  genderInput: "" as string,
  colorInput: "" as string,
  priceInput: 0 as number,
  percentageInput: 0 as number,
  total: 0,
  quantity: 0,
  toggle: true as boolean,
  //Product-Form and Product-List

  //Cart-products
  cartProducts: [],
  cartTotal: 0 as number,
  cartQuantity: 0 as number,
  totalAmount: 0 as number,
  //Cart-products

  //Permission Manager
  editProductSwitch: true as boolean,
  productName: true as boolean,
  productSize: true as boolean,
  productColor: true as boolean,
  gender: true as boolean,
  editPriceSwitch: true as boolean,
  productPrice: true as boolean,
  productPercentage: true as boolean,
  productsList: true as boolean,
  editProductList: true as boolean,
  removeProductList: true as boolean,
  productDetailsList: true as boolean,
  priceList: true as boolean,

  //Cutomer Details
  cutomerDetails: [] as [],
  csId: 0 as number,
  CutomerToggle: true as boolean,
  customerFirstName: "" as string,
  customerLastName: "" as string,
  customerGender: "" as string,
  customerNumber: 0 as number,
  cutomerAge: 0 as number,

  customerLocality: "" as string,
  customerCity: "" as string,
  customerState: "" as string,
  customerCountry: "" as string,
  customerPin: 0 as number,
  //Cutomer Details

  //style Manager
  styleColors: [
    "red" as string,
    "orange" as string,
    "yellow" as string,
    "green" as string,
    "blue" as string,
    "pink" as string,
    "purple" as string,
    "brown" as string,
  ],
  styleSize: [
    "0.75rem" as string,
    "1rem" as string,
    "1.5rem" as string,
    "2rem" as string,
    "2.5rem" as string,
  ],
  styleBorder: [
    "red" as string,
    "orange" as string,
    "yellow" as string,
    "green" as string,
    "blue" as string,
    "pink" as string,
    "purple" as string,
    "brown" as string,
  ],
  styleButtonColor: [
    "red" as string,
    "orange" as string,
    "yellow" as string,
    "green" as string,
    "blue" as string,
    "pink" as string,
    "purple" as string,
    "brown" as string,
  ],
  productPageColor: "" as string,
  productFontSize: "" as string,
  productButtonColor: "" as string,
  productBorder: "" as string,

  salePageColor: "" as string,
  saleFontSize: "" as string,
  saleButtonColor: "" as string,
  saleBorder: "" as string,

  reportPageColor: "" as string,
  reportFontSize: "" as string,
  reportButtonColor: "" as string,
  reportBorder: "" as string,

  //style Manager
};
