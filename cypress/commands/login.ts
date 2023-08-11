import { loginSelectors } from "../selectors/loginSelectors";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Logs in with a given user and saves the session.
       * @param username username of the user you want to log in
       * @param password user passwird
       * @example
       * cy.login('username', 'password')
       *
       */
      loginSession: typeof loginSession;
      login: typeof login;
    }
  }
}

export const login = (username: string, password: string) => {
  cy.visit("/");
  cy.get(loginSelectors.usernameInput).type(username);
  cy.get(loginSelectors.passwordInput).type(password, { log: false });
  cy.get(loginSelectors.loginBtn).click();
};

export const loginSession = (username: string, password: string) => {
  cy.session(
    username,
    () => {
      login(username, password);
    },
    {
      cacheAcrossSpecs: true,
    }
  );
};
