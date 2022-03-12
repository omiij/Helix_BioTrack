import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Template from "C:/Users/hp/OneDrive/Desktop/VUE_Projects/HelixBio/my-app/src/components/Products/ProductForm.vue";
import { state } from "C:/Users/hp/OneDrive/Desktop/VUE_Projects/HelixBio/my-app/src/store/CustomerStore/AllState";
import { mapGetters, mapActions } from "vuex";
@Component({
  mixins: [Template],
  components: {},
  computed: {
    ...mapGetters([
      "productName",
      "productSize",
      "gender",
      "productColor",
      "productPrice",
      "productPercentage",
      "toggles",
      "color",
      "sizes",
      "ID",
      "productInputs",
      "sizeInputs",
      "genderInputs",
    ]),
  },
  methods: {
    ...mapActions(["addData"]),
  },
})
export default class ProductForm extends Vue {
  addData!: any;

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
