import { shallowMount } from "@vue/test-utils";
import ProductTablePrice from "@/components/ProductTablePrice.vue";

describe("ProductTablePrice.vue", () => {
  it("formats the price correctly", () => {
    const price = 1000;
    const wrapper = shallowMount(ProductTablePrice, {
      propsData: { price },
    });

    expect(wrapper.text()).toMatch("10,00 EUR");
  });
});
