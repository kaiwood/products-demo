<template>
  <div id="app">
    <h1>Products</h1>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <product-name :name="product.name"></product-name>
          </td>
          <td>
            <product-price :price="product.price"></product-price>
          </td>
          <td>
            <product-image :src="product.images[0].url"></product-image>
          </td>
        </tr>
      </tbody>
    </table>

    <product-pagination
      :current-page="currentPage"
      :last-page="lastPage"
      :from="from"
      :to="to"
      :total="total"
      @navigate="navigateTo"
    ></product-pagination>
  </div>
</template>

<script>
import ProductName from "./components/ProductName.vue";
import ProductPrice from "./components/ProductPrice.vue";
import ProductImage from "./components/ProductImage.vue";
import ProductPagination from "./components/ProductPagination.vue";

export default {
  name: "App",
  components: { ProductName, ProductPrice, ProductImage, ProductPagination },

  data() {
    return {
      products: [],
      currentPage: 1,
      lastPage: 0,
      from: 0,
      to: 0,
      total: 0
    };
  },

  created() {
    this.navigateTo(1);
  },

  methods: {
    async navigateTo(page = 1) {
      const response = await fetch(
        `http://localhost:3000/api/products?page=${page}`
      );

      const json = await response.json();

      this.products = json.data;
      this.currentPage = json.current_page;
      this.lastPage = json.last_page;
      this.from = json.from;
      this.to = json.to;
      this.total = json.total;

      // window.scrollTo(0, 0);
    }
  }
};
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  line-height: 1.4;
}

#app {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

ul,
li {
  margin-left: 0;
  padding-left: 0;
}

table {
  width: 100%;
}

th {
  text-align: left;
}
</style>
