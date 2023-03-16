export const mainPageSelectors = {
  inventory: {
    item: ".inventory_item",
    addToCartButton: "[data-test=add-to-cart-sauce-labs-backpack]",
  },
  menu: {
    button: "#react-burger-menu-btn",
  },
  shoppingCart: {
    button: "#shopping_cart_container",
    badge: ".shopping_cart_badge",
    item: ".cart_item",
    checkout: "[data-test=checkout]",
    continueButton: "[data-test=continue]",
    finishButton: "[data-test=finish]",
    continueShoppingButton: "[data-test=continue-shopping]",
    inputs: {
      firstName: "[data-test=firstName]",
      lastName: "[data-test=lastName]",
      zipCode: "[data-test=postalCode]",
    },
  },
};
