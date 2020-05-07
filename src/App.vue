<template>
  <div id="app">
    <h1>Products</h1>

    <product-table :products="products"></product-table>

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
import ProductTable from "./components/ProductTable.vue";
import ProductPagination from "./components/ProductPagination.vue";

export default {
  name: "App",
  components: { ProductTable, ProductPagination },

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
</style>
