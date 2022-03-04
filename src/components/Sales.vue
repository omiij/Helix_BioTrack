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
      <v-card class="center ma-4" width="400px" height="auto">
        <v-card class="btn-container" flat>
          <router-link to="product-form" class="anchorLink two-btn">
            <v-icon color="green lighten-2" class="data-icons"
              >mdi-cart</v-icon
            ></router-link
          >

          <v-icon color="red" class="two-btn" v-on:click="deleteAllData">
            mdi-delete</v-icon
          >
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
            <tr
              v-for="(item, index) in this.$store.state.cartProducts"
              :key="index"
            >
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
                  <v-card-actions class="justify-end">
                    <v-btn text @click="dialog.value = false">Close</v-btn>
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
@Component({
  components: {},
})
export default class Sales extends Vue {
  overlay = false;
  absolute = true;
  qty = 0;
  activeOverlayId = 0;
  result = false;
  getData = [];

  total_amount = localStorage.getItem("total_Amount");

  async created() {
    let response = await axios.get("http://localhost:3000/products");
    this.getData = response.data;
    let responseCart = await axios.get("http://localhost:3000/cartProduct");
    this.cartData = responseCart.data;
    console.log(this.$store.state.cartProducts);
  }
  async addToCart(item, count) {
    this.$store.dispatch("addToCart", { item, count });
    this.overlay = false;
  }

  async deleteAllData() {
    for (let a = 0; a <= this.$store.state.cartProducts.length + 1; a++) {
      this.$store.state.cartProducts.pop();
    }
    this.$store.state.totalAmount = 0;
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
</style>
