<template>
  <div class="navigation">
    <div class="button">
      <button :disabled="!prevPage" @click="$emit('navigateTo', prevPage)">« Vorherige</button>
    </div>

    <div class="info">
      <span>{{from}} bis {{to}} von {{total}}</span>
    </div>

    <div class="button">
      <button :disabled="!nextPage" @click="$emit('navigateTo', nextPage)">Nächste »</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductPagination",
  props: ["nextPage", "prevPage", "from", "to", "total"],

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
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
}

.button {
  background: white;
}

button {
  background: white;
  border: 1px solid blueviolet;
  outline: 0;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 16px;
  cursor: pointer;
}

button:disabled {
  border: 1px solid white;
  cursor: default;
}

@media (max-width: 800px) {
  .info {
    display: none;
  }
}
</style>
