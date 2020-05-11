import { shallowMount } from "@vue/test-utils";
import ProductListingPrice from "@/components/ProductListingPrice.vue";

describe("ProductListingPrice.vue", () => {
  it("formats the price correctly", () => {
    const price = 1000;
    const wrapper = shallowMount(ProductListingPrice, {
      propsData: { price },
    });

    expect(wrapper.text()).toMatch("10,00 EUR");
  });
});
