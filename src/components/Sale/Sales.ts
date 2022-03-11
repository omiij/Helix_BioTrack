import Template from "../Sale/SalesComp.vue";
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
@Component({
  mixins: [Template],
  components: {},
  computed: {
    ...mapGetters([
      "saleBorder",
      "salePageColor",
      "saleFontSize",
      "saleButtonColor",
    ]),
  },
  methods: {
    ...mapActions([]),
  },
})
export default class Sales extends Vue {
  deleteDataCart!: any;
  overlay = false;
  absolute = true;
  selectCustomer = "";
  customerData = [];
  customerFilterData = [];
  qty = 0;
  activeOverlayId = 0;
  result = false;
  cartData = this.$store.state.cartProducts;
  getData = [];

  total_amount = localStorage.getItem("total_Amount");

  sendCustomerData() {
    const People = this.customerData.filter((data: any) => {
      return this.selectCustomer === data.firstName;
    });
    this.customerFilterData.push(People[0]);
    console.log(this.customerFilterData);
  }

  async created() {
    const response = await axios.get("http://localhost:3000/products");
    this.getData = response.data;
    const responseCart = await axios.get("http://localhost:3000/cartProduct");
    this.cartData = responseCart.data;
    const allitems = responseCart.data;
    const customer = await axios.get("http://localhost:3000/customerData");
    this.customerData = customer.data;
    this.$store.state.totalAmount = allitems.reduce((acc: any, curr: any) => {
      return acc + curr.total;
    }, 0);
  }
  async addToCart(item: any, count: string) {
    const TempItem = this.cartData.filter((data: any) => {
      return data.id === item.id;
    });
    const addItems = {
      product: item.product as string,
      unit: count as string,
      total:
        parseFloat(item.price) * parseFloat(count) +
        (parseFloat(item.price) * parseFloat(item.percentage)) / 100,
      id: item.id,
    };

    if (TempItem.length === 0) {
      this.cartData.push(addItems);
    } else {
      this.cartData.forEach((data: any) => {
        if (data.id === item.id) {
          data.unit = data.unit + addItems.unit;
          data.total = data.total + addItems.total;
        }
      });
    }

    this.overlay = false;
    this.$store.dispatch("addToCart", { item, count });
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  async deleteAllData() {
    for (let a = 0; a <= this.cartData.length + 2; a++) {
      this.cartData.pop();
    }
    this.$store.state.totalAmount = 0;
    this.deleteDataCart();
  }
  async buyNow() {
    const dataUploadded: any = this.cartData;
    const customerData: any = this.customerFilterData[0];

    if (dataUploadded.length === 0) {
      alert("Please add item in cart");
      return;
    }
    if (this.customerFilterData.length === 0) {
      alert("Please select a customer");
      return;
    }

    const timeStamp = Date.now();
    const orderDate = `${new Date().getFullYear()}/${new Date().getMonth()}/${new Date().getDate()}`;
    const Time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    const allDataObject = {};
    dataUploadded.forEach(async (item: any) => {
      await axios.post(" http://localhost:3000/buyCart", {
        product: item.product,
        gender: item.gender,
        size: item.size,
        color: item.color,
        date: orderDate,
        Time: Time,
        timeStamp: timeStamp,
        tax: item.tax,
        unit: item.unit,
        price: item.price,
        total: item.total,
        firstName: customerData.firstName,
        lastName: customerData.lastName,
        number: customerData.number,
        customergender: customerData.gender,
        age: customerData.age,
        locality: customerData.locality,
        city: customerData.city,
        state: customerData.state,
        country: customerData.country,
        pin: customerData.pin,
      });
    });

    this.deleteAllData();
  }

  addQty() {
    ++this.qty;
  }
  minusQty() {
    if (this.qty === 0) {
      return;
    }
    --this.qty;
  }
  select(id: number) {
    this.overlay = true;
    this.activeOverlayId = id;
    this.qty = 0;
  }
}
