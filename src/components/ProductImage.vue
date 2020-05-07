<template>
  <img src="../assets/lorempixel.jpg" />
</template>

<script>
export default {
  name: "ProductImage",
  props: ["src"]
};
</script>

<style scoped>
img {
  height: 50px;
}
</style>
