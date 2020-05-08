<template>
  <div id="app">
    <h1>Produkte</h1>

    <product-preview :product="selectedProduct"></product-preview>

    <product-table
      :products="products"
      :sort-direction-name="sortDirectionName"
      :sort-direction-price="sortDirectionPrice"
      @sort="sort"
      @select="selectProduct"
    ></product-table>

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
import ProductPreview from "./components/ProductPreview.vue";
import ProductTable from "./components/ProductTable.vue";
import ProductPagination from "./components/ProductPagination.vue";

export default {
  name: "App",
  components: { ProductPreview, ProductTable, ProductPagination },

  data() {
    return {
      products: [],
      currentPage: 1,
      lastPage: 0,
      from: 0,
      to: 0,
      total: 0,
      sortDirectionName: undefined,
      sortDirectionPrice: undefined,
      selectedProduct: undefined
    };
  },

  created() {
    this.navigateTo(1);
  },

  methods: {
    async navigateTo(page = 1) {
      const response = await fetch(
        `${process.env.VUE_APP_API_URL}?page=${page}`
      );

      const json = await response.json();

      this.products = json.data;
      this.currentPage = json.current_page;
      this.lastPage = json.last_page;
      this.from = json.from;
      this.to = json.to;
      this.total = json.total;

      this.sortDirectionName = undefined;
      this.sortDirectionPrice = undefined;
    },

    sort(row) {
      switch (true) {
        case row === "name" && this.sortDirectionName === "asc":
          this.sortByNameDesc();
          this.sortDirectionName = "desc";
          this.sortDirectionPrice = undefined;
          break;
        case row === "name":
          this.sortByNameAsc();
          this.sortDirectionName = "asc";
          this.sortDirectionPrice = undefined;
          break;

        case row === "price" && this.sortDirectionPrice === "asc":
          this.sortByPriceDesc();
          this.sortDirectionPrice = "desc";
          this.sortDirectionName = undefined;
          break;
        case row === "price":
          this.sortByPriceAsc();
          this.sortDirectionPrice = "asc";
          this.sortDirectionName = undefined;
          break;
      }
    },

    sortByPriceAsc() {
      this.products = this.products.sort((a, b) => a.price - b.price);
    },

    sortByPriceDesc() {
      this.products = this.products.sort((a, b) => b.price - a.price);
    },

    sortByNameAsc() {
      this.products = this.products.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    },

    sortByNameDesc() {
      this.products = this.products.sort((a, b) => {
        if (a.name < b.name) return 1;
        if (a.name > b.name) return -1;
        return 0;
      });
    },

    selectProduct(id) {
      this.selectedProduct = this.products.filter(p => p.id === id)[0];
    }
  }
};
</script>

<style>
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  line-height: 1.4;
}

#app {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
</style>
