import { shallowMount } from "@vue/test-utils";
import ProductNavigation from "@/components/ProductNavigation.vue";

describe("ProductNavigation.vue", () => {
  it("displays the navigation", () => {
    const propsData = {
      prevPage: undefined,
      nextPage: undefined,
      from: 1,
      to: 15,
      total: 30,
    };
    const wrapper = shallowMount(ProductNavigation, {
      propsData,
    });

    expect(wrapper.text()).toMatch("1 bis 15 von 30");
  });
});
