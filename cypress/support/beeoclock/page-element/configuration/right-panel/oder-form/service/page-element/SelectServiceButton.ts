export class SelectServiceButton {
    public getElement(): any {
        return cy
            // .contains('Wybierz usługę')
            .get('#open-service-list-to-select-service')
            .scrollIntoView().should('be.visible')

    }
}
