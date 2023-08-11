import { loginSelectors } from "../../selectors/loginSelectors";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Logs in with a given user and saves the session.
       * @param username username of the user you want to log in
       * @param password user password
       * @param saveSession save login for future tests
       * @example
       * cy.login('username', 'password')
       *
       */
      login: typeof login;
    }
  }
}

export const login = (
  username: string,
  password: string,
  saveSession: boolean = true
) => {
  const loginSteps = () => {
    cy.visit("/");
    cy.get(loginSelectors.usernameInput).type(username);
    cy.get(loginSelectors.passwordInput).type(password, { log: false });
    cy.get(loginSelectors.loginBtn).click();
  };

  saveSession ? cy.session(username, loginSteps) : loginSteps();
};
