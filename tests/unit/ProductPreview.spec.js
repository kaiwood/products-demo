import { shallowMount } from "@vue/test-utils";
import ProductTableImage from "@/components/ProductPreview.vue";

describe("ProductPreview.vue", () => {
  it("renders correcty", () => {
    const product = {
      id: 1,
      name: "foo",
      brand: {
        name: "bar",
      },
      images: [{ url: "http://foo.bar" }],
    };

    const wrapper = shallowMount(ProductTableImage, {
      propsData: { product },
    });

    expect(wrapper.text()).toMatch("foo");
  });
});
