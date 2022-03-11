import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import store from "../../store";
import Template from "../Products/ProductsList.vue";
import { mapGetters, mapActions } from "vuex";

@Component({
  mixins: [Template],
  components: {},

  computed: {
    ...mapGetters([
      "productcolor",
      "productFontSize",
      "productBorder",
      "productsList",
      "productDetailsList",
      "editProductList",
      "removeProductList",
    ]),
  },
  methods: {
    ...mapActions(["editData", "deleteData"]),
  },
})
export default class ProductList extends Vue {
  search = "";
  getData = [];
  filteredData = [];
  editData!: any;
  deleteData!: any;

  Search() {
    const z = this.getData.filter((arr: any) =>
      arr.product
        .trim()
        .toLowerCase()
        .includes(this.search.trim().toLocaleLowerCase())
    );
    this.filteredData = z;
  }

  async created() {
    const response = await axios.get("http://localhost:3000/products");
    this.getData = response.data;
    this.Search();
  }

  async DeleteData(id: number) {
    const allData = await axios
      .delete("http://localhost:3000/Products/" + id)
      .then(() => {
        const z = this.filteredData.map((data: any) => data.id).indexOf(id);
        this.filteredData.splice(z, 1);
      });

    this.deleteData(allData);
  }
  EditData(item: object) {
    this.editData(item);
  }
}
