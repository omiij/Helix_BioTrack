<template>
  <div>
    <v-card class="ma-10" justify-center>
      <v-text-field
        label="Search"
        v-model="search"
        @input="Search"
        md="12"
      ></v-text-field>

      <router-link width="150px" to="/product-form" class="anchorLink">
        <v-icon class="data-icons" color="red lighten-1" x-large overlap right
          >mdi-plus</v-icon
        >Add More Products</router-link
      >
      <v-simple-table height="auto">
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
