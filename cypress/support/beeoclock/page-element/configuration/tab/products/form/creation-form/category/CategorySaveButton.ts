export class CategorySaveButton {

    public getElement(): any {
        return cy.get('.flex.items-center.mt-2.ml-2')
            .find('.button-solid').contains('Zapisz')
            .scrollIntoView().should('be.visible')

    }
}