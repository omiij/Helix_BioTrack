<template>
  <v-row justify="center" class="mt-3 mx-3">
    <v-col cols="4" flex>
      <v-card max-width="350px">
        <v-card-title>Product Page</v-card-title>
        <v-select
          v-model="productColor"
          :items="styleColors"
          label="Select Text Color"
          item-text="firstName"
        ></v-select>
        <v-select
          v-model="productFontSize"
          :items="styleSize"
          label="Select Font Size"
        ></v-select>
        <v-select
          v-model="productButtonColor"
          :items="styleButtonColor"
          label="Select Button Color"
        ></v-select>
        <v-select
          v-model="productBorder"
          :items="styleBorder"
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
          :items="styleColors"
          label="Select Text Color"
          item-text="firstName"
        ></v-select>
        <v-select
          v-model="saleFontSize"
          :items="styleSize"
          label="Select Font Size"
        ></v-select>
        <v-select
          v-model="saleButtonColor"
          :items="styleButtonColor"
          label="Select Button Color"
        ></v-select>
        <v-select
          v-model="saleBorder"
          :items="styleButtonColor"
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
          :items="styleColors"
          label="Select Text Color"
          item-text="firstName"
        ></v-select>
        <v-select
          v-model="reportFontSize"
          :items="styleSize"
          label="Select Font Size"
        ></v-select>
        <v-select
          v-model="reportButtonColor"
          :items="styleButtonColor"
          label="Select Button Color"
        ></v-select>
        <v-select
          v-model="reportBorder"
          :items="styleButtonColor"
          label="Select Border Color"
        ></v-select>
        <v-btn class="ml-5 mb-5" color="primary" v-on:click="saveReportStyle"
          >SAVE</v-btn
        >
      </v-card>
    </v-col>
  </v-row>
</template>

<style></style>
