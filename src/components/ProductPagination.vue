<template>
  <div class="pagination">
    <ul>
      <li v-for="page in allPages" :key="page">
        <span v-if="page == currentPage" class="page-num">{{page}}</span>
        <a v-else href="#" @click.prevent="navigateTo(page)" class="page-num">{{page}}</a>
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

.pagination {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.page-num {
  border: 1px solid grey;
  border-radius: 5px;
  padding: 0.5rem;
  padding: 0.5rem 0.7rem;
  text-decoration: none;
  color: black;
}

span.page-num {
  border-color: white;
}
</style>
