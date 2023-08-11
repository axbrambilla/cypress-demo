import { loginSelectors } from "../../selectors/loginSelectors";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Verify if given error message is displayed on the screen
       * @param errorMessage text of the expected error
       * @example
       * cy.isErrorDisplayed('invalid username')
       *
       */
      isErrorDisplayed: typeof isErrorDisplayed;
    }
  }
}

export const isErrorDisplayed = (errorMessage: string) => {
  cy.get(loginSelectors.errorMsg)
    .should("be.visible")
    .and("contain.text", errorMessage);
};
