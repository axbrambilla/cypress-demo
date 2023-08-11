describe("", () => {
  it("Should login successfully", () => {
    cy.login(Cypress.env("STANDARD_USER"), Cypress.env("GLOBAL_PASSWORD"));
    cy.location("pathname").should("eq", "/v1/inventory.html");
  });

  it("Should display error message when username is invalid", () => {
    cy.login("invalidUsername", "invalidPassword");

    cy.get("[data-test=error]")
      .should("be.visible")
      .and(
        "contain.text",
        "Epic sadface: Username and password do not match any user in this service"
      );

    cy.url().should("eq", "https://www.saucedemo.com/v1/");
  });
});
