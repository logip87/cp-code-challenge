export const USERS = {
  standard: {
    username: "standard_user",
    password: Cypress.env("standard_password"),
  },
  locked: {
    username: "locked_out_user",
    password: Cypress.env("locked_password"),
  },
  problem: {
    username: "problem_user",
    password: Cypress.env("problem_password"),
  },
  glitch: {
    username: "performance_glitch_user",
    password: Cypress.env("glitch_password"),
  },
};

export const USER_MENU_ITEMS = {
  allItems: "All Items",
  about: "About",
  logout: "Logout",
  reset: "Reset App State",
};

export const SHOP_MENU_ITEMS = {
  backpack: "Sauce Labs Backpack",
  bikeLight: "Sauce Labs Bike Light",
  tShirt: "Sauce Labs Bolt T-Shirt",
  jacket: "Sauce Labs Fleece Jacket",
  onesie: "Sauce Labs Onesie",
  tShirtRed: "Test.allTheThings() T-Shirt (Red)",
};

export const SHOP_MENU_ITEMS_DESCRIPTION = {
  backpack:
    "carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.",
  bikeLight:
    "A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.",
  tShirt:
    "Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.",
  jacket:
    "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.",
  onesie:
    "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.",
  tShirtRed:
    "This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.",
};

export const CHECKOUT_INFORMATION = {
  shipping: "Free Pony Express Delivery!",
};
