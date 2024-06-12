export class SelectedService {
    public getElement(): any {
        return cy.get('.text-md')
            .should('be.visible')
            .scrollIntoView()
    }
}