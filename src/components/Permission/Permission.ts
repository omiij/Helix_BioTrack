import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Template from "./PermissionComp.vue";
import { mapActions, mapGetters } from "vuex";
import { state } from "@/store/CustomerStore/AllState";
@Component({
  mixins: [Template],
  components: {},
  computed: {
    ...mapGetters([]),
  },
  methods: {
    ...mapActions(["savePermissions"]),
  },
})
export default class Permission extends Vue {
  productsList = state.productsList;
  editProductList = state.editProductList;
  removeProductList = state.removeProductList;
  // editProductSwitch = state.editProductSwitch;
  productName = state.productName;
  productSize = state.productSize;
  productColor = state.productColor;
  gender = state.gender;
  editPriceSwitch = state.editPriceSwitch;
  productPrice = state.productPrice;
  productPercentage = state.productPercentage;

  savePermissions!: any;
  savePermission(event: any, switchVar: any) {
    console.log(event, switchVar);
    this.savePermissions({ event, switchVar });
  }
}
