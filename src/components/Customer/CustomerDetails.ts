import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Template from "../Customer/CustomerDetails.vue";
import { mapGetters, mapActions } from "vuex";
@Component({
  mixins: [Template],
  components: {},
  computed: {
    ...mapGetters([
      "CutomerToggle",
      "customerFirstNames",
      "customerLastName",
      "customerGender",
      "customerNumber",
      "cutomerAge",
      "customerLocality",
      "customerCity",
      "customerState",
      "customerCountry",
      "customerPin",
    ]),
  },
  methods: {
    ...mapActions(["addCustomerData", "addCustomerData"]),
  },
})
export default class CustomerDetails extends Vue {
  customerFirstNames!: string;
  customerLastNames!: string;
  customerGenders!: string;
  customerNumbers!: number;
  cutomerAges!: number;
  customerLocalitys!: string;
  customerCitys!: string;
  customerStates!: string;
  customerCountrys!: string;
  customerPins!: number;
  addCustomerData!: any;
  CutomerToggle!: boolean;

  toggle = true;
  customerFirstName = "";
  customerLastName = "";
  customerGender = "";
  customerNumber = 0;
  cutomerAge = 0;

  customerLocality = "";
  customerCity = "";
  customerState = "";
  customerCountry = "";
  customerPin = 0;
  tab = null;

  async submit() {
    const allData = {
      firstName: this.customerFirstName,
      lastName: this.customerLastName,
      number: this.customerNumber,
      gender: this.customerGender,
      age: this.cutomerAge,

      locality: this.customerLocality,
      city: this.customerCity,
      state: this.customerState,
      country: this.customerCountry,
      pin: this.customerPin,
    };
    if (
      this.customerFirstName != "" &&
      this.customerLastName != "" &&
      this.customerGender != "" &&
      this.customerNumber > 0 &&
      this.cutomerAge > 0 &&
      this.customerPin > 0 &&
      this.customerLocality != "" &&
      this.customerCity != "" &&
      this.customerState != "" &&
      this.customerCountry != ""
    ) {
      const response = await axios.post(
        "http://localhost:3000/customerData",
        allData
      );
      this.addCustomerData();
      this.customerFirstNames = "";
      this.customerLastName = "";
      this.customerGender = "";
      this.customerNumber = 0;
      this.cutomerAge = 0;
      this.customerPin = 0;
      this.customerLocality = "";
      this.customerCity = "";
      this.customerState = "";
      this.customerCountry = "";
    } else {
      alert("Plesae fill all the fields");
    }
  }
  async ChangeData() {
    const allData = {
      firstName: this.customerFirstNames,
      lastName: this.customerLastNames,
      number: this.customerNumbers,
      gender: this.customerGenders,
      age: this.cutomerAges,

      locality: this.customerLocalitys,
      city: this.customerCitys,
      state: this.customerStates,
      country: this.customerCountrys,
      pin: this.customerPins,
    };
    if (
      this.customerFirstNames != "" &&
      this.customerLastNames != "" &&
      this.customerGender != "" &&
      this.customerNumber > 0 &&
      this.cutomerAge > 0 &&
      this.customerPins > 0 &&
      this.customerLocality != "" &&
      this.customerCity != "" &&
      this.customerState != "" &&
      this.customerCountry != ""
    ) {
      const response = await axios.put(
        "http://localhost:3000/customerData/" + this.$store.state.csId + "/",
        allData
      );
    } else {
      alert("Plesae fill all the fields");
    }
  }
}
