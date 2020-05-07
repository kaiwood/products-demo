<template>
  <span>{{formatPrice(price)}}</span>
</template>

<script>
export default {
  name: "ProductPrice",
  props: ["price"],

  methods: {
    // We use a method instead of a filter here, because filters
    // are now deprecated in Vue 3.
    formatPrice(value) {
      return `${String((value / 100).toFixed(2)).replace(".", ",")} EUR`;
    }
  }
};
</script>
