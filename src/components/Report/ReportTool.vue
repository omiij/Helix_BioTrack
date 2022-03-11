<template>
  <div>
    <v-card
      class="ma-10 reportBorder"
      :style="{
        borderColor: reportBorder,
      }"
      justify-center
    >
      <v-simple-table
        height="auto"
        :style="{
          color: reportPageColor,
          fontSize: reportFontSize,
        }"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th>INDEX</th>
              <th>Product</th>
              <th>Gender</th>
              <th>Size</th>
              <th>Color</th>
              <th>Date</th>
              <th>Time</th>
              <th>Time Stamp</th>
              <th>Tax</th>
              <th>Quantity</th>
              <th>Price</th>

              <th>
                <div>Total Price</div>
                <div>Inclusive Taxes</div>
              </th>
              <th>Name</th>
              <th>Person Gender</th>
              <th>Number</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in getData" v-bind:key="item.id">
              <td>{{ index + 1 }}</td>
              <td v-if="productsList">{{ item.product }}</td>
              <td>
                {{ item.gender }}
              </td>
              <td>{{ item.size }}</td>
              <td>{{ item.color }}</td>
              <td>{{ item.date }}</td>
              <td>{{ item.Time }}</td>
              <td>{{ item.timeStamp }}</td>
              <td>%{{ item.tax }}</td>
              <td>{{ item.unit }}</td>
              <td>{{ item.price }}</td>
              <td>{{ item.total }}</td>
              <td>
                <span>{{ item.firstName }}</span>
                <span>{{ item.lastName }}</span>
              </td>
              <td>{{ item.number }}</td>
              <td>{{ item.customergender }}</td>
              <td>{{ item.age }}</td>
              <td>
                <span>{{ item.locality }}</span
                >-<span>{{ item.city }}</span> -<span>{{ item.state }}</span>
                -<span>{{ item.country }}</span> -<span>{{ item.pin }}</span>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </div>
</template>

<style scoped>
.reportBorder {
  border: 2px solid black;
}
</style>
