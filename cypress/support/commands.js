Cypress.Commands.add("inputHasError", (selector, value = true) => {
  if (value) {
    cy.get(selector).should("have.class", "input_error");
  } else {
    cy.get(selector).should("not.have.class", "input_error");
  }
});
