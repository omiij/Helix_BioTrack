import { MutationTree } from "vuex";
import { SaleDataType } from "./SaleDataType";
import axios from "axios";

type SaleMutation = MutationTree<SaleDataType>;

export const mutations: SaleMutation = {
  //Cart-products
  async ADD_TO_CART(state: any, payload: any) {
    const dataUploadded = await axios.get("http://localhost:3000/cartProduct");

    const TempItem = dataUploadded.data.filter((data: any) => {
      return data.id === payload.item.id;
    });
    // console.log(TempItem, "Hello");

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
};
