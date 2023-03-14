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
