import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Template from "../Style/StyleManager.vue";
import { mapGetters } from "vuex";
@Component({
  mixins: [Template],
  components: {},
  computed: {
    ...mapGetters([
      "styleColors",
      "styleSize",
      "styleButtonColor",
      "styleBorder",
    ]),
  },
})
export default class ReportTool extends Vue {
  //product//
  productColor = null;
  productFontSize = null;
  productButtonColor = null;
  productBorder = null;

  salePageColor = null;
  saleFontSize = null;
  saleButtonColor = null;
  saleBorder = null;

  reportPageColor = null;
  reportFontSize = null;
  reportButtonColor = null;
  reportBorder = null;
  //   async created() {
  //     let response = await axios.get("http://localhost:3000/customerData");
  //     this.customerData = response.data;
  //   }
  //product//

  saveProductStyle() {
    this.$store.state.productPageColor = this.productColor;
    this.$store.state.productFontSize = this.productFontSize;
    this.$store.state.productButtonColor = this.productButtonColor;
    this.$store.state.productBorder = this.productBorder;
  }
  saveSaleStyle() {
    this.$store.state.salePageColor = this.salePageColor;
    this.$store.state.saleFontSize = this.saleFontSize;
    this.$store.state.saleButtonColor = this.saleButtonColor;
    this.$store.state.saleBorder = this.saleBorder;
  }
  saveReportStyle() {
    this.$store.state.reportPageColor = this.reportPageColor;
    this.$store.state.reportFontSize = this.reportFontSize;
    this.$store.state.reportButtonColor = this.reportButtonColor;
    this.$store.state.reportBorder = this.reportBorder;
  }
}
