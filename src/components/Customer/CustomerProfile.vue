<template>
  <div>
    <v-card class="ma-10" justify-center>
      <v-row justify="center" class="my-3"
        ><router-link width="150px" to="/CustomerDetails" class="anchorLink">
          <v-icon class="data-icons" color="red lighten-1" x-large overlap right
            >mdi-plus</v-icon
          >Add a customer</router-link
        ></v-row
      >

      <v-simple-table height="auto">
        <template v-slot:default>
          <thead>
            <tr>
              <th>INDEX</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Number</th>
              <th>Age</th>
              <th>Address</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in customerData" v-bind:key="item.id">
              <td>{{ index + 1 }}</td>
              <td>
                <span>{{ item.firstName }} </span>
                <span>{{ item.lastName }}</span>
              </td>
              <td>
                {{ item.gender }}
              </td>
              <td>{{ item.number }}</td>
              <td>{{ item.age }}</td>
              <td>
                <span>{{ item.locality }}</span
                >-<span>{{ item.city }}</span> -<span>{{ item.state }}</span>
                -<span>{{ item.country }}</span> -<span>{{ item.pin }}</span>
              </td>
              <td>
                <router-link to="/CustomerDetails" class="anchorLink">
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
import store from "C:/Users/hp/OneDrive/Desktop/VUE_Projects/HelixBio/my-app/src/store";

@Component({
  components: {},
})
export default class ProductList extends Vue {
  customerData = [];
  async created() {
    let response = await axios.get("http://localhost:3000/customerData");
    this.customerData = response.data;
  }

  async DeleteData(id) {
    let allData = await axios
      .delete("http://localhost:3000/customerData/" + id)
      .then(() => {
        let z = this.customerData.map((data) => data.id).indexOf(id);
        this.customerData.splice(z, 1);
      });
    this.$store.dispatch("deleteCustomerData", allData);
  }
  EditData(item) {
    this.$store.dispatch("editCustomerData", item);
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
</style>
