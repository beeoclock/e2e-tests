export class SelectSpecificHour {
    public getElement(time: string): any {
        cy.get('.ion-delegate-host.popover-viewport')
            .find('ion-datetime').shadow()
            .find('ion-picker-column').first()
            .find('ion-picker-column-option')
            .shadow().as('element');

        return cy.get('@element')
            .contains(time).as('timeElement')
            .scrollIntoView()
            .get('@timeElement').find('button')
            .scrollIntoView()
            // .should('have.class', 'option-active')
            .should('be.visible');
    }
}
