import { inventorySelectors } from "../../selectors/inventorySelectors";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Remove given product from the cart.
       * This command operates directly on the inventory page
       * @param productName name of the product to be added
       * @example
       * cy.removeProduct('Sauce Labs Backpack')
       *
       */
      removeProduct: typeof removeProduct;
    }
  }
}

export const removeProduct = (productName: string) => {
  Cypress.log({
    displayName: "removeProduct",
    message: productName,
    name: "Remove product",
  });

  cy.contains(inventorySelectors.productCard, productName)
    .scrollIntoView()
    .find(inventorySelectors.removeProductBtn)
    .contains("REMOVE")
    .click();
};
