<template>
  <table>
    <thead>
      <tr>
        <th>
          <span id="product-name" @click="$emit('sort', 'name')">Name</span>
        </th>
        <th>
          <span id="product-price" @click="$emit('sort', 'price')">Price</span>
        </th>
        <th>Image</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>
          <product-table-name :name="product.name"></product-table-name>
        </td>
        <td>
          <product-table-price :price="product.price"></product-table-price>
        </td>
        <td>
          <product-table-image :src="product.images[0].url"></product-table-image>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import ProductTableName from "./ProductTableName.vue";
import ProductTablePrice from "./ProductTablePrice.vue";
import ProductTableImage from "./ProductTableImage.vue";

export default {
  name: "ProductTable",
  props: ["products"],
  components: {
    ProductTableName,
    ProductTablePrice,
    ProductTableImage
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
