<template>
  <div class="main-container" width="auto" height="auto">
    <div class="item-one">
      <v-container v-for="item in getData" :key="item.id">
        <v-card
          height="250"
          width="200"
          class="center selectCard"
          :style="{
            borderColor: saleBorder,
          }"
        >
          <h1
            class="center ml-3"
            :style="{
              color: salePageColor,
              fontSize: saleFontSize,
            }"
          >
            {{ item.product }}
          </h1>
          <br />
          <h1
            class="center ml-3"
            :style="{
              color: salePageColor,
              fontSize: saleFontSize,
            }"
          >
            Rs.{{ item.price }}
          </h1>
          <v-row justify="center">
            <v-btn
              :style="{
                backgroundColor: saleButtonColor,
              }"
              class="mt-12"
              @click="select(item.id)"
            >
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
                :style="{
                  backgroundColor: saletButton,
                }"
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
      <v-card
        :style="{
          borderColor: saleBorder,
          fontSize: saleFontSize,
        }"
        class="center ma-4 saleBorder"
        width="400px"
        height="auto"
      >
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
                :style="{
                  color: salePageColor,
                  fontSize: saleFontSize,
                }"
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
          <tbody
            :style="{
              color: salePageColor,
              fontSize: saleFontSize,
            }"
          >
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
                <v-btn
                  :style="{
                    backgroundColor: saleButtonColor,
                  }"
                  v-bind="attrs"
                  v-on="on"
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
                    <v-btn @click="dialog.value = false"
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
.selectCard {
  border: 2px solid red;
}
</style>
