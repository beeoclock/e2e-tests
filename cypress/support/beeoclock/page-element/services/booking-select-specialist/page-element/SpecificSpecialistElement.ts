export class SpecificSpecialistElement {
    public getElement(specialist: string): any {
        return cy.get('.w-full.group').contains(specialist).parent().parent().find('.bi.bi-chevron-right').should('be.visible')
            .scrollIntoView()
    }
}