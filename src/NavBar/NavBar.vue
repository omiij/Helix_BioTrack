<template>
  <div>
    <nav>
      <v-toolbar color="primary lighten-2" dense dark>
        <v-avatar color="green lighten-2" size="35">OJ</v-avatar>
        <v-btn variant="outlined" color="transparent lighten-2" class="ml-5"
          >DEV</v-btn
        >

        <v-spacer></v-spacer>

        <v-toolbar-title>
          <span block>Helix</span>
          <span block> Biotrack</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-app-bar-nav-icon
              dark
              v-bind="attrs"
              v-on="on"
            ></v-app-bar-nav-icon>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-icon
                class="mr-2"
                color="red lighten-2"
                style="text-decoration: none"
                >{{ item.icon }}</v-icon
              >
              <router-link width="150px" :to="item.route" class="anchorLink">
                <v-list-item-title class="red--text">
                  {{ item.text }}
                </v-list-item-title>
              </router-link>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
      <!-- <v-navigation-drawer v-model="drawer" app>
        <p>Test</p>
      </v-navigation-drawer> -->
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class NavBar extends Vue {
  drawer = true;

  items = [
    {
      icon: "mdi-dialpad",
      text: "Products",
      route: "/",
    },
    // {
    //   icon: "mdi-email",
    //   text: "Products Input",
    //   route: "/product-input",
    // },
    {
      icon: "mdi-home",
      text: "Permission",
      route: "/permission",
    },
    {
      icon: "mdi-home",
      text: "Sale",
      route: "/sale",
    },
  ];

  setDrawer() {
    this.drawer = !this.drawer;
  }
  links = [];
}
</script>

<style>
.anchorLink {
  text-decoration: none;
}
nav {
  margin: 0;
  padding: 0;
}
</style>
