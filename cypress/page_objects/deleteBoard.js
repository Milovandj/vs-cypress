class DeleteBoard {
    get boardList() {
        return cy.get(".vs-c-list--boards");
    }
    get board() {
        return cy.get("li").eq(-2);
    }
    get listItems() {
        return cy.get("ul");
    }
    get configureIcon() {
        return cy.get(".vs-c-site-logo ").eq(-1);
    }
    get deleteButton() {
        return cy.get(".vs-c-btn").eq(2);
    }
    delete() {
        this.board.should("exist");
        this.board.click();
        this.listItems.should("be.visible");
        this.configureIcon.should("exist");
        this.configureIcon.click();
        this.deleteButton.click();
    };
};
export const deleteBoard = new DeleteBoard();