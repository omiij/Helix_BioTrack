<template>
  <div class="main-div">
    <v-form flat class="px-3 center" centered align="center">
      <v-card class="center ma-4" width="600px" justify-center>
        <v-card>
          <v-tabs-slider></v-tabs-slider>

          <v-tabs
            v-model="tab"
            background-color="red lighten-2"
            centered
            dark
            icons-and-text
            flat
          >
            <v-tab href="#tab-1">
              Products <v-icon color="orange lighten-2"> mdi-box</v-icon>
            </v-tab>
            <v-tab href="#tab-2">
              Pricing
              <v-icon color="orange lighten-2">mdi-cash</v-icon></v-tab
            >
          </v-tabs>
        </v-card>

        <v-tabs-items v-model="tab">
          <v-tab-item :value="'tab-' + 1">
            <v-card flat>
              <v-card>
                <v-card-title>
                  <v-text-field
                    label="Product"
                    :disbled="!productName"
                    v-model="productInput"
                    md="12"
                    ref="form"
                    required
                  ></v-text-field>

                  <v-select
                    :disabled="!productSize"
                    color="primary"
                    v-model="sizeInput"
                    label="Select Size"
                    :items="sizes"
                    ref="form"
                    required
                  ></v-select>

                  <v-radio-group
                    v-model="genderInput"
                    :disabled="!gender"
                    ref="form"
                    row
                  >
                    <v-radio label="Male" value="Male"></v-radio>
                    <v-radio label="Female" value="Female"></v-radio>
                    <v-radio label="Other" value="other"></v-radio>
                  </v-radio-group>

                  <v-select
                    :disabled="!productColor"
                    v-model="colorInput"
                    color="primary"
                    label="Select color"
                    :items="color"
                    ref="form"
                    required
                  ></v-select>
                </v-card-title>
              </v-card>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item :value="'tab-' + 2">
            <v-card flat>
              <v-card>
                <v-card-title>
                  <v-text-field
                    label="Price"
                    :disabled="!productPrice"
                    v-model="priceInput"
                    type="number"
                    ref="form"
                    md="12"
                  ></v-text-field>

                  <v-text-field
                    label="Tax Percentag(%)"
                    ref="form"
                    :disabled="!productPercentage"
                    v-model="percentageInput"
                    type="number"
                    md="12"
                  ></v-text-field>

                  <v-btn @click="submit" icon block v-if="toggle">
                    <v-icon color="green lighten-1"> mdi-cart-check</v-icon
                    >save</v-btn
                  >

                  <v-btn v-else v-on:click="ChangeData" icon block>
                    <v-icon color="green lighten-1"> mdi-cart-check</v-icon
                    >Update</v-btn
                  >
                </v-card-title>
              </v-card>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-form>
  </div>
</template>

<style scoped>
.v-input {
  width: 500px;
}
.main-div {
  display: flex;
  justify-content: center;
}
</style>
