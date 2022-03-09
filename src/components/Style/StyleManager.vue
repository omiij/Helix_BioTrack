<template>
  <v-row justify="center" class="mt-3 mx-3">
    <v-col cols="4" flex>
      <v-card max-width="350px">
        <v-card-title>Product Page</v-card-title>
        <v-select
          v-model="productColor"
          :items="this.$store.state.styleColors"
          label="Select Text Color"
          item-text="firstName"
        ></v-select>
        <v-select
          v-model="productFontSize"
          :items="this.$store.state.styleSize"
          label="Select Font Size"
        ></v-select>
        <v-select
          v-model="productButtonColor"
          :items="this.$store.state.styleButtonColor"
          label="Select Button Color"
        ></v-select>
        <v-select
          v-model="productBorder"
          :items="this.$store.state.styleBorder"
          label="Select Border Color"
        ></v-select>
        <v-btn class="ml-5 mb-5" color="primary" v-on:click="saveProductStyle"
          >SAVE</v-btn
        >
      </v-card>
    </v-col>

    <v-col cols="4" flex>
      <v-card max-width="350px" class="mx-5">
        <v-card-title>Sale Page</v-card-title>
        <v-select
          v-model="salePageColor"
          :items="this.$store.state.styleColors"
          label="Select Text Color"
          item-text="firstName"
        ></v-select>
        <v-select
          v-model="saleFontSize"
          :items="this.$store.state.styleSize"
          label="Select Font Size"
        ></v-select>
        <v-select
          v-model="saleButtonColor"
          :items="this.$store.state.styleButtonColor"
          label="Select Button Color"
        ></v-select>
        <v-select
          v-model="saleBorder"
          :items="this.$store.state.styleButtonColor"
          label="Select Border Color"
        ></v-select>
        <v-btn class="ml-5 mb-5" color="primary" v-on:click="saveSaleStyle"
          >SAVE</v-btn
        >
      </v-card>
    </v-col>

    <v-col cols="4" flex>
      <v-card max-width="350px" class="mx-5">
        <v-card-title>Report Tool Page</v-card-title>
        <v-select
          v-model="reportPageColor"
          :items="this.$store.state.styleColors"
          label="Select Text Color"
          item-text="firstName"
        ></v-select>
        <v-select
          v-model="reportFontSize"
          :items="this.$store.state.styleSize"
          label="Select Font Size"
        ></v-select>
        <v-select
          v-model="reportButtonColor"
          :items="this.$store.state.styleButtonColor"
          label="Select Button Color"
        ></v-select>
        <v-select
          v-model="reportBorder"
          :items="this.$store.state.styleButtonColor"
          label="Select Border Color"
        ></v-select>
        <v-btn class="ml-5 mb-5" color="primary" v-on:click="saveReportStyle"
          >SAVE</v-btn
        >
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import store from "C:/Users/hp/OneDrive/Desktop/VUE_Projects/HelixBio/my-app/src/store";

@Component({
  components: {},
})
export default class ReportTool extends Vue {
  //product//
  productColor = null;
  productFontSize = null;
  productButtonColor = null;
  productBorder = null;

  salePageColor = null;
  saleFontSize = null;
  saleButtonColor = null;
  saleBorder = null;

  reportPageColor = null;
  reportFontSize = null;
  reportButtonColor = null;
  reportBorder = null;
  //   async created() {
  //     let response = await axios.get("http://localhost:3000/customerData");
  //     this.customerData = response.data;
  //   }
  //product//

  saveProductStyle() {
    this.$store.state.productPageColor = this.productColor;
    this.$store.state.productFontSize = this.productFontSize;
    this.$store.state.productButtonColor = this.productButtonColor;
    this.$store.state.productBorder = this.productBorder;
  }
  saveSaleStyle() {
    this.$store.state.salePageColor = this.productColor;
    this.$store.state.saleFontSize = this.saleFontSize;
    this.$store.state.saleButtonColor = this.saleButtonColor;
    this.$store.state.saleBorder = this.saleBorder;
  }
  saveReportStyle() {
    this.$store.state.reportPageColor = this.reportPageColor;
    this.$store.state.reportFontSize = this.reportFontSize;
    this.$store.state.reportButtonColor = this.reportButtonColor;
    this.$store.state.reportBorder = this.reportBorder;
  }
}
</script>

<style></style>
