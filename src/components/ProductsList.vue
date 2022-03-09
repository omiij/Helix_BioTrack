<template>
  <!-- fontSize: fontSize + 'px', -->
  <div class="text">
    <v-card
      class="ma-10 border"
      justify-center
      :style="{ borderColor: this.$store.state.productBorder }"
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
          color: this.$store.state.productPageColor,
          fontSize: this.$store.state.productFontSize,
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
          color: this.$store.state.productPageColor,
          fontSize: this.$store.state.productFontSize,
        }"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th>INDEX</th>
              <th v-if="$store.state.productsList">Product</th>
              <th v-if="$store.state.productDetailsList">Product Details</th>
              <th>Price</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in filteredData" v-bind:key="item.id">
              <td>{{ index + 1 }}</td>
              <td v-if="$store.state.productsList">{{ item.product }}</td>
              <td v-if="$store.state.productDetailsList">
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
                    v-on:click="EditData(item)"
                    v-if="$store.state.editProductList"
                    >mdi-grease-pencil</v-icon
                  ></router-link
                >

                <span v-if="$store.state.removeProductList"
                  >/<v-icon
                    class="data-icons"
                    color="red lighten-1"
                    v-if="$store.state.removeProductList"
                    v-on:click="DeleteData(item.id)"
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

<script>
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import store from "../store";

@Component({
  components: {},
})
export default class ProductList extends Vue {
  search = "";
  getData = [];
  filteredData = [];

  Search() {
    let z = this.getData.filter((arr) =>
      arr.product
        .trim()
        .toLowerCase()
        .includes(this.search.trim().toLocaleLowerCase())
    );
    this.filteredData = z;
  }

  async created() {
    let response = await axios.get("http://localhost:3000/products");
    this.getData = response.data;
    this.Search();
  }

  async DeleteData(id) {
    let allData = await axios
      .delete("http://localhost:3000/Products/" + id)
      .then(() => {
        let z = this.filteredData.map((data) => data.id).indexOf(id);
        this.filteredData.splice(z, 1);
      });

    this.$store.dispatch("deleteData", allData);
  }
  EditData(item) {
    this.$store.dispatch("editData", item);
  }
}
</script>

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
