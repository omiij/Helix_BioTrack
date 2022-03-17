import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Template from "./PermissionComp.vue";
import { Action, Getter } from "vuex-class";
import { state } from "@/store/PermissionStore/PermissionState";
@Component({
  mixins: [Template],
  // components: {},
  // computed: {
  //   ...mapGetters([]),
  // },
  // methods: {
  //   ...mapActions(["savePermissions"]),
  // },
})
export default class Permission extends Vue {
  @Action("savePermissions", { namespace: "PermissionModule" })
  public savePermissions!: any;
  productsList = state.productsList;
  editProductList = state.editProductList;
  removeProductList = state.removeProductList;
  editProductSwitch = state.editProductSwitch;
  productName = state.productName;
  productSize = state.productSize;
  productColor = state.productColor;
  gender = state.gender;
  editPriceSwitch = state.editPriceSwitch;
  productPrice = state.productPrice;
  productPercentage = state.productPercentage;

  savePermission(event: any, switchVar: any) {
    this.savePermissions({ event, switchVar });
  }
}
