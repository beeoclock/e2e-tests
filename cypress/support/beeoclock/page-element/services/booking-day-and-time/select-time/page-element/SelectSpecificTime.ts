export class SelectSpecificTime {

    public getElements(): any {
        return cy.get('.grid.w-full.grid-cols-3').find('.border-2')
    }

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