<template>
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
</template>

<script>
import ProductName from "./ProductName.vue";
import ProductPrice from "./ProductPrice.vue";
import ProductImage from "./ProductImage.vue";

export default {
  name: "ProductTable",
  props: ["products"],
  components: {
    ProductName,
    ProductPrice,
    ProductImage
  }
};
</script>

<style scoped>
table {
  width: 100%;
}

th {
  text-align: left;
}
</style>
