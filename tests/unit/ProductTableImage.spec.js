import { shallowMount } from "@vue/test-utils";
import ProductTableImage from "@/components/ProductTableImage.vue";

describe("ProductTableImage.vue", () => {
  it("displays the image of the product", () => {
    const src = "http://foo.bar/image.png";
    const wrapper = shallowMount(ProductTableImage, {
      propsData: { src },
    });

    expect(wrapper.find("img").attributes("alt")).toBe("Product image");
  });
});
