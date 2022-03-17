import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Template from "../Customer/CustomerDetails.vue";
import { mapGetters, mapActions } from "vuex";
import { state } from "@/store/CustomerStore/CustomerState";
import { Action, Getter } from "vuex-class";
@Component({
  mixins: [Template],
  components: {},
  // computed: {
  //   ...mapGetters([]),
  // },
  // methods: {
  //   ...mapActions(["addCustomerData"]),
  // },
})
export default class CustomerDetails extends Vue {
  // customerFirstNames!: string;
  // customerLastNames!: string;
  // customerGenders!: string;
  // customerNumbers!: number;
  // cutomerAges!: number;
  // customerLocalitys!: string;
  // customerCitys!: string;
  // customerStates!: string;
  // customerCountrys!: string;
  // customerPins!: number;
  @Action("addCustomerData", { namespace: "CustomerModule" })
  public addCustomerData!: any;

  // CutomerToggle!: boolean;

  toggle = state.CutomerToggle;
  customerFirstName = state.customerFirstName;
  customerLastName = state.customerLastName;
  customerGender = state.customerGender;
  customerNumber = state.customerNumber;
  cutomerAge = state.cutomerAge;

  customerLocality = state.customerLocality;
  customerCity = state.customerCity;
  customerState = state.customerState;
  customerCountry = state.customerCountry;
  customerPin = state.customerPin;
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
      this.customerFirstName = "";
      // this.customerLastName = "";
      // this.customerGender = "";
      // this.customerNumber = 0;
      // this.cutomerAge = 0;
      // this.customerPin = 0;
      // this.customerLocality = "";
      // this.customerCity = "";
      // this.customerState = "";
      // this.customerCountry = "";
    } else {
      alert("Plesae fill all the fields");
    }
  }
  async ChangeData() {
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
      const response = await axios.put(
        "http://localhost:3000/customerData/" + state.csId + "/",
        allData
      );
      this.customerFirstName = "";
      this.customerLastName = "";
      this.customerGender = "";
      this.customerNumber = 0;
      this.cutomerAge = 0;
      this.customerPin = 0;
      this.customerLocality = "";
      this.customerCity = "";
      this.customerState = "";
      this.customerCountry = "";
      state.CutomerToggle = true;
      this.toggle = true;
      state.customerFirstName = "";
      state.customerLastName = "";
      state.customerGender = "";
      state.customerNumber = 0;
      state.cutomerAge = 0;

      state.customerLocality = "";
      state.customerCity = "";
      state.customerState = "";
      state.customerCountry = "";
      state.customerPin = 0;
    } else {
      alert("Plesae fill all the fields");
    }
  }
}
