import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Template from "../Customer/CustomerProfile.vue";
import { Getter, Action } from "vuex-class";
import { mapGetters } from "vuex";

@Component({
  mixins: [Template],
  components: {},
})
export default class ProductList extends Vue {
  @Action("editCustomerData", { namespace: "CustomerModule" })
  public editCustomerData!: any;
  customerData = [];

  async created() {
    const response = await axios.get("http://localhost:3000/customerData");
    this.customerData = response.data;
  }

  async DeleteData(id: number) {
    const allData = await axios
      .delete("http://localhost:3000/customerData/" + id)
      .then(() => {
        const z = this.customerData.map((data: any) => data.id).indexOf(id);
        this.customerData.splice(z, 1);
      });
  }
  EditData(item: any) {
    this.editCustomerData(item);
  }
}
