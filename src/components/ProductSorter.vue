<template>
  <div>
    Sortieren:
    <label @click="$emit('sortByPrice')">
      <input type="radio" name="sort" value="price" />
      <span class="radio"></span>
      <span class="text">Preis</span>
    </label>

    <label @click="$emit('sortByName')">
      <input type="radio" name="sort" value="name" />
      <span class="radio"></span>
      <span class="text">Name</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "ProductSorter"
};
</script>

<style scoped>
div {
  height: 2.5rem;
}

label {
  position: relative;
  cursor: pointer;
}

input {
  height: 0;
  width: 0;
  opacity: 0;
  position: absolute;
}

.radio {
  position: absolute;
  top: 0;
  left: 0;
  height: 21px;
  width: 21px;
  background-color: blueviolet;
  border-radius: 50%;
}

.radio:after {
  content: "";
  position: absolute;
  display: none;
}

label input:checked ~ .radio:after {
  display: block;
}

label .radio:after {
  top: 7px;
  left: 7px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: white;
}

.text {
  margin-left: 26px;
  margin-right: 5px;
  font-size: 16px;
}
</style>
