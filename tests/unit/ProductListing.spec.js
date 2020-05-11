import { shallowMount } from "@vue/test-utils";
import ProductListing from "@/components/ProductListing.vue";

const products = [
  {
    id: 1,
    name: "foo",
    brand: {
      name: "oof",
    },
    price: 100,
    images: [{ url: "http://foo.bar/image.png" }],
  },
  {
    id: 2,
    name: "bar",
    brand: {
      name: "rab",
    },
    price: 100,
    images: [{ url: "http://foo.bar/image.png" }],
  },
  {
    id: 3,
    name: "baz",
    brand: {
      name: "zab",
    },
    price: 100,
    images: [{ url: "http://foo.bar/image.png" }],
  },
];

describe("ProductListing .vue", () => {
  it("displays the products", () => {
    const wrapper = shallowMount(ProductListing, {
      propsData: { products },
    });

    expect(wrapper.text()).toMatch("foo");
    expect(wrapper.text()).toMatch("bar");
    expect(wrapper.text()).toMatch("baz");
  });
});
