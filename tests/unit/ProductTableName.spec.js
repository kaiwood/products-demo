import { shallowMount } from "@vue/test-utils";
import ProductTableName from "@/components/ProductTableName.vue";

describe("ProductTableName.vue", () => {
  it("displays the name of the product", () => {
    const name = "Awesome product";
    const wrapper = shallowMount(ProductTableName, {
      propsData: { name },
    });

    expect(wrapper.text()).toMatch("Awesome product");
  });
});
