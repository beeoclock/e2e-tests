export class SelectSpecificMinute {
    public getElement(time: string): any {
        cy.get('.ion-delegate-host.popover-viewport')
            .find('ion-datetime').shadow()
            .find('ion-picker-column').last()
            .find('ion-picker-column-option')
            .contains(time).as('element');
        return cy.get('@element')
            .scrollIntoView()
            .should('have.class', 'option-active')
            .should('be.visible');
    }
}
