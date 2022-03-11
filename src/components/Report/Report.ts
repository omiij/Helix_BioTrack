import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import Template from "./ReportTool.vue";
import { mapGetters } from "vuex";
@Component({
  mixins: [Template],
  components: {},
  computed: {
    ...mapGetters([
      "reportBorder",
      "reportPageColor",
      "reportFontSize",
      "productsList",
    ]),
  },
})
export default class ReportTool extends Vue {
  getData = [];

  async created() {
    const response = await axios.get("http://localhost:3000/buyCart");
    this.getData = response.data;
  }
}
