<template>
  <div>
    <ul>
      <li v-for="page in allPages" :key="page">
        <span v-if="page == currentPage">{{page}}</span>
        <a v-else href="#" @click.prevent="navigateTo(page)">{{page}}</a>
      </li>
    </ul>
    <span>{{from}} bis {{to}} von {{total}}</span>
  </div>
</template>

<script>
export default {
  name: "ProductPagination",
  props: ["currentPage", "lastPage", "from", "to", "total"],

  computed: {
    allPages() {
      return [...Array(this.lastPage).keys()].map(i => i + 1);
    }
  },

  methods: {
    navigateTo(page) {
      this.$emit("navigate", page);
    }
  }
};
</script>

<style scoped>
ul,
li {
  display: inline;
  margin-left: 0;
  padding-left: 0;
}

li {
  margin-right: 1rem;
}
</style>
