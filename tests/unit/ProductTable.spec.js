import { shallowMount } from "@vue/test-utils";
import ProductTable from "@/components/ProductTable.vue";

const products = [
  {
    id: 1,
    name: "foo",
    price: 100,
    images: [{ url: "http://foo.bar/image.png" }],
  },
  {
    id: 2,
    name: "bar",
    price: 100,
    images: [{ url: "http://foo.bar/image.png" }],
  },
  {
    id: 3,
    name: "baz",
    price: 100,
    images: [{ url: "http://foo.bar/image.png" }],
  },
];

describe("ProductTable.vue", () => {
  it("displays the products", () => {
    const wrapper = shallowMount(ProductTable, {
      propsData: { products },
    });

    expect(wrapper.html()).toMatch(
      '<product-table-name-stub name="foo"></product-table-name-stub>'
    );
    expect(wrapper.html()).toMatch(
      '<product-table-name-stub name="bar"></product-table-name-stub>'
    );
    expect(wrapper.html()).toMatch(
      '<product-table-name-stub name="baz"></product-table-name-stub>'
    );
  });

  it("emits the sort events", () => {
    const wrapper = shallowMount(ProductTable, {
      propsData: { products },
    });

    wrapper.find("#product-name").trigger("click");
    expect(wrapper.emitted().sort[0]).toEqual(["name"]);

    wrapper.find("#product-price").trigger("click");
    expect(wrapper.emitted().sort[1]).toEqual(["price"]);
  });
});
