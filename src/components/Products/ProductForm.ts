import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Template from "C:/Users/hp/OneDrive/Desktop/VUE_Projects/HelixBio/my-app/src/components/Products/ProductForm.vue";
import { state } from "@/store/ProductStore/ProductState";
import { Getter, Action } from "vuex-class";
@Component({
  mixins: [Template],
  components: {},
})
export default class ProductForm extends Vue {
  @Getter("color", { namespace: "ProductModule" })
  public color!: [];
  @Getter("sizes", { namespace: "ProductModule" })
  public sizes!: [];
  @Getter("productName", { namespace: "PermissionModule" })
  public productName!: [];
  @Getter("productSize", { namespace: "PermissionModule" })
  public productSize!: [];
  @Getter("gender", { namespace: "PermissionModule" })
  public gender!: [];
  @Getter("productColor", { namespace: "PermissionModule" })
  public productColor!: [];
  @Getter("productPrice", { namespace: "PermissionModule" })
  public productPrice!: [];
  @Getter("productPercentage", { namespace: "PermissionModule" })
  public productPercentage!: [];

  @Action("addData", { namespace: "ProductModule" })
  public addData!: any;
  @Action("products", { namespace: "ProductModule" })
  public products!: any;

  toggle = state.toggle;
  productInput = state.productInput;
  sizeInput = state.sizeInput;
  genderInput = state.genderInput;
  colorInput = state.colorInput;
  priceInput = state.priceInput;
  percentageInput = state.percentageInput;
  tab = null;

  async ChangeData() {
    this.toggle = !this.toggle;
    state.toggle = !state.toggle;
    await axios.put(`http://localhost:3000/Products/${state.id}/`, {
      product: this.productInput,
      size: this.sizeInput,
      gender: this.genderInput,
      color: this.colorInput,
      price: this.priceInput,
      percentage: this.percentageInput,
    });

    this.productInput = "";
    this.sizeInput = "";
    this.genderInput = "";
    this.colorInput = "";
    this.priceInput = 0;
    this.percentageInput = 0;

    state.productInput = "";
    state.sizeInput = "";
    state.genderInput = "";
    state.colorInput = "";
    state.priceInput = 0;
    state.percentageInput = 0;
  }

  async submit() {
    const allData = {
      product: this.productInput,
      size: this.sizeInput,
      gender: this.genderInput,
      color: this.colorInput,
      price: this.priceInput,
      percentage: this.percentageInput,
      quantity: 0,
      total: 0,
    };
    if (
      this.productInput != "" &&
      this.sizeInput != "" &&
      this.genderInput != "" &&
      this.colorInput != "" &&
      this.priceInput > 0 &&
      this.percentageInput > 0
    ) {
      const response = await axios.post(
        "http://localhost:3000/Products",
        allData
      );
      this.addData();
      this.productInput = "";
      this.sizeInput = "";
      this.genderInput = "";
      this.colorInput = "";
      this.priceInput = 0;
      this.percentageInput = 0;
    } else {
      console.log("Please submit the form");
    }
  }
}
