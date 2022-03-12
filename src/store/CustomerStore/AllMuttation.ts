import { MutationTree } from "vuex";
import { CustomerDataType } from "./AllDataType";
import axios from "axios";

type CustomerMutation = MutationTree<CustomerDataType>;

export const mutations: CustomerMutation = {
  // ADD_CUSTOMER_DATA(state: CustomerDataType, cutomerData) {
  //   state.cutomerDetails = cutomerData;
  // },
  // EDIT_CUSTOMER_DATA(state: CustomerDataType, item) {
  //   state.CutomerToggle = false;
  //   state.csId = item.id;
  //   state.customerFirstName = item.firstName;
  //   state.customerLastName = item.lastName;
  //   state.customerNumber = item.number;
  //   state.customerGender = item.gender;
  //   state.cutomerAge = item.age;
  //   state.customerLocality = item.locality;

  //   state.customerCity = item.city;
  //   state.customerState = item.state;
  //   state.customerCountry = item.country;
  //   state.customerPin = item.pin;
  // },

  //Product-Form and Product-List
  ADD_DATA(state, allInputs) {
    state.products = allInputs;
  },
  DELETE_DATA(state, alldata) {
    state.products = alldata;
  },
  EDIT_DATA(state, item) {
    state.toggle = false;
    state.id = item.id;
    state.productInput = item.product;
    state.sizeInput = item.size;
    state.colorInput = item.color;
    state.genderInput = item.gender;
    state.priceInput = item.price;
    state.percentageInput = item.percentage;
  },
  async changeData(state) {
    console.log(state.productInput);
    state.productInput = "";
    state.sizeInput = "";
    state.colorInput = "";
    state.genderInput = "";
    state.priceInput = 0;
    state.percentageInput = 0;
    state.toggle = true;
  },
  //Product-Form and Product-List

  //Cart-products
  async ADD_TO_CART(state: any, payload: any) {
    const dataUploadded = await axios.get("http://localhost:3000/cartProduct");

    const TempItem = dataUploadded.data.filter((data: any) => {
      return data.id === payload.item.id;
    });
    console.log(TempItem, "Hello");

    const addItems = {
      product: payload.item.product as string,
      color: payload.item.color as string,
      size: payload.item.size as string,
      gender: payload.item.gender as string,
      price: payload.item.price as string,
      tax: payload.item.percentage as string,
      unit: payload.count as number,
      total:
        parseFloat(payload.item.price) * parseFloat(payload.count) +
        (parseFloat(payload.item.price) * parseFloat(payload.item.percentage)) /
          100,
      id: payload.item.id,
    };
    if (TempItem.length === 0) {
      state.cartProducts.push(addItems);
      await axios.post("http://localhost:3000/cartProduct", addItems);
    } else {
      // state.cartProducts.forEach((data: any) => {
      //   if (data.id === payload.item.id) {
      //     data.unit = data.unit + addItems.unit;
      //     data.total = data.total + addItems.total;
      //   }
      // });
      TempItem[0].unit = TempItem[0].unit + addItems.unit;
      TempItem[0].total = TempItem[0].total + addItems.total;
      const DataItem = { ...TempItem[0] };
      // DataItem.product = addItems.product;
      DataItem.unit = TempItem[0].unit;
      DataItem.total = TempItem[0].total;
      // DataItem.id = addItems.id;
      await axios.put(
        "http://localhost:3000/cartProduct/" + TempItem[0].id,
        DataItem
      );
    }
    state.totalAmount = state.cartProducts.reduce((acc: any, curr: any) => {
      return acc + parseFloat(curr.total);
    }, 0);
    console.log(state.cartProducts);
  },
  async DELETE_DATA_CART() {
    const dataUploadded = await axios.get("http://localhost:3000/cartProduct");
    dataUploadded.data.forEach(async (item: any) => {
      await axios.delete("http://localhost:3000/cartProduct/" + item.id);
    });
  },
  //Cart-products
  //Permission Manager
  SAVE_PERMISSION(state, { event, switchVar }) {
    if (switchVar === "editProduct") {
      state.editProductSwitch = event;
    }
    if (switchVar === "size") {
      state.productSize = event;
    }
    if (switchVar === "color") {
      state.productColor = event;
    }
    if (switchVar === "gender") {
      state.gender = event;
    }
    if (switchVar === "productName") {
      state.productName = event;
    }
    if (switchVar === "price") {
      state.productPrice = event;
    }
    if (switchVar === "percentage") {
      state.productPercentage = event;
    }
    if (switchVar === "editPrice") {
      state.editPriceSwitch = event;
    }

    if (switchVar === "productsList") {
      state.productsList = event;
    }
    if (switchVar === "editProductList") {
      state.editProductList = event;
    }
    if (switchVar === "removeProductList") {
      state.removeProductList = event;
    }
    if (switchVar === "productDetailsList") {
      state.productDetailsList = event;
    }
    if (switchVar === "priceList") {
      state.priceList = event;
    }
  },
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
