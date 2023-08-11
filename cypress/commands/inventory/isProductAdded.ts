import { inventorySelectors } from "../../selectors/inventorySelectors";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Returns true or false depending on the given product's button status.
       * @param productName name of the product to be checked
       * @example
       * cy.isProductAdded('Sauce Labs Backpack').should('be.false')
       */

      isProductAdded(productName: string): Chainable<boolean>;
    }
  }
}

export const isProductAdded = (productName: string) => {
  Cypress.log({
    displayName: "isProductAdded",
    message: productName,
    name: "Product button changed",
  });

  cy.contains(inventorySelectors.productCard, productName)
    .scrollIntoView()
    .find(inventorySelectors.ctaBtn)
    .invoke("text")
    .then((text) => {
      return text === "REMOVE";
    });
};
