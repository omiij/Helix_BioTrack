import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { CustomerModule } from "../store/CustomerStore/AlIndex";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: { CustomerModule },
  // state: {
  //   //Product-Form and Product-List
  //   products: [] as any[],

  //   sizes: [
  //     "XS" as string,
  //     "S" as string,
  //     "M" as string,
  //     "L" as string,
  //     "XL" as string,
  //     "XXL" as string,
  //     "XXXL" as string,
  //   ],
  //   color: [
  //     "Red" as string,
  //     "Orange" as string,
  //     "Yellow" as string,
  //     "Green" as string,
  //     "Blue" as string,
  //     "Pink" as string,
  //     "Purple" as string,
  //     "Brown" as string,
  //   ],
  //   id: 0 as number,
  //   productInput: "" as string,
  //   sizeInput: "" as string,
  //   genderInput: "" as string,
  //   colorInput: "" as string,
  //   priceInput: 0 as number,
  //   percentageInput: 0 as number,
  //   total: 0,
  //   quantity: 0,
  //   toggle: true as boolean,
  //   //Product-Form and Product-List

  //   //Cart-products
  //   cartProducts: [] as any[],
  //   cartTotal: 0 as number,
  //   cartQuantity: 0 as number,
  //   totalAmount: 0 as number,
  //   //Cart-products

  //   //Permission Manager
  //   editProductSwitch: true as boolean,
  //   productName: true as boolean,
  //   productSize: true as boolean,
  //   productColor: true as boolean,
  //   gender: true as boolean,
  //   editPriceSwitch: true as boolean,
  //   productPrice: true as boolean,
  //   productPercentage: true as boolean,
  //   productsList: true as boolean,
  //   editProductList: true as boolean,
  //   removeProductList: true as boolean,
  //   productDetailsList: true as boolean,
  //   priceList: true as boolean,

  //   //Cutomer Details
  //   cutomerDetails: [] as [],
  //   csId: 0 as number,
  //   CutomerToggle: true as boolean,
  //   customerFirstName: "" as string,
  //   customerLastName: "" as string,
  //   customerGender: "" as string,
  //   customerNumber: 0 as number,
  //   cutomerAge: 0 as number,

  //   customerLocality: "" as string,
  //   customerCity: "" as string,
  //   customerState: "" as string,
  //   customerCountry: "" as string,
  //   customerPin: 0 as number,
  //   //Cutomer Details

  //   //style Manager
  //   styleColors: [
  //     "red" as string,
  //     "orange" as string,
  //     "yellow" as string,
  //     "green" as string,
  //     "blue" as string,
  //     "pink" as string,
  //     "purple" as string,
  //     "brown" as string,
  //   ],
  //   styleSize: [
  //     "0.75rem" as string,
  //     "1rem" as string,
  //     "1.5rem" as string,
  //     "2rem" as string,
  //     "2.5rem" as string,
  //   ],
  //   styleBorder: [
  //     "red" as string,
  //     "orange" as string,
  //     "yellow" as string,
  //     "green" as string,
  //     "blue" as string,
  //     "pink" as string,
  //     "purple" as string,
  //     "brown" as string,
  //   ],
  //   styleButtonColor: [
  //     "red" as string,
  //     "orange" as string,
  //     "yellow" as string,
  //     "green" as string,
  //     "blue" as string,
  //     "pink" as string,
  //     "purple" as string,
  //     "brown" as string,
  //   ],
  //   productPageColor: "" as string,
  //   productFontSize: "" as string,
  //   productButtonColor: "" as string,
  //   productBorder: "" as string,

  //   salePageColor: "" as string,
  //   saleFontSize: "" as string,
  //   saleButtonColor: "" as string,
  //   saleBorder: "" as string,

  //   reportPageColor: "" as string,
  //   reportFontSize: "" as string,
  //   reportButtonColor: "" as string,
  //   reportBorder: "" as string,

  //   //style Manager
  // },
  // getters: {
  //   //ProductList
  //   productcolor(state) {
  //     return state.productPageColor;
  //   },
  //   productFontSize(state) {
  //     return state.productFontSize;
  //   },
  //   productBorder(state) {
  //     return state.productBorder;
  //   },
  //   productsList(state) {
  //     return state.productsList;
  //   },
  //   productDetailsList(state) {
  //     return state.productDetailsList;
  //   },
  //   editProductList(state) {
  //     return state.editProductList;
  //   },
  //   removeProductList(state) {
  //     return state.removeProductList;
  //   },
  //   //ProductList

  //   //Product Form
  //   productName(state) {
  //     return state.productName;
  //   },
  //   productSize(state) {
  //     return state.productSize;
  //   },
  //   gender(state) {
  //     return state.gender;
  //   },
  //   productColor(state) {
  //     return state.productColor;
  //   },
  //   productPrice(state) {
  //     return state.productPrice;
  //   },
  //   productPercentage(state) {
  //     return state.productPercentage;
  //   },
  //   toggle(state) {
  //     return state.toggle;
  //   },
  //   //Product Form
  //   //Permission Manager
  //   editProductSwitch(state) {
  //     return state.editProductSwitch;
  //   },
  //   editPriceSwitch(state) {
  //     return state.editPriceSwitch;
  //   },
  //   //Permission Manager
  //   //salePage
  //   saleBorder(state) {
  //     return state.saleBorder;
  //   },
  //   salePageColor(state) {
  //     return state.salePageColor;
  //   },
  //   saleFontSize(state) {
  //     return state.saleFontSize;
  //   },
  //   saleButtonColor(state) {
  //     return state.saleButtonColor;
  //   },
  //   //salePage
  //   //style Manager
  //   styleColors(state) {
  //     return state.styleColors;
  //   },
  //   styleSize(state) {
  //     return state.styleSize;
  //   },
  //   styleButtonColor(state) {
  //     return state.styleButtonColor;
  //   },
  //   styleBorder(state) {
  //     return state.styleBorder;
  //   },
  //   reportBorder(state) {
  //     return state.reportBorder;
  //   },
  //   reportPageColor(state) {
  //     return state.reportPageColor;
  //   },
  //   reportFontSize(state) {
  //     return state.reportFontSize;
  //   },
  //   //style Manager
  //   //CustomerDetails
  //   // CutomerToggle(state) {
  //   //   return state.CutomerToggle;
  //   // },
  //   //CustomerDetails
  //   //Customer Form

  //   //Customer Form
  // },
  // mutations: {
  //   //Product-Form and Product-List
  //   ADD_DATA(state, allInputs) {
  //     state.products = allInputs;
  //   },
  //   DELETE_DATA(state, alldata) {
  //     state.products = alldata;
  //   },
  //   EDIT_DATA(state, item) {
  //     state.toggle = false;
  //     state.id = item.id;
  //     state.productInput = item.product;
  //     state.sizeInput = item.size;
  //     state.colorInput = item.color;
  //     state.genderInput = item.gender;
  //     state.priceInput = item.price;
  //     state.percentageInput = item.percentage;
  //   },
  //   async changeData(state) {
  //     console.log(state.productInput);
  //     state.productInput = "";
  //     state.sizeInput = "";
  //     state.colorInput = "";
  //     state.genderInput = "";
  //     state.priceInput = 0;
  //     state.percentageInput = 0;
  //     state.toggle = true;
  //   },
  //   //Product-Form and Product-List

  //   //Cart-products
  //   async ADD_TO_CART(state, payload) {
  //     const dataUploadded = await axios.get(
  //       "http://localhost:3000/cartProduct"
  //     );

  //     const TempItem = dataUploadded.data.filter((data: any) => {
  //       return data.id === payload.item.id;
  //     });
  //     console.log(TempItem, "Hello");

  //     const addItems = {
  //       product: payload.item.product,
  //       color: payload.item.color,
  //       size: payload.item.size,
  //       gender: payload.item.gender,
  //       price: payload.item.price,
  //       tax: payload.item.percentage,
  //       unit: payload.count,
  //       total:
  //         parseFloat(payload.item.price) * parseFloat(payload.count) +
  //         (parseFloat(payload.item.price) *
  //           parseFloat(payload.item.percentage)) /
  //           100,
  //       id: payload.item.id,
  //     };
  //     if (TempItem.length === 0) {
  //       state.cartProducts.push(addItems);
  //       await axios.post("http://localhost:3000/cartProduct", addItems);
  //     } else {
  //       // state.cartProducts.forEach((data: any) => {
  //       //   if (data.id === payload.item.id) {
  //       //     data.unit = data.unit + addItems.unit;
  //       //     data.total = data.total + addItems.total;
  //       //   }
  //       // });
  //       TempItem[0].unit = TempItem[0].unit + addItems.unit;
  //       TempItem[0].total = TempItem[0].total + addItems.total;
  //       const DataItem = { ...TempItem[0] };
  //       // DataItem.product = addItems.product;
  //       DataItem.unit = TempItem[0].unit;
  //       DataItem.total = TempItem[0].total;
  //       // DataItem.id = addItems.id;
  //       await axios.put(
  //         "http://localhost:3000/cartProduct/" + TempItem[0].id,
  //         DataItem
  //       );
  //     }
  //     state.totalAmount = state.cartProducts.reduce((acc, curr) => {
  //       return acc + parseFloat(curr.total);
  //     }, 0);
  //     console.log(state.cartProducts);
  //   },
  //   async DELETE_DATA_CART() {
  //     const dataUploadded = await axios.get(
  //       "http://localhost:3000/cartProduct"
  //     );
  //     dataUploadded.data.forEach(async (item: any) => {
  //       await axios.delete("http://localhost:3000/cartProduct/" + item.id);
  //     });
  //   },
  //   //Cart-products
  //   //Permission Manager
  //   SAVE_PERMISSION(state, { event, switchVar }) {
  //     if (switchVar === "editProduct") {
  //       state.editProductSwitch = event;
  //     }
  //     if (switchVar === "size") {
  //       state.productSize = event;
  //     }
  //     if (switchVar === "color") {
  //       state.productColor = event;
  //     }
  //     if (switchVar === "gender") {
  //       state.gender = event;
  //     }
  //     if (switchVar === "productName") {
  //       state.productName = event;
  //     }
  //     if (switchVar === "price") {
  //       state.productPrice = event;
  //     }
  //     if (switchVar === "percentage") {
  //       state.productPercentage = event;
  //     }
  //     if (switchVar === "editPrice") {
  //       state.editPriceSwitch = event;
  //     }

  //     if (switchVar === "productsList") {
  //       state.productsList = event;
  //     }
  //     if (switchVar === "editProductList") {
  //       state.editProductList = event;
  //     }
  //     if (switchVar === "removeProductList") {
  //       state.removeProductList = event;
  //     }
  //     if (switchVar === "productDetailsList") {
  //       state.productDetailsList = event;
  //     }
  //     if (switchVar === "priceList") {
  //       state.priceList = event;
  //     }
  //   },
  //   //customer profile manager
  //   // ADD_CUSTOMER_DATA(state, cutomerData) {
  //   //   state.cutomerDetails = cutomerData;
  //   // },
  //   // EDIT_CUSTOMER_DATA(state, item) {
  //   //   state.CutomerToggle = false;
  //   //   state.csId = item.id;
  //   //   state.customerFirstName = item.firstName;
  //   //   state.customerLastName = item.lastName;
  //   //   state.customerNumber = item.number;
  //   //   state.customerGender = item.gender;
  //   //   state.cutomerAge = item.age;
  //   //   state.customerLocality = item.locality;

  //   //   state.customerCity = item.city;
  //   //   state.customerState = item.state;
  //   //   state.customerCountry = item.country;
  //   //   state.customerPin = item.pin;
  //   // },
  //   //customer profile manager
  // },
  // actions: {
  //   //Product-Form and Product-List
  //   async addData({ commit }) {
  //     const response = await axios.get("http://localhost:3000/Products");
  //     commit("ADD_DATA", response.data);
  //   },
  //   async deleteData({ commit }, alldata) {
  //     commit("DELETE_DATA", alldata);
  //   },
  //   editData({ commit }, item) {
  //     commit("EDIT_DATA", item);
  //   },
  //   async changeData({ commit }) {
  //     await axios.put(`http://localhost:3000/Products/${this.state.id}/`, {
  //       product: "Hello",
  //       size: this.state.sizeInput,
  //       gender: this.state.genderInput,
  //       color: this.state.colorInput,
  //       price: this.state.priceInput,
  //       percentage: this.state.percentageInput,
  //     });
  //     console.log("Updated action");

  //     commit("changeData");
  //   },
  //   //Product-Form and Product-List

  //   //Cart-products
  //   async addToCart({ commit }, payload) {
  //     commit("ADD_TO_CART", payload);
  //     console.log(payload.item);
  //   },

  //   //Permission Manager
  //   savePermissions({ commit }, { event, switchVar }) {
  //     commit("SAVE_PERMISSION", { event, switchVar });
  //   },
  //   deleteDataCart({ commit }) {
  //     commit("DELETE_DATA_CART");
  //   },
  //   //Customer profile manager
  //   // async addCustomerData({ commit }) {
  //   //   const response = await axios.get("http://localhost:3000/customerData");
  //   //   commit("ADD_CUSTOMER_DATA", response.data);
  //   // },
  //   // editCustomerData({ commit }, item) {
  //   //   commit("EDIT_CUSTOMER_DATA", item);
  //   // },
  //   //Customer profile manager
  // },
});
