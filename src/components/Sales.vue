<template>
  <div class="main-container" width="auto" height="auto">
    <div class="item-one">
      <v-container v-for="item in getData" :key="item.id">
        <v-card height="250" width="200" class="center">
          <h1 class="center ml-3">{{ item.product }}</h1>
          <br />
          <h1 class="center ml-3">Rs.{{ item.price }}</h1>
          <v-row justify="center">
            <v-btn color="success" class="mt-12" @click="select(item.id)">
              Select
            </v-btn>
          </v-row>
          <v-row>
            <v-overlay
              :absolute="absolute"
              :value="overlay"
              v-show="activeOverlayId === item.id"
            >
              <h1 class="center ml-3">{{ qty }}</h1>
              <br />

              <div>
                <span
                  ><v-icon class="minus" @click="minusQty" color="red lighten-2"
                    >mdi-minus</v-icon
                  ></span
                >
                <span
                  ><v-icon color="green lighten-2" @click="addQty" class="plus"
                    >mdi-plus</v-icon
                  >
                </span>
              </div>
              <br />
              <v-btn
                color="success"
                @click="overlay = false"
                v-on:click="addToCart(item, qty)"
              >
                Add To Cart
              </v-btn>
            </v-overlay>
          </v-row>
        </v-card>
      </v-container>
    </div>

    <div class="item-two">
      <v-card class="center ma-4 saleBorder" width="400px" height="auto">
        <v-card class="btn-container saleBorder" flat>
          <router-link to="product-form" class="anchorLink two-btn">
            <v-icon color="green lighten-2" class="data-icons"
              >mdi-cart</v-icon
            ></router-link
          >

          <v-icon color="red" class="two-btn" v-on:click="deleteAllData">
            mdi-delete</v-icon
          >
        </v-card>

        <v-card flat justify="center">
          <v-row align="center ">
            <v-col class="d-flex" cols="12" sm="12">
              <v-select
                v-model="selectCustomer"
                :items="customerData"
                label="select customer"
                item-text="firstName"
                @change="sendCustomerData"
              ></v-select>
            </v-col>
          </v-row>
        </v-card>

        <v-simple-table height="auto" width="600px">
          <thead class="center">
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cartData" :key="index">
              <td>{{ item.product }}</td>
              <td>{{ item.unit }}</td>
              <td>{{ item.total }}</td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-card class="btn-container" flat>
          <v-col cols="auto">
            <v-dialog transition="dialog-top-transition" max-width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" v-bind="attrs" v-on="on"
                  >Check-Out</v-btn
                >
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar color="primary" dark>Total Amount</v-toolbar>
                  <v-card-text>
                    <div class="text-h2 pa-12">
                      <v-card-text>
                        <h1>Rs.{{ $store.state.totalAmount }}</h1>
                      </v-card-text>
                      <v-card-text color="primary" class="redColor">
                        <h1><h3>**Including all taxes</h3></h1>
                      </v-card-text>
                    </div>
                  </v-card-text>
                  <v-card-actions d-inline class="justify-center">
                    <v-btn color="green lighte-2" @click="buyNow"
                      ><v-icon left color="secondary">mdi-wallet</v-icon> Buy
                      Now</v-btn
                    >
                    <v-btn color="primary" @click="dialog.value = false"
                      ><v-icon left to="/report" color="secondary"
                        >mdi-close-circle</v-icon
                      >
                      Close</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
        </v-card>
      </v-card>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import store from "../store";
@Component({
  components: {},
})
export default class Sales extends Vue {
  overlay = false;
  absolute = true;
  selectCustomer = "";
  customerData = [];
  customerFilterData = [];
  qty = 0;
  activeOverlayId = 0;
  result = false;
  cartData = this.$store.state.cartProducts;
  getData = [];

  total_amount = localStorage.getItem("total_Amount");

  sendCustomerData() {
    const People = this.customerData.filter((data) => {
      return this.selectCustomer === data.firstName;
    });
    this.customerFilterData.push(People[0]);
    console.log(this.customerFilterData);
  }

  async created() {
    let response = await axios.get("http://localhost:3000/products");
    this.getData = response.data;
    let responseCart = await axios.get("http://localhost:3000/cartProduct");
    this.cartData = responseCart.data;
    let allitems = responseCart.data;
    let customer = await axios.get("http://localhost:3000/customerData");
    this.customerData = customer.data;
    this.$store.state.totalAmount = allitems.reduce((acc, curr) => {
      return acc + curr.total;
    }, 0);
  }
  async addToCart(item, count) {
    const TempItem = this.cartData.filter((data) => {
      return data.id === item.id;
    });
    const addItems = {
      product: item.product,
      unit: count,
      total:
        parseFloat(item.price) * parseFloat(count) +
        (parseFloat(item.price) * parseFloat(item.percentage)) / 100,
      id: item.id,
    };

    if (TempItem.length === 0) {
      this.cartData.push(addItems);
    } else {
      this.cartData.forEach((data) => {
        if (data.id === item.id) {
          data.unit = data.unit + addItems.unit;
          data.total = data.total + addItems.total;
        }
      });
    }

    this.overlay = false;
    this.$store.dispatch("addToCart", { item, count });
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  async deleteAllData() {
    for (let a = 0; a <= this.cartData.length + 2; a++) {
      this.cartData.pop();
    }
    this.$store.state.totalAmount = 0;
    this.$store.dispatch("deleteDataCart");
  }
  async buyNow() {
    let dataUploadded = this.cartData;
    let customerData = this.customerFilterData[0];

    if (dataUploadded.length === 0) {
      alert("Please add item in cart");
      return;
    }
    if (this.customerFilterData.length === 0) {
      alert("Please select a customer");
      return;
    }

    let timeStamp = Date.now();
    let orderDate = `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`;
    let Time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    let allDataObject = {};
    dataUploadded.forEach(async (item) => {
      await axios.post(" http://localhost:3000/buyCart", {
        product: item.product,
        gender: item.gender,
        size: item.size,
        color: item.color,
        date: orderDate,
        Time: Time,
        timeStamp: timeStamp,
        tax: item.tax,
        unit: item.unit,
        price: item.price,
        total: item.total,
        firstName: customerData.firstName,
        lastName: customerData.lastName,
        number: customerData.number,
        customergender: customerData.gender,
        age: customerData.age,
        locality: customerData.locality,
        city: customerData.city,
        state: customerData.state,
        country: customerData.country,
        pin: customerData.pin,
      });
    });

    this.deleteAllData();
  }

  addQty() {
    ++this.qty;
  }
  minusQty() {
    if (this.qty === 0) {
      return;
    }
    --this.qty;
  }
  select(id) {
    this.overlay = true;
    this.activeOverlayId = id;
    this.qty = 0;
  }
}
</script>

<style>
.main-container {
  display: flex;
  justify-content: center;
  margin-top: 50px;
  flex-wrap: wrap;
}
.item-one {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 750px;
  margin: 10px;
}
.btn-container {
  display: flex;
  justify-content: center;
}
.one-btn,
.two-btn {
  margin-left: 30px;
  size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
.minus,
.plus {
  margin-left: 30px;
  size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
.product {
  justify-content: center;
  margin: 10px;
  margin-top: 20px;
}
.redColor {
  color: red;
}
.saleBorder {
  border: 2px solid red;
}
</style>
