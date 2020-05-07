<template>
  <table>
    <thead>
      <tr>
        <th class="name-column" @click="$emit('sort', 'name')">
          <span id="product-name">Name</span>
        </th>
        <th class="price-column" @click="$emit('sort', 'price')">
          <span id="product-price">Price</span>
        </th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td class="name-column">
          <product-table-name :name="product.name"></product-table-name>
        </td>
        <td class="price-column">
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

thead::after {
  content: "";
  display: block;
  height: 2rem;
}

th {
  background: lightgrey;
  border: 0;
  border-radius: 5px;
  text-align: left;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

td {
  vertical-align: top;
}

.name-column {
  padding-left: 0.5rem;
}

.price-column {
  text-align: right;
  padding-right: 0.5em;
}
</style>
