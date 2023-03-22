/// <refrence types="Cypress" />

import { loginPage } from "../page_object/loginPage";
import { myBoard } from "../page_object/myBoard";


describe("delete board test", () => {
  before("visit login page", () => {
    cy.visit("/login");
    loginPage.login(Cypress.env("testUserEmail"), Cypress.env("testUserPassword"));
    cy.url().should("include", "/my-organizations");
        myOrganizationsPage.addOrganizationButton.click();
       myOrganizationsPage.addOrganization("nekititle");
       myBoard.boardButton.click();
       myBoard.addBoard("nekititle");
  });

  it("Delete board", () => {
    cy.get('.vs-c-list > li').last().click();
    cy.get("button").contains("Delete").click();
    cy.get('.el-input__inner').eq(0).should('be.visible').type("milovandjuric996");
    cy.get("button").contains("Yes").click();
  });

});