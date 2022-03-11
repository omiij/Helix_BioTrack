import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Template from "C:/Users/hp/OneDrive/Desktop/VUE_Projects/HelixBio/my-app/src/components/Products/ProductForm.vue";
import store from "C:/Users/hp/OneDrive/Desktop/VUE_Projects/HelixBio/my-app/src/store";
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
      "toggle",
    ]),
  },
  methods: {
    ...mapActions([]),
  },
})
export default class ProductForm extends Vue {
  toggle = this.$store.state.toggle;
  productInput = this.$store.state.productInput;
  sizeInput = this.$store.state.sizeInput;
  genderInput = this.$store.state.genderInput;
  colorInput = this.$store.state.colorInput;
  priceInput = this.$store.state.priceInput;
  percentageInput = this.$store.state.percentageInput;
  id = this.$store.state.id;
  sizes = this.$store.state.sizes;
  color = this.$store.state.color;
  tab = null;

  async ChangeData() {
    await axios.put(`http://localhost:3000/Products/${this.$store.state.id}/`, {
      product: this.productInput,
      size: this.sizeInput,
      gender: this.genderInput,
      color: this.colorInput,
      price: this.priceInput,
      percentage: this.percentageInput,
    });
    this.$store.state.toggle = true;
    this.productInput = "";
    this.sizeInput = "";
    this.genderInput = "";
    this.colorInput = "";
    this.priceInput = "";
    this.percentageInput = "";
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
      this.$store.dispatch("addData");
      this.productInput = "";
      this.sizeInput = "";
      this.genderInput = "";
      this.colorInput = "";
      this.priceInput = "";
      this.percentageInput = "";
    } else {
      console.log("Please submit the form");
    }
  }
}
