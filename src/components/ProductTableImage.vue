<template>
  <img alt="Product image" src="../assets/lorempixel.jpg" />
</template>

<script>
export default {
  name: "ProductImage",
  props: ["src"]
};
</script>

<style scoped>
img {
  height: 100px;
  display: block;
  margin: 0 auto 1rem auto;
  border-radius: 10px;
}
</style>
