<template>
  <div id="app">
    <h1>Produkte</h1>

    <product-sorter @sortByName="sortByName" @sortByPrice="sortByPrice" />

    <product-listing :products="products" />

    <product-navigation
      :prev-page="prevPage"
      :next-page="nextPage"
      :from="from"
      :to="to"
      :total="total"
      @navigateTo="navigateTo"
    ></product-navigation>
  </div>
</template>

<script>
import axios from "axios";
import ProductSorter from "./components/ProductSorter.vue";
import ProductListing from "./components/ProductListing.vue";
import ProductNavigation from "./components/ProductNavigation.vue";

export default {
  name: "App",
  components: {
    ProductSorter,
    ProductListing,
    ProductNavigation
  },

  data() {
    return {
      products: [],
      currentPage: 1,
      nextPage: undefined,
      prevPage: undefined,
      lastPage: 0,
      from: 0,
      to: 0,
      total: 0
    };
  },

  created() {
    const initialUrl = `${process.env.VUE_APP_API_URL}?page=1`;
    this.navigateTo(initialUrl);
  },

  methods: {
    async navigateTo(url) {
      const json = (await axios.get(url)).data;

      this.products = json.data;
      this.currentPage = json.current_page;
      this.lastPage = json.last_page;
      this.from = json.from;
      this.to = json.to;
      this.total = json.total;

      this.prevPage = json.prev_page_url;
      this.nextPage = json.next_page_url;
    },

    sortByPrice() {
      this.products = this.products.sort((a, b) => a.price - b.price);
    },

    sortByName() {
      this.products = this.products.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
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
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
}
</style>
