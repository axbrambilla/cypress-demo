describe("Inventroy Suite", () => {
  beforeEach(() => {
    cy.loginSession(
      Cypress.env("STANDARD_USER"),
      Cypress.env("GLOBAL_PASSWORD")
    );
    cy.visit("/inventory.html");
  });

  it("Successfully add a product to the cart ", () => {
    cy.addToCart("Sauce Labs Backpack");
    cy.getCartItemCount().should("eq", 1);
    cy.isProductAdded("Sauce Labs Backpack").should("eq", true);
  });

  it("Sucessfully removes a product from the cart", () => {
    cy.addToCart("Sauce Labs Backpack");
    cy.isProductAdded("Sauce Labs Backpack").should("eq", true);
    cy.removeProduct("Sauce Labs Backpack");
    cy.isProductAdded("Sauce Labs Backpack").should("eq", false);
  });
});
