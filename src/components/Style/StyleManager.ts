import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Template from "../Style/StyleManager.vue";
import { Getter } from "vuex-class";
import { state } from "@/store/StyleStore/StyleState";
@Component({
  mixins: [Template],
  // components: {},
  // computed: {
  //   ...mapGetters([
  //     "styleColors",
  //     "styleSize",
  //     "styleButtonColor",
  //     "styleBorder",
  //   ]),
  // },
})
export default class ReportTool extends Vue {
  @Getter("styleColors", { namespace: "StyleModule" })
  public styleColors!: [];
  @Getter("styleSize", { namespace: "StyleModule" })
  public styleSize!: [];
  @Getter("styleButtonColor", { namespace: "StyleModule" })
  public styleButtonColor!: [];
  @Getter("styleBorder", { namespace: "StyleModule" })
  public styleBorder!: [];
  //product//
  productColor = state.productPageColor;
  productFontSize = state.productFontSize;
  productButtonColor = state.productButtonColor;
  productBorder = state.productBorder;

  salePageColor = state.salePageColor;
  saleFontSize = state.saleFontSize;
  saleButtonColor = state.saleButtonColor;
  saleBorder = state.saleBorder;

  reportPageColor = state.reportPageColor;
  reportFontSize = state.reportFontSize;
  reportButtonColor = state.productButtonColor;
  reportBorder = state.reportBorder;
  //   async created() {
  //     let response = await axios.get("http://localhost:3000/customerData");
  //     this.customerData = response.data;
  //   }
  //product//

  saveProductStyle() {
    state.productPageColor = this.productColor;
    state.productFontSize = this.productFontSize;
    state.productButtonColor = this.productButtonColor;
    state.productBorder = this.productBorder;
  }
  saveSaleStyle() {
    state.salePageColor = this.salePageColor;
    state.saleFontSize = this.saleFontSize;
    state.saleButtonColor = this.saleButtonColor;
    state.saleBorder = this.saleBorder;
  }
  saveReportStyle() {
    state.reportPageColor = this.reportPageColor;
    state.reportFontSize = this.reportFontSize;
    state.reportButtonColor = this.reportButtonColor;
    state.reportBorder = this.reportBorder;
  }
}
