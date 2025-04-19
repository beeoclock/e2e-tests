export class BookButton {
    public getElement(): any {
        return cy.contains('button', ' Przejdź do koszyka, aby dokończyć zamówienie ')
            .should('be.visible')
            .scrollIntoView()
    }
}