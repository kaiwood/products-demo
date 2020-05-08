<template>
  <div v-if="product">
    <img alt="Product image" :src="product.images[0].url" />
    {{ product.name}} by {{ product.brand.name }}
  </div>
  <div v-else>Bitte Produkt wählen</div>
</template>

<script>
export default {
  name: "ProductPreview",
  props: ["product"]
};
</script>


<style scoped>
div {
  display: flex;
  align-items: center;
  height: 80px;
  margin-bottom: 1rem;
}

img {
  height: 70px;
  margin-right: 1rem;
}
</style>
