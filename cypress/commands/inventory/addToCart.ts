import { inventorySelectors } from "../../selectors/inventorySelectors";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Add given product to cart.
       * @param productName name of the product to be added
       * @example
       * cy.addToCart('Sauce Labs Backpack')
       *
       */
      addToCart: typeof addToCart;
    }
  }
}

export const addToCart = (productName: string) => {
  Cypress.log({
    displayName: "addToCart",
    message: productName,
    name: "Add to cart",
  });

  cy.contains(inventorySelectors.productCard, productName)
    .scrollIntoView()
    .find(inventorySelectors.addProductBtn)
    .click();
};
