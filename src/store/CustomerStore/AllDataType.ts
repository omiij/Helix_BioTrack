export interface CustomerDataType {
  //Product-Form and Product-List
  products: [];

  sizes: [string, string, string, string, string, string, string];
  color: [string, string, string, string, string, string, string, string];
  id: number;
  productInput: string;
  sizeInput: string;
  genderInput: string;
  colorInput: string;
  priceInput: number;
  percentageInput: number;
  total: number;
  quantity: 0;
  toggle: boolean;
  //Product-Form and Product-List

  //Cart-products
  cartProducts: [];
  cartTotal: number;
  cartQuantity: number;
  totalAmount: number;
  //Cart-products

  //Permission Manager
  editProductSwitch: boolean;
  productName: boolean;
  productSize: boolean;
  productColor: boolean;
  gender: boolean;
  editPriceSwitch: boolean;
  productPrice: boolean;
  productPercentage: boolean;
  productsList: boolean;
  editProductList: boolean;
  removeProductList: boolean;
  productDetailsList: boolean;
  priceList: boolean;

  //Cutomer Details
  cutomerDetails: [];
  csId: number;
  CutomerToggle: boolean;
  customerFirstName: string;
  customerLastName: string;
  customerGender: string;
  customerNumber: number;
  cutomerAge: number;

  customerLocality: string;
  customerCity: string;
  customerState: string;
  customerCountry: string;
  customerPin: number;
  //Cutomer Details

  //style Manager
  styleColors: [string, string, string, string, string, string, string, string];
  styleSize: [string, string, string, string, string];
  styleBorder: [string, string, string, string, string, string, string, string];
  styleButtonColor: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
  ];
  productPageColor: string;
  productFontSize: string;
  productButtonColor: string;
  productBorder: string;

  salePageColor: string;
  saleFontSize: string;
  saleButtonColor: string;
  saleBorder: string;

  reportPageColor: string;
  reportFontSize: string;
  reportButtonColor: string;
  reportBorder: string;

  //style Manager
}
