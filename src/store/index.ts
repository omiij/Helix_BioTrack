import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Product-Form and Product-List
    products: [] as any[],

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
    cartProducts: [] as any[],
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
  },
  getters: {},
  mutations: {
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
    ADD_TO_CART(state, payload) {
      const TempItem = state.cartProducts.filter((data: any) => {
        return data.id === payload.item.id;
      });
      const addItems = {
        product: payload.item.product,
        unit: payload.count,
        total:
          parseFloat(payload.item.price) * parseFloat(payload.count) +
          (parseFloat(payload.item.price) *
            parseFloat(payload.item.percentage)) /
            100,
        id: payload.item.id,
      };
      if (TempItem.length === 0) {
        state.cartProducts.push(addItems);
      } else {
        state.cartProducts.forEach((data: any) => {
          if (data.id === payload.item.id) {
            data.unit = data.unit + addItems.unit;
            data.total = data.total + addItems.total;
          }
        });
      }
      state.totalAmount = state.cartProducts.reduce((acc, curr) => {
        return acc + curr.total;
      }, 0);
    },
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
  },
  actions: {
    //Product-Form and Product-List
    async addData({ commit }) {
      const response = await axios.get("http://localhost:3000/Products");
      commit("ADD_DATA", response.data);
    },
    async deleteData({ commit }, alldata) {
      commit("DELETE_DATA", alldata);
    },
    editData({ commit }, item) {
      commit("EDIT_DATA", item);
    },
    async changeData({ commit }) {
      await axios.put(`http://localhost:3000/Products/${this.state.id}/`, {
        product: "Hello",
        size: this.state.sizeInput,
        gender: this.state.genderInput,
        color: this.state.colorInput,
        price: this.state.priceInput,
        percentage: this.state.percentageInput,
      });
      console.log("Updated action");

      commit("changeData");
    },
    //Product-Form and Product-List

    //Cart-products
    async addToCart({ commit }, payload) {
      commit("ADD_TO_CART", payload);
      console.log(payload.item);
    },

    //Permission Manager
    savePermission({ commit }, { event, switchVar }) {
      commit("SAVE_PERMISSION", { event, switchVar });
    },
  },

  modules: {},
});
