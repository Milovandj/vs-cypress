/// <reference types="Cypress" />

import { loginPage} from '../page_objects/login';
import { addBoardPage } from '../page_objects/addBoard';

describe('TO add new board', ()=>{

let boardsTitle = "nekititle"

before('login', ()=>{
    cy.visit('/login')
    loginPage.login(
        Cypress.env('EMAIL'),
        Cypress.env('PASSWORD')
)
    cy.url().should('not.include', '/login')
})
    it('add board', ()=>{
    cy.intercept({
        method: 'POST',
        url:'https://cypress-api.vivifyscrum-stage.com/api/v2/boards'
    }).as('addBoard')

    cy.visit('/')
    addBoardPage.addingBoard(boardsTitle)
    cy.wait('@addBoard').then(interseption=>{
        expect(interseption.response.statusCode).to.exist
        expect(interseption.response.statusCode).eq(201)
})
    cy.url().should('include', '/boards')
    addBoardPage.backlogBar.should('be.visible')
    addBoardPage.boardLength.should('have.length', 1)

})

})