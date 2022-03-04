<template>
  <v-app class="grey lighten-4" flat app>
    <v-content>
      <NavBar />

      <router-view> </router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import AllData from "./All_Data/All_data.vue";
import NavBar from "../src/NavBar/NavBar.vue";
@Component({
  components: {
    NavBar,
  },
})
export default class App extends Vue {}
</script>
<style>
Navbar {
  margin: 0;
  padding: 0;
}
</style>
