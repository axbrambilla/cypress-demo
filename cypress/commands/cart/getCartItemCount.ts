import { headerSelectors } from "../../selectors/headerSelectors";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Get the cart items number.
       * @example
       * cy.getCartItemCount()
       *
       */
      getCartItemCount(): Chainable<number>;
    }
  }
}
export const getCartItemCount = () => {
  Cypress.log({
    displayName: "getCartItemCount",
    message: "Cart badge count",
    name: "Cart badge count",
  });

  cy.get(headerSelectors.cartBadge)
    .invoke("text")
    .then((cartItemCountText) => {
      const cartItemCount =
        cartItemCountText !== "" ? parseInt(cartItemCountText) : 0;
      return cartItemCount;
    });
};
