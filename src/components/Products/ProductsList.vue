<template>
  <!-- fontSize: fontSize + 'px', -->
  <div class="text">
    <v-card
      class="ma-10 border"
      justify-center
      :style="{ borderColor: productBorder }"
    >
      <v-text-field
        label="Search"
        v-model="search"
        @input="Search"
        md="12"
      ></v-text-field>

      <router-link
        width="150px"
        to="/product-form"
        :style="{
          color: productcolor,
          fontSize: productFontSize,
        }"
        class="anchorLink"
      >
        <v-icon class="data-icons" color="red lighten-1" x-large overlap right
          >mdi-plus</v-icon
        >Add More Products</router-link
      >
      <v-simple-table
        height="auto"
        :style="{
          color: productcolor,
          fontSize: productFontSize,
        }"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th>INDEX</th>
              <th v-if="productsList">Product</th>
              <th v-if="productDetailsList">Product Details</th>
              <th>Price</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in filteredData" v-bind:key="item.id">
              <td>{{ index + 1 }}</td>
              <td v-if="productsList">{{ item.product }}</td>
              <td v-if="productDetailsList">
                <span>{{ item.size }}</span>
                <span>/{{ item.color }}</span>
                <span>/{{ item.gender }}</span>
              </td>
              <td>{{ item.price }}</td>
              <td>
                <router-link to="/product-form" class="anchorLink">
                  <v-icon
                    color="orange lighten-2"
                    class="data-icons"
                    href="/product"
                    @click="EditData(item)"
                    v-if="editProductList"
                    >mdi-grease-pencil</v-icon
                  ></router-link
                >

                <span v-if="removeProductList"
                  >/<v-icon
                    class="data-icons"
                    color="red lighten-1"
                    v-if="removeProductList"
                    @click="DeleteData(item.id)"
                    >mdi-delete</v-icon
                  ></span
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<style scoped>
.data-icons {
  cursor: pointer;
}
.anchorLink {
  text-decoration: none;
}
.border {
  border: 2px solid black;
}
</style>
