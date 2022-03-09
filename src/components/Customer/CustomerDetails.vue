<template>
  <div class="main-div">
    <v-form flat class="px-3 center" centered align="center">
      <v-card class="center ma-4" width="600px" justify-center>
        <v-card>
          <v-tabs-slider></v-tabs-slider>

          <v-tabs
            v-model="tab"
            background-color="primary lighten-2"
            centered
            dark
            icons-and-text
            flat
          >
            <v-tab href="#tab-1">
              Details
              <v-icon color="orange lighten-2">
                mdi-card-account-details-outline</v-icon
              >
            </v-tab>
            <v-tab href="#tab-2">
              Address
              <v-icon color="orange lighten-2"
                >mdi-map-marker-multiple</v-icon
              ></v-tab
            >
          </v-tabs>
        </v-card>

        <v-tabs-items v-model="tab">
          <v-tab-item :value="'tab-' + 1">
            <v-card flat>
              <v-card>
                <v-card-title>
                  <v-text-field
                    label="First Name"
                    v-model="customerFirstName"
                    md="12"
                    ref="form"
                    required
                  ></v-text-field>

                  <v-text-field
                    label="Last Name"
                    v-model="customerLastName"
                    md="12"
                    ref="form"
                    required
                  ></v-text-field>

                  <v-text-field
                    label="Age"
                    v-model="cutomerAge"
                    type="number"
                    ref="form"
                    md="12"
                  ></v-text-field>

                  <v-text-field
                    label="Phone Number"
                    ref="form"
                    v-model="customerNumber"
                    type="tel"
                    md="12"
                  ></v-text-field>

                  <v-radio-group v-model="customerGender" ref="form" row>
                    <v-radio label="Male" value="Male"></v-radio>
                    <v-radio label="Female" value="Female"></v-radio>
                    <v-radio label="Other" value="other"></v-radio>
                  </v-radio-group>
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
                    label="Locality"
                    v-model="customerLocality"
                    md="12"
                    ref="form"
                    required
                  ></v-text-field>

                  <v-text-field
                    label="City"
                    v-model="customerCity"
                    md="12"
                    ref="form"
                    required
                  ></v-text-field>

                  <v-text-field
                    label="State"
                    v-model="customerState"
                    md="12"
                    ref="form"
                    required
                  ></v-text-field>

                  <v-text-field
                    label="Country"
                    v-model="customerCountry"
                    md="12"
                    ref="form"
                    required
                  ></v-text-field>

                  <v-text-field
                    label="Pin"
                    v-model="customerPin"
                    md="12"
                    ref="form"
                    type="number"
                    required
                  ></v-text-field>

                  <v-btn
                    @click="submit"
                    icon
                    block
                    v-if="this.$store.state.CutomerToggle"
                  >
                    <v-icon color="green lighten-1"> mdi-plus-circle</v-icon
                    >Save</v-btn
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

<script>
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import store from "C:/Users/hp/OneDrive/Desktop/VUE_Projects/HelixBio/my-app/src/store";

@Component({
  components: {},
})
export default class CustomerDetails extends Vue {
  toggle = this.$store.state.CutomerToggle;
  customerFirstName = this.$store.state.customerFirstName;
  customerLastName = this.$store.state.customerLastName;
  customerGender = this.$store.state.customerGender;
  customerNumber = this.$store.state.customerNumber;
  cutomerAge = this.$store.state.cutomerAge;

  customerLocality = this.$store.state.customerLocality;
  customerCity = this.$store.state.customerCity;
  customerState = this.$store.state.customerState;
  customerCountry = this.$store.state.customerCountry;
  customerPin = this.$store.state.customerPin;
  tab = null;

  async submit() {
    let allData = {
      firstName: this.customerFirstName,
      lastName: this.customerLastName,
      number: this.customerNumber,
      gender: this.customerGender,
      age: this.cutomerAge,

      locality: this.customerLocality,
      city: this.customerCity,
      state: this.customerState,
      country: this.customerCountry,
      pin: this.customerPin,
    };
    if (
      this.customerFirstName != "" &&
      this.customerLastName != "" &&
      this.customerGender != "" &&
      this.customerNumber > 0 &&
      this.cutomerAge > 0 &&
      this.customerPin > 0 &&
      this.customerLocality != "" &&
      this.customerCity != "" &&
      this.customerState != "" &&
      this.customerCountry != ""
    ) {
      const response = await axios.post(
        "http://localhost:3000/customerData",
        allData
      );
      this.$store.dispatch("addCustomerData");
      this.customerFirstName = "";
      this.customerLastName = "";
      this.customerGender = "";
      this.customerNumber = 0;
      this.cutomerAge = 0;
      this.customerPin = 0;
      this.customerLocality = "";
      this.customerCity = "";
      this.customerState = "";
      this.customerCountry = "";
    } else {
      alert("Plesae fill all the fields");
    }
  }
  async ChangeData() {
    let allData = {
      firstName: this.customerFirstName,
      lastName: this.customerLastName,
      number: this.customerNumber,
      gender: this.customerGender,
      age: this.cutomerAge,

      locality: this.customerLocality,
      city: this.customerCity,
      state: this.customerState,
      country: this.customerCountry,
      pin: this.customerPin,
    };
    if (
      this.customerFirstName != "" &&
      this.customerLastName != "" &&
      this.customerGender != "" &&
      this.customerNumber > 0 &&
      this.cutomerAge > 0 &&
      this.customerPin > 0 &&
      this.customerLocality != "" &&
      this.customerCity != "" &&
      this.customerState != "" &&
      this.customerCountry != ""
    ) {
      const response = await axios.put(
        "http://localhost:3000/customerData/" + this.$store.state.csId + "/",
        allData
      );
      this.$store.dispatch("addCustomerData");
      this.customerFirstName = "";
      this.customerLastName = "";
      this.customerGender = "";
      this.customerNumber = 0;
      this.cutomerAge = 0;
      this.customerPin = 0;
      this.customerLocality = "";
      this.customerCity = "";
      this.customerState = "";
      this.customerCountry = "";
    } else {
      alert("Plesae fill all the fields");
    }
  }
}
</script>

<style scoped>
.v-input {
  width: 500px;
}
.main-div {
  display: flex;
  justify-content: center;
}
</style>
