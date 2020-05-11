import { shallowMount } from "@vue/test-utils";
import ProductSorter from "@/components/ProductSorter.vue";

describe("ProductSorter .vue", () => {
  it("display the radio buttons", () => {
    const wrapper = shallowMount(ProductSorter, {});

    expect(wrapper.text()).toMatch("Preis");
    expect(wrapper.text()).toMatch("Name");
  });
});
