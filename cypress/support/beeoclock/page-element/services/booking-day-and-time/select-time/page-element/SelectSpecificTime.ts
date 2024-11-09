export class SelectSpecificTime {

    public getComponent(time: string): any {
        return cy.get('.border-2').contains(time)
    }

    public getElement(time: string): any {
        return this.getComponent(time)
            .should('be.visible')
            .scrollIntoView()
    }

    public getNotExistingElement(time: string): any {
        return this.getComponent(time)
            .should('not.exist')
    }
}