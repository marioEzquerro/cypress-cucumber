class LoginPage {

  elements = {
    usernameInput: () => cy.get("#user-name"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("#login-button"),
    errorMessage: () => cy.get('h3[data-test="error"]'),
  };

  typeUsername(username: string) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password: string) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username: string, password: string) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLogin()
  }
}

export default LoginPage;
