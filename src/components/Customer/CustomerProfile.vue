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
                    @click="EditData(item)"
                    >mdi-grease-pencil</v-icon
                  ></router-link
                >

                <span
                  >/<v-icon
                    class="data-icons"
                    color="red lighten-1"
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
</style>
