class AddBoard {
    get addBoard(){
        return cy.get('.vs-c-list').eq(0)
    }
    get addBoardButton(){
        return cy.get('.vs-c-boards-item__title')
    }
    get boardTitle(){
        return cy.get('input[name="name"]')
    }
    get nextButton(){
        return cy.get('button[name="next_btn"]')
    }
    get boardsModal() {
        return cy.get(".vs-c-modal__body");
      }
    get okButton() {
        return this.find("button").last();
      }
    get backlogHead(){
        return cy.get('.vs-c-col__head-info')
    }
    get sprintHead() {
        return cy.get('.vs-c-col_head')
    }
    get backlogTitle(){
        return cy.get('.vs-c-col__title-backlog')
    }
    get boardLength(){
        return cy.get('.vs-c-task-card__body')
    }

addBoard(title) {       
    this.boardTitle.click();     
    this.nextButton.click();                
    this.okButton.click();        
    this.backlogHead.click();
    this.backlogTitle.click();       
    this.boardLength.click();    
}
}

export const addBoard = new AddBoard();