import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { PageFactory } from "cypress/pages/PageFactory";

const loginPage = PageFactory.getLoginPage();

Given("A web browser is at the saucelabs login page", () => {
  cy.visit("/");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username: string, password: string) => {
  loginPage.submitLogin(username, password)
});

When("A user provides incorrect credentials {string} and {string}, and clicks on the login button", (username: string, password: string) => {
  loginPage.submitLogin(username, password)
});

When("A user provides incorrect credentials, and clicks on the login button", (table: any) => {
  table.hashes().forEach((row: any) => {
    cy.log(row.username);
    cy.log(row.password);
    loginPage.submitLogin(row.username, row.password)
  });
});

Then("the url will contains the inventory subdirectory", () => {
  cy.url().should("contains", "/inventory.html");
});

Then("The error message {string} is displayed", (errorMessage) => {
  loginPage.elements.errorMessage().should("have.text", errorMessage);
});
