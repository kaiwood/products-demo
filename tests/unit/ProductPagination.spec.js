import { shallowMount } from "@vue/test-utils";
import ProductPagination from "@/components/ProductPagination.vue";

describe("ProductPagination.vue", () => {
  it("displays the available pages", () => {
    const propsData = {
      currentPage: 1,
      lastPage: 14,
      from: 1,
      to: 15,
      total: 200,
    };

    const wrapper = shallowMount(ProductPagination, {
      propsData,
    });

    expect(wrapper.text()).toMatch("1234567891011121314");
    expect(wrapper.text()).toMatch("1 bis 15 von 200");
  });
});
