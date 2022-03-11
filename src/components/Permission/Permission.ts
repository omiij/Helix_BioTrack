import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Template from "./PermissionComp.vue";
import { mapActions, mapGetters } from "vuex";

@Component({
  mixins: [Template],
  components: {},
  computed: {
    ...mapGetters([
      "productsList",
      "removeProductList",
      "productDetailsList",
      "editProductSwitch",
      "editProductList",
      "productName",
      "productColor",
      "editProductSwitch",
      "gender",
      "editPriceSwitch",
      "productPrice",
      "productPercentage",
      "productSize",
    ]),
  },
  methods: {
    ...mapActions(["savePermissions"]),
  },
})
export default class Permission extends Vue {
  savePermissions!: any;
  savePermission(event: any, switchVar: any) {
    console.log(event, switchVar);
    this.savePermissions({ event, switchVar });
  }
}
