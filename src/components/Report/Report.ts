import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Template from "./ReportTool.vue";
import { Getter } from "vuex-class";
@Component({
  mixins: [Template],
  // components: {},
  // computed: {
  //   ...mapGetters(["reportBorder", "reportPageColor", "reportFontSize"]),
  // },
})
export default class ReportTool extends Vue {
  @Getter("reportBorder", { namespace: "StyleModule" })
  public reportBorder!: boolean;
  @Getter("reportPageColor", { namespace: "StyleModule" })
  public reportPageColor!: boolean;
  @Getter("reportFontSize", { namespace: "StyleModule" })
  public reportFontSize!: boolean;
  getData = [];

  async created() {
    const response = await axios.get("http://localhost:3000/buyCart");
    this.getData = response.data;
  }
}
