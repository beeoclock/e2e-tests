export class SelectedService {
    public getElement(service: string): any {
        return cy.get('.text-md').contains(service)
            .should('be.visible')
            .scrollIntoView()
    }
}