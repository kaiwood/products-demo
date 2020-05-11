<template>
  <div>
    <div v-for="product in products" :key="product.id" class="product">
      <div class="image">
        <img src="../assets/lorempixel.jpg" :data-src="product.images[0].url" class="lazy" />
      </div>

      <div class="description">
        <p class="name">
          {{product.name}}
          <span class="brand">({{product.brand.name}})</span>
        </p>

        <p class="price">
          <product-listing-price :price="product.price" />
        </p>

        <button class="button">Details</button>

        <p
          class="more"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta numquam ut et accusantium animi aspernatur rerum enim officiis, sequi repudiandae, doloribus ea dolores velit quasi alias dolore. Temporibus, nisi quasi.</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductListingPrice from "./ProductListingPrice";

export default {
  props: ["products"],
  components: { ProductListingPrice },

  data() {
    return {
      scrollListener: undefined
    };
  },

  mounted() {
    this.scrollListener = window.addEventListener("scroll", this.lazyLoad);
    window.scrollTo(0, 0);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.lazyLoad);
  },

  methods: {
    lazyLoad() {
      let images = [].slice.call(document.querySelectorAll("img.lazy"));
      let active = false;
      if (active === false) {
        active = true;
        setTimeout(() => {
          images.forEach(lazyImage => {
            if (
              lazyImage.getBoundingClientRect().top <= window.innerHeight &&
              lazyImage.getBoundingClientRect().bottom >= 1400 &&
              getComputedStyle(lazyImage).display !== "none"
            ) {
              lazyImage.src = lazyImage.dataset.src;
              lazyImage.classList.remove("lazy");
              images = images.filter(image => {
                return image !== lazyImage;
              });
            }
          });
          active = false;
        }, 200);
      }
    }
  }
};
</script>

<style scoped>
.product {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-size: 21px;
}

.image {
  margin-bottom: 2rem;
  min-width: 50%;
}

.description {
  padding: 1rem;
  border: 1px solid darkgrey;
  border-radius: 10px;
}

img {
  display: block;
  border-radius: 10px;
  width: 100%;
}

p {
  margin-top: 0;
}

.name {
  text-transform: uppercase;
}

.brand {
  color: darkgrey;
}

.price {
  font-style: italic;
}

.button {
  background: blueviolet;
  color: white;
  width: 100%;
  font-size: 21px;
  height: 50px;
  margin-bottom: 1rem;
  border-radius: 10px;
  outline: none;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.button:active {
  box-shadow: 0 0;
}

.more {
  color: black;
  font-size: 18px;
}

@media (min-width: 800px) {
  .product {
    flex-direction: row;
    padding: 0;
  }

  .image {
    margin-bottom: 0;
    height: 100%;
  }

  .description {
    width: 50%;
    margin-left: 2rem;
  }
}
</style>
