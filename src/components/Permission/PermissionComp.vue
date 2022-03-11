<template>
  <v-card color="orange lighten-2" class="ma-15" justify-center>
    <div class="main-container">
      <v-layout row justify-center>
        <div class="top-div">
          <v-switch
            @change="savePermission($event, 'productsList')"
            v-model="productsList"
            :label="`Products`"
          ></v-switch>
          <v-switch
            @change="savePermission($event, 'editProductList')"
            v-model="editProductList"
            :label="`Edit Products`"
          ></v-switch>
          <v-switch
            @change="savePermission($event, 'removeProductList')"
            v-model="removeProductList"
            :label="`Remove Products`"
          ></v-switch>
          <v-switch
            @change="savePermission($event, 'productDetailsList')"
            v-model="editProductList"
            :label="`Product Details`"
          ></v-switch></div
      ></v-layout>

      <div class="mid-div mx-3">
        <div class="left-div">
          <v-switch
            @change="savePermission($event, 'editProduct')"
            v-model="editProductSwitch"
            :label="`Edit Product Details`"
            class="details"
          ></v-switch>
          <v-switch
            @change="savePermission($event, 'productName')"
            v-model="productName"
            :disabled="editProductSwitch == false"
            :label="`Product Name`"
          ></v-switch>

          <v-switch
            @change="savePermission($event, 'size')"
            v-model="productSize"
            :disabled="editProductSwitch == false"
            :label="`Product Size`"
          ></v-switch>
          <v-switch
            @change="savePermission($event, 'color')"
            v-model="productColor"
            :disabled="editProductSwitch == false"
            :label="`Product Color`"
          ></v-switch>
          <v-switch
            @change="savePermission($event, 'gender')"
            v-model="gender"
            :disabled="editProductSwitch == false"
            :label="`Gender`"
          ></v-switch>
        </div>

        <div class="right-div">
          <v-switch
            v-model="editPriceSwitch"
            @change="savePermission($event, 'editPrice')"
            :label="`Edit Price Details`"
            class="details"
          ></v-switch>
          <v-switch
            v-model="productPrice"
            :disabled="editPriceSwitch == false"
            @change="savePermission($event, 'price')"
            :label="`Product Price`"
          ></v-switch>
          <v-switch
            v-model="productPercentage"
            :disabled="editPriceSwitch == false"
            @change="savePermission($event, 'percentage')"
            :label="`Product Tax`"
          ></v-switch>
        </div>
      </div>
    </div>

    <div class="btn">
      <v-btn to="/" v-on:click="savePermission" class="primary"> SAVE </v-btn>
    </div>
  </v-card>
</template>

<style scoped>
.main-container {
  display: grid;
}
.mid-div {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
}
.top-div {
  display: flex;
  justify-content: center;
}
.left-div {
  margin-top: 3rem;
  margin-right: 3rem;
}
.right-div {
  margin-top: 3rem;
  margin-left: 3rem;
}
.details {
  position: relative;
  right: 3rem;
}
.btn {
  display: flex;
  justify-content: center;
}
.primary {
  margin: 20px;
}
</style>
