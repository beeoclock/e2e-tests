export class ServiceDate {
    public getElement(): any {
        return cy.get('.flex.justify-start.gap-2.p-3')
            .find('.inline-flex.items-center')
            .should('be.visible')
        // .scrollIntoView()
    }
}